import React from 'react';
import styled from 'styled-components';

//import './header.css';

const Header = () => {
  const Header = styled.div`
    margin-top: .5rem;
    padding-left: 10px;

    & ul li {
      list-style: none;
      margin: 0;
      padding: .5rem 1rem;
      border-radius: 3px;
    }

    & ul li:hover {
      background-color: #444;
    }

    & a:hover {
      text-decoration: none;
    }

    & h3 a {
      color: white;
    }
    
    & h3 a:hover {
      color: #00bc8c;
    }
  `;

  return (
    <Header className="d-flex">
      <h3>
        <a href="#">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
        <a href="#">People</a>
        </li>
        <li>
        <a href="#">Planets</a>
        </li>
        <li>
        <a href="#">Starships</a>
        </li>
      </ul>
    </Header>
  );
};

export default Header;