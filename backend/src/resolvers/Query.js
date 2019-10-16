const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
  me(parent, args, ctx, info) {
    // check if is current userId
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info
    );
  },
  async users(parent, args, ctx, info) {
    //1. check if logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    //2. check if user has permissions
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);
    //3. if they do, query all users
    return ctx.db.query.users({}, info);
  },
  async organizations(parent, args, ctx, info) {
    return ctx.db.query.organizations({}, info);
  },
};

module.exports = Query;
