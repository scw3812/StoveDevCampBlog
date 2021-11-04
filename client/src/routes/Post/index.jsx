import PostPresenter from "./PostPresenter"

const Post = ({ location }) => {
  return <PostPresenter post={location.state}/>
}

export default Post
