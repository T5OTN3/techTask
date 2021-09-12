import { useRouter } from 'next/router';
import axios from 'axios';
import { server } from './../../../config'
import Head from 'next/head';
import SingleBlog from './../../../components/Blog';

const blog = ({ blog }) => {
    const router = useRouter();
    const { id } = router.query;

    return(
        <div>
            <SingleBlog id={id} title={blog.data.title} blogText={blog.data.blogText} date={blog.data.createDate} images={blog.data.images}/>
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