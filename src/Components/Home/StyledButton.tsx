import {styled} from '@mui/system';
import { Button } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: 'red',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'red',
      color: 'white',
      transform: 'scale(1.1)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
}));

export default StyledButton;