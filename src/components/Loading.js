import React from 'react'
import Loader from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="loader">
      <Loader type="Circles" color="#2e7c31" height={100} width={100} />
    </div>
  )
}

export default Loading
