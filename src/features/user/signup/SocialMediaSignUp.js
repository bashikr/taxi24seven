import React from "react";
import {
    GOOGLE_AUTH_URL,
    FACEBOOK_AUTH_URL,
    GITHUB_AUTH_URL,
} from "../../../constants/constants";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GithubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

export default function SocialMediaSignUp() {
    return (
        <Container>
            <Box sx={{ height: "90vh" }}>
                <Typography textAlign="center" margin={1}>
                    Sign up with Social media account
                </Typography>
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button
                        href={GOOGLE_AUTH_URL}
                        variant="outlined"
                        size="large"
                    >
                        <GoogleIcon
                            style={{ color: "#FF0000" }}
                            fontSize="large"
                        />
                    </Button>
                    <Button
                        variant="outlined"
                        href={FACEBOOK_AUTH_URL}
                        size="large"
                    >
                        <FacebookIcon color="primary" fontSize="large" />
                    </Button>

                    <Button
                        variant="outlined"
                        size="large"
                        href={GITHUB_AUTH_URL}
                    >
                        <GithubIcon
                            style={{ color: "black" }}
                            fontSize="large"
                        />
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
}
