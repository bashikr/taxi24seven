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
            <Box sx={{ height: "100px", width: "100%" }}>
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
                        style={{
                            height: "48px",
                            width: "130px",
                            border: "1",
                            borderColor: "#dee3ed",
                            borderRadius: "7px",
                        }}
                    >
                        <GoogleIcon
                            style={{ color: "#FF0000", width: "100px" }}
                            fontSize="medium"
                        />
                    </Button>
                    <Button
                        variant="outlined"
                        href={FACEBOOK_AUTH_URL}
                        size="large"
                        style={{
                            height: "48px",
                            width: "130px",
                            border: "1",
                            borderColor: "#dee3ed",
                            borderRadius: "7px",
                        }}
                    >
                        <FacebookIcon
                            color="primary"
                            fontSize="medium"
                            style={{ width: "100px" }}
                        />
                    </Button>

                    <Button
                        variant="outlined"
                        href={GITHUB_AUTH_URL}
                        size="large"
                        style={{
                            height: "48px",
                            width: "130px",
                            border: "1",
                            borderColor: "#dee3ed",
                            borderRadius: "7px",
                        }}
                    >
                        <GithubIcon
                            style={{ color: "black", width: "100px" }}
                            fontSize="medium"
                        />
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
}
