Tinytest.add('FlowRoute - constructor() - simple', function (test) {
  var context = {};

  context._clientRouter = {};
  context._clientRouter.route = function (path, options) {
    this.args = this.args || [];
    this.args.push(_.toArray(arguments));
  };

  var options = {render: 'render', subscriptions: 'subscriptions'};
  FlowRoute = FlowRouter._FlowRoute;
  FlowRoute.call(context, 'path', options);
  test.equal(context.path, 'path');
  test.equal(context.render, 'render');
  test.equal(context.subscriptions, 'subscriptions');
  test.equal(context._middleware, []);
  test.equal(context._states, new ReactiveDict);
  test.equal(context._clientRouter.args, [
    ['path', options]
  ]);
});


Tinytest.add('FlowRoute - middleware() - add middleware', function (test) {
  var context = {};
  context.path = 'path';
  context._middleware = [];

  context._clientRouter = {};
  context._clientRouter.middleware = function (middleware, options) {
    this.args = this.args || [];
    this.args.push(_.toArray(arguments));
  };

  FlowRoute = FlowRouter._FlowRoute;
  FlowRoute.prototype.middleware.call(context, 'middleware');
  test.equal(context._middleware, [
    'middleware'
  ]);
  var options = {path: 'path'};
  test.equal(context._clientRouter.args, [
    ['middleware', options]
  ]);
});