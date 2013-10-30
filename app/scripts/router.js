VestaWeb.Router.map(function () {
  this.resource('colors', function() {
    this.resource('color', { path: ':color_id' });
  });
});
