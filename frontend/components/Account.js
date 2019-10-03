import styled from 'styled-components';
import User from './User';
import Link from 'next/link';
import YellowButton from './styles/YellowButton';

const Welcome = styled.div`
    background: #54b5ce;
    padding: 1rem;
    border: 2px solid;
    border-bottom-style: dashed;
    font-size: 1.5vh;
    border-radius: 8px 8px 0 0;
    margin-bottom: 0;
    h1 {
      margin-bottom: 0;
      color: #0f2c52;
    }
    p {
      color: #f5deb3;
      display: inline
      font-size: 1.5rem;
      font-weight: 300;
      margin: 0 2rem 0 0;
    }
`;

const Content = styled.div`
  background: #ffffff;
  margin-top: 0;
  padding: 1rem;
  border: 2px solid;
  border-top: 0;
  border-radius: 0 0 8px 8px;
  border-bottom: 4px solid;
`;

const Account = () => (
  <User>
    {({ data: { me } }) => (
      <div>
        {me && (
          <div>
            <Welcome>
              <h1>Welcome, {me.name}!</h1>
              <p>☺︎Profile</p>
              <p>✎Tools</p>
              <p>⚙ Account Settings</p>
            </Welcome>
            <Content>
              <p>Email: {me.email}</p>
              <p>Phone: {me.phone}</p>
              <p>Contact Preference: {me.contactPreference}</p>
              <Link href="/request-a-sub">
                <YellowButton>Request A Sub</YellowButton>
              </Link>
            </Content>
          </div>
        )}
        {!me && <h1>You must be logged in to view this page!</h1>}
      </div>
    )}
  </User>
);

export default Account;
