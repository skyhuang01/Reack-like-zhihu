var React = require('react');
var Button = require('../component/Button');
var Itemlist = require('../container/Itemlist');
var Form = require('../component/Form')

class App extends React.Component{
    constructor(props){
        super(props);
        var questions = [
            {
                id:1,
                title:'12306的候补购票功能能跑赢抢票软件吗？',
                description:'12306会优先给候补购票的用户出票，只要你比别人先提交了候补单，那你就比别人先买到票。就这么简单，跟抢票软件的刷票快慢没半毛钱关系了。你也不要再傻傻的去买什么加速券了。就这么简单，跟抢票软件的刷票快慢没半毛钱关系了。你也不要再傻傻的去买什么加速券了。',
                voteCount:10
            },
            {
                id:2,
                title:'在12306抢票是一种怎样的体验？',
                description:'系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中系统繁忙中。',
                voteCount:8
            },
            {
                id:3,
                title:'CES 2019 有哪些看点，让人值得期待的产品和技术有哪些？',
                description:'一年一度的全球数码爱好者面基大会：国际消费类电子展（Consumer Electronic Show）也就是众所周知的 CES 马上要在「世界娱乐之都」拉斯维加斯举行了。国际消费类电子展（Consumer Electronic Show）',
                voteCount:5
            }
        ];
        this.state = {
            questions : questions,
            formDisplay: false
        };

    };
    getFormQuestion(question){
        console.log(question);
        question.id = this.state.questions.length + 1;
        var newQuestion = this.state.questions.concat(question);
        this.setState({
            questions: newQuestion
        });
    };
    displayEvent(){
        this.setState({
            formDisplay: !this.state.formDisplay
        });
    }
    render(){
        return(
            <div>
			  <div className="jumbotron text-center">
		          <div className="container">
		            <h1><span className="zhihu-color">Sky React Zhihu</span></h1>
		            <Button displayEvent={this.displayEvent.bind(this)} />
		          </div>
		      </div>
		      <div className="main container">
                <div>
                    <Form 
                        formDisplay={this.state.formDisplay}
                        displayEvent={this.displayEvent.bind(this)}
                        getFormQuestion={this.getFormQuestion.bind(this)}
                    />
                </div>
                <div>
                    <Itemlist questions={this.state.questions} />
                </div>
		      </div>
			</div>
        );
    }
};

module.exports = App;