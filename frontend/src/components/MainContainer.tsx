/* import React from 'react'; */
import { useEffect, useState } from 'react';

import { MainWrapper } from './styles/MainContainer.style';
import useScrollLogger from './useScrollLogger';
/* import { Link } from "react-router-dom"; */
import Navigation from './Navigation';

const shoesArray = [
  {
    base: new URL('../assets/images/v2.png', import.meta.url).href,
    glitch: new URL('../assets/images/v2.glitch.png', import.meta.url).href,
    transition: new URL('../assets/images/v2.transition.png', import.meta.url).href,
  },
  {
    base: new URL('../assets/images/v3.png', import.meta.url).href,
    glitch: new URL('../assets/images/v3.glitch.png', import.meta.url).href,
    transition: new URL('../assets/images/v3.transition.png', import.meta.url).href,
  },
  {
    base: new URL('../assets/images/v4.png', import.meta.url).href,
    glitch: new URL('../assets/images/v4.glitch.png', import.meta.url).href,
    transition: new URL('../assets/images/v4.transition.png', import.meta.url).href,
  },
];

const socials = {
  chevron: new URL('../assets/images/down-chevron.png', import.meta.url).href,
  linkedIn: new URL('../assets/images/in.png', import.meta.url).href,
  github: new URL('../assets/images/git.png', import.meta.url).href,
  ig: new URL('../assets/images/ig.png', import.meta.url).href,
};

export default function MainContainer() {
  const [animationClass, setAnimationClass] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setAnimationClass('');
    requestAnimationFrame(() => {
      setAnimationClass('animate-in');
    });
  }, [currentIndex]);

  useEffect(() => {
    setShowImage(false);
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  useScrollLogger(() => {
    if (isTransitioning) return;
    const next = (currentIndex + 1) % shoesArray.length;
    setNextIndex(next);
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(next);
      setIsTransitioning(false);
    }, 250);
  }, 100);

  return (
    <MainWrapper>
      <a href="mailto:alex.tarverdi@outlook.com">
        <span className="contact">@reach out</span>
      </a>

      <div className="border">
        <Navigation />
        <div className="renewable">Renewable materials</div>
        <h1 className="shoeName">Nike Lx1 Prototype</h1>
        <div className="shoeInfo">
          The Lx1 is a concept sneaker crafted by blending elements from various shoes using
          Photoshop, then finalized with AI rendering and post-processed in Photoshop. Featuring
          ZoomX cushioning paired with responsive ReactX foam.
        </div>
        <div className="arrows">
          <div className="straightLine"></div>
          <span className="arrow arrow-1">˅</span>
          <span className="arrow arrow-2">˅</span>
          <span className="discover">discover yours</span>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/alex-tarverdi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={socials.linkedIn} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/pistolpet3y" target="_blank" rel="noopener noreferrer">
            <img src={socials.github} alt="GitHub" className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/pistolpet3y/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={socials.ig} alt="Instagram" className="social-icon" />
          </a>
        </div>
        <div className="shoe-wrapper">
          {isTransitioning ? (
            <img
              src={shoesArray[nextIndex].transition}
              alt="transition"
              className={`shoe transition-glitch ${animationClass}`}
            />
          ) : (
            <>
              <img
                src={shoesArray[currentIndex].base}
                alt="shoe"
                className={`shoe ${showImage ? 'show' : ''}`}
              />
              <img
                src={shoesArray[currentIndex].glitch}
                alt="glitch"
                className={`glitch ${showImage ? 'show' : ''}`}
              />
            </>
          )}
        </div>
        <div className="prototype">prototype</div>
      </div>
    </MainWrapper>
  );
}
