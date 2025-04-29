import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  /*   justify-content: center;
  align-items: center; */
  width: 100vw;
  height: 100svh;
  position: relative;

  .homeSection {
    width: 100%;
    height: 30px;
    background-color: #f7f7f7;
    border-top: 5px solid rgba(0, 0, 0, 0.09);
    z-index: 100;
    /* position: absolute; */
    top: 0;
    left: 0;
  }

  .searchFilter {
    display: flex;
    max-height: 25px;
    align-items: center;
  }

  .sortBy select {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.09);
    background-color: white;
    font-family: 'Inter', monospace;
    font-size: 14px;
    font-weight: 600;
  }

  .searchBar {
    margin-left: 30px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.09);
    font-family: 'Inter', monospace;
    font-size: 14px;
  }

  .homeSection a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    font-weight: 600;
    font-family: 'Inter', monospace;
    padding: 5px 20px;
    cursor: pointer;
  }

  .homeLinks {
    display: flex;
    justify-content: flex-end;
  }
  header {
    position: relative;
    height: auto;
    min-height: 30px;
  }
  .nav {
    margin-top: 1px;
    position: relative;
    z-index: 20;
  }
  .border {
    width: 95vw;
    min-height: 100%;
    position: relative;
    left: 2.5vw;
    overflow: auto;
    background-color: white;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.88);
    /* opacity: 0.9; */
  }
  .nikeColor {
    position: absolute;
    top: 30px;
    left: 50px;
    z-index: 10;
  }
  .nikeColor img {
    max-width: 60px;
    margin: 0;
    height: auto;
    display: block;
  }
  .nikeHeader {
    visibility: hidden;
    font-size: 2.6rem;
    position: relative;
    top: 10px;
    left: 0;
    color: Black;
    font-family: 'Inter', monospace;
    z-index: 40;
  }

  .pageTitle {
    position: absolute;
    top: 150px;
    left: 0;
    right: 0;
    padding: 0 50px;
    padding-right: 20px;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Inter', monospace;
    display: flex;
    justify-content: space-between;
  }
  .pageTitle h1 {
    margin: 0;
    font-family: 'Inter', monospace;
    font-size: 24px;
    font-weight: 500;
  }
  .filter {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
  }
  .filter img {
    width: 24px;
    height: 24px;
    padding-right: 30px;
  }
  .arrowDown {
    font-size: 24px;
  }

  main {
    margin-top: 220px;
  }

  .sideMenu {
    position: absolute;
    top: 200px;
    left: 50px;
    width: 220px;
    height: 550px;
    overflow: auto;
    padding: 10px 0;
    z-index: 5;
    border-top: 1px solid rgba(0, 0, 0, 0.09);
  }
  .sideMenu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .sideMenu li {
    margin: 16px 0;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Inter', monospace;
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    transition: color 0.3s;
    text-decoration: none;
  }
  .sideMenu a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
  }
  .shoeImage {
    margin-top: 160px;
    margin-left: 320px;
    display: flex;
    max-width: 100%;
    gap: 20px;
    flex-wrap: wrap;
  }
  .shoeImage img {
    max-height: 460px;
    width: 100%;
  }
  .shoeImage p {
    font-size: 16px;
    font-weight: 500;
    line-height: 0.9rem;
    font-family: 'Inter', monospace;
  }

  .footer {
    height: 200px;
    margin-top: 120px;
    border-top: 1px solid rgba(0, 0, 0, 0.09);
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
  }
  .footerText {
    color: rgba(0, 0, 0, 0.6);
    width: 600px;
    font-family: 'Inter', monospace;
    font-size: 12px;
    padding-bottom: 20px;
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .socials img {
    opacity: 0.8;
    width: 35px;
    height: 35px;
  }
  .socials img:hover {
  opacity: 1;
  transform: scale(1.15);
  transition: all 0.2s ease-in-out;
}
`;
