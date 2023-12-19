import {styled} from '@mui/system';
import { Card } from '@mui/material';
import paperImage from '../../Images/paper.jpg';

const SeriesCard = styled(Card)(({ theme }) => ({
    border: '2px solid rgb(161, 161, 161)',
    //backgroundImage: `url(${paperImage})`,
    backgroundColor: 'white',
    position: 'absolute',
    boxSizing: 'content-box',
    top: '10%',
    left: '7%',
    right: '50%',
    padding: '1em',
    display: 'flex',
    flexDirection: 'row',
    boxShadow: '4px 4px black',
  }));

export default SeriesCard;