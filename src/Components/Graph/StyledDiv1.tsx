import { styled } from '@mui/system';

export const StyledDiv1 = styled('div')(({ color } ) => ({
    background: color || 'red',
    width: 50,
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3px'
  }));