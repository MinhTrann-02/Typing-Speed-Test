let Module = require("module_infor");

cc.Class({
    extends: cc.Component,

    properties: {
        wpmLabel: cc.Label,
        accuracyLabel: cc.Label,
        correctWordsLabel: cc.Label,
        wrongWordsLabel: cc.Label,
    },

    onLoad(){
        let countTrue = Module.getKeyValue('countTrue');
        let countFalse = Module.getKeyValue('counFalse');
        let accuracy = countTrue / (countTrue + countFalse) * 100;
        this.wpmLabel.string = countTrue + ' WPM';
        this.accuracyLabel.string = 'Accuracy: ' + Math.round(accuracy) + '%';
        this.correctWordsLabel.string = 'Correct words: ' + countTrue;
        this.wrongWordsLabel.string = 'Wrong words: ' + countFalse;
    }
});
