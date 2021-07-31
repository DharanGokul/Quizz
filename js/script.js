var myQuestions = [
  {
    question: "Grand Central Terminal, Park Avenue, New York is the world's",
    answers: {
      a: 'largest railway station',
      b: 'highest railway station',
      c: 'longest railway station',
      d: 'None of the above'
    },
    correctAnswer: 'a'
  },
  {
    question: "Entomology is the science that studies",
    answers: {
      a: 'Behavior of human beings',
      b: 'Insects',
      c: 'The origin and history of technical and scientific terms',
      d: 'The formation of rocks'
    },
    correctAnswer: 'b'
  },
  {
    question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
    answers: {
      a: 'Asia',
      b: 'Africa',
      c: 'Europe',
      d: 'Australia'
    },
    correctAnswer: 'b'
  },
  {
    question: "Garampani sanctuary is located at",
    answers: {
      a: 'Junagarh, Gujarat',
      b: 'Diphu, Assam',
      c: 'Kohima, Nagaland',
      d: 'Gangtok, Sikkim'
    },
    correctAnswer: 'b'
  },
  {
    question: "For which of the following disciplines is Nobel Prize awarded?",
    answers: {
      a: 'Physics and Chemistry',
      b: 'Physiology or Medicine',
      c: 'Literature, Peace and Economics',
      d: 'All of the above'
    },
    correctAnswer: 'd'
  },
  {
    question: "Hitler party which came into power in 1933 is known as",
    answers: {
      a: 'Labour Party',
      b: 'Nazi Party',
      c: 'Ku-Klux-Klan',
      d: 'Democratic Party'
    },
    correctAnswer: 'b'
  },
  {
    question: "FFC stands for",
    answers: {
      a: 'Foreign Finance Corporation',
      b: 'Film Finance Corporation',
      c: 'Federation of Football Council',
      d: 'None of the above'
    },
    correctAnswer: 'b'
  },
  {
    question: "Fastest shorthand writer was",
    answers: {
      a: 'Dr. G. D. Bist',
      b: 'J.R.D. Tata',
      c: 'J.M. Tagore',
      d: 'Khudada Khan'
    },
    correctAnswer: 'b'
  },
  {
    question: "Epsom (England) is the place associated with",
    answers: {
      a: 'Horse racing',
      b: 'Polo',
      c: 'Shooting',
      d: 'Snooker'
    },
    correctAnswer: 'a'
  },
  {
    question: "First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in",
    answers: {
      a: '1967',
      b: '1968',
      c: '1958',
      d: '1922'
    },
    correctAnswer: 'a'
  }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        
        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = 'Your Score is '+ numCorrect + ' out of ' + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);
  
  // on submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}