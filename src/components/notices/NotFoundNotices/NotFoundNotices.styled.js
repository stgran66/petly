import { Button } from '@mui/material';
import { styled } from '@mui/system';

const NotFoundContainer = styled('div')`
  min-width: 320px;
  dislay: flex;
  flex-direction: column;
  align-items: center;
`;
const NotFoundImg = styled('img')`
  width: 360px;
  height: auto;
  dislay: block;
`;

const NotFoundTitle = styled('title')`
  width: 360px;
  height: auto;
  dislay: block;
`;

const NotFoundDesc = styled('p')`
  width: 360px;
  height: auto;
  dislay: block;
`;
const NotFoundBtn = styled(Button)`
  width: 360px;
  height: auto;
  dislay: block;
`;
const styles = {
  NotFoundImg,
  NotFoundContainer,
  NotFoundTitle,
  NotFoundDesc,
  NotFoundBtn,
};
export default styles;
