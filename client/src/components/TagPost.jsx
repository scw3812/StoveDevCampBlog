import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../styles";

const PostContainer = styled.div`
  width: 100%;
`;
const PostLinkContainer = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: ${colors.textDefault};
`;
const LimitedText = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.lineNumber || 1};
  -webkit-box-orient: vertical;
`
const PostTitle = styled(LimitedText)`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
`;
const PostDescription = styled(LimitedText)`
  font-size: 25px;
`
const PostDate = styled.p`
  color: #777777;
  font-size: 15px;
  font-style: italic;
  margin-top: 5px;
`
const PostLine = styled.div`
  background-color: ${colors.textGray};
  width: 100%;
  height: 1.5px;
  margin-top: 10px;
  opacity: 0.2;
`;

export const TagPost = ({ post }) => {
  return (
    <PostContainer>
      <PostLinkContainer to={{ pathname: `/post`, state: post }}>
        <PostTitle>{post.title}</PostTitle>
        <PostDescription lineNumber={2}>{post.description}</PostDescription>
        <PostDate>{post.createdAt.substring(0, 10)}</PostDate>
      </PostLinkContainer>
      <PostLine />
    </PostContainer>
  )
}