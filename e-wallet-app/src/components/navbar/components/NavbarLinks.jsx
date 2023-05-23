import React from 'react';
import { NavbarContainer, NavbarItems, NavbarItem } from '../Navbar.styles';

// skeleton of NavbarLinks
export const NavbarLinks = (props) => {
  const { user, logoutHandler, changePage, page } = props;

  // links are the navbar links
  let links = null;
  if (user) {
    links = (
      <PagesLink
        changePage={changePage}
        page={page}
        logoutHandler={logoutHandler}
      />
    );
  }

  return <NavbarContainer>{links}</NavbarContainer>;
};

// link to pages
const PagesLink = (props) => {
  const { changePage, logoutHandler } = props;

  return (
    <NavbarItems>
      <NavLink
        onClickHandler={changePage}
        page='home'
        text='Home'
      />
      <NavLink
        onClickHandler={changePage}
        page='transfer'
        text='Transfer'
      />
      <NavLink onClickHandler={logoutHandler} text='Logout' />
    </NavbarItems>
  );
};

// navbar items
const NavLink = (props) => {
  const { text, page } = props;

  function clickLink(event) {
    if (page) {
      event.preventDefault();
      props.onClickHandler(page);
    } else {
      event.preventDefault();
      props.onClickHandler();
    }
  }

  return (
    <li>
      <NavbarItem onClick={clickLink} href='#'>
        {text}
      </NavbarItem>
    </li>
  );
};
