import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #400a63;
`;

export const Container = styled.div`
  height: 100%;
  max-width: 1300px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
  width: 108px;
  background-image: url("https://media-api.cloudez.io/dynamic/configr-logo-header-negative_TlSzsrF.png");
`;

export const User = styled.a`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
`;
