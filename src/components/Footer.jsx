import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import '../css/hover.css'
import '../css/responsive.css'
import '../css/main.css'
const Container = styled.div`
  display: flex;
  background-color: #edc661;
  padding: 5px;
  height:40vh;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 10px 0px 20px 0;
  width:70%;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;


const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>OЯKAMODA.PL</Logo>
        <Desc className="desc">
        Orka Moda to Hurtownia Online z modną odzieżą w dużych rozmiarach. Oferujemy naszym klientom duży wybór wysokiej jakości produktów i szeroki asortyment nowoczesnych stylów.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999" className="socialicon">
            <Facebook className="i"/>
          </SocialIcon>
          <SocialIcon color="E4405F" className="socialicon">
            <Instagram className="i"/>
          </SocialIcon>
          <SocialIcon color="55ACEE" className="socialicon">
            <Twitter className="i"/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Słomińskiego  19/74 , 00-195 Warszawa
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +(48)792651475
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> info@orkamoda.pl
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
