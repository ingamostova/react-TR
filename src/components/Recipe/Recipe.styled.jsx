import styled from '@emotion/styled';

export const Image = styled.img`
  display: block;
  width: 320px;
  height: auto;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const InfoItem = styled.p`
  margin: 0;
  padding: 8px;
`;

export const Type = styled.span`
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ variant, difficulty }) => {
    const defaultColor = 'lightgray';
    switch (variant) {
      case 'easy':
        return difficulty ? 'green' : defaultColor;
      case 'medium':
        return difficulty ? 'lightblue' : defaultColor;
      case 'hard':
        return difficulty ? 'red' : defaultColor;

      default:
        throw new Error('Unsupported variant prop');
    }
  }};
`;
