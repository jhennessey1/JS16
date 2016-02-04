var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
}

FoodItem.prototype.stringify = function() {
	return ("Name: " + this.name + ". Calories: " + this.calories + ". Vegan: " + this.vegan + ". Gluten Free: " + this.glutenFree + ". Citrus Free: " + this.citrusFree + ".")
}

var pineapple = new FoodItem('Whole Pineapple', 452, true, true, false)

var potato = new FoodItem('Whole Potato', 163, true, true, true)

var chicken = new FoodItem('Chicken Breast', 231, false, true, true)

// console.log(pineapple.stringify())
// console.log(potato.stringify())
// console.log(chicken.stringify())

var Drink = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
}

var Plate = function(name, description, price, ingredients) {
	Plate.call(this, name, description, price, ingredients)
}

var Order = function(plates) {
	this.plates = plates;
}

var Menu = function(plates) {
	Order.call(this, plates)
}

var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
}

var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
}

Drink.prototype.stringify = function() {
	return ("Name: " + this.name + ". Description: " + this.description + ". Price: $" + this.price + ". Ingredients: " + this.ingredients + ".")
}

Plate.prototype = new Drink()

Order.prototype.stringify = function() {
	for(plate in plates) {
		return plate.prototype.stingify()
	}
}

Menu.prototype = new Order()

Restaurant.prototype.stringify = function() {
	return ("Name: " + this.name + ". Description: " + this.description + ". Menu: " + menu.stringify() + ".")
}

Customer.prototype.stringify = function() {
	return ("Dietary Preference: " + this.dietaryPreference + ".")
}

Plate.prototype.isVegan = function() {
	for(item in ingredients) {
		if(!item.vegan) {
			return false
		}
	}
	return true
}

Plate.prototype.isGlutenFree = function() {
	for(item in ingredients) {
		if(!item.glutenFree) {
			return false
		}
	}
	return true
}

Plate.prototype.isCitrusFree = function() {
	for(item in ingredients) {
		if(!item.citrusFree) {
			return false
		}
	}
	return true
}

var tortilla = new FoodItem('Tortilla', 300, true, false, true)

var rice = new FoodItem('Rice', 210, true, false, true, true)

var beans = new FoodItem('Beans', 120, true, true, true)

var meat = new FoodItem('Meat', 180, false, true, true)

var burritoPlate = new Plate('Burrito', 'Rice, beans, and meat in a tortilla', 9, [rice, beans, meat, torilla])

var avocado = new FoodItem('Avocado', 230, true, true, true)

var guacamole = new Plate('Guacamole', 'Mashed avocado', 5, [avocado])

var tequila = new FoodItem('Tequila', 68, true, true, false)

var limeJuice = new FoodItem('Lime Juice', 90, true, true, false)

var margarita = new Drink('Margarita', 'Tequila and Lime Juice', 7, [tequila, limeJuice])









