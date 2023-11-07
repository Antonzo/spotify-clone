import React from 'react'
import DefaultLayout from 'layouts/DefaultLayout'

const IndexPage = () => {
  return (
    <>
      <DefaultLayout>
        <h1>Welcome</h1>
        <h3>The best tracks are collected here!</h3>
      </DefaultLayout>

      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default IndexPage