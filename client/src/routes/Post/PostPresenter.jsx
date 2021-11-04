import { 
  Container, 
  PostMain, 
  PostDescription, 
  PostTitle, 
  PostDate, 
  PostContent, 
  PostTags, 
  PostTitleContainer,
  PostEdit,
  EditImg
} from "./Post.style"
import { Footer, Header } from "../../components";
import parser from "html-react-parser";
import edit from "../../assets/img/edit.svg";

const PostPresenter = ({ post }) => {
  return (
    <Container>
      <Header />
      <PostMain>
        <PostTitleContainer>
          <PostTitle>{post.title}</PostTitle>
          <PostEdit to={{ pathname: "/editor", state: post }}><EditImg alt="edit" src={edit}/></PostEdit> 
        </PostTitleContainer>
        <PostDescription>{post.description}</PostDescription>
        <PostDate>{post.createdAt.substring(0, 10)}</PostDate>
        <PostContent>{parser(post.content)}</PostContent>
        <PostTags>Tags: {post.tags.map(tag => tag.name + " ")}</PostTags>
      </PostMain>
      <Footer />
    </Container>
  )
}

export default PostPresenter
