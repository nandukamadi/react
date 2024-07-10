// OrderConfirmation.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const OrderConfirmation = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <CheckCircleIcon sx={{ fontSize: '5rem', color: 'green' }} />
      <Typography variant="h5" sx={{ mt: 2 }}>
        Your order is successfully placed!
      </Typography>
    </Box>
  );
};

export default OrderConfirmation;
