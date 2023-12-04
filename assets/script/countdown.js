cc.Class({
    extends: cc.Component,

    properties: {
        circleNode: cc.Sprite,
        timeLabel: cc.Label,
        textInput: cc.EditBox,
        resultNode: cc.Node,
        speedTestNode: cc.Node,
        _time: 0,
        _count: 3600,
        _startCountdown: false
    },

    onLoad() {
        this.textInput.node.on('text-changed', this.onTextChanged, this);
        this.circleNode.type = 3;
        this.circleNode.fillType = 2;
        this.circleNode.fillCenter.x = 0.5;
        this.circleNode.fillCenter.y = 0.5;
        this.circleNode.fillStart = 0.25;
        this.circleNode.fillRange = 1;
    },

    onTextChanged() {
        this._startCountdown = true;
    },

    update(dt) {
        if (this._time == 0) {
            this.speedTestNode.active = false;
            this.resultNode.active = true;
        } else {
            if (this._time > 0 && this._startCountdown) {
                this.circleNode.fillRange -= dt / 60;
                if (this._count % 60 == 0) {
                    this.timeLabel.string = this._time;
                    this._time--;
                }
                if (this._count < 3600) this.circleNode.node.color = cc.Color.GREEN;
                if (this._count <= 3600 * 0.4) this.circleNode.node.color = cc.Color.YELLOW;
                if (this._count <= 3600 * 0.1) this.circleNode.node.color = cc.Color.RED;
                this._count--;
            }
        }

    }
});
