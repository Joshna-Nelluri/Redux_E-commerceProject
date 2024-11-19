import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='notFoundPage'>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exists.</p>
        <Link to='/'>Go Back To Home</Link>
    </div>
  )
}

export default NotFoundPage;
