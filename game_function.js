let computerNum = 0;
let playButton = document.getElementById('main-btn');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');

function randomNumber() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}

randomNumber();

let play = () => {
  let userNum = userInput.value;
  if (userNum < computerNum) {
    resultArea.textContent = 'Go up!';
  } else if (userNum > computerNum) {
    resultArea.textContent = 'Go down!';
  } else {
    resultArea.textContent = 'You got correct :)';
  }
};

playButton.addEventListener('click', play);

// 총 5번의 기회가 있다
// 게임이 종료되면 버튼 비활성화
// 리셋버튼을 누를시 게임이 비활성화
// 1~100이외의 숫자 입력시 경고 메세지
// 이미 입력한 값을 또 입력시 경고 메세지
