import { Box, Chip, Container, Divider } from "@mui/material";
import React from "react";
import SocialMediaSignUp from "./SocialMediaSignUp";

export default function Signup() {
    return (
        <Container style={{align:"center", width:"60%"}}>
                <SocialMediaSignUp />
                <Divider>
                    <Chip label="OR" variant="outlined" />
                </Divider>
        </Container>
    );
}
