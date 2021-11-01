import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
  width: 100%;
  height: 100px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 60px;
`
const InfoText = styled.span`
  color: #777777;
`

export const Footer = () => {
  return (
    <FooterContainer>
      <Info>
        <InfoText>Chagnwoo Seo / 2021</InfoText>
        <InfoText>Smilgate Stove Dev Camp</InfoText>
      </Info>
    </FooterContainer>
  )
}