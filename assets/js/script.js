// 1 You will only have <span> 30 seconds</span> per Question 
// 2. once you select your answer, you cant reselect.
// 3. you cant select any option once time goes off.
// 4. You cant exit from the Quiz while youre playing.
// 5. You'll get points on the basis of your correct answers. 
// 6. You'll be able to log high score. 

// Code Questions 
var question1 =function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    headTextEl.innerHTML = "Which is NOT a primitive data type?"
    selection1.innerHTML = "String";
    selection1.innerHTML = "Number";
    selection1.innerHTML = "Function";
    selection1.innerHTML = "Boolean";

    selection1.addEventListener("click",incorrectVar1);
    selection1.addEventListener("click",incorrectVar1);
    selection1.addEventListener("click",correctVar1);
    selection1.addEventListener("click",incorrectVar1);

}
var question2 =function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    headTextEl.innerHTML = "What special characters incase an array?"
    selection1.innerHTML = "[]";
    selection1.innerHTML = "{}";
    selection1.innerHTML = "()";
    selection1.innerHTML = "<>";

    selection1.addEventListener("click",correctVar2);
    selection1.addEventListener("click",incorrectVar2);
    selection1.addEventListener("click",incorrectVar2);
    selection1.addEventListener("click",incorrectVar2);

}
var question3 =function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    headTextEl.innerHTML = "What runs forever until the condition is false?"
    selection1.innerHTML = "methods";
    selection1.innerHTML = "loops";
    selection1.innerHTML = "objects";
    selection1.innerHTML = "functions";

    selection1.addEventListener("click",incorrectVar3);
    selection1.addEventListener("click",correctVar3);
    selection1.addEventListener("click",incorrectVar3);
    selection1.addEventListener("click",incorrectVar3);

}
var question4 =function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    headTextEl.innerHTML = "what would you use to write a conditional statement?"
    selection1.innerHTML = "if & else";
    selection1.innerHTML = "function()";
    selection1.innerHTML = "for ..";
    selection1.innerHTML = "for & loop";

    selection1.addEventListener("click",correctVar4);
    selection1.addEventListener("click",incorrectVar4);
    selection1.addEventListener("click",correctVar4);
    selection1.addEventListener("click",incorrectVar4);

}
var question5 =function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    headTextEl.innerHTML = "Where do you attach the JS source file in the HTML document?"
    selection1.innerHTML = "in the body";
    selection1.innerHTML = "top of the page";
    selection1.innerHTML = "in the header";
    selection1.innerHTML = "bottom of the page";

    selection1.addEventListener("click",incorrectVar5);
    selection1.addEventListener("click",incorrectVar5);
    selection1.addEventListener("click",incorrectVar5);
    selection1.addEventListener("click",correctVar5);

}
var question6 =function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    headTextEl.innerHTML = "How could you target an HTML id in JS?"
    selection1.innerHTML = ".addEventListener";
    selection1.innerHTML = ".querySelector";
    selection1.innerHTML = ".createElement";
    selection1.innerHTML = ".parse";

    selection1.addEventListener("click",incorrectVar6);
    selection1.addEventListener("click",correctVar6);
    selection1.addEventListener("click",incorrectVar6);
    selection1.addEventListener("click",incorrectVar6);

}
var question7 =function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    headTextEl.innerHTML = "What does DOM Stand For"
    selection1.innerHTML = "Digital Organization Machine";
    selection1.innerHTML = "Do only More";
    selection1.innerHTML = "Document Object Model";
    selection1.innerHTML = "Document Ordering Model";

    selection1.addEventListener("click",incorrectVar7);
    selection1.addEventListener("click",incorrectVar7);
    selection1.addEventListener("click",correctVar7);
    selection1.addEventListener("click",incorrectVar7);

}
var question8 =function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    headTextEl.innerHTML = "what Java script function is used for buttons?";
    selection1.innerHTML = ".selectById";
    selection1.innerHTML = ".addEventListener";
    selection1.innerHTML = "onClick";
    selection1.innerHTML = ".setAttribute";

    selection1.addEventListener("click",incorrectVar8);
    selection1.addEventListener("click",correctVar8);
    selection1.addEventListener("click",incorrectVar8);
    selection1.addEventListener("click",incorrectVar8);

}
var question9 =function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    headTextEl.innerHTML = "What is a useful tool developers use for development and debugging?"
    selection1.innerHTML = "console.log";
    selection1.innerHTML = "terminal/bash";
    selection1.innerHTML = "For Loops";
    selection1.innerHTML = "DOM";

    selection1.addEventListener("click",correctVar9);
    selection1.addEventListener("click",incorrectVar9);
    selection1.addEventListener("click",incorrectVar9);
    selection1.addEventListener("click",incorrectVar9);

}
var question10 =function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    headTextEl.innerHTML = "Bonus Who won the 74th Hunger Games?"
    selection1.innerHTML = "Lucy Gray Baird";
    selection1.innerHTML = "Katniss Everdeen";
    selection1.innerHTML = "Finnick Odair";
    selection1.innerHTML = "Katniss Everdeen and Peeta Mellark";

    selection1.addEventListener("click",incorrectVar10);
    selection1.addEventListener("click",incorrectVar10);
    selection1.addEventListener("click",incorrectVar10);
    selection1.addEventListener("click",correctVar10);

}