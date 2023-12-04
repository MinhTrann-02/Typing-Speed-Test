let Module = require("module_infor");

cc.Class({
    extends: cc.Component,

    properties: {
        userNameLabel: cc.Label,
        avatarSprite: [cc.Sprite]
    },

    onLoad() {
        this.loadAvatar();
        let userName = Module.getKeyValue('username');
        this.userNameLabel._string = userName;
    },

    loadAvatar(){
        let length = this.avatarSprite.length;
        let loadAvatar = Module.getKeyValue('avatar');
        for (let i = 0; i < length; i++) {
            let avatar = this.avatarSprite[i].spriteFrame.name;
            let active = this.avatarSprite[i].node.active;
            if (avatar == loadAvatar) {
                if (!active) {
                    this.avatarSprite[i].node.active = true;
                }
                else return;
            }
        }
    }
});
