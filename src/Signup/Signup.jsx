import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        reenterPassword: '',
        phoneNumber: ''
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.reenterPassword || !formData.phoneNumber) {
            setError("All fields are required.");
            return;
        }
        
        if (formData.password !== formData.reenterPassword) {
            setError("Passwords do not match!");
            return;
        }

        sessionStorage.setItem('user', JSON.stringify(formData));
        alert('SignUp successful!');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{
            width: "50%", backgroundColor: "rgb(240, 240, 240)", padding: "20px",
            borderRadius: "10px", margin: "20px auto", border: "1px solid black"
        }}>
            <Typography variant="h3" gutterBottom sx={{ textAlign: "center", fontWeight: "bold" }}>Sign Up</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <TextField variant="outlined" label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} margin="normal" fullWidth />
            <TextField variant="outlined" label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} margin="normal" fullWidth />
            <TextField variant="outlined" label="E-mail" name="email" value={formData.email} onChange={handleChange} type="email" margin="normal" fullWidth />
            <TextField variant="outlined" label="Password" name="password" value={formData.password} onChange={handleChange} type="password" margin="normal" fullWidth />
            <TextField variant="outlined" label="Re-enter Password" name="reenterPassword" value={formData.reenterPassword} onChange={handleChange} type="password" margin="normal" fullWidth />
            <TextField variant="outlined" label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="tel" margin="normal" fullWidth />
            <Button variant="contained" color="primary" type="submit" sx={{ marginTop: "16px" }} fullWidth>Sign Up</Button>
        </Box>
    );
}

export default SignUp;
