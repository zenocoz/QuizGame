      const questions = [
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "What does CPU stand for?",
          correct_answer: "Central Processing Unit",
          incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
          correct_answer: "Final",
          incorrect_answers: ["Static", "Private", "Public"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question: "The logo for Snapchat is a Bell.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
          correct_answer: ".svg",
          incorrect_answers: [".png", ".jpeg", ".gif"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "In web design, what does CSS stand for?",
          correct_answer: "Cascading Style Sheet",
          incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "What is the code name for the mobile operating system Android 7.0?",
          correct_answer: "Nougat",
          incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "On Twitter, what is the character limit for a Tweet?",
          correct_answer: "140",
          incorrect_answers: ["120", "160", "100"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question: "Linux was first created as an alternative to Windows XP.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "Which programming language shares its name with an island in Indonesia?",
          correct_answer: "Java",
          incorrect_answers: ["Python", "C", "Jakarta"],
        },
      ];
      let score;//tracking the score
      let scorePanel;
      let questionNumber;
   
      

      window.onload = function () {
        score = 0;
        //IF YOU ARE DISPLAYING ALL THE QUESTIONS TOGETHER:
        //HINT: for each question, create a container with the "question"
        //create a radio button https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio with, as option the both the correct answer and the incorrect answers
        //when EVERY question has an answer (google for how to get a value from a radio button with JS)
        //IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
        //Display first question with a title + radio button
        //when the user select the answer, pick the next question and remove this from the page after added in a varible the users' choice.
       
        scorePanel = document.getElementById("score");
        //assigning random non-repeating numerical id to each question
        let random_numbers = generateRandomNumbers(); //array of ints
        questions.forEach(function(questions,i) {
            const random = random_numbers[i];
            questions.id = random;       
        });
     
        //onGameOver();
        Game();
    };

    //returns array of random numbers
    const generateRandomNumbers = function () {
        let nums = [];
        let nums_length = 10;
        for (let i = 0; i < nums_length; i++) {
            let temp = Math.floor(Math.random() * nums_length);
            if(nums.indexOf(temp) == -1) {
                nums.push(temp);
            } else 
                --i;
        }
        return nums;
    }

     const nextQuestion = function (event) {
        let answer = event;
        
        console.log(answer.target.value);
        console.log(questions[0].correct_answer);
        
            if (answer.target.value === questions[0].correct_answer) {
                console.log("CORRECT");

            } else console.log("INCORRECT");
          
           
    }

    const Game = function () {
        questionNumber = questions.length;


  /*       while (questionNumber > 0) {
      
         }  */
        //test display a question in the inner text.
        let question_ = document.getElementById("QBox");
        question_.innerText = questions[0].question;
        
        //generate radio button according to number of answers
        //TODO refactor
        let number_of_answers = questions[0].incorrect_answers.length + 1;
        let correct_ = questions[0].correct_answer;        
        let incorrect_ = questions[0].incorrect_answers;
        let all = [];
        incorrect_.push(correct_);
        all = incorrect_;

        for (let i = 0; i < number_of_answers; i++) {
            
            
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.id = "radioid";
            radio.name = "question";
            radio.value = all[i];
            radio.addEventListener("change", nextQuestion);
            let label = document.createElement("LABEL");
            label.setAttribute("for","answer");
            let text = document.createTextNode(all[i]);
            label.appendChild(text);
            document.getElementById("answers").appendChild(radio);
            document.getElementById("answers").appendChild(label);  

            // if radio value == object[i].correct_answer[i]
            //score ++ 
            //loop prosegue; con nuova
           
        }  let test = document.getElementById("radioid");
           
    

        
        //question_.innerText = questions[0].question;

    }

    const onGameOver = function (){
        //score = 8;
        finalScore = document.getElementById("score");
        finalScore.innerText = "your final score is: "+ score;
        scorePanel.style.visibility = "visible";
    }
      //HOW TO calculate the result
      //You can do it in 2 ways:
      //If you are presenting all questions together, just take all the radio buttons and check if the selected answer === correct_answer
      //If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
