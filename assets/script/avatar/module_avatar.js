module.exports = {
    sharedValue: '',
    setSharedValue(newValue) {
        this.sharedValue = newValue;
    },
    getSharedValue() {
        return this.sharedValue;
    },
};
