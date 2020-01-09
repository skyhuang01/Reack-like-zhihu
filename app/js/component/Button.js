var React = require('react');

class Button extends React.Component{
    render(){
        return(
            <button className="btn zhihu-color" style={{borderRadius: "5px", border: "1px solid #0084ff"}} onClick={this.props.displayEvent} id="add-question-btn">提问</button>
        );
    }
};

module.exports = Button;