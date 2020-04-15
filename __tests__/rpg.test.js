import { Character } from "./../src/rpg.js";
import { Item } from "./../src/rpg.js";
import { Power } from "./../src/rpg.js";

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
    let sword = new Item ("Sword", "Damage");
    jessica.pickUpItem(sword);
    expect(jessica.inventory).toEqual([sword]);
  });
});

describe('Item', () => {
  test('should create an item object with name and effect', () => {
    let item = new Item("Sword", "Damage");
    expect(item.name).toEqual("Sword");
    expect(item.effect).toEqual("Damage");
  }); 
});
  
describe('Power', () => {
  test('should create a power object with name and damage', () => {
    let power = new Power("Magic Missle", 5);
    expect(power.name).toEqual("Magic Missle");
    expect(power.damage).toEqual(5);
  });
});


