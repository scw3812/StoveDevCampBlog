import { 
  Container, 
  PostMain, 
  PostDescription, 
  PostTitle, 
  PostDate, 
  PostContent, 
  PostTags 
} from "./Post.style"
import { Header } from "../../components";
import parser from "html-react-parser";

const PostPresenter = ({ post }) => {
  return (
    <Container>
      <Header />
      <PostMain>
        <PostTitle>{post.title}</PostTitle>
        <PostDescription>{post.description}</PostDescription>
        <PostDate>{post.createdAt.substring(0, 10)}</PostDate>
        <PostContent>{parser(post.content)}</PostContent>
        <PostTags>Tags: {post.tags.map(tag => tag.name + " ")}</PostTags>
      </PostMain>
    </Container>
  )
}

export default PostPresenter
