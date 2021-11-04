import { useEffect, useState } from "react";
import { postAPI } from "../../api";
import TagsPresenter from "./TagsPresenter"

const Tags = () => {
  const [tagPosts, setTagPosts] = useState(null);

  const getPostsTags = async () => {
    try {
      const { data } = await postAPI.getPostsTags(1);
      setTagPosts(data.tagPosts);
    } catch (err) {
      alert(err.response ? err.response.data.error : err.message);
    }
  }
  useEffect(() => {
    getPostsTags();
  }, [])

  return <TagsPresenter tagPosts={tagPosts} />
}

export default Tags;
