import Head from 'next/head';
import styles from './layout.module.css';

const Layout = ( { children, home } ) => {
    return ( 
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Layout Next</title>
            </Head>
            <header>
                {/** 홈값이 있다면 화면을 띄워주고, 아니면 다른내용 띄울예정, 삼항연산자이용*/}
                { home ? <h1>Home</h1> : <h1>Not Home</h1> }
            </header>
            <div>{ children }</div>
        </div>


     );
}
 
export default Layout;