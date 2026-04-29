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
    <div
      id="error-div"
      className="light-div"
      style={{
        display: show ? "flex" : "none",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <p>Something went wrong. Please try again!</p>
      <p id="closeBtn" onClick={handleClose}>
        <i className="fa-solid fa-x" style={{ fontSize: "25px" }}></i>
      </p>
    </div>
  );
};

export default HiddenDiv;
