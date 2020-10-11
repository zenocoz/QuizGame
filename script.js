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
      let right_score = 0;
      let wrong_score = 0;
      let scorePanel;
      let questionNumber = questions.length;
      let random_element;
      let next_button;

      window.onload = function () {
        //IF YOU ARE DISPLAYING ALL THE QUESTIONS TOGETHER:
        //HINT: for each question, create a container with the "question"
        //create a radio button https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio with, as option the both the correct answer and the incorrect answers
        //when EVERY question has an answer (google for how to get a value from a radio button with JS)
        //IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
        //Display first question with a title + radio button
        //when the user select the answer, pick the next question and remove this from the page after added in a varible the users' choice.
        score = 0;
        scorePanel = document.getElementById("score");
        questions.length;
        //assigning random non-repeating numerical id to each question
        let random_numbers = generateRandomNumbers(); //array of ints
        questions.forEach(function(questions,i) {
            const random = random_numbers[i];
            questions.id = random;
        });
        Game();
    };

    //returns array of random numbers
    const generateRandomNumbers = function () {
        let nums = [];
        let nums_length = 11; //changed indexes so questions have associated ids between 1 and 10
        for (let i = 1; i < nums_length; i++) {
            let temp = Math.floor(Math.random() * nums_length);
            if(nums.indexOf(temp) == -1) {
                nums.push(temp);
            } else 
                --i;
        }
        return nums;
    }

    const nextQuestion = function () {
        let answers = document.getElementById("answers");
        while (answers.firstChild) {
            answers.removeChild(answers.firstChild);
        } 
        document.getElementById("body").removeChild(next_button);
        Game()     
    }

     const checkQuestion = function (event) {
        let labels_array = [];//strings
        let answer = event.target.value;//string
        let right_answer = random_element.correct_answer;//string
        let answer_labels = document.querySelectorAll("label");//nodes
        let right_index; //int
        let answer_index; //int
        //creates array of string values of each node
        for (let i = 0; i < answer_labels.length; i++) {
            labels_array.push(answer_labels[i].textContent);
        } 
        right_index = labels_array.indexOf(right_answer);
        answer_index = labels_array.indexOf(answer);
        if (answer === right_answer) {
            answer_labels[right_index].style.backgroundColor = "green";
            right_score++;
        } else {
            answer_labels[right_index].style.backgroundColor = "green"
            answer_labels[answer_index].style.backgroundColor = "red"
            wrong_score++;
        }
        next_button = document.createElement("button");
        next_button.type = "button";
        next_button.addEventListener("click", nextQuestion);
        next_button.textContent = "Next Question";
        document.getElementById("body").appendChild(next_button);
        questionNumber--;

        if (!questionNumber) {
            onGameOver();
        } 

    }

    //randomize array all[] so that answers are presented in different order each time
    //using Fisher-Yates shuffle algorithm
    const randomizeArray = function(array) {
        let a = array.length;
        let temp;
        let i;
        while (a) {
            i = Math.floor(Math.random() * a--);
            temp = array[a];
            array[a] = array[i];
            array[i] = temp;
        }
        return array;     
    }

    const Game = function () {
        //get array element associated with question number
        for (let i = 0; i < questions.length; i++) {
            if (questions[i]["id"] === questionNumber) {
                random_element = questions[i];
            }
        }             
        //displays the Question.
        let question_= document.getElementById("QBox");
        question_.innerText = random_element.question;

        //generate radio button according to number of answers
        let number_of_answers = random_element.incorrect_answers.length + 1;
        let correct_ = random_element.correct_answer;        
        let incorrect_ = random_element.incorrect_answers;
        let all = [];
        incorrect_.push(correct_);
        all = incorrect_;
        all = randomizeArray(all)

        for (let i = 0; i < number_of_answers; i++) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.id = "radioid";
            radio.name = "question";
            radio.value = all[i];
            radio.addEventListener("change", checkQuestion);
            let label = document.createElement("LABEL");
            label.setAttribute("for","answer", "id");
            label.id = "label"; 
            let text = document.createTextNode(all[i]);
            label.appendChild(text);
            document.getElementById("answers").appendChild(radio);
            document.getElementById("answers").appendChild(label);  
        }  
    }

    const onGameOver = function (){
        let question_= document.getElementById("QBox");
        question_.innerText = "Game Over";
        finalScore = document.getElementById("score");
        finalScore.innerText = "your final score is: "+ right_score + " right answers and " + wrong_score + " wrong answers";
        scorePanel.style.visibility = "visible";
    }
      //HOW TO calculate the result
      //You can do it in 2 ways:
      //If you are presenting all questions together, just take all the radio buttons and check if the selected answer === correct_answer
      //If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
