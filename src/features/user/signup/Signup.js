import { Box, Chip, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";
import SocialMediaSignUp from "./SocialMediaSignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
    return (
        <Container style={{ align: "center", width: "60%" }}>
            <SocialMediaSignUp />
            <Divider>
                <Chip label="OR" variant="outlined" />
            </Divider>
            <SignupForm />
            <Typography marginLeft={3} marginTop={2}>
                Already have an account? <Link to="/login">Login!</Link>
            </Typography>
            <ToastContainer autoClose={2000} />
        </Container>
    );
}
