class questionBuilder {
  constructor(){
    this.category = 'category';
    this.question = 'question';
    this.answer = 'give an answer';
  }

  withCategory(category){
    this.category = category;
    return this;
  }
  withQuestion(question){
    this.question = question;
    return this;
  }
  withAnswer(answer){
    this.answer = answer;
    return this;
  }

  build(){
    return {
      category: this.category,
      question: this.question,
      answer: this.answer
    }
  }
}

console.log(
  new questionBuilder()
    .withCategory('star wars quotes')
    .withQuestion('who said that?:shhhhshhhhh')
    .build()
)