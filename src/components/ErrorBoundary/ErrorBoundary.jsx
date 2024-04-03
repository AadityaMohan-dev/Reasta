import React from 'react'
import error from '../Images/error.png'
import { Link } from 'react-router-dom'
import './ErrorBoundary.css'
function ErrorBoundary() {
  return (
    <>
    <div className="row-err">
        <img src={error} alt="" />
    </div>
    </>
  )
}

export default ErrorBoundary