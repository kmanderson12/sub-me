import React, { Component } from 'react';
import styled from 'styled-components';
import { Query, Mutation } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import User from './User';
import Link from 'next/link';
import YellowButton from './styles/YellowButton';

const GET_STATE_MUTATION = gql`
  mutation getState($state: String!) {
    getState(state: $state) {
      message
    }
  }
`;

class Availability extends Component {
  state = {
    checked: false,
    selectedDay: '',
    Monday: {
      available: false,
      amount: '',
    },
    Tuesday: {
      available: false,
      amount: '',
    },
    Wednesday: {
      available: false,
      amount: '',
    },
    Thursday: {
      available: false,
      amount: '',
    },
    Friday: {
      available: false,
      amount: '',
    },
  };
  getDayStatus = d => {
    switch (d) {
      case 'Monday':
        return this.state.Monday.available;
      case 'Tuesday':
        return this.state.Tuesday.available;
      case 'Wednesday':
        return this.state.Wednesday.available;
      case 'Thursday':
        return this.state.Thursday.available;
      case 'Friday':
        return this.state.Friday.available;
      default:
        return false;
    }
  };
  getAmountStatus = d => {
    switch (d) {
      case 'Monday':
        return this.state.Monday.amount;
      case 'Tuesday':
        return this.state.Tuesday.amount;
      case 'Wednesday':
        return this.state.Wednesday.amount;
      case 'Thursday':
        return this.state.Thursday.amount;
      case 'Friday':
        return this.state.Friday.amount;
      default:
        return '';
    }
  };
  setAvailable = e => {
    this.setState({
      checked: !this.state.checked,
    });
  };
  setDayAvailable = e => {
    const currentDay = this.state.selectedDay;
    this.setState({
      [currentDay]: {
        available: !this.getDayStatus(currentDay),
      },
    });
  };
  setDay = e => {
    this.setState({
      selectedDay: e.target.name,
    });
  };
  setAmount = e => {
    const currentDay = this.state.selectedDay;
    this.setState({
      [currentDay]: {
        available: this.getDayStatus(currentDay),
        amount: e.target.name,
      },
    });
  };
  render() {
    return (
      <Mutation
        mutation={GET_STATE_MUTATION}
        variables={{
          state: JSON.stringify(this.state),
        }}
      >
        {(getState, { loading, error }) => (
          <div>
            <DaysOfTheWeek>
              <Day
                onClick={this.setDay}
                name="Monday"
                selectedDay={this.state.selectedDay}
                available={this.state.Monday.available}
              >
                M
              </Day>
              <Day
                onClick={this.setDay}
                name="Tuesday"
                selectedDay={this.state.selectedDay}
                available={this.state.Tuesday.available}
              >
                T
              </Day>
              <Day
                onClick={this.setDay}
                name="Wednesday"
                selectedDay={this.state.selectedDay}
                available={this.state.Wednesday.available}
              >
                W
              </Day>
              <Day
                onClick={this.setDay}
                name="Thursday"
                selectedDay={this.state.selectedDay}
                available={this.state.Thursday.available}
              >
                Th
              </Day>
              <Day
                onClick={this.setDay}
                name="Friday"
                selectedDay={this.state.selectedDay}
                available={this.state.Friday.available}
              >
                F
              </Day>
            </DaysOfTheWeek>
            {this.state.selectedDay === '' ? (
              <p>Select a day to set availability</p>
            ) : (
              <>
                <YellowButton onClick={getState}>
                  Update Availability
                </YellowButton>
                <p>{this.state.selectedDay}</p>
                <ToggleSwitch
                  currentDayStatus={this.getDayStatus(this.state.selectedDay)}
                >
                  <label class="switch">
                    <input
                      disabled={this.state.setAvailable === '' ? true : false}
                      id="avail"
                      type="checkbox"
                      onChange={this.setDayAvailable}
                      checked={this.getDayStatus(this.state.selectedDay)}
                    />
                    <span class="slider round"></span>
                  </label>
                  {!this.getDayStatus(this.state.selectedDay) ? (
                    <p
                      className="toggleLabel"
                      style={{
                        color: '#00000096',
                      }}
                    >
                      Not Available
                    </p>
                  ) : (
                    <>
                      <p className="toggleLabel">Available</p>
                      <ButtonGroup>
                        <BtnInGroup
                          onClick={this.setAmount}
                          amountStatus={this.getAmountStatus(
                            this.state.selectedDay
                          )}
                          name="Full"
                        >
                          Full Day
                        </BtnInGroup>
                        <BtnInGroup
                          onClick={this.setAmount}
                          amountStatus={this.getAmountStatus(
                            this.state.selectedDay
                          )}
                          name="Half"
                        >
                          Half Day
                        </BtnInGroup>
                      </ButtonGroup>
                    </>
                  )}
                </ToggleSwitch>
              </>
            )}
          </div>
        )}
      </Mutation>
    );
  }
}

export default Availability;

const ToggleSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .toggleLabel {
    font-size: 1.25rem;
    margin: 0;
  }
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #54b5ce;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #54b5ce;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const DaysOfTheWeek = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin: 0 auto;
  max-width: 400px;
  border: 2px solid rgba(43, 90, 102, 0.7);
  border-radius: 8px;
  button {
    border-right: 1px solid rgba(43, 90, 102, 0.7);
    font-family: 'Montserrat';
    font-size: 1.5rem;
    padding: 0.5rem;
    outline: none;
  }
  button:first-child {
    border-radius: 5px 0 0 5px;
  }
  button:last-child {
    border-radius: 0 5px 5px 0;
    border-right: none;
  }
`;

const Day = styled.button`
  flex-grow: 1;
  border: 1px solid rgba(43, 90, 102, 0.3);
  background: ${props => (props.available ? '#54CE68' : '#FBB8B8')};
  opacity: ${props => (props.selectedDay === props.name ? 0.7 : 1)};
  color: ${props =>
    props.selectedDay === props.name ? 'white' : props.theme.black};
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-top: 1rem;
  max-width: 400px;
  border: 2px solid rgba(43, 90, 102, 0.7);
  border-radius: 8px;
  button {
    border-right: 1px solid rgba(43, 90, 102, 0.7);
    font-family: 'Montserrat';
    font-size: 1.5rem;
    padding: 0.5rem;
    outline: none;
  }
  button:first-child {
    border-radius: 5px 0 0 5px;
  }
  button:last-child {
    border-radius: 0 5px 5px 0;
    border-right: none;
  }
`;
const BtnInGroup = styled.button`
  flex-grow: 1;
  border: 1px solid rgba(43, 90, 102, 0.3);
  background: ${props =>
    props.amountStatus === props.name ? '#54b5ce' : '#ccccccb5'};
  color: ${props =>
    props.amountStatus === props.name ? 'white' : '#393939c2'};
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
