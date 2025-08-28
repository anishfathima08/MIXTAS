import React from 'react'
import BlogBody from '../Components/BlogPageComponents/BlogBody'
import MyContextProvider from '../Context/MyContextProvider'

const BlogPage = () => {
    return (
        <>
            <MyContextProvider>
                <BlogBody />
            </MyContextProvider>
        </>
    )
}

export default BlogPage