import { Box, Typography } from '@mui/material';
import { useEffect } from "react";

interface HiddenDivProps {
  show: boolean;
  setShowError: (value: boolean) => void;
}

const HiddenDiv = ({ show, setShowError }: HiddenDivProps) => {

  useEffect((): void => {
    if (show) {
      setTimeout((): void => {
        setShowError(false);
      }, 5000);
    }
  }, [show, setShowError]);

  function handleClose(): void {
    setShowError(false);
  }

  return (
    <Box
      id="error-div"
      className="light-div"
      style={{
        display: show ? "flex" : "none",
        pointerEvents: show ? "auto" : "none",
      }}
    >
    
      <Typography variant="body1" component="p">
        Something went wrong. Please try again!
      </Typography>

      <Typography
        id="closeBtn"
        component="p"
        onClick={handleClose}
        sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        <i className="fa-solid fa-x" style={{ fontSize: "25px" }}></i>
      </Typography>
    </Box>
  );
};

export default HiddenDiv;
