let allQuestions = [
  {
    id: 1,
    question: "What is the Full Form Of RAM?",
    answer: "Random Access Memory",
    options: [
      "Run Accept Memory",
      "Random All Memory",
      "Random Access Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the Full-Form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the Full-Form of E-mail?",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "'DB' in computer means?",
    answer: "DataBase",
    options: [
      "Double Byte",
      "Data Block",
      "DataBase",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "What is FMD?",
    answer: "Fluorescent Multi-Layer Disc",
    options: [
      "Fluorescent Multi-Layer Disc",
      "Flash Media Driver",
      "Fast-Ethernet Measuring Device",
      "None of these"
    ]
  },
  {
    id: 6,
    question: "How many bits is a byte?",
    answer: "8",
    options: [
      "32",
      "16",
      "8",
      "64"
    ]
  },
  {
    id: 7,
    question: "A JPG stands for:",
    answer: "A format for an image file",
    options: [
      "A format for an image file",
      "A Jumper Programmed Graphic",
      "A type of hard disk",
      "A unit of measure for memory"
    ]
  },
  {
    id: 8,
    question: "Which was an early mainframe computer?",
    answer: "ENIAC",
    options: [
      "ENIAC",
      "EDVAC",
      "UNIC",
      "ABACUS"
    ]
  },
  {
    id: 9,
    question: "Main circuit board in a computer is:",
    answer: "Mother board",
    options: [
      "Harddisk",
      "Mother board",
      "Microprocessor",
      "None of these"
    ]
  },
  {
    id: 10,
    question: "ISP stands for:",
    answer: "Internet Service Provider",
    options: [
      "Internet Survey Period",
      "Integreted Service Provider",
      "Internet Security Protocol",
      "Internet Service Provider"
    ]
  },
  {
    id: 11,
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language",
    options: [
      "HighText Machine Language",
      "HyperText Markup Language",
      "HyperTool Markup Language",
      "None of these"
    ]
  },
  {
    id: 12,
    question: "Which one is an input device?",
    answer: "Keyboard",
    options: [
      "Monitor",
      "Printer",
      "Keyboard",
      "Speaker"
    ]
  },
  {
    id: 13,
    question: "Which device stores permanent data?",
    answer: "Hard Disk",
    options: [
      "RAM",
      "ROM",
      "Hard Disk",
      "Cache"
    ]
  },
  {
    id: 14,
    question: "Which is NOT a programming language?",
    answer: "HTTP",
    options: [
      "Python",
      "Java",
      "C++",
      "HTTP"
    ]
  },
  {
    id: 15,
    question: "Which key is used to refresh a webpage?",
    answer: "F5",
    options: [
      "F1",
      "F5",
      "F11",
      "F2"
    ]
  },
  {
    id: 16,
    question: "Which part of the computer is the 'brain'?",
    answer: "CPU",
    options: [
      "RAM",
      "CPU",
      "Monitor",
      "Keyboard"
    ]
  },
  {
    id: 17,
    question: "Which file extension is for an image file?",
    answer: ".jpg",
    options: [
      ".txt",
      ".jpg",
      ".exe",
      ".mp3"
    ]
  },
  {
    id: 18,
    question: "Which storage is volatile?",
    answer: "RAM",
    options: [
      "ROM",
      "Hard Drive",
      "RAM",
      "SSD"
    ]
  },
  {
    id: 19,
    question: "Which one is an operating system?",
    answer: "Linux",
    options: [
      "Intel",
      "Google",
      "Linux",
      "Dell"
    ]
  },
  {
    id: 20,
    question: "What is the function of a modem?",
    answer: "Connects to the internet",
    options: [
      "Stores data",
      "Displays output",
      "Connects to the internet",
      "Prints files"
    ]
  },
  {
  id: 21,
  question: "Which of the following is a web browser?",
  answer: "Google Chrome",
  options: [
    "Windows",
    "Linux",
    "Google Chrome",
    "Adobe"
  ]
},
{
  id: 22,
  question: "What does 'www' stand for?",
  answer: "World Wide Web",
  options: [
    "Web World Work",
    "World Web Wide",
    "Wide Web World",
    "World Wide Web"
  ]
},
{
  id: 23,
  question: "Which company created the Windows OS?",
  answer: "Microsoft",
  options: [
    "Google",
    "Apple",
    "Microsoft",
    "Intel"
  ]
},
{
  id: 24,
  question: "What type of device is a printer?",
  answer: "Output",
  options: [
    "Input",
    "Output",
    "Storage",
    "Processing"
  ]
},
{
  id: 25,
  question: "Which of these is not hardware?",
  answer: "Microsoft Word",
  options: [
    "Keyboard",
    "Monitor",
    "Microsoft Word",
    "Mouse"
  ]
},
{
  id: 26,
  question: "What is the function of the Ctrl + C shortcut?",
  answer: "Copy",
  options: [
    "Cut",
    "Copy",
    "Paste",
    "Close"
  ]
},
{
  id: 27,
  question: "What does GUI stand for?",
  answer: "Graphical User Interface",
  options: [
    "General Utility Interface",
    "Graphical User Interface",
    "Graphics Universal Integration",
    "Global User Input"
  ]
},
{
  id: 28,
  question: "Which language is used to style web pages?",
  answer: "CSS",
  options: [
    "HTML",
    "Python",
    "CSS",
    "Java"
  ]
},
{
  id: 29,
  question: "Which storage device is fastest?",
  answer: "SSD",
  options: [
    "CD-ROM",
    "HDD",
    "SSD",
    "Floppy Disk"
  ]
},
{
  id: 30,
  question: "Which of the following is open-source software?",
  answer: "Linux",
  options: [
    "Linux",
    "Windows 11",
    "macOS",
    "MS Office"
  ]
}
];


function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
let questions = shuffle(allQuestions).slice(0, 10);

let question_count = 0;
let points = 0;
let timer;
let timeLeft = 30;

window.onload = function() {
    show(question_count);
    startTimer();
};

function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
        <ul class="option_group">
            <li class="option">${first}</li>
            <li class="option">${second}</li>
            <li class="option">${third}</li>
            <li class="option">${fourth}</li>
        </ul>`;

    toggleActive();
}

function toggleActive() {
    let options = document.querySelectorAll("li.option");
    const nextBtn = document.getElementById('next-btn');


    nextBtn.disabled = true;

    options.forEach(option => {
        option.onclick = () => {
            options.forEach(el => el.classList.remove("active"));
            option.classList.add("active");
            nextBtn.disabled = false;
        };
    });
}

function next() {
    clearInterval(timer);

    let userAnswer = document.querySelector("li.option.active");
    if (userAnswer) {
        if (userAnswer.innerHTML === questions[question_count].answer) {
            points += 10;
            sessionStorage.setItem("points", points);
        }
    }

    question_count++;

    if (question_count === questions.length) {
        location.href = "final.html";
        return;
    }

    show(question_count);
    startTimer();
}

function startTimer() {
    timeLeft = 30;
    document.getElementById("timer").innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            next();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}
