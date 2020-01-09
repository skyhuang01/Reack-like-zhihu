var React = require('react');

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            putTitle: "",
            putDescription: ""
        }
    }

    addToList(){
        if (!this.refs.title.value || !this.refs.description.value) {
            event.preventDefault();
            return;
        }
        event.preventDefault();
        // this.setState({
        //     putTitle : this.refs.title.value,
        //     putDescription: this.refs.description.value
        // });
        var newQuestion = {
            title: this.refs.title.value,
            description: this.refs.description.value,
            voteCount: 0
        };
        this.props.getFormQuestion(newQuestion);
        this.refs.addQuestionForm.reset();

    }
    render(){
        var displayStyle = this.props.formDisplay ? 'block' : 'none';
        var comQuestion = this.state.putTitle;
        var comDescription = this.state.putDescription;
        return(
            <form ref="addQuestionForm" onSubmit={this.addToList.bind(this)} style={{display: displayStyle}}>
                <div >
                    <label className="to-form">提问：</label>
                    <input ref="title" className="to-form" type="text"></input>
                </div>
                <div>
                    <label className="to-form">描述：</label>
                    <textarea ref="description" className="to-form"></textarea>
                    <button type="submit"  className="to-form-button btn zhihu-color" >确定</button>
                    <button type="button" className="to-form-button btn zhihu-color" onClick={this.props.displayEvent}>取消</button>

                </div>
            </form>
        )
    }

}

module.exports = Form;