class GameScene extends Phaser.Scene {
    constructor() {
        super("initGame")
    };

    preload() {
        
    }

    create() {
        this.add.text(20,20, "Game Screen");
    }

    // {
    //   preload() {

    //     this.load.spritesheet('heroAtlas', 'public/assets/images/hero48x48.png', {
    //         frameWidth: 48,
    //         frameHeight: 48
    //     })

    //     //this.load.atlas('heroAtlas', 'assets/images/hero48x48.png', 'assets/images/hero48x48.json');

    //     this.load.image('bg', 'https://cdn.glitch.com/59aa1c5f-c16d-41a1-bfd2-09072e84a538%2Fbg.png?1551136995353');
    //   },
  
    //   create() {
    //     this.keys = this.input.keyboard.createCursorKeys();
    //     // Static background
    //     let bg = this.add.image(0, 0, 'bg').setOrigin(0,0);
    //     // The movable character
    //     this.hero = this.physics.add.sprite(200, 150, 'heroAtlas', 0);
    //     this.hero.direction = 'down';
    //     this.hero.body.setCollideWorldBounds(true);
    //     this.hero.body.setSize(this.hero.width * 0.5, this.hero.height * 0.75)
    //     this.stateMachine = new StateMachine('idle', {
    //         idle: new IdleState(),
    //         move: new MoveState(),
    //         swing: new SwingState(),
    //         dash: new DashState(),
    //     }, [this, this.hero]);


    //     this.anims.create({
    //        key: 'walk-down',
    //        frameRate: 8,
    //        repeat: -1,
    //        frames: this.anims.generateFrameNumbers('heroAtlas', {start: 0, end: 3}),
    //      });
    //      this.anims.create({
    //        key: 'walk-right',
    //        frameRate: 8,
    //        repeat: -1,
    //        frames: this.anims.generateFrameNumbers('heroAtlas', {start: 20, end: 27}),
    //      });
    //      this.anims.create({
    //        key: 'walk-up',
    //        frameRate: 8,
    //        repeat: -1,
    //        frames: this.anims.generateFrameNumbers('heroAtlas', {start: 30, end: 33}),
    //      });
    //      this.anims.create({
    //        key: 'walk-left',
    //        frameRate: 8,
    //        repeat: -1,
    //        frames: this.anims.generateFrameNumbers('heroAtlas', {start: 10, end: 17}),
    //      });

    //      this.anims.create({
    //         key: 'swing-down',
    //         frameRate: 12,
    //         repeat: 0,
    //         frames: this.anims.generateFrameNumbers('heroAtlas', {start: 40, end: 43}),
    //       });
    //       this.anims.create({
    //         key: 'swing-up',
    //         frameRate: 12,
    //         repeat: 0,
    //         frames: this.anims.generateFrameNumbers('heroAtlas', {start: 50, end: 53}),
    //       });
    //       this.anims.create({
    //         key: 'swing-right',
    //         frameRate: 12,
    //         repeat: 0,
    //         frames: this.anims.generateFrameNumbers('heroAtlas', {start: 60, end: 63}),
    //       });
    //       this.anims.create({
    //         key: 'swing-left',
    //         frameRate: 12,
    //         repeat: 0,
    //         frames: this.anims.generateFrameNumbers('heroAtlas', {start: 70, end: 73}),
    //       });

    //       let camera = this.cameras.main;
    //       camera.setSize(300, 300)
    //       camera.setBounds(0,0, bg.displayWidth, bg.displayHeight);
    //       camera.startFollow(this.hero)
    //   },
  
    //   update() {
    //     this.stateMachine.step();
    //   },
    // }
  


  // class IdleState extends State {
  //     enter(scene, hero) {
  //         hero.setVelocity(0);
  //         hero.anims.play(`walk-${hero.direction}`);
  //         hero.anims.stop();
  //     }
  
  //     execute(scene, hero) {
  //         const {left, right, up, down, space, shift } = scene.keys;
  
  //         if (space.isDown) {
  //             this.stateMachine.transition('swing');
  //             return
  //         }
  
  //         if (shift.isDown) {
  //             this.stateMachine.transition('dash');
  //             return;
  //         }
  
  //         if(left.isDown || right.isDown || up.isDown || down.isDown) {
  //             this.stateMachine.transition('move');
  //             return;
  //         }
  //     }
  // }
  
  // class MoveState extends State {
  //     execute(scene, hero) {
  //         const {left, right, up, down, space, shift } = scene.keys;
  
  //         if (space.isDown) {
  //             this.stateMachine.transition('swing');
  //             return;
  //         }
  
  //         if (shift.isDown) {
  //             this.stateMachine.transition('dash');
  //             return;
  //         }
  
  //         if (!(left.isDown || right.isDown || up.isDown || down.isDown)) {
  //             this.stateMachine.transition('idle')
  //             return
  //         }
  
  //         hero.setVelocity(0);
  //         if (up.isDown) {
  //             hero.setVelocityY(-100);
  //             hero.direction = 'up';
  
  //         } else if (down.isDown) {
  //             hero.setVelocityY(100);
  //             hero.direction = 'down';
  
  //         };
  
  //         if (left.isDown) {
  //             hero.setVelocityX(-100);
  //             hero.direction = 'left';
  
  //         } else if (right.isDown) {
  //             hero.setVelocityX(100);
  //             hero.direction = 'right';
  
  //         }
  //         hero.anims.play(`walk-${hero.direction}`, true);
  //     }
  // }
  
  // class SwingState extends State {
  //     enter(scene, hero) {
  //         hero.setVelocity(0);
          
          
          
          
          
          
          
          
          
  //          hero.anims.play(`swing-${hero.direction}`);
  //         hero.once('animationcomplete', () => {
  //             this.stateMachine.transition('idle')
  //         })
  //     }
  // }
  
  // class DashState extends State {
  //     enter(scene, hero) {
  //         hero.setVelocity(0);
  //         hero.anims.play(`swing-${hero.direction}`);
  //         switch (hero.direction) {
  //             case 'up':
  //                 hero.setVelocityY(-300);
  //                 break;
  //             case 'down':
  //                 hero.setVelocityY(300);
  //                 break;
  //             case 'left':
  //                 hero.setVelocityX(-300);
  //                 break;
  //             case 'right':
  //                 hero.setVelocityX(300);
  //                 break;
  //         }
  
  //         scene.time.delayedCall(300, () => {
  //                   this.stateMachine.transition('idle');
  //                });
  //     }
  // }
  
}