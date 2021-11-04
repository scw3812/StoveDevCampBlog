import { useState } from "react"
import { userAPI } from "../../api";
import SettingPresenter from "./SettingPresenter"

const Setting = ({ location: { state } }) => {
  const [nickname, setNickname] = useState(state.nickname);
  const [profile, setProfile] = useState(state.profile);
  const [profileFile, setProfileFile] = useState(null);
  const [profileBase64, setProfileBase64] = useState("");

  const handleChangeProfile = (e) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setProfileBase64(base64.toString());
      }
    }
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setProfileFile(e.target.files[0]);
    }
  }
  const handleChangeNickname = (nickname) => setNickname(nickname);
  const handleClickSubmit = async () => {
    try {
      if (nickname === "") {
        throw new Error("닉네임을 입력해주세요");
      }
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
            profileBase64={profileBase64}
            onChangeProfile={handleChangeProfile} 
            onChangeNickname={handleChangeNickname}
            onClickSubmit={handleClickSubmit}
          />
}

export default Setting
