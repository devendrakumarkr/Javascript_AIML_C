import React ,{Component}from 'react'
import { add as addition } from './utility'
import style from "../css/Menu.module.css"
import { Link, NavLink , useNavigate} from 'react-router-dom'
import Child from './Child'
// import ArtStyle from "../css/Article.module.css"

function Menu() {

  const navigate=useNavigate()
    console.log(addition(3,4))
  const handleLogin=()=>{
    console.log("Login Verified")
    navigate("/article")

  }
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        <li>Sports</li>
        <li>Entertainment</li>
        <li>Polititcs</li>
        <Link className='bg-amber-100 text-black p-1 m-2' to="/article"><button>Article</button></Link>
        <NavLink style={({isActive})=>({backgroundColor:isActive?"teal":""})} className='bg-amber-100 text-black p-1 m-2' to="/"><button>HomePage</button></NavLink>
        <Link className='bg-amber-100 text-black p-1 m-2' to="/contact"><button>Contact</button></Link>

        <button onClick={handleLogin}>Login</button>
        <Child/>
      </ul>
    </div>
  )
}

export default Menu

// class Menu extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             count:0,
//             age:0,
//             name:''
//         }

//     }

//     componentDidMount(){
//         console.log("Component Mounted")


//         // data to be retreived from backend
//     }

//     shouldComponentUpdate(nextProps, nextState){
//         if(nextState.count===1){
//             return false
//         }
//         console.log("Should componenet update")
//         return true
//     }

//     componentDidUpdate(){
//         console.log("Component  didUpdate")
//     }

//     handleIncrement=()=>{
//         this.setState({count:this.state.count+1})
//     }


//     componentWillUnmount(){
//         console.log("Component will unmount")
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Menu</h1>
//                 <ul>
//                     <li>Sports</li>
//                     <li>Entertainment</li>
//                     <li>Polititcs</li>
//                     <li>World</li>
//                 </ul>
//                 <h2>{this.state.count}</h2>
//                 <button className={style.btn} onClick={this.handleIncrement}>Increment</button>
//             </div>
//         )
//     }
// }

// export default Menu
