import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SuccessOrder = () => {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
    clearTimeout();
  }, [navigate]);

  return (
    <>
      <Image
        src="images/thankyou_order.jpg"
        alt=""
        style={{ width: "100vw", objectFit: "cover" }}
      />
    </>
  );
};

export default SuccessOrder;
