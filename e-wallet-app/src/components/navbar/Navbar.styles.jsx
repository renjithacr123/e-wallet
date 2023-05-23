import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 2em;
  margin: 4em auto 4em;
  max-width: 48.75em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  height: 100%;
`;

export const MainContainer = styled.div``;

export const NavbarContainer = styled.section`
  font-family: 'Fredoka';
  font-size: 1.5rem;
  background-color: #ffb966;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NavbarItems = styled.ul`
  list-style: none;
  display: flex;
  padding: 0.8rem 0;
  gap: 2em;
`;

export const NavbarItem = styled.a`
  color: #fff;
`;
