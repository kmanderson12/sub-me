import styled from 'styled-components';
import User from './User';
import Link from 'next/link';
import YellowButton from './styles/YellowButton';
import Availability from './Availability';

const ProfileCard = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
  background: white;
  border: 2px solid ${props => props.theme.blue};
  box-shadow: 2px 2px 2px #f5deb3ba;
  border-radius: 8px;
  max-height: 300px;
  max-width: 400px;
  z-index: 5;
  color: #2b5a66;
  img {
    height: 213px;
    width: 213px;
    margin-top: -40px;
    border: 2px solid rgba(43, 90, 102, 0.7);
    box-shadow: 2px 2px 2px rgba(43, 90, 102, 0.7);
    border-radius: 8px;
  }
  h1 {
    font-size: 36px;
    margin: 0;
    line-height: 44px;
  }
  h3 {
    margin: 0;
    font-size: 18px;
    opacity: 0.7;
    line-height: 22px;
    padding: 0 0 1rem 0;
  }
  p {
    display: inline;
    padding: 1rem;
  }
`;

const AccountContainer = styled.div`
  margin-top: -35px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  background: white;
  border: 2px solid ${props => props.theme.blue};
  border-radius: 8px;
`;

const LeftDiv = styled.div`
  flex-grow: 2;
  padding: 2rem;
  text-align: center;
  min-width: 300px;
`;

const RightDiv = styled.div`
  flex-grow: 2;
  padding: 2rem;
  text-align: center;
  min-width: 300px;
`;

const CenterDiv = styled.div`
  flex-grow: 1;
  margin: 5%;
  @media (max-width: 725px) {
    display: none;
  }
`;

const Account = () => (
  <User>
    {({ data: { me } }) => (
      <div>
        {me && (
          <>
            <ProfileCard>
              <img
                src="static/me_square.png"
                alt="me"
                onClick={() => console.log({ me })}
              />
              <h1>{me.name}</h1>
              <h3>Substitute Teacher</h3>
              <p>{me.memberships[0].organization.name}</p>
            </ProfileCard>
            <AccountContainer>
              <LeftDiv>
                <h3>Availability</h3>
                <Availability />
              </LeftDiv>
              <CenterDiv />
              <RightDiv>
                <h3>Contact Info</h3>
                <p>Email: {me.email}</p>
                <p>Phone: {me.phone}</p>
                <p>Contact Preference: {me.contactPreference}</p>
                <Link href="/request-a-sub">
                  <YellowButton>Request A Sub</YellowButton>
                </Link>
              </RightDiv>
            </AccountContainer>
          </>
        )}
        {!me && <h1>You must be logged in to view this page!</h1>}
      </div>
    )}
  </User>
);

export default Account;
