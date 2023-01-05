//Nextjs에서 주소창을 따라가기 때문에 소문자 작성,
//컴포넌트명은 대문자로 작성한다!

import Link from 'next/link'; //next에서 link가져옴
import Image from 'next/image';
import Layout from './../../components/layout';





const FirstPost = () => {
    return ( 
    
    <Layout>
            <title>First Post</title>
            <h1>First Post</h1>
            <Image
                src='/images/profile.jpg'
                height={150}
                width={210}
                alt="Your name"
            />
            <h2><Link href="/">Back to home</Link></h2><br/>
    </Layout>
            );
}
 
export default FirstPost;