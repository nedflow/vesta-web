VestaWeb.Router.map ->
  @resource 'colors', ->
    @resource 'color', { path: ':color_id' }
