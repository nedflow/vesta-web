VestaWeb.ColorRoute = Ember.Route.extend({
  model: function(params) {
    colors = [
      {id: '1', color: 'red'},
      {id: '2', color: 'yellow'},
      {id: '3', color: 'blue'}
    ];
    return colors.findBy('id', params.color_id);
  }
});
