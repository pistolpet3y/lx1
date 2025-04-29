import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronDown } from 'react-feather';

const options = [
  'Price: Low to High',
  'Price: High to Low',
  'Best Sellers',
  'New Arrivals',
  'Most Popular',
];

const CustomSelectWrapper = styled.div`
  position: relative;
  display: inline-block;

  .select-button {
    background: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    width: 200px;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Inter', monospace;
  }

  .select-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
    list-style: none;
    padding: 0;
  }

  .select-option {
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Inter', monospace;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const CustomSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Sort By');

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  };
  
  const selectOption = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return(
    <CustomSelectWrapper>
      <button className="select-button" onClick={toggleDropdown}>
        {selected}
        <ChevronDown
  size={16}
  style={{
    marginLeft: '8px',
    transition: 'transform 0.3s',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }}
/>
        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
      </button>
      {isOpen && (
        <ul className="select-dropdown">
          {options.map((option) => (
            <li key={option} className="select-option" onClick={() => selectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </CustomSelectWrapper>
  );
};

export default CustomSelect;