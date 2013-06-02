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
            id:'store-empty22',
            type:'image',
            rect:['621px','-43px','290px','500px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"store-empty22.png",'0px','0px']
         },
         {
            id:'store-empty',
            type:'image',
            rect:['-50px','-112px','370px','639px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"store-empty22.png",'0px','0px'],
            transform:[[],[],[],['0.782','0.782']]
         },
         {
            id:'kernel',
            type:'image',
            rect:['369px','136px','159px','159px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"kernel.png",'0px','0px']
         },
         {
            id:'p_jotm',
            type:'image',
            rect:['443px','78px','100px','127px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_jotm.png",'0px','0px']
         },
         {
            id:'p_hibernate',
            type:'image',
            rect:['459px','207px','128px','98px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_hibernate.png",'0px','0px']
         },
         {
            id:'p_jersey',
            type:'image',
            rect:['313px','121px','127px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_jersey.png",'0px','0px']
         },
         {
            id:'p_easybeans',
            type:'image',
            rect:['361px','226px','96px','126px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_easybeans.png",'0px','0px']
         },
         {
            id:'p_h2',
            type:'image',
            rect:['312px','210px','129px','104px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_h2.png",'0px','0px']
         },
         {
            id:'p_jdbc',
            type:'image',
            rect:['444px','224px','103px','129px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_jdbc.png",'0px','0px']
         },
         {
            id:'Text3',
            type:'text',
            rect:['653px','17px','226px','30px','auto','auto'],
            text:"2) Select the profile <br>that best fits",
            align:"center",
            font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1)","bold","none","normal"]
         },
         {
            id:'Text3Copy',
            type:'text',
            rect:['23px','19px','226px','30px','auto','auto'],
            text:"1) Select the features<br>you need",
            align:"center",
            font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1)","bold","none","normal"]
         },
         {
            id:'p_tomcat',
            type:'image',
            rect:['357px','80px','100px','127px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_tomcat.png",'0px','0px']
         },
         {
            id:'FeatureDetail',
            type:'text',
            rect:['23px','415px','226px','75px','auto','auto'],
            align:"center",
            font:['Arial, Helvetica, sans-serif',16,"rgba(38,81,212,1.00)","bold","none","italic"]
         },
         {
            id:'ProfileDetail',
            type:'text',
            rect:['338px','356px','226px','55px','auto','auto'],
            align:"center",
            font:['Arial, Helvetica, sans-serif',16,"rgba(212,38,38,1.00)","bold","none","italic"]
         },
         {
            id:'ProfileDesc',
            type:'text',
            rect:['653px','415px','226px','75px','auto','auto'],
            align:"center",
            font:['Arial, Helvetica, sans-serif',16,"rgba(38,48,212,1.00)","bold","none","italic"]
         },
         {
            id:'l_jersey',
            type:'image',
            rect:['44px','199px','57px','44px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"Jersey_yellow.png",'0px','0px']
         },
         {
            id:'b_download',
            type:'group',
            rect:['359','424px','180','66','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'button3',
               type:'image',
               rect:['0px','0px','180px','66px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"button.png",'0px','0px']
            },
            {
               id:'Text2',
               type:'text',
               rect:['19px','6px','146px','30px','auto','auto'],
               text:"Download<br> it now !",
               align:"center",
               font:['Arial, Helvetica, sans-serif',25,"rgba(255,255,255,1)","bold","none","normal"]
            }]
         },
         {
            id:'reset',
            type:'group',
            rect:['376','20px','146','48','auto','auto'],
            transform:[[],[],[],['0.88','0.88']],
            c:[
            {
               id:'b_reset',
               type:'group',
               rect:['0px','0px','146','48','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'buttonYellow2',
                  type:'image',
                  rect:['7px','0px','130px','48px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"buttonYellow.png",'0px','0px']
               },
               {
                  id:'Text2Copy2',
                  type:'text',
                  rect:['-1px','9px','146px','30px','auto','auto'],
                  text:"Reset",
                  align:"center",
                  font:['Arial, Helvetica, sans-serif',25,"rgba(248,248,249,1.00)","bold","none","normal"]
               }]
            }]
         },
         {
            id:'l_tomcat',
            type:'image',
            rect:['34px','71px','75px','49px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"tomcat-logo.png",'0px','0px']
         },
         {
            id:'l_jotm',
            type:'image',
            rect:['147px','76px','94px','39px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"jotm.png",'0px','0px']
         },
         {
            id:'l_hibernate',
            type:'image',
            rect:['85px','150px','100px','28px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Hibernate_logo_a.png",'0px','0px']
         },
         {
            id:'l_jdbc',
            type:'image',
            rect:['49px','331px','47px','49px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"jdbcpool.png",'0px','0px']
         },
         {
            id:'l_jndi',
            type:'image',
            rect:['170px','331px','47px','49px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"jndi.png",'0px','0px']
         },
         {
            id:'l_easybeans',
            type:'image',
            rect:['170px','201px','47px','45px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"easybeans-logo.png",'0px','0px']
         },
         {
            id:'l_h2',
            type:'image',
            rect:['34px','268px','77px','42px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"H2_logo.png",'0px','0px']
         },
         {
            id:'l_aries',
            type:'image',
            rect:['147px','268px','94px','42px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Arieslogo_Horizontal.gif",'0px','0px']
         },
         {
            id:'p_aries',
            type:'image',
            rect:['313px','121px','127px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_aries.png",'0px','0px']
         },
         {
            id:'p_jndi',
            type:'image',
            rect:['459px','120px','127px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_jndi.png",'0px','0px']
         },
         {
            id:'speech-alacarte',
            type:'image',
            rect:['477px','226px','183px','128px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"speech-alacarte.png",'0px','0px']
         },
         {
            id:'b_pg-user',
            type:'image',
            rect:['653px','311px','81px','101px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"box_alacarte.png",'0px','0px'],
            transform:[[],[],[],['0.83','0.83']]
         },
         {
            id:'b_pg-embedded',
            type:'image',
            rect:['653px','223px','81px','101px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"box_embedded.png",'0px','0px'],
            transform:[[],[],[],['0.83','0.83']]
         },
         {
            id:'b_pg-osgi',
            type:'image',
            rect:['774px','223px','81px','101px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"box_osgi.png",'0px','0px'],
            transform:[[],[],[],['0.83','0.83']]
         },
         {
            id:'b_pg-tomcat',
            type:'image',
            rect:['653px','136px','81px','101px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"box_tomcat.png",'0px','0px'],
            transform:[[],[],[],['0.83','0.83']]
         },
         {
            id:'b_pg-was',
            type:'image',
            rect:['774px','136px','81px','101px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"box_was.png",'0px','0px'],
            transform:[[],[],[],['0.83','0.83']]
         },
         {
            id:'b_pg-kernel',
            type:'image',
            rect:['653px','50px','81px','101px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"box_kernel.png",'0px','0px'],
            transform:[[],[],[],['0.83','0.83']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Text3Copy}": [
            ["style", "top", '19px'],
            ["style", "width", '226px'],
            ["style", "left", '23px'],
            ["style", "font-size", '16px']
         ],
         "${_store-empty}": [
            ["transform", "scaleX", '0.78247'],
            ["transform", "scaleY", '0.78247'],
            ["style", "left", '-50px'],
            ["style", "top", '-112px']
         ],
         "${_Text2}": [
            ["style", "top", '6px'],
            ["style", "text-align", 'center'],
            ["style", "height", '30px'],
            ["style", "font-size", '25px'],
            ["style", "left", '19px'],
            ["style", "width", '146px']
         ],
         "${_b_pg-osgi}": [
            ["style", "top", '223px'],
            ["transform", "scaleY", '0.83'],
            ["transform", "scaleX", '0.83'],
            ["style", "left", '774px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '81px']
         ],
         "${_p_jndi}": [
            ["style", "top", '120px'],
            ["style", "left", '459px']
         ],
         "${_b_reset}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_b_pg-kernel}": [
            ["style", "top", '50px'],
            ["transform", "scaleY", '0.83'],
            ["style", "height", '101px'],
            ["transform", "scaleX", '0.83'],
            ["style", "left", '653px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '81px']
         ],
         "${_p_jdbc}": [
            ["style", "top", '224px'],
            ["style", "left", '444px']
         ],
         "${_p_tomcat}": [
            ["style", "top", '78px'],
            ["style", "left", '355px']
         ],
         "${_kernel}": [
            ["style", "left", '369px'],
            ["style", "top", '136px']
         ],
         "${_l_aries}": [
            ["style", "top", '268px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '42px'],
            ["transform", "scaleX", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '147px'],
            ["style", "width", '94px']
         ],
         "${_b_download}": [
            ["style", "cursor", 'pointer'],
            ["style", "top", '424px']
         ],
         "${_FeatureDetail}": [
            ["style", "top", '415px'],
            ["style", "font-size", '16px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '75px'],
            ["color", "color", 'rgba(38,81,212,1.00)'],
            ["style", "left", '23px'],
            ["style", "width", '226px']
         ],
         "${_l_jersey}": [
            ["style", "top", '199px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '44px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '44px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '57px']
         ],
         "${_Text3}": [
            ["style", "top", '17px'],
            ["style", "font-size", '16px'],
            ["style", "left", '653px'],
            ["style", "width", '226px']
         ],
         "${_reset}": [
            ["transform", "scaleX", '0.88'],
            ["transform", "scaleY", '0.88'],
            ["style", "top", '20px']
         ],
         "${_p_jersey}": [
            ["style", "top", '121px'],
            ["style", "left", '313px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '9px'],
            ["style", "text-align", 'center'],
            ["style", "width", '146px'],
            ["color", "color", 'rgba(248,248,249,1.00)'],
            ["style", "height", '30px'],
            ["style", "left", '-1px'],
            ["style", "font-size", '25px']
         ],
         "${_store-empty22}": [
            ["style", "height", '500px'],
            ["style", "top", '-43px'],
            ["style", "left", '621px'],
            ["style", "width", '290px']
         ],
         "${_p_jotm}": [
            ["style", "top", '78px'],
            ["style", "left", '443px']
         ],
         "${_button3}": [
            ["style", "height", '66px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '180px']
         ],
         "${_b_pg-was}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.83'],
            ["transform", "scaleX", '0.83'],
            ["style", "left", '774px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '81px']
         ],
         "${_l_tomcat}": [
            ["style", "top", '71px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '49px'],
            ["style", "left", '34px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '75px']
         ],
         "${_p_hibernate}": [
            ["style", "top", '207px'],
            ["style", "left", '459px']
         ],
         "${_l_jndi}": [
            ["style", "top", '331px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '49px'],
            ["transform", "scaleX", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '170px'],
            ["style", "width", '47px']
         ],
         "${_p_h2}": [
            ["style", "left", '312px'],
            ["style", "top", '210px']
         ],
         "${_p_easybeans}": [
            ["style", "top", '226px'],
            ["style", "left", '361px']
         ],
         "${_p_aries}": [
            ["style", "left", '313px'],
            ["style", "top", '121px']
         ],
         "${_l_easybeans}": [
            ["style", "top", '201px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '45px'],
            ["style", "left", '170px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '47px']
         ],
         "${_buttonYellow2}": [
            ["style", "height", '48px'],
            ["style", "top", '0px'],
            ["style", "left", '7px'],
            ["style", "width", '130px']
         ],
         "${_b_pg-tomcat}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.83'],
            ["transform", "scaleX", '0.83'],
            ["style", "left", '653px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '81px']
         ],
         "${_l_jotm}": [
            ["style", "top", '76px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '39px'],
            ["style", "left", '147px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '94px']
         ],
         "${_speech-alacarte}": [
            ["style", "left", '477px'],
            ["style", "top", '226px']
         ],
         "${_b_pg-user}": [
            ["style", "top", '311px'],
            ["transform", "scaleY", '0.83'],
            ["transform", "scaleX", '0.83'],
            ["style", "left", '653px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '81px']
         ],
         "${_ProfileDesc}": [
            ["style", "top", '415px'],
            ["style", "font-size", '16px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '75px'],
            ["color", "color", 'rgba(38,48,212,1.00)'],
            ["style", "left", '653px'],
            ["style", "width", '226px']
         ],
         "${_ProfileDetail}": [
            ["style", "top", '356px'],
            ["style", "width", '226px'],
            ["style", "height", '55px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(212,38,38,1.00)'],
            ["style", "left", '338px'],
            ["style", "font-size", '16px']
         ],
         "${_l_hibernate}": [
            ["style", "top", '150px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '28px'],
            ["style", "left", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '100px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '500px'],
            ["style", "width", '900px']
         ],
         "${_l_h2}": [
            ["style", "top", '268px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '42px'],
            ["style", "left", '34px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '77px']
         ],
         "${_b_pg-embedded}": [
            ["style", "top", '223px'],
            ["transform", "scaleY", '0.83'],
            ["transform", "scaleX", '0.83'],
            ["style", "left", '653px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '81px']
         ],
         "${_l_jdbc}": [
            ["style", "top", '331px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '49px'],
            ["style", "left", '49px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '47px']
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
