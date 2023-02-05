import styled from 'styled-components';

export const ContainerWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  padding-bottom: 40px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.cardsShadowUser};
`;

export const PetInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  font-family: 'Manrope';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;
`;

export const PetInfoName = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
`;

export const PetInfoComment = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.57;
`;

export const PetInfoFoto = styled.img`
  width: 240px;
  height: 240px;
  background-color: green;
  border-radius: 20px;
`;

export const PetInfoWrapp = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
