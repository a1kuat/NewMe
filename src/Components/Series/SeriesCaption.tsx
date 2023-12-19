import {styled} from '@mui/system';
import  paperImage  from '../../Images/paper.jpg';
import { Typography } from '@mui/material';

const SeriesCaption = styled(Typography)(() => ({
    fontFamily: '"Bangers", cursive',
    fontSize: '1.6em',
    fontWeight: "bold",
    textAlign: 'center',
    margin: 'auto auto 0 auto',
    padding: '0.5em 1em',
    backgroundColor: 'white',
    //backgroundImage: `url(${paperImage})`,
    color: 'black',
    border: '1px solid black',
    boxShadow: '2px 2px black',
    position: 'absolute',
    bottom: '1rem',
    left: '50%',
    transform: 'translateX(-50%)',
    opacity: 0,
    textDecoration: 'underline',
    width: '60%',
    '&:hover': {
      opacity: 1,
    },
  }));

export default SeriesCaption;