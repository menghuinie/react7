import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect, useRef } from "react";
import { useCallback } from "react";

import styles from '../app.module.css'
import Car from './Car.js';
import Todos from "./Todos";
import Todos036 from "./Todos036";
import '../asset/sass-react7.scss';
import useFetch from '../hook/useFetch';

function myFunction01(param1, p2) {
  return param1 * p2;
}

function accordionFormat03(id, data) { 
  return <>  
          <div id={id} class="collapse">
            <div class="card-body">
              {data}   
            </div> <br/> 
          </div>    
        </>;
};

//const var2="";    //invalid assignment to const 'var2'. const has a block scope.
let var2="";      //let has a block scope.
//var var2="";      //this works too. var has a function scope, not a block scope.

//001
const hi = <div className={styles.orange9} > Hello React orange9</div>  
const hello001= accordionFormat03("001", hi); 

//002
class Car002 {
  constructor(name) {
    this.brand = name;
  }
}

const car = new Car002("Ford002");
const carBrand002= accordionFormat03("002", car.brand); 

//003
var2 = () => {
  return "Hello 003 World!";
}
const arrowFunction003= accordionFormat03("003", var2()); 


//004
var2 = (city) => "Hello 004 " + city;
const arrowFunction004= accordionFormat03("004", var2("Montreal")); 

//005
const array005fruit = ['apple', 'banana', 'orange'];
const list005fruit = array005fruit.map((item) => <div>{item} plus22</div>)
const arrayMethod005 = accordionFormat03("005", list005fruit); 

//006
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
  // Destructuring comes in handy when a function returns an array:
}

const array006calculate = calculate(4, 7);
const list006calculate = array006calculate.map((item) => <div>{item} end006 </div>)
const destructuring006 = accordionFormat03("006", list006calculate); 

//007 not works. Try later.
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne);

function myVehicle({ model, registration: { state } }) {
  const var2 = 'My ' + model + ' is registered in ' + state + '.';
}

//const destructuring007 = accordionFormat03("007", var2); 
const destructuring007 = accordionFormat03("007", 'var2'); 

//008 
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
const spreadOperator008 = accordionFormat03("008", numbersCombined); 

//009 Not wroks.
const myVehicle009 = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

//const myUpdatedVehicle = {...myVehicle009, ...updateMyVehicle}
const spreadOperator009 = accordionFormat03("009", "myUpdatedVehicle"); 

//010
const myelement = (
  <>
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
  </>
);

const renderHTML010 = accordionFormat03("010", myelement); 

//011
const x = 5;
let text = "Goodbye011";
if (x < 10) {
  text = "Hello011";
}
const ifJSX011 = accordionFormat03("011", text); 

//012
const t = 15;
const myElement = <div>{(t) < 10 ? "Hello012" : "Goodbye012"}</div>;
const ifJSX012 = accordionFormat03("012", myElement); 

//013    
function Car013(props) {
  return <p>I am a {props.color} Car 013!</p>;
}
const component013 = accordionFormat03("013", <Car013 color="red"/>); 

//014
function Car014() {
  return <p>I am a Car!</p>;
}

function Garage() {
  return (
    <>
	    <p>Who lives in my Garage?</p>
	    <Car014 />
    </>
  );
}
const component014 = accordionFormat03("014", <Garage />); 


//015
const component015 = accordionFormat03("015", <Car />); 


//016
class Car016 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>I am a {this.props.model}!</p>;
  }
}
const class016 = accordionFormat03("016", <Car016 model="Mustang"/>); 


//017
class Car017 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <div>My {this.state.brand}</div>
        <p>
          It is a {this.state.color } {this.state.model } from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor} >Change color to blue</button>
      </div>
    );
  }
}

const classState017 = accordionFormat03("017", <Car017 />); 

//018
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {   // called right before the render method.
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <p>My Favorite Color is {this.state.favoritecolor}</p>
    );
  }
}

const classMounting018 = accordionFormat03("018", <Header favcol="yellow"/>); 


//019
class Header019 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {       // called after the component is rendered.
    setTimeout(
      () => {this.setState({favoritecolor: "yellow"})}, 
      3000)
  }
  render() {
    return (
      <p>My Favorite Color is {this.state.favoritecolor}</p>
    );
  }
}

const classMounting019 = accordionFormat03("019", <Header019 />); 

//020 
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>btn kick!</button>
  );
}
const event020 = accordionFormat03("020", <Football  />); 

//021
function Football021() {
  const shoot = (msg, evt) => {
    alert(evt.type + " got " + msg );
		/*
		'evt' represents the React event that triggered the function. In this case, the 'click' event.
		*/
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}

const event021 = accordionFormat03("021", <Football021  />); 

//022
function Garage022(props) {
  const cars = props.cars;
  return (
    <>
      <p>Garage022</p>
      {cars.length > 0 &&
        <p>
          You have {cars.length} cars in your garage.
        </p>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi'];
const conditional022 = accordionFormat03("022", <Garage022 cars={cars} />); 

//023
function MissedGoal() {
	return <p>MISSED!</p>;
}

function MadeGoal() {
	return <p>GOAL!</p>;
}

function Goal(props) {
  const isGoal = props.isGoal;
	return (
		<>
			{ isGoal ? <MadeGoal/> : <MissedGoal/> }
		</>
	);
}

const conditional023 = accordionFormat03("023", <Goal isGoal={false} />); 

//024
function Car024(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage024() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
	    <p>Who lives in my garage?</p>
	    <ul>
        {cars.map((car) => <Car024 brand={car} />)}
      </ul>
    </>
  );
}
const list024 = accordionFormat03("024", <Garage024 /> ); 

//025
function Car025(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage025() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
	    <p>Who lives in my garage?</p>
	    <ul>
        {cars.map((car) => <Car025 key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}
const list025 = accordionFormat03("025", <Garage025/> ); 

//026
function MyForm() {
  const [name, setName] = useState("Don");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const form026 = accordionFormat03("026", <MyForm /> ); 

//027
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}> + </button>
      </div>
    </>
  );
};

const memo027 = accordionFormat03("027", <App /> ); 

//028
const Header028 = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little 028 style!</p>
    </>
  );
}

const style028 = accordionFormat03("028", <Header028 /> ); 

//029
const Header029 = () => {
  return (
    <>
      <h1s>Hello 029Style!</h1s>
      <p>Add a little style!.</p>
    </>
  );
}

const styleSass029 = accordionFormat03("029", <Header029 /> ); 

//030
function FavoriteColor() {
  const [color, setColor] = useState("red");
    
  return (
    <>
      <p>My favorite color is {color}!</p>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

const hook030 = accordionFormat03("030", <FavoriteColor /> ); 

//031
function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => { setCalculation(() => count * 2); }, 
            [count]); // <- add the count variable here.

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

const useEffectHook031 = accordionFormat03("031", <Counter />); 


//032
function App032() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Render Count: {count.current}</p>
    </>
  );
} 

const useRefHook032 = accordionFormat03("032", <App032 />); 

//033
function App033() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

const useRefHook033 = accordionFormat03("033", <App033 />); 

//034
function App034() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {    previousInputValue.current = inputValue;  }, 
            [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Current Value: {inputValue}</p>
      <p>Previous Value: {previousInputValue.current}</p>
    </>
  );
}
const useRefHook034 = accordionFormat03("034", <App034 />); 

//035
const useReducerHook035 = accordionFormat03("035", <App034 />); 


//036
const App036 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos036 todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const useCallbackHook036 = accordionFormat03("036", <App036 />); 

//037
// We will use JSONPlaceholder service to fetch fake data. 
// This service is great for testing applications when there is no existing data.
const Home037 = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>  {item.userId} - {item.title}</p>;
        })}
    </>
  );
};

const customHook037 = accordionFormat03("037", <Home037 />); 


//503
const htmlStyle = <p style={{backgroundColor: "lightblue", color: "red"}}>HelloReact503 Style!</p>
const htmlStyle503= accordionFormat03("503", htmlStyle); 

//504
//start here

export default function W3() {
  return (
<>  
    
  <div class="container">  
    <p>React try 🎉</p>
   
    <div id="accordion">
      <u>W3</u>
  
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#001">hello001</a>
        </div>
          { hello001 } 
      </div>

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#002">ES6 class carBrand002 </a>
        </div>
          { carBrand002 } 
      </div>
      
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#003">ES6 arrowFunction003 </a>
        </div>
          { arrowFunction003 } 
      </div>    
      
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#004">ES6 arrowFunction004 </a>
        </div>
          { arrowFunction004 } 
      </div>   
     
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#005">ES6 arrayMethod005 </a>
        </div>
          { arrayMethod005 } 
      </div>   

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#006">ES6 destructuring006 </a>
        </div>
          { destructuring006 } 
      </div>  
      
      <div class="card">
        <div class="card-header">
<a class="collapsed card-link" className={styles.textRed9} data-toggle="collapse" href="#007">ES6 destructuring007 </a>
        </div>
          { destructuring007 } 
      </div>  

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#008">ES6 spreadOperator008 </a>
        </div>
          { spreadOperator008 } 
      </div>  


      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" className={styles.textRed9} data-toggle="collapse" href="#009">ES6 spreadOperator009 </a>
        </div>
          { spreadOperator009 } 
      </div>  
      
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#010">renderHTML010 </a>
        </div>
          { renderHTML010 } 
      </div>        
      
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#011">ifJSX011 </a>
        </div>
          { ifJSX011 } 
      </div>  

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#012">ifJSX012 </a>
        </div>
          { ifJSX012 } 
      </div>  

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#013">component013 </a>
        </div>
          { component013 } 
      </div>  
      
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#014">component014 </a>
        </div>
          { component014 } 
      </div>  
      
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#015">component015 </a>
        </div>
          { component015 } 
      </div>  

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#016">class016 </a>
        </div>
          { class016 } 
      </div>  

      
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#017">classState017 </a>
        </div>
          { classState017 } 
      </div>        

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#018">classMounting018 </a>
        </div>
          { classMounting018 } 
      </div>  

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#019">classMounting019 </a>
        </div>
          { classMounting019 } 
      </div> 
      
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#020">event020 </a>
        </div>
          { event020 } 
      </div> 

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#021">event021 </a>
        </div>
          { event021 } 
      </div> 

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#022">conditional022 </a>
        </div>
          { conditional022 } 
      </div> 

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#023">conditional023 </a>
        </div>
          { conditional023 } 
      </div> 
      
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#024">list024 </a>
        </div>
          { list024 } 
      </div> 

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#025">list025 </a>
        </div>
          { list025 } 
      </div> 

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#026">form026 </a>
        </div>
          { form026 } 
      </div> 
      
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#027">memo027 </a>
        </div>
          { memo027 } 
      </div> 
      
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#028">style028 </a>
        </div>
          { style028 } 
      </div> 

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#029">styleSass029 </a>
        </div>
          { styleSass029 } 
      </div> 

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#030">hook030 useState</a>
        </div>
          { hook030 } 
      </div> 

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#031">useEffectHook031</a>
        </div>
          { useEffectHook031 } 
      </div> 
      
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#032">useRefHook032</a>
        </div>
          { useRefHook032 } 
      </div> 

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#033">useRefHook033</a>
        </div>
          { useRefHook033 } 
      </div> 

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#034">useRefHook034</a>
        </div>
          { useRefHook034 } 
      </div> 
      
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#036">useCallbackHook036</a>
        </div>
          { useCallbackHook036 } 
      </div> 

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#037">customHook037</a>
        </div>
          { customHook037 } 
      </div> 

      <br/>
      <u>Other</u>   

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#503">htmlStyle503</a>
        </div>
          { htmlStyle503 } 
      </div>
    
    </div>  
  </div>
      
</>);
}
