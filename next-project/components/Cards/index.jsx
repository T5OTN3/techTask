import React from 'react';
import BlogCard from './blogCard'
import { useEffect, useState } from 'react'

import ReactPaginate from 'react-paginate';


const Cards = ({ data }) => {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);

    const resPerPage = 6;

    useEffect(() => {
        console.log(blogs)
        const start = (page - 1) * resPerPage;
        const end = page * resPerPage;
        setBlogs(data.slice(start, end));
    },[data, page])

    const selectPage = ({ selected }) => {
            setPage(selected + 1);
            const start = (page - 1) * resPerPage;
            const end = page * resPerPage;
            setBlogs(data.slice(start, end));
    }

    return (
        <>
            <section className="flex flex-row flex-wrap mx-auto">
                {
                    blogs.map((el, index) => {
                        const image = el.images.find(el => el.type === 'primary');
                        return (<BlogCard id={el.id} title={el.title} shortText={el.shortText} date={el.createDate} image={image} />) 
                    })
                }
            </section>
            <ReactPaginate 
                pageCount={data.length / resPerPage}
                containerClassName='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'
                pageClassName='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
                pageLinkClassName='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                activeClassName='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-1 py-1 border text-sm font-medium'
                previousLabel={<div>Preview</div>}
                nextLabel={<div>Next</div>}
                onPageChange={selectPage}
            />
        </>
        
    )
}

export default Cards;