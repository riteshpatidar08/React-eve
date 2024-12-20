import React from 'react'

function Button(props) {
    console.log(props.class)
  return (
    
       <div>
      <button className={`${props.class} class px-8 py-2 ml-10 text-white rounded-lg`}>{props.title}</button>
     </div>
   
  )
}

export default Button
