/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { client } from '../sanity/lib/client'
import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  _createdAt,
  "des" :body[0].children[0].text,
  _updatedAt,
  mainImage{asset->{url}},
  "slug": slug.current,
  "author": author->{name, image{asset->{url}}},
`
export const feedQuery = `*[_type == "post"] | order(_updatedAt desc) {
   ${postFields}
}`

const Blog = () => {
    const [posts, setposts] = useState();
    const [post, setpost] = useState();

    useEffect(() => {
        client.fetch(feedQuery).then((data) => { console.log(data[0]); setposts(data);setpost(data[0]) })
    }, []);
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                   {/* {post &&  <div>
                        <img src={post.mainImage.asset.url} alt={post}></img>
                        <div className='flex justify-between'>
                            <h1>{post.title}</h1>
                            <p>{post.des}</p>
                        </div>
                    </div>} */}

                    <div className="flex flex-wrap -m-4">
                        {posts && posts.map((post) => {
                            return <div key={post.id} className="p-4 w-full md:w-1/2  ">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className=" w-full hover:drop-shadow-xl" src={post.mainImage.asset.url} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">@{post.author.name}</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{post.title}</h1>
                                        <p className="leading-relaxed mb-3">{post.des}</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a onClick={()=>localStorage.setItem("slug",post.slug)} href={`/post/${post.slug}/?slug=${post.slug}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog