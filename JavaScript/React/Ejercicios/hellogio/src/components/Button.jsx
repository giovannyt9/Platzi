import React from "react";

class Button extends React.Component {
    state = {
        count: 0,
    }
    handlerClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        const {count} = this.state;//I could use too directly with this.state.count
        return(
            <div>
                <h2>Apples: {count}</h2>
                <button type="button" onClick={this.handlerClick}>Add apples</button>
            </div>
        );
    }
};

// const Button = props => {
//     const { text, text2} = props;
//     return(
//         <div>
//             <button type="button">{text}</button>
//         </div>
//     );
// };

export default Button;
