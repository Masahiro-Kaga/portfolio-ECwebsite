import React from "react";
import { Image } from "react-bootstrap";

const ErrorPage = () => {
  return (
    <>
      <h1 className="text-center my-5">Sorry, page not found</h1>
      <figure className="text-center">
        <Image src="images/goback_image.jpeg" width="60%"></Image>
      </figure>
    </>
  );
};

export default ErrorPage;
