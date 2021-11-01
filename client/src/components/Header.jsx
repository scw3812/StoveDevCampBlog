import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderNav = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eaeaea;
  width: 96%;
  height: 80px;
  padding: 0 2%;
`;
const NavButton = styled(Link)`
  color: #1e1e1e;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
`;
const Avatar = styled.img`
  margin-top: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: 1px 1px 5px gray;
`

export const Header = () => {
  return (
    <HeaderNav>
      <NavButton to="/">Blog</NavButton>
      <Avatar alt="profile" src="images/avatar.png" />
      <NavButton to="/">Tags</NavButton>
    </HeaderNav>
  )
}