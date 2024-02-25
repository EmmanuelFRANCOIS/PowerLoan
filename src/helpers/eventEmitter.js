// EventEmitter.js
/**
 * A simple event emitter class that allows objects to subscribe to,
 * emit, and unsubscribe from events.
 * @private
 */
class EventEmitter {
  /**
   * Constructs the EventEmitter instance.
   */
  constructor() {
    this.listeners = {};
  }

  /**
   * Registers an event listener for the specified event.
   * @param {string} event - The name of the event to listen for.
   * @param {Function} listener - The callback function to register.
   */
  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  /**
   * Removes an event listener for the specified event.
   * @param {string} event - The name of the event to remove the listener for.
   * @param {Function} listener - The callback function to remove.
   */
  off(event, listener) {
    if (!this.listeners[event]) return;
    const index = this.listeners[event].indexOf(listener);
    if (index > -1) {
      this.listeners[event].splice(index, 1);
    }
  }

  /**
   * Emits an event, calling all registered listeners for this event.
   * @param {string} event - The name of the event to emit.
   * @param {...any} args - Arguments to pass to the event listeners.
   */
  emit(event, ...args) {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}

export default EventEmitter;
