
// function MyComponent() {
//     return (
//         <div>
//             Hello World Yến Nhi
//         </div>
//     );
// }
// export default MyComponent;

import React from "react";
import 'C:/Users/admind/OneDrive - The University of Technology/Desktop/ReactJS/learn_react/src/styles/myComponent.scss'

/**
 * 
 * JSX => return block
 * fragment
 * state
 */

class MyComponent extends React.Component {

    //key:value
    state = {
        name : 'myComponent',
        channel : 'myChannel',
    }
    handleNameChange = (event) => {
        this.setState({
            name : event.target.value,
        });
    };
    render(){
        // let MyName = 'Yến Nhi';
        return (
            <>
            <div className="myName">

            <input value={this.state.name} type="text" 
            onChange={(event) => this.handleNameChange(event)}
            />
                Hello World , My name is {this.state.name} 
                {/* Hello World , My name is {this.state['name']}  */}
            </div>
            <div className="myName">
                Hello world, My channel is {this.state.channel}
            </div>
            </>
        );
    }
}

export default MyComponent;


// const MyComponent = () => {
//         return (
//             <div>
//                 Hello World Yến Nhi
//             </div>
//         );
//     }
//     export default MyComponent;