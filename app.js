const questions =[
    {
        'que': "Which of the Following is a Markup Language?",
        'a': "HTML",
        'b': "CSS",
        'c': "JavaScript",
        'd': "PHP",
        'correct': "a"
    },
    {
        'que': "What Year was JavaScript Launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the Above",
        'correct': "b"
    },
    {
        'que': "What Does CSS Stands For?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals MotorBoats Lmaborgimis",
        'correct': "b"
    }
]

let index = 0
let total = questions.length
let right = 0
let wrong = 0
const queBox = document.getElementById("queBox")
const optionInputs = document.querySelectorAll(".option")
const loadQuestion = ()=>{
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    console.log(data);
    queBox.innerText = `${index+1}) ${data.que}`
    optionInputs[0].nextElementSibling.innerText = data.a
    optionInputs[1].nextElementSibling.innerText = data.b
    optionInputs[2].nextElementSibling.innerText = data.c
    optionInputs[3].nextElementSibling.innerText = data.d


}


const submitQuiz = ()=>{
    const data = questions[index]
    const ans = getAnswer()
    if(ans == data.correct){
        right++
    }else{
        wrong++
    }
    index++
    loadQuestion()
    return
}

const getAnswer= ()=>{
    let answer
    optionInputs.forEach((input)=>{
        if(input.checked){
             answer =  input.value;
        }

    })
    return answer
}

const reset = ()=>{
    optionInputs.forEach((input)=>{
        input.checked = false

    })
}

const endQuiz = ()=>{
    document.getElementById("box").innerHTML = `
    <h3> Thank You For Playing The Quiz</h3>
    <h2> ${right}/${total} are correct</h2>
    `
}

loadQuestion()