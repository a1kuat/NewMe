import { styled } from '@mui/system';

const StyledButton = styled('button')(() => ({
    fontSize: '1.2em',
    padding: '0.5em 1em',
    marginBottom: '1em',
    cursor: 'pointer',
    fontFamily: '"Bangers", cursive',
    background: 'rgb(255, 240, 33)',
    transition: 'linear 0.2s',
    border: '1px solid black',
    boxShadow: '2px 2px black',
    '&:hover': {
      transform: 'translate(-2px, -2px)',
      boxShadow: '4px 4px black',
    },
    '&.reset': {
      marginLeft: '0.25em',
      backgroundColor: 'white',
    },
  }));

export default StyledButton;