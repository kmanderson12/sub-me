import styled from 'styled-components';
import User from './User';
import Link from 'next/link';
import YellowButton from './styles/YellowButton';

const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
`;

const Welcome = styled.div`
  font-size: 1.5vh;
  padding: 2rem;
  height: 100%;
  max-width: 400px;
  background: rgba(0, 0, 0, 0.2);

  h1 {
    margin-bottom: 0;
    color: #0f2c52;
  }
  h4 {
    color: #f5deb3;
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0 2rem 0 0;
  }
`;

const Content = styled.div`
  max-width: 500px;
`;

const Account = () => (
  <User>
    {({ data: { me } }) => (
      <div>
        {me && (
          <AccountContainer>
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
          </AccountContainer>
        )}
        {!me && <h1>You must be logged in to view this page!</h1>}
      </div>
    )}
  </User>
);

export default Account;
