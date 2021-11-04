import { useEffect, useState, useCallback } from "react";
import MainPresenter from "./MainPresenter";
import { userAPI, postAPI } from "../../api"

const Main = () => {
  const [nickname, setNickname] = useState("");
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const getUserInfo = async () => {
    try {
      const { data } = await userAPI.getUserInfo(1);
      setNickname(data.user.nickname);
      setProfile(data.user.profile);
    } catch (err) {
      alert(err.response ? err.response.data.error : err.message);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  const getPosts = useCallback(
    async () => {
      try {
        const { data } = await postAPI.getPosts(1, page);
        setPosts(data.posts);
        setLastPage(data.pages);
      } catch (err) {
        alert(err.response ? err.response.data.error : err.message);
      }
    }, [page]);
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const handleClickDelete = async (id) => {
    try {
      await postAPI.deletPost(id);
      setPosts(posts => posts.filter(post => !post.id === id));
    } catch (err) {
      alert(err.response ? err.response.data.error : err.message);
    }
  }
  const handleClickNext = () => setPage(page => page - 1);
  const handleClickPrev = () => setPage(page => page + 1);

  return (
    <MainPresenter
      nickname={nickname}
      profile={profile}
      posts={posts}
      page={page}
      lastPage={lastPage}
      onClickDelete={handleClickDelete}
      onClickNext={handleClickNext}
      onClickPrev={handleClickPrev}
    />
  );
}

export default Main;
