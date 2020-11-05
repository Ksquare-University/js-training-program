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
import reducer from "./bugs";

export default function configureStore() {
  const store = createStore(reducer);
  return store;
}