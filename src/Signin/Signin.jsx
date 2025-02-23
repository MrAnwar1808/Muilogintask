import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(sessionStorage.getItem('user'));

        if (!storedUser) {
            setError('No user found. Please sign up first.');
            return;
        }

        if (storedUser.email === formData.email && storedUser.password === formData.password) {
            alert('Login successful!');
        } else {
            setError('Invalid email or password!');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{
            width: "40%", backgroundColor: "rgb(240, 240, 240)", padding: "20px",
            borderRadius: "10px", margin: "20px auto", border: "1px solid black"
        }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: "center", fontWeight: "bold" }}>Sign In</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <TextField variant="outlined" label="E-mail" name="email" value={formData.email} onChange={handleChange} type="email" margin="normal" fullWidth />
            <TextField variant="outlined" label="Password" name="password" value={formData.password} onChange={handleChange} type="password" margin="normal" fullWidth />
            <Button variant="contained" color="primary" type="submit" sx={{ marginTop: '16px' }} fullWidth>Sign In</Button>
        </Box>
    );
}

export default SignIn;
