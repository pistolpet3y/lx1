import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100svh;
  position: relative;

  .contact {
    position: absolute;
    top: calc(5% - 25px);
    right: 2.5%;
    color: white;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    font-family: 'Inter', monospace;
    z-index: 4;
    opacity: 0.8;
  }

  .border {
    width: 95vw;
    height: 90vh;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.88);
    /* opacity: 0.9; */
  }

  .shoeName {
    position: absolute;
    font-size: 2.4rem;
    margin: 0;
    top: 80px;
    left: 50px;
    font-weight: 700;
    color: white;
    font-family: 'Inter', monospace;
    opacity: 0.8;
  }

  .shoeInfo {
    position: absolute;
    font-size: 1rem;
    color: white;
    font-family: 'Inter', monospace;
    top: 150px;
    left: 50px;
    width: 450px;
    opacity: 0.8;
  }

  .renewable {
    position: absolute;
    margin: 0;
    font-size: 1.2rem;
    top: 50px;
    font-weight: 700;
    left: 50px;
    color: #d33918;
    font-family: 'Inter', monospace;
    opacity: 0.9;
  }

  .shoe-wrapper {
    position: relative;
    height: 100%;
  }

  .socials {
    position: absolute;
    top: 80px;
    right: 50px;
    z-index: 3;
  }

  .socials img {
    opacity: 0.8;
    width: 35px;
    height: 35px;
    padding-left: 15px;
  }

  .shoe,
  .glitch {
    position: absolute;
    height: 50vh;
    /* max-height */
    bottom: -2%;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.57));
  }

  @keyframes shoeSlideUp {
    0% {
      transform: translate(-50%, 5%);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }

  @keyframes transitionSlideGlitch {
    0% {
      transform: translate(-50%, 10%);
      opacity: 0;
      filter: brightness(1.4) contrast(1.2);
    }
    40% {
      filter: brightness(1.1);
    }
    100% {
      transform: translate(-50%, 0);
      opacity: 1;
      filter: none;
    }
  }

  .transition-glitch.animate-in {
    animation: transitionSlideGlitch 0.6s ease-out forwards;
  }

  .transition-glitch {
    z-index: 5;
    opacity: 1;
    pointer-events: none;
    position: absolute;
    bottom: -2%;
    left: 50%;
    transform: translateX(-50%);
    height: 51.2vh;
  }

  .glitch {
    z-index: 2;
    opacity: 0;
    animation: glitchEffect 6s infinite;
  }

  .discover {
    position: absolute;
    font-size: 1rem;
    width: 200px;
    top: -160px;
    left: -90px;
    letter-spacing: 0.1rem;
    font-weight: 700;
    color: white;
    font-family: 'Inter', monospace;
    wrap: nowrap;
    opacity: 0.8;
    text-transform: uppercase;
  }

  .straightLine {
    height: 100px;
    width: 1px;
    background-color: #ffff;
    position: absolute;
    top: -120px;
    left: 8px;
    opacity: 0.5;
  }

  .arrows {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255, 255, 255, 0.66);
    font-family: 'Consolas', monospace;
    font-size: 2rem;
    font-weight: 400;
    line-height: 0.9rem;
    text-align: center;
    pointer-events: none;
  }

  .arrow {
    display: block;
    opacity: 0;
    animation: arrowFade 2s infinite;
  }

  .arrow-1 {
    animation-delay: 0s;
  }

  .arrow-2 {
    animation-delay: 1.9s;
  }

  @keyframes arrowFade {
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    30% {
      opacity: 1;
      transform: translateY(5px);
    }
    60% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 0;
      transform: translateY(10px);
    }
  }

  .prototype {
    position: absolute;
    font-size: 7rem;
    bottom: 0%;
    height: 6rem;
    line-height: 10rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.66);
    margin: 0;
    overflow: hidden;
    pointer-events: none;
    font-family: 'Consolas', monospace;
  }

  @keyframes glitchEffect {
    0%,
    97%,
    100% {
      opacity: 0;
    }
    97.49%,
    97.5% {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 768px) {
    .shoeName {
      top: 15%;
      left: 5%;
      font-size: 1.8rem;
      opacity: 1;
      color: white;
    }
    .renewable {
      top: 12%;
      left: 5%;
      font-size: 1rem;
      color: white;
    }
    .shoeInfo {
      top: 20%;
      left: 5%;
      font-size: 0.85rem;
      width: 90%;
    }
    .navigation {
      top: calc(5% - 40px);
      gap: 20px;
      background-color: rgba(0, 0, 0, 0.3);
      margin-top: 5px;
      padding: 2px 25px;
    }

    .socials img {
      visibility: hidden;
    }
    .contact {
      visibility: hidden;
    }
    .prototype {
      bottom: -0.7%;
      font-size: 4rem;
    }
    .arrows {
      top: 55%;
    }
    .shoe,
    .glitch {
      height: 28vh;
      bottom: 8%;
      left: 52%;
    }
    .border {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;
