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
            rect:['287px','-25px','420','390','auto','auto'],
            c:[
            {
               id:'p_control_center_console',
               type:'image',
               rect:['110px','163px','310px','227px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_control_center_console.png",'0px','0px']
            },
            {
               id:'kernel_big',
               type:'image',
               rect:['61px','212px','146px','146px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"kernel_big.png",'0px','0px']
            },
            {
               id:'p_console_kernel_big',
               type:'image',
               rect:['94px','28px','279px','289px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_console_kernel_big.png",'0px','0px']
            },
            {
               id:'p_tomcat_big',
               type:'image',
               rect:['0px','0px','226px','311px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_tomcat_big.png",'0px','0px']
            }]
         },
         {
            id:'tomcatArea',
            type:'rect',
            rect:['366px','62px','74px','70px','auto','auto'],
            cursor:['help'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'pckArea',
            type:'rect',
            rect:['496px','98px','69px','77px','auto','auto'],
            cursor:['help'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'pcccArea',
            type:'rect',
            rect:['547px','222px','80px','69px','auto','auto'],
            cursor:['help'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'kernalArea',
            type:'rect',
            rect:['394px','234px','53px','52px','auto','auto'],
            cursor:['help'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_vaadin} > img:nth-child(1)": [
            ["style", "cursor", 'pointer']
         ],
         "${_java} > img:nth-child(1)": [
            ["style", "cursor", 'pointer']
         ],
         "${_imgDownload} > img:nth-child(1)": [
            ["style", "cursor", 'pointer']
         ],
         "${_pcccArea}": [
            ["style", "cursor", 'help'],
            ["style", "opacity", '0']
         ],
         "${_Group}": [
            ["style", "left", '287px'],
            ["style", "top", '-25px']
         ],
         "${_p_console_kernel_big}": [
            ["style", "left", '94px'],
            ["style", "top", '28px']
         ],
         "${_pckArea}": [
            ["style", "top", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '496px'],
            ["style", "cursor", 'help']
         ],
         "${_kernel_big}": [
            ["style", "left", '61px'],
            ["style", "top", '212px']
         ],
         "${_p_control_center_console}": [
            ["style", "left", '110px'],
            ["style", "top", '163px']
         ],
         "${_p_tomcat_big}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_kernalArea}": [
            ["style", "top", '234px'],
            ["style", "opacity", '0'],
            ["style", "left", '394px'],
            ["style", "cursor", 'help']
         ],
         "${_tomcatArea}": [
            ["style", "cursor", 'help'],
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
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
})(jQuery, AdobeEdge, "EDGE-98299582");
