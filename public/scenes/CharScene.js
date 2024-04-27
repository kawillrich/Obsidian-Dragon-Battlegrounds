class CharScene extends Phaser.Scene {
    constructor() {
        super("charSelect")
    };

    preload() {
        
        //load player select button
        this.load.image("player-select", "assets/images/player-select.png");

        //load gender select button
        this.load.image("male-button", "assets/images/male-button.png");
        this.load.image("female-button", "assets/images/female-button.png");

        //load male characters
        this.load.image("adventurer-male", "assets/images/adventurer-male.png");
        this.load.image("archer2-male", "assets/images/archer2-male.png");
        this.load.image("fighter-male", "assets/images/fighter-male.png");
        this.load.image("mage-male", "assets/images/mage-male.png");

        //load female characters
        this.load.image("adventurer-female", "assets/images/adventurer-female.png");
        this.load.image("archer2-female", "assets/images/archer2-female.png");
        this.load.image("fighter2-female", "assets/images/fighter2-female.png");
        this.load.image("mage-female", "assets/images/mage-female.png");

        this.load.image("character-selected", "assets/images/character-selected.png");

    }

    create() {
        //add select character select outline and then hide
        this.characterSelected = this.add.image(0, 0, "character-selected");
        this.characterSelected.visible = false;
        
        //add player select button then hide
        this.playerSelect = this.add.image(320,60, "player-select").setInteractive()
            .on('pointerdown', () => {
                console.log('clicked');
                this.scene.start('lobbyConnect')
            })

        this.playerSelect.visible = false;

        //add male images then hide
        this.adventurerMale = this.add.image(235, 150, "adventurer-male")            
        .setInteractive()
        .on('pointerdown', () => {
            console.log('select adventurer-male');
            this.playerSelect.visible = true;
            this.characterSelected.visible = false;
            this.characterSelected.x = this.adventurerMale.x;
            this.characterSelected.y = this.adventurerMale.y;
            this.characterSelected.visible = true;
        })

        this.mageMale = this.add.image(415, 150, "mage-male")            
            .setInteractive()
            .on('pointerdown', () => {
                console.log('select mage-male');
                this.playerSelect.visible = true;
                this.characterSelected.visible = false;
                this.characterSelected.x = this.mageMale.x;
                this.characterSelected.y = this.mageMale.y;
                this.characterSelected.visible = true;
            })
        this.fighterMale = this.add.image(235, 250, "fighter-male")            
            .setInteractive()
            .on('pointerdown', () => {
                this.playerSelect.visible = true;
                console.log('select fighter-male');
                this.characterSelected.visible = false;
                this.characterSelected.x = this.fighterMale.x;
                this.characterSelected.y = this.fighterMale.y;
                this.characterSelected.visible = true;
            })
        this.archerMale = this.add.image(415, 250, "archer2-male")            
            .setInteractive()
            .on('pointerdown', () => {
                this.playerSelect.visible = true;
                console.log('select archer2-male');
                this.characterSelected.visible = false;
                this.characterSelected.x = this.archerMale.x;
                this.characterSelected.y = this.archerMale.y;
                this.characterSelected.visible = true;
        })

        this.adventurerMale.visible = false;
        this.fighterMale.visible = false;
        this.mageMale.visible = false;
        this.archerMale.visible = false;

        //add female characters then hide
        this.adventurerFemale = this.add.image(235, 150, "adventurer-female")            
            .setInteractive()
            .on('pointerdown', () => {
                this.playerSelect.visible = true;
                console.log('select adventurer-female');
                this.characterSelected.visible = false;
                this.characterSelected.x = this.adventurerFemale.x;
                this.characterSelected.y = this.adventurerFemale.y;
                this.characterSelected.visible = true;
            })

        this.mageFemale = this.add.image(415, 150, "mage-female")            
            .setInteractive()
            .on('pointerdown', () => {
                this.playerSelect.visible = true;
                console.log('select mage-female');
                this.characterSelected.visible = false;
                this.characterSelected.x = this.mageFemale.x;
                this.characterSelected.y = this.mageFemale.y;
                this.characterSelected.visible = true;
            })

        this.fighterFemale = this.add.image(235, 250, "fighter2-female")            
            .setInteractive()
            .on('pointerdown', () => {
                this.playerSelect.visible = true;
                console.log('select fighter2-female');
                this.characterSelected.visible = false;
                this.characterSelected.x = this.fighterFemale.x;
                this.characterSelected.y = this.fighterFemale.y;
                this.characterSelected.visible = true;
            })

        this.archerFemale = this.add.image(415, 250, "archer2-female")            
            .setInteractive()
            .on('pointerdown', () => {
                this.playerSelect.visible = true;
                console.log('select archer2-female');
                this.characterSelected.visible = false;
                this.characterSelected.x = this.archerFemale.x;
                this.characterSelected.y = this.archerFemale.y;
                this.characterSelected.visible = true;
            })

        
            this.adventurerFemale.visible = false;
            this.fighterFemale.visible = false;
            this.mageFemale.visible = false;
            this.archerFemale.visible = false;

        //add male buttons
        this.add.image(230, 100, "male-button").setInteractive()
            .on('pointerdown', () => {
                this.characterSelected.visible = false;
                this.playerSelect.visible = false;
                this.adventurerFemale.visible = false;
                this.fighterFemale.visible = false;
                this.mageFemale.visible = false;
                this.archerFemale.visible = false;

                this.adventurerMale.visible = true;
                this.fighterMale.visible = true;
                this.mageMale.visible = true;
                this.archerMale.visible = true;

                console.log('male selected')
            });

            
        //add female button
        this.add.image(410, 100, "female-button").setInteractive()
            .on('pointerdown', () => {
                this.characterSelected.visible = false;
                this.playerSelect.visible = false;

                this.adventurerMale.visible = false;
                this.fighterMale.visible = false;
                this.mageMale.visible = false;
                this.archerMale.visible = false;

                this.adventurerFemale.visible = true;
                this.fighterFemale.visible = true;
                this.mageFemale.visible = true;
                this.archerFemale.visible = true;

                console.log('female selected')
            });

            
        
         

    }
}