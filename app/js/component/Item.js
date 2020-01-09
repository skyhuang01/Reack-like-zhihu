var React = require('react');

class Item extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            newVote : parseInt(this.props.voteCount)
        }
    }
    voteUp(){

        var newVote = this.state.newVote + 1;
        this.setState({
            newVote : newVote
        });
    };
    voteDown(){
        if (this.state.newVote == 0) {
            return;
        }
        var newVote = this.state.newVote - 1;
        this.setState({
            newVote : newVote
        });
    };
    render(){
        return(
            <div className="media">
	            <div className="media-left">
	              <button className="btn btn-default button-border" onClick={this.voteUp.bind(this)}>
	                <span className="glyphicon glyphicon-chevron-up">+</span>
	                <span className="vote-count">{this.state.newVote}</span>
	              </button>
	              <button className="btn btn-default button-border"  onClick={this.voteDown.bind(this)}>
	                <span className="glyphicon glyphicon-chevron-down">-</span>
	              </button>
	            </div>
	            <div className="media-body">
	              <h4 className="media-heading">{this.props.title}</h4>
	              <p>{this.props.description}</p>
	            </div>
	        </div>
        )
    }
}


module.exports = Item;