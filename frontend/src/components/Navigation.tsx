import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationStyle = styled.div`
  .navigation a:link {
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
  }

  .navigation a:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 2px;
  }
  .navigation a:visited {
    color: white;
  }

  .navigation a:active {
    color: white;
    font-weight: 700;
  }

  .navigation {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    gap: 50px;
    display: flex;
    justify-content: center;
    font-family: 'Inter', monospace;
    z-index: 3;
    padding: 0 80px;
    padding-top: 6px;
    height: 25px;
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.88);
  }
`;

export default function Navigation() {
  return (
    <NavigationStyle>
      <div className="logo">
        <div className="navigation">
          <Link to="/shoes">Shoes</Link>
          <a href="" target="_blank" style={{ color: 'rgba(0, 0, 0, 0.1)'}}>
            Clothing
          </a>
          <a href="" target="_blank" style={{ color: 'rgba(0, 0, 0, 0.1)'}}>
            Accessories
          </a>
          <a href="" target="_blank" style={{ color: '#d33918', fontWeight: 700 }}>
            Sale
          </a>
        </div>
      </div>
    </NavigationStyle>
  );
}
