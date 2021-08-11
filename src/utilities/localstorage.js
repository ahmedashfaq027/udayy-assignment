// Save login state to localstorage
export function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("browserPersistentState", serializedState);
  } catch (e) {
    console.warn(e);
  }
}

// Remove login state from localstorage
export function removeFromLocalStorage() {
  try {
    localStorage.removeItem("browserPersistentState");
  } catch (e) {
    console.warn(e);
  }
}

// Load login state from localstorage
export function loadFromLocalStorage() {
  try {
    const state = localStorage.getItem("browserPersistentState");
    if (!state) return undefined;
    return JSON.parse(state);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}
