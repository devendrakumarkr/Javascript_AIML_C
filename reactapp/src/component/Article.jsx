import React,{useState} from 'react'

function Article(props) {
    const[count,setCount]=useState(0)
    const[age,setAge]=useState(0)
    const[name,setName]=useState("")

    const handleIncrement=()=>{
        setCount(count+1)
        console.log(count)
    }
  return (
    <div>
      <h2>Article</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores nemo obcaecati a quam nihil nobis enim quod cupiditate, ipsam sunt laborum vel numquam, sint accusantium. Vitae aliquam esse culpa.</p>
      <h3>{props.data}</h3>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Article
