class TitleScene extends Phaser.Scene {
    constructor() {
        super("bootGame")
    };

    preload() {
        this.load.image("title", "assets/images/title-screen.png");
        this.load.image("start-button", "assets/images/start-button.png")
    }

    create() {

        
        this.background = this.add.image(0, 0, "title");
        this.background.setOrigin(0,0);

        this.add.image(320, 340, "start-button").setInteractive()
            .on('pointerover', () => {
                console.log('down')
            })
            .on('pointerup', ()=> {
            this.scene.start('charSelect')
        })
        
        // this.scene.start('charSelect')
    }
}