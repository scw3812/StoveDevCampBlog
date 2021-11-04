import { useState, useEffect } from "react";
import PostPresenter from "./PostPresenter"
import { commentAPI } from "../../api"

const Post = ({ location }) => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const { data } = await commentAPI.getComments(location.state.id);
      setComments(data.comments);
    } catch (err) {
      alert(err.response ? err.response.data.error : err.message);
    }
  }
  useEffect(() => {
    getComments();
  }, []);

  const handelContent = (content) => setContent(content);
  const handleClickSubmit = async () => {
    try {
      const { data } = await commentAPI.postComment({ userId: 1, postId: location.state.id, content });
      setContent("");
      const { comment, user } = data;
      setComments(comments =>
        [{ content: comment.content, createdAt: comment.createdAt, userNickname: user.nickname, userProfile: user.profile },
        ...comments]);
    } catch (err) {
      alert(err.response ? err.response.data.error : err.message);
    }
  }

  return <PostPresenter post={location.state} content={content} comments={comments} onChange={handelContent} onClick={handleClickSubmit} />
}

export default Post
