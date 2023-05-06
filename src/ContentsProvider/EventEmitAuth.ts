class EventEmitter {// @ts-ignore
    private events: {};
constructor() {
  this.events={};
}

    /**
     * @param {string} eventName
     * @param {Function} callback
     */
     on(eventName:string, callback):void {
        !this.events[eventName] && (this.events[eventName] = []);
        this.events[eventName].push(callback);
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     */
    off(eventName:string, callback):void {
        this.events[eventName] = this.events[eventName].filter(eventCallback => callback !== eventCallback);
    }

    /**
     * @param {string} eventName
     * @param {any} args
     */
  emit(eventName:string, args):void {
        const event = this.events[eventName];
        event && event.forEach(callback => callback.call(null, args));
    }
}
const eventEmitAuth=new EventEmitter()
export default eventEmitAuth;