let computerNum = 0;
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-num');
let userResult = document.getElementById('result');
let resetButton = document.getElementById('reset-button');
let chances = 5;
let chanceArea = document.getElementById('chance-area');
let history = [];
let answerArea = document.getElementById('answer');
let jackPot = document.getElementById('win');
let unLucky = document.getElementById('lose');
let gameName = document.getElementById('main-title');
let gameType = document.getElementById('subtitle');
let gameBox = document.getElementById('mainBox');
let parentElement = gameName.parentNode;
let parentResult = userResult.parentNode;
let parentReset = resetButton.parentNode;

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', function () {
  userInput.value = '';
});

// getElementById - 아이디를 통해 가져오는 방식
//getElementByClassName, querySelector
// addEventListener - 이벤트 추가 focus hover etc.
// 함수를 매개변수로 줘야함  () 넣을시 자동실행됨
// document.querySelector('#play-button), ('.user-num'), ('nav a');
// 선택자를 기반으로 요소를 찾아내며, 첫 번째로 일치하는 요소만 반환
// document.querySelectorAll
// 선택자를 기반으로 요소를 찾아내며, 일치하는 모든 요소를 NodeList 형태로 반환

function pickRandomNumber() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  //   math.random - 0~1 사이의 숫자를 함수로 반환 (소수점, 1에 근접한 숫자 까지)
  console.log('Answer', computerNum);
}

function play() {
  let userValue = userInput.value; // .value 값을 읽어옴
  userResult.removeAttribute('hidden');

  if (userValue < 1 || userValue > 100) {
    userResult.textContent = '1에서 100까지의 숫자를 넣어 주세요';
    return;
    // 이후의 값은 실행시키지 않음
  }
  if (history.includes(userValue)) {
    userResult.textContent = '다른 번호를 입력 해주세요 ';
    return;
  }

  chances--;
  chanceArea.textContent = `남은 기회는 ${chances}`;
  console.log('Chances', chances);

  if (userValue < computerNum) {
    userResult.textContent = '더 위로!';
  } else if (userValue > computerNum) {
    userResult.textContent = '밑으로!';
  } else if (userValue == computerNum) {
    userResult.textContent = `축하 합니다! 당첨:)`;
    playButton.disabled = true;
    chanceArea.style.display = 'none';
    userInput.style.display = 'none';
    playButton.style.display = 'none';
    jackPot.style.display = 'block';
    gameName.style.display = 'none';
    gameType.style.display = 'none';
    parentElement.insertBefore(userResult, gameName);
    return;
  }

  history.push(userValue);

  console.log(history);
  if (chances == 1) {
    chanceArea.textContent = '마지막 기회 입니다!';
  }
  if (chances < 1) {
    answerArea.textContent = `정답은 ${computerNum}!`;
    answerArea.hidden = false;
    chanceArea.textContent = '';
    playButton.disabled = true;
    userResult.textContent = '다음에는 운이 있을거예요!';
    chanceArea.style.display = 'none';
    userInput.style.display = 'none';
    playButton.style.display = 'none';
    unLucky.style.display = 'block';
    gameName.style.display = 'none';
    gameType.style.display = 'none';
    parentElement.insertBefore(userResult, gameName);
    resetButton.style.bottom = '35px';
    return;
  }
}

function reset() {
  userInput.value = '';
  userResult.textContent = '';
  userInput.style.display = 'block';
  playButton.style.display = 'block';
  chanceArea.style.display = 'block';
  jackPot.style.display = 'none';
  unLucky.style.display = 'none';
  gameName.style.display = 'block';
  gameType.style.display = 'block';
  gameBox.style.backgroundImage = 'url(treasure_cave2.jpg)';
  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundSize = 'auto';
  resetButton.style.position = 'static';
  resetButton.style.bottom = 'auto';
  parentResult.insertBefore(userResult, chanceArea);
  playButton.disabled = false;
  chances = 5;
  chanceArea.textContent = `기회는 단 5번!`;
  history = [];
  answerArea.hidden = true;

  // re-operate number
  pickRandomNumber();
}

pickRandomNumber();

// function randomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
// } // min부터 시작하며, min을 포함해서 min + 6까지의 값이 가능합니다.

// const num = randomInt(3, 10);
// console.log(num);
