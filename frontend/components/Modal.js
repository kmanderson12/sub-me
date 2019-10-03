import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal } from '../lib/Portal';
import Icon from '../lib/Icon';
import { Card } from '../lib/Cards';

export default class Modal extends Component {
  render() {
    const { children, toggle, on, bgToggle } = this.props;
    return (
      <>
        {on && (
          <Portal selector="#modal">
            <ModalWrapper>
              <ModalCard>
                <CloseButton onClick={toggle}>
                  <Icon name="close" />
                </CloseButton>
                <div>{children}</div>
              </ModalCard>
              <Background
                onClick={() => {
                  if (bgToggle) {
                    toggle();
                  }
                }}
              />
            </ModalWrapper>
          </Portal>
        )}
      </>
    );
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled(Card)`
  position: relative;
  min-width: 400px;
  z-index: 10;
  border: 2px solid ${props => props.theme.blue};
  border-radius: 14px;
  margin-top: 100px;
  margin-bottom: 100px;
  background: url('static/pattern-light.svg');
  background-size: 700px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 10px;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#54b5cead, #0f2c52);
`;
