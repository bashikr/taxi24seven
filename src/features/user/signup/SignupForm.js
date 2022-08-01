import React, { useState } from "react";
import { Grid, TextField, FormControl, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container } from "@mui/system";
import { signupAsync } from "./signupSlice";
import { useDispatch } from "react-redux";

export default function SignupForm() {
    const matches = useMediaQuery("(min-width:600px)");
    const dispatch = useDispatch();
    const defaultValues = {
        name: "",
        email: "",
        password: "",
    };
    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(signupAsync(formValues));
    };

    return (
        <Container style={{ marginTop: "10px", align: "center" }}>
            <FormControl style={{ width: "100%", align: "center" }}>
                <Grid container spacing={3}>
                    {matches ? (
                        <Grid item xs={6}>
                            <TextField
                                id="name-input"
                                name="name"
                                label="Name"
                                type="text"
                                value={formValues.name}
                                onChange={handleInputChange}
                                style={{ width: "100%" }}
                            />
                        </Grid>
                    ) : (
                        <Grid item xs={12}>
                            <TextField
                                id="name-input"
                                name="name"
                                label="Name"
                                type="text"
                                value={formValues.name}
                                onChange={handleInputChange}
                                style={{ width: "100%" }}
                            />
                        </Grid>
                    )}

                    {matches ? (
                        <Grid item xs={6}>
                            <TextField
                                id="email-input"
                                name="email"
                                label="Email"
                                type="text"
                                value={formValues.email}
                                onChange={handleInputChange}
                                style={{ width: "100%" }}
                            />
                        </Grid>
                    ) : (
                        <Grid item xs={12}>
                            <TextField
                                id="email-input"
                                name="email"
                                label="Email"
                                type="text"
                                value={formValues.email}
                                onChange={handleInputChange}
                                style={{ width: "100%" }}
                            />
                        </Grid>
                    )}
                </Grid>
                <Grid item>
                    <TextField
                        id="password-input"
                        name="password"
                        label="Password"
                        type="password"
                        value={formValues.password}
                        onChange={handleInputChange}
                        style={{ width: "100%", margin: "20px 0" }}
                    />
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Sign Up
                </Button>
            </FormControl>
        </Container>
    );
}
