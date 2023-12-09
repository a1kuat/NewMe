import React from "react";
import { Backdrop, CircularProgress } from '@mui/material';

const LoadingPage = () => {
  return (
    <Backdrop
      sx={{ 
        color: '#fff', 
        zIndex: (theme) => theme.zIndex.drawer + 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.9)' 
      }}
      open={true}
    >
      <CircularProgress sx={{ color:"red" }} />
    </Backdrop>
  );
}
  
export default LoadingPage;