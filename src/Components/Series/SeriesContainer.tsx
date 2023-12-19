import {styled} from '@mui/system';
import paperImage from '../../Images/paper.jpg';
import { Box} from '@mui/material';

const SeriesContainer = styled(Box)(({ theme }) => ({
    maxWidth: '80vw',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '10px',
    padding: '1em',
    backgroundColor: 'red',
    //backgroundImage: `url(${paperImage})`,
  }));

export default SeriesContainer;