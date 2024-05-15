# ☕ 마실커피

![image](https://github.com/JEONGSUJONG/JEONGSUJONG/assets/168960634/8ee1e56b-9a10-47ad-b167-310916570faf)

자신만의 꿀조합을 만들어서 공유하고 주문하세요!

## 👨‍💻 팀원 소개

| FRONTEND                       | BACKEND |
| ------------------------------ | ------- |
| 김영준, 김다빈, 이유진, 손명화 | 정수종  |

<br>

## 📅 프로젝트 기간

2023.11.13(Mon) ~ 2023.12.01 (총 3주)

<br>

## 🌟 프로젝트 개요

자신만의 커피 레시피를 만들어 자신의 꿀조합 레시피를 커뮤니티에 공유하고 다른 사용자들의 레시피를 볼 수 있는 사이트로 사용자들은 새로운 레시피 아이디어를 얻을 수 있는 커뮤니티 주문 사이트 입니다.

<br>

## ✨ 프로젝트 핵심 기능

#### 유저 관리 API

- 회원가입, 로그인, 이메일 인증

#### 제품 관리 API

- 제품의 생성, 조회, 수정, 삭제 및 페이지네이션

#### 주문 옵션 관리 API

- 주문 옵션 생성, 조회, 수정, 삭제

#### 커뮤니티 API

- 게시글과 댓글의 생성, 조회, 수정, 삭제 및 좋아요

<br>

## 🔨 주요 기술

**Programming Language**

<img  src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

**Frontend**

<img  src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img  src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img  src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img  src="https://img.shields.io/badge/axios-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

**Backend**

<img  src="https://img.shields.io/badge/gpt-412991?style=for-the-badge&logo=openai&logoColor=white"> <img  src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"> <img  src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img  src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img  src="https://img.shields.io/badge/mongoose-F04D35?style=for-the-badge&logo=mongoose&logoColor=white"> <img  src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"> <img  src="https://img.shields.io/badge/pm2-2B037A?style=for-the-badge&logo=pm2&logoColor=white"> <img  src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"> <img  src="https://img.shields.io/badge/naver SMTP-03C75A?style=for-the-badge&logo=naver&logoColor=white">

**Backend - Node.js, Express.js**

- Node.js 및 Express.js를 활용한 RESTful API 개발.

**Database - MongoDB, AmazonS3bucket**

- MongoDB를 사용하여 유연한 데이터 스토리지와 관리 기능 제공 및 S3 버킷을 통한 파일 저장 관리

<br>

## 💄 디자인 시안

![image](https://github.com/JEONGSUJONG/JEONGSUJONG/assets/168960634/fa03c25d-2488-48bc-82ad-235ec2a82ebd)

[🔗 피그마 링크](https://www.figma.com/file/1paJZikZlc8BgwFVQqupsd/MASILCOFFEE?type=design&node-id=0%3A1&mode=design&t=Z1txskYfSKjCl5yO-1)

<br>

## 🔒 ERD

<br>

## 📄 API 명세서

[🔗 Postman 링크](https://orange-sunset-704837.postman.co/workspace/CafeWebSite~8450ad83-0986-4510-ab97-20bb86778bba/collection/30237851-9975c128-05c1-478f-b4f8-e521a3754654?action=share&creator=30237851)

<br>

## ⚙️ 프로젝트 파일 구조

**Front-end**

```



```

**Back-end**

```
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

<br>

## 🗣 협업 환경

- Discord

  - 프로젝트가 진행되는 3주간 매일 아침 10시에 스크럼을 진행했습니다.

- Gitlab

  - 코딩 컨벤션을 준수하며 프로젝트를 진행하였습니다
  - Merge Request를 요청하고 팀원들과 코드리뷰를 진행하였습니다

- Figma
  - 웹 페이지의 디자인 와이어프레임, 시안을 제작하였습니다
