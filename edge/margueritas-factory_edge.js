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
            rect:['860px','342px','159px','22.7%','auto','auto'],
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
            rect:['-17px','5px','370px','639px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"store2.png",'0px','0px']
         },
         {
            id:'b_jetty',
            type:'image',
            rect:['221px','141px','64px','50px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"b_jetty.png",'0px','0px']
         },
         {
            id:'b_tomcat',
            type:'image',
            rect:['140px','141px','64px','50px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"b_tomcat.png",'0px','0px']
         },
         {
            id:'b_jersey',
            type:'image',
            rect:['141px','303px','64px','50px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"b_jersey.png",'0px','0px']
         },
         {
            id:'b_easybeans',
            type:'image',
            rect:['140px','360px','64px','50px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"b_easybeans.png",'0px','0px']
         },
         {
            id:'b_jotm',
            type:'image',
            rect:['141px','411px','64px','50px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"b_jotm.png",'0px','0px']
         },
         {
            id:'b_joram',
            type:'image',
            rect:['141px','462px','64px','50px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"b_joram.png",'0px','0px']
         },
         {
            id:'b_eclipselink',
            type:'image',
            rect:['221px','196px','64px','50px','auto','auto'],
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
            rect:['852px','155px','6.8%','16%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"p_jetty.png",'0px','0px']
         },
         {
            id:'row',
            type:'image',
            rect:['766px','92px','600px','135px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"row.png",'0px','0px']
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
            rect:['908px','200px','4.9%','11.7%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"raspberry.png",'0px','0px']
         },
         {
            id:'server',
            type:'image',
            rect:['991px','99px','150px','137px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"server.png",'0px','0px']
         },
         {
            id:'cloud',
            type:'image',
            rect:['1112px','107px','150px','106px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cloud.png",'0px','0px']
         },
         {
            id:'Text',
            type:'text',
            rect:['35px','1px','286px','83px','auto','auto'],
            text:"1) Build your application",
            align:"center",
            font:['Arial, Helvetica, sans-serif',30,"rgba(0,0,0,1)","900","none","italic"]
         },
         {
            id:'TextCopy',
            type:'text',
            rect:['908px','44px','286px','66px','auto','auto'],
            text:"2) Deploy it",
            align:"center",
            font:['Arial, Helvetica, sans-serif',30,"rgba(0,0,0,1)","900","none","italic"]
         },
         {
            id:'b_hibernate',
            type:'image',
            rect:['140px','196px','64px','50px','auto','auto'],
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
            rect:['140px','250px','64px','50px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"b_h2.png",'0px','0px']
         },
         {
            id:'b_derby',
            type:'image',
            rect:['221px','250px','64px','50px','auto','auto'],
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
            rect:['142px','516px','64px','50px','auto','auto'],
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
            rect:['808px','454px','200px','73px','auto','auto'],
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
            rect:['814px','536px','408px','101px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"peergreen-logo.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_b_eclipselink}": [
            ["style", "left", '221px'],
            ["style", "top", '196px']
         ],
         "${_peergreen-platform}": [
            ["style", "left", '772px'],
            ["style", "top", '226px']
         ],
         "${_p_easybeans2}": [
            ["style", "-webkit-transform-origin", [93.75,-10.32], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [93.75,-10.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [93.75,-10.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [93.75,-10.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [93.75,-10.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '480px'],
            ["style", "left", '493px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_button2}": [
            ["style", "left", '1042px'],
            ["style", "top", '453px']
         ],
         "${_b_easybeans}": [
            ["style", "top", '360px'],
            ["style", "left", '140px']
         ],
         "${_b_joram}": [
            ["style", "top", '462px'],
            ["style", "left", '141px']
         ],
         "${_p_derby2}": [
            ["style", "-webkit-transform-origin", [107.75,6.73], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [107.75,6.73],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [107.75,6.73],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [107.75,6.73],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [107.75,6.73],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '460px'],
            ["style", "left", '443px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_tomcat}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "top", '16px'],
            ["style", "left", '485px'],
            ["style", "overflow", 'visible']
         ],
         "${_p_tomcat2}": [
            ["style", "-webkit-transform-origin", [94,109.45], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [94,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [94,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [94,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [94,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '327px'],
            ["style", "left", '486px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_kernel}": [
            ["style", "top", '342px'],
            ["transform", "rotateZ", '-1deg'],
            ["style", "height", '35.39%'],
            ["style", "left", '459px'],
            ["style", "width", '247px']
         ],
         "${_b_hibernate}": [
            ["style", "top", '196px'],
            ["style", "left", '140px']
         ],
         "${_p_jetty2}": [
            ["style", "-webkit-transform-origin", [103.41,117.86], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [103.41,117.86],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [103.41,117.86],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [103.41,117.86],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [103.41,117.86],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '334px'],
            ["style", "left", '492px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_speech_deploy}": [
            ["style", "left", '550px'],
            ["style", "top", '30px']
         ],
         "${_p_jotm}": [
            ["style", "top", '70px'],
            ["style", "left", '577px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_b_tomcat}": [
            ["style", "top", '141px'],
            ["style", "left", '140px']
         ],
         "${_row}": [
            ["style", "left", '766px'],
            ["style", "top", '92px']
         ],
         "${_server}": [
            ["style", "top", '119px'],
            ["transform", "scaleY", '1.43902'],
            ["style", "height", '82px'],
            ["transform", "scaleX", '2.0625'],
            ["style", "left", '1007px'],
            ["style", "width", '64px']
         ],
         "${_b_h2}": [
            ["style", "left", '140px'],
            ["style", "top", '250px']
         ],
         "${_speech_build}": [
            ["style", "left", '370px'],
            ["style", "top", '30px']
         ],
         "${_p_derby}": [
            ["style", "top", '70px'],
            ["style", "left", '443px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_raspberry2}": [
            ["style", "top", '119px'],
            ["style", "bottom", 'auto'],
            ["style", "height", '11.7%'],
            ["style", "right", 'auto'],
            ["style", "left", '908px'],
            ["style", "width", '4.93%']
         ],
         "${_store2}": [
            ["style", "top", '5px'],
            ["style", "left", '-17px']
         ],
         "${_p_jotm2}": [
            ["style", "-webkit-transform-origin", [5,109.45], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5,109.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '327px'],
            ["style", "left", '577px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_jersey2}": [
            ["style", "-webkit-transform-origin", [110.24,94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [110.24,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [110.24,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [110.24,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [110.24,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '370px'],
            ["style", "left", '443px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_peergreen-logo}": [
            ["style", "left", '814px'],
            ["style", "top", '536px']
         ],
         "${_b_jetty}": [
            ["style", "left", '221px'],
            ["style", "top", '141px']
         ],
         "${_b_jotm}": [
            ["style", "top", '411px'],
            ["style", "left", '141px']
         ],
         "${_p_business2}": [
            ["style", "-webkit-transform-origin", [3.88,-8.53], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [3.88,-8.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [3.88,-8.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [3.88,-8.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [3.88,-8.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '479px'],
            ["style", "left", '578px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '700px'],
            ["style", "width", '1300px']
         ],
         "${_p_business}": [
            ["style", "top", '70px'],
            ["style", "left", '578px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_hibernate}": [
            ["style", "top", '70px'],
            ["style", "left", '595px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_hibernate2}": [
            ["style", "-webkit-transform-origin", [-10.94,5.1], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-10.94,5.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-10.94,5.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-10.94,5.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-10.94,5.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '460px'],
            ["style", "left", '595px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_b_business}": [
            ["style", "top", '516px'],
            ["style", "left", '142px']
         ],
         "${_cloud}": [
            ["style", "top", '107px'],
            ["transform", "scaleY", '1.68293'],
            ["style", "height", '82px'],
            ["transform", "scaleX", '2.3125'],
            ["style", "left", '1112px'],
            ["style", "width", '64px']
         ],
         "${_p_joram}": [
            ["style", "top", '70px'],
            ["style", "left", '594px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_TextCopy}": [
            ["color", "color", 'rgba(34,31,106,1)'],
            ["style", "font-weight", '900'],
            ["style", "left", '908px'],
            ["style", "width", '286px'],
            ["style", "top", '44px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'italic'],
            ["style", "font-size", '30px'],
            ["style", "text-decoration", 'none'],
            ["style", "height", '48px']
         ],
         "${_p_h2}": [
            ["style", "top", '70px'],
            ["style", "left", '443px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_b_derby}": [
            ["style", "top", '250px'],
            ["style", "left", '221px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_eclipselink}": [
            ["style", "top", '70px'],
            ["style", "left", '595px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_jersey}": [
            ["style", "top", '70px'],
            ["style", "left", '443px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_jetty}": [
            ["style", "top", '16px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '492px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_joram2}": [
            ["style", "-webkit-transform-origin", [-7.87,95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-7.87,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-7.87,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-7.87,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-7.87,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '370px'],
            ["style", "left", '594px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Text}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0)'],
            ["style", "width", '286px'],
            ["color", "color", 'rgba(34,31,106,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '35px'],
            ["style", "font-size", '30px'],
            ["style", "top", '1px'],
            ["subproperty", "filter.drop-shadow.offsetV", '2px'],
            ["style", "text-align", 'center'],
            ["subproperty", "filter.drop-shadow.offsetH", '2px'],
            ["style", "height", '83px'],
            ["style", "font-style", 'italic'],
            ["style", "text-decoration", 'none'],
            ["subproperty", "filter.drop-shadow.blur", '0px']
         ],
         "${_p_easybeans}": [
            ["style", "top", '70px'],
            ["style", "left", '493px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_button}": [
            ["style", "left", '808px'],
            ["style", "top", '454px']
         ],
         "${_p_eclipselink2}": [
            ["style", "-webkit-transform-origin", [-10.16,7.14], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-10.16,7.14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-10.16,7.14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-10.16,7.14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-10.16,7.14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '460px'],
            ["style", "left", '595px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_p_h22}": [
            ["style", "-webkit-transform-origin", [108.53,5.77], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [108.53,5.77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [108.53,5.77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [108.53,5.77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [108.53,5.77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '460px'],
            ["style", "left", '443px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_b_jersey}": [
            ["style", "top", '303px'],
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
            { id: "eid920", tween: [ "style", "${_p_tomcat}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 995, duration: 0 },
            { id: "eid921", tween: [ "style", "${_p_tomcat}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 995, duration: 0 },
            { id: "eid922", tween: [ "style", "${_p_tomcat}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 995, duration: 0 },
            { id: "eid923", tween: [ "style", "${_p_tomcat}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 995, duration: 0 },
            { id: "eid590", tween: [ "style", "${_raspberry2}", "top", '119px', { fromValue: '119px'}], position: 27000, duration: 0, easing: "easeOutBounce" },
            { id: "eid16", tween: [ "style", "${_p_jetty}", "top", '327px', { fromValue: '16px'}], position: 2960, duration: 1540, easing: "easeOutBounce" },
            { id: "eid596", tween: [ "style", "${_p_jetty}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2960, duration: 0 },
            { id: "eid924", tween: [ "style", "${_p_jetty}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2960, duration: 0 },
            { id: "eid925", tween: [ "style", "${_p_jetty}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2960, duration: 0 },
            { id: "eid926", tween: [ "style", "${_p_jetty}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2960, duration: 0 },
            { id: "eid927", tween: [ "style", "${_p_jetty}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2960, duration: 0 },
            { id: "eid572", tween: [ "style", "${_p_business}", "top", '479px', { fromValue: '70px'}], position: 18997, duration: 2003, easing: "easeOutBounce" },
            { id: "eid524", tween: [ "style", "${_p_jersey}", "top", '370px', { fromValue: '70px'}], position: 13000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid694", tween: [ "transform", "${_p_h22}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid318", tween: [ "style", "${_p_derby}", "top", '460px', { fromValue: '70px'}], position: 9000, duration: 1500, easing: "easeOutBounce" },
            { id: "eid220", tween: [ "transform", "${_p_hibernate}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 6999, duration: 501 },
            { id: "eid705", tween: [ "style", "${_kernel}", "left", '908px', { fromValue: '459px'}], position: 32000, duration: 1000 },
            { id: "eid222", tween: [ "style", "${_p_hibernate}", "top", '460px', { fromValue: '70px'}], position: 6999, duration: 1445, easing: "easeOutBounce" },
            { id: "eid689", tween: [ "transform", "${_p_jersey2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid575", tween: [ "transform", "${_p_joram}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 22000, duration: 500 },
            { id: "eid704", tween: [ "transform", "${_kernel}", "rotateZ", '1440deg', { fromValue: '-1deg'}], position: 29990, duration: 2010 },
            { id: "eid765", tween: [ "style", "${_cloud}", "height", '166px', { fromValue: '82px'}], position: 35008, duration: 250 },
            { id: "eid766", tween: [ "style", "${_cloud}", "height", '83px', { fromValue: '166px'}], position: 35258, duration: 250 },
            { id: "eid691", tween: [ "transform", "${_p_jetty2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid412", tween: [ "style", "${_p_h2}", "top", '460px', { fromValue: '70px'}], position: 11000, duration: 1500, easing: "easeOutBounce" },
            { id: "eid203", tween: [ "transform", "${_p_eclipselink}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 4923, duration: 577 },
            { id: "eid166", tween: [ "style", "${_raspberry2}", "height", '23.73%', { fromValue: '11.7%'}], position: 33500, duration: 250 },
            { id: "eid168", tween: [ "style", "${_raspberry2}", "height", '11.87%', { fromValue: '23.73%'}], position: 33750, duration: 250 },
            { id: "eid771", tween: [ "style", "${_server}", "width", '130px', { fromValue: '64px'}], position: 37019, duration: 250 },
            { id: "eid772", tween: [ "style", "${_server}", "width", '65px', { fromValue: '130px'}], position: 37269, duration: 250 },
            { id: "eid375", tween: [ "style", "${_speech_build}", "top", '100px', { fromValue: '30px'}], position: 40001, duration: 749, easing: "easeOutBounce" },
            { id: "eid206", tween: [ "style", "${_p_eclipselink}", "top", '460px', { fromValue: '70px'}], position: 4923, duration: 1577, easing: "easeOutBounce" },
            { id: "eid686", tween: [ "transform", "${_p_joram2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid706", tween: [ "style", "${_kernel}", "top", '97px', { fromValue: '342px'}], position: 32000, duration: 1000 },
            { id: "eid571", tween: [ "transform", "${_p_business}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 18997, duration: 503 },
            { id: "eid523", tween: [ "transform", "${_p_jersey}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 13000, duration: 500 },
            { id: "eid15", tween: [ "transform", "${_p_jetty}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 2960, duration: 290 },
            { id: "eid167", tween: [ "style", "${_raspberry2}", "width", '10%', { fromValue: '4.93%'}], position: 33500, duration: 250 },
            { id: "eid169", tween: [ "style", "${_raspberry2}", "width", '5%', { fromValue: '10%'}], position: 33750, duration: 250 },
            { id: "eid688", tween: [ "transform", "${_p_business2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid11", tween: [ "transform", "${_p_tomcat}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 1000, duration: 250 },
            { id: "eid377", tween: [ "style", "${_speech_deploy}", "top", '200px', { fromValue: '30px'}], position: 43000, duration: 748, easing: "easeOutBounce" },
            { id: "eid410", tween: [ "transform", "${_p_h2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 11000, duration: 500 },
            { id: "eid806", tween: [ "style", "${_server}", "top", '119px', { fromValue: '119px'}], position: 37019, duration: 0 },
            { id: "eid558", tween: [ "style", "${_p_easybeans}", "top", '479px', { fromValue: '70px'}], position: 16000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid690", tween: [ "transform", "${_p_tomcat2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 30000, duration: 2010 },
            { id: "eid692", tween: [ "transform", "${_p_eclipselink2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid577", tween: [ "transform", "${_p_jotm}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 25000, duration: 500 },
            { id: "eid693", tween: [ "transform", "${_p_hibernate2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid801", tween: [ "transform", "${_cloud}", "scaleX", '2.3125', { fromValue: '2.3125'}], position: 35008, duration: 0 },
            { id: "eid695", tween: [ "transform", "${_p_derby2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid75", tween: [ "style", "${_Stage}", "width", '1300px', { fromValue: '1300px'}], position: 0, duration: 0 },
            { id: "eid76", tween: [ "style", "${_Stage}", "height", '700px', { fromValue: '700px'}], position: 0, duration: 0 },
            { id: "eid677", tween: [ "transform", "${_p_jotm2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid316", tween: [ "transform", "${_p_derby}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 9000, duration: 500 },
            { id: "eid802", tween: [ "transform", "${_cloud}", "scaleY", '1.68293', { fromValue: '1.68293'}], position: 35008, duration: 0 },
            { id: "eid769", tween: [ "style", "${_server}", "height", '166px', { fromValue: '82px'}], position: 37019, duration: 250 },
            { id: "eid770", tween: [ "style", "${_server}", "height", '83px', { fromValue: '166px'}], position: 37269, duration: 250 },
            { id: "eid557", tween: [ "transform", "${_p_easybeans}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 16000, duration: 500 },
            { id: "eid807", tween: [ "transform", "${_server}", "scaleX", '2.0625', { fromValue: '2.0625'}], position: 37019, duration: 0 },
            { id: "eid687", tween: [ "transform", "${_p_easybeans2}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 29990, duration: 2010 },
            { id: "eid576", tween: [ "style", "${_p_joram}", "top", '370px', { fromValue: '70px'}], position: 22000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid805", tween: [ "style", "${_server}", "left", '1007px', { fromValue: '1007px'}], position: 37019, duration: 0 },
            { id: "eid9", tween: [ "style", "${_p_tomcat}", "top", '327px', { fromValue: '16px'}], position: 1000, duration: 1500, easing: "easeOutBounce" },
            { id: "eid578", tween: [ "style", "${_p_jotm}", "top", '327px', { fromValue: '70px'}], position: 25000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid767", tween: [ "style", "${_cloud}", "width", '130px', { fromValue: '64px'}], position: 35008, duration: 250 },
            { id: "eid768", tween: [ "style", "${_cloud}", "width", '65px', { fromValue: '130px'}], position: 35258, duration: 250 },
            { id: "eid804", tween: [ "transform", "${_server}", "scaleY", '1.43902', { fromValue: '1.43902'}], position: 37019, duration: 0 }         ]
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
