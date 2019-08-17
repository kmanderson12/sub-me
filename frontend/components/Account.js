import User from './User';

const Account = () => (
  <User>
  {({ data: { me } }) => (

    <h1>Welcome, {me.name}!</h1>
  )}
  </User>
);

export default Account;
