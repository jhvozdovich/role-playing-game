import { Character } from "./../src/rpg.js";

describe ('Character', () => {
  test('should create a character with a name, empty inventory, character class, experience points of 0, level 1, and first power', () => {
    let character = new Character ("Jessica", "Wizard", "Magic Missle");
    expect(character.name).toEqual("Jessica");
    expect(character.class).toEqual("Wizard");
    expect(character.power).toEqual(["Magic Missle"]);
  });
});