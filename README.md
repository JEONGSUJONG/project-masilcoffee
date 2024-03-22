# ☕ 마실커피

![image](https://github.com/JEONGSUJONG/github-mainpage/assets/142254876/8f5fddf1-2dfd-446c-9a8c-8167add99503)

자신만의 꿀조합을 만들어서 공유하고 주문하세요!

## 👨‍💻 팀원 소개

| FRONTEND                       | BACKEND |
| ------------------------------ | ------- |
| 김영준, 김다빈, 이유진, 손명화 | 정수종  |

## 📅 프로젝트 기간

2023.11.13(Mon) ~ 2023.12.01 (총 3주)

## 🌟 프로젝트 개요

자신만의 커피 레시피를 만들어 자신의 꿀조합 레시피를 커뮤니티에 공유하고 다른 사용자들의 레시피를 볼 수 있는 사이트로 사용자들은 새로운 레시피 아이디어를 얻을 수 있는 커뮤니티 주문 사이트 입니다.

## ✨ 프로젝트 핵심 기능

#### ☕ 주문

-

#### 💬 커뮤니티

- 꿀조합 게시판
  - 주문 시

#### 🔎 Q&A 세션

- Q&N 게시판을 통해 코치님들께 직접 질문하고, 답변을 받을 수 있습니다

#### 🙌 프로젝트/스터디 모집 게시판

- 프로젝트나 스터디를 함께 할 팀원을 찾거나 프로젝트 아이디어를 공유할 수 있는 공간을 제공합니다

#### ⚔ 프로필 관리

- 사용자의 기술 스택, 경력, 교육 배경 등을 관리할 수 있는 개인 프로필 기능을 제공합니다

## 🎵 서비스 화면

### 🎺 로그인, 회원가입 페이지

### 🎸 메인 페이지

### 💾 마이 프로필 페이지

### 🎧 게시물 상세, 수정 페이지(+ 댓글 기능)

### 💬 게시물 작성 페이지

### 🎹 관리자 페이지

## 🔨 주요 기술

**Programming Language**

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

**Frontend**

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/axios-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

**Backend**

<img src="https://img.shields.io/badge/gpt-412991?style=for-the-badge&logo=openai&logoColor=white"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/mongoose-F04D35?style=for-the-badge&logo=mongoose&logoColor=white"> <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"> <img src="https://img.shields.io/badge/pm2-2B037A?style=for-the-badge&logo=pm2&logoColor=white"> <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"> <img src="https://img.shields.io/badge/naver SMTP-03C75A?style=for-the-badge&logo=naver&logoColor=white">

**Backend - Node.js, Express.js**

- Node.js 및 Express.js를 활용한 REST API 개발.

**Database - MongoDB, AmazonS3bucket**

- MongoDB를 사용하여 유연한 데이터 스토리지와 관리 기능 제공.

## 💄 디자인 시안

[FIGMA]

## 🔒 ERD

## 📄 아키텍처 구성도

## 📄 컴포넌트 명세서

## 📄 API 명세서

[API 명세서 Link to Postman](https://orange-sunset-704837.postman.co/workspace/CafeWebSite~8450ad83-0986-4510-ab97-20bb86778bba/collection/30237851-9975c128-05c1-478f-b4f8-e521a3754654?action=share&creator=30237851)

## ⚙️ 프로젝트 파일 구조

**Front-end**

```

```

**Back-end**

```
server
├─ .env
├─ app.js
├─ middlewares
│ ├─ async-handler.js
│ ├─ error-handler.js
│ ├─ jwt-handler.js
│ ├─ res-handler.js
│ ├─ s3-handler.js
│ └─ validation-middleware.js
├─ models
│ ├─ board-schema.js
│ ├─ comment-schema.js
│ ├─ custom-recipe-schema.js
│ ├─ like-schema.js
│ ├─ order-schema.js
│ ├─ orderdetail-schema.js
│ ├─ orderoption-schema.js
│ ├─ product-schema.js
│ └─ user-schema.js
├─ routes
│ ├─ board-router.js
│ ├─ comment-router.js
│ ├─ like-router.js
│ ├─ order-router.js
│ ├─ orderoption-router.js
│ ├─ ping-router.js
│ ├─ product-router.js
│ └─ user-router.js
├─ services
│ ├─ board-service.js
│ ├─ comment-service.js
│ ├─ like-service.js
│ ├─ order-service.js
│ ├─ orderoption-service.js
│ ├─ product-service.js
│ └─ user-service.js
└─ utils
  ├─ email-send.js
  ├─ jwt-token.js
  └─ pagination.js
```

## 🗣 협업 환경
