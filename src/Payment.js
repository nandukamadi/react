// src/Payment.js

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayment = () => {
    alert('Payment successful!');
    clearCart();
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Payment
      </Typography>
      <Typography variant="h6">Total Amount: ₹{totalAmount}</Typography>
      <Button variant="contained" color="primary" onClick={handlePayment} sx={{ mt: 2 }}>
        Pay Now
      </Button>
    </Box>
  );
};

export default Payment;
