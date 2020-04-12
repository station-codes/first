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

        playerSpotlight:{
            default: null,
            type: cc.Prefab,
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

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysics3DManager().enabled = true;
        cc.director.getPhysics3DManager().gravity = cc.v3(0,0,0);
        
        var newSpot = cc.instantiate(this.playerSpotlight);
        newSpot.name = 'newSpot';
        //this.node.addChild(newSpot);
        newSpot.setPosition(cc.Vec3(0,0,100));
        newSpot.eulerAngles = cc.v3(0, -90, 0);
        console.log('spotlight set');
        newSpot.getComponent(cc.Light);


        let boxPositions = [ 
        
            [cc.v3(-360,300,0), 'l'], 
            [cc.v3(-240,300,0), 'a'], 
            [cc.v3(-120,300,0), 'g'], 
            [cc.v3(0,300,0), 'u'],
            [cc.v3(120,300,0), 'a'],
            [cc.v3(240,300,0), 'g'], 
            [cc.v3(360,300,0), 'e'], 
        
            [cc.v3(-240,150,0), 'c'], 
            [cc.v3(-120,150,0), 'h'], 
            [cc.v3(0,150,0), 'e'], 
            [cc.v3(120,150,0), 'c'],
            [cc.v3(240,150,0), 'k'],

            [cc.v3(-480,0,0), 'e'], 
            [cc.v3(-360,0,0), 'a'], 
            [cc.v3(-240,0,0), 's'], 
            [cc.v3(-120,0,0), 'y'],

            [cc.v3(120,0,0), 'h'], 
            [cc.v3(240,0,0), 'a'], 
            [cc.v3(360,0,0), 'r'], 
            [cc.v3(480,0,0), 'd'],];


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
            this.node.addChild(myBox);
            myBox.setPosition(boxPositions[index][0]);
            //myBox.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this, true);
            myBox.eulerAngles = cc.v3(Math.random()*3, 0, Math.random()*3);
        
        }

        //this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this, true);

        this.node.on(cc.Node.EventType.MOUSE_MOVE, (event)=>{         
            //his.node.getChildByName('newSpot').setPosition( event.getLocationX()-(960/2), event.getLocationY()-(640/2) );


        });

        /*
        this.node.on(cc.Node.EventType.MOUSE_DOWN,(event)=>{
            event.bubbles = true; // Handled event don't let it propogate!
            cc.director.loadScene('game');
        });
        */
        
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            if(event.getLocation().x < (960/2)){
                console.log("easy mode");
                cc.sys.localStorage.setItem("mode", "easy");
            }
            else{
                console.log("hard mode");
                cc.sys.localStorage.setItem("mode", "hard");
            }
            cc.director.getPhysics3DManager().gravity = cc.v3(0,-1000,0);
            cc.director.preloadScene("game", function () {
                cc.log("Next scene preloaded");                
            });

            this.schedule(function() {
                cc.director.loadScene('game');
            }, 1.5);
        });
        
    },

    onMouseDown: function (event) {
        cc.director.getPhysics3DManager().gravity = cc.v3(0,-1000,0);
        cc.director.preloadScene("game", function () {
            cc.log("Next scene preloaded");                
        });

        this.schedule(function() {
            cc.director.loadScene('game');
        }, 1.5);
    },

    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    gamestart(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        console.log(array);
        
    },

    start () {

    },

    update (dt) {

    },
});
