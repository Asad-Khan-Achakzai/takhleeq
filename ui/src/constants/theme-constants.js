// Material imports
import { Button, Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainBox = styled(Box)({
  marginTop: "10rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const FormBox = styled(Box)({
  mt: 1,
  "@media only screen and (min-width: 340px)": {
    minWidth: "21rem",
  },
});
export const Logo = styled(Avatar)({
  m: 1,
  backgroundColor: "purple",
});

export const SubmitButton = styled(Button)({
  mt: 3,
  mb: 2,
});
