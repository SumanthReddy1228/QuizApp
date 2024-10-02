import readlineSync from 'readline-sync';

let score=0;
let userName=readlineSync.question("Enter your name: ");
const database = {
  data: [
    {
      question: `let a = [1, 2, 3]
            let b = [1, 2, 3]
            console.log(a==b)
            console.log(a===b)`,
      options: {
        a: `false true`,
        b: `true true`,
        d: `true false`,
        c: `false false`,
      },
      correctAnswer: `c`,
    },
    {
      question: `let x = { name: "Alice" }
            let y = { name: "Alice" }
            console.log(x == y)
            console.log(x === y)`,
      options: {
        a: `false true`,
        b: `true true`,
        c: `false false`,
        d: `true false`,
      },
      correctAnswer: `c`,
    },
    {
      question: `let p = [4, 5, 6]
            let q = p
            console.log(p == q)
            console.log(p === q)`,
      options: {
        a: `false true`,
        b: `true true`,
        c: `false false`,
        d: `true false`,
      },
      correctAnswer: `b`,
    },
    {
      question: `let m = "hello"
            let n = "hello"
            console.log(m == n)
            console.log(m === n)`,
      options: {
        a: `false true`,
        b: `true true`,
        c: `false false`,
        d: `true false`,
      },
      correctAnswer: `b`,
    },
    {
      question: `let obj1 = { key: "value" }
            let obj2 = obj1
            console.log(obj1 == obj2)
            console.log(obj1 === obj2)`,
      options: {
        a: `false true`,
        b: `true true`,
        c: `false false`,
        d: `true false`,
      },
      correctAnswer: `b`,
    },
  ],
};

function playGame(userAnswer,correctAnswer){
    if(userAnswer === correctAnswer){
        console.log("Correct");
        score++;
    }
    else{
        console.log("Incorrect");
    }
}

const leaderBoard={
    data:[
        {
            name:"Ashish",
            score:1
        },
        {
            name:"Ram",
            score:2
        },
        {
            name:"Sam",
            score:3
        },
        
    ]
}

function showQuestionsAndOptions(){
    for(let i=0;i<database.data.length;i++){
        let question = database.data[i].question;
        console.log(`Q${i+1} - ${question}`);

        for(let key in database.data[i].options){
            console.log(`${key} - ${database.data[i].options[key]}`)
        }
        let userAnswer = readlineSync.question('Enter your Answer: ');
        let correctAnswer=database.data[i].correctAnswer;
        playGame(userAnswer,correctAnswer);
    }

}

function highScore(leaderBoard){
    leaderBoard.data.push({name:userName,score:score});
    let sortedLeaderboard =leaderBoard.data.sort((a,b)=>b.score-a.score);
    console.log("\nChecking your position in leaderboard");
    for(let leader of sortedLeaderboard){
        console.log(`${leader.name} - Score: ${leader.score}`)
    }
}

showQuestionsAndOptions();
console.log(`${userName} score is: ${score}`);
highScore(leaderBoard);