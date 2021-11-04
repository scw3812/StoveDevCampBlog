import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../styles";
import parse from 'html-react-parser';

const PostContainer = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: ${colors.textDefault};
`;
const PostImage = styled.img`
  width: 100%;
  height: 420px;
  object-fit: cover;
  margin-top: 50px;
`
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
const PostContent = styled.div`
  font-size: 15px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
const PostTags = styled(LimitedText)`
  font-size: 15px;
  margin-top: 10px;
`
const PostLine = styled.div`
  background-color: ${colors.textGray};
  width: 100%;
  height: 1.5px;
  margin-top: 20px;
  opacity: 0.2;
`;

export const MainPost = ({ post }) => {
  return (
    <PostContainer to={`/post/${post.id}`}>
      {post.thumbnail ? <PostImage alt="post" src={post.thumbnail} /> : null}
      <PostTitle lineNumber={1}>{post.title}</PostTitle>
      <PostDescription lineNumber={2}>{post.description}</PostDescription>
      <PostDate>{post.createdAt.substring(0, 10)}</PostDate>
      <PostContent>{parse(post.content)}</PostContent>
      <PostTags lineNumber={1}>Tags: {post.tags.map(tag => tag.name + " ")}</PostTags>
      <PostLine />
    </PostContainer>
  )
}