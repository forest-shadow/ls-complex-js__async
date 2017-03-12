function timer(fullfilledTime) {
    return new Promise( (resolve,reject) => {
        setTimeout(
            () => {
                resolve(fullfilledTime);
            },
            fullfilledTime
        );
    });
}
module.exports = {timer};