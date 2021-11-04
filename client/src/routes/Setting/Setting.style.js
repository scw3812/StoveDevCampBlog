import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SettingMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  min-height: 54vh;
  margin-top: 150px;
  margin-bottom: 100px;
`;
export const FileInput = styled.input`
  display: none;
`
export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  box-shadow: 1px 1px 5px gray;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 5px gray;
  }
`
export const TitleInput = styled.input`
  border: none;
  border-bottom: solid 2px ${colors.textGray};
  width: 40%;
  font-size: 25px;
  padding: 1%;
  margin-top: 50px;
  &:focus {
    outline: none;
  }
`;
export const SubmitButton = styled.button`
  width: 15%;
  height: 40px;
  font-size: 20px;
  border-radius: 10px;
  border: solid 1px ${colors.textGray};
  color: ${colors.textGray};
  background-color: ${colors.backgroundGray};
  margin-top: 80px;
  cursor: pointer;
  &:active {
    background-color: #e1e1e1;
  }
`;