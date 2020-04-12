// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { log } from "util";

cc.Class({
    extends: cc.Component,

    properties: {
        playerBullet: {
            default: null,
            type: cc.Prefab
        },

        playerSpotlight:{
            default: null,
            type: cc.Prefab,
        },
        enemyBullet: {
            default: null,
            type: cc.Prefab
        },
        a: {
            default: null,
            type: cc.Prefab
        },
        b: {
            default: null,
            type: cc.Prefab
        },
        c: {
            default: null,
            type: cc.Prefab
        },
        d: {
            default: null,
            type: cc.Prefab
        },
        e: {
            default: null,
            type: cc.Prefab
        },
        f: {
            default: null,
            type: cc.Prefab
        },
        g: {
            default: null,
            type: cc.Prefab
        },
        h: {
            default: null,
            type: cc.Prefab
        },
        i: {
            default: null,
            type: cc.Prefab
        },
        j: {
            default: null,
            type: cc.Prefab
        },
        k: {
            default: null,
            type: cc.Prefab
        },
        l: {
            default: null,
            type: cc.Prefab
        },
        m: {
            default: null,
            type: cc.Prefab
        },
        n: {
            default: null,
            type: cc.Prefab
        },
        o: {
            default: null,
            type: cc.Prefab
        },
        p: {
            default: null,
            type: cc.Prefab
        },
        q: {
            default: null,
            type: cc.Prefab
        },
        r: {
            default: null,
            type: cc.Prefab
        },
        s: {
            default: null,
            type: cc.Prefab
        },
        t: {
            default: null,
            type: cc.Prefab
        },
        u: {
            default: null,
            type: cc.Prefab
        },
        v: {
            default: null,
            type: cc.Prefab
        },
        w: {
            default: null,
            type: cc.Prefab
        },
        x: {
            default: null,
            type: cc.Prefab
        },
        y: {
            default: null,
            type: cc.Prefab
        },
        z: {
            default: null,
            type: cc.Prefab
        },


        firstShot: cc.Boolean,
        secondShot: cc.Boolean,


        boxes : [cc.node],
    },

    // LIFE-CYCLE CALLBACKS:

    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        console.log(array);
        
    },

    onLoad () {
        cc.director.getPhysics3DManager().enabled = true;
        cc.director.getPhysics3DManager().gravity = cc.v3(0,-1000,0);
        
        var newSpot = cc.instantiate(this.playerSpotlight);
        newSpot.name = 'newSpot';
        //this.node.addChild(newSpot);
        newSpot.setPosition(cc.Vec3(0,0,100));
        newSpot.eulerAngles = cc.v3(0, -90, 0);
        console.log('spotlight set');
        newSpot.getComponent(cc.Light);
        this.firstShot = false;
        this.secondShot = false;

        let text = ['y', 'k', 's', 'i', 'h', 'w'];

        if(cc.sys.localStorage.getItem("mode") == "hard"){
            this.shuffleArray(text);
        }

        let boxPositions = [ 
            [cc.v3(0,0,0), text[0]], 
            [cc.v3(0,100,0), text[1]], 
            [cc.v3(0,200,0), text[2]], 
            [cc.v3(0,300,0), text[3]],
            [cc.v3(0,400,0), text[4]],
            [cc.v3(0,500,0), text[5]]];

        for (let index = 0; index < boxPositions.length; index++){
            
            switch (boxPositions[index][1]) {
                case 'a':
                    var myBox = cc.instantiate(this.a);
                    break;
                case 'b':
                    var myBox = cc.instantiate(this.b);
                    break;
                case 'c':
                    var myBox = cc.instantiate(this.c);
                    break;
                case 'd':
                    var myBox = cc.instantiate(this.d);
                    break;
                case 'e':{
                    var myBox = cc.instantiate(this.e);
                    break;
                }
                case 'f':{
                    var myBox = cc.instantiate(this.f);
                    break;
                }
                case 'g':{
                    var myBox = cc.instantiate(this.g);
                    break;
                }
                case 'h':{
                    var myBox = cc.instantiate(this.h);
                    break;
                }
                case 'i':{
                    var myBox = cc.instantiate(this.i);
                    break;
                }
                case 'j':{
                    var myBox = cc.instantiate(this.j);
                    break;
                }
                case 'k':{
                    var myBox = cc.instantiate(this.k);
                    break;
                }
                case 'l':{
                    var myBox = cc.instantiate(this.l);
                    break;
                }
                case 'm':{
                    var myBox = cc.instantiate(this.m);
                    break;
                }
                case 'n':{
                    var myBox = cc.instantiate(this.n);
                    break;
                }
                case 'o':{
                    var myBox = cc.instantiate(this.o);
                    break;
                }
                case 'p':{
                    var myBox = cc.instantiate(this.p);
                    break;
                }
                case 'q':{
                    var myBox = cc.instantiate(this.q);
                    break;
                }
                case 'r':{
                    var myBox = cc.instantiate(this.r);
                    break;
                }
                case 's':{
                    var myBox = cc.instantiate(this.s);
                    break;
                }
                case 't':{
                    var myBox = cc.instantiate(this.t);
                    break;
                }
                case 'u':{
                    var myBox = cc.instantiate(this.u);
                    break;
                }
                case 'v':{
                    var myBox = cc.instantiate(this.v);
                    break;
                }
                case 'w':{
                    var myBox = cc.instantiate(this.w);
                    break;
                }
                case 'x':{
                    var myBox = cc.instantiate(this.x);
                    break;
                }
                case 'y':{
                    var myBox = cc.instantiate(this.y);
                    break;
                }
                case 'z':{
                    var myBox = cc.instantiate(this.z);
                    break;
                }
                default:
                    console.log("THIS IS NOT GOOD");
                    var myBox = cc.instantiate(this.a);
                    break;
            }
            myBox.name = boxPositions[index][1];
            this.boxes.push(myBox);
            this.node.addChild(myBox);
            myBox.setPosition(boxPositions[index][0]);
            myBox.eulerAngles = cc.v3(Math.random()*3, 0, Math.random()*3);
        
        }

        this.node.on(cc.Node.EventType.MOUSE_MOVE, (event)=>{    
        //this.node.on(cc.Node.EventType.TOUCH_MOVE, (event)=>{
            //console.log(event.getLocationX());
            this.node.getChildByName("myCapsule").setPosition( (event.getLocationX()-(960/2))*2, (event.getLocationY()-(640/2))*2 );
            //this.node.getChildByName('newSpot').setPosition( event.getLocationX()-(960/2), event.getLocationY()-(640/2) );
            //let collider = this.node.getChildByName('myCapsule').getComponent('cc.Collider3D');
            //collider.on('trigger-ender', this.onTrigger, this);
        });

        this.node.on(cc.Node.EventType.MOUSE_DOWN,(event)=>{
        //this.node.on(cc.Node.EventType.TOUCH_END,(event)=>{
            event.bubbles = true; // Handled event don't let it propogate!

            if(event.getButton() == cc.Event.EventMouse.BUTTON_LEFT){

                if(this.firstShot == false){
                    this.firstShot = true;

                    var newBullet = cc.instantiate(this.playerBullet);
                    this.node.addChild(newBullet);
                    newBullet.setPosition(this.node.getChildByName("myCapsule").getPosition()  );
                    newBullet.x += 10;
                    newBullet.getComponent(cc.RigidBody3D).applyImpulse(cc.v3(10000, 0, 0));
                }
                else if(this.secondShot == false){
                    this.secondShot = true;


                    var newBullet = cc.instantiate(this.playerBullet);
                    this.node.addChild(newBullet);
                    newBullet.setPosition(this.node.getChildByName("myCapsule").getPosition()  );
                    newBullet.x += 10;
                    newBullet.getComponent(cc.RigidBody3D).applyImpulse(cc.v3(-10000, 0, 0));
                }
                else{
                    this.firstShot = false;
                    this.secondShot = false;
                    cc.director.loadScene('game'); 
                }

            }
            else{
                cc.director.loadScene('title'); 
            }
        });


        this.schedule(function() {
            let wPos,hPos;
            
            for(let index = 0; index < this.boxes.length; index++){
            
                switch (this.boxes[index].name) {
                    case 'w':
                        wPos = this.boxes[index].position;
                        break;
                    case 'h':
                        hPos = this.boxes[index].position;
                        break;
                    case 'i':
                        var iPos = this.boxes[index].position;
                        break;
                    case 's':
                        var sPos = this.boxes[index].position;
                        break;
                    case 'k':
                        var kPos = this.boxes[index].position;
                        break;
                    case 'y':
                        var yPos = this.boxes[index].position;
                        break;
                    default:
                        break;
                }
            }
            console.log(wPos.y, hPos.y);
            
            if(wPos.x < hPos.x && hPos.x < iPos.x && iPos.x < sPos.x && sPos.x < kPos.x && kPos.x < yPos.x
                && wPos.y < -100 && hPos.y < -100 && iPos.y < -100 && sPos.y < -100 && kPos.y < -100 && yPos.y < -100){
                


                //console.log("success");

                let boxPositions = [ 
                    [cc.v3(-360,400,0), 's'], 
                    [cc.v3(-240,400,0), 'u'], 
                    [cc.v3(-120,400,0), 'c'], 
                    [cc.v3(0,400,0), 'c'],
                    [cc.v3(120,400,0), 'e'],
                    [cc.v3(240,400,0), 's'],
                    [cc.v3(360,400,0), 's']];
        
                for (let index = 0; index < boxPositions.length; index++){
                    
                    switch (boxPositions[index][1]) {
                        case 'a':
                            var myBox = cc.instantiate(this.a);
                            break;
                        case 'b':
                            var myBox = cc.instantiate(this.b);
                            break;
                        case 'c':
                            var myBox = cc.instantiate(this.c);
                            break;
                        case 'd':
                            var myBox = cc.instantiate(this.d);
                            break;
                        case 'e':{
                            var myBox = cc.instantiate(this.e);
                            break;
                        }
                        case 'f':{
                            var myBox = cc.instantiate(this.f);
                            break;
                        }
                        case 'g':{
                            var myBox = cc.instantiate(this.g);
                            break;
                        }
                        case 'h':{
                            var myBox = cc.instantiate(this.h);
                            break;
                        }
                        case 'i':{
                            var myBox = cc.instantiate(this.i);
                            break;
                        }
                        case 'j':{
                            var myBox = cc.instantiate(this.j);
                            break;
                        }
                        case 'k':{
                            var myBox = cc.instantiate(this.k);
                            break;
                        }
                        case 'l':{
                            var myBox = cc.instantiate(this.l);
                            break;
                        }
                        case 'm':{
                            var myBox = cc.instantiate(this.m);
                            break;
                        }
                        case 'n':{
                            var myBox = cc.instantiate(this.n);
                            break;
                        }
                        case 'o':{
                            var myBox = cc.instantiate(this.o);
                            break;
                        }
                        case 'p':{
                            var myBox = cc.instantiate(this.p);
                            break;
                        }
                        case 'q':{
                            var myBox = cc.instantiate(this.q);
                            break;
                        }
                        case 'r':{
                            var myBox = cc.instantiate(this.r);
                            break;
                        }
                        case 's':{
                            var myBox = cc.instantiate(this.s);
                            break;
                        }
                        case 't':{
                            var myBox = cc.instantiate(this.t);
                            break;
                        }
                        case 'u':{
                            var myBox = cc.instantiate(this.u);
                            break;
                        }
                        case 'v':{
                            var myBox = cc.instantiate(this.v);
                            break;
                        }
                        case 'w':{
                            var myBox = cc.instantiate(this.w);
                            break;
                        }
                        case 'x':{
                            var myBox = cc.instantiate(this.x);
                            break;
                        }
                        case 'y':{
                            var myBox = cc.instantiate(this.y);
                            break;
                        }
                        case 'z':{
                            var myBox = cc.instantiate(this.z);
                            break;
                        }
                        default:
                            console.log("THIS IS NOT GOOD");
                            var myBox = cc.instantiate(this.a);
                            break;
                    }
                    myBox.name = boxPositions[index][1];
                    //this.boxes.push(myBox);
                    this.node.addChild(myBox);
                    myBox.setPosition(boxPositions[index][0]);
                    myBox.eulerAngles = cc.v3(Math.random()*3, 0, Math.random()*3);
                }
            }
        }, 1);
    },


    start () {

    },

    update (dt) {
        //this.node.getChildByName('enemyCapsule').eulerAngles = cc.v3(0, 0, Date.now() / 10);
        //this.node.getChildByName('myCapsule').eulerAngles = cc.v3(Date.now() / 10, 0, 0);
    },
});
