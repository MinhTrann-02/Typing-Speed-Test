let Module = require("module_infor");

cc.Class({
    extends: cc.Component,

    properties: {
        sceneLogin: cc.Node,
        sceneSpeedTest: cc.Node,
        nameEditBox: cc.EditBox,
        errorLabel: cc.Label,
        avatars: [cc.Sprite],
    },

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onCLickLogin, this);
    },

    onCLickLogin() {
        let active = this.nameEditBox.textLabel.node.active;
        let string = this.nameEditBox.textLabel._string;
        if (active || string != "") {
            let dataForm = { avatar: this.spriteFrame(), username: string };
            Module.setSharedData(dataForm);
            this.sceneLogin.active = false;
            this.sceneSpeedTest.active = true;
        } else {
            this.errorLabel.node.active = true;
        }
    },

    spriteFrame() {
        let lenght = this.avatars.length;
        for (let i = 0; i < lenght; i++) {
            let active = this.avatars[i].node.active;
            let spriteFrame = this.avatars[i]._spriteFrame._name;
            if (active) return spriteFrame;
        }
    }
});
