import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import '../css/hover.css'
import '../css/main.css'
const Container = styled.div`
  height: 60px;
  
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline:0 ;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;



const Button = styled.button`
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>OЯKA MODA</Logo>
        </Center>
        <Right>
          <a href="/" className="linker">Home</a>
          <a href="/popproduct" className="sellers linker" >Best Sellers!</a>
          <a href="/Woman" className="linker">Woman Fashion</a>
          <a href="/men" className="linker">Men Fashion</a>
          <a href="/kid" className="linker">Kid Fashion</a>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
