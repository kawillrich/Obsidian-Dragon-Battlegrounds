class ExitScene extends Phaser.Scene {
    constructor() {
        super('exitGame')
    };

    create() {
        this.add.text(20,20, "Exit Screen");
    }
}