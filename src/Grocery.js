// Grocery.js
import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Paper, FormControlLabel, Switch, Button, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material'; // Import ShoppingCart icon from MUI icons
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Import CartContext for managing cart state

const products = [
  { id: 1, name: 'Vegetables', price: 50, image: '/images/vegetables.jpg' },
  { id: 2, name: 'Apples', price: 30, image: '/images/apples.jpg' },
  { id: 3, name: 'Fruits', price: 40, image: '/images/fruits.jpg' },
  { id: 4, name: 'Milk', price: 25, image: '/images/milk.jpeg' },
  { id: 5, name: 'Curd', price: 20, image: '/images/curd.jpg' },
  { id: 6, name: 'Bread', price: 15, image: '/images/bread.jpeg' },
  { id: 7, name: 'Lays Packets', price: 10, image: '/images/lays.jpeg' },
];

const Grocery = () => {
  const { addToCart } = useCart(); // Use addToCart function from CartContext
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(products);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const navigate = useNavigate(); // Hook from react-router-dom for navigation

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(value)
    );
    setSearchResults(filteredProducts);
  };

  const toggleAllProducts = () => {
    setShowAllProducts(!showAllProducts);
    setSearchTerm(''); // Reset search term when toggling to show all products
    setSearchResults(showAllProducts ? products : []); // Show all products or empty array
  };

  const handleAddToCart = (product) => {
    addToCart(product); // Call addToCart function from CartContext
    alert(`Added ${product.name} to cart!`);
  };

  const handleCartClick = () => {
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Grocery Items
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ mr: 2 }}
        />
        <FormControlLabel
          control={<Switch checked={showAllProducts} onChange={toggleAllProducts} />}
          label="Show All Products"
        />
      </Box>
      <Grid container spacing={2}>
        {searchResults.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', marginBottom: '8px' }} />
              <Typography>{product.name}</Typography>
              <Typography>₹{product.price}</Typography>
              <Button variant="contained" color="primary" onClick={() => handleAddToCart(product)} sx={{ mt: 2 }}>
                Add to Cart
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <IconButton color="inherit" aria-label="cart" onClick={handleCartClick} sx={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <ShoppingCart />
      </IconButton>
    </Box>
  );
};

export default Grocery;
