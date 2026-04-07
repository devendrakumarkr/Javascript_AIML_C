import React ,{Component}from 'react'
import { add as addition } from './utility'
// function Menu() {
//     console.log(addition(3,4))
//   return (
//     <div>
//       <h1>Menu</h1>
//       <ul>
//         <li>Sports</li>
//         <li>Entertainment</li>
//         <li>Polititcs</li>

//       </ul>
//     </div>
//   )
// }

// export default Menu

class Menu extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            age:0,
            name:''
        }

    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
                <h1>Menu</h1>
                <ul>
                    <li>Sports</li>
                    <li>Entertainment</li>
                    <li>Polititcs</li>
                    <li>World</li>
                </ul>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }
}

export default Menu
