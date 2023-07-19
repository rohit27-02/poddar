/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { client } from '../../sanity/lib/client'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import { getImageDimensions } from '@sanity/asset-utils'
import imageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../../sanity/env'

const postFields = groq`
  _id,
  title,
  _createdAt,
  "des" :body,
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
   }`, { slug }).then((data) => {setpost(data[0]) })
  }
  useEffect(() => {
    fetch();

  }, []);
  const builder = imageUrlBuilder({
    projectId: projectId || '',
    dataset: dataset || '',
  })

  const SampleImageComponent = ({ value, isInline }) => {
    const { width, height } = getImageDimensions(value)
    return (
      <img
      className='mx-auto'
        src={builder
          .image(value.asset._ref)
          .width(isInline ? 100 : 800)
          .fit('max')
          .auto('format')
          .url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? 'inline-block' : 'block',

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    )
  }

  const components = {
    types: {
      image: SampleImageComponent,
    },
    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a className='underline underline-offset-4 hover:text-amber-800 font-semibold' href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
    },
    
  }

  return (
    <>
      {post && <div className='container px-5 py-16 space-y-6 mx-auto'>
        <h1 className='text-3xl md:text-6xl  font-bold'>{post.title}</h1>
        <div className='flex border-t-2 py-4 border-gray-500 gap-6 text-xl font-bold items-center'>
          <img className='rounded-full w-16 h-16  object-cover object-center' src={post.author.image.asset.url} alt='author image'></img>
          <h2>{post.author.name}</h2>
        </div>
        <img className='drop-shadow-xl rounded' src={post.mainImage.asset.url} alt={post.title}></img>
        <div className='text-lg md:py-10 space-y-4 max-sm:px-3 md:px-10'>
          <p>{post._createdAt.slice(0, 10)}</p>
          <PortableText
            value={post.des}
            components={components}
          />
        </div>
      </div>}
    </>
  )
}

export default Slug