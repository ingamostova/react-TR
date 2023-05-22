import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  width: 280px;
  background-color: #fff;
  border-radius: 20px;
  padding-top: 40px;
  /* padding-left: 12px;
  padding-right: 12px; */
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 681px;
    /* padding-top: 32px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px; */
    padding: 0;
    border-radius: 40px;
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

export const Image = styled.img`
  display: block;
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 0px 0px 40px 40px;

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 298px;
    margin: 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;

export const ContainerInfo = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
    padding: 32px 32px 24px;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  right: 5px;
  top: 5px;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    right: 19px;
    top: 16px;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  width: 198px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;

  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 38px;
    width: 250px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  margin: 0;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Comment = styled.p`
  margin: 12px 0;
  padding: 0 12px;
  width: 256px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 618px;
    margin: 0 auto;
    padding: 0;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 256px;
  padding: 8px 0;
  gap: 8px;
  text-decoration: none;

  border: 2px solid #54adff;
  border-radius: 40px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #54adff;

  :hover,
  :focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
    border: none;
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

export const AddToFav = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;
  width: 256px;
  height: 40px;

  background: #54adff;
  border-radius: 40px;
  border: none;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #fef9f9;

  :hover,
  :focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 17px;
    margin: 0 auto;
    justify-content: flex-end;
    margin-top: 70px;
    padding-right: 31px;
    padding-bottom: 24px;
  }
`;
