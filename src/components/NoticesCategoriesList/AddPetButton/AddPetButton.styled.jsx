import styled from '@emotion/styled';

export const Btn = styled.button`
  position: fixed;
  z-index: 999;
  top: 50%;
  translate: 0 -50%;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: none;

  background: #54adff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  color: #ffffff;

  svg {
    width: 24px;
    height: 24px;
  }

  :hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  @media screen and (min-width: 768px) {
    position: static;
    margin-top: 20px;
    margin-right: 32px;
    margin-left: auto;
    gap: 8px;
    flex-direction: row;
    width: 130px;
    background: #54adff;
    border-radius: 40px;
    height: 40px;

    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }
`;
