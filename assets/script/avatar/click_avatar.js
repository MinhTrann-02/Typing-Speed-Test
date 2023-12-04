let Module = require("module_avatar");

cc.Class({
    extends: cc.Component,

    properties: {
        avatarSprite: [cc.Sprite],
        dialogAvatar: cc.Node,
        buttonSignUp: cc.Button,
        nameEditBox: cc.EditBox,
        buttonEdit: cc.Sprite,
        _isClick: false
    },

    onLoad() {
        this.buttonEdit.node.on(cc.Node.EventType.TOUCH_END, this.onDialogAvatar, this);
    },

    update() {
        this.updateAvatar();
    },

    onDialogAvatar() {
        if (!this._isClick) {
            this.dialogAvatar.active = true;
            this.buttonSignUp.enabled = false;
            this.nameEditBox.enabled = false;
            this._isClick = true;
        } else {
            this.dialogAvatar.active = false;
            this.buttonSignUp.enabled = true;
            this.nameEditBox.enabled = true;
            this._isClick = false;
        }
    },

    updateAvatar() {
        if (Module.getSharedValue() != '') {
            let selectedAvatar = Module.getSharedValue();
            let length = this.avatarSprite.length;

            for (let i = 0; i < length; i++) {
                let avatar = this.avatarSprite[i].spriteFrame.name;
                let active = this.avatarSprite[i].node.active;

                if (avatar == selectedAvatar) {
                    if (!active) {
                        this.avatarSprite[i].node.active = true;
                        for (let j = 0; j < length; j++) {
                            if (j !== i) {
                                this.avatarSprite[j].node.active = false;
                            }
                        }
                    }
                    else return;
                }
            }
            this.buttonSignUp.enabled = true;
            this.nameEditBox.enabled = true;
        }
        this._isClick = false;
    },
});
