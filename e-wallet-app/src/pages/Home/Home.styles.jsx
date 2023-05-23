import styled from "styled-components";

export const AccountContainer = styled.section`
  padding: 2rem;
`;

export const TransactionHistoryTable = styled.table`
  border-radius: 0.3rem;
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;
  padding-bottom: 1rem;
  font-weight: normal;
`;

export const TransactionHistoryItem = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr 1fr 2fr;
  padding: 0.8rem;
  place-items: center;
  text-align: center;
  gap: 8px;
  &.even {
    background-color: rgba(238, 238, 238, 0.5);
  }
`;

export const HomeHeading = styled.h1`
font-family: 'Fredoka';
font-size: 1.5rem;
font-weight: bold;
color: #ffb966;
margin-bottom: 10px;
`

export const AccountDetailsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  padding: 0.25rem;
  border-radius: 0.3rem;
  margin-bottom: 2rem;
`;
