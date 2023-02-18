import {styled} from '@mui/system'
import { Grid, Typography } from '@mui/material';



const Container = styled(Grid)`
padding:24px 0;
`;

const ItemList = styled(Typography)(({ theme }) => ({
  color:  theme.colors.text
}))

const styles = { Container, ItemList }

export default styles



