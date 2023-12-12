// Marquee.js

import Box from '@mui/material/Box';
import './style.css';

const Marquee = () => {
  return (
    <Box className="marquee-box">
      <div className="marquee-content">
        Mensagem 1 - Mensagem 2 - Mensagem 3 - ...
      </div>
    </Box>
  );
};

export default Marquee;
