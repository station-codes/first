// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        playerBullet: {
            default: null,
            type: cc.Prefab
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {


        //cc.director.getPhysics3DManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;

        this.node.on(cc.Node.EventType.MOUSE_MOVE, (event)=>{         
            this.node.getChildByName("myCapsule").setPosition( event.getLocationX()-(960/2), event.getLocationY()-(640/2) );
        });
        this.node.on(cc.Node.EventType.MOUSE_DOWN,(event)=>{
            console.log("shoot with ship");
            event.bubbles = true; // Handled event don't let it propogate!

            // generate a new node in the scene with a preset template
            var newStar = cc.instantiate(this.playerBullet);
             // put the newly added node under the Canvas node
            this.node.addChild(newStar);
            // set up a random position for the star
            newStar.setPosition(this.node.getChildByName("myCapsule").getPosition());
    
        });
    },

    start () {

    },

    update (dt) {



    },
});
