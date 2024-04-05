// src/components/RockPaperScissors.js
class RockPaperScissors {
    static generateCPUChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    static determineWinner(userChoice, cpuChoice) {
      if (userChoice === cpuChoice) {
        return 'tie';
      }
      if (
        (userChoice === 'rock' && cpuChoice === 'scissors') ||
        (userChoice === 'paper' && cpuChoice === 'rock') ||
        (userChoice === 'scissors' && cpuChoice === 'paper')
      ) {
        return 'user';
      }
      return 'cpu';
    }
  }
  
  export default RockPaperScissors;
  