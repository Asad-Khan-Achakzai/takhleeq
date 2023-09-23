// React imports
import * as React from "react";
import { useNavigate } from "react-router-dom";

// MUI imports
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// MUI icons
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

// Third party imports
import { Formik } from "formik";
import * as Yup from "yup";
import { Routes, Route } from "react-router-dom";

// Constant imports
import {
  MainBox,
  Logo,
  SubmitButton,
  FormBox,
} from "../constants/theme-constants";
import { constants } from "../constants/constants";

// component imports
import { loginUser } from "../services/user";
import { Alert } from "@mui/material";

// Creating schema
const schema = Yup.object().shape({
  username: Yup.string().required(constants.validation.userNameRequired),
  password: Yup.string()
    .required(constants.validation.passwordRequired)
    .min(8, constants.validation.passwordLength),
});

/**
 * Function to render a login form
 * @returns
 */
const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    loginUser(values).then((response) => {
      console.log("response", response.success);
      if (response.success) {
        navigate(constants.routes.home);
      } else {
        alert("Authentication failed");
      }
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <MainBox>
        <Logo>
          <LockOutlinedIcon />
        </Logo>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          validationSchema={schema}
          initialValues={{ username: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {({
            dirty,
            isValid,
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <FormBox noValidate>
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <TextField
                  type="username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  autoFocus
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.username && touched.username && errors.username}
                </p>
                <TextField
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  id="password"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <SubmitButton
                  disabled={!(dirty && isValid)}
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  Sign In
                </SubmitButton>
              </form>
            </FormBox>
          )}
        </Formik>
      </MainBox>
    </Container>
  );
};
export default Login;
