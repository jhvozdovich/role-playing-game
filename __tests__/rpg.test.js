import { Character } from "./../src/rpg.js";
import { Item } from "./../src/rpg.js";
import { Power } from "./../src/rpg.js";
import { Enemy } from "./../src/rpg.js";

describe ('Character', () => {
  test('should create a character with a name, empty inventory, character class, experience points of 0, level 1, and first power', () => {
    let character = new Character ("Jessica", "Wizard", "Magic Missle");
    expect(character.name).toEqual("Jessica");
    expect(character.class).toEqual("Wizard");
    expect(character.power).toEqual(["Magic Missle"]);
  });
});

describe ("Pick Up Item", () => {
  test("should add a new item to the inventory if a player is holding less than five items", () => {
    let jessica = new Character ("Jessica", "Wizard", "Magic Missle");
    let sword = new Item ("Sword", "Damage", 5);
    jessica.pickUpItem(sword);
    expect(jessica.inventory).toEqual([sword]);
  });
});

// describe ("Attack Enemy - Weapon", () => {
//   test("should reduce health of enemy with the character's strength plus the weapon's damage", () => {
//     let jessica = new Character ("Jessica", "Wizard", "Magic Missle");
//     let sword = new Item ("Sword", "Damage", 5);
//   })
// })


// Character.prototype.attackEnemyWeapon = function(enemy, item) { 
//   if (item.effect === "damage") {
//     enemy.health -= (item.strength + this.strength);
//   }
// };

// Character.prototype.attackEnemyPower = function(enemy, power) { 
//   if(enemy.weakness === power.type) {
//     enemy.health -= ((power.strength * 2) + this.strength);
//   } else {
//     enemy.health -= (power.strength + this.strength);
//   } 
// };

describe('Item', () => {
  test('should create an item object with name and effect', () => {
    let item = new Item("Sword", "Damage", 5);
    expect(item.name).toEqual("Sword");
    expect(item.effect).toEqual("Damage");
    expect(item.strength).toEqual(5);
  }); 
});
  
describe('Power', () => {
  test('should create a power object with name and damage', () => {
    let power = new Power("Magic Missle", 5, "fire");
    expect(power.name).toEqual("Magic Missle");
    expect(power.damage).toEqual(5);
    expect(power.type).toEqual("fire");
  });
});

describe('Enemy', () => {
  test("should create an ememy with a name, health, and weakness", () => {
    let goblin = new Enemy("goblin", 11, "fire");
    expect(goblin.name).toEqual("goblin");
    expect(goblin.health).toEqual(11);
    expect(goblin.weakness).toEqual("fire");
  });
});




