let Module = require("module_infor");

cc.Class({
    extends: cc.Component,

    properties: {
        label: cc.Label,
        labelInput: cc.EditBox,
        hintLabel: cc.Label,
        _countSpace: 0,
        _numberLabel: 0,
        _labels: [],
        _isSpace: false,
        _countTrue: 0,
        _counFalse: 0
    },

    onLoad() {
        this.labelInput.focus();
        this.labelInput.node.on('text-changed', this.onEditingDidBegin, this);
        let text = 'filet mignon ribeye shoulder turkey fatback tail pig buffalo salami turducken ribeye jerky short loin';
        this._labels = text.trim().split(/\s+/);
        this.label.string = text;
        this.hintLabel.string = this._labels[0];
    },

    onEditingDidBegin(event) {
        let content = event.string;
        if (content.includes(' ')) {
            this.hintLabel.string = this._labels[this._numberLabel + 1];
            if (this.removeSpace(content) == this._labels[this._numberLabel]) {
                this._countTrue++;
            } else {
                this._counFalse++;
            }
            this._numberLabel++;
            this._isSpace = true;
        }
    },

    update() {
        if (this._isSpace) {
            this.labelInput.string = '';
            this.labelInput.blur();
            this.labelInput.focus();
            this._isSpace = false;

            let dataForm = {
                countTrue: this._countTrue,
                counFalse: this._counFalse,
            }
            Module.setSharedData(dataForm);
        }
    },

    removeSpace(text) {
        return text.replace(/\s/g, '');
    }
});