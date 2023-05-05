import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 24px;
  margin-bottom: 24px;
`;

const StyledLink = styled(Link)`
  font-size: 24px;
  color: #000;
  text-decoration: underline;
`;

const Button = styled.a`
  background-color: #3f51b5;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const PageNotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <Description>
        Oops! The page you are looking for doesn't exist.
      </Description>
      <Link to="/">Go back to Home</Link>
    </Container>
  );
};

export default PageNotFound;
