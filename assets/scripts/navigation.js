cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    onKeyDown: function(event){
        console.log(this.node.name);
        
        switch(event.keyCode){
            case cc.macro.KEY.f1:{
                if(this.node.name != 'title'){
                    cc.director.loadScene('title');
                }
                break;
            }
            case cc.macro.KEY.f2:{
                if(this.node.name != 'game'){
                    cc.director.loadScene('game');
                }
                break;
            }
            case cc.macro.KEY.f3:{
                if(this.node.name != 'settings'){
                    cc.director.loadScene('settings');
                }
                break;
            }
            case cc.macro.KEY.f4:{
                if(this.node.name != 'credits'){
                    cc.director.loadScene('credits');
                }
                break;
            }
            default:{
                console.log('press f1 to f4 to change screens');
                break;  
            }     
        }  
    },

    start () {

    },

    // update (dt) {},
});
