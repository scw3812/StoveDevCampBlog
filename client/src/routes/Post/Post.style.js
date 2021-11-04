import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PostMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 60%;
  min-height: 80vh;
  margin-top: 120px;
  margin-bottom: 100px;
`;
export const PostTitle = styled.p`
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 30px;
`;
export const PostDescription = styled.p`
  font-size: 30px;
  margin-bottom: 10px;
`
export const PostDate = styled.p`
  font-size: 20px;
  font-style: italic;
  color: ${colors.textGray}
`
export const PostContent = styled.div`
  margin-top: 25px;
  & img {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
export const PostTags = styled.p`
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
`
