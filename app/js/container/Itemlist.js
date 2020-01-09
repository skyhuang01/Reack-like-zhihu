var React = require('react');
var Item = require('../component/Item');

class Itemlist extends React.Component{
    
    render(){
        var questionItems = this.props.questions.map(function(q){
            return(
                <Item 
                key = {q.id} 
                questionKey = {q.id} 
                title = {q.title} 
                description = {q.description} 
                voteCount = {q.voteCount} 
                // onVote = {onVote}
                />
            )
        });
        return(
            <div>
                {questionItems}
            </div>
        )
    }
}

module.exports = Itemlist;