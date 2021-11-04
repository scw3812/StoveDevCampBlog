import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  min-height: 80vh;
  margin-top: 150px;
  margin-bottom: 100px;
`;
export const MainTitle = styled.p`
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 10px;
  text-align: center;
`;
export const MainTitleLine = styled.div`
  background-color: ${colors.textDefault};
  width: 150px;
  height: 4px;
  border-radius: 10px;
`;
export const MainPosts = styled.section`
  width: 100%;
`
