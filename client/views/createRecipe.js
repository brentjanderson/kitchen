var ingredients;
var steps;

var ingredientsDep = new Deps.Dependency;
var stepsDep = new Deps.Dependency;

var findIndex = function(a, id) {
	for (var i = a.length - 1; i >= 0; i--) {
		if (a[i]._id === id) {
			return i;
		}
	};

	return null;
}

Template.createRecipe.created = function() {
	ingredients = [{_id: Random.id() }];
	steps = [{_id: Random.id() }];
};

Template.createRecipe.ingredients = function() {
	ingredientsDep.depend();
	return ingredients;
};

Template.createRecipe.steps = function() {
	stepsDep.depend();
	return steps;
};

Template.createRecipe.units = function() {
	return Units.find();
};

Template.createRecipe.rendered = function() {
  return Meteor.defer(function() {
    var categories = Categories.find().fetch();
    $('#category').typeahead({
      source: _.pluck(categories, 'name')
    });
  });
};

Template.createRecipe.events = {
	'click .ingredient-down': function(event, template) {
		var i = findIndex(ingredients, this._id);
		var t = ingredients[i];
		
	},
	'click .ingredient-up': function(event, template) {

	},
	'click .ingredient-remove': function(event, template) {
		var i = findIndex(ingredients, this._id);
		ingredients.splice(i, 1);
		ingredientsDep.changed();
		return false;
	},
	'click .ingredient-add': function(event, template) {
		ingredients.push({_id: Random.id()});
		ingredientsDep.changed();
		return false;
	},
	'click .instruction-down': function(event, template) {
		
	},
	'click .instruction-up': function(event, template) {

	},
	'click .instruction-remove': function(event, template) {
		var i = findIndex(steps, this._id);
		steps.splice(i, 1);
		stepsDep.changed();
		return false;
	},
	'click .instruction-add': function(event, template) {
		steps.push({_id: Random.id()});
		stepsDep.changed();
		return false;
	}
};