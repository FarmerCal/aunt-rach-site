import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaHandHoldingHeart } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <FaHandHoldingHeart size={50} />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#thousand-words">
          <NavLink>Images</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#known-legend">
          <NavLink>Song</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#end">
          <NavLink>End</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;
