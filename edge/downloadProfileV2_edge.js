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
            id:'Daisy',
            type:'group',
            rect:['auto','5.6%','275px','275px','24.5%','auto'],
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
               fill:["rgba(0,0,0,0)",im+"p_jotm2.png",'0px','0px']
            },
            {
               id:'p_hibernate',
               type:'image',
               rect:['147px','129px','128px','98px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_hibernate2.png",'0px','0px']
            },
            {
               id:'p_jersey',
               type:'image',
               rect:['1px','43px','127px','100px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_jersey2.png",'0px','0px']
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
               fill:["rgba(0,0,0,0)",im+"p_h22.png",'0px','0px']
            },
            {
               id:'p_jdbc',
               type:'image',
               rect:['132px','146px','103px','129px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_jdbc2.png",'0px','0px']
            },
            {
               id:'p_aries',
               type:'image',
               rect:['1px','43px','127px','100px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_aries2.png",'0px','0px']
            },
            {
               id:'p_jndi',
               type:'image',
               rect:['147px','42px','127px','100px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_jndi2.png",'0px','0px'],
               transform:[]
            },
            {
               id:'p_tomcat',
               type:'image',
               rect:['43px','0px','100px','127px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_tomcat2.png",'0px','0px']
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_p_jdbc}": [
            ["style", "top", '146px'],
            ["style", "left", '132px']
         ],
         "${_p_tomcat}": [
            ["style", "top", '0px'],
            ["style", "left", '43px'],
            ["style", "overflow", 'visible']
         ],
         "${_p_aries}": [
            ["style", "top", '43px'],
            ["style", "left", '1px'],
            ["style", "overflow", 'hidden']
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
         "${_p_jersey}": [
            ["style", "top", '43px'],
            ["style", "left", '1px']
         ],
         "${_p_jndi}": [
            ["style", "top", '42px'],
            ["style", "left", '147px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Daisy}": [
            ["style", "top", '4.82%'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '720deg'],
            ["style", "display", 'block'],
            ["style", "right", '15.1%'],
            ["style", "left", 'auto'],
            ["transform", "scaleX", '1']
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
         "${_btnDownload}": [
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2086,
         autoPlay: false,
         labels: {
            "play": 261
         },
         timeline: [
            { id: "eid300", tween: [ "style", "${_Daisy}", "top", '4.82%', { fromValue: '4.82%'}], position: 2086, duration: 0 },
            { id: "eid1", tween: [ "style", "${_Daisy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Daisy}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid1342", tween: [ "style", "${_Daisy}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid1343", tween: [ "style", "${_Daisy}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid1344", tween: [ "style", "${_Daisy}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid1345", tween: [ "style", "${_Daisy}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid88", tween: [ "transform", "${_Daisy}", "rotateZ", '720deg', { fromValue: '720deg'}], position: 0, duration: 0 },
            { id: "eid82", tween: [ "transform", "${_Daisy}", "rotateZ", '1800deg', { fromValue: '720deg'}], position: 261, duration: 1825 },
            { id: "eid301", tween: [ "style", "${_Daisy}", "right", '15.1%', { fromValue: '15.1%'}], position: 2086, duration: 0 }         ]
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
