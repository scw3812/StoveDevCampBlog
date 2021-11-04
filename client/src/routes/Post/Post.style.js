import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";

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
export const PostTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`
export const PostTitle = styled.p`
  font-weight: bold;
  font-size: 40px;
`;
export const PostEdit = styled(Link)`
  width: 30px;
  height: 30px;
  & :active {
    width: 25px;
    height: 25px;
  }
`
export const EditImg = styled.img`
  width: 100%;
  height: 100%;
`
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
export const CommentInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
`
export const CommentInput = styled.textarea`
  width: 88%;
  padding: 1%;
  height: 25px;
  border-radius: 10px;
  border: solid 2px ${colors.backgroundGray};
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;
export const CommentButton = styled.button`
  width: 9%;
  height: 45px;
  font-size: 20px;
  border-radius: 10px;
  border: solid 1px ${colors.textGray};
  color: ${colors.textGray};
  background-color: ${colors.backgroundGray};
  cursor: pointer;
  &:active {
    background-color: #e1e1e1;
  }
`;
export const CommentContainer = styled.div`
  display: flex;
  width: 96%;
  padding: 2%;
`
export const CommentContent = styled.p`
  font-size: 20px;
  margin-left: 10px;
`
export const CommentNickname = styled.p`
  font-size: 18px;
`
export const CommentProfile = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 25px;
`
