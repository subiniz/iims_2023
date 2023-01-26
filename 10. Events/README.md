# Event-Driven Programming
Node.js uses events heavily and it is also one of the reasons why Node.js is pretty fast compared to other similar technologies. As soon as Node starts its server, it simply initiates its variables, declares functions and then simply waits for the event to occur.

In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected.

[![N|Solid](https://www.tutorialspoint.com/nodejs/images/event_loop.jpg)](https://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm)

## Event Loop
Although events look quite similar to callbacks, the difference lies in the fact that callback functions are called when an asynchronous function returns its result, whereas event handling works on the observer pattern. The functions that listen to events act as Observers. Whenever an event gets fired, its listener function starts executing. Node.js has multiple in-built events available through events module and EventEmitter class which are used to bind events and event-listeners as follows −

```
// Import events module
var events = require('events');
```

```
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
```

Following is the syntax to bind an event handler with an event −

```
// Bind event and event  handler as follows
eventEmitter.on('eventName', eventHandler);
```

We can fire an event programmatically as follows −

```
// Fire an event
eventEmitter.emit('eventName');
```