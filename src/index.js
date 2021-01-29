export const config = {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true
}

// cache where we will store all the nodes to lock
export const cache = new WeakMap()

/**
 * @param {HTMLElement} node - DOM node to lock
 * @returns {function(): void} Mutation observer disconnect function
 */
export function lock(node) {
  // disconnect the observer and unlock the DOM node
  const disconnect = () => callback.disconnect()
  // function called to restore the old node HTML
  const restore = () => {
    // get the clone node
    const clone = cache.get(node)
    // replace the impure node target of a DOM update somewhere in the application
    node.parentNode.replaceChild(clone, node)
    // update the disconnect function
    callback.disconnect = lock(clone)
  }
  // callback called on any node change
  const callback = () => {
    // stop the observer
    disconnect()
    // restore asynchronously the old HTML
    requestAnimationFrame(restore)
  }

  // store the DOM node received into the cache
  // we clone it deep with its children in order to keep it pristine
  cache.set(node, node.cloneNode(true))

  // instantiate the mutation observer
  const observer = new MutationObserver(callback)

  // start observing the changes
  observer.observe(node, config)
  // store the disconnect method as static method of the callback function
  callback.disconnect = observer.disconnect

  return disconnect
}
