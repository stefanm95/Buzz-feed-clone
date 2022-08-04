// 'use strict';

const questionDispay = document.querySelector('#questions');
const answerDisplay = document.querySelector('#answer');
const unansweredQuestions = [];
const chosenAnswers = [];
const answers = [
  {
    combination: ['New York', 'Pizza', 'Traditional'],
    text: 'Blue Cheese',
    image: '',
    alt: 'Blue Cheese',
  },
  {
    combination: ['Austin', 'Pasta', 'Modern'],
    text: 'Cheddar',
    image: '',
    alt: 'Cheddar Cheese',
  },
  {
    combination: ['Portland', 'Sandwich', 'Mountains'],
    text: 'Feta',
    image: '',
    alt: 'Feta Cheese',
  },
  {
    combination: ['New Orleans', 'Hamburger', 'House'],
    text: 'Halloumi',
    image: '',
    alt: 'Halloumi Cheese',
  },
];

const questions = [
  {
    id: 0,
    text: 'Pick a vacation destination: ',
    answers: [
      {
        text: 'New York',
        image:
          'https://images.unsplash.com/photo-1418075285575-c402f1f7340f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        alt: 'Photo of the Empire State building duing daytime',
        credit: 'John Flobrant',
      },
      {
        text: 'Austin',
        image:
          'https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Time-lapse photography car lights on bridge',
        credit: 'Carlos Alfonso',
      },
      {
        text: 'Portland',
        image:
          'https://images.unsplash.com/photo-1541457523724-95f54f7740cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydGxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        alt: 'High-rise buildings',
        credit: 'Elena Kuchko',
      },
      {
        text: 'New Orleans',
        image:
          'https://images.unsplash.com/photo-1643839656157-c36c0bbf429b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fG5ldyUyMG9ybGVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        alt: 'Road with people and house',
        credit: 'Mitch Hodiono',
      },
    ],
  },
  {
    id: 1,
    text: 'Pick some food: ',
    answers: [
      {
        text: 'Pizza',
        image:
          'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBhbGFuJTIwaGFyZG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Pepperoni Pizza',
        credit: 'Alan Hardman',
      },
      {
        text: 'Sandwich',
        image:
          'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'ham sandwich on white surface',
        credit: 'Suea Sivilaisith',
      },
      {
        text: 'Pasta',
        image:
          'https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Pasta in tomato sauce',
        credit: 'Mgg Vitchakorn',
      },
      {
        text: 'Hamburger',
        image:
          'https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Hamburger',
        credit: 'amirali mirhashemian',
      },
    ],
  },
  {
    id: 2,
    text: 'Pick a home: ',
    answers: [
      {
        text: 'Traditional',
        image:
          'https://images.unsplash.com/photo-1574664598429-9d95d9486688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1cmdlc3MlMjBtaWxuZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        alt: 'focus phoptography of building windoes',
        credit: 'Burgess Milner',
      },
      {
        text: 'Modern',
        image:
          'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        alt: 'low angle view of building',
        credit: 'Avi Werde',
      },
      {
        text: 'House',
        image:
          'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        alt: 'trees beside white house with swimming pool',
        credit: 'Digital Marketing Agency NTWRK',
      },
      {
        text: 'Mountains',
        image:
          'https://images.unsplash.com/photo-1558636292-3cd4fbdf891b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW4lMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'brown wooden cabin in front of forest',
        credit: 'Joris Beugels',
      },
    ],
  },
];

function populateQuestions() {
  questions.forEach(question => {
    const titleBlock = document.createElement('div');
    titleBlock.id = question.id;
    titleBlock.classList.add('title-block');
    const titleHeading = document.createElement('h2');
    titleHeading.textContent = question.text;
    titleBlock.append(titleHeading);
    questionDispay.append(titleBlock);

    const answersBlock = document.createElement('div');
    answersBlock.id = question.id + '-questions';
    answersBlock.classList.add('answer-options');

    unansweredQuestions.push(question.id);

    question.answers.forEach(answer => {
      const answerBlock = document.createElement('div');
      answerBlock.classList.add('answer-block');
      answerBlock.addEventListener('click', handleClick);
      const answerImage = document.createElement('img');
      answerImage.setAttribute('src', answer.image);
      answerImage.setAttribute('alt', answer.alt);

      const answerTitle = document.createElement('h3');
      answerTitle.textContent = answer.text;

      const answerInfo = document.createElement('p');
      const imageLink = document.createElement('a');
      imageLink.setAttribute('href', answer.credit);
      imageLink.textContent = answer.credit;
      const sourceLink = document.createElement('a');
      sourceLink.textContent = 'Unslpash';
      sourceLink.setAttribute('src', 'https://unsplash.com');
      answerInfo.append(imageLink, ' to ', sourceLink);

      answerBlock.append(answerImage, answerTitle, answerInfo);
      answersBlock.append(answerBlock);
    });

    questionDispay.append(answersBlock);
  });
}

populateQuestions();

function handleClick(questionId, chosenAnswer) {
  if (unansweredQuestions.includes(questionId)) {
    chosenAnswers.push(chosenAnswer);
  }
  const itemToRemove = unansweredQuestions.indexOf(questionId);

  if (itemToRemove > -1) {
    unansweredQuestions.splice(itemToRemove, 1);
  }
  console.log(chosenAnswer);
  console.log(unansweredQuestions);

  disableQuestionBlock(questionId, chosenAnswer);

  const lowestQuestionId = Math.min(...unansweredQuestions);
  location.href = '#' + lowestQuestionId;

  if (!unansweredQuestions.length) {
    //scroll to answe div
    location.href = '#answer';
    showAnswer();
  }
}
function showAnswer() {
  let result;
  answers.forEach(answer => {
    if (
      chosenAnswers.includes(answer.combination[0]) +
      chosenAnswers.includes(answer.combination[1]) +
      chosenAnswers.includes(answer.combination[2])
    ) {
      result = answer;
      return;
    } else if (!result) {
      //first answer object is default
      result = answers[0];
    }
  });
  console.log(result);
  const answerBlock = document.createElement('div');
  answerBlock.classList.add('result-block');
  const answerTitle = document.createElement('h3');
  answerTitle.textContent = document.createElement('img');
  answerImage.setAttribute('src', result.image);
  answerImage.setAttribute('alt', result.alt);

  answerBlock.append(answerTitle, answerImage);
  answerDisplay.append(answerBlock);

  const allAnswerBlock = document.querySelectorAll('.answer-block');
  Array.from(allAnswerBlock).forEach(answerBlock =>
    answerBlock.replaceWith(answerBlock.cloneNode(true))
  );
}

function disableQuestionBlock(questionId, chosenAnswer) {
  const currentQuestionBlock = document.getElementById(
    questionId + '-questions'
  );

  Array.from(currentQuestionBlock.children).forEach(block => {
    if (block.children.item(1).innerText != chosenAnswer) {
      block.style.opacity = '50%';
    }
  });
}
