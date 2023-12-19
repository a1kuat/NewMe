import {styled} from '@mui/system';

interface StyledDivProps {
  bgImage: string;
}

const StyledDiv = styled('div')<StyledDivProps>(({ bgImage }) => ({
  //backgroundImage: `url(${bgImage})`,
  backgroundColor: 'black',
  height: '100vh',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export default StyledDiv;
