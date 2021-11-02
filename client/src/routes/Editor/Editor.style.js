import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EditorMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 80px;
`;
const CustomInput = styled.input`
  width: 98%;
  font-size: 25px;
  padding: 1%;
  &:focus {
    outline: none;
  }
`;
export const TitleInput = styled(CustomInput)`
  margin-top: 200px;
  margin-bottom: 30px;
  border: none;
`;
export const DescriptionInput = styled.textarea`
  width: 98%;
  padding: 1%;
  height: 80px;
  border-radius: 10px;
  border: solid 2px ${colors.backgroundGray};
  font-size: 20px;
  margin-bottom: 50px;
  &:focus {
    outline: none;
  }
`;
export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 50px;
`;
export const TagInput = styled(CustomInput)`
  width: 20%;
  height: 20px;
  padding: 10px;
  border-radius: 10px;
  border: solid 2px ${colors.backgroundGray};
  font-size: 20px;
  text-align: center;
  margin: 10px;
`;
export const Tag = styled.span`
  height: 20px;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  background-color: ${(props) => {
    switch (props.index % 4) {
      case 0:
        return "#eae4e9";
      case 1:
        return "#f0efeb";
      case 2:
        return "#fde2e4";
      default:
        return "#dfe7fd";
    }
  }};
  text-align: center;
  margin: 10px;
  cursor: pointer;
`;
export const SubmitButton = styled.button`
  width: 20%;
  height: 40px;
  font-size: 20px;
  border-radius: 10px;
  border: solid 1px ${colors.textGray};
  color: ${colors.textGray};
  background-color: ${colors.backgroundGray};
  align-self: flex-end;
  margin-top: 40px;
  cursor: pointer;
  &:active {
    background-color: #e1e1e1;
  }
`;
