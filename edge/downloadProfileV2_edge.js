/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['alice, serif']='<script src=\"http://use.edgefonts.net/alice:n4:all.js\"></script>';
   fonts['lato, sans-serif']='<script src=\"http://use.edgefonts.net/lato:n9,i4,n1,i7,i9,n7,i1,i3,n4,n3:all.js\"></script>';


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
            id:'step1',
            type:'image',
            rect:['30.4%','1.9%','87px','57px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"step1.png",'0px','0px']
         },
         {
            id:'Group4',
            type:'group',
            rect:['376','55','315','353','auto','auto'],
            c:[
            {
               id:'Group3',
               type:'group',
               rect:['0px','0px','275','336','auto','auto'],
               c:[
               {
                  id:'Group',
                  type:'group',
                  rect:['0px','0px','275','336','auto','auto'],
                  c:[
                  {
                     id:'tige',
                     type:'image',
                     rect:['58px','209px','103px','129px','auto','auto'],
                     clip:['rect(36.52734375px 102.8499984741211px 128.8333282470703px 0px)'],
                     opacity:1,
                     fill:["rgba(0,0,0,0)",im+"tige.png",'0px','0px','103px','129px'],
                     transform:[[],[],[],['0.699']]
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
                        rect:['148px','131px','128px','98px','auto','auto'],
                        fill:["rgba(0,0,0,0)",im+"p_hibernate3.png",'0px','0px']
                     },
                     {
                        id:'p_jersey',
                        type:'image',
                        rect:['133px','147px','103px','126px','auto','auto'],
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
               },
               {
                  id:'aries_mouseover',
                  type:'ellipse',
                  rect:['16px','78px','66px','57px','auto','auto'],
                  cursor:['help'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'tomcat_mouseover',
                  type:'ellipse',
                  rect:['74px','18px','60px','60px','auto','auto'],
                  cursor:['help'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'jotm_mouseover',
                  type:'ellipse',
                  rect:['144px','18px','60px','60px','auto','auto'],
                  cursor:['help'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'jndi_mouseover',
                  type:'ellipse',
                  rect:['189px','84px','72px','50px','auto','auto'],
                  cursor:['help'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'hibernate_mouseover',
                  type:'ellipse',
                  rect:['198px','137px','64px','60px','auto','auto'],
                  cursor:['help'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'jersey_mouseover',
                  type:'ellipse',
                  rect:['151px','194px','59px','67px','auto','auto'],
                  cursor:['help'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'easybeans_mouseover',
                  type:'ellipse',
                  rect:['75px','199px','58px','50px','auto','auto'],
                  cursor:['help'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'h2_mouseover',
                  type:'ellipse',
                  rect:['14px','144px','67px','62px','auto','auto'],
                  title:'H2 database',
                  cursor:['help'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               }]
            },
            {
               id:'smallLeaf',
               type:'image',
               rect:['35.8%','78.2%','48px','23px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small_leaf.png",'0px','0px']
            },
            {
               id:'bigLeaf',
               type:'image',
               rect:['35.8%','75.1%','202px','88px','auto','auto'],
               opacity:0,
               fill:["rgba(0,0,0,0)",im+"leaf.png",'0px','0px']
            },
            {
               id:'textInLeaf',
               type:'text',
               rect:['160px','287px','121px','67px','auto','auto'],
               align:"center",
               font:['lato, sans-serif',14,"rgba(255,255,255,1.00)","normal","none",""],
               transform:[[],['20']]
            }]
         },
         {
            id:'step3',
            type:'image',
            rect:['2.8%','59.9%','121px','32px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"step3.png",'0px','0px']
         },
         {
            id:'step2',
            type:'image',
            rect:['auto','auto','96px','57px','7.5%','28%'],
            fill:["rgba(0,0,0,0)",im+"step2.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Group3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_btnDownload}": [
            ["style", "cursor", 'pointer']
         ],
         "${_p_jersey}": [
            ["style", "top", '147px'],
            ["style", "height", '126px'],
            ["style", "left", '133px'],
            ["style", "width", '103px']
         ],
         "${_step3}": [
            ["style", "top", '59.92%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "left", '2.83%'],
            ["style", "width", '121px']
         ],
         "body > div:nth-child(2)": [
            ["style", "opacity", '1']
         ],
         "${_step1}": [
            ["style", "top", '1.89%'],
            ["style", "overflow", 'visible'],
            ["style", "bottom", 'auto'],
            ["style", "height", '57px'],
            ["style", "right", 'auto'],
            ["style", "left", '30.4%'],
            ["style", "width", '87px']
         ],
         "${_p_jndi}": [
            ["style", "top", '42px'],
            ["style", "left", '147px'],
            ["style", "overflow", 'hidden']
         ],
         "${_h2_mouseover}": [
            ["style", "top", '144px'],
            ["style", "left", '14px'],
            ["style", "height", '62px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'help'],
            ["style", "width", '67px']
         ],
         "${_Daisy}": [
            ["style", "top", '0.74%'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '720deg'],
            ["style", "display", 'block'],
            ["style", "right", '-4.35%'],
            ["style", "left", 'auto'],
            ["transform", "scaleX", '1']
         ],
         "${_tomcat_mouseover}": [
            ["style", "top", '18px'],
            ["style", "left", '74px'],
            ["style", "height", '60px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'help'],
            ["style", "width", '60px']
         ],
         "${_java}": [
            ["style", "cursor", 'pointer']
         ],
         "${_hibernate_mouseover}": [
            ["style", "top", '137px'],
            ["style", "left", '198px'],
            ["style", "height", '60px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'help'],
            ["style", "width", '64px']
         ],
         "${_p_hibernate}": [
            ["style", "top", '131px'],
            ["style", "left", '148px']
         ],
         "${_jotm_mouseover}": [
            ["style", "top", '18px'],
            ["style", "left", '144px'],
            ["style", "height", '60px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'help'],
            ["style", "width", '60px']
         ],
         "${_step2}": [
            ["style", "top", 'auto'],
            ["style", "overflow", 'visible'],
            ["style", "opacity", '0'],
            ["style", "bottom", '27.95%'],
            ["style", "height", '57px'],
            ["style", "right", '7.5%'],
            ["style", "left", 'auto'],
            ["style", "width", '96px']
         ],
         "${_bigLeaf}": [
            ["style", "top", '75.06%'],
            ["style", "overflow", 'visible'],
            ["style", "right", 'auto'],
            ["style", "bottom", 'auto'],
            ["style", "height", '88px'],
            ["style", "opacity", '0'],
            ["style", "left", '35.78%'],
            ["style", "width", '202px']
         ],
         "${_p_aries}": [
            ["style", "top", '43px'],
            ["style", "left", '1px'],
            ["style", "overflow", 'hidden']
         ],
         "${_jndi_mouseover}": [
            ["style", "top", '84px'],
            ["style", "left", '189px'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'help'],
            ["style", "width", '72px']
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
         "${_tige}": [
            ["style", "top", '209px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [36.52734375,102.8499984741211,128.8333282470703,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '129px'],
            ["transform", "scaleX", '0.69903'],
            ["style", "opacity", '1'],
            ["style", "left", '58px'],
            ["style", "width", '103px']
         ],
         "${_aries_mouseover}": [
            ["style", "top", '78px'],
            ["style", "left", '16px'],
            ["style", "height", '57px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'help'],
            ["style", "width", '66px']
         ],
         "${_Group}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_easybeans_mouseover}": [
            ["style", "top", '199px'],
            ["style", "left", '75px'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'help'],
            ["style", "width", '58px']
         ],
         "${_p_tomcat}": [
            ["style", "top", '0px'],
            ["style", "left", '43px'],
            ["style", "overflow", 'visible']
         ],
         "${_p_easybeans}": [
            ["style", "top", '148px'],
            ["style", "left", '49px']
         ],
         "${_p_jotm}": [
            ["style", "top", '0px'],
            ["style", "left", '131px']
         ],
         "${_jersey_mouseover}": [
            ["style", "top", '194px'],
            ["style", "left", '151px'],
            ["style", "height", '67px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'help'],
            ["style", "width", '59px']
         ],
         "${_textInLeaf}": [
            ["transform", "rotateZ", '20deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '160px'],
            ["style", "width", '121px'],
            ["style", "top", '287px'],
            ["style", "text-align", 'center'],
            ["style", "height", '67px'],
            ["style", "font-family", 'lato, sans-serif'],
            ["style", "font-size", '14px']
         ],
         "${_smallLeaf}": [
            ["style", "top", '78.23%'],
            ["style", "bottom", 'auto'],
            ["style", "overflow", 'visible'],
            ["style", "height", '23px'],
            ["style", "right", 'auto'],
            ["style", "left", '35.83%'],
            ["style", "width", '48px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 19500,
         autoPlay: false,
         labels: {
            "play": 261,
            "play2": 3500
         },
         timeline: [
            { id: "eid1556", tween: [ "style", "${_Daisy}", "top", '0%', { fromValue: '0.74%'}], position: 2086, duration: 229 },
            { id: "eid1", tween: [ "style", "${_Daisy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Daisy}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid3712", tween: [ "style", "${_Daisy}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid3713", tween: [ "style", "${_Daisy}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid3714", tween: [ "style", "${_Daisy}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid3715", tween: [ "style", "${_Daisy}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid3005", tween: [ "style", "${_Daisy}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2315, duration: 0 },
            { id: "eid3716", tween: [ "style", "${_Daisy}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2315, duration: 0 },
            { id: "eid3717", tween: [ "style", "${_Daisy}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2315, duration: 0 },
            { id: "eid3718", tween: [ "style", "${_Daisy}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2315, duration: 0 },
            { id: "eid3719", tween: [ "style", "${_Daisy}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2315, duration: 0 },
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
