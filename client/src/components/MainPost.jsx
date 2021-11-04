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
const PostContent = styled(LimitedText)`
  font-size: 15px;
`
const PostTagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const PostTags = styled(LimitedText)`
  font-size: 15px;
`
const PostDelete = styled.span`
  font-size: 15px;
  color: red;
  cursor: pointer;
`
const PostLine = styled.div`
  background-color: ${colors.textGray};
  width: 100%;
  height: 1.5px;
  margin-top: 20px;
  opacity: 0.2;
`;

const regex = /(<([^>]+)>)/ig;

export const MainPost = ({ post, onClick }) => {
  return (
    <PostContainer to={{ pathname: `/post`, state: post }}>
      <PostLinkContainer>
        {post.thumbnail ? <PostImage alt="post" src={post.thumbnail} /> : null}
        <PostTitle>{post.title}</PostTitle>
        <PostDescription lineNumber={2}>{post.description}</PostDescription>
        <PostDate>{post.createdAt.substring(0, 10)}</PostDate>
        <PostContent lineNumber={4}>{post.content.replace(regex, '')}</PostContent>
      </PostLinkContainer>
      <PostTagsContainer>
        <PostTags>Tags: {post.tags.map(tag => tag.name + " ")}</PostTags>
        <PostDelete onClick={() => onClick(post.id)}>삭제</PostDelete>
      </PostTagsContainer>
      <PostLine />
    </PostContainer>
  )
}