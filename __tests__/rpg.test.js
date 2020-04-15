import { Character } from "./../src/rpg.js";

describe ('Character', () => {
  test('should create a character with a name, empty inventory, character class, experience points of 0, level 1, and first power', () => {
    let character = new Character (userName, userClass, userPower);
    expect(character.name).toEqual(userName);
    expect(character.class).toEqual(userClass);
    expect(character.power).toEqual([userPower]);
  });
});