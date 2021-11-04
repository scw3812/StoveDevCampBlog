import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../styles";

const HeaderNav = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.backgroundGray};
  width: 96%;
  height: ${props => props.scrollPosition > 100 ? "50px" : "80px"};;
  padding: 0 2%;
  z-index: 100;
`;
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 10%;
`
const NavButton = styled(Link)`
  color: ${colors.textDefault};
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
`;
const Avatar = styled.img`
  display: ${props => props.scrollPosition > 100 ? "none" : "block"};
  margin-top: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: 1px 1px 5px gray;
  object-fit: cover;
`

export const Header = ({ isMain, profile }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);
  return (
    <HeaderNav scrollPosition={scrollPosition}>
      <NavContainer>
        <NavButton to="/">Blog Home</NavButton>
      </NavContainer>
      {isMain ? 
        <Link to="/setting">
          <Avatar alt="profile" src={profile ?? "images/avatar.png"} scrollPosition={scrollPosition} />
        </Link> : null}
      <NavContainer>
        <NavButton to="/editor">Post</NavButton>
        <NavButton to="/tags">Tags</NavButton>
      </NavContainer>
    </HeaderNav>
  )
}