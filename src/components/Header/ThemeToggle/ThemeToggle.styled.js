import { styled } from '@mui/system';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';

const ToggleButton = styled('button')`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const StyledLightIcon = styled(BsFillSunFill)`
  color: #fdb813;
`;
const StyledDarkIcon = styled(BsMoonStarsFill)`
  color: #e1e1e1;
`;

const styles = { ToggleButton, StyledDarkIcon, StyledLightIcon };

export default styles;
