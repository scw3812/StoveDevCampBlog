import { Container, SettingMain, Avatar, TitleInput, SubmitButton, FileInput } from "./Setting.style";
import { Header, Footer } from "../../components";
import avatar from "../../assets/img/avatar.png";

const SettingPresenter = ({ nickname, profile, profileBase64, onChangeProfile, onChangeNickname, onClickSubmit }) => {
  return (
    <Container>
      <Header />
      <SettingMain>
        <FileInput 
          id="input-profile"
          type="file"
          accept=".jpg, .png, .gif"
          onChange={onChangeProfile} />
        <label for="input-profile">
          <Avatar alt="profile" src={profileBase64 === "" ? (profile ?? avatar) : profileBase64} />
        </label>
        <TitleInput value={nickname} onChange={({ target }) => onChangeNickname(target.value)} />
        <SubmitButton onClick={onClickSubmit}>Submit</SubmitButton>
      </SettingMain>
      <Footer />
    </Container>
  );
};

export default SettingPresenter;
