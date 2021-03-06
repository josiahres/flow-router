import { Meteor }    from 'meteor/meteor';
import Router        from './router.js';
import Route         from './route.js';
import Group         from './group.js';
import Triggers      from './triggers.js';
import BlazeRenderer from './renderer.js';
import helpersInit   from './active.route.js';

const FlowRouter = new Router();
FlowRouter.Router = Router;
FlowRouter.Route = Route;

// Initialize FlowRouter
Meteor.startup(() => {
  if(!FlowRouter._askedToWait && !FlowRouter._initialized) {
    FlowRouter.initialize();
  }
});

const RouterHelpers = helpersInit(FlowRouter);

export { FlowRouter, Router, Route, Group, Triggers, BlazeRenderer, RouterHelpers };
