// import React, {Component} from 'react';


// class App_visibilitytoggle extends Component {
//     constructor(props) {
//         super(props);
//         this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
//         this.state ={
//             visibility : true
//         }
//     }

//     handleToggleVisibility() {
//         this.setState((prevState)=> {
//             return {
//                 visibility: !prevState.visibility
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Visibility Toggle</h1>
//                 <button onClick={this.handleToggleVisibility}> {this.state.visibility ? 'Show Details' : 'Hide Details'}</button>
//                 {this.state.visibility ?
//                 <div>Helloo, you can see!!</div> : null
//                     }
//             </div>
//         );
//     }
// }

// export default App_visibilitytoggle ;