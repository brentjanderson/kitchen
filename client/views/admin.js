Template.admin.categories = function() {
  return Categories.find();
};

Template.admin.units = function() {
  return Units.find();
};

Template.admin.events({
  'click a span.unit': function(e) {
    var self = this;
    bootbox.confirm('Are you sure you want to delete the unit "'+ this.name +'"?', function(tf) {
      if (tf) {
        Units.remove(self._id);
      }
    });
  },
  'click a span.category': function(e) {
    var self = this;
    bootbox.confirm('Are you sure you want to delete the category "'+ this.name +'"?', function(tf) {
      if (tf) {
        Categories.remove(self._id);
      }
    });
  },
  'click a.createUnit': function(e) {
    bootbox.prompt("What's the name of this new unit?", function(result) {
      if (result) {
        Units.insert({name: result});
      }
    });
  },
  'click a.createCategory': function(e) {
    bootbox.prompt("What's the name of this new category?", function(result) {
      if (result) {
        Categories.insert({name: result});
      }
    });
  }
});