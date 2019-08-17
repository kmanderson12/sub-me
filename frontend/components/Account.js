import User from './User';

const Account = () => (
  <User>
  {({ data: { me } }) => (
    <div>
    {me && (
    <h1>Welcome, {me.name}!</h1>
    )}
    {!me && (
      <h1>You must be logged in to view this page!</h1>
    )}
    </div>
  )}
  </User>
);

export default Account;
