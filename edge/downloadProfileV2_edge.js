/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Group',
            type:'group',
            rect:['410','24','275','336','auto','auto'],
            c:[
            {
               id:'tigeCopy',
               type:'image',
               rect:['61px','207px','103px','129px','auto','auto'],
               clip:['rect(36.52734375px 102.8499984741211px 128.8333282470703px 0px)'],
               opacity:1,
               fill:["rgba(0,0,0,0)",im+"tige.png",'0px','0px','103px','129px']
            },
            {
               id:'Daisy',
               type:'group',
               rect:['auto','1.5%','275px','275px','5.1%','auto'],
               c:[
               {
                  id:'kernel',
                  type:'image',
                  rect:['auto','13.8%','202px','202px','13.5%','auto'],
                  fill:["rgba(0,0,0,0)",im+"kernel2.png",'0px','0px']
               },
               {
                  id:'p_jotm',
                  type:'image',
                  rect:['131px','0px','100px','127px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_jotm3.png",'0px','0px']
               },
               {
                  id:'p_hibernate',
                  type:'image',
                  rect:['147px','129px','128px','98px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_hibernate3.png",'0px','0px']
               },
               {
                  id:'p_jersey',
                  type:'image',
                  rect:['132px','148px','103px','126px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_jersey3.png",'0px','0px']
               },
               {
                  id:'p_easybeans',
                  type:'image',
                  rect:['49px','148px','96px','126px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_easybeans2.png",'0px','0px']
               },
               {
                  id:'p_h2',
                  type:'image',
                  rect:['0px','132px','129px','104px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_h23.png",'0px','0px']
               },
               {
                  id:'p_jdbc',
                  type:'image',
                  rect:['134px','148px','103px','129px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_jdbc2.png",'0px','0px']
               },
               {
                  id:'p_aries',
                  type:'image',
                  rect:['1px','43px','127px','100px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_aries3.png",'0px','0px']
               },
               {
                  id:'p_jndi',
                  type:'image',
                  rect:['147px','42px','127px','100px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_jndi3.png",'0px','0px'],
                  transform:[]
               },
               {
                  id:'p_tomcat',
                  type:'image',
                  rect:['43px','0px','100px','127px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_tomcat3.png",'0px','0px']
               }]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_p_jdbc}": [
            ["style", "top", '148px'],
            ["style", "left", '134px']
         ],
         "${_p_tomcat}": [
            ["style", "top", '0px'],
            ["style", "left", '43px'],
            ["style", "overflow", 'visible']
         ],
         "${_btnDownload}": [
            ["style", "cursor", 'pointer']
         ],
         "${_p_h2}": [
            ["style", "top", '132px'],
            ["style", "left", '0px']
         ],
         "${_kernel}": [
            ["style", "top", '13.76%'],
            ["style", "height", '202px'],
            ["style", "right", '13.46%'],
            ["style", "left", 'auto'],
            ["style", "width", '202px']
         ],
         "body > div:nth-child(2)": [
            ["style", "opacity", '1']
         ],
         "${_p_jersey}": [
            ["style", "height", '126px'],
            ["style", "top", '148px'],
            ["style", "left", '132px'],
            ["style", "width", '103px']
         ],
         "${_p_jndi}": [
            ["style", "top", '42px'],
            ["style", "left", '147px'],
            ["style", "overflow", 'hidden']
         ],
         "${_tigeCopy}": [
            ["style", "top", '207px'],
            ["style", "left", '61px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '129px'],
            ["style", "opacity", '1'],
            ["style", "clip", [36.52734375,102.8499984741211,128.8333282470703,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '103px']
         ],
         "${_Daisy}": [
            ["style", "top", '0.74%'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '720deg'],
            ["style", "display", 'block'],
            ["style", "right", '-4.35%'],
            ["style", "left", 'auto'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_p_easybeans}": [
            ["style", "top", '148px'],
            ["style", "left", '49px']
         ],
         "${_p_jotm}": [
            ["style", "top", '0px'],
            ["style", "left", '131px']
         ],
         "${_p_hibernate}": [
            ["style", "top", '129px'],
            ["style", "left", '147px']
         ],
         "${_p_aries}": [
            ["style", "top", '43px'],
            ["style", "left", '1px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2315,
         autoPlay: false,
         labels: {
            "play": 261,
            "vibrate": 2315
         },
         timeline: [
            { id: "eid1556", tween: [ "style", "${_Daisy}", "top", '0%', { fromValue: '0.74%'}], position: 2086, duration: 229 },
            { id: "eid1", tween: [ "style", "${_Daisy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Daisy}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid1594", tween: [ "style", "${_Daisy}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid1595", tween: [ "style", "${_Daisy}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid1596", tween: [ "style", "${_Daisy}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid1597", tween: [ "style", "${_Daisy}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid88", tween: [ "transform", "${_Daisy}", "rotateZ", '720deg', { fromValue: '720deg'}], position: 0, duration: 0 },
            { id: "eid82", tween: [ "transform", "${_Daisy}", "rotateZ", '1800deg', { fromValue: '720deg'}], position: 261, duration: 1825 },
            { id: "eid1557", tween: [ "style", "${_Daisy}", "right", '0%', { fromValue: '-4.35%'}], position: 2086, duration: 229 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-634258009");
