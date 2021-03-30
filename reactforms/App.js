import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
   constructor(){
       super()
       this.state = {
          firstName: '',
          lastName: '',
          flag: true,
          gender: ''
       }
   }
   handleChange(event){
     // console.log(event.target)
     const {name, value, type, checked} = event.target
    // console.log(event.target.checked)
      // this.setState({
          if (type === "checkbox")
            this.setState(
                  {[name]:checked}
               )
          else
             this.setState({
                 [name]:value
             })     
   }
   handleSubmit(props){
       
       console.log(JSON.stringify(props.target))
   }
   render(){
       return(
         <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="First Name" value={this.state.firstName} name="firstName" onChange={this.handleChange.bind(this)}/>
            <br/>
            <input type="text" placeholder="Last Name" value={this.state.lastName} name="lastName" onChange={this.handleChange.bind(this)}/>
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <label><input type="checkbox"
            name="flag" 
            checked={this.state.flag}
            onChange={this.handleChange.bind(this)}
            /> Leetcode
            </label>
            <label><input type="radio"
            name="gender" 
            value="male"
            checked={this.state.gender==='male'}
            onChange={this.handleChange.bind(this)}
            /> Male
            </label>
            <label><input type="radio"
            name="gender" 
            value="female"
            checked={this.state.gender==='female'}
            onChange={this.handleChange.bind(this)}
            /> Female
            </label>
            <br/><br/>
            <select name='favColor' onChange={this.handleChange.bind(this)}
            value={this.state.favColor}>
                <option value=""></option>
               <option value='red'>red</option>
               <option value='orange'>orange</option>
               <option value='blue'>blue</option>
            </select>
            <p>color is {this.state.favColor}</p>   
            
            <button >Submit</button>  
         </form>
       )
   }
   
       
}

export default App 