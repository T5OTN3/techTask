import Head from 'next/head';
import Content from './../widgets/content';


export default function Home({ blogs }) {

  return (
    <div>
      <Head>
        <title>Main</title>
      </Head>
      <Content/>
    </div>
  )
}
