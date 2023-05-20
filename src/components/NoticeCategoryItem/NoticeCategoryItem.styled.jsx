import styled from '@emotion/styled';

export const Container = styled.div`
  width: 280px;
  height: 456px;
  /* outline: 1px solid black; */
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 0px 0px 40px 40px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  display: block;
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 288px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const Title = styled.h2`
  font-family: Manrope;
  font-weight: 700;
  size: 24px;
  line-height: 1.37;
  margin: 0;
  /* width: 231px; */
`;

export const Info = styled.div`
  padding-left: 16px;
  padding-top: 20px;
  padding-right: 16px;
  color: #111111;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const BtnLaernMore = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  gap: 10px;
  width: 248px;
  height: 38px;
  border: 2px solid #54adff;
  border-radius: 40px;
  background: inherit;
  color: #54adff;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  :hover,
  :focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
    border: none;
    outline: none;
  }
`;

export const Type = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 11px 17px; */
  margin: 0px;
  gap: 10px;

  position: absolute;
  width: 126px;
  height: 32px;
  left: 0px;
  top: 16px;

  /* blue light */

  background: #cce4fb;
  border-radius: 0px 16px 16px 0px;
  border: none;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
`;

export const BtnAddToFav = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 12px;
  top: 12px;

  background: #c5dff6;
  border: none;
  border-radius: 50px;
`;

export const SpanContainer = styled.div`
  position: absolute;
  bottom: 12px;
  left: 4px;
  display: flex;
  flex-direction: row;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    left: 24px;
  }

  @media screen and (min-width: 1280px) {
    gap: 12px;
    left: 12px;
  }
`;

export const Span = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 2px 4px; */
  gap: 4px;

  /* position: absolute; */
  width: 80px;
  height: 28px;
  left: 8px;
  top: 248px;

  background: #cce4fb;
  border-radius: 16px;
`;

export const SpanText = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`;
