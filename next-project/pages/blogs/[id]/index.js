import { useRouter } from 'next/router';
import axios from 'axios';
import { server } from '../../../config'
import Head from 'next/head';
import BlogCard from '../../../components/Blog';

const blog = ({ blog }) => {
    const router = useRouter();
    console.log(router);
    const { id } = router.query;

    return(
        <div>
            <BlogCard id={id} author={blog.data.author} content={blog.data.content} date={blog.data.createDate}/>
            <Head>
                <title>Blog</title>
            </Head>
        </div>  
    )
}

export const getServerSideProps =  async (context) => {
    const { data } =  await axios(`${server}/api/admin/blog/${context.params.id}`);

    return {
        props: {
            blog: data
        }
    }
}

export default blog;