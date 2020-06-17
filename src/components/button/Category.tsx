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
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Category({ name, onClick }: CategoryProps) {
  return <Container onClick={onClick}>{name}</Container>;
}
