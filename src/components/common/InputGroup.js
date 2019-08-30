import React from "react";
import styled from "styled-components";
import { ErrorMessage } from "formik";

const StyledErrorMessage = styled(ErrorMessage)`
  color: #d8000c;
  font-size: 0.75rem;
  margin-top: 0.15rem;
`;

const InputGroup = styled.div`
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.75rem;
  margin: 0.25rem 0;
`;

export default props => (
  <InputGroup>
    <Label>{props.label}</Label>
    {props.children}
    <StyledErrorMessage {...props.error} />
  </InputGroup>
);
