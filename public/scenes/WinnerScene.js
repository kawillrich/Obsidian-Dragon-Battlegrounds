class WinnerScene extends Phaser.Scene {
    constructor() {
        super('winner')
    };

    create() {
        this.add.text(20,20, "Winner Screen");
    }
}