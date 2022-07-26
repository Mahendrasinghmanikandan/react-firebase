import React, { useState } from "react";
import { Modal, Box, Stack } from "@mui/material";
import GoogleLoginButton from "react-google-button";
const Login = ({ status, setStatus }) => {
  const [modelStatus, setModelStatus] = useState(status);
  const handleClose = () => {
    setModelStatus(!modelStatus);
    setStatus(!status);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 200,
    bgcolor: "white",
    border: "1px solid white",
    borderRadius: 2,
    boxShadow: 24,
    textAlign: "center",
    p: 4,
  };
  return (
    <div>
      <Modal open={modelStatus} onClose={handleClose}>
        <Box sx={style}>
          <GoogleLoginButton style={{ width: "100%" }} />
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
