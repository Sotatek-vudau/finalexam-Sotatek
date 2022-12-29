import React from 'react'
import Layout from '../../layout'
import Post from '../components/Post'

export default function HomePage() {
  return (
    <>
        <Layout>
            <Post />
            <Post />
            <Post />
        </Layout>
    </> 
  )
}
