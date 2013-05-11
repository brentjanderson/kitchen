Meteor.Router.add({
  '/': 'recipes',
  '/recipe/:id': function(id) {
    Session.set('currentRecipe', id);
    return 'recipe';
  },
  '/addRecipe': 'createRecipe',
  
  '*': 'fourOhFour'
});