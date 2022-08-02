import { Avatar, Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { profileAsync } from "../profile/profileSlice";

import { selectProfile } from "./profileSlice";

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(selectProfile);

    useEffect(() => {
        dispatch(profileAsync());
    }, []);

    return (
        <Container style={{ width: "60%" }}>
            <Box
                height={80}
                marginTop={10}
                alignItems="center"
                justifyContent="center"
                display="flex"
                flexDirection="column"
            >
                <Box>
                    {profile.imageUrl ? (
                        <Avatar alt={profile.name} src={profile.imageUrl} />
                    ) : (
                        <Avatar src="/broken-image.jpg" />
                    )}
                </Box>
                <Box>
                    <Typography variant="h3" textAlign="center" margin={1}>
                        {profile.name}
                    </Typography>
                    <Typography textAlign="center" margin={1}>
                        {profile.email}
                    </Typography>
                </Box>
                <ToastContainer autoClose={2000} />
            </Box>
        </Container>
    );
}
