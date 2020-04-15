export function Character(userName, userClass, userPower) {
  this.name = userName;
  this.class = userClass;
  this.inventory = [];
  this.power = [userPower];
  this.experience = 0;
  this.level = 1;
  this.strength = 5;
}

Character.prototype.pickUpItem = function(item) {
  if(this.inventory.length <= 5) {
    this.inventory.push(item);
  } else {
    console.log("You have too many items! Drop one!");
  }
};


Character.prototype.attackEnemyWeapon = function(enemy, item) { 
  if (item.effect === "damage" && this.inventory.includes(item)) {
    enemy.health -= (item.strength + this.strength);
  }
};

Character.prototype.attackEnemyPower = function(enemy, power) { 
  if(enemy.weakness === power.type) {
    enemy.health -= ((power.damage * 2) + this.strength);
  } else {
    enemy.health -= (power.damage + this.strength);
  } 
};


export function Item(itemName, itemEffect, itemStrength) {
  this.name = itemName;
  this.effect = itemEffect;
  this.strength = itemStrength;
}

export function Power(namePower, damagePower, damageType) {
  this.name = namePower;
  this.damage = damagePower;
  this.type = damageType;
}

export function Enemy(enemyName, enemyHealth, enemyWeakness) {
  this.name = enemyName;
  this.health = enemyHealth;
  this.weakness = enemyWeakness;
}


//Add type advantage for different enemies
// sword = new Item("sword", "damage", 5);
// wand = new Item("wand", "damage", 9);
// goblin = new Enemy("goblin", "fire")
// magicMissle = new Power("magic missle", 3, "fire")


  


  

