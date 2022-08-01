import { Chip, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./LoginForm";
import SocialMediaLogin from "./SocialMediaLogin";

export default function Login() {
    return (
        <Container style={{ align: "center", width: "60%" }}>
            <SocialMediaLogin />
            <Divider>
                <Chip label="OR" variant="outlined" />
            </Divider>
            <LoginForm />
            <Typography marginLeft={3} marginTop={2}>
               New user? <Link to="/signup">Sign up!</Link>
            </Typography>
            <ToastContainer autoClose={2000} />
        </Container>
    );
}
