var body = document.getElementById("body");
var bot_button = document.getElementById('bot-button');
var bot_chat_wrapper = document.getElementById("bot-chats-wrapper");
var bot_message = document.createElement("div");
var user_message = document.createElement("div");
var chat_input = document.getElementById("chat-input");

//declare and initialize parallel arrays coding start

var suggestiveQuestions = Array();
var questions = Array(0,1,2,3,4,5);
var actualQuestions = Array(
	"Who are you ?",
	"What do you do ?",
	"How much do you charge for your services ?",
	"Are the Grad Programs currently open ?",
	"Where are you located ?",
);
var answers = Array(
	"We are a company that specialize in provividing digital serivices that enables your " + 
	"business to succeed would you like to know something else?",
	"We provide companies and businesses with web and software solutions would you like " + 
	"to know something else?",
	" Services start at R3500 for web solutions  <br> And at R5000 for software " ,
	"Yes South African intake for Grad Programs are open and will kick start at January 2023",
	"We are located in Pretoria Johannesburg, Cape Town and London"
);
var grammarQuestions = Array(
	"Who are we ?",
	"What do we do ?",
	"How much do we charge for our services ?",
	"Are the Grad Programs currently open ?",
	"Where are we located ?",
);
//declare and initialize parallel arrays coding ended
var questionIndex;
var answerIndex;
var answer;

bot_message.className = "bot-message";
user_message.className = "user-message";


bot_button.onclick = function(){
	var bot_message = document.createElement("div");
	var user_message = document.createElement("div");
	
	bot_message.className = "bot-message";
	user_message.className = "user-message";
	
	var bot_unknow_response = "";

	if(chat_input.value == ""){
		chat_input.value = "you cannot leave the input field empty";
		chat_input.style.color = "white";
	}
	else{
		//display the message from the user
		
		for(var counter = 0 ; counter < answers.length ; counter++){
			if(chat_input.value == questions[counter] || chat_input.value == actualQuestions[counter] 
			|| chat_input.value == grammarQuestions[counter]){
								
				answerIndex = counter;

				user_message.innerHTML = actualQuestions[answerIndex];
				bot_chat_wrapper.append(user_message);
				
				answer = answers[answerIndex];
				bot_message.innerHTML = answer;
				bot_chat_wrapper.append(bot_message);
				break;
			}
			else{
				user_message.innerHTML = chat_input.value;
				bot_chat_wrapper.append(user_message);
				bot_unknown_response = "I am sorry I don't undestand you";
				bot_message.innerHTML = bot_unknown_response;
				bot_chat_wrapper.append(bot_message);
				
			}
		}
		
		//bot_message.innerHTML = bot_unknow_response;
		//bot_chat_wrapper.append(bot_message);
		
		//alert(answer);		
	}
	
}