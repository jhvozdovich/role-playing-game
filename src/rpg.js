export function Character(userName, userClass, userPower) {
  this.name = userName;
  this.class = userClass;
  this.inventory = [];
  this.power = [userPower];
  this.experience = 0;
  this.level = 1;
}

Character.prototype.pickUpItem = function(item) {
  // if(this.inventory.length <= 5) {
  //   this.inventory.push(item);
  // } else {
  //   console.log("You have too many items! Drop one!");
  // }
};

export function Item(itemName, itemEffect) {
  this.name = itemName;
  this.effect = itemEffect;
}

export function Power(namePower, damagePower) {
  this.name = namePower;
  this.damage = damagePower;
}




  


  

