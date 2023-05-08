import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import '../css/hover.css'
import '../css/main.css'
import '../css/responsive.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWhatsapp} from '@fortawesome/fontawesome-free-brands'
import ReactGA from 'react-ga'
import useAnalyticsEventTracker from './useAnalyticsEventTracker';

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



const Navbar = () => {

  const gaEventTracker = useAnalyticsEventTracker('Contact us');

  return (
    <Container className="navbar_container">
      <Wrapper>
        <Left className="left_div">
          {/* <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16}} />
          </SearchContainer> */}
        </Left>
        <Center>
          <a href="/" className="returner">
            <Logo>OЯKA MODA</Logo>
            </a>
        </Center>
        <Right>
          <a href="/" className="linker">Home</a>
          <a href="/cosmetics" className="linker">Cosmetics</a>
          <a href="/Woman" className="linker">Woman Fashion</a>
          <a href="/men" className="linker">Men Fashion</a>
        </Right>
        <div className="whatsapp_div">
          <a
            href="https://wa.me/48792651475"
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
              <button onClick={()=>gaEventTracker('call')} type="submit" className="wp_btn"><FontAwesomeIcon className="whatsapp_icon" icon={faWhatsapp} /></button>
            </a>
        </div>
        
      </Wrapper>
    </Container>
  );
};

export default Navbar;
