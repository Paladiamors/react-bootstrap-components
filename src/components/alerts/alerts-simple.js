import React from "react";
import { Alert } from "react-bootstrap";

export default function Alert(props) {
  const { variant, message } = props;
  return <Alert variant={variant}>{message}</Alert>;
}
