// import React,{Component} from 'react';

// class Header extends Component {
//   render() {
    
//     return (
//       <div>
//         <h1> {this.props.title}</h1>
//         <h2>{this.props.subtitle} </h2>
//       </div>
//     ) ;
//   }
// }

// class Action extends Component {
  
//   handlePick = () => console.log("handlePick");

//   render(){
    
//     return (
//       <div>
//         <button onClick={this.handlePick}> what should I do</button>
//       </div>
//     ) ;
//   }
// }

// class RemoveAll extends Component {
  
//   removeAll = () => console.log('removeaaa');
  
//   render() {
    
//     return (
//       <div>
//         <button onClick={this.removeAll}>RemoveAll</button>
//       </div>
//     )
//   }
// }

// class Options extends Component {
//   render(){
//     console.log('dan1');
//     return (
      
//       <div>
//         {this.props.options.map( option => <Option key={option} optionText={option} />)}
//       </div>
//     ) ;
//   }
// }

// class Option extends Component {
//   render(){
//     console.log('dan2');
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//     ) ;
//   }
// }

// class AddOption extends Component {

//   handleAddOption = (event) => {
//     event.preventDefault();
//     const option = event.target.option.value.trim();

//     console.log("logg " + option);
//   }
//   render(){
//     return (
//       <div>
//         <form onSubmit={this.handleAddOption }>
//           <input type="text" name="option" />
//           <button>Add Option</button>
//         </form>
//       </div>
//     ) ;
//   }
// }

// class IndecisionApp extends Component {
//   render() {

//     const title ="Indecision";
//     const subtitle = "Put your life in hands of computer";
//     const options = ['thing one','thing two', 'thing four','thing five'];
//     return (
//       <div>
//         <Header title={title} subtitle="subtitle"/>
//         <Action />
//         <RemoveAll />
//         <Options options={options}/>
//         <AddOption />
//       </div>
//      ) ;
//   }
// }


// export default IndecisionApp ;
