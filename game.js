class Bedroom extends AdventureScene {
    constructor() {
        super("bedroom", "Bedroom");
    }
    init(data){
        this.inventory = [];
    }
    preload() {
        this.load.image('bedroombg', 'assets/images/bedroombg.png');
        this.load.image('bed', 'assets/images/bed.png');
        this.load.image('bedtable', 'assets/images/bedtable.png');
        this.load.image('window', 'assets/images/window.png');

        this.load.image('lamp', 'assets/sprites/lamp.png');
        this.load.image('desk2', 'assets/sprites/desk2.png');
        this.load.image('chair', 'assets/sprites/chair.png');
        this.load.image('door1', 'assets/sprites/door1.png');
        this.load.image('computer', 'assets/sprites/computer.png');

        this.load.audio('pickupsfx', 'assets/sounds/pickupsfx.mp3');
        this.load.audio('bgm', 'assets/sounds/bgm.mp3');
    }

    onEnter() {
        this.sound.play('bgm', { loop: true, volume: 0.2 });

        let bg = this.add.image(0, 0, 'bedroombg').setOrigin(0, 0);
        bg.setDisplaySize(this.w * 0.75, this.h); 

        let bed = this.add.image(this.w * 0.18, this.h * 0.3, 'bed')
            .setOrigin(0, 0)
            .setScale(0.15)


        let bedtable = this.add.image(this.w * 0.03, this.h * 0.4, 'bedtable')
            .setOrigin(0, 0)
            .setScale(0.1)

        let window = this.add.image(this.w * 0.03, this.h * 0.05, 'window').setOrigin(0, 0).setScale(0.1);

        let lamp = this.add.image(this.w * 0.075, this.h * 0.32, 'lamp')
            .setOrigin(0, 0)
            .setScale(12)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A lamp.");
                this.addHover(lamp);
            })
            .on('pointerdown', () => {
                this.pickup(lamp, "Lamp", "You have packed up a lamp.", "pickupsfx");
            });
        
        let desk = this.add.image(this.w * 0.38, this.h * 0.4, 'desk2')
            .setOrigin(0, 0)
            .setScale(2.5)
        
        let chair = this.add.image(this.w * 0.46, this.h * 0.5, 'chair')
            .setOrigin(0, 0)
            .setScale(15)
        
        let computer = this.add.image(this.w * 0.46, this.h * 0.34, 'computer')
            .setOrigin(0, 0)
            .setScale(10)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Your computer.");
                this.addHover(computer);
            })
            .on('pointerdown', () => {
                this.pickup(computer, "Computer", "You have packed up your computer.", "pickupsfx");
            });

        let door1 = this.add.image(this.w * 0.62, this.h * 0.14, 'door1')
            .setOrigin(0, 0)
            .setScale(15)
            .setInteractive();
        
        door1.on('pointerdown', () => {
            if (this.hasItem("Lamp") && this.hasItem("Computer")) {
                this.gotoScene('bathroom');
            } 
            else {
                this.showMessage("The door is locked. I still need to pack my small items!");
            }
        });

        door1.on('pointerover', () => {
            if (this.hasItem("Lamp") && this.hasItem("Computer")) {
                this.showMessage("The door is unlocked! Click to leave.");
            }
            else {
                this.showMessage("The door is locked.");
            }
        });

    }
}

class Bathroom extends AdventureScene {
    constructor() {
        super("bathroom", "Bathroom");
    }
    init(data){
        this.inventory = [];
    }
    preload() {
        this.load.image('bathroombg', 'assets/images/bathroombg.png');
        this.load.image('smallwindow', 'assets/images/smallwindow.png');

        this.load.image('sink', 'assets/sprites/sink.png');
        this.load.image('toilet', 'assets/sprites/toilet.png');
        this.load.image('bathtub', 'assets/sprites/bathtub.png');
        this.load.image('mirror', 'assets/sprites/mirror.png');
        this.load.image('door1', 'assets/sprites/door1.png');
        this.load.image('toiletries', 'assets/sprites/toiletries.png');
    }
    onEnter() {
        let bg = this.add.image(0, 0, 'bathroombg').setOrigin(0, 0);
        bg.setDisplaySize(this.w * 0.75, this.h); 

        let smallwindow = this.add.image(this.w * 0.28, this.h * 0.05, 'smallwindow').setOrigin(0, 0).setScale(1);

        let sink = this.add.image(this.w * 0.01, this.h * 0.4, 'sink')
            .setOrigin(0, 0)
            .setScale(14)

        let bathtub = this.add.image(this.w * 0.25, this.h * 0.4, 'bathtub')
            .setOrigin(0, 0)
            .setScale(14)

        let toilet = this.add.image(this.w * 0.5, this.h * 0.35, 'toilet')
            .setOrigin(0, 0)
            .setScale(13)
        
        let mirror = this.add.image(this.w * 0.07, this.h * 0.15, 'mirror')
            .setOrigin(0, 0)
            .setScale(13)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A mirror.");
                this.addHover(mirror);
            })
            .on('pointerdown', () => {
                this.pickup(mirror, "Mirror", "You have packed up your mirror.", "pickupsfx");
            });
        
        let toiletries = this.add.image(this.w * 0.14, this.h * 0.37, 'toiletries')
            .setOrigin(0, 0)
            .setScale(8)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Your Toiletries.");
                this.addHover(toiletries);
            })
            .on('pointerdown', () => {
                this.pickup(toiletries, "Toiletries", "You have packed up your Toiletries.", "pickupsfx");
            });
            
        let door1 = this.add.image(this.w * 0.62, this.h * 0.14, 'door1')
            .setOrigin(0, 0)
            .setScale(15)
            .setInteractive();
        

        door1.on('pointerdown', () => {
            if (this.hasItem("Mirror") && this.hasItem("Toiletries")) {
                this.gotoScene('kitchen');
            } 
            else {
                this.showMessage("The door is locked. I still need to pack my small items!");
            }
        });

        door1.on('pointerover', () => {
            if (this.hasItem("Mirror") && this.hasItem("Toiletries")) {
                this.showMessage("The door is unlocked! Click to leave.");
            }
            else {
                this.showMessage("The door is locked.");
            }
        });
    }
}

class Kitchen extends AdventureScene {
    constructor() {
        super("kitchen", "Kitchen");
    }
    init(data){
        this.inventory = [];
    }
    preload() {
        this.load.image('kitchenbg', 'assets/images/kitchenbg.png');

        this.load.image('fridge', 'assets/sprites/fridge.png');
        this.load.image('kitchen', 'assets/sprites/kitchen.png');
        this.load.image('door1', 'assets/sprites/door1.png');
        this.load.image('plant', 'assets/sprites/plant.png');
        this.load.image('table', 'assets/sprites/table.png');
        this.load.image('Plates', 'assets/sprites/Plates.png');
        this.load.image('Cutlery', 'assets/sprites/Cutlery.png');

    }
    onEnter() {
        let bg = this.add.image(0, 0, 'kitchenbg').setOrigin(0, 0);
        bg.setDisplaySize(this.w * 0.75, this.h);

        let fridge = this.add.image(this.w * 0.414, this.h * 0.25, 'fridge')
            .setOrigin(0, 0)
            .setScale(13)

        let kitchen = this.add.image(this.w * 0, this.h * 0.25, 'kitchen')
            .setOrigin(0, 0)
            .setScale(13)
        
        let table = this.add.image(this.w * 0.4, this.h * 0.7, 'table')
            .setOrigin(0, 0)
            .setScale(15)
        
        let plant = this.add.image(this.w * 0.54, this.h * 0.43, 'plant')
            .setOrigin(0, 0)
            .setScale(14)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A plant.");
                this.addHover(plant);
            })
            .on('pointerdown', () => {
                this.pickup(plant, "Plant", "You have packed up a plant.", "pickupsfx");
            });
        
        let plates = this.add.image(this.w * 0.5, this.h * 0.7, 'Plates')
            .setOrigin(0, 0)
            .setScale(8)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Your Plates.");
                this.addHover(plates);
            })
            .on('pointerdown', () => {
                this.pickup(plates, "Plates", "You have packed up your Plates.", "pickupsfx");
            });

        let cutlery = this.add.image(this.w * 0.4, this.h * 0.7, 'Cutlery')
            .setOrigin(0, 0)
            .setScale(8)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Your Cutlery.");
                this.addHover(cutlery);
            })
            .on('pointerdown', () => {
                this.pickup(cutlery, "Cutlery", "You have packed up your Cutlery.", "pickupsfx");
            });
        
        let door1 = this.add.image(this.w * 0.62, this.h * 0.14, 'door1')
            .setOrigin(0, 0)
            .setScale(15)
            .setInteractive();
        
        door1.on('pointerdown', () => {
            if (this.hasItem("Plant") && this.hasItem("Plates") && this.hasItem("Cutlery")) {
                this.gotoScene('livingroom');
            } 
            else {
                this.showMessage("The door is locked. I still need to pack my small items!");
            }
        });

        door1.on('pointerover', () => {
            if (this.hasItem("Plant") && this.hasItem("Plates") && this.hasItem("Cutlery")) {
                this.showMessage("The door is unlocked! Click to leave.");
            }
            else {
                this.showMessage("The door is locked.");
            }
        });
    }
}

class LivingRoom extends AdventureScene {
    constructor() {
        super("livingroom", "Living Room");
    }
    init(data){
        this.inventory = [];
    }
    preload() {
        this.load.image('livingroombg', 'assets/images/livingroombg.png');

        this.load.image('couch', 'assets/sprites/couch.png');
        this.load.image('tv', 'assets/sprites/tv.png');
        this.load.image('door2', 'assets/sprites/door2.png');
        this.load.image('easle', 'assets/sprites/easle.png');
        this.load.image('fireplace', 'assets/sprites/fireplace.png');
        this.load.image('painting1', 'assets/sprites/painting1.png');
        this.load.image('painting2', 'assets/sprites/painting2.png');
        this.load.image('painting3', 'assets/sprites/painting3.png');
    }
    onEnter() {
        let bg = this.add.image(0, 0, 'livingroombg').setOrigin(0, 0);
        bg.setDisplaySize(this.w * 0.75, this.h);

        let couch = this.add.image(this.w * 0.19, this.h * 0.65, 'couch')
            .setOrigin(0, 0)
            .setScale(20)
        
        let tv = this.add.image(this.w * 0.24, this.h * 0.07, 'tv')
            .setOrigin(0, 0)
            .setScale(14)
        
        let fireplace = this.add.image(this.w * 0.23, this.h * 0.4, 'fireplace')
            .setOrigin(0, 0)
            .setScale(15)
        
        let easle = this.add.image(this.w * 0.02, this.h * 0.4, 'easle')
            .setOrigin(0, 0)
            .setScale(15)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("An easle.");
                this.addHover(easle);
            })
            .on('pointerdown', () => {
                this.pickup(easle, "Easle", "You have packed up an easle.", "pickupsfx");
            });
        
        let LeChatNoir = this.add.image(this.w * 0.01, this.h * 0.1, 'painting1')
            .setOrigin(0, 0)
            .setScale(10)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Le Chat Noir by Théophile Steinlen.");
                this.addHover(LeChatNoir);
            })
            .on('pointerdown', () => {
                this.pickup(LeChatNoir, "Le Chat Noir", "You have packed up 'Le Chat Noir'.", "pickupsfx");
            });
        
        let TheStarryNight = this.add.image(this.w * 0.12, this.h * 0.2, 'painting2')
            .setOrigin(0, 0)
            .setScale(6)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("The Starry Night by Vincent van Gogh.");
                this.addHover(TheStarryNight);
            })
            .on('pointerdown', () => {
                this.pickup(TheStarryNight, "The Starry Night", "You have packed up 'The Starry Night'.", "pickupsfx");
            });
        
        let Sunflowers = this.add.image(this.w * 0.51, this.h * 0.15, 'painting3')
            .setOrigin(0, 0)
            .setScale(10)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Sunflowers by Vincent van Gogh.");
                this.addHover(Sunflowers);
            })
            .on('pointerdown', () => {
                this.pickup(Sunflowers, "Sunflowers", "You have packed up 'Sunflowers'.", "pickupsfx");
            });

        
        let door2 = this.add.image(this.w * 0.62, this.h * 0.14, 'door2')
            .setOrigin(0, 0)
            .setScale(15)
            .setInteractive();
    
        door2.on('pointerdown', () => {
            if (this.hasItem("Easle") && this.hasItem("Le Chat Noir") && this.hasItem("The Starry Night") && this.hasItem("Sunflowers")) {
                this.gotoScene('outro');
            }
            else {
                this.showMessage("The door is locked. I still need to pack my small items!");
            }
        });
        
        door2.on('pointerover', () => {
            if (this.hasItem("Easle") && this.hasItem("Le Chat Noir") && this.hasItem("The Starry Night") && this.hasItem("Sunflowers")) {
                this.showMessage("The door is unlocked! Click to leave the house :).");
            }
            else {
                this.showMessage("The door is locked.");
            }
        });
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.sound.stopAll();

        this.cameras.main.setBackgroundColor('0x4F7C6F');

        this.add.rectangle(
        this.scale.width / 2,
        this.scale.height / 2,
        this.scale.width * 0.85,
        this.scale.height * 0.75,
        0xF7F7F7
        ).setOrigin(0.5);
        
        this.add.text(this.scale.width/2, this.scale.height/2.3, "PACKING", {
                fontFamily: 'Pixelify Sans',
                fontSize: '250px',
                color: '#2E2A26',
                fontStyle: 'bold'
            }
        ).setOrigin(0.5);

         this.add.text(this.scale.width/2, this.scale.height/1.75, "Inspired by Unpacking!", {
                fontFamily: 'Pixelify Sans',
                fontSize: '50px',
                color: '#595959',
            }
        ).setOrigin(0.5);

        this.add.rectangle(this.scale.width/2, this.scale.height/1.4, this.scale.width * 0.25, this.scale.height * 0.1, 0x7FAE7F);
        this.add.text(this.scale.width/2, this.scale.height/1.4, "start game", {
                fontFamily: 'Pixelify Sans',
                fontSize: '55px',
                color: '#000000',
            }
        ).setOrigin(0.5)

        //if you click on rectangle or the text, start the game
        this.add.zone(this.scale.width/2, this.scale.height/1.4, this.scale.width * 0.25, this.scale.height * 0.1)
            .setOrigin(0.5)
            .setInteractive()
            .on('pointerdown', () => this.scene.start('bedroom')
        );
        
        
    }

}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    preload() {
    }
    create() {
        this.cameras.main.setBackgroundColor('0x4F7C6F');

        this.add.rectangle(
        this.scale.width / 2,
        this.scale.height / 2,
        this.scale.width * 0.85,
        this.scale.height * 0.75,
        0xF7F7F7
        ).setOrigin(0.5);
        
        this.add.text(this.scale.width/2, this.scale.height/2.3, "Thank You\nfor Playing!", {
                fontFamily: 'Pixelify Sans',
                fontSize: '200px',
                color: '#2E2A26',
                fontStyle: 'bold',
                align: 'center'
            }
        ).setOrigin(0.5);

        this.add.rectangle(this.scale.width/3, this.scale.height/1.38, this.scale.width * 0.2, this.scale.height * 0.1, 0x7FAE7F);
        this.add.text(this.scale.width/3, this.scale.height/1.38, "restart", {
                fontFamily: 'Pixelify Sans',
                fontSize: '55px',
                color: '#000000',
            }
        ).setOrigin(0.5)

        this.add.rectangle(this.scale.width/1.5, this.scale.height/1.38, this.scale.width * 0.2, this.scale.height * 0.1, 0x7FAE7F);
        this.add.text(this.scale.width/1.5, this.scale.height/1.38, "credits", {
                fontFamily: 'Pixelify Sans',
                fontSize: '55px',
                color: '#000000',
            }
        ).setOrigin(0.5)


        this.add.zone(this.scale.width/3, this.scale.height/1.38, this.scale.width * 0.2, this.scale.height * 0.1)
            .setOrigin(0.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.cameras.main.fadeOut(1000, 0, 0, 0);
                this.time.delayedCall(1000, () => {
                    this.scene.start('intro');
            });
        });

        this.add.zone(this.scale.width/1.5, this.scale.height/1.38, this.scale.width * 0.2, this.scale.height * 0.1)
            .setOrigin(0.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.cameras.main.fadeOut(1000, 0, 0, 0);
                this.time.delayedCall(1000, () => {
                    this.scene.start('credits');
            });
        });
    }
}

class Credits extends Phaser.Scene {
    constructor() {
        super('credits');
    }
    create() {
        this.cameras.main.setBackgroundColor('0x4F7C6F');
        
        this.add.rectangle(
        this.scale.width / 2,
        this.scale.height / 2,
        this.scale.width * 0.85,
        this.scale.height * 0.75,
        0xF7F7F7
        ).setOrigin(0.5);

        this.add.text(this.scale.width/6, this.scale.height/5.8, "Credits:", {
                fontFamily: 'Pixelify Sans',
                fontSize: '70px',
                color: '#2E2A26',
            }
        ).setOrigin(0.5);

        this.ClickLinks = (x, y, label, url) => {
            let linkText = this.add.text(x, y, label + "\n" + url, {
                fontFamily: 'Pixelify Sans',
                fontSize: '25px',
                color: '#2E2A26'
            })
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

            linkText.on('pointerdown', () => window.open(url, '_blank'));
        };

        this.ClickLinks(this.scale.width/3.5, this.scale.height/4, 
            "Furniture Pack by Sierra Assets", 
            "https://sierrassets.itch.io/pixel-art-furniture-pack");

        this.ClickLinks(this.scale.width/4.2, this.scale.height/3, 
            "Furniture Asset Pack by Manjar Craft", 
            "https://manjarcraft.itch.io/furniture");

        this.ClickLinks(this.scale.width/2.8, this.scale.height/2.4,
            "Level Up 03 SFX by Universfield",
            "https://pixabay.com/sound-effects/film-special-effects-level-up-03-199576/"
        );

        this.ClickLinks(this.scale.width/2.31, this.scale.height/1.9,
            "BGM by OpenMindAudio",
            "https://pixabay.com/sound-effects/musical-podcast-stinger-calm-professional-transition-469111/");

        this.add.text(this.scale.width/2.58, this.scale.height/1.6, 
            "Background images, windows, bedroom bed, and bedroom sidetable drawn by Alicia Zhang\n(Drawn in Procreate)", {
                fontFamily: 'Pixelify Sans',
                fontSize: '25px',
                color: '#2E2A26',
            }
        ).setOrigin(0.5);

        this.add.rectangle(this.scale.width/6, this.scale.height/1.38, this.scale.width * 0.1, this.scale.height * 0.07, 0x7FAE7F);
        this.add.text(this.scale.width/6, this.scale.height/1.38, "restart", {
                fontFamily: 'Pixelify Sans',
                fontSize: '30px',
                color: '#000000',
            }
        ).setOrigin(0.5)

       this.add.zone(this.scale.width/6, this.scale.height/1.38, this.scale.width * 0.1, this.scale.height * 0.07)
            .setOrigin(0.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.cameras.main.fadeOut(1000, 0, 0, 0);
                this.time.delayedCall(1000, () => {
                    this.scene.start('intro');
            });
        });
 
    }

}

const game = new Phaser.Game({
    pixelArt: true,
    roundPixels: true,
    
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
    },
    //scene: [Intro, Bedroom, Bathroom, Kitchen, LivingRoom, Outro, Credits],
    scene: [Credits],
    title: "Unpacking",
});

