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
const PostContent = styled(LimitedText)`
  font-size: 15px;
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

export const MainPost = () => {
  return (
    <PostContainer>
      <PostImage alt="post" src="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png" />
      <PostTitle lineNumber={1}>Title</PostTitle>
      <PostDescription lineNumber={2}>DescriptionDescriptionDescription Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vitae molestiae sapiente deleniti facilis veniam vel repellat nemo possimus! Animi vel, voluptatem deserunt unde laborum aliquid totam sit debitis perspiciatis!</PostDescription>
      <PostDate>2021-11-01</PostDate>
      <PostContent lineNumber={4}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quisquam libero placeat nisi labore! Dolore, maxime earum provident excepturi eligendi itaque voluptates ad magnam ut perspiciatis dolorem aspernatur inventore minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque obcaecati ex dolorem eligendi beatae debitis perferendis laborum fuga dolore dolor. Tempore natus quos exercitationem voluptate itaque ipsam praesentium corporis dolorum.</PostContent>
      <PostTags lineNumber={1}>Tags: Javascript React Web</PostTags>
      <PostLine />
    </PostContainer>
  )
}