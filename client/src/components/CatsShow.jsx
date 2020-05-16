import React from 'react';

function CatsShow(props) {
  return (
    <>
      <div>
        <h2>Past</h2>
        <h3>{props.title}</h3>  
        {/* <div className='cats-show'>
          <p>Login and all the songs that are performance-ready in your repertoire can be viewed here.</p>
        </div> */}
      </div>  
      <div>
        <h2>Present</h2>
        <div className='cats-show'>
          <p>Login and all the songs that you're currently working on can be viewed here.</p>
        </div>
      </div> 
      <div>
        <h2>Future</h2>
        <div className='cats-show'>
          <p>Login and all of the songs that you'd like to tackle in the future can be viewed here.</p>
        </div>
      </div> 
    </>
  )
}

export default CatsShow

