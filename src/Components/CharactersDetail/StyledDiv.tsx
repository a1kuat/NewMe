import {styled} from '@mui/system';
import seriesImage from '../../Images/bp.jpg';

const StyledDiv = styled('div')({
    //backgroundImage: `url(${seriesImage})`,
    backgroundColor: 'black',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    overflow: 'auto'
  });

export default StyledDiv;