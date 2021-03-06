const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });
const bcrypt = require('bcryptjs');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { transport, makeANiceEmail } = require('../mail');
const { hasPermission } = require('../utils');
const stripe = require('../stripe');
const TinyURL = require('tinyurl');

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(accountSid, authToken);

const Mutations = {
  async getState(parent, args, ctx, info) {
    // 0. Check user, of course
    // 1. Get Availability State as String and parse it
    const data = JSON.parse(args.state);
    console.log(data);
    // 2. Run Updates for
    return { message: 'Success!' };
  },
  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();
    // hash their pw
    password = await bcrypt.hash(args.password, 10);

    //create the user in the db
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ['ADMIN'] },
          contactPreference: { set: args.contactPreference },
        },
      },
      info
    );
    //create the JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // set JWT as cookie on the response
    ctx.response.cookie('token', token, {
      //Set domain to custom domain name to resolve issue with non custom heroku/now domain names
      domain:
        process.env.NODE_ENV === 'development'
          ? process.env.LOCAL_DOMAIN
          : process.env.APP_DOMAIN,
      secure: process.env.NODE_ENV === 'development' ? false : true,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
    // return user to browser
    return user;
  },
  async createOrganization(parent, args, ctx, info) {
    //check if logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // query current user
    const currentUser = await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId,
        },
      },
      info
    );
    const organization = await ctx.db.mutation.createOrganization(
      {
        data: {
          ...args,
        },
      },
      info
    );
    return organization;
  },
  async createMembership(parent, args, ctx, info) {
    const membership = await ctx.db.mutation.createMembership(
      {
        data: {
          ...args,
          user: {
            connect: { id: [args.user] },
          },
          organization: {
            connect: { id: [args.organization] },
          },
          role: {
            set: ['ADMIN'],
          },
        },
      },
      info
    );
    return membership;
  },
  async signin(parent, { email, password }, ctx, info) {
    //check if user with email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }

    //check if pw is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error(`Invalid Password!`);
    }
    //generate jwt token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    //set the coolie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, //1 year cookie
    });
    //return the user
    return user;
  },

  signout(parent, args, ctx, info) {
    ctx.response.clearCookie('token', {
      domain:
        process.env.NODE_ENV === 'development'
          ? process.env.LOCAL_DOMAIN
          : process.env.APP_DOMAIN,
    });
    return { message: 'Goodbye!' };
  },
  async requestReset(parent, args, ctx, info) {
    // 1. check if this is a real user
    const user = await ctx.db.query.user({ where: { email: args.email } });

    if (!user) {
      throw new Error(`No such user found for email ${args.email}`);
    }
    // 2. set a reset token and expiry on that user
    const randomBytesPromisified = promisify(randomBytes);
    const resetToken = (await randomBytesPromisified(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000;
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry },
    });

    // 3. email them the token
    const mailRes = await transport.sendMail({
      from: 'kyle@kyle.com',
      to: user.email,
      subject: 'Your Password Reset Token',
      html: makeANiceEmail(`Your password reset token is here!
      \n\n
      <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">
      Click Here to Reset</a>`),
    });

    return { message: 'Thanks!' };
  },

  async resetPassword(parent, args, ctx, info) {
    // check if passwords match
    if (args.password != args.confirmPassword) {
      throw new Error("Yo passwords don't match!");
    }
    // check if good token
    // check if expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000,
      },
    });
    if (!user) {
      throw new Error('This token is either invalid or expired!');
    }
    // hash their new password
    const password = await bcrypt.hash(args.password, 10);
    // save the new password
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });
    // generate jwt
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    // set the jwt cookie
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, //sec min hr day yr
    });
    // return new user
    return updatedUser;
    // HHHWEWEW Have a beer
  },

  async updatePermissions(parent, args, ctx, info) {
    //check if logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // query current user
    const currentUser = await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId,
        },
      },
      info
    );
    //TODO: Remove Admin default permissions
    // check if permissions
    hasPermission(currentUser, ['ADMIN', 'PERMISSIONUPDATE']);

    return ctx.db.mutation.updateUser(
      {
        data: {
          permissions: {
            set: args.permissions,
          },
        },
        where: {
          id: args.userId,
        },
      },
      info
    );
  },
  async handleAbsence(parent, args, ctx, info) {
    //check if logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // query current user
    const currentUser = await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId,
        },
      },
      info
    );

    // 2. Log Teacher Absence
    //   2a. Update teacher availability
    // 3. Get teacher's sub list
    // 4. Send SMS to Sub 1 (Expiration? Link to Reply or Text confirm?)
    console.log(`Sending SMS to Sub1`);
    client.messages
      .create({
        body: `Sub Request for ${args.name}.
        Date: ${args.date}
        Grade: ${args.grade}
        To accept: https://sickfits-kma-prd.herokuapp.com/`,
        from: '+19312885317',
        to: '+19318089918',
      })
      .then(message => console.log(message.sid));
    // 5. Handle Sub1 SMS Response
    //   5a. YES -> Confirmations and Add Sub to Schedule
    //   5b. NO -> Move to Sub2 and repeat 5
    //      - Handle all NOs (message to Admin)
    //
    return { message: 'Message sent!' };
  },
};

module.exports = Mutations;
