import { styled } from '@mui/system';

const StyledApp = styled('div')`
  min-height: 100vh;
  height: 100%;
  background-color: ${props => props.theme.colors.backgroundBody};
  transition: all linear 0.4s;
`;

export default StyledApp;
