Template.recipe.recipe = function() {
  return Recipes.findOne(Session.get('currentRecipe'));
};