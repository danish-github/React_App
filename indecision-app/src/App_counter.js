// import React, {Component} from 'react' ;

// class App_counter extends Component {

//     constructor(props) {
//         super();
//         this.handleAddOne = this.handleAddOne.bind(this);
//         this.handleMinusOne = this.handleMinusOne.bind(this);
//         this.handleReset = this.handleReset.bind(this);
//         this.state = {
//             count: 0
//         }
//     }

//     handleAddOne= function(){
        
//         this.setState((prevState) => {
//             return { 
//                 count: prevState.count + 1
//             };
//         });
//     }

//     handleMinusOne= function(){
//         this.setState((prevState) => {
//             return {count: prevState.count -1};
//         });
//     }
    
//     handleReset= function(){
//         this.setState(() => {
//             return {
//                 count: 0
//             };
//         });
//     }

    
//     render() {
//         return (
//             <div>
//                 <h1>Count:{this.state.count}</h1>
//                 <button onClick={this.handleAddOne}>+1</button>
//                 <button onClick={this.handleMinusOne}>-1</button>
//                 <button onClick={this.handleReset}>reset</button>
//             </div>
//         );
//     }
// }

// export default App_counter;