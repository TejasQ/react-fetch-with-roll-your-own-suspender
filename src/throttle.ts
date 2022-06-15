export const throttle = async (promise: Promise<any>, delayMs = 1200) => {
    console.time('started')
    await new Promise(r => setTimeout(r, delayMs));
    console.timeEnd('started')

    return promise;
}