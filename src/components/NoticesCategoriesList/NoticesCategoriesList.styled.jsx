import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  /* width: 320px; */
  /* margin: 0 auto; */
`;

export const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 32px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 1248px;
  }
`;
