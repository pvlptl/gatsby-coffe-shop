import React from 'react';
import {Link} from 'gatsby';
import { FaCoffee, FaShoppingCart } from 'react-icons/fa';
import './styles.scss';

const Header = () => (
  <div className='_container'>
    <Link to="/">
      <div className='icon'>
        <FaCoffee/>
      </div>
    </Link>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
      <li><Link to="/contacts">Contacts</Link></li>
      <li><Link to="/"><div className='icon'><FaShoppingCart/></div></Link></li>
    </ul>
  </div>
);

export default Header;