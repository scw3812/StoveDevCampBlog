import { Header, Footer } from "../../components";
import { Container, Main, MainTitle, MainTitleLine } from "./Main.style";

const MainPresenter = () => {
  return (
    <Container>
      <Header />
      <Main>
        <MainTitle>Stove Dev Camp Blog</MainTitle>
        <MainTitleLine />
      </Main>
      <Footer />
    </Container>
  )
}

export default MainPresenter
