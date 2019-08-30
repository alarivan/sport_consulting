import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${props => (props.bold ? "1.5rem" : "1.2rem")};
  font-weight: 500;
  margin-bottom: 1.5rem;
  font-weight: ${props => (props.bold ? "600" : "500")};
`;

export default Paragraph;
