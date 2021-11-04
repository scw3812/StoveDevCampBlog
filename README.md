# StoveDevCampBlog
## 2021 Smilegate Stove Dev Camp 사전 과제 2 - 블로그 개발
## 

### 사용 기술 및 라이브러리
- client
  - React, JavaScript
  - 주요 라이브러리: axios, react-router-dom, styled-components, @toast-ui/react-editor
- server
  - Node.js, Express.js, JavaScript
  - DB: Mysql
  - Cloud Storage: AWS S3
  - 주요 라이브러리: multer, sequelize

### 시스템 구성도
![그림1](https://user-images.githubusercontent.com/49465188/140387652-97b5ed0e-e0de-4130-a2aa-c96d472b9add.png)

### 화면 스크린샷
화면|메인 페이지|메인 페이지2
-|-|-
스크린샷|<img width="500" alt="메인페이지" src="https://user-images.githubusercontent.com/49465188/140380007-189e88ef-9017-4751-b0d4-49e21267fc70.png"> - 글을 클릭해서 글 상세 페이지로 이동<br> - Prev Posts 클릭해 이전 글 목록으로 이동|<img width="500" alt="메인페이지2" src="https://user-images.githubusercontent.com/49465188/140380047-80326489-bd3f-4df7-813b-d4a3cd2ddefd.png"> - 프로필을 클릭해 프로필 설정 페이지로 이동 <br> - Post를 클릭해 글 작성 페이지로, Tags를 클릭해 태그 페이지로 이동

화면|포스트 삭제|포스트 페이지
-|-|-
스크린샷|<img width="500" alt="글삭제" src="https://user-images.githubusercontent.com/49465188/140378022-6f5e66fb-a279-4e40-84f7-7b81c92e6252.png"> <br>- 아래로 스크롤할 경우 상단의 시야를 막는 것을 방지하기 위해 프로필은 사라지고 헤더가 좁아지도록 구현<br> - 삭제 버튼을 누를 경우 글 삭제 |<img width="500" alt="포스트페이지" src="https://user-images.githubusercontent.com/49465188/140381596-83995201-5b21-4906-b174-aca4233f1ac7.png"> - 포스트 페이지로 이동해 글 상세를 볼 수 있음 <br> - 상단 편집 아이콘을 클릭해 글 수정 페이지로 이동 

화면|댓글 입력|댓글 추가 완료
-|-|-
스크린샷|<img width="500" alt="댓글입력" src="https://user-images.githubusercontent.com/49465188/140382151-b29f8f32-1f88-443c-9d3b-e5adc3bcb77d.png"> <br>- 포스트 페이지 하단의 입력창에 댓글을 입력하고 Submit 버튼을 클릭해 댓글 추가 |<img width="500" alt="댓글추가완료" src="https://user-images.githubusercontent.com/49465188/140382185-0b746113-3a65-4d9e-8c3d-81ae47069725.png">

화면|포스트 작성|포스트 작성2
-|-|-
스크린샷|<img width="500" alt="포스트에디터" src="https://user-images.githubusercontent.com/49465188/140382602-d423f177-fee9-4914-86d1-c311d73ccb95.png">|<img width="500" alt="포스트에디터2" src="https://user-images.githubusercontent.com/49465188/140382611-6a51e5eb-493d-4bf8-bbd8-482a2102f874.png"><br> - 에디터 헤더의 버튼들을 눌러 볼드, 표 추가, 이미지 추가 등을 할 수 있음 <br> - 페이지 하단의 태그 입력창에 태그를 입력하고 엔터를 눌러 태그 추가, Submit 버튼을 눌러 글 작성 완료

화면|포스트 수정|태그 페이지
-|-|-
스크린샷|<img width="500" alt="포스트수정" src="https://user-images.githubusercontent.com/49465188/140382573-9be9c36d-911d-4cc9-802c-794e63ab0074.png"><br> - 포스트 페이지에서 편집 아이콘을 눌러 수정 페이지로 이동할 경우 기존 글의 내용이 모두 그대로 들어가게 됨 |<img width="500" alt="태그페이지" src="https://user-images.githubusercontent.com/49465188/140386053-cd039087-b7f5-4940-b420-5e206b04f794.png"> - 태그 페이지에서는 태그별로 글 목록을 확인 

화면|프로필 설정|프로필 수정
-|-|-
스크린샷|<img width="500" alt="프로필 설정" src="https://user-images.githubusercontent.com/49465188/140385084-e1e1a8cf-334c-441e-b045-b0f25dc3846b.png"><br> - 메인 페이지 헤더의 프로필을 클릭해 프로필 설정 페이지로 이동 가능 |<img width="500" alt="프로필수정" src="https://user-images.githubusercontent.com/49465188/140385076-457b4393-09dd-4a4a-bb99-100baf941c33.png"> <br>- 프로필 이미지를 클릭해 프로필 이미지 수정 <br> - 닉네임 입력창에 닉네임을 입력해 수정, Submit 버튼을 클릭해 수정 완료 
