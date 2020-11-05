/**
 * 
 * Bugs list App
 * 
 * 1. Add a bug
 * 2. Delete a bug in the list
 * 3. Mark as resolved
 * 
 * Design the store
 * Define the actions
 * Create a reducer
 * Set up the store
 * 
 * Good practices:
 *  src/
 *    store/
 *      feature/
 *         actions.js
 *         actionTypes.js
 *         reducer.js
*/

import configureStore from "./snippets/store/configureStore";
import { addBug, removeBug, resolveBug } from "./snippets/store/bugs";

// We can also use import * as actions from './snippets/store/bugs'
// In big modules this is not recommended for performance issues

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// Let's have fun!!
store.dispatch(addBug("The first one"));
store.dispatch(addBug("The second one"));
store.dispatch(addBug("The third one"));
store.dispatch(resolveBug(3));
store.dispatch(removeBug(2));

unsubscribe()
