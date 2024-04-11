class LobbyScene extends Phaser.Scene {
    constructor() {
        super("lobbyConnect")
    };

    create() {
        this.add.text(20,20, "Lobby Screen");
    }
}