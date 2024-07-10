// AddressForm.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const AddressForm = ({ onSubmit }) => {
  const [street, setStreet] = useState('');
  const [doorNumber, setDoorNumber] = useState('');
  const [pincode, setPincode] = useState('');
  const [district, setDistrict] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    // Basic validation, you can add more checks as per your requirement
    if (!street || !doorNumber || !pincode || !district || !username) {
      alert('Please fill in all fields.');
      return;
    }

    // Assuming onSubmit prop is a function passed from parent component (Cart.js)
    onSubmit({ street, doorNumber, pincode, district, username });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Enter Delivery Address
      </Typography>
      <TextField
        label="Street"
        variant="outlined"
        fullWidth
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Door Number"
        variant="outlined"
        fullWidth
        value={doorNumber}
        onChange={(e) => setDoorNumber(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Pincode"
        variant="outlined"
        fullWidth
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="District"
        variant="outlined"
        fullWidth
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Place Order
      </Button>
    </Box>
  );
};

export default AddressForm;
