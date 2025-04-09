import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;

  .contact{
    position: absolute;
    top: calc(5% - 25px);
    right: 5%;
    color: white;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    font-family: 'Inter', monospace;
  }

  .border {
    width: 90%;
    height: 90%;
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
    top: 5%;
    left: 10%;
    font-weight: 700;
    color: white;
    font-family: 'Inter', monospace;
}

  .shoe-wrapper {
  position: relative;
  height: 100%;
}

.socials{
position: absolute;
top: 50px;
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
  .glitch  {
    position: absolute;
    height: 50vh;
    /* max-height */
    bottom: -2%;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.57));
  }

/*   .shadow-oval {
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 80px;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.9) 0%, transparent 90%);
  border-radius: 50%;
  filter: blur(4px);
  z-index: -1;
} */

.glitch {
  z-index: 2;
  opacity: 0;
  animation: glitchEffect 6s infinite;
}


.discover {
  position: absolute;
  font-size: 0.9rem;
  width: 200px;
  top: -70px;
  left: -90px;
  letter-spacing: 0.1rem;
  font-weight: 700;
  color: white;
  font-family: 'Inter', monospace;
  wrap: nowrap;
  opacity: 0.8;
  text-transform: uppercase;
}

.straightLine{
  font-size: 1.2rem;
  position: absolute;
  font-weight: 100;
  top: -35px;
  left: 4px;
  }


.arrows {
  position: absolute;
  top: 30%;
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
  0%   { opacity: 0; transform: translateY(0); }
  30%  { opacity: 1; transform: translateY(5px); }
  60%  { opacity: 0; transform: translateY(10px); }
  100% { opacity: 0; transform: translateY(10px); }
}

  h2 {
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
    0%, 97%, 100% {
      opacity: 0;
    }
    97.49%, 97.5% {
  opacity: 1;
}
  }
`;