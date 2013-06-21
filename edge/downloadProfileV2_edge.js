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
            rect:['30.4%','2.2%','87px','57px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"step1.png",'0px','0px']
         },
         {
            id:'margarita',
            type:'group',
            rect:['376px','24px','315','353','auto','auto'],
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
                     rect:['21.1%','62.2%','103px','129px','auto','auto'],
                     clip:['rect(0.71484375px 102.8499984741211px 128.8333282470703px 0px)'],
                     opacity:1,
                     fill:["rgba(0,0,0,0)",im+"tige.png",'0px','0px','103px','129px'],
                     transform:[[],[],[],['0.699','1.477']]
                  },
                  {
                     id:'Daisy',
                     type:'group',
                     rect:['auto','1.5%','100%','81.9%','5.1%','auto'],
                     c:[
                     {
                        id:'kernel',
                        type:'image',
                        rect:['auto','33.6%','90px','90px','33.6%','auto'],
                        clip:['rect(0px 90.96484375px 89.515625px 0px)'],
                        opacity:1,
                        fill:["rgba(0,0,0,0)",im+"kernel-infini-logo2.png",'0px','0px'],
                        transform:[[],[],[],['1.111','1.111']]
                     },
                     {
                        id:'p_jotm',
                        type:'image',
                        rect:['132px','10px','138px','135px','auto','auto'],
                        fill:["rgba(0,0,0,0)",im+"p_jotm4.png",'0px','0px']
                     },
                     {
                        id:'p_hibernate',
                        type:'image',
                        rect:['131px','134px','135px','138px','auto','auto'],
                        fill:["rgba(0,0,0,0)",im+"p_hibernate4.png",'0px','0px']
                     },
                     {
                        id:'p_jersey',
                        type:'image',
                        rect:['79px','141px','110px','150px','auto','auto'],
                        fill:["rgba(0,0,0,0)",im+"p_jersey4.png",'0px','0px']
                     },
                     {
                        id:'p_easybeans',
                        type:'image',
                        rect:['5px','132px','138px','135px','auto','auto'],
                        fill:["rgba(0,0,0,0)",im+"p_easybeans4.png",'0px','0px']
                     },
                     {
                        id:'p_h2',
                        type:'image',
                        rect:['-14px','80px','150px','110px','auto','auto'],
                        fill:["rgba(0,0,0,0)",im+"p_h24.png",'0px','0px']
                     },
                     {
                        id:'p_aries',
                        type:'image',
                        rect:['1px','43px','176px','138px','auto','auto'],
                        fill:["rgba(0,0,0,0)",im+"p_aries4.png",'0px','0px']
                     },
                     {
                        id:'p_jndi',
                        type:'image',
                        rect:['138px','88px','150px','110px','auto','auto'],
                        fill:["rgba(0,0,0,0)",im+"p_jndi4.png",'0px','0px'],
                        transform:[]
                     },
                     {
                        id:'p_tomcat',
                        type:'image',
                        rect:['81px','-12px','118px','150px','auto','auto'],
                        fill:["rgba(0,0,0,0)",im+"p_tomcat4.png",'0px','0px']
                     }]
                  }]
               },
               {
                  id:'aries_mouseover',
                  type:'ellipse',
                  rect:['36px','45px','59px','49px','auto','auto'],
                  cursor:['help'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'tomcat_mouseover',
                  type:'ellipse',
                  rect:['114px','11px','60px','56px','auto','auto'],
                  cursor:['help'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'jotm_mouseover',
                  type:'ellipse',
                  rect:['180px','45px','60px','54px','auto','auto'],
                  cursor:['help'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'jndi_mouseover',
                  type:'ellipse',
                  rect:['201px','115px','60px','50px','auto','auto'],
                  cursor:['help'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'hibernate_mouseover',
                  type:'ellipse',
                  rect:['175px','179px','53px','54px','auto','auto'],
                  cursor:['help'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'jersey_mouseover',
                  type:'ellipse',
                  rect:['104px','213px','59px','50px','auto','auto'],
                  cursor:['help'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'easybeans_mouseover',
                  type:'ellipse',
                  rect:['37px','181px','58px','50px','auto','auto'],
                  cursor:['help'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'h2_mouseover',
                  type:'ellipse',
                  rect:['8px','107px','67px','62px','auto','auto'],
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
               id:'p_tomcat_info',
               type:'image',
               rect:['36.4%','75.2%','202px','88px','auto','auto'],
               opacity:0,
               fill:["rgba(0,0,0,0)",im+"p_tomcat_info.png",'0px','0px']
            },
            {
               id:'p_jotm_info',
               type:'image',
               rect:['36.6%','75.1%','202px','88px','auto','auto'],
               opacity:0,
               fill:["rgba(0,0,0,0)",im+"p_jotm_info.png",'0px','0px']
            },
            {
               id:'p_jndi_info',
               type:'image',
               rect:['36.6%','74.8%','202px','88px','auto','auto'],
               opacity:0,
               fill:["rgba(0,0,0,0)",im+"p_jndi_info.png",'0px','0px']
            },
            {
               id:'p_hibernate_info',
               type:'image',
               rect:['36.6%','74.8%','202px','88px','auto','auto'],
               opacity:0,
               fill:["rgba(0,0,0,0)",im+"p_hibernate_info.png",'0px','0px']
            },
            {
               id:'p_jersey_info',
               type:'image',
               rect:['36.6%','74.8%','202px','88px','auto','auto'],
               opacity:0,
               fill:["rgba(0,0,0,0)",im+"p_jersey_info.png",'0px','0px']
            },
            {
               id:'p_easybeans_info',
               type:'image',
               rect:['36.6%','74.8%','202px','88px','auto','auto'],
               opacity:0,
               fill:["rgba(0,0,0,0)",im+"p_easybeans_info.png",'0px','0px']
            },
            {
               id:'p_h2_info',
               type:'image',
               rect:['36.1%','74.9%','202px','88px','auto','auto'],
               opacity:0,
               fill:["rgba(0,0,0,0)",im+"p_h2_info.png",'0px','0px']
            },
            {
               id:'p_aries_info',
               type:'image',
               rect:['36.1%','74.9%','202px','88px','auto','auto'],
               opacity:0,
               fill:["rgba(0,0,0,0)",im+"p_aries_info.png",'0px','0px']
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
            rect:['auto','auto','96px','57px','7.5%','28.3%'],
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
         "${_p_jotm_info}": [
            ["style", "top", '75.14%'],
            ["style", "overflow", 'visible'],
            ["style", "right", 'auto'],
            ["style", "bottom", 'auto'],
            ["style", "height", '88px'],
            ["style", "opacity", '0'],
            ["style", "left", '36.61%'],
            ["style", "width", '202px']
         ],
         "body > div:nth-child(2)": [
            ["style", "opacity", '1']
         ],
         "${_tige}": [
            ["transform", "scaleX", '0.69903'],
            ["style", "opacity", '1'],
            ["style", "left", '21.09%'],
            ["style", "width", '103px'],
            ["style", "top", '62.2%'],
            ["transform", "scaleY", '1.4767'],
            ["style", "height", '129px'],
            ["style", "clip", [0.71484375,102.8499984741211,128.8333282470703,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_p_jndi}": [
            ["style", "top", '88px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '110px'],
            ["style", "left", '138px'],
            ["style", "width", '150px']
         ],
         "${_p_easybeans_info}": [
            ["style", "top", '74.84%'],
            ["style", "bottom", 'auto'],
            ["style", "opacity", '0'],
            ["style", "overflow", 'visible'],
            ["style", "height", '88px'],
            ["style", "right", 'auto'],
            ["style", "left", '36.59%'],
            ["style", "width", '202px']
         ],
         "${_jersey_mouseover}": [
            ["style", "top", '213px'],
            ["style", "cursor", 'help'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '104px'],
            ["style", "width", '59px']
         ],
         "${_margarita}": [
            ["style", "top", '24px']
         ],
         "${_kernel}": [
            ["transform", "scaleX", '1.11111'],
            ["style", "right", '33.59%'],
            ["style", "left", 'auto'],
            ["style", "width", '90px'],
            ["style", "top", '33.56%'],
            ["transform", "scaleY", '1.11102'],
            ["style", "height", '90px'],
            ["style", "clip", [0,90.96484375,89.515625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "opacity", '1']
         ],
         "${_Group}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_p_h2_info}": [
            ["style", "top", '74.94%'],
            ["style", "overflow", 'visible'],
            ["style", "right", 'auto'],
            ["style", "bottom", 'auto'],
            ["style", "height", '88px'],
            ["style", "opacity", '0'],
            ["style", "left", '36.06%'],
            ["style", "width", '202px']
         ],
         "${_p_jotm}": [
            ["style", "height", '135px'],
            ["style", "top", '10px'],
            ["style", "left", '132px'],
            ["style", "width", '138px']
         ],
         "${_smallLeaf}": [
            ["style", "top", '78.23%'],
            ["style", "overflow", 'visible'],
            ["style", "bottom", 'auto'],
            ["style", "height", '23px'],
            ["style", "right", 'auto'],
            ["style", "left", '35.83%'],
            ["style", "width", '48px']
         ],
         "${_hibernate_mouseover}": [
            ["style", "top", '179px'],
            ["style", "cursor", 'help'],
            ["style", "height", '54px'],
            ["style", "opacity", '0'],
            ["style", "left", '175px'],
            ["style", "width", '53px']
         ],
         "${_step3}": [
            ["style", "top", '59.92%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "left", '2.83%'],
            ["style", "width", '121px']
         ],
         "${_p_jersey}": [
            ["style", "height", '150px'],
            ["style", "top", '141px'],
            ["style", "left", '79px'],
            ["style", "width", '110px']
         ],
         "${_p_hibernate_info}": [
            ["style", "top", '74.84%'],
            ["style", "bottom", 'auto'],
            ["style", "opacity", '0'],
            ["style", "overflow", 'visible'],
            ["style", "height", '88px'],
            ["style", "right", 'auto'],
            ["style", "left", '36.59%'],
            ["style", "width", '202px']
         ],
         "${_p_tomcat_info}": [
            ["style", "top", '75.19%'],
            ["style", "bottom", 'auto'],
            ["style", "opacity", '0'],
            ["style", "overflow", 'visible'],
            ["style", "height", '88px'],
            ["style", "right", 'auto'],
            ["style", "left", '36.4%'],
            ["style", "width", '202px']
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
         "${_p_aries_info}": [
            ["style", "top", '74.94%'],
            ["style", "overflow", 'visible'],
            ["style", "right", 'auto'],
            ["style", "bottom", 'auto'],
            ["style", "height", '88px'],
            ["style", "opacity", '0'],
            ["style", "left", '36.06%'],
            ["style", "width", '202px']
         ],
         "${_java}": [
            ["style", "cursor", 'pointer']
         ],
         "${_p_jersey_info}": [
            ["style", "top", '74.84%'],
            ["style", "bottom", 'auto'],
            ["style", "opacity", '0'],
            ["style", "overflow", 'visible'],
            ["style", "height", '88px'],
            ["style", "right", 'auto'],
            ["style", "left", '36.59%'],
            ["style", "width", '202px']
         ],
         "${_p_hibernate}": [
            ["style", "height", '138px'],
            ["style", "top", '134px'],
            ["style", "left", '131px'],
            ["style", "width", '135px']
         ],
         "${_step2}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '28.25%'],
            ["style", "right", '7.5%'],
            ["style", "overflow", 'visible'],
            ["style", "height", '57px'],
            ["style", "opacity", '0'],
            ["style", "left", 'auto'],
            ["style", "width", '96px']
         ],
         "${_p_aries}": [
            ["style", "top", '6px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '139px'],
            ["style", "left", '7px'],
            ["style", "width", '135px']
         ],
         "${_jndi_mouseover}": [
            ["style", "top", '115px'],
            ["style", "cursor", 'help'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '201px'],
            ["style", "width", '60px']
         ],
         "${_p_h2}": [
            ["style", "height", '110px'],
            ["style", "top", '80px'],
            ["style", "left", '-14px'],
            ["style", "width", '150px']
         ],
         "${_aries_mouseover}": [
            ["style", "top", '45px'],
            ["style", "cursor", 'help'],
            ["style", "height", '49px'],
            ["style", "opacity", '0'],
            ["style", "left", '36px'],
            ["style", "width", '59px']
         ],
         "${_tomcat_mouseover}": [
            ["style", "top", '11px'],
            ["style", "cursor", 'help'],
            ["style", "height", '56px'],
            ["style", "opacity", '0'],
            ["style", "left", '114px'],
            ["style", "width", '60px']
         ],
         "${_easybeans_mouseover}": [
            ["style", "top", '181px'],
            ["style", "cursor", 'help'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '37px'],
            ["style", "width", '58px']
         ],
         "${_step1}": [
            ["style", "top", '2.15%'],
            ["style", "bottom", 'auto'],
            ["style", "overflow", 'visible'],
            ["style", "height", '57px'],
            ["style", "right", 'auto'],
            ["style", "left", '30.4%'],
            ["style", "width", '87px']
         ],
         "${_jotm_mouseover}": [
            ["style", "top", '45px'],
            ["style", "cursor", 'help'],
            ["style", "height", '54px'],
            ["style", "opacity", '0'],
            ["style", "left", '180px'],
            ["style", "width", '60px']
         ],
         "${_p_easybeans}": [
            ["style", "height", '135px'],
            ["style", "top", '132px'],
            ["style", "left", '5px'],
            ["style", "width", '138px']
         ],
         "${_p_tomcat}": [
            ["style", "top", '-12px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '150px'],
            ["style", "left", '81px'],
            ["style", "width", '118px']
         ],
         "${_h2_mouseover}": [
            ["style", "top", '107px'],
            ["style", "cursor", 'help'],
            ["style", "height", '62px'],
            ["style", "opacity", '0'],
            ["style", "left", '8px'],
            ["style", "width", '67px']
         ],
         "${_p_jndi_info}": [
            ["style", "top", '74.84%'],
            ["style", "bottom", 'auto'],
            ["style", "opacity", '0'],
            ["style", "overflow", 'visible'],
            ["style", "height", '88px'],
            ["style", "right", 'auto'],
            ["style", "left", '36.59%'],
            ["style", "width", '202px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 20250,
         autoPlay: false,
         labels: {
            "start": 0,
            "play": 261,
            "play2": 3500,
            "play3": 20250
         },
         timeline: [
            { id: "eid1557", tween: [ "style", "${_Daisy}", "right", '0%', { fromValue: '-4.35%'}], position: 2086, duration: 229 },
            { id: "eid1", tween: [ "style", "${_Daisy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid4449", tween: [ "style", "${_p_aries}", "height", '139px', { fromValue: '139px'}], position: 19500, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Daisy}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid8445", tween: [ "style", "${_Daisy}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid8446", tween: [ "style", "${_Daisy}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid8447", tween: [ "style", "${_Daisy}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid8448", tween: [ "style", "${_Daisy}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid3005", tween: [ "style", "${_Daisy}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid8449", tween: [ "style", "${_Daisy}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid8450", tween: [ "style", "${_Daisy}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid8451", tween: [ "style", "${_Daisy}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid8452", tween: [ "style", "${_Daisy}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid4529", tween: [ "style", "${_p_aries}", "left", '7px', { fromValue: '7px'}], position: 19500, duration: 0 },
            { id: "eid1556", tween: [ "style", "${_Daisy}", "top", '0%', { fromValue: '0.74%'}], position: 2086, duration: 229 },
            { id: "eid4528", tween: [ "style", "${_p_aries}", "top", '6px', { fromValue: '6px'}], position: 19500, duration: 0 },
            { id: "eid4445", tween: [ "style", "${_p_aries}", "width", '135px', { fromValue: '135px'}], position: 19500, duration: 0 },
            { id: "eid88", tween: [ "transform", "${_Daisy}", "rotateZ", '720deg', { fromValue: '720deg'}], position: 0, duration: 0 },
            { id: "eid6443", tween: [ "transform", "${_Daisy}", "rotateZ", '720deg', { fromValue: '360deg'}], position: 149, duration: 851 }         ]
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
