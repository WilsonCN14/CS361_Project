// Citation: https://codepen.io/yaphi1/pen/NpZvJp

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

quiz(questions, quizContainer, resultsContainer, submitButton);

function quiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
		var answers;

		// Go through each question
		for(var i=0; i<questions.length; i++){
			
			// Reset answers
			answers = [];

			// Go through each answer
			for(letter in questions[i].answers){

				// Add an html radio button
				answers.push(
					'<label>'
						+ '<p><input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// Add question and answers to output
			output.push(
				'<div class="question">' + (i + 1) + '. ' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);

		}

		// Combine output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// Gather answer containers from the quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// Track user answers
		var userAnswer = '';
		var numCorrect = 0;
		
		// Go through each question
		for(var i=0; i<questions.length; i++){

			// Find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// Do the following if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				numCorrect++;
				answerContainers[i].style.color = 'green';
			}
			// Do the following if answer is wrong
			else{
				answerContainers[i].style.color = 'red';
			}
		}

		// Show number of correct answers out of total
		resultsContainer.innerHTML = 'You got ' + numCorrect + ' out of ' + questions.length + ' correct';
	}

	// Show questions as soon as page loads
	showQuestions(questions, quizContainer);
	
	// Show results when quiz is submitted
	submitButton.onclick = function(){
		if (confirm("Are you sure you want to submit your quiz?")) {
			showResults(questions, quizContainer, resultsContainer);
		  } 
	}
}