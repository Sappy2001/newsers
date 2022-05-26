import React, { Component } from 'react';
import loading from './loading.gif';
const Spinner=()=>{
  
    return (
      <div className='text-center'>
          <img  className="mb-8" src={loading} alt="loading" />
      </div>
    )
  }

export default Spinner