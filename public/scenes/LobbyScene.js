class LobbyScene extends Phaser.Scene {
    constructor() {
        super("lobbyConnect")
    };

    create() {
        this.add.text(20,20, "Lobby Screen").setOrigin(0,0);
        let { height, width} = this.sys.game.canvas;
        this.text = this.add.text(200, 250);
        this.timedEvent = this.time.delayedCall(3000, this.initGame, [], this);
    }

    update () {
        this.text.setText("Lobby populating players")
    }

    initGame() {
        this.scene.start('initGame')
    }
}