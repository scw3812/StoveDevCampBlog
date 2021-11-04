import { Header, Footer, MainPost } from "../../components";
import { Container, MainContent, MainTitle, MainTitleLine, MainPosts, MainPrevButton, MainButtonContainer, MainNextButton } from "./Main.style";

const MainPresenter = ({ nickname, profile, posts, page, onClickDelete, onClickNext, onClickPrev }) => {
  return (
    <Container>
      <Header isMain profile={profile}/>
      <MainContent>
        <MainTitle>{nickname}'s Blog</MainTitle>
        <MainTitleLine />
        <MainPosts>
          {posts.map((post) => <MainPost key={post.id} post={post} onClick={onClickDelete} />)}
        </MainPosts>
        <MainButtonContainer>
          {page > 1 ? <MainNextButton onClick={onClickNext}>👈 Next Posts</MainNextButton>: <div />}
          <MainPrevButton onClick={onClickPrev}>Prev Posts 👉</MainPrevButton>
        </MainButtonContainer>
      </MainContent>
      <Footer />
    </Container>
  )
}

export default MainPresenter
