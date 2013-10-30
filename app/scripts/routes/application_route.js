VestaWeb.ApplicationRoute = Ember.Route.extend({
  // admittedly, this should be in IndexRoute and not in the
  // top level ApplicationRoute; we're in transition... :-)
  model: function () {
    return colors = [
      {id: '1', color: 'red'},
      {id: '2', color: 'yellow'},
      {id: '3', color: 'blue'}
    ];
  }
});
