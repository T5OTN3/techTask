import Head from 'next/head';
import Content from '../widgets/content';
import axios from 'axios';
import { server } from './../config'


export default function Home({ blogs }) {

  return (
    <div>
      <Head>
        <title>Main</title>
      </Head>
      <Content blogs={blogs.data}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await axios(`${server}/api/admin/blog`);

  return {
    props: {
      blogs: data
    }
  }
}
