import {styled} from '@mui/system';
import { Card } from '@mui/material';
const StyledCard2 = styled(Card)(({ }) => ({
    width: '40%',
    height: '50vh',
    background: 'red',
    borderRadius: '15px',
    position: 'absolute',
    right: '10%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}));

export default StyledCard2 ;