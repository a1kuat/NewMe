import {styled} from '@mui/system';
import characterImage from './Images/sp.jpeg';

const StyledDiv = styled('div')({
    backgroundImage: `url(${characterImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    overflow: 'auto'
  });

export default StyledDiv;
