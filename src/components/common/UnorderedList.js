import React from "react";
import styled from "styled-components";

const UL = styled.ul`
  font-size: 1.2rem;

  & > li {
    margin-bottom: 2rem;
  }
`;

export default props => (
  <UL>
    {props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </UL>
);
