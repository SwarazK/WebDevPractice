class Player{
    constructor(race,level){
        this.race = race;
        this.level = level;
        this.class = "Grunt";
    }

    greeting(){
        console.log(`Hello! I am a ${this.race} ${this.class}. Currently my level is ${this.level}.`);
    }

    cast(spell){
        if(this.class !== "Grunt") console.log(`The ${this.race} ${this.class} casts a fearsome ${spell} spell.`);
        else console.log(`The ${this.race} ${this.class} casts a pathetic ${spell} spell.`);
    }
}

class Necromancer extends Player{
    constructor(race,level){
        super(race,level);
        this.class = "Necromancer";
    }

    raise(num){
        console.log(`The Necromancer raised ${num} Skeletons`);
    }

    greaterRaise(){
        console.log('The Necromancer raised a Greater Skeleton.')
    }

}

class Paladin extends Player{
    constructor(race,level){
        super(race,level);
        this.class = "Paladin";
    }

    heal(){
        this.cast("heal");
    }

    purify(){
        this.cast("purify")
    }

    exclaim(god = "god"){
        console.log(`In the name of ${god} I shall punish thee!`);
    }
}