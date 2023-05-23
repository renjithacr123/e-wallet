import styled from 'styled-components';

export const TransferContainer = styled.section`
  padding: 2rem;
  overflow: auto;
  position: relative;
  font-family: 'Fredoka';
  max-width: 80%;
  margin: 0 auto;
`;

export const FormBody = styled.form`
  padding-right: 32px;
  padding-left: 32px;
`;

export const FormHeading = styled.h1`
  font-family: 'Fredoka';
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffb966;
`;

export const FormLabel = styled.label`
  color: rgba(59, 49, 40, 0.6);
  font-family: 'Nunito Sans';
  width: 100%;
`;
export const FormInput = styled.input`
  font-family: 'Nunito Sans';
  outline: none;
  width: 100%;
  font-size: 1.4rem;
  padding: 0.3rem 0.5rem;
  border-radius: 3px;
  border: 1px solid rgb(59, 49, 40);
`;

export const FormButton = styled.input`
  font-family: 'Nunito Sans';
  outline: none;
  width: 103%;
  font-size: 1.4rem;
  padding: 0.3rem 0.5rem;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background-color: #ffb966;
  color: #fff;
  margin: 1rem 0 0 0;

  &:hover {
    background-color: #000;
  }
`;

export const FormSelect = styled.select`
  font-family: 'Nunito Sans';
  outline: none;
  width: 103%;
  font-size: 1.4rem;
  padding: 0.3rem 0.5rem;
  border-radius: 3px;
  border: 1px solid rgb(59, 49, 40);
`;

export const Line = styled.hr`
  margin: 35px 0;
  width: 100%;
`;
