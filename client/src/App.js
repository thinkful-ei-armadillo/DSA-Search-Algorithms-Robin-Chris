import React, { Component } from 'react';
import './App.css';




class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
    results: '',
    dataSet: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62,
              93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76,
              31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
    }
    this.numberInput = React.createRef();  
    this.count = 0; 
  }
  
linear = () => {
  const number = this.numberInput.current.value;
  
  for (let i = 0; i < this.state.dataSet.length; i++) {
    if (this.state.dataSet[i] === parseInt(number)){
      console.log('found'); 
      return this.setState({
        results: i + 1 
      })
    }
  }
  this.setState({
    results: this.state.dataSet.length 
  })
}


binary = () => {
  this.count = 0;

  const number = this.numberInput.current.value;
  const sort = this.state.dataSet.sort((a,b) => a - b);  
  this.binarySearch(sort, number); 
  this.setState({
    results: this.count 
  })
}

binarySearch = (array, value, start, end) => {
  start = start === undefined ? 0 : start; 
  end = end === undefined ? array.length: end; 
  this.count++; 
  
  if (start > end){
    return 
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index]; 

  if (item === value){
    return index;
  } else if (item < value){
    return this.binarySearch(array, value, index + 1, end); 
  } else if (item > value){
    return this.binarySearch(array, value, end, index -1)
  }
}

  render() {
    return (
      <div>
        <p>
          {this.state.results}
        </p>
          <form>
            <input ref={this.numberInput} type="text" name="number"/>
            <input type="button" name="linear" value="linear" onClick={this.linear} />
            <input type="button" name="binary" value="binary" onClick={this.binary} />
          </form>
      </div>
    );
  }
}

export default App;
