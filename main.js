// class StateMachine {
//     constructor (initialState, possibleStates, stateArgs=[]) {
//         this.initialState = initialState;
//         this.possibleStates = possibleStates;
//         this.stateArgs = stateArgs;
//         this.state = null;

//         for (const state of Object.values(this.possibleStates)) {
//             state.stateMachine = this;
//         }
//     }

//     step() {
//         if (this.state === null) {
//             this.state = this.initialState;
//             this.possibleStates[this.state].enter(...this.stateArgs);
//         }

//         this.possibleStates[this.state].execute(...this.stateArgs);
//     }

//     transition(newState, ...enterArgs) {
//         this.state = newState;
//         this.possibleStates[this.state].enter(...this.stateArgs, ...enterArgs);
//     }
// }

// class State {
//     enter() {

//     }

//     execute() {

//     }
// }


const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 640,
    backgroundColor: '#020539',
    pixelArt: true,
    zoom: 2,
    physics: {
      default: 'arcade',
      arcade: {
        debug: true
      }
    },
    scene: [TitleScene, CharScene, LobbyScene, GameScene, WinnerScene, ExitScene]
}    

window.game = new Phaser.Game(config);