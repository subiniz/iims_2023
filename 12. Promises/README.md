# Promise
Promise in layman terms-Dinner Scenario.

- Consider a scenario where you and your roommate want to have dinner at home.
- You want to prepare your special soup.
- At the same time，you feel like having tacos from the food truck nearby.
- You ask your roommate，"Hey, can you go down to the food truck and get us some tacos?".
- When he is about to leave，you tell him
  - "There is no point in me waiting till you're back to prepare the soup. So I'll start with the soup now but when you reach the place，can you promise that you'll text me so I can start setting up the dining table?"
  - "Also let me know if something goes wrong. If you can't find the food truck or if they are out of tacos for the night. Let me know that you can't get the tacos and I'll start cooking some pasta instead."
- Your friend says "Sure，I promise. I'll head out now and text you in some time."
- Now，you go about preparing your soup but the status on tacos？We can say that it is currently pending till you receive that message from your friend.
- When you get back a text message saying that he is getting the tacos，your desire to eat tacos has been fulfilled. You can then proceed to set up the table.
- If the text message says that he can't bring back any tacos，your desire to have tacos have been rejected and you now to cook some pasta instead Promise.


# Promise in JavaScript
A promise is simply an object in js that represents the eventual completion or failure of an asynchronous operation. A promise is in one of these states:
- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

# Promise concept according to above scenario
| Dinner Scenario | Javascript |
| ------ | ------ |
| 1. Your Friend | 1. Promise |
| 2. Can/Can't get tacos | 2. Promise Value |
| 3. Can get tacos | 3. Promise fulfilled |
| 4. Can't get tacos | 4. Promise rejected |
| 5. Set up the table | 5. Success callback |
| 6. Prepare Pasta| 6. Failure callback |

# Why Promises?
- Callbacks are not the best way to handle asynchronous operations in JavaScript.
- Callbacks are not easy to read and maintain.
- Callbacks are not easy to debug.
- Callbacks are not easy to chain.
- Callbacks are not easy to handle errors.
- Callbacks are not easy to handle multiple asynchronous operations.

# How to work with Promises?
- Promise is a constructor function.
- Promise takes a function as an argument.
- The function takes two parameters, resolve and reject.
- The resolve and reject are functions.
- The resolve function is called when the asynchronous operation is successful.
- The reject function is called when the asynchronous operation is unsuccessful.
- The resolve and reject functions take one argument each.
- The argument passed to the resolve function is the value that the promise is resolved with.
- The argument passed to the reject function is the value that the promise is rejected with.
- The resolve and reject functions are called only once.
- The resolve and reject functions are called asynchronously.

# Syntax
- How to create a Promise?
- How to fulfill or reject a Promise?
- How to handle a fulfilled Promise?
- How to handle a rejected Promise?
