import {styled} from '@mui/system';
import graphImage from '../../Images/th.jpg';

const StyledDiv = styled('div')({
    backgroundImage: `url(${graphImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    overflow: 'auto'
  });

export default StyledDiv;