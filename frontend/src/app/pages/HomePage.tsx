import React from 'react'
import Layout from '../../layout'
import Post from '../components/Post'
import HeaderHomePage from '../components/HeaderHomePage'

export default function HomePage() {
  return (
    <>
      <Layout>
        <HeaderHomePage />
        <Post />
        <Post />
        <Post />
      </Layout>
    </>
  )
}
