import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  padding-bottom: 40px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.cardsShadowUser};
`;

const PetInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  font-family: 'Manrope';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;
`;

const PetInfoName = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
`;

const PetInfoComment = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.57;
`;

const PetInfoFoto = styled.img`
  width: 240px;
  height: 240px;
  background-color: green;
  border-radius: 20px;
`;

const PetInfoWrapp = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const styles = {
  List,
  Item,
  PetInfo,
  PetInfoName,
  PetInfoComment,
  PetInfoFoto,
  PetInfoWrapp,
};

export default styles;
