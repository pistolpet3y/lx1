/* import React from 'react'; */
import { MainWrapper } from './styles/MainContainer.style';

const images = {
  shoe: new URL('../assets/images/v2.png', import.meta.url).href,
  glitch: new URL('../assets/images/glitch.1.png', import.meta.url).href,
  linkedIn: new URL('../assets/images/in.png', import.meta.url).href,
  github: new URL('../assets/images/git.png', import.meta.url).href,
  ig: new URL('../assets/images/ig.png', import.meta.url).href,
}


export default function MainContainer() {
  return (
    <MainWrapper>
      <a href='mailto:alex.tarverdi@outlook.com'><span className='contact'>.reach out</span></a>
      <div className="border">
        <h1 className="shoeName">Nike Lx1</h1>
        <div className="arrows">
          <span className='straightLine'>|</span>
          <span className="arrow arrow-1">˅</span>
          <span className="arrow arrow-2">˅</span>
          <span className="discover">discover yours</span>
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/alex-tarverdi" target="_blank" rel="noopener noreferrer">
          <img src={images.linkedIn} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/pistolpet3y" target="_blank" rel="noopener noreferrer">
          <img src={images.github} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/pistolpet3y/" target="_blank" rel="noopener noreferrer"> 
          <img src={images.ig} alt="Instagram" className="social-icon" />
          </a>
        </div>
        <div className="shoe-wrapper">
          {/* <div className="shadow-oval"></div> */}
          <img src={images.shoe} alt="shoe" className='shoe'/> 
          <img src={images.glitch} alt="glitch" className='glitch'/>
        </div>
        <h2>prototype</h2>
        </div>
    </MainWrapper>
  );
}