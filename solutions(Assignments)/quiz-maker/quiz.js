function quiz(){ 

 let htmlString = ""

 const quizs = [{question: "Which language runs in a web browser?", a: "Java", b: "C", c: "Python", d: "JavaScript",},
// you can add more quiz here
]
    quizs.forEach(quiz => { 
        htmlString += ` 
        <div class="quiz">
        <div>${quiz.question}</div>
        <div class="options">
            <li>${quiz.a}</li>
            <li>${quiz.b}</li>
            <li>${quiz.c}</li>
            <li>${quiz.d}</li>
        </div>    
        `;
    });

    console.log(htmlString)
 
}

quiz()