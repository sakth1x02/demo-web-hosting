import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

const SpinnerWrapper = styled.div`
  display: inline-block;
  width: ${(props) => {
    switch (props.size) {
      case 'small':
        return '1.5rem';
      case 'large':
        return '3rem';
      default:
        return '2rem';
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case 'small':
        return '1.5rem';
      case 'large':
        return '3rem';
      default:
        return '2rem';
    }
  }};
`;

const SpinnerCircle = styled.div`
  width: 100%;
  height: 100%;
  border: 0.2rem solid #f3f3f3;
  border-top: 0.2rem solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Spinner = ({ size = 'medium' }) => {
  return (
    <SpinnerWrapper size={size}>
      <SpinnerCircle />
    </SpinnerWrapper>
  );
};

export default Spinner;
