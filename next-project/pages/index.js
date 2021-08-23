import Head from 'next/head';
import Content from '../widgets/content';
import axios from 'axios';


export default function Home({ blogs }) {

  return (
    <div>
      <Head>
        <title>Main</title>
      </Head>
      <Content blogs={blogs}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await axios('https://jsonplaceholder.typicode.com/posts?_limit=6');

  return {
    props: {
      blogs: res.data
    }
  }
}
