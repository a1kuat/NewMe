import {styled} from '@mui/system';
import { Card } from '@mui/material';

const SeriesCard = styled(Card)(({ theme }) => ({
    border: '2px solid rgb(161, 161, 161)',
    background: 'rgba(255, 255, 255, 0.67)',
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    height: '400px',
    boxShadow: '4px 4px black',
    filter: 'grayscale(100)',
    transition: '0.2s linear',
    textDecorationColor: 'black',
    '&:hover': {
      cursor: 'pointer',
      filter: 'grayscale(0)',
      boxShadow: '6px 6px black',
      transform: 'translate(-2px, -2px)',
    },
  }));

export default SeriesCard;