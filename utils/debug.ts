const debug = (...args: unknown[]) => {
    if (process.env.DEBUG) {
        console.log('[DEBUG]', ...args);
    }
}

export default debug;