import {styled} from '@mui/system';
import { CardMedia } from '@mui/material';

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    height: '100%',
    component: 'img',
    objectFit: 'cover',
  }));

export default StyledCardMedia;