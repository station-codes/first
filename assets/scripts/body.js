
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
        var titleNode = new cc.Node('title');
        var titleLabel = titleNode.addComponent(cc.Label);
        titleLabel.string = this.node.name;
        titleNode.y = this.node.height/2 - 30;
        titleNode.x = -this.node.width/2 + 30;
        //this.node.addChild(titleNode);
    },

    start () {

    },

    // update (dt) {},
});
