import { Button } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PetsIcon from '@mui/icons-material/Pets';
import SearchIcon from '@mui/icons-material/Search';

const NotFoundContainer = styled('div')`
  min-width: 320px;
  dislay: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;

const NotFoundTitle = styled('h2')`
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.headers.s};
`;

const NotFoundDesc = styled('p')`
  padding: 4px;
  text-align: center;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.text.l};
  font-family: ${({ theme }) => theme.fonts[0]};
`;
const NotFoundBtn = styled(Button)`
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.accent};
  padding: 16px;
  min-width: 200px;
  margin-left: 50%;
  transform: translate(-50%);
  transition: ${({ theme }) => theme.transitions.normal};
  align-self: center;
  border: 1px solid ${({ theme }) => theme.colors.accent};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.white};
  }
`;

const FavorIcon = styled(FavoriteIcon)`
  fill: currentColor;
`;

const TryIcon = styled(PetsIcon)`
  fill: currentColor;
`;

const FindIcon = styled(SearchIcon)`
  fill: currentColor;
`;

const styles = {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundDesc,
  NotFoundBtn,
  FavorIcon,
  TryIcon,
  FindIcon,
};
export default styles;
