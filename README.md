## 230104_Next.js 시작하기
(공식문서 참조 https://nextjs.org/learn/basics/create-nextjs-app/setup)

1. npx create-next-app@latest nextjs-blog _ 앱을 만든다
(만들시 ts와 eslint사용여부를 잘 체크할 것)
2. cd nextjs-blog _만들어진 파일로 이동한다
3. npm run dev _ 시작하고 브라우저에 http://localhost:3000을 실행한다. 

< index.js화면이 출력된다. >
    기본적으로 리액트에서 사용하던 부분을 어느정도 사용가능함(리액트와 유사)

- 페이지 폴더 안에서 새폴더와 하위 파일 생성시, 
    그폴더와 파일이름으로 브라우저 접근 가능 =>>> ex : http://localhost:3000/user/Profile

- 페이지 폴더 안에서 바로 파일 생성시, 
    바로 접근 가능! =>>>>> ex : http://localhost:3000/about

- next에서는 폴더 트리에 따라서, 작성된 파일의 위치에 따라 주소를 만들어 준다!




## 230105_Next.js 배우기
1. 파일 이름은 소문자로 작성, '-'로 구분(파일의 경로가 URL의 경로가 되기 때문인듯)  
        /파일 안 컴포넌트명은 대문자규칙 그대로

2. react에서는 react-router-dom 에서 가져왓다면 next에서는 next link에서 Link를 가져와서 이용함        















This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
