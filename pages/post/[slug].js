/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { client } from '../../sanity/lib/client'
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

const Slug = () => {
  const [post, setpost] = useState();

  const fetch = async () => {
    const slug = localStorage.getItem("slug")
    client.fetch(`*[_type == "post" && slug.current == $slug]{
      ${postFields}
   }`, { slug }).then((data) => { console.log(data[0]); setpost(data[0]) })
  }
  useEffect(() => {
    fetch();

  }, []);
  return (
    <>
      {post && <div className='container px-5 py-16 space-y-6 mx-auto'>
        <h1 className='text-6xl  font-bold'>{post.title}</h1>
        <div className='flex border-t-2 py-4 border-gray-500 gap-6 text-xl font-bold items-center'>
          <img className='rounded-full w-16 h-16  object-cover object-center' src={post.author.image.asset.url} alt='author image'></img>
          <h2>{post.author.name}</h2>
        </div>
        <img className='drop-shadow-xl rounded' src={post.mainImage.asset.url} alt={post.title}></img>
        <div className='text-lg py-10 space-y-4 px-10'>
          <p>{post._createdAt.slice(0, 10)}</p>
          <p>{post.des}</p>
        </div>
      </div>}
    </>
  )
}

export default Slug