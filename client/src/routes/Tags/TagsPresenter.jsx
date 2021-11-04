import { Container, TagsMain, Tag, TagsContainer } from "./Tags.style";
import { Header, Footer, TagPost } from "../../components";

const TagsPresenter = ({ tagPosts }) => {
  return (
    <Container>
      <Header />
      <TagsMain>
        {tagPosts ? Object.entries(tagPosts).map(([tag, posts], index) => (
          <TagsContainer>
            <Tag index={index}>{tag}</Tag>
            {posts.map((post) => <TagPost post={post}/>)}
          </TagsContainer>
        )) : null}
      </TagsMain>
      <Footer />
    </Container>
  )
}

export default TagsPresenter;
