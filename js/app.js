window.DonorWall = Ember.Application.create();

DonorWall.Router.map(function() {
  this.resource('donors', { path: '/' });
});

DonorWall.DonorsRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
