var introNameEl = document.querySelector('#intro-name');
var infoTxtEl = document.querySelector('#info-text');
var homepageEl = document.querySelector('#homepage');
var choicesEl = document.querySelector('#choices');
var buttonsEl = document.querySelector("#buttons")


var score = 0;

// Creates the Buttons to answer the quiz questions
var createButton1 = function() {
    var btn1 = document.createElement("button");
    btn1.textContent = "Answer 1";
    btn1.className ="start-btn";
    btn1.id ="selection1";
    homepageEl.appendChild(btn1);
}
var createButton2 = function() {
    var btn2 = document.createElement("button");
    btn2.textContent = "Answer 2";
    btn2.className ="start-btn";
    btn2.id ="selection2";
    homepageEl.appendChild(btn2);
}
var createButton3 = function() {
    var btn3 = document.createElement("button");
    btn3.textContent = "Answer 3";
    btn3.className ="start-btn";
    btn3.id ="selection3";
    homepageEl.appendChild(btn3);
}
var createButton4 = function() {
    var btn4 = document.createElement("button");
    btn4.textContent = "Answer 4";
    btn4.className ="start-btn";
    btn4.id ="selection4";
    homepageEl.appendChild(btn4);
}

// Generates the Question
var createQuestion = function() {
    introNameEl = document.createElement("h1");
    introNameEl.innerHTML = "";
    introNameEl.className = "intro-name"
    homepageEl.appendChild(introNameEl);
}





// correct answers and incorrect 
var correctVar1 = function() {
console.log("Correct!");
score++;
question2();
}

var incorrectVar1 = function() {
    console.log("Incorrect!");
    question2();
    timeLeft = timeLeft -10;
}

var correctVar2 = function() {
    console.log("Correct!");
    score++;
    question3();
    }
    
    var incorrectVar2 = function() {
        console.log("Incorrect!");
        question3();
        timeLeft = timeLeft -10;
    }

    var correctVar3 = function() {
        console.log("Correct!");
        score++;
        question4();
        }
        
        var incorrectVar3 = function() {
            console.log("Incorrect!");
            question4();
            timeLeft = timeLeft -10;
        }

        var correctVar4 = function() {
            console.log("Correct!");
            score++;
            question5();
            }
            
            var incorrectVar4 = function() {
                console.log("Incorrect!");
                question5();
                timeLeft = timeLeft -10;
            }

            var correctVar5 = function() {
                console.log("Correct!");
                score++;
                question6();
                }
                
                var incorrectVar5 = function() {
                    console.log("Incorrect!");
                    question6();
                    timeLeft = timeLeft -10;
                }

                var correctVar6 = function() {
                    console.log("Correct!");
                    score++;
                    question7();
                    }
                    
                    var incorrectVar6 = function() {
                        console.log("Incorrect!");
                        question7();
                        timeLeft = timeLeft -10;
                    }

                    var correctVar7 = function() {
                        console.log("Correct!");
                        score++;
                        question8();
                        }
                        
                        var incorrectVar7 = function() {
                            console.log("Incorrect!");
                            question8();
                            timeLeft = timeLeft -10;
                        }

                        var correctVar8 = function() {
                            console.log("Correct!");
                            score++;
                            question9();
                            }
                            
                            var incorrectVar8 = function() {
                                console.log("Incorrect!");
                                question9();
                                timeLeft = timeLeft -10;
                            }

                            var correctVar9 = function() {
                                console.log("Correct!");
                                score++;
                                question10();
                                }
                                
                                var incorrectVar9 = function() {
                                    console.log("Incorrect!");
                                    question10();
                                    timeLeft = timeLeft -10;
                                }

                                var correctVar10 = function() {
                                    console.log("Correct!");
                                    score++;
                                    endScreen();
                                    }
                                    
                                    var incorrectVar10 = function() {
                                        console.log("Incorrect!");
                                        EndScreen();
                                        timeLeft = timeLeft -10;
                                    }

// Code Questions 
var question1 = function() {
    homepageEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    introNameEl.innerHTML = "Which is NOT a primitive data type?";
    selection1.innerHTML = "String";
    selection2.innerHTML = "Number";
    selection3.innerHTML = "Function";
    selection4.innerHTML = "Boolean";

    selection1.addEventListener("click",incorrectVar1);
    selection2.addEventListener("click",incorrectVar1);
    selection3.addEventListener("click",correctVar1);
    selection4.addEventListener("click",incorrectVar1);

}
var question2 = function() {
    homepageEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    introNameEl.innerHTML = "What special characters incase an array?";
    selection1.innerHTML = "[]";
    selection2.innerHTML = "{}";
    selection3.innerHTML = "()";
    selection4.innerHTML = "<>";

    selection1.addEventListener("click",correctVar2);
    selection2.addEventListener("click",incorrectVar2);
    selection3.addEventListener("click",incorrectVar2);
    selection4.addEventListener("click",incorrectVar2);

}
var question3 = function() {
    homepageEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    introNameEl.innerHTML = "What runs forever until the condition is false?";
    selection1.innerHTML = "methods";
    selection2.innerHTML = "loops";
    selection3.innerHTML = "objects";
    selection4.innerHTML = "functions";

    selection1.addEventListener("click",incorrectVar3);
    selection2.addEventListener("click",correctVar3);
    selection3.addEventListener("click",incorrectVar3);
    selection4.addEventListener("click",incorrectVar3);

}
var question4 = function() {
    homepageEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    introNameEl.innerHTML = "what would you use to write a conditional statement?";
    selection1.innerHTML = "if & else";
    selection2.innerHTML = "function()";
    selection3.innerHTML = "for ..";
    selection4.innerHTML = "for & loop";

    selection1.addEventListener("click",correctVar4);
    selection2.addEventListener("click",incorrectVar4);
    selection3.addEventListener("click",correctVar4);
    selection4.addEventListener("click",incorrectVar4);

}
var question5 = function() {
    homepageEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    introNameEl.innerHTML = "Where do you attach the JS source file in the HTML document?";
    selection1.innerHTML = "in the body";
    selection2.innerHTML = "top of the page";
    selection3.innerHTML = "in the header";
    selection4.innerHTML = "bottom of the page";

    selection1.addEventListener("click",incorrectVar5);
    selection2.addEventListener("click",incorrectVar5);
    selection3.addEventListener("click",incorrectVar5);
    selection4.addEventListener("click",correctVar5);

}
var question6 = function() {
    homepageEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    introNameEl.innerHTML = "How could you target an HTML id in JS?";
    selection1.innerHTML = ".addEventListener";
    selection2.innerHTML = ".querySelector";
    selection3.innerHTML = ".createElement";
    selection4.innerHTML = ".parse";

    selection1.addEventListener("click",incorrectVar6);
    selection2.addEventListener("click",correctVar6);
    selection3.addEventListener("click",incorrectVar6);
    selection4.addEventListener("click",incorrectVar6);

}
var question7 = function() {
    homepageEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    introNameEl.innerHTML = "What does DOM Stand For?";
    selection1.innerHTML = "Digital Organization Machine";
    selection2.innerHTML = "Do only More";
    selection3.innerHTML = "Document Object Model";
    selection4.innerHTML = "Document Ordering Model";

    selection1.addEventListener("click",incorrectVar7);
    selection2.addEventListener("click",incorrectVar7);
    selection3.addEventListener("click",correctVar7);
    selection4.addEventListener("click",incorrectVar7);

}
var question8 = function() {
    homepageEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    introNameEl.innerHTML = "what Java script function is used for buttons?";
    selection1.innerHTML = ".selectById";
    selection2.innerHTML = ".addEventListener";
    selection3.innerHTML = "onClick";
    selection4.innerHTML = ".setAttribute";

    selection1.addEventListener("click",incorrectVar8);
    selection2.addEventListener("click",correctVar8);
    selection3.addEventListener("click",incorrectVar8);
    selection4.addEventListener("click",incorrectVar8);

}
var question9 = function() {
    homepageEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    introNameEl.innerHTML = "What is a useful tool developers use for development and debugging?";
    selection1.innerHTML = "console.log";
    selection2.innerHTML = "terminal/bash";
    selection3.innerHTML = "For Loops";
    selection4.innerHTML = "DOM";

    selection1.addEventListener("click",correctVar9);
    selection2.addEventListener("click",incorrectVar9);
    selection3.addEventListener("click",incorrectVar9);
    selection4.addEventListener("click",incorrectVar9);

}
var question10 = function() {
    homepageEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    introNameEl.innerHTML = "Bonus Who won the 74th Hunger Games?";
    selection1.innerHTML = "Lucy Gray Baird";
    selection2.innerHTML = "Katniss Everdeen";
    selection3.innerHTML = "Finnick Odair";
    selection4.innerHTML = "Katniss Everdeen and Peeta Mellark";

    selection1.addEventListener("click",incorrectVar10);
    selection2.addEventListener("click",incorrectVar10);
    selection3.addEventListener("click",incorrectVar10);
    selection4.addEventListener("click",correctVar10);

}

var endScreen = function() {
    homepageEl.innerHTML = "";
    introNameEl = document.createElement("h1");
    introNameEl.innerHTML = "You Scored a " + score + "/10";
    introNameEl.className = "intro-name";
    homepageEl.appendChild(introNameEl);

    infoTxtEl = document.createElement("p");
    infoTxtEl.innerHTML = "Enter Your Name: "
    infoTxtEl.className = "info-txt"
    homepageEl.appendChild(infoTxtEl);

    var nameInput = document.createElement("input");
    infoTxtEl.appendChild(nameInput);

    var submitButton = document.createElement("button")
    submitButton.textContent = "Submit";
    submitButton.type = "submit";
    submitButton.className = "start-btn";
    submitButton.id = 'submitId';
    homepageEl.appendChild(submitButton);

    submitButton.addEventListener("click", function(event){
        event.preventDefault();
    })
}

// Timer
var timerEl = document.getElementById('timer');
var timeLeft = 75;
function countdown() {

    var timeInterval = setInterval(function(){
        timerEl.innerHTML = timeLeft;
        if(timeLeft <= 0) {
            endScreen();
            clearInterval(timeInterval);
            timerEl.textContent = "";
        }
        timeLeft--;
    }, 1000);
}
//starts the game 
buttonsEl.addEventListener("click", question1);
buttonsEl.addEventListener("click", countdown);
