import { useRouter } from 'next/router';
import axios from 'axios';
import Head from 'next/head';
import BlogCard from '../../../components/Blog';

const blog = ({ blog }) => {
    const router = useRouter();
    const { id } = router.query;

    return(
        <div>
            <BlogCard id={id} title={blog.title} body={blog.body}/>
            <Head>
                <title>Blog</title>
            </Head>
        </div>  
    )
}

export const getServerSideProps =  async (context) => {
    const res =  await axios(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

    return {
        props: {
            blog: res.data
        }
    }
}

export default blog;