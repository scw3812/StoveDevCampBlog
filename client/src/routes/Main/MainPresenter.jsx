import { Header, Footer, MainPost } from "../../components";
import { Container, MainContent, MainTitle, MainTitleLine, MainPosts } from "./Main.style";

const MainPresenter = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        <MainTitle>Stove Dev Camp Blog</MainTitle>
        <MainTitleLine />
        <MainPosts>
          {[0, 1, 2, 3].map(() => <MainPost />)}
        </MainPosts>
      </MainContent>
      <Footer />
    </Container>
  )
}

export default MainPresenter
