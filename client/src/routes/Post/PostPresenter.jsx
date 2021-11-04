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
  EditImg,
  CommentInput,
  CommentInputContainer,
  CommentButton,
  CommentContainer,
  CommentProfile,
  CommentContent,
  CommentNickname
} from "./Post.style"
import { Footer, Header } from "../../components";
import parser from "html-react-parser";
import edit from "../../assets/img/edit.svg";
import avatar from "../../assets/img/avatar.png";

const PostPresenter = ({ post, content, comments, onChange, onClick }) => {
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
        <CommentInputContainer>
          <CommentInput value={content} placeholder="Input Comment" onChange={({ target }) => onChange(target.value)}/>
          <CommentButton onClick={onClick}>Submit</CommentButton>
        </CommentInputContainer>
        {comments.map(({ content, createdAt, userNickname, userProfile }) => (
          <CommentContainer >
            <CommentProfile alt={userNickname} src={userProfile ?? avatar}/>
            <CommentContent>
              <CommentNickname>{userNickname}    {createdAt.substring(0, 10)}</CommentNickname>
              {content}
            </CommentContent>
          </CommentContainer>
        ))}
      </PostMain>
      <Footer />
    </Container>
  )
}

export default PostPresenter
