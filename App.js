import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [count,setCount] = React.useState(0)
  return (
    
    <div className="App">
     <ToDo/>
      

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

function ToDo(){
  let [doList,setList] = React.useState(["strings","or","something"])
  let [input,changeInput] = React.useState("")
  return <div>
    {/* {input.split("").reverse().join("")} */}
    <InputField
    input = {input}
    changeInput = {changeInput}
    />
    <PlusButton
     input = {input}
     setList = {setList}
     doList = {doList}
    />
    {doList.map((item,index)=>{
    return <ToDoItem
    setList = {setList}
    doList = {doList}
    item = {item}
    index = {index}
    changeInput = {changeInput}
    />
  })}</div>
}


function ToDoItem(props){
  return<p>{props.item}
  <MinusButton
  index = {props.index}
  setList = {props.setList}
  doList = {props.doList}
  />
  <EditButton
    index = {props.index}
    setList = {props.setList}
    doList = {props.doList}
    input = {props.input}
    changeInput = {props.changeInput}
  />
  </p>
}

function InputField(props){
  function handleChange(event){
    props.changeInput(event.target.value)
  }
  return <input
  value = {props.input}
  onChange = {handleChange}
  ></input>
}

function PlusButton(props){
  function addNew(){
    props.setList([...props.doList,props.input])
  }
  return <button onClick = {addNew}>ADD</button>
}

function MinusButton(props){
  function deleteNew(){
    props.setList(props.doList.filter((anythingButNull,currentIndex)=>{
      // (╯°□°)╯︵ ┻━┻(╯°□°)╯︵ ┻━┻(╯°□°)╯︵ ┻━┻(╯°□°)╯︵ ┻━┻(╯°□°)╯︵ ┻━┻(╯°□°)╯︵ ┻━┻(╯°□°)╯︵ ┻━┻
      if (currentIndex === props.index){
        return false
      }
      else{
        return true
      }
    }))
  }
  return <button onClick = {deleteNew}>REMOVE</button>
}

function EditButton(props){
  let [change,changed] = React.useState(true)
  let [newtext,makenewtext] = React.useState("")
  function edit() {
    changed(change ? false : true)

  //   props.setList(props.doList.filter((anythingButNull,currentIndex)=>{
  //     if (currentIndex === props.index){
  //       return <input></input>
  //     }
  //     else{
  //       return <button></button>
  //     }
  //   }))
  }
  function changeState(event){
    makenewtext(event.target.value)
  }
  function commit(){
    props.setList(props.doList.map((element,index)=>{
        if (props.index === index){
          return newtext
        }
        else{
          return element
        }
    }))
    changed(change ? false : true)
  }
  if (change){
    return <button onClick = {edit}>EDIT</button>
  }
  else {
    return <div><input 
    value = {newtext}
    onChange = {changeState}
    ></input><button onClick = {commit}>DONE</button></div>
  }
}




// function InputField(props){
//   function handleChange(event){
//     props.changeInput(event.target.value)
//   }
//   return <input
//   value = {props.input}
//   onChange = {handleChange}
//   ></input>
// }



// function SayHello(){
//     return <div>To Do List!!!</div>
// }
// function Item(){
//   return <input
//   value = {this.state.value}
//   onChange = {
//     (event)=>this.setState({
//       value : event.target.value
//     })
//   }
//   />
// }
// function AcceptButton(){
//   return <button>ENTER</button>
// }


// <input value={this.state.value} onChange={(event) => this.setState({ value: event.target.value })} />


// let doList = []

// function addDo(){
//   let [length,setlength]=React.useState(0)
//   function addOne(){
//     setlength(length+1)
//   }
// }

// function setDo(x){
//   let [entry,setentry]=React.useState("")
//   function addEntry(){
//     setentry(x)
//     doList.push(entry)
//   }
//   function removeEntry(){
//     setentry("")
//   }
// }



  // let newText = document.getElementById("text")
  // if (newText.innerHTML){
  //   return <div>{newText.innerHTML}</div>
  // }

function CounterButton(props){
  let [count,setCount] = React.useState(props.initialcount ? props.initialcount : 0)
  function increaseCount(){
    setCount(count+1)
  }
  return <button onClick={increaseCount}>Current Count is {count}</button>
}

class CounterButton33 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      //count: props.initialcount ? props.initialcount : 0
      count: props.initialcount || 0
    };
  }

  render() {
    const increaseCount = () => {
      this.setState({
        count: this.state.count + 1
      })
    }

    return <button onClick={increaseCount}>Current Count is {this.state.count}</button>
  }
}


function CounterButton2({initialcount=0}){
  let [count,setCount] = React.useState(initialcount)
  function increaseCount(){
    setCount(count+1)
  }
  return <button onClick={increaseCount}>Current Count is {count}</button>
}

let object = {
  key : "skeleton",
  name: "james"
}
let {name}=object


export default App;
