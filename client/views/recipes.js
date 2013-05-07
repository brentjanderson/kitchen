Template.recipes.created = function() {
  $('.recipe-box').masonry({
    itemSelector: '.recipe',
    columnWidth: 240
  });
};

Template.recipes.recipes = function() {
  return Recipes.find();
};