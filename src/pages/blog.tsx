import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Blog = () => {
    const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`

    return (
        <div className='mt-28 w-[100%] max-w-6xl mx-auto'>
            {/* <div className='text-3xl font-bold mx-5'>blog</div> */}
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        </div>
    )
}

export default Blog