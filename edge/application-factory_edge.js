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
            id:'kernel',
            type:'image',
            rect:['860px','342px','159px','159px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"kernel.png",'0px','0px']
         },
         {
            id:'p_derby2',
            type:'image',
            rect:['443px','460px','129px','104px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_derby.png",'0px','0px']
         },
         {
            id:'p_h22',
            type:'image',
            rect:['443px','460px','129px','104px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_h2.png",'0px','0px']
         },
         {
            id:'store2',
            type:'image',
            rect:['-17px','-45px','370px','639px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"store2.png",'0px','0px']
         },
         {
            id:'b_jetty',
            type:'image',
            rect:['221px','91px','64px','50px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"b_jetty.png",'0px','0px']
         },
         {
            id:'b_tomcat',
            type:'image',
            rect:['140px','91px','64px','50px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"b_tomcat.png",'0px','0px']
         },
         {
            id:'b_jersey',
            type:'image',
            rect:['141px','253px','64px','50px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"b_jersey.png",'0px','0px']
         },
         {
            id:'b_easybeans',
            type:'image',
            rect:['140px','310px','64px','50px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"b_easybeans.png",'0px','0px']
         },
         {
            id:'b_jotm',
            type:'image',
            rect:['141px','361px','64px','50px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"b_jotm.png",'0px','0px']
         },
         {
            id:'b_joram',
            type:'image',
            rect:['141px','412px','64px','50px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"b_joram.png",'0px','0px']
         },
         {
            id:'b_eclipselink',
            type:'image',
            rect:['221px','146px','64px','50px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"b_eclipselink.png",'0px','0px']
         },
         {
            id:'p_hibernate2',
            type:'image',
            rect:['595px','460px','128px','98px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_hibernate.png",'0px','0px']
         },
         {
            id:'p_eclipselink2',
            type:'image',
            rect:['595px','460px','128px','98px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_eclipselink.png",'0px','0px']
         },
         {
            id:'p_jetty2',
            type:'image',
            rect:['469','334px','88px','112px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_jetty.png",'0px','0px']
         },
         {
            id:'p_tomcat2',
            type:'image',
            rect:['417','327px','100px','127px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_tomcat.png",'0px','0px']
         },
         {
            id:'p_jetty',
            type:'image',
            rect:['852px','155px','61px','112px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_jetty.png",'0px','0px']
         },
         {
            id:'row',
            type:'image',
            rect:['512px','22px','568px','135px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"row.png",'0px','1px','80%','80%']
         },
         {
            id:'p_tomcat',
            type:'image',
            rect:['486px','414px','100px','18.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_tomcat.png",'0px','0px']
         },
         {
            id:'raspberry2',
            type:'image',
            rect:['908px','200px','44px','82px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"raspberry.png",'0px','0px']
         },
         {
            id:'server',
            type:'image',
            rect:['991px','99px','150px','137px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"server.png",'0px','0px']
         },
         {
            id:'cloud',
            type:'image',
            rect:['1112px','107px','150px','106px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"cloud.png",'0px','0px']
         },
         {
            id:'b_hibernate',
            type:'image',
            rect:['140px','146px','64px','50px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"b_hibernate.png",'0px','0px']
         },
         {
            id:'p_eclipselink',
            type:'image',
            rect:['586px','70px','128px','98px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_eclipselink.png",'0px','0px']
         },
         {
            id:'p_hibernate',
            type:'image',
            rect:['586px','70px','128px','98px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_hibernate.png",'0px','0px']
         },
         {
            id:'p_derby',
            type:'image',
            rect:['445px','70px','129px','104px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_derby.png",'0px','0px']
         },
         {
            id:'p_h2',
            type:'image',
            rect:['445px','541px','129px','104px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_h2.png",'0px','0px']
         },
         {
            id:'b_h2',
            type:'image',
            rect:['140px','200px','64px','50px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"b_h2.png",'0px','0px']
         },
         {
            id:'b_derby',
            type:'image',
            rect:['221px','200px','64px','50px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"b_derby.png",'0px','0px']
         },
         {
            id:'speech_build',
            type:'image',
            rect:['370px','83px','300px','209px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"speech_build.png",'0px','0px']
         },
         {
            id:'speech_deploy',
            type:'image',
            rect:['386px','23px','300px','209px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"speech_deploy.png",'0px','0px']
         },
         {
            id:'p_jersey',
            type:'image',
            rect:['443px','462px','127px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_jersey.png",'0px','0px']
         },
         {
            id:'p_jersey2',
            type:'image',
            rect:['443px','370px','127px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_jersey.png",'0px','0px']
         },
         {
            id:'p_joram',
            type:'image',
            rect:['594px','70px','127px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_joram.png",'0px','0px']
         },
         {
            id:'p_jotm',
            type:'image',
            rect:['577px','70px','100px','127px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_jotm.png",'0px','0px']
         },
         {
            id:'p_business',
            type:'image',
            rect:['578px','70px','103px','129px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_business.png",'0px','0px']
         },
         {
            id:'p_business2',
            type:'image',
            rect:['578px','479px','103px','129px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_business.png",'0px','0px']
         },
         {
            id:'p_easybeans',
            type:'image',
            rect:['493px','570px','96px','126px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_easybeans.png",'0px','0px']
         },
         {
            id:'b_business',
            type:'image',
            rect:['142px','466px','64px','50px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"b_business.png",'0px','0px']
         },
         {
            id:'p_easybeans2',
            type:'image',
            rect:['493px','480px','96px','126px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_easybeans.png",'0px','0px']
         },
         {
            id:'p_joram2',
            type:'image',
            rect:['594px','370px','127px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_joram.png",'0px','0px']
         },
         {
            id:'button',
            type:'image',
            rect:['808px','453px','200px','73px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"button_restart.png",'0px','0px']
         },
         {
            id:'p_jotm2',
            type:'image',
            rect:['577px','327px','100px','127px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_jotm.png",'0px','0px']
         },
         {
            id:'button2',
            type:'image',
            rect:['1042px','453px','200px','73px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"button_url.png",'0px','0px']
         },
         {
            id:'peergreen-platform',
            type:'image',
            rect:['772px','226px','500px','248px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"peergreen-platform-overview.png",'0px','0px']
         },
         {
            id:'peergreen-logo',
            type:'image',
            rect:['812px','536px','408px','101px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"peergreen-logo.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_b_eclipselink}": [
            ["style", "top", '146px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '221px']
         ],
         "${_peergreen-platform}": [
            ["style", "left", '882px'],
            ["style", "top", '226px']
         ],
         "${_p_easybeans2}": [
            ["style", "-webkit-transform-origin", [93.75,-10.32], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [93.75,-10.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [93.75,-10.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [93.75,-10.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [93.75,-10.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '409px'],
            ["style", "left", '493px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_button2}": [
            ["style", "top", '453px'],
            ["style", "left", '1152px'],
            ["style", "cursor", 'pointer']
         ],
         "${_b_easybeans}": [
            ["style", "top", '310px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '140px']
         ],
         "${_b_joram}": [
            ["style", "top", '412px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '141px']
         ],
         "${_p_derby2}": [
            ["style", "-webkit-transform-origin", [107.75,6.73], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [107.75,6.73],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [107.75,6.73],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [107.75,6.73],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [107.75,6.73],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '390px'],
            ["style", "left", '443px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_tomcat}": [
            ["style", "top", '16px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '485px'],
            ["style", "overflow", 'visible']
         ],
         "${_p_tomcat2}": [
            ["style", "-webkit-transform-origin", [94,109.45], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [94,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [94,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [94,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [94,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '256px'],
            ["style", "left", '486px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_kernel}": [
            ["style", "top", '272px'],
            ["transform", "rotateZ", '-1deg'],
            ["style", "height", '248px'],
            ["style", "left", '459px'],
            ["style", "width", '247px']
         ],
         "${_b_hibernate}": [
            ["style", "top", '146px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '140px']
         ],
         "${_p_jetty2}": [
            ["style", "-webkit-transform-origin", [103.41,117.86], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [103.41,117.86],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [103.41,117.86],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [103.41,117.86],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [103.41,117.86],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '264px'],
            ["style", "left", '492px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_speech_deploy}": [
            ["style", "left", '270px'],
            ["style", "top", '100px']
         ],
         "${_p_jotm}": [
            ["style", "top", '70px'],
            ["style", "left", '577px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_b_tomcat}": [
            ["style", "top", '91px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '140px']
         ],
         "${_row}": [
            ["style", "top", '22px'],
            ["style", "left", '512px'],
            ["style", "background-size", [80,80], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "background-position", [0,1], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '568px']
         ],
         "${_server}": [
            ["transform", "scaleX", '2.0625'],
            ["style", "background-size", [80,80], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '707px'],
            ["style", "width", '64px'],
            ["style", "top", '49px'],
            ["transform", "scaleY", '1.43902'],
            ["style", "height", '82px'],
            ["style", "background-position", [0,1], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "cursor", 'pointer']
         ],
         "${_b_h2}": [
            ["style", "top", '200px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '140px']
         ],
         "${_speech_build}": [
            ["style", "left", '292px'],
            ["style", "top", '30px']
         ],
         "${_p_derby}": [
            ["style", "top", '70px'],
            ["style", "left", '443px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_raspberry2}": [
            ["style", "bottom", 'auto'],
            ["style", "right", 'auto'],
            ["style", "left", '598px'],
            ["style", "width", '61px'],
            ["style", "top", '49px'],
            ["style", "height", '82px'],
            ["style", "background-size", [80,80], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "background-position", [0,1], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "cursor", 'pointer']
         ],
         "${_store2}": [
            ["style", "top", '-45px'],
            ["style", "left", '-17px']
         ],
         "${_b_jetty}": [
            ["style", "top", '91px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '221px']
         ],
         "${_peergreen-logo}": [
            ["style", "left", '922px'],
            ["style", "top", '536px']
         ],
         "${_b_jotm}": [
            ["style", "top", '361px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '141px']
         ],
         "${_p_jotm2}": [
            ["style", "-webkit-transform-origin", [5,109.45], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '256px'],
            ["style", "left", '577px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_business2}": [
            ["style", "-webkit-transform-origin", [3.88,-8.53], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [3.88,-8.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [3.88,-8.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [3.88,-8.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [3.88,-8.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '408px'],
            ["style", "left", '578px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_jersey2}": [
            ["style", "-webkit-transform-origin", [110.24,94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [110.24,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [110.24,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [110.24,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [110.24,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '299px'],
            ["style", "left", '443px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_eclipselink2}": [
            ["style", "-webkit-transform-origin", [-10.16,7.14], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-10.16,7.14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-10.16,7.14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-10.16,7.14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-10.16,7.14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '390px'],
            ["style", "left", '595px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '700px'],
            ["style", "width", '900px']
         ],
         "${_b_business}": [
            ["style", "top", '466px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '142px']
         ],
         "${_p_business}": [
            ["style", "top", '70px'],
            ["style", "left", '578px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_joram2}": [
            ["style", "-webkit-transform-origin", [-7.87,95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-7.87,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-7.87,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-7.87,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-7.87,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '299px'],
            ["style", "left", '594px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_cloud}": [
            ["transform", "scaleX", '2.3125'],
            ["style", "background-size", [80,80], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '802px'],
            ["style", "width", '64px'],
            ["style", "top", '47px'],
            ["transform", "scaleY", '1.68293'],
            ["style", "height", '82px'],
            ["style", "background-position", [0,1], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "cursor", 'pointer']
         ],
         "${_p_h2}": [
            ["style", "top", '70px'],
            ["style", "left", '443px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_joram}": [
            ["style", "top", '70px'],
            ["style", "left", '594px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_eclipselink}": [
            ["style", "top", '70px'],
            ["style", "left", '595px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_b_derby}": [
            ["style", "top", '200px'],
            ["style", "left", '221px'],
            ["style", "cursor", 'pointer'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_jersey}": [
            ["style", "top", '70px'],
            ["style", "left", '443px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_jetty}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '112px'],
            ["style", "top", '16px'],
            ["style", "left", '492px'],
            ["style", "width", '88px']
         ],
         "${_p_hibernate2}": [
            ["style", "-webkit-transform-origin", [-10.94,5.1], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-10.94,5.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-10.94,5.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-10.94,5.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-10.94,5.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '390px'],
            ["style", "left", '595px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_easybeans}": [
            ["style", "top", '70px'],
            ["style", "left", '493px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_button}": [
            ["style", "top", '453px'],
            ["style", "left", '918px'],
            ["style", "cursor", 'pointer']
         ],
         "${_p_hibernate}": [
            ["style", "top", '70px'],
            ["style", "left", '595px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_h22}": [
            ["style", "-webkit-transform-origin", [108.53,5.77], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [108.53,5.77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [108.53,5.77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [108.53,5.77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [108.53,5.77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '389px'],
            ["style", "left", '443px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_b_jersey}": [
            ["style", "top", '253px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '141px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 46000,
         autoPlay: true,
         labels: {
            "begin_reset": 500,
            "begin_tomcat": 1000,
            "begin_jetty": 2960,
            "begin_eclipselink": 4923,
            "begin_hibernate": 6999,
            "begin_derby": 9000,
            "begin_h2": 11000,
            "begin_jersey": 13000,
            "begin_easybeans": 16000,
            "begin_business": 18997,
            "begin_joram": 21994,
            "begin_jotm": 25000,
            "begin_deploy": 29990,
            "begin_raspberry": 33500,
            "begin_cloud": 35008,
            "begin_server": 37019,
            "begin_end": 38034,
            "begin_help": 40000
         },
         timeline: [
            { id: "eid594", tween: [ "style", "${_p_tomcat}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 995, duration: 0 },
            { id: "eid1435", tween: [ "style", "${_p_tomcat}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 995, duration: 0 },
            { id: "eid1436", tween: [ "style", "${_p_tomcat}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 995, duration: 0 },
            { id: "eid1437", tween: [ "style", "${_p_tomcat}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 995, duration: 0 },
            { id: "eid1438", tween: [ "style", "${_p_tomcat}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 995, duration: 0 },
            { id: "eid1272", tween: [ "style", "${_peergreen-platform}", "top", '116px', { fromValue: '226px'}], position: 38242, duration: 758 },
            { id: "eid1200", tween: [ "style", "${_speech_build}", "left", '292px', { fromValue: '292px'}], position: 0, duration: 0 },
            { id: "eid1277", tween: [ "style", "${_button}", "left", '358px', { fromValue: '918px'}], position: 38242, duration: 758 },
            { id: "eid1278", tween: [ "style", "${_button2}", "top", '343px', { fromValue: '453px'}], position: 38242, duration: 758 },
            { id: "eid1037", tween: [ "style", "${_p_hibernate2}", "top", '390px', { fromValue: '390px'}], position: 0, duration: 0 },
            { id: "eid1183", tween: [ "style", "${_cloud}", "background-position", [0,1], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,1]}], position: 0, duration: 0 },
            { id: "eid1035", tween: [ "style", "${_p_jetty2}", "top", '264px', { fromValue: '264px'}], position: 0, duration: 0 },
            { id: "eid1276", tween: [ "style", "${_button}", "top", '343px', { fromValue: '453px'}], position: 38242, duration: 758 },
            { id: "eid704", tween: [ "transform", "${_kernel}", "rotateZ", '1440deg', { fromValue: '-1deg'}], position: 29990, duration: 2010 },
            { id: "eid1275", tween: [ "style", "${_peergreen-logo}", "left", '362px', { fromValue: '922px'}], position: 38242, duration: 758 },
            { id: "eid1048", tween: [ "style", "${_p_jotm2}", "top", '256px', { fromValue: '256px'}], position: 0, duration: 0 },
            { id: "eid203", tween: [ "transform", "${_p_eclipselink}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 4923, duration: 577 },
            { id: "eid1180", tween: [ "style", "${_cloud}", "background-size", [80,80], { valueTemplate: '@@0@@% @@1@@%', fromValue: [80,80]}], position: 0, duration: 0 },
            { id: "eid686", tween: [ "transform", "${_p_joram2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid1235", tween: [ "style", "${_kernel}", "top", '272px', { fromValue: '272px'}], position: 29990, duration: 0 },
            { id: "eid706", tween: [ "style", "${_kernel}", "top", '-3px', { fromValue: '272px'}], position: 32000, duration: 1000 },
            { id: "eid15", tween: [ "transform", "${_p_jetty}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 2960, duration: 290 },
            { id: "eid769", tween: [ "style", "${_server}", "height", '166px', { fromValue: '82px'}], position: 37019, duration: 250 },
            { id: "eid770", tween: [ "style", "${_server}", "height", '83px', { fromValue: '166px'}], position: 37269, duration: 250 },
            { id: "eid412", tween: [ "style", "${_p_h2}", "top", '389px', { fromValue: '70px'}], position: 11000, duration: 1500, easing: "easeOutBounce" },
            { id: "eid1181", tween: [ "style", "${_raspberry2}", "background-size", [80,80], { valueTemplate: '@@0@@% @@1@@%', fromValue: [80,80]}], position: 0, duration: 0 },
            { id: "eid523", tween: [ "transform", "${_p_jersey}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 13000, duration: 500 },
            { id: "eid1297", tween: [ "style", "${_speech_deploy}", "left", '270px', { fromValue: '270px'}], position: 0, duration: 0 },
            { id: "eid801", tween: [ "transform", "${_cloud}", "scaleX", '2.3125', { fromValue: '2.3125'}], position: 35008, duration: 0 },
            { id: "eid575", tween: [ "transform", "${_p_joram}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 22000, duration: 500 },
            { id: "eid316", tween: [ "transform", "${_p_derby}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 9000, duration: 500 },
            { id: "eid804", tween: [ "transform", "${_server}", "scaleY", '1.43902', { fromValue: '1.43902'}], position: 37019, duration: 0 },
            { id: "eid807", tween: [ "transform", "${_server}", "scaleX", '2.0625', { fromValue: '2.0625'}], position: 37019, duration: 0 },
            { id: "eid410", tween: [ "transform", "${_p_h2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 11000, duration: 500 },
            { id: "eid576", tween: [ "style", "${_p_joram}", "top", '300px', { fromValue: '70px'}], position: 22000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid571", tween: [ "transform", "${_p_business}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 18997, duration: 503 },
            { id: "eid1087", tween: [ "transform", "${_p_business}", "rotateZ", '359deg', { fromValue: '360deg'}], position: 19500, duration: 1500 },
            { id: "eid1274", tween: [ "style", "${_peergreen-logo}", "top", '426px', { fromValue: '536px'}], position: 38242, duration: 758 },
            { id: "eid1045", tween: [ "style", "${_p_tomcat2}", "top", '256px', { fromValue: '256px'}], position: 0, duration: 0 },
            { id: "eid596", tween: [ "style", "${_p_jetty}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2960, duration: 0 },
            { id: "eid1439", tween: [ "style", "${_p_jetty}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2960, duration: 0 },
            { id: "eid1440", tween: [ "style", "${_p_jetty}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2960, duration: 0 },
            { id: "eid1441", tween: [ "style", "${_p_jetty}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2960, duration: 0 },
            { id: "eid1442", tween: [ "style", "${_p_jetty}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2960, duration: 0 },
            { id: "eid572", tween: [ "style", "${_p_business}", "top", '409px', { fromValue: '70px'}], position: 18997, duration: 2003, easing: "easeOutBounce" },
            { id: "eid524", tween: [ "style", "${_p_jersey}", "top", '300px', { fromValue: '70px'}], position: 13000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid694", tween: [ "transform", "${_p_h22}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid1207", tween: [ "style", "${_cloud}", "left", '802px', { fromValue: '802px'}], position: 0, duration: 0 },
            { id: "eid318", tween: [ "style", "${_p_derby}", "top", '390px', { fromValue: '70px'}], position: 9000, duration: 1500, easing: "easeOutBounce" },
            { id: "eid220", tween: [ "transform", "${_p_hibernate}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 6999, duration: 501 },
            { id: "eid1076", tween: [ "style", "${_kernel}", "left", '459px', { fromValue: '459px'}], position: 29990, duration: 0 },
            { id: "eid705", tween: [ "style", "${_kernel}", "left", '588px', { fromValue: '459px'}], position: 32000, duration: 1000 },
            { id: "eid1279", tween: [ "style", "${_button2}", "left", '592px', { fromValue: '1152px'}], position: 38242, duration: 758 },
            { id: "eid689", tween: [ "transform", "${_p_jersey2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid1047", tween: [ "style", "${_p_h22}", "top", '389px', { fromValue: '389px'}], position: 0, duration: 0 },
            { id: "eid1273", tween: [ "style", "${_peergreen-platform}", "left", '322px', { fromValue: '882px'}], position: 38242, duration: 758 },
            { id: "eid677", tween: [ "transform", "${_p_jotm2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid166", tween: [ "style", "${_raspberry2}", "height", '166px', { fromValue: '82px'}], position: 33500, duration: 250 },
            { id: "eid168", tween: [ "style", "${_raspberry2}", "height", '83px', { fromValue: '166px'}], position: 33750, duration: 250 },
            { id: "eid1209", tween: [ "style", "${_raspberry2}", "left", '598px', { fromValue: '598px'}], position: 0, duration: 0 },
            { id: "eid691", tween: [ "transform", "${_p_jetty2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid206", tween: [ "style", "${_p_eclipselink}", "top", '390px', { fromValue: '70px'}], position: 4923, duration: 1577, easing: "easeOutBounce" },
            { id: "eid1036", tween: [ "style", "${_p_eclipselink2}", "top", '390px', { fromValue: '390px'}], position: 0, duration: 0 },
            { id: "eid1201", tween: [ "style", "${_speech_build}", "top", '0px', { fromValue: '30px'}], position: 0, duration: 0 },
            { id: "eid375", tween: [ "style", "${_speech_build}", "top", '100px', { fromValue: '0px'}], position: 40001, duration: 749, easing: "easeOutBounce" },
            { id: "eid690", tween: [ "transform", "${_p_tomcat2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 30000, duration: 2010 },
            { id: "eid1051", tween: [ "style", "${_p_jersey2}", "top", '299px', { fromValue: '299px'}], position: 0, duration: 0 },
            { id: "eid1034", tween: [ "style", "${_p_derby2}", "top", '390px', { fromValue: '390px'}], position: 0, duration: 0 },
            { id: "eid167", tween: [ "style", "${_raspberry2}", "width", '114px', { fromValue: '61px'}], position: 33500, duration: 250 },
            { id: "eid169", tween: [ "style", "${_raspberry2}", "width", '61px', { fromValue: '114px'}], position: 33750, duration: 250 },
            { id: "eid1319", tween: [ "style", "${_raspberry2}", "width", '61px', { fromValue: '61px'}], position: 43000, duration: 0, easing: "easeOutBounce" },
            { id: "eid688", tween: [ "transform", "${_p_business2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid11", tween: [ "transform", "${_p_tomcat}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 1000, duration: 250 },
            { id: "eid1308", tween: [ "style", "${_speech_deploy}", "top", '-20px', { fromValue: '100px'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid377", tween: [ "style", "${_speech_deploy}", "top", '118px', { fromValue: '-20px'}], position: 43000, duration: 748, easing: "easeOutBounce" },
            { id: "eid1049", tween: [ "style", "${_p_business2}", "top", '408px', { fromValue: '408px'}], position: 0, duration: 0 },
            { id: "eid1206", tween: [ "style", "${_cloud}", "top", '47px', { fromValue: '47px'}], position: 0, duration: 0 },
            { id: "eid944", tween: [ "style", "${_Stage}", "width", '900px', { fromValue: '900px'}], position: 0, duration: 0 },
            { id: "eid1179", tween: [ "style", "${_server}", "background-size", [80,80], { valueTemplate: '@@0@@% @@1@@%', fromValue: [80,80]}], position: 0, duration: 0 },
            { id: "eid577", tween: [ "transform", "${_p_jotm}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 25000, duration: 500 },
            { id: "eid771", tween: [ "style", "${_server}", "width", '130px', { fromValue: '64px'}], position: 37019, duration: 250 },
            { id: "eid772", tween: [ "style", "${_server}", "width", '65px', { fromValue: '130px'}], position: 37269, duration: 250 },
            { id: "eid693", tween: [ "transform", "${_p_hibernate2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid767", tween: [ "style", "${_cloud}", "width", '130px', { fromValue: '64px'}], position: 35008, duration: 250 },
            { id: "eid768", tween: [ "style", "${_cloud}", "width", '65px', { fromValue: '130px'}], position: 35258, duration: 250 },
            { id: "eid695", tween: [ "transform", "${_p_derby2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid692", tween: [ "transform", "${_p_eclipselink2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid1385", tween: [ "style", "${_Stage}", "height", '550px', { fromValue: '700px'}], position: 0, duration: 65 },
            { id: "eid1434", tween: [ "style", "${_Stage}", "height", '550px', { fromValue: '550px'}], position: 38242, duration: 0, easing: "easeOutBounce" },
            { id: "eid558", tween: [ "style", "${_p_easybeans}", "top", '409px', { fromValue: '70px'}], position: 16000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid1050", tween: [ "style", "${_p_joram2}", "top", '299px', { fromValue: '299px'}], position: 0, duration: 0 },
            { id: "eid802", tween: [ "transform", "${_cloud}", "scaleY", '1.68293', { fromValue: '1.68293'}], position: 35008, duration: 0 },
            { id: "eid16", tween: [ "style", "${_p_jetty}", "top", '267px', { fromValue: '16px'}], position: 2960, duration: 1540, easing: "easeOutBounce" },
            { id: "eid557", tween: [ "transform", "${_p_easybeans}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 16000, duration: 500 },
            { id: "eid1184", tween: [ "style", "${_raspberry2}", "background-position", [0,1], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,1]}], position: 0, duration: 0 },
            { id: "eid687", tween: [ "transform", "${_p_easybeans2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid1046", tween: [ "style", "${_p_easybeans2}", "top", '409px', { fromValue: '409px'}], position: 0, duration: 0 },
            { id: "eid765", tween: [ "style", "${_cloud}", "height", '166px', { fromValue: '82px'}], position: 35008, duration: 250 },
            { id: "eid766", tween: [ "style", "${_cloud}", "height", '83px', { fromValue: '166px'}], position: 35258, duration: 250 },
            { id: "eid9", tween: [ "style", "${_p_tomcat}", "top", '257px', { fromValue: '16px'}], position: 1000, duration: 1500, easing: "easeOutBounce" },
            { id: "eid578", tween: [ "style", "${_p_jotm}", "top", '257px', { fromValue: '70px'}], position: 25000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid1182", tween: [ "style", "${_server}", "background-position", [0,1], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,1]}], position: 0, duration: 0 },
            { id: "eid222", tween: [ "style", "${_p_hibernate}", "top", '390px', { fromValue: '70px'}], position: 6999, duration: 1445, easing: "easeOutBounce" }         ]
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
})(jQuery, AdobeEdge, "EDGE-345678754");
