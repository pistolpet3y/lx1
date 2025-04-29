import React, { useEffect, useState } from 'react';
import { Wrapper } from '../styles/ShoesPage.style';
import Navigation from '../Navigation';
import CustomSelect from '../../components/CustomSelect';

const shopImages = {
  colorLogo: new URL('../../assets/images/nike.color.logo.png', import.meta.url).href,
  filter: new URL('../../assets/images/filter.icon.png', import.meta.url).href,
  chevron: new URL('../../assets/images/down-chevron.png', import.meta.url).href,
  linkedIn: new URL('../../assets/images/in.shop.png', import.meta.url).href,
  github: new URL('../../assets/images/git.shop.png', import.meta.url).href,
  ig: new URL('../../assets/images/ig.shop.png', import.meta.url).href,
};

const ShoesPage: React.FC = () => {
  const [shoes, setShoes] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://lx1-backend.onrender.com/api/shoes')
      .then((response) => response.json())
      .then((data) => {
        setShoes(data);
      })
  }, []);
  return (
    <Wrapper>
      <div className="border">
        <header>
          {/* <div className="nikeHeader">Nike</div> */}
          <div className="homeSection">
            <div className="homeLinks">
              <a href="#">Home</a>
              <a href="#">Contact</a>
              <a href="#">Sign In</a>
            </div>
          </div>
          <div className="nav">
            <Navigation />
          </div>

          <div className="nikeColor">
            <img src={shopImages.colorLogo} alt="" />
          </div>

          <div className="pageTitle">
            <div className="searchFilter">
              <h1>Shoes & Sneakers</h1>
              <input type="text" placeholder="Search" className="searchBar" />
            </div>
            <div className="filter">
              Filter
              <img src={shopImages.filter} alt="filter icon" style={{ width: 24 }} />
              <CustomSelect />
            </div>
          </div>
        </header>
        <main>
          <menu className="sideMenu">
            <ul>
              <li>
                <a href="#">Jordan</a>
              </li>
              <li>
                <a href="#">Lifestyle</a>
              </li>
              <li>
                <a href="#">Running</a>
              </li>
              <li>
                <a href="#">Basketball</a>
              </li>
              <li>
                <a href="#">Training & Gym</a>
              </li>
              <li>
                <a href="#">Walking</a>
              </li>
              <li>
                <a href="#">Soccer</a>
              </li>
              <li>
                <a href="#">Skateboarding</a>
              </li>
              <li>
                <a href="#">ACG</a>
              </li>
              <li>
                <a href="#">Football</a>
              </li>
              <li>
                <a href="#">Tennis</a>
              </li>
              <li>
                <a href="#">Golf</a>
              </li>
              <li>
                <a href="#">Baseball</a>
              </li>
              <li>
                <a href="#">Boots</a>
              </li>
              <li>
                <a href="#">Sandals & Slides</a>
              </li>
              <li>
                <a href="#">Track & Field</a>
              </li>
              <li>
                <a href="#">Nike By You</a>
              </li>
              <li>
                <a href="#">Lacrosse</a>
              </li>
              <li>
                <a href="#">Wrestling</a>
              </li>
            </ul>
          </menu>

          <div className="shoeImage">
            {shoes.map((shoe) => (
              <div className="productCard" key={shoe.id}>
                <a href={shoe.link}>
                  <img src={`/lx1${shoe.image}`} alt={shoe.name} />
                </a>
                <p style={{ color: '#d33918' }}>{shoe.tagline}</p>
                <p>{shoe.name}</p>
                <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{shoe.category}</p>
                <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{shoe.colors}</p>
                <p>${shoe.price}</p>
              </div>
            ))}
          </div>
        </main>
        <div className="footer">
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/alex-tarverdi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={shopImages.linkedIn} alt="LinkedIn"  />
            </a>
            <a href="https://github.com/pistolpet3y" target="_blank" rel="noopener noreferrer">
              <img src={shopImages.github} alt="GitHub" />
            </a>
            <a
              href="https://www.instagram.com/pistolpet3y/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={shopImages.ig} alt="Instagram"  />
            </a>
          </div>
          <div className="footerText">
            <p>© 2025 Nike LX-1 Prototype. School Project Only.</p>
            <p>
              This website is a non-commercial school project. I do not own any copyrights or
              trademarks associated with Nike or any related brands.
            </p>
            <p>
              All shoe designs are fictional and were created by me using Photoshop and AI tools.
              The products showcased do not exist in reality.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ShoesPage;
