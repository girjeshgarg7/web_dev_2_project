import React, { Component } from 'react';
import { Data } from "./Data";
import './Question.css';

class Question extends Component{
    state = {
        userAnswer: null,
        currentQuestion: 0,
        options:[],
        score: 0,
        disabled: true,
        quizEnd: false
    };
    loadQuiz =() =>{
        
        this.setState(() =>{
            return{
                disabled: true,
                questions: Data[this.state.currentQuestion].question,
                options: Data[this.state.currentQuestion].options,
                answers: Data[this.state.currentQuestion].answer
            };
        });
    };
    componentDidMount(){
        this.loadQuiz();
    }
    nextQuestionHandler = () =>{
        const {userAnswer,answers, score}=this.state;
        if(userAnswer === answers){
            this.setState({
                score: score + 1
            });
        }

        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
    }
    // updates the component
    componentDidUpdate(prevProps, prevState) {
    
        if(this.state.currentQuestion !== prevState.currentQuestion){
             this.setState(() => {
                return{
                    disabled:true,
                    questions: Data[this.state.currentQuestion].question,
                    options: Data[this.state.currentQuestion].options,
                    answers: Data[this.state.currentQuestion].answer
                }; 
             });
        }
    }
   //check answer
   checkAnswer = answer => {
       this.setState({
           userAnswer: answer,
           disabled: false
       });
   }
   finishHandler = () => {
       if(this.state.currentQuestion === Data.length - 1){
           this.setState({
               quizEnd: true
           });
           
       }
   
   if(this.state.userAnswer === this.state.answers){
       this.setState({
           score: this.state.score + 1
       });
   }
};
    render(){
        const {questions,options,currentQuestion,userAnswer,quizEnd} = this.state;
        
            if (quizEnd) {
                return(
        <div className="re"> Quiz completed 
        <h1> Your Final score is {this.state.score} </h1>
        <h2>Thanks !!!</h2>
        </div>
                );
            } else {
        return(
            <div><div>
                <h1>  Examination page</h1>
               
               <span> {`Question no. ${currentQuestion +1} out of 4 `}</span>
               <h2>  {questions} </h2>
                 {options.map(option =>(
                     <p 
                     key={option.id}
                      className={`ui floating message options
                      ${userAnswer === option ? "selected" : null}`
                    }
                      onClick={() => this.checkAnswer(option)}>
                      {option}
                     </p>
                 ))}</div>
                 {currentQuestion < Data.length -1 &&(
                 <button className="btn" disabled={this.state.disabled}
                  onClick={this.nextQuestionHandler}>Next</button>)}
                 {currentQuestion === Data.length  - 1 &&(
                 <button className="btn" onClick={this.finishHandler}> Finish</button>)}
                
            </div>
        );
     }
}
}


export default Question;