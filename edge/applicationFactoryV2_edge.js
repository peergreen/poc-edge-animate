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
            id:'GroupRaspberry',
            type:'group',
            rect:['55.2%','53.7%','7.9%','10.6%','auto','auto'],
            opacity:1,
            c:[
            {
               id:'tigeRaspberry',
               type:'image',
               rect:['49.3%','54.3%','103px','129px','auto','auto'],
               clip:['rect(0.71484375px 102.8499984741211px 128.8333282470703px 0px)'],
               fill:["rgba(0,0,0,0)",im+"tige.png",'0px','0px','103px','129px'],
               transform:[[],[],[],['0.231','0.488']]
            },
            {
               id:'DaisyRaspberry',
               type:'group',
               rect:['auto','0%','100%','81.9%','0%','auto'],
               c:[
               {
                  id:'kernelRaspberry',
                  type:'image',
                  rect:['auto','36.3%','90px','90px','-100.8%','auto'],
                  clip:['rect(0px 90.96484375px 89.515625px 0px)'],
                  fill:["rgba(0,0,0,0)",im+"kernel-infini-logo2.png",'0px','0px'],
                  transform:[[],[],[],['0.367','0.367']]
               },
               {
                  id:'p_jotmRaspberry',
                  type:'image',
                  rect:['96px','33px','46px','45px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_jotm4.png",'0px','0px']
               },
               {
                  id:'p_hibernateRaspberry',
                  type:'image',
                  rect:['95px','73px','45px','46px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_hibernate4.png",'0px','0px']
               },
               {
                  id:'p_eclipselinkRaspberry',
                  type:'image',
                  rect:['89px','79px','50px','37px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_eclipselink2.png",'0px','0px'],
                  transform:[[],['23']]
               },
               {
                  id:'p_jerseyRaspberry',
                  type:'image',
                  rect:['78px','75px','37px','50px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_jersey4.png",'0px','0px']
               },
               {
                  id:'p_easybeansRaspberry',
                  type:'image',
                  rect:['54px','73px','46px','45px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_easybeans4.png",'0px','0px']
               },
               {
                  id:'p_h2Raspberry',
                  type:'image',
                  rect:['48px','56px','50px','37px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_h24.png",'0px','0px']
               },
               {
                  id:'p_derbyRaspberry',
                  type:'image',
                  rect:['46px','61px','50px','37px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_derby2.png",'0px','0px'],
                  transform:[[],['20']]
               },
               {
                  id:'p_ariesRaspberry',
                  type:'image',
                  rect:['55px','32px','45px','46px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_aries4.png",'0px','0px']
               },
               {
                  id:'p_jndiRaspberry',
                  type:'image',
                  rect:['98px','58px','50px','37px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_jndi4.png",'0px','0px'],
                  transform:[]
               },
               {
                  id:'p_jettyRaspberry',
                  type:'image',
                  rect:['76px','22px','36px','50px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_jetty2.png",'0px','0px'],
                  transform:[[],['22']]
               },
               {
                  id:'p_tomcatRaspberry',
                  type:'image',
                  rect:['79px','25px','39px','50px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_tomcat4.png",'0px','0px']
               }]
            }]
         },
         {
            id:'GroupServer',
            type:'group',
            rect:['69.4%','53.7%','7.9%','10.6%','auto','auto'],
            opacity:1,
            c:[
            {
               id:'tigeServer',
               type:'image',
               rect:['49.8%','50%','103px','129px','auto','auto'],
               clip:['rect(0.71484375px 102.8499984741211px 128.8333282470703px 0px)'],
               opacity:0,
               fill:["rgba(0,0,0,0)",im+"tige.png",'0px','0px','103px','129px'],
               transform:[[],[],[],['0.231','0.488']]
            },
            {
               id:'DaisyServer',
               type:'group',
               rect:['auto','0%','34.9%','28.5%','-0.1%','auto'],
               c:[
               {
                  id:'kernelServer',
                  type:'image',
                  rect:['auto','88.8%','90px','90px','-284.8%','auto'],
                  clip:['rect(0px 90.96484375px 89.515625px 0px)'],
                  opacity:0,
                  fill:["rgba(0,0,0,0)",im+"kernel-infini-logo2.png",'0px','0px'],
                  transform:[[],[],[],['0.367','0.367']]
               },
               {
                  id:'p_jotmServer',
                  type:'image',
                  rect:['48px','29px','46px','45px','auto','auto'],
                  opacity:0,
                  fill:["rgba(0,0,0,0)",im+"p_jotm4.png",'0px','0px']
               },
               {
                  id:'p_hibernateServer',
                  type:'image',
                  rect:['47px','69px','45px','46px','auto','auto'],
                  opacity:0,
                  fill:["rgba(0,0,0,0)",im+"p_hibernate4.png",'0px','0px']
               },
               {
                  id:'p_eclipselinkServer',
                  type:'image',
                  rect:['41px','75px','50px','37px','auto','auto'],
                  opacity:0,
                  fill:["rgba(0,0,0,0)",im+"p_eclipselink2.png",'0px','0px'],
                  transform:[[],['23']]
               },
               {
                  id:'p_jerseyServer',
                  type:'image',
                  rect:['30px','71px','37px','50px','auto','auto'],
                  opacity:0,
                  fill:["rgba(0,0,0,0)",im+"p_jersey4.png",'0px','0px']
               },
               {
                  id:'p_easybeansServer',
                  type:'image',
                  rect:['6px','69px','46px','45px','auto','auto'],
                  opacity:0,
                  fill:["rgba(0,0,0,0)",im+"p_easybeans4.png",'0px','0px']
               },
               {
                  id:'p_h2Server',
                  type:'image',
                  rect:['0px','52px','50px','37px','auto','auto'],
                  opacity:0,
                  fill:["rgba(0,0,0,0)",im+"p_h24.png",'0px','0px']
               },
               {
                  id:'p_derbyServer',
                  type:'image',
                  rect:['-2px','57px','50px','37px','auto','auto'],
                  opacity:0,
                  fill:["rgba(0,0,0,0)",im+"p_derby2.png",'0px','0px'],
                  transform:[[],['20']]
               },
               {
                  id:'p_ariesServer',
                  type:'image',
                  rect:['7px','28px','45px','46px','auto','auto'],
                  opacity:0,
                  fill:["rgba(0,0,0,0)",im+"p_aries4.png",'0px','0px']
               },
               {
                  id:'p_jndiServer',
                  type:'image',
                  rect:['50px','54px','50px','37px','auto','auto'],
                  opacity:0,
                  fill:["rgba(0,0,0,0)",im+"p_jndi4.png",'0px','0px'],
                  transform:[]
               },
               {
                  id:'p_jettyServer',
                  type:'image',
                  rect:['28px','18px','36px','50px','auto','auto'],
                  opacity:0,
                  fill:["rgba(0,0,0,0)",im+"p_jetty2.png",'0px','0px'],
                  transform:[[],['22']]
               },
               {
                  id:'p_tomcatServer',
                  type:'image',
                  rect:['31px','21px','39px','50px','auto','auto'],
                  opacity:0,
                  fill:["rgba(0,0,0,0)",im+"p_tomcat4.png",'0px','0px']
               }]
            }]
         },
         {
            id:'GroupCloud',
            type:'group',
            rect:['83.9%','53.8%','107px','120px','auto','auto'],
            opacity:1,
            c:[
            {
               id:'tigeCloud',
               type:'image',
               rect:['30.9%','48.6%','103px','129px','auto','auto'],
               clip:['rect(0.71484375px 102.8499984741211px 128.8333282470703px 0px)'],
               fill:["rgba(0,0,0,0)",im+"tige.png",'0px','0px','103px','129px'],
               transform:[[],[],[],['0.231','0.488']]
            },
            {
               id:'DaisyCloud',
               type:'group',
               rect:['auto','0%','87px','100px','0.3%','auto'],
               c:[
               {
                  id:'kernelCloud',
                  type:'image',
                  rect:['auto','39.7%','90px','90px','-38%','auto'],
                  clip:['rect(0px 90.96484375px 89.515625px 0px)'],
                  fill:["rgba(0,0,0,0)",im+"kernel-infini-logo2.png",'0px','0px'],
                  transform:[[],[],[],['0.367','0.367']]
               },
               {
                  id:'p_jotmCloud',
                  type:'image',
                  rect:['73px','43px','46px','45px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_jotm4.png",'0px','0px']
               },
               {
                  id:'p_hibernateCloud',
                  type:'image',
                  rect:['72px','83px','45px','46px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_hibernate4.png",'0px','0px']
               },
               {
                  id:'p_eclipselinkCloud',
                  type:'image',
                  rect:['66px','89px','50px','37px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_eclipselink2.png",'0px','0px'],
                  transform:[[],['23']]
               },
               {
                  id:'p_jerseyCloud',
                  type:'image',
                  rect:['55px','85px','37px','50px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_jersey4.png",'0px','0px']
               },
               {
                  id:'p_easybeansCloud',
                  type:'image',
                  rect:['31px','83px','46px','45px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_easybeans4.png",'0px','0px']
               },
               {
                  id:'p_h2Cloud',
                  type:'image',
                  rect:['25px','66px','50px','37px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_h24.png",'0px','0px']
               },
               {
                  id:'p_derbyCloud',
                  type:'image',
                  rect:['23px','71px','50px','37px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_derby2.png",'0px','0px'],
                  transform:[[],['20']]
               },
               {
                  id:'p_ariesCloud',
                  type:'image',
                  rect:['32px','42px','45px','46px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_aries4.png",'0px','0px']
               },
               {
                  id:'p_jndiCloud',
                  type:'image',
                  rect:['74px','68px','50px','37px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_jndi4.png",'0px','0px'],
                  transform:[]
               },
               {
                  id:'p_jettyCloud',
                  type:'image',
                  rect:['54px','34px','36px','50px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_jetty2.png",'0px','0px'],
                  transform:[[],['22']]
               },
               {
                  id:'p_tomcatCloud',
                  type:'image',
                  rect:['57px','36px','39px','50px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"p_tomcat4.png",'0px','0px']
               }]
            }]
         },
         {
            id:'Group',
            type:'group',
            rect:['67.4%','12.8%','30.6%','37.3%','auto','auto'],
            c:[
            {
               id:'tige',
               type:'image',
               rect:['19.9%','60.4%','103px','129px','auto','auto'],
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
                  rect:['auto','32.4%','90px','90px','33.6%','auto'],
                  clip:['rect(0px 90.96484375px 89.515625px 0px)'],
                  opacity:1,
                  fill:["rgba(0,0,0,0)",im+"kernel-infini-logo2.png",'0px','0px'],
                  transform:[[],[],[],['1.111','1.111']]
               },
               {
                  id:'p_jotm',
                  type:'image',
                  rect:['132px','10px','138px','135px','auto','auto'],
                  opacity:1,
                  fill:["rgba(0,0,0,0)",im+"p_jotm4.png",'0px','0px']
               },
               {
                  id:'p_hibernate',
                  type:'image',
                  rect:['131px','134px','135px','138px','auto','auto'],
                  opacity:1,
                  fill:["rgba(0,0,0,0)",im+"p_hibernate4.png",'0px','0px']
               },
               {
                  id:'p_jersey',
                  type:'image',
                  rect:['79px','141px','110px','150px','auto','auto'],
                  opacity:1,
                  fill:["rgba(0,0,0,0)",im+"p_jersey4.png",'0px','0px']
               },
               {
                  id:'p_easybeans',
                  type:'image',
                  rect:['5px','132px','138px','135px','auto','auto'],
                  opacity:1,
                  fill:["rgba(0,0,0,0)",im+"p_easybeans4.png",'0px','0px']
               },
               {
                  id:'p_h2',
                  type:'image',
                  rect:['-14px','80px','150px','110px','auto','auto'],
                  opacity:1,
                  fill:["rgba(0,0,0,0)",im+"p_h24.png",'0px','0px']
               },
               {
                  id:'p_aries',
                  type:'image',
                  rect:['1px','43px','176px','138px','auto','auto'],
                  opacity:1,
                  fill:["rgba(0,0,0,0)",im+"p_aries4.png",'0px','0px']
               },
               {
                  id:'p_jndi',
                  type:'image',
                  rect:['138px','88px','150px','110px','auto','auto'],
                  opacity:1,
                  fill:["rgba(0,0,0,0)",im+"p_jndi4.png",'0px','0px'],
                  transform:[]
               },
               {
                  id:'p_eclipselink',
                  type:'image',
                  rect:['114px','152px','150px','110px','auto','auto'],
                  opacity:1,
                  fill:["rgba(0,0,0,0)",im+"p_eclipselink2.png",'0px','0px'],
                  transform:[[],['23']]
               },
               {
                  id:'p_derby',
                  type:'image',
                  rect:['-21px','95px','150px','110px','auto','auto'],
                  opacity:1,
                  fill:["rgba(0,0,0,0)",im+"p_derby2.png",'0px','0px'],
                  transform:[[],['20']]
               },
               {
                  id:'p_tomcat',
                  type:'image',
                  rect:['81px','-12px','118px','150px','auto','auto'],
                  opacity:1,
                  fill:["rgba(0,0,0,0)",im+"p_tomcat4.png",'0px','0px']
               },
               {
                  id:'p_jetty',
                  type:'image',
                  rect:['72px','-19px','109px','150px','auto','auto'],
                  opacity:1,
                  fill:["rgba(0,0,0,0)",im+"p_jetty2.png",'0px','0px'],
                  transform:[[],['22']]
               },
               {
                  id:'p_tomcat_click',
                  type:'rect',
                  rect:['112px','14px','52px','59px','auto','auto'],
                  cursor:['pointer'],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgba(0,0,0,1)","none"],
                  userClass:"petal"
               },
               {
                  id:'p_jetty_click',
                  type:'rect',
                  rect:['113px','14px','52px','59px','auto','auto'],
                  cursor:['pointer'],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgba(0,0,0,1)","none"],
                  userClass:"petal"
               },
               {
                  id:'p_jotm_click',
                  type:'rect',
                  rect:['182px','51px','52px','50px','auto','auto'],
                  cursor:['pointer'],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgba(0,0,0,1)","none"],
                  userClass:"petal"
               },
               {
                  id:'p_jndi_click',
                  type:'rect',
                  rect:['207px','115px','52px','50px','auto','auto'],
                  cursor:['pointer'],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgba(0,0,0,1)","none"],
                  userClass:"petal"
               },
               {
                  id:'p_eclipselink_click',
                  type:'rect',
                  rect:['178px','185px','52px','50px','auto','auto'],
                  cursor:['pointer'],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgba(0,0,0,1)","none"],
                  userClass:"petal"
               },
               {
                  id:'p_hibernate_click',
                  type:'rect',
                  rect:['180px','182px','52px','50px','auto','auto'],
                  cursor:['pointer'],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgba(0,0,0,1)","none"],
                  userClass:"petal"
               },
               {
                  id:'p_jersey_click',
                  type:'rect',
                  rect:['106px','218px','52px','50px','auto','auto'],
                  cursor:['pointer'],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgba(0,0,0,1)","none"],
                  userClass:"petal"
               },
               {
                  id:'p_easybeans_click',
                  type:'rect',
                  rect:['41px','180px','52px','50px','auto','auto'],
                  cursor:['pointer'],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgba(0,0,0,1)","none"],
                  userClass:"petal"
               },
               {
                  id:'p_derby_click',
                  type:'rect',
                  rect:['15px','109px','52px','50px','auto','auto'],
                  cursor:['pointer'],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgba(0,0,0,1)","none"],
                  userClass:"petal"
               },
               {
                  id:'p_h2_click',
                  type:'rect',
                  rect:['17px','112px','52px','50px','auto','auto'],
                  cursor:['pointer'],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgba(0,0,0,1)","none"],
                  userClass:"petal"
               },
               {
                  id:'p_aries_click',
                  type:'rect',
                  rect:['41px','45px','52px','50px','auto','auto'],
                  cursor:['pointer'],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgba(0,0,0,1)","none"],
                  userClass:"petal"
               },
               {
                  id:'kernel_click',
                  type:'rect',
                  rect:['120px','123px','33px','32px','auto','auto'],
                  cursor:['pointer'],
                  fill:["rgba(192,192,192,1)"],
                  stroke:[0,"rgba(0,0,0,1)","none"]
               }]
            }]
         },
         {
            id:'step1',
            type:'image',
            rect:['56.5%','12.2%','53.7%','82px','auto','auto'],
            cursor:['help'],
            fill:["rgba(0,0,0,0)",im+"step1_appfact.png",'0px','0px']
         },
         {
            id:'step2',
            type:'image',
            rect:['56.6%','55.6%','64.5%','11.7%','auto','auto'],
            cursor:['help'],
            fill:["rgba(0,0,0,0)",im+"step2_appfact.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_p_jndiServer}": [
            ["style", "top", '54px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '37px'],
            ["style", "opacity", '0'],
            ["style", "left", '50px'],
            ["style", "width", '50px']
         ],
         "${_server2}": [
            ["style", "cursor", 'pointer']
         ],
         "${_p_h2_click}": [
            ["style", "top", '112px'],
            ["style", "left", '17px'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '52px']
         ],
         "${_p_eclipselinkRaspberry}": [
            ["style", "top", '79px'],
            ["transform", "rotateZ", '23deg'],
            ["style", "height", '37px'],
            ["style", "opacity", '0'],
            ["style", "left", '89px'],
            ["style", "width", '50px']
         ],
         "${_p_h2Server}": [
            ["style", "top", '52px'],
            ["style", "height", '37px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '50px']
         ],
         "${_p_h2Cloud}": [
            ["style", "top", '66px'],
            ["style", "height", '37px'],
            ["style", "opacity", '0'],
            ["style", "left", '25px'],
            ["style", "width", '50px']
         ],
         "${_GroupServer}": [
            ["style", "top", '53.65%'],
            ["style", "height", '10.64%'],
            ["style", "opacity", '1'],
            ["style", "left", '69.39%'],
            ["style", "width", '7.93%']
         ],
         "${_p_jotm_click}": [
            ["style", "top", '51px'],
            ["style", "left", '182px'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '52px']
         ],
         "${_p_h2Raspberry}": [
            ["style", "top", '56px'],
            ["style", "height", '37px'],
            ["style", "opacity", '0'],
            ["style", "left", '48px'],
            ["style", "width", '50px']
         ],
         "${_tigeCloud}": [
            ["transform", "scaleX", '0.2312'],
            ["style", "opacity", '0'],
            ["style", "left", '30.94%'],
            ["style", "width", '103px'],
            ["style", "top", '48.58%'],
            ["transform", "scaleY", '0.48841'],
            ["style", "height", '129px'],
            ["style", "clip", [0.71484375,102.84999847412,128.83332824707,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_p_derbyCloud}": [
            ["style", "top", '71px'],
            ["transform", "rotateZ", '20deg'],
            ["style", "height", '37px'],
            ["style", "opacity", '0'],
            ["style", "left", '23px'],
            ["style", "width", '50px']
         ],
         "${_p_hibernateRaspberry}": [
            ["style", "top", '73px'],
            ["style", "height", '46px'],
            ["style", "opacity", '0'],
            ["style", "left", '95px'],
            ["style", "width", '45px']
         ],
         "${_p_jotmCloud}": [
            ["style", "top", '43px'],
            ["style", "height", '45px'],
            ["style", "opacity", '0'],
            ["style", "left", '73px'],
            ["style", "width", '46px']
         ],
         "${_DaisyRaspberry}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0%'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '720deg'],
            ["style", "display", 'block'],
            ["style", "right", '0%'],
            ["style", "left", 'auto'],
            ["transform", "scaleX", '1']
         ],
         "${_p_derby}": [
            ["style", "top", '95px'],
            ["transform", "rotateZ", '20deg'],
            ["style", "height", '110px'],
            ["style", "opacity", '1'],
            ["style", "left", '-21px'],
            ["style", "width", '150px']
         ],
         "${_p_tomcatRaspberry}": [
            ["style", "top", '25px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '79px'],
            ["style", "width", '39px']
         ],
         "${_p_jndiCloud}": [
            ["style", "top", '68px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '37px'],
            ["style", "opacity", '0'],
            ["style", "left", '74px'],
            ["style", "width", '50px']
         ],
         "${_GroupCloud}": [
            ["style", "top", '53.78%'],
            ["style", "height", '120px'],
            ["style", "opacity", '1'],
            ["style", "left", '83.9%'],
            ["style", "width", '107px']
         ],
         "${_Daisy}": [
            ["style", "top", '0%'],
            ["style", "display", 'block'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '720deg'],
            ["transform", "scaleX", '1'],
            ["style", "right", '0%'],
            ["style", "left", 'auto'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_p_derbyServer}": [
            ["style", "top", '57px'],
            ["transform", "rotateZ", '20deg'],
            ["style", "height", '37px'],
            ["style", "opacity", '0'],
            ["style", "left", '-2px'],
            ["style", "width", '50px']
         ],
         "${_DaisyCloud}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '720deg'],
            ["transform", "scaleX", '1'],
            ["style", "right", '0.28%'],
            ["style", "left", 'auto'],
            ["style", "width", '87px'],
            ["style", "top", '0%'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["style", "height", '100px']
         ],
         "${_p_tomcat_click}": [
            ["style", "top", '14px'],
            ["style", "opacity", '0'],
            ["style", "left", '112px'],
            ["style", "cursor", 'pointer']
         ],
         "${_p_aries}": [
            ["style", "top", '6px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '139px'],
            ["style", "opacity", '1'],
            ["style", "left", '7px'],
            ["style", "width", '135px']
         ],
         "${_GroupRaspberry}": [
            ["style", "top", '53.73%'],
            ["style", "height", '10.64%'],
            ["style", "opacity", '1'],
            ["style", "left", '55.21%'],
            ["style", "width", '7.93%']
         ],
         "${_p_h2}": [
            ["style", "top", '80px'],
            ["style", "height", '110px'],
            ["style", "opacity", '1'],
            ["style", "left", '-14px'],
            ["style", "width", '150px']
         ],
         "${_p_eclipselink}": [
            ["style", "top", '152px'],
            ["transform", "rotateZ", '23deg'],
            ["style", "height", '110px'],
            ["style", "opacity", '1'],
            ["style", "left", '114px'],
            ["style", "width", '150px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '900px'],
            ["style", "width", '900px']
         ],
         "${_p_hibernate_click}": [
            ["style", "top", '182px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '180px'],
            ["style", "width", '52px']
         ],
         "${_p_eclipselinkServer}": [
            ["style", "top", '75px'],
            ["transform", "rotateZ", '23deg'],
            ["style", "height", '37px'],
            ["style", "opacity", '0'],
            ["style", "left", '41px'],
            ["style", "width", '50px']
         ],
         "${_p_jotmServer}": [
            ["style", "top", '29px'],
            ["style", "height", '45px'],
            ["style", "opacity", '0'],
            ["style", "left", '48px'],
            ["style", "width", '46px']
         ],
         "${_kernel_click}": [
            ["style", "top", '123px'],
            ["style", "left", '120px'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '33px']
         ],
         "${_tige}": [
            ["transform", "scaleX", '0.69903'],
            ["style", "opacity", '1'],
            ["style", "left", '19.9%'],
            ["style", "width", '103px'],
            ["style", "top", '60.41%'],
            ["transform", "scaleY", '1.4767'],
            ["style", "height", '129px'],
            ["style", "clip", [0.71484375,102.84999847412,128.83332824707,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_p_jettyRaspberry}": [
            ["style", "top", '22px'],
            ["transform", "rotateZ", '22deg'],
            ["style", "overflow", 'visible'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '76px'],
            ["style", "width", '36px']
         ],
         "${_p_easybeansServer}": [
            ["style", "top", '69px'],
            ["style", "height", '45px'],
            ["style", "opacity", '0'],
            ["style", "left", '6px'],
            ["style", "width", '46px']
         ],
         "${_p_tomcat}": [
            ["style", "top", '-12px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '150px'],
            ["style", "opacity", '1'],
            ["style", "left", '81px'],
            ["style", "width", '118px']
         ],
         "${_p_eclipselink_click}": [
            ["style", "top", '185px'],
            ["style", "left", '178px'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '52px']
         ],
         "${_kernel}": [
            ["transform", "scaleX", '1.11111'],
            ["style", "right", '33.59%'],
            ["style", "left", 'auto'],
            ["style", "width", '90px'],
            ["style", "top", '32.36%'],
            ["transform", "scaleY", '1.11102'],
            ["style", "height", '90px'],
            ["style", "clip", [0,90.96484375,89.515625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "opacity", '1']
         ],
         "${_p_tomcatCloud}": [
            ["style", "top", '36px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '57px'],
            ["style", "width", '39px']
         ],
         "${_Group}": [
            ["style", "top", '12.83%'],
            ["style", "left", '67.43%']
         ],
         "${_p_ariesServer}": [
            ["style", "top", '28px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '46px'],
            ["style", "opacity", '0'],
            ["style", "left", '7px'],
            ["style", "width", '45px']
         ],
         "${_p_hibernate}": [
            ["style", "top", '134px'],
            ["style", "height", '138px'],
            ["style", "opacity", '1'],
            ["style", "left", '131px'],
            ["style", "width", '135px']
         ],
         "${_p_ariesRaspberry}": [
            ["style", "top", '32px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '46px'],
            ["style", "opacity", '0'],
            ["style", "left", '55px'],
            ["style", "width", '45px']
         ],
         "${_p_jotm}": [
            ["style", "top", '10px'],
            ["style", "height", '135px'],
            ["style", "opacity", '1'],
            ["style", "left", '132px'],
            ["style", "width", '138px']
         ],
         "${_p_jersey}": [
            ["style", "top", '141px'],
            ["style", "height", '150px'],
            ["style", "opacity", '1'],
            ["style", "left", '79px'],
            ["style", "width", '110px']
         ],
         "${_p_easybeansCloud}": [
            ["style", "top", '83px'],
            ["style", "height", '45px'],
            ["style", "opacity", '0'],
            ["style", "left", '31px'],
            ["style", "width", '46px']
         ],
         "${_kernelCloud}": [
            ["transform", "scaleX", '0.36674'],
            ["style", "right", '-38%'],
            ["style", "left", 'auto'],
            ["style", "width", '90px'],
            ["style", "top", '39.66%'],
            ["transform", "scaleY", '0.36671'],
            ["style", "height", '90px'],
            ["style", "clip", [0,90.96484375,89.515617370605,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "opacity", '0']
         ],
         "${_p_derbyRaspberry}": [
            ["style", "top", '61px'],
            ["transform", "rotateZ", '20deg'],
            ["style", "height", '37px'],
            ["style", "opacity", '0'],
            ["style", "left", '46px'],
            ["style", "width", '50px']
         ],
         "${_p_hibernateServer}": [
            ["style", "top", '69px'],
            ["style", "height", '46px'],
            ["style", "opacity", '0'],
            ["style", "left", '47px'],
            ["style", "width", '45px']
         ],
         "${_kernelServer}": [
            ["transform", "scaleX", '0.36674'],
            ["style", "right", '-284.77%'],
            ["style", "left", 'auto'],
            ["style", "width", '90px'],
            ["style", "top", '88.76%'],
            ["transform", "scaleY", '0.36671'],
            ["style", "height", '90px'],
            ["style", "clip", [0,90.96484375,89.515617370605,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "opacity", '0']
         ],
         "${_p_jettyCloud}": [
            ["style", "top", '34px'],
            ["transform", "rotateZ", '22deg'],
            ["style", "overflow", 'visible'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '54px'],
            ["style", "width", '36px']
         ],
         "${_p_eclipselinkCloud}": [
            ["style", "top", '89px'],
            ["transform", "rotateZ", '23deg'],
            ["style", "height", '37px'],
            ["style", "opacity", '0'],
            ["style", "left", '66px'],
            ["style", "width", '50px']
         ],
         "${_p_hibernateCloud}": [
            ["style", "top", '83px'],
            ["style", "height", '46px'],
            ["style", "opacity", '0'],
            ["style", "left", '72px'],
            ["style", "width", '45px']
         ],
         "${_p_jotmRaspberry}": [
            ["style", "top", '33px'],
            ["style", "height", '45px'],
            ["style", "opacity", '0'],
            ["style", "left", '96px'],
            ["style", "width", '46px']
         ],
         "${_step1}": [
            ["style", "bottom", 'auto'],
            ["style", "right", 'auto'],
            ["style", "left", '56.51%'],
            ["style", "width", '53.69%'],
            ["style", "top", '12.18%'],
            ["style", "height", '82px'],
            ["style", "background-size", [80,80], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "background-position", [0,1], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "cursor", 'help']
         ],
         "${_p_jndiRaspberry}": [
            ["style", "top", '58px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '37px'],
            ["style", "opacity", '0'],
            ["style", "left", '98px'],
            ["style", "width", '50px']
         ],
         "${_p_jerseyCloud}": [
            ["style", "top", '85px'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '55px'],
            ["style", "width", '37px']
         ],
         "${_p_jetty_click}": [
            ["style", "top", '14px'],
            ["style", "opacity", '0'],
            ["style", "left", '113px'],
            ["style", "cursor", 'pointer']
         ],
         "${_tigeServer}": [
            ["transform", "scaleX", '0.2312'],
            ["style", "opacity", '0'],
            ["style", "left", '49.78%'],
            ["style", "width", '103px'],
            ["style", "top", '50.02%'],
            ["transform", "scaleY", '0.48841'],
            ["style", "height", '129px'],
            ["style", "clip", [0.71484375,102.84999847412,128.83332824707,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_DaisyServer}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '720deg'],
            ["transform", "scaleX", '1'],
            ["style", "right", '-0.1%'],
            ["style", "left", 'auto'],
            ["style", "width", '34.89%'],
            ["style", "top", '0%'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["style", "height", '28.52%']
         ],
         "${_p_derby_click}": [
            ["style", "top", '109px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '15px'],
            ["style", "width", '52px']
         ],
         "${_p_jetty}": [
            ["style", "top", '-19px'],
            ["style", "overflow", 'visible'],
            ["transform", "rotateZ", '22deg'],
            ["style", "height", '150px'],
            ["style", "opacity", '1'],
            ["style", "left", '72px'],
            ["style", "width", '109px']
         ],
         "${_p_jerseyRaspberry}": [
            ["style", "top", '75px'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '78px'],
            ["style", "width", '37px']
         ],
         "${_p_ariesCloud}": [
            ["style", "top", '42px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '46px'],
            ["style", "opacity", '0'],
            ["style", "left", '32px'],
            ["style", "width", '45px']
         ],
         "${_p_jndi_click}": [
            ["style", "top", '115px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '207px'],
            ["style", "width", '52px']
         ],
         "${_step2}": [
            ["style", "bottom", 'auto'],
            ["style", "right", 'auto'],
            ["style", "left", '56.62%'],
            ["style", "width", '64.5%'],
            ["style", "top", '55.63%'],
            ["style", "cursor", 'help'],
            ["style", "height", '11.7%'],
            ["style", "background-size", [80,80], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "background-position", [0,1], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0']
         ],
         "${_p_jerseyServer}": [
            ["style", "top", '71px'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '30px'],
            ["style", "width", '37px']
         ],
         "${_p_easybeans_click}": [
            ["style", "top", '180px'],
            ["style", "left", '41px'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '52px']
         ],
         "${_cloud2}": [
            ["style", "cursor", 'pointer']
         ],
         "${_raspberry2}": [
            ["style", "cursor", 'pointer']
         ],
         "${_p_aries_click}": [
            ["style", "top", '45px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '41px'],
            ["style", "width", '52px']
         ],
         "${_tigeRaspberry}": [
            ["transform", "scaleX", '0.2312'],
            ["style", "opacity", '0'],
            ["style", "left", '49.27%'],
            ["style", "width", '103px'],
            ["style", "top", '54.27%'],
            ["transform", "scaleY", '0.48841'],
            ["style", "height", '129px'],
            ["style", "clip", [0.71484375,102.84999847412,128.83332824707,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_p_jndi}": [
            ["style", "top", '88px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '110px'],
            ["style", "opacity", '1'],
            ["style", "left", '138px'],
            ["style", "width", '150px']
         ],
         "${_kernelRaspberry}": [
            ["transform", "scaleX", '0.36674'],
            ["style", "right", '-100.78%'],
            ["style", "left", 'auto'],
            ["style", "width", '90px'],
            ["style", "top", '36.3%'],
            ["transform", "scaleY", '0.36671'],
            ["style", "height", '90px'],
            ["style", "clip", [0,90.96484375,89.515617370605,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "opacity", '0']
         ],
         "${_p_easybeans}": [
            ["style", "top", '132px'],
            ["style", "height", '135px'],
            ["style", "opacity", '1'],
            ["style", "left", '5px'],
            ["style", "width", '138px']
         ],
         "${_p_easybeansRaspberry}": [
            ["style", "top", '73px'],
            ["style", "height", '45px'],
            ["style", "opacity", '0'],
            ["style", "left", '54px'],
            ["style", "width", '46px']
         ],
         "${_p_jettyServer}": [
            ["style", "top", '18px'],
            ["style", "overflow", 'visible'],
            ["transform", "rotateZ", '22deg'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '28px'],
            ["style", "width", '36px']
         ],
         "${_p_jersey_click}": [
            ["style", "top", '218px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '106px'],
            ["style", "width", '52px']
         ],
         "${_p_tomcatServer}": [
            ["style", "top", '21px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '31px'],
            ["style", "width", '39px']
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
})(jQuery, AdobeEdge, "EDGE-6711452");
