import styled from 'styled-components';
import { AddCircle20Filled } from '@fluentui/react-icons';

const ContainerWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: baseline;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 22px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 25px;
  }
`;

const Title = styled.h2`
  font-family: ${props => props.theme.fonts[0]};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.text.xl};
  line-height: 1.35;
  letter-spacing: 0.04em;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.headers.s};
    line-height: 1.357;
  }
`;

const UserPetAddButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  cursor: pointer;
  background-color: transparent;

  font-family: ${props => props.theme.fonts[0]};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.text.xl};
  line-height: 1.35;
  letter-spacing: 0.04em;

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-right: 16px;
  }
`;

const PetAddIcon = styled(AddCircle20Filled)`
  margin-left: 5px;
  width: 50px;
  height: 50px;
  color: ${props => props.theme.colors.accent};
  /* scale: 1; */

  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.2;
  }
`;

const styles = { ContainerWrapp, Title, UserPetAddButton, PetAddIcon };

export default styles;
