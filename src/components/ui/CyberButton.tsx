import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface CyberButtonProps {
    text?: string;
    to?: string;
    onClick?: () => void;
    className?: string;
}

const CyberButton: React.FC<CyberButtonProps> = ({ text = "Request Proposal", to, onClick, className }) => {
    const Content = () => (
        <>
            {text}
            <div id="clip">
                <div id="leftTop" className="corner" />
                <div id="rightBottom" className="corner" />
                <div id="rightTop" className="corner" />
                <div id="leftBottom" className="corner" />
            </div>
            <span id="rightArrow" className="arrow" />
            <span id="leftArrow" className="arrow" />
        </>
    );

    return (
        <StyledWrapper className={className}>
            {to ? (
                <Link to={to} className="cyber-button" onClick={onClick}>
                    <Content />
                </Link>
            ) : (
                <button className="cyber-button" onClick={onClick}>
                    <Content />
                </button>
            )}
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .cyber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 12em;
    height: 4em;
    outline: none;
    transition: 0.1s;
    background-color: transparent;
    border: none;
    font-size: 13px;
    font-weight: bold;
    color: #ddebf0;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
  }

  #clip {
    --color: red;
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: 5px double var(--color);
    box-shadow: inset 0px 0px 15px darkred;
    clip-path: polygon(
      30% 0%,
      70% 0%,
      100% 30%,
      100% 70%,
      70% 100%,
      30% 100%,
      0% 70%,
      0% 30%
    );
  }

  .arrow {
    position: absolute;
    transition: 0.2s;
    background-color: red;
    top: 35%;
    width: 11%;
    height: 30%;
  }

  #leftArrow {
    left: -13.5%;
    clip-path: polygon(100% 0, 100% 100%, 0 50%);
  }

  #rightArrow {
    clip-path: polygon(100% 49%, 0 0, 0 100%);
    left: 102%;
  }

  .cyber-button:hover #rightArrow {
    background-color: black;
    left: -15%;
    animation: 0.6s ease-in-out both infinite alternate rightArrow8;
  }

  .cyber-button:hover #leftArrow {
    background-color: black;
    left: 103%;
    animation: 0.6s ease-in-out both infinite alternate leftArrow8;
  }

  .corner {
    position: absolute;
    width: 4em;
    height: 4em;
    background-color: red;
    box-shadow: inset 1px 1px 8px #a00000;
    transform: scale(1) rotate(45deg);
    transition: 0.2s;
  }

  #rightTop {
    top: -1.98em;
    left: 91%;
  }

  #leftTop {
    top: -1.96em;
    left: -3em;
  }

  #leftBottom {
    top: 2.1em;
    left: -2.15em;
  }

  #rightBottom {
    top: 45%;
    left: 88%;
  }

  .cyber-button:hover #leftTop,
  .cyber-button:hover #rightTop,
  .cyber-button:hover #rightBottom,
  .cyber-button:hover #leftBottom {
    animation: 0.1s ease-in-out both changeColor8,
      0.2s linear 0.4s both lightEffect8;
  }

  .cyber-button:hover .corner {
    transform: scale(1.25) rotate(45deg);
  }

  .cyber-button:hover #clip {
    animation: 0.2s ease-in-out 0.55s both greenLight8;
    --color: black;
  }

  @keyframes changeColor8 {
    from {
      background-color: darkred;
    }
    to {
      background-color: black;
    }
  }

  @keyframes lightEffect8 {
    from {
      box-shadow: 1px 1px 5px black;
    }
    to {
      box-shadow: 0 0 2px black;
    }
  }

  @keyframes greenLight8 {
    to {
      box-shadow: inset 0px 0px 32px black;
    }
  }

  @keyframes leftArrow8 {
    to {
      transform: translateX(10px);
    }
  }

  @keyframes rightArrow8 {
    to {
      transform: translateX(-10px);
    }
  }
`;

export default CyberButton;
