import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TagsMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 80vh;
  margin-top: 150px;
  margin-bottom: 80px;
`;
export const TagsContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
`
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
  margin-bottom: 20px;
`;
