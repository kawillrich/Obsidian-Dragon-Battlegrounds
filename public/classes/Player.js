class Player {
    //pass a config argument to capture all data points?
    constructor (classTitle, hitPoints, armor, specialAttack, damage) {
        this.classTitle = classTitle;
        this.hitPoints = hitPoints;
        this.armor = armor;
        specialAttack = {
            name: "",
            image: "",
            damage: 0
        };
        damage = {
            primaryAttack: 0,
            dashAttack: 0,
            specialAttackDamage: specialAttack.damage
        }
    }
}