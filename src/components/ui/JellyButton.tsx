import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface JellyButtonProps {
    text?: string;
    to?: string;
    onClick?: () => void;
    className?: string;
}

const JellyButton: React.FC<JellyButtonProps> = ({ text = "Request Proposal", to, onClick, className }) => {
    return (
        <StyledWrapper className={className}>
            {to ? (
                <Link to={to} className="Btn" onClick={onClick}>
                    {text}
                </Link>
            ) : (
                <button className="Btn" onClick={onClick}>
                    {text}
                </button>
            )}
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .Btn {
    position: relative;
    width: 180px; /* widened to fit the text nicely */
    height: 55px;
    border-radius: 45px;
    border: none;
    background-color: rgb(255, 77, 77); /* MAIN RED */
    color: white;
    font-weight: bold;
    box-shadow: 
      0px 10px 10px rgb(255, 150, 150) inset,
      0px 5px 10px rgba(5, 5, 5, 0.212),
      0px -10px 10px rgb(200, 40, 40) inset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .Btn::before {
    width: 70%;
    height: 2px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    content: "";
    filter: blur(1px);
    top: 7px;
    border-radius: 50%;
  }

  .Btn::after {
    width: 70%;
    height: 2px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.15);
    content: "";
    filter: blur(1px);
    bottom: 7px;
    border-radius: 50%;
  }

  .Btn:hover {
    animation: jello-horizontal 0.9s both;
  }

  @keyframes jello-horizontal {
    0% {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }

    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;

export default JellyButton;
