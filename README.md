A simple adventure game by Alicia Zhang based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: Bedroom, Bathroom, Kitchen and LivingRoom.
- **2+ scenes *not* based on `AdventureScene`**: Intro, Outro, and Credits
- **2+ methods or other enhancements added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: pickup - This method allows the players to pick up an object, which adds it to the inventory, displays a message, and performs an animation that destroys the object after. Additionally, it plays a sound when the object is clicked on. This simplified my adventure scenes a lot since my whole demo focuses on finding items to pick up. This method combines all the actions, which is also convenient because I wanted all these different actions to happen at the same time, based on one action (clicking on the object).
      
    - Enhancement 2: addHover - This method adds an up and down animation to objects when the player hovers over them. This method adds more movement to my demo and makes it obvious to players which items they need to interact with to move onto the next room.

Experience requirements:
- **4+ locations in the game world**: Bedroom, Bathroom, Kitchen and LivingRoom
- **2+ interactive objects in most scenes**: In the Bedroom location, players can click on the lamp and computer to put them in the inventory. In the Living Room, players need to click on three paintings and an easel to add them to the inventory.
- **Many objects have `pointerover` messages**: At each location, there is a door that is locked, and when players hover, it tells them it is locked. When the door is unlocked, the hover displays a message that the door is now unlocked. For interactive objects, they all have a hover message that displays what the object is.
- **Many objects have `pointerdown` effects**: When players click on interactive objects, they display a message that they packed the object up. When the door is locked, and players try to click on it, a message is displayed telling them that the door is locked and they still need to pack up small items. Additionally, interactive objects are animated and are destroyed once clicked on since they are added to the inventory.
- **Some objects are themselves animated**: All interactive objects in the game world locations are animated to move up and down when hovered over. When clicked on, the objects will fade upwards and be destroyed.

Asset sources:
- [SierraAssets Furniture Pack by Sierra Assets](https://sierrassets.itch.io/pixel-art-furniture-pack) - Used for pixel furniture assets.
- [Furniture Asset Pack by Manjar Carft](https://manjarcraft.itch.io/furniture) - Used for pixel furniture assets.
- [Level Up 03 by Universfield](https://pixabay.com/sound-effects/film-special-effects-level-up-03-199576/) - Used for object pick up SFX.
- [Podcast Stinger – Calm Professional Transition by OpenMindAudio](https://pixabay.com/sound-effects/musical-podcast-stinger-calm-professional-transition-469111/) - Used for demo background music.
- Background images, windows, bedroom bed, and bedroom side table drawn by Alicia Zhang - Images were drawn on Procreate.

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.
