let Module = require("module_avatar");

cc.Class({
    extends: cc.Component,

    properties: {
        avatarSprite: cc.Sprite,
        boxAvatar: cc.Node
    },

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onSelectedAvatar, this);
    },

    onSelectedAvatar() {
        this.boxAvatar.active = false;
        let spriteFrame = this.avatarSprite.spriteFrame.name;
        Module.setSharedValue(spriteFrame);
    }
});