import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import { FaCoffee, FaShoppingCart } from 'react-icons/fa';

const Header = () => (
  <Container>
    <Link to="/">
      <Icon>
        <FaCoffee/>
      </Icon>
    </Link>
    <UL>
      <LI><Link to="/">Home</Link></LI>
      <LI><Link to="/about-us">About Us</Link></LI>
      <LI><Link to="/contacts">Contacts</Link></LI>
      <LI><Link to="/"><Icon><FaShoppingCart/></Icon></Link></LI>
    </UL>
  </Container>
);

const Icon = styled.div`
    color: white;
    font-size: 25px;
`;

const Container = styled.header`
    padding: 0 25px;
    background: rebeccapurple;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    a {
      box-shadow: none;
    }
`;

const UL = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const LI = styled.li`
    margin: 0;
    padding: 0;
    a {
      color: white;
      text-decoration: none;
      margin: 0 10px;
      &:hover {
        color: gold;
      }
    }
`;

export default Header;