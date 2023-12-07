import {styled} from '@mui/system';
import paperImage from '../../Images/paper.jpg';
import { Box} from '@mui/material';

const SeriesContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '10%',
    left: '7%',
    right: '50%',
    paddingTop: theme.spacing(2),
    boxSizing: 'content-box',
    backgroundColor: 'white',
    backgroundImage: `url(${paperImage})`,
  }));

export default SeriesContainer;