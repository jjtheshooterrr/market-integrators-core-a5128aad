import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex w-full max-w-4xl flex-col items-center gap-8 px-4 py-12">
        <img
          src="https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/imagebuck/marketintegrators-logo-transparent.webp"
          alt="Market Integrators Logo"
          className="h-16 w-16 md:h-20 md:w-20"
          loading="lazy"
        />

        <Tv404Card />

        <div className="text-center space-y-4">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground">404</h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground">Page not found</p>
          <div className="pt-2">
            <Button asChild variant="default">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tv404Card: React.FC = () => {
  return (
    <StyledWrapper>
      <div className="main_wrapper">
        <div className="main">
          <div className="antenna">
            <div className="antenna_shadow" />
            <div className="a1" />
            <div className="a1d" />
            <div className="a2" />
            <div className="a2d" />
            <div className="a_base" />
          </div>
          <div className="tv">
            <div className="cruve">
              <svg
                className="curve_svg"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 189.929 189.929"
                xmlSpace="preserve"
              >
                <path
                  d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                />
              </svg>
            </div>
            <div className="display_div">
              <div className="screen_out">
                <div className="screen_out1">
                  <div className="screen">
                    <span className="notfound_text">NOT FOUND</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lines">
              <div className="line1" />
              <div className="line2" />
              <div className="line3" />
            </div>
            <div className="buttons_div">
              <div className="b1">
                <div />
              </div>
              <div className="b2" />
              <div className="speakers">
                <div className="g1">
                  <div className="g11" />
                  <div className="g12" />
                  <div className="g13" />
                </div>
                <div className="g" />
                <div className="g" />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="base1" />
            <div className="base2" />
            <div className="base3" />
          </div>
        </div>
        <div className="text_404">
          <div className="text_4041">4</div>
          <div className="text_4042">0</div>
          <div className="text_4043">4</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .main_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30em;
    height: 30em;
    max-width: 100%;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5em;
  }

  /* ====================== */
  /* ✅ iPhone-safe TV Screen */
  /* ====================== */
  .screen {
    position: relative;
    width: 13em;
    height: 7.85em;
    font-family: Montserrat, ui-sans-serif, system-ui;
    border: 2px solid #1d0e01;
    background:
      repeating-radial-gradient(#000 0 0.0001%, #fff 0 0.0002%) 50% 0 / 2500px 2500px,
      repeating-conic-gradient(#000 0 0.0001%, #fff 0 0.0002%) 60% 60% / 2500px 2500px;
    background-blend-mode: difference;
    border-radius: 10px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #252525;
    letter-spacing: 0.15em;
    text-align: center;
    will-change: transform;
    -webkit-backface-visibility: hidden;
    transform: translateZ(0);
  }

  .screen::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -120%;
    bottom: 0;
    pointer-events: none;
    background:
      linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0)) 0 0 / 100% 3px repeat-y,
      linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(0, 0, 0, 0)) 0 0 / 100% 100% no-repeat;
    will-change: transform;
    transform: translate3d(0, -100%, 0);
    animation: scan 4s linear infinite;
  }

  @keyframes scan {
    0% {
      transform: translate3d(0, -100%, 0);
    }
    100% {
      transform: translate3d(0, 100%, 0);
    }
  }

  @-webkit-keyframes scan {
    0% {
      -webkit-transform: translate3d(0, -100%, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 100%, 0);
    }
  }

  .screen:hover,
  .screen:active,
  .screen::after:hover,
  .screen::after:active {
    animation-play-state: running !important;
  }

  .notfound_text {
    background-color: black;
    padding: 0.3em 0.3em;
    font-size: 0.75em;
    color: white;
    border-radius: 5px;
  }

  /* ====================== */
  /* Original TV frame and styling */
  /* ====================== */

  .tv {
    width: 17em;
    height: 9em;
    margin-top: 3em;
    border-radius: 15px;
    background-color: #d36604;
    display: flex;
    justify-content: center;
    border: 2px solid #1d0e01;
    box-shadow: inset 0.2em 0.2em #e69635;
  }

  .tv::after {
    content: "";
    position: absolute;
    width: 17em;
    height: 9em;
    border-radius: 15px;
    background:
      repeating-radial-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 50% 0/2500px 2500px,
      repeating-conic-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 60% 60%/2500px 2500px;
    opacity: 0.09;
  }

  .lines {
    display: flex;
    column-gap: 0.1em;
    align-self: flex-end;
  }

  .line1,
  .line3 {
    width: 2px;
    height: 0.5em;
    background-color: black;
    border-radius: 25px 25px 0 0;
    margin-top: 0.5em;
  }

  .line2 {
    flex-grow: 1;
    width: 2px;
    height: 1em;
    background-color: black;
    border-radius: 25px 25px 0 0;
  }

  .buttons_div {
    width: 4.25em;
    align-self: center;
    height: 8em;
    background-color: #e69635;
    border: 2px solid #1d0e01;
    padding: 0.6em;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 0.75em;
  }

  .b1,
  .b2 {
    width: 1.65em;
    height: 1.65em;
    border-radius: 50%;
    background-color: #7f5934;
    border: 2px solid black;
    box-shadow:
      inset 2px 2px 1px #b49577,
      -2px 0px #513721,
      -2px 0px 0px 1px black;
  }

  .speakers {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
  }

  .speakers .g1 {
    display: flex;
    column-gap: 0.25em;
  }

  .speakers .g1 .g11,
  .g12,
  .g13 {
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    background-color: #7f5934;
    border: 2px solid black;
    box-shadow: inset 1.25px 1.25px 1px #b49577;
  }

  .speakers .g {
    width: auto;
    height: 2px;
    background-color: #171717;
  }

  .bottom {
    display: flex;
    justify-content: center;
    column-gap: 8.7em;
  }

  .base1,
  .base2 {
    height: 1em;
    width: 2em;
    border: 2px solid #171717;
    background-color: #4d4d4d;
    margin-top: -0.15em;
  }

  .base3 {
    position: absolute;
    height: 0.15em;
    width: 17.5em;
    background-color: #171717;
    margin-top: 0.8em;
  }

  .text_404 {
    position: absolute;
    display: flex;
    flex-direction: row;
    column-gap: 6em;
    z-index: -5;
    margin-bottom: 2em;
    opacity: 0.5;
    font-family: Montserrat, ui-sans-serif, system-ui;
  }

  .text_4041,
  .text_4042,
  .text_4043 {
    transform: scaleY(24.5) scaleX(9);
  }
`;

export default NotFound;
