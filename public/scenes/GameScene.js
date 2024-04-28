class GameScene extends Phaser.Scene {
    constructor() {
        super("initGame")
    };

    // preload() {
        
    // }

    // create() {
    //     this.add.text(20,20, "Game Screen");
    // }

    
      preload() {

        // this.load.spritesheet('heroAtlas', 'assets/images/hero48x48.png', {
        //     frameWidth: 48,
        //     frameHeight: 48
        // })

        this.load.atlas('heroAtlas', 'assets/images/hero48x48.png', 'assets/images/hero48x48.json');

        this.load.image('bg', 'https://cdn.glitch.com/59aa1c5f-c16d-41a1-bfd2-09072e84a538%2Fbg.png?1551136995353');
      }
  
      create() {
        this.add.image(0,0,'bg')
        //this.add.sprite(x, y, referenceImage, frameNumber)
        this.add.sprite(200, 200, 'heroAtlas', "sprite2")
      }
  
      update() {
      }
    }
  
  
