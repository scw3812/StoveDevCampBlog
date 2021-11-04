import { useState } from "react"
import { userAPI } from "../../api";
import SettingPresenter from "./SettingPresenter"

const Setting = ({ location: { state } }) => {
  const [nickname, setNickname] = useState(state.nickname);
  const [profile, setProfile] = useState(state.profile);
  const [profileFile, setProfileFile] = useState(null);

  const handleChangeProfile = (e) => {
    const img = e.target.files[0];
    setProfileFile(img);
  }
  const handleChangeNickname = (nickname) => setNickname(nickname);
  const handleClickSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("userProfile", profileFile);
      formData.append("nickname", nickname);
      const { data } = await userAPI.patchUserInfo(formData, 1);
      if (data.profile) {
        setProfile(data.profile);
      }
    } catch (err) {
      alert(err.response ? err.response.data.error : err.message);
    }
  }

  return <SettingPresenter 
            nickname={nickname} 
            profile={profile} 
            onChangeProfile={handleChangeProfile} 
            onChangeNickname={handleChangeNickname}
            onClickSubmit={handleClickSubmit} 
          />
}

export default Setting
