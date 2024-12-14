import { useEffect , useState } from "react"


function App(){
const [count ,setCount] = useState(0)
  //without dependency
  useEffect(()=>{
 console.log('useEffect is always running')
  })

  //empty dependency
  useEffect(()=>{
console.log('useEffect only run once')
  },[])

  //with dependency
  useEffect(()=>{
    console.log('only run when count change')
  },[count]) 


  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
<p className="ml-20">{count}</p>
<button onClick={handleClick}>Increment</button>
    </div>
  )
}


export default App