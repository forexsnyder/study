import React from 'react'
import Header from '../components/Header'

export default function Layout(props) {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
    </>
  )
}
