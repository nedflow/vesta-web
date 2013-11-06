VestaWeb.ColorRoute = Ember.Route.extend
  model: (params) ->
    [
      {id: '1', color: 'red'},
      {id: '2', color: 'yellow'},
      {id: '3', color: 'blue'}
    ].findBy('id', params.color_id)
