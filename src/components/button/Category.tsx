import React from "react";
import styled from "styled-components";

const Container = styled.button`
  padding: 6px 8px;
  margin: 4px;

  overflow-wrap: normal;
  text-align: center;
  font-family: Times;
  font-size: 15px;

  border: none;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: #dfdfdf;
  }
`;

type CategoryProps = {
  name: string;
  onClick: Function;
};

export default function Category({ name }: CategoryProps) {
  return <Container>{name}</Container>;
}
