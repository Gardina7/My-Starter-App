import React, { Component } from 'react';

//import our service
import JeopardyService from "../../jeopardyService";


class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      formData: {
        answer:'',
        

    }
    }
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  handleChange = (event) => {
    const formData = {...this.state.formData}
    console.log(formData)
console.log(event.target.name)
console.log(event.target.value)
formData[event.target.name] = event.target.value

this.setState({formData})

}
handleSubmit = (event) => {
     event.preventDefault();

     if(this.state.data.answer === this.state.formData.answer){
         console.log('correct')
         this.setState( (state,props) => ({
             score: state.score + state.data.value,
             formData: {
                 answer:""
             }
         }))
     }else{
         console.log('incorrect')
         this.setState((state,props) => ({
            score: state.score - state.data.value,
            formData: {
                answer:""
            }
        }) )
     }
     this.getNewQuestion();

    
}

//   getNewCatagory() {
//       return this.client.getCatagory().then(result => {
//         this.setState({
//           data: result.data[0]
//         })
//   })
// }


//   getNewValue() {
//     return this.client.getValue().then(result => {
//         this.setState({
//           data: result.data[0]
//   })
// })
// }

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
    // this.getNewCatagory();
    // this.getNewValue();

  }


  //display the results on the screen
  render() {

      console.log(this.state.data)
      if (!this.state.data.category){
          return <div>Loading</div>
      }
      {
         return ( 
        
        
        <div>
            <div>
                <h3>Category</h3>
                {this.state.data.category.title}
            </div>
          <div>
              <h3>Question</h3>
              <p>{this.state.data.question}</p>
              </div>
           
           
           <div>
               <h3>Value</h3>
                {this.state.data.value}
               </div>

               <div>
               <h3>Score</h3>
                {this.state.score}
               </div>


               <form onSubmit ={this.handleSubmit}>
                    <div>
                        <label htmlFor='answer'>Answer</label>
                        <input
                            type='text'
                            name='answer'
                            value={this.state.formData.answer}
                            onChange={this.handleChange}
                        />
        </div>
        <button>Submit Form</button>
                </form>
                </div>
      ); 
      }
      
    return (
      
       <div></div>
      
    );
  }
}
export default Jeopardy;