import styled from "styled-components";
import { Link } from "react-router-dom";

export const A = styled(Link)`
  display: block;
  height: 100%;
  text-decoration: none;
  color: inherit;
`;



export const FromBaseDiv = styled.div`
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  font-size: 1.25rem;
  border: 1px solid #b5b5b5;
  transition: 125ms ease;
  outline: none;
  :focus {
    border-color: blue;
    box-shadow: 0 0 0 2pt rgba(0, 0, 255, 0.3);
  }
`;
