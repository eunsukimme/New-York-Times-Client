import React from "react";
import styled from "styled-components";
import loaderIcon from "../../assets/loading.gif";

const FullScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
const LoadingContainer = styled.div`
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);
`;
const LoadingImage = styled.img`
  width: 80px;
`;
const LoadingMessage = styled.div`
  font-family: ${(props) => props.theme.fonts.keyword};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export default function Loader({ visible }) {
  if (!visible) return null;

  return (
    <FullScreen>
      <LoadingContainer>
        <LoadingImage src={loaderIcon} alt="loading..." />
        <LoadingMessage>Searching Articles...</LoadingMessage>
      </LoadingContainer>
    </FullScreen>
  );
}
