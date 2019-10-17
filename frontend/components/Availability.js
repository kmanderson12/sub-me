import React, { Component } from 'react';
import styled from 'styled-components';
import User from './User';
import Link from 'next/link';
import YellowButton from './styles/YellowButton';

const ToggleSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
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
  button:focus {
    background: #f5deb394;
  }
`;

const Day = styled.button`
  flex-grow: 1;
  border: 1px solid rgba(43, 90, 102, 0.3);
  background: white;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

class Availability extends Component {
  state = {
    checked: false,
    selectedDay: '',
    Monday: {
      available: false,
      color: 'white',
    },
    Tuesday: {
      available: false,
      color: 'white',
    },
    Wednesday: {
      available: false,
      color: 'white',
    },
    Thursday: {
      available: false,
      color: 'white',
    },
    Friday: {
      available: false,
      color: 'white',
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
  setAvailable = e => {
    this.setState({
      checked: !this.state.checked,
    });
  };
  setDayAvailable = e => {
    const currentDay = this.state.selectedDay;
    console.log(this.getDayStatus(currentDay));
    this.setState({
      [currentDay]: {
        available: !this.getDayStatus(currentDay),
        color: !this.getDayStatus(currentDay) ? '#54CE68' : '#FBB8B8',
      },
    });
  };
  setDay = e => {
    this.setState({
      selectedDay: e.target.name,
    });
  };
  render() {
    return (
      <div>
        <DaysOfTheWeek>
          <Day
            onClick={this.setDay}
            style={{
              background: this.state.Monday.color,
            }}
            name="Monday"
          >
            M
          </Day>
          <Day
            onClick={this.setDay}
            style={{
              background: this.state.Tuesday.color,
            }}
            name="Tuesday"
          >
            T
          </Day>
          <Day
            onClick={this.setDay}
            style={{
              background: this.state.Wednesday.color,
            }}
            name="Wednesday"
          >
            W
          </Day>
          <Day
            onClick={this.setDay}
            style={{
              background: this.state.Thursday.color,
            }}
            name="Thursday"
          >
            Th
          </Day>
          <Day
            onClick={this.setDay}
            style={{
              background: this.state.Friday.color,
            }}
            name="Friday"
          >
            F
          </Day>
        </DaysOfTheWeek>
        {this.state.selectedDay === '' ? (
          <p>Select a day to set availability</p>
        ) : (
          <p>{this.state.selectedDay}</p>
        )}
        <ToggleSwitch>
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
          {this.getDayStatus(this.state.selectedDay) ? (
            <p>Available</p>
          ) : (
            <p
              style={{
                color: '#00000096',
              }}
            >
              Not Available
            </p>
          )}
        </ToggleSwitch>
      </div>
    );
  }
}

export default Availability;
