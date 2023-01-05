import '../styles/global.css';

//_app.js는 모든 페이지를 래핑하는 최상위 react구성요소,
//_app.js파일을 만들고 난뒤 서버를 다시 재시작 해야된다.

const App = ({Component, pageProps}) => {
    return ( 
        <>
            <Component {...pageProps} />
        </>
     );
}
 
export default App;