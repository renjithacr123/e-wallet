import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 2em;
  margin: 4em auto 4em;
  max-width: 28.75em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CardHeader = styled.header`
  padding: 0.5em;
`;

export const CardHeading = styled.h1`
  font-family: 'Fredoka';
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #ffb966;
`;

export const CardBody = styled.form`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin-top: 24px;
  border: 0;
`;

export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: 'Poppins';
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #ffb966;
    outline: 0;
  }
`;

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #ffb966;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;
