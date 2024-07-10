import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Grocery from './Grocery';
import Cart from './Cart';
import Payment from './Payment';
import { CssBaseline, Container, Box, Button, AppBar, Toolbar, Typography } from '@mui/material';
import { CartProvider } from './CartContext';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addUser = (email, password) => {
    setUsers([...users, { email, password }]);
  };

  const loginUser = () => {
    setIsLoggedIn(true);
  };

  return (
    <CartProvider>
      <Router>
        <CssBaseline />
        {isLoggedIn ? (
          <>
            <AppBar position="static">
              <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ textAlign: 'center', flexGrow: 1 }}>
                  Grocery Delivery Management System
                </Typography>
                <Box>
                  <Button component={Link} to="/cart" color="inherit">
                    Cart
                  </Button>
                </Box>
              </Toolbar>
            </AppBar>
            <Routes>
              <Route path="/grocery" element={<Grocery />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/" element={<Navigate to="/grocery" />} />
            </Routes>
          </>
        ) : (
          <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
            <AppBar position="static">
              <Toolbar sx={{ justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ textAlign: 'center', flexGrow: 1 }}>
                  Grocery Delivery Management System
                  <Box sx={{ display: 'inline', marginLeft: '10px' }}>
                    <Button component={Link} to="/login" color="inherit">
                      Login
                    </Button>
                    <Button component={Link} to="/signup" color="inherit">
                      Sign Up
                    </Button>
                  </Box>
                </Typography>
              </Toolbar>
            </AppBar>
            <Box display="flex" justifyContent="center" mt={2}>
              <Routes>
                <Route path="/login" element={<Login users={users} loginUser={loginUser} />} />
                <Route path="/signup" element={<Signup addUser={addUser} />} />
                <Route path="/" element={<Navigate to="/login" />} />
              </Routes>
            </Box>
          </Container>
        )}
      </Router>
    </CartProvider>
  );
};

export default App;
