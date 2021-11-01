import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../styles";

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
const PostTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
`;
const PostDescription = styled.p`
  font-size: 25px;
`
const PostDate = styled.p`
  color: #777777;
  font-size: 15px;
  font-style: italic;
  margin-top: 5px;
`
const PostContent = styled.p`
  font-size: 15px;
  margin-top: 20px;
`
const PostTags = styled.p`
  font-size: 15px;
  margin-top: 10px;
`
const PostLine = styled.div`
  background-color: #777777;
  width: 100%;
  height: 1px;
  margin-top: 20px;
`;

export const MainPost = () => {
  return (
    <PostContainer>
      <PostImage alt="post" src="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png" />
      <PostTitle>Title</PostTitle>
      <PostDescription>DescriptionDescriptionDescription</PostDescription>
      <PostDate>2021-11-01</PostDate>
      <PostContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque obcaecati ex dolorem eligendi beatae debitis perferendis laborum fuga dolore dolor. Tempore natus quos exercitationem voluptate itaque ipsam praesentium corporis dolorum.</PostContent>
      <PostTags>Tags: Javascript React Web</PostTags>
      <PostLine />
    </PostContainer>
  )
}