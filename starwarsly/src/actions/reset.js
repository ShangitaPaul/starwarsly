/* Actions for reseting specific data related to the appication state, and/or resetting the whole Redux store.*/  
import { RESET_ALL } from "./types";


function resetAll() {
  return { type: RESET_ALL }
}


export { resetAll }