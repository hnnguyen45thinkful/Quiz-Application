$(document).ready(function(){
//Create global variables (var) 
	var startQuestion = 0;
	
	var playerScore = {
		correctCount: 0,
		notCount: 0,
	}
	
	var quiz_questions = [{
		question: "What was Ned Flauders wife's name?",
		answers: ['Ruth', 'Edna', 'Maude', 'Marge'],
		rightAnswer: 3,
	}, {
		question: "How much money does Bart sell his soul to Milhouse for?",
		answers: ['$4', '$5', '$10', '$8'],
		rightAnswer: 2,
	},{
		question: "When Bart falls in Love with Jessica Lovejoy, she makes him pull the school fire alarm. Grounds Keeper runs back into the school for what?",
		answers: ['The class hamster "Super Dude"', 'The Wee Turtles', 'Ralph Wiggum', 'His Bagpipes'],
		rightAnswer: 2,
	},{
		question: "Dr. Marvin Monroe's Family Therapy Center offers family bliss or what back?",
		answers: ['Double money back', 'Get the hell out', 'No Refunds', 'Anger Medication'],
		rightAnswer: 1,
	},{
		question: "How do you spell Apu's last name?",
		answers: ['Nahasapinepetilon', 'Nehasipinepetilon', 'Nahasipinipetiloin', 'Nahasapeemapetilon'],
		rightAnswer: 4,
	},{
		question: "What did Bart name his elephant ?",
		answers: ['Squisher', 'Stampy', 'Stomper', 'Sticky'],
		rightAnswer: 2,
	},{
		question: "Who are Homer's best friends at work?",
		answers: ['Laverne and Shirley', 'Lenny and Squiggy', 'Monte and Weylan', 'Lenny and Carl'],
		rightAnswer: 4,
	},{
		question: "What secret society did Homer join?",
		answers: ['The Beerbellies', 'The Airheads', 'The Stonecutters', 'The Michael Jackson Fan Club'],
		rightAnswer: 3,
	},{
		question: "What's Patty and Selma's favourite TV show?",
		answers: ['Futurama', 'Jeopardy', 'COPS', 'MacGuyver'],
		rightAnswer: 4,
	}, {
		question: "What TV marathon does Comic Book Guy say he is preparing for when he buys 100 tacos for $100?",
		answers: ['Doctor Who', 'Star Trek', 'Babylon', 'Spooks'],
		rightAnswer: 1,
	}]
	//Helps the questions move on and also to show the progress on the questions and numbers.
		var updateCounter = function(){
		$('.current-question-count').text(startQuestion + 1);
		$('.correct-answer').text(playerScore.notCount);
		$('.number-of-questions').text(quiz_questions.length);
	}
//Creating functions to help navigate questions throughout the quiz.
	function nextQuestion(){
		startQuestion++;
		
	}
//Show the results and also hides the solution.	
	function showSummary(){
		$('.summary').show();
		$('.question-counter-area').hide();
		$('.correct-answer-counter').hide();
		$('.correct').text(playerScore.notCount);
	}
//Displaying the questions
	function showQuestion(){
		var questionObject = quiz_questions[startQuestion];
		$('.correct-answer-counter').show();
		$('.question-counter-area').show();
		$('#answer-choices').html('');
		updateCounter();
		if (questionObject){
			$('.question').text(questionObject.question);
			for (i=0; i<questionObject.answers.length; i++){
				$('#answer-choices').append('<li><input type="radio" name="answer" value="' + i + '">' + questionObject.answers[i]  + '</li>');
			}	
		} else {
			showSummary();
			$('.question-box').hide();
			
		}
	}
//
	function checkAnswer(){
		var answer = $('input[name="answer"]:checked').val();
		if(quiz_questions[startQuestion].rightAnswer == answer){
			playerScore.correctCount++;
		} else {
			playerScore.notCount++;

		}
	}
	//Creating the functions and also helping the quiz function properly for the player/user.
	$('.start-button').on('click', function(){
		showQuestion();
		$('.start-button').hide();
		$('.question-box').show();
	})


	$('.question-box').on('click', '#next-button', function(){
		if ($('input[name="answer"]:checked').val()){ 
			checkAnswer();
			nextQuestion();
			showQuestion();
		} else {
			alert("Please try your best and pick the best answer!!!");
		}			
	})
	//Creating the new test button with all the questions starting from the beginning and end.
	function newTest(){
		startQuestion = 0;
		playerScore.correctCount = 0;
		playerScore.notCount = 0;
		showQuestion();
		$('.question-box').show();
		$('.summary').hide();
	}
	$('.restart-test').click(newTest);//Creating the reset button and starting over when the test is finish.
})
