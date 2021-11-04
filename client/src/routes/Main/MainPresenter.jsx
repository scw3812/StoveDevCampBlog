import { Header, Footer, MainPost } from "../../components";
import { Container, MainContent, MainTitle, MainTitleLine, MainPosts } from "./Main.style";

const MainPresenter = ({ nickname, profile, posts, onClick }) => {
  return (
    <Container>
      <Header isMain profile={profile}/>
      <MainContent>
        <MainTitle>{nickname}'s Blog</MainTitle>
        <MainTitleLine />
        <MainPosts>
          {posts.map((post) => <MainPost key={post.id} post={post} onClick={onClick} />)}
        </MainPosts>
      </MainContent>
      <Footer />
    </Container>
  )
}

export default MainPresenter
