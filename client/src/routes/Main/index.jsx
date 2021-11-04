import { useEffect, useState } from "react";
import MainPresenter from "./MainPresenter";
import { userAPI, postAPI } from "../../api"

const Main = () => {
  const [nickname, setNickname] = useState("");
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);

  const getUserInfo = async () => {
    const { data } = await userAPI.getUserInfo(1);
    setNickname(data.user.nickname);
    setProfile(data.user.profile);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  const getPosts = async () => {
    const { data } = await postAPI.getPosts(1, 1);
    setPosts(data.posts);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return <MainPresenter nickname={nickname} profile={profile} posts={posts} />;
}

export default Main;
