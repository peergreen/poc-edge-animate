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
            rect:['auto','5.2%','275','275','2.1%','auto'],
            c:[
            {
               id:'kernel',
               type:'image',
               rect:['auto','13.8%','202px','202px','13.5%','auto'],
               fill:["rgba(0,0,0,0)",im+"kernel.png",'0px','0px']
            },
            {
               id:'p_jotm',
               type:'image',
               rect:['131px','0px','100px','127px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_jotm.png",'0px','0px']
            },
            {
               id:'p_hibernate',
               type:'image',
               rect:['147px','129px','128px','98px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_hibernate.png",'0px','0px']
            },
            {
               id:'p_jersey',
               type:'image',
               rect:['1px','43px','127px','100px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_jersey.png",'0px','0px']
            },
            {
               id:'p_easybeans',
               type:'image',
               rect:['49px','148px','96px','126px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_easybeans.png",'0px','0px']
            },
            {
               id:'p_h2',
               type:'image',
               rect:['0px','132px','129px','104px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_h2.png",'0px','0px']
            },
            {
               id:'p_jdbc',
               type:'image',
               rect:['132px','146px','103px','129px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_jdbc.png",'0px','0px']
            },
            {
               id:'p_aries',
               type:'image',
               rect:['1px','43px','127px','100px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_aries.png",'0px','0px']
            },
            {
               id:'p_jndi',
               type:'image',
               rect:['147px','42px','127px','100px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_jndi.png",'0px','0px']
            },
            {
               id:'p_tomcat',
               type:'image',
               rect:['43px','0px','100px','127px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"p_tomcat.png",'0px','0px']
            },
            {
               id:'ProfileDesc',
               type:'text',
               rect:['32px','262px','226px','75px','auto','auto'],
               align:"center",
               font:['Arial, Helvetica, sans-serif',16,"rgba(212,38,38,1.00)","bold","none","italic"]
            }]
         },
         {
            id:'Store',
            type:'group',
            rect:['-3.4%','-10.4%','328','500','auto','auto'],
            c:[
            {
               id:'store-empty22',
               type:'image',
               rect:['38px','20px','290px','500px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"store-empty22.png",'0px','0px','100%','70%']
            },
            {
               id:'Text3',
               type:'text',
               rect:['70px','67px','226px','30px','auto','auto'],
               text:"PROFILES",
               align:"center",
               font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1)","bold","none","normal"]
            },
            {
               id:'b_pg-osgi',
               type:'image',
               rect:['206px','220px','81px','101px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"box_osgi.png",'0px','0px'],
               transform:[[],[],[],['0.83','0.83']]
            },
            {
               id:'b_pg-tomcat',
               type:'image',
               rect:['206px','106px','81px','101px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"box_tomcat.png",'0px','0px'],
               transform:[[],[],[],['0.83','0.83']]
            },
            {
               id:'b_pg-was',
               type:'image',
               rect:['79px','220px','81px','101px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"box_was.png",'0px','0px'],
               transform:[[],[],[],['0.83','0.83']]
            },
            {
               id:'b_pg-kernel',
               type:'image',
               rect:['79px','106px','81px','101px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"box_kernel.png",'0px','0px'],
               transform:[[],[],[],['0.83','0.83']]
            },
            {
               id:'b_download',
               type:'image',
               rect:['153px','351px','166px','35px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"b_download.png",'0px','0px']
            },
            {
               id:'b_cancel',
               type:'image',
               rect:['49px','351px','96px','35px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"b_cancel.png",'0px','0px']
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_b_pg-tomcat}": [
            ["style", "top", '106px'],
            ["transform", "scaleY", '0.83'],
            ["transform", "scaleX", '0.83'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '206px'],
            ["style", "width", '81px']
         ],
         "${_Text3}": [
            ["style", "top", '67px'],
            ["style", "width", '226px'],
            ["style", "left", '70px'],
            ["style", "font-size", '16px']
         ],
         "${_p_jersey}": [
            ["style", "top", '43px'],
            ["style", "left", '1px']
         ],
         "${_p_jndi}": [
            ["style", "top", '42px'],
            ["style", "left", '147px']
         ],
         "${_store-empty22}": [
            ["style", "top", '20px'],
            ["style", "height", '500px'],
            ["style", "background-size", [100,70], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '38px'],
            ["style", "width", '290px']
         ],
         "${_Daisy}": [
            ["style", "top", '5.16%'],
            ["style", "right", '2.12%'],
            ["style", "left", 'auto']
         ],
         "${_b_pg-kernel}": [
            ["style", "top", '106px'],
            ["transform", "scaleY", '0.83'],
            ["transform", "scaleX", '0.83'],
            ["style", "height", '101px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '79px'],
            ["style", "width", '81px']
         ],
         "${_p_jdbc}": [
            ["style", "top", '146px'],
            ["style", "left", '132px']
         ],
         "${_p_tomcat}": [
            ["style", "top", '0px'],
            ["style", "left", '43px']
         ],
         "${_p_aries}": [
            ["style", "left", '1px'],
            ["style", "top", '43px']
         ],
         "${_p_h2}": [
            ["style", "left", '0px'],
            ["style", "top", '132px']
         ],
         "${_kernel}": [
            ["style", "top", '13.76%'],
            ["style", "height", '202px'],
            ["style", "right", '13.46%'],
            ["style", "left", 'auto'],
            ["style", "width", '202px']
         ],
         "${_p_jotm}": [
            ["style", "top", '0px'],
            ["style", "left", '131px']
         ],
         "${_p_hibernate}": [
            ["style", "top", '129px'],
            ["style", "left", '147px']
         ],
         "${_b_cancel}": [
            ["style", "top", '351px'],
            ["style", "left", '49px'],
            ["style", "cursor", 'pointer']
         ],
         "${_ProfileDesc}": [
            ["style", "top", '262px'],
            ["style", "width", '226px'],
            ["style", "height", '75px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(212,38,38,1.00)'],
            ["style", "left", '32px'],
            ["style", "font-size", '16px']
         ],
         "${_b_pg-osgi}": [
            ["style", "top", '220px'],
            ["transform", "scaleY", '0.83'],
            ["transform", "scaleX", '0.83'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '206px'],
            ["style", "width", '81px']
         ],
         "${_p_easybeans}": [
            ["style", "top", '148px'],
            ["style", "left", '49px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '600px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '360px'],
            ["style", "width", '100%']
         ],
         "${_b_download}": [
            ["style", "top", '351px'],
            ["style", "left", '153px'],
            ["style", "cursor", 'pointer']
         ],
         "${_b_pg-was}": [
            ["style", "top", '220px'],
            ["transform", "scaleY", '0.83'],
            ["transform", "scaleX", '0.83'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '79px'],
            ["style", "width", '81px']
         ],
         "${_Store}": [
            ["style", "top", '-10.4%'],
            ["style", "right", 'auto'],
            ["style", "left", '-3.38%']
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
})(jQuery, AdobeEdge, "EDGE-487819750");
