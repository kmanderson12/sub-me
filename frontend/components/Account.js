import User from './User';
import Link from 'next/link';
import YellowButton from './styles/YellowButton';

const Account = () => (
  <User>
    {({ data: { me } }) => (
      <div>
        {me && (
          <div>
            <h1>Welcome, {me.name}!</h1>
            <p>Email: {me.email}</p>
            <p>Phone: {me.phone}</p>
            <p>Contact Preference: {me.contactPreference}</p>
            <Link href="/request-a-sub">
              <YellowButton>Request A Sub</YellowButton>
            </Link>
          </div>
        )}
        {!me && <h1>You must be logged in to view this page!</h1>}
      </div>
    )}
  </User>
);

export default Account;
