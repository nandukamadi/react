import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Paper, TextField, IconButton, Modal } from '@mui/material';
import { Delete } from '@mui/icons-material'; // Import Delete icon from MUI icons
import { useCart } from './CartContext'; // Example import if CartContext.js is in the same directory
import AddressForm from './AddressForm'; // Import the AddressForm component

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [address, setAddress] = useState(null);

  const handleChange = (item, quantity) => {
    updateQuantity(item.id, quantity);
  };

  const handleDelete = (itemId) => {
    removeFromCart(itemId);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items to the cart before proceeding to payment.');
    } else {
      setShowAddressForm(true); // Show address form on checkout
    }
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleAddressSubmit = (addressData) => {
    setAddress(addressData); // Store the address data
    setOrderPlaced(true); // Mark order as placed
  };

  const handleAddToCart = (item) => {
    // Add to cart logic here
  };

  const handleResetOrder = () => {
    setOrderPlaced(false); // Reset order placed state
    setShowAddressForm(false); // Hide address form
    setAddress(null); // Clear stored address
  };

  const handleCloseModal = () => {
    setOrderPlaced(false); // Close the order confirmation modal
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Grid container spacing={2}>
              {cart.map((item) => (
                <Grid item xs={12} key={item.id}>
                  <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <img src={item.image} alt={item.name} style={{ width: '80px', marginRight: '16px' }} />
                    <Typography>{item.name}</Typography>
                    <Typography>₹{item.price}</Typography>
                    <TextField
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleChange(item, e.target.value)}
                      inputProps={{ min: 1 }}
                      sx={{ width: '80px' }}
                    />
                    <IconButton aria-label="delete" onClick={() => handleDelete(item.id)}>
                      <Delete />
                    </IconButton>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
          {!showAddressForm && (
            <Button variant="contained" color="primary" onClick={handleCheckout} sx={{ mt: 2 }}>
              Proceed to Payment
            </Button>
          )}
          {showAddressForm && <AddressForm onSubmit={handleAddressSubmit} />}
        </>
      )}
      <Modal
        open={orderPlaced}
        onClose={handleCloseModal}
        aria-labelledby="order-placed-modal"
        aria-describedby="order-placed-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
             Order Placed Successfully <span role="img" aria-label="checkmark">✅</span>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Thank you for your order!
          </Typography>
          <Button variant="contained" color="primary" onClick={handleResetOrder}>
            Continue Shopping
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Cart;
