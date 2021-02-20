/**
 * 
 * Store time!!
 * 
 * store: {
 *  bugs: [
 *    {
 *      description: string,
 *      id: number,
 *      isResolved: boolean
 *    },
 *  ]
 * }
 * 
 */

import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./bugs";

export default function configureStore() {
  const store = createStore(reducer, devToolsEnhancer({ trace: true }));
  return store;
}