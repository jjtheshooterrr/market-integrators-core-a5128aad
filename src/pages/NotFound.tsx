import React, { useEffect, useRef } from "react";
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
                xmlnsXlink="http://www.w3.org/1999/xlink"
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
                  {/* Canvas-powered CRT static (mobile-safe) */}
                  <div className="screen">
                    <CanvasStatic />
                    <span className="notfound_text"> NOT FOUND</span>
                  </div>

                  {/* Keep DOM but always hidden */}
                  <div className="screenM">
                    <span className="notfound_text"> NOT FOUND</span>
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

/** Canvas-based “TV static” — smooth on mobile + desktop */
const CanvasStatic: React.FC = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let running = true;
    let last = 0;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width * dpr));
      const h = Math.max(1, Math.floor(rect.height * dpr));
      canvas.width = w;
      canvas.height = h;
    };

    const drawNoise = () => {
      const { width, height } = canvas;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const loop = (ts: number) => {
      if (!running) return;
      if (ts - last > 33) {
        last = ts;
        drawNoise();
      }
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);

    if (prefersReduced) {
      drawNoise();
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="crtCanvas" />;
};

const StyledWrapper = styled.div`
  /* Design Inspired by one of Stefan Devai's Design on Dribbble */

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

  .antenna {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color: #f27405;
    margin-bottom: -6em;
    margin-left: 0em;
    z-index: -1;
  }
  .antenna_shadow {
    position: absolute;
    background-color: transparent;
    width: 50px;
    height: 56px;
    margin-left: 1.68em;
    border-radius: 45%;
    transform: rotate(140deg);
    border: 4px solid transparent;
    box-shadow: inset 0px 16px #a85103, inset 0px 16px 1px 1px #a85103;
  }
  .antenna::after {
    content: "";
    position: absolute;
    margin-top: -9.4em;
    margin-left: 0.4em;
    transform: rotate(-25deg);
    width: 1em;
    height: 0.5em;
    border-radius: 50%;
    background-color: #f69e50;
  }
  .antenna::before {
    content: "";
    position: absolute;
    margin-top: 0.2em;
    margin-left: 1.25em;
    transform: rotate(-20deg);
    width: 1.5em;
    height: 0.8em;
    border-radius: 50%;
    background-color: #f69e50;
  }
  .a1 {
    position: relative;
    top: -102%;
    left: -130%;
    width: 12em;
    height: 5.5em;
    border-radius: 50px;
    background-image: linear-gradient(#171717, #353535, #171717);
    transform: rotate(-29deg);
    clip-path: polygon(50% 0%, 49% 100%, 52% 100%);
  }
  .a1d {
    position: relative;
    top: -211%;
    left: -35%;
    transform: rotate(45deg);
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color: #979797;
    z-index: 99;
  }
  .a2 {
    position: relative;
    top: -210%;
    left: -10%;
    width: 12em;
    height: 4em;
    border-radius: 50px;
    background-image: linear-gradient(#171717, #353535, #171717);
    clip-path: polygon(
      47% 0,
      47% 0,
      34% 34%,
      54% 25%,
      32% 100%,
      29% 96%,
      49% 32%,
      30% 38%
    );
    transform: rotate(-8deg);
  }
  .a2d {
    position: relative;
    top: -294%;
    left: 94%;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color: #979797;
    z-index: 99;
  }

  .notfound_text {
    position: relative;
    z-index: 2;
    background-color: black;
    padding-left: 0.3em;
    padding-right: 0.3em;
    font-size: 0.75em;
    color: white;
    letter-spacing: 0;
    border-radius: 5px;
  }

  /* === Responsive TV sizing (keeps aspect) === */
  .tv {
    width: clamp(280px, 60vw, 560px);
    /* ~ 16:9ish exterior; inner screen will be inset */
    height: clamp(170px, 34vw, 320px);
    margin-top: 3em;
    border-radius: 15px;
    background-color: #d36604;
    display: flex;
    justify-content: center;
    border: 2px solid #1d0e01;
    box-shadow: inset 0.2em 0.2em #e69635;
    position: relative;
  }
  .tv::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 15px;
    opacity: 0.09;
  }

  .curve_svg {
    position: absolute;
    margin-top: 0.25em;
    margin-left: -0.25em;
    height: 12px;
    width: 12px;
  }

  .display_div {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 3.5px 3.5px 0px #e69635;
  }

  .screen_out {
    width: auto;
    height: auto;
    border-radius: 10px;
  }
  .screen_out1 {
    /* fill the TV interior */
    width: calc(100% - 3.5rem);
    height: calc(100% - 2rem);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  /* === CRT SCREEN (Canvas + overlays) === */
  .screen,
  .screenM {
    position: relative;
    width: 62%;
    /* interior screen closer to 4:3 feel */
    aspect-ratio: 4 / 3;
    height: auto;
    font-family: Montserrat, ui-sans-serif, system-ui;
    border: 2px solid #1d0e01;
    border-radius: 10px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #252525;
    letter-spacing: 0.15em;
    text-align: center;
    overflow: hidden;
    background: #0b0b0b;
  }

  .crtCanvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
    filter: contrast(1.1) brightness(1.05);
    transform: translateZ(0);
    will-change: contents;
  }

  .screen::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.18) 0 1px,
      transparent 1px 2px
    );
    animation: scanflicker 2s infinite steps(60);
    mix-blend-mode: multiply;
  }
  .screen::after {
    content: "";
    position: absolute;
    inset: -15%;
    pointer-events: none;
    background:
      radial-gradient(ellipse at center, rgba(255, 255, 255, 0.08), transparent 60%),
      radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.35) 100%);
  }
  @keyframes scanflicker {
    0%, 100% { opacity: 0.85; }
    50% { opacity: 1; }
  }
  .screenM { display: none !important; }

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
    border-radius: 25px 25px 0px 0px;
    margin-top: 0.5em;
  }
  .line2 {
    flex-grow: 1;
    width: 2px;
    height: 1em;
    background-color: black;
    border-radius: 25px 25px 0px 0px;
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
    box-shadow: 3px 3px 0px #e69635;
  }
  .b1 {
    width: 1.65em;
    height: 1.65em;
    border-radius: 50%;
    background-color: #7f5934;
    border: 2px solid black;
    box-shadow: inset 2px 2px 1px #b49577, -2px 0px #513721,
      -2px 0px 0px 1px black;
  }
  .b1::before {
    content: "";
    position: absolute;
    margin-top: 1em;
    margin-left: 0.5em;
    transform: rotate(47deg);
    border-radius: 5px;
    width: 0.1em;
    height: 0.4em;
    background-color: #000000;
  }
  .b1::after {
    content: "";
    position: absolute;
    margin-top: 0.9em;
    margin-left: 0.8em;
    transform: rotate(47deg);
    border-radius: 5px;
    width: 0.1em;
    height: 0.55em;
    background-color: #000000;
  }
  .b1 div {
    content: "";
    position: absolute;
    margin-top: -0.1em;
    margin-left: 0.65em;
    transform: rotate(45deg);
    width: 0.15em;
    height: 1.5em;
    background-color: #000000;
  }
  .b2 {
    width: 1.65em;
    height: 1.65em;
    border-radius: 50%;
    background-color: #7f5934;
    border: 2px solid black;
    box-shadow: inset 2px 2px 1px #b49577, -2px 0px #513721,
      -2px 0px 0px 1px black;
  }
  .b2::before {
    content: "";
    position: absolute;
    margin-top: 1.05em;
    margin-left: 0.8em;
    transform: rotate(-45deg);
    border-radius: 5px;
    width: 0.15em;
    height: 0.4em;
    background-color: #000000;
  }
  .b2::after {
    content: "";
    position: absolute;
    margin-top: -0.1em;
    margin-left: 0.65em;
    transform: rotate(-45deg);
    width: 0.15em;
    height: 1.5em;
    background-color: #000000;
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
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
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
    z-index: -1;
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
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    font-family: Montserrat, ui-sans-serif, system-ui;
  }
  .text_4041,
  .text_4042,
  .text_4043 {
    transform: scaleY(24.5) scaleX(9);
  }

  @media only screen and (max-width: 495px) {
    .text_404 { column-gap: 6em; }
  }
  @media only screen and (max-width: 395px) {
    .text_404 { column-gap: 4em; }
    .text_4041, .text_4042, .text_4043 { transform: scaleY(25) scaleX(8); }
  }

  @media (max-width: 275px), (max-height: 520px) {
    .main { position: relative; }
  }

  @media (prefers-reduced-motion: reduce) {
    .screen::before { animation: none; }
  }
`;

export default NotFound;
