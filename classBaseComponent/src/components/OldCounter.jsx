import { Component } from "react";

// whenever we use class component we have work with "this" mostly.

// because of this keyword is confusing for most of the developers so thats why react shifted from class base component to function base component.

// here step 1
// create class that extends "Coponent" from react

// step 2
// create a render() method inside that you can write JSX.

// step 3
// now if we have to create state so we have to use Construtor method . Also must call super() constructor so this will work.

// state name is predefined name so we cannot chage that

// constructor(){
//     super();
//     this.state = {
//       count = 0,
// }
// }

// react gives us property name "setState()" so we can update state

// it partially updates the state. 

// if you have to use props inside of the constructor than  we have to take an arguments name "props" and also send via super method


//LifeCycle Method
// Three Main Stages
// 1) Mounting
// 2) Updating
//3)  Unmounting



class OldCounter extends Component {
  constructor(props) {
    super(props);

    // console.log(this.props);
    console.log("constructor");
    
    this.state = {
      count: 0,
    };

    this.timerId = null;
  }

  componentDidMount(){
    console.log("componentDidMount");
    // this.timerId = setInterval(()=>{
    //     console.log("Hello");
        
    // }, 1000)
    
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
    
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
    // clearInterval(this.timerId)
  }

 increase(){
    this.setState({count : this.state.count + 1})
}

  render() {
    // console.log(this.props);
    console.log("render");
    

    const { name } = this.props;

    return (
      <>
      <h1>{name}</h1>
        <div className="text-white mt-5 text-4xl flex gap-5 px-5 mb-10">
          <button
            onClick={this.increase.bind(this)}
            className="bg-green-500 p-3 rounded-md"
          >
            Increment
          </button>

          <h1>{this.state.count}</h1>

          <button
            onClick={() => this.setState({count : this.state.count - 1})}
            className="bg-red-500 p-3 rounded-md"
          >
            Decrement
          </button>
        </div>


      </>
    );
  }
}

export default OldCounter;
