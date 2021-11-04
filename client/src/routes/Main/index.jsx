import { useEffect, useState } from "react";
import MainPresenter from "./MainPresenter";
import { userAPI, postAPI } from "../../api"

const Main = () => {
  const [nickname, setNickname] = useState("");
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);

  const getUserInfo = async () => {
    try {
      const { data } = await userAPI.getUserInfo(1);
      setNickname(data.user.nickname);
      setProfile(data.user.profile);
    } catch (err) {
      alert(err.response ? err.response.data : err);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  const getPosts = async () => {
    try {
      const { data } = await postAPI.getPosts(1, 1);
      setPosts(data.posts);
    } catch (err) {
      alert(err.response ? err.response.data : err);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  const handleClickDelete = async (id) => {
    try {
      await postAPI.deletPost(id);
      setPosts(posts => posts.filter(post => !post.id === id)); 
    } catch (err) {
      alert(err.response ? err.response.data : err);
    }
  }

  return <MainPresenter nickname={nickname} profile={profile} posts={posts} onClick={handleClickDelete} />;
}

export default Main;
