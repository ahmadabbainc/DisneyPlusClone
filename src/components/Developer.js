import React from "react";
import styled from "styled-components";

const Developer = () => {
  return (
    <Programmer>
      Developed by <a href="https://ahmadinc.vercel.app/">Ahmad Inc.</a>
    </Programmer>
  );
};

const Programmer = styled.div`
  color: gray;
  text-align: center;
  font-size: 0.875rem;
  a {
    color: white;
  }
`;

export default Developer;
