import React from "react";
import styled, { css } from "styled-components";
import { boxBorderRadius } from "../utils/style/mixins";

const CustomBtn = styled.button`
  cursor: pointer;
  width: 100%;
  height: 4rem;
  font-size: 1.35rem;
  pointer-events: inherit;
  ${boxBorderRadius};
  ${(props) =>
    props.isType === true
      ? css`
          background: linear-gradient(
            122deg,
            rgb(250, 170, 0) 0%,
            rgb(237, 19, 19) 1.16%,
            rgb(213, 74, 255) 96.42%
          );
          color: white;
          font-size: 1.45rem;
          font-weight: 500;
        `
      : css`
          border: 0.1rem solid ${(props) => props.theme.borderColor};
          background-color: transparent;
          color: black;
          font-size: 1.45rem;
          font-weight: 500;
        `}
`;

const Button = ({ children, ...props }) => {
  return (
    <CustomBtn isType={props.type} onClick={props.onClick}>
      {children}
    </CustomBtn>
  );
};

export default Button;

Button.defaultProps = {
  onClick: () => {},
};
