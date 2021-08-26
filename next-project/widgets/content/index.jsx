import { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from './../../config';
import Cards from './../../components/cards';

const Content = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            const { data } = await axios(`${server}/api/admin/blog`);
            setBlogs(data.data);
        }
        fetchData();
    },[]);


    return(
        <Cards data={blogs}/>
    )
}

export default Content;
