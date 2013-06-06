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
            id:'prettycloud',
            type:'image',
            rect:['184px','auto','100px','52px','auto','226px'],
            fill:["rgba(0,0,0,0)",im+"prettycloud.png",'0px','0px']
         },
         {
            id:'prettycloud2',
            type:'image',
            rect:['734px','auto','100px','52px','auto','310px'],
            fill:["rgba(0,0,0,0)",im+"prettycloud.png",'0px','0px']
         },
         {
            id:'prettycloud3',
            type:'image',
            rect:['1056px','auto','100px','52px','auto','186px'],
            fill:["rgba(0,0,0,0)",im+"prettycloud.png",'0px','0px']
         },
         {
            id:'prettycloud4',
            type:'image',
            rect:['1440px','auto','100px','52px','auto','284px'],
            fill:["rgba(0,0,0,0)",im+"prettycloud.png",'0px','0px']
         },
         {
            id:'prettycloud5',
            type:'image',
            rect:['1822px','auto','100px','52px','auto','186px'],
            fill:["rgba(0,0,0,0)",im+"prettycloud.png",'0px','0px']
         },
         {
            id:'prettycloud6',
            type:'image',
            rect:['2190px','auto','100px','52px','auto','266px'],
            fill:["rgba(0,0,0,0)",im+"prettycloud.png",'0px','0px']
         },
         {
            id:'prettycloud7',
            type:'image',
            rect:['2584px','auto','100px','52px','auto','354px'],
            fill:["rgba(0,0,0,0)",im+"prettycloud.png",'0px','0px']
         },
         {
            id:'prettycloud8',
            type:'image',
            rect:['2976px','auto','100px','52px','auto','328px'],
            fill:["rgba(0,0,0,0)",im+"prettycloud.png",'0px','0px']
         },
         {
            id:'sun',
            display:'none',
            type:'image',
            rect:['792px','14px','88px','86px','auto','auto'],
            opacity:0.19480518532264,
            fill:["rgba(0,0,0,0)",im+"sun.png",'0px','0px']
         },
         {
            id:'road',
            type:'image',
            rect:['0px','448px','500px','23px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"road.png",'0px','0px']
         },
         {
            id:'roadCopy',
            type:'image',
            rect:['478px','448px','500px','23px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"road.png",'0px','0px']
         },
         {
            id:'roadCopy2',
            type:'image',
            rect:['958px','448px','500px','23px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"road.png",'0px','0px']
         },
         {
            id:'roadCopy3',
            type:'image',
            rect:['1438px','448px','500px','23px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"road.png",'0px','0px']
         },
         {
            id:'truck-red',
            type:'image',
            rect:['-440px','206px','500px','312px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"truck-red.png",'0px','0px','80%','80%']
         },
         {
            id:'app-green',
            type:'image',
            rect:['-395px','90px','150px','188px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"app-green.png",'0px','0px','75%','75%']
         },
         {
            id:'speech-peergreen',
            display:'none',
            type:'image',
            rect:['121px','153px','354px','224px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"speech-peergreen.png",'0px','0px']
         },
         {
            id:'speech-oldmw',
            display:'none',
            type:'image',
            rect:['264px','90px','353px','246px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"speech-oldmw.png",'0px','0px']
         },
         {
            id:'smoke-little',
            display:'none',
            type:'image',
            rect:['156px','377px','142px','112px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"smoke-little.png",'0px','0px','50%','50%']
         },
         {
            id:'smoke-normal',
            display:'none',
            type:'image',
            rect:['86px','313px','176px','147px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"smoke-normal.png",'0px','0px','50%','50%']
         },
         {
            id:'smoke-big',
            display:'none',
            type:'image',
            rect:['10px','200px','270px','211px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"smoke-big.png",'0px','0px','50%','50%']
         },
         {
            id:'balloon-jpa-servlet',
            type:'image',
            rect:['367px','-200px','148px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"balloon-jpa-servlet.png",'0px','0px']
         },
         {
            id:'balloon-jaxrs',
            display:'none',
            type:'image',
            rect:['516','-178','79px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"balloon-jaxrs.png",'0px','0px']
         },
         {
            id:'speech-peergreen-upgrade',
            display:'none',
            type:'image',
            rect:['465px','174px','354px','224px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"speech-peergreen-upgrade.png",'0px','0px']
         },
         {
            id:'peergreen-platform-overview',
            display:'none',
            type:'image',
            rect:['456px','184px','500px','248px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"peergreen-platform-overview.png",'0px','0px']
         },
         {
            id:'peergreen-logo',
            display:'none',
            type:'image',
            rect:['952px','420px','408px','101px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"peergreen-logo.png",'0px','0px']
         },
         {
            id:'mine-bugs',
            type:'image',
            rect:['960px','83px','100px','97px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mine-bugs.png",'0px','0px']
         },
         {
            id:'mine-dvlpt',
            type:'image',
            rect:['1156px','397px','100px','97px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mine-dvlpt.png",'0px','0px']
         },
         {
            id:'mine-infra',
            type:'image',
            rect:['1256px','14px','100px','97px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mine-infra.png",'0px','0px']
         },
         {
            id:'mine-maintenance',
            type:'image',
            rect:['1450px','300px','100px','97px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mine-maintenance.png",'0px','0px']
         },
         {
            id:'mine-mngt',
            type:'image',
            rect:['1618px','72px','100px','97px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mine-mngt.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_smoke-normal}": [
            ["style", "top", '313px'],
            ["style", "background-size", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '86px'],
            ["style", "display", 'none']
         ],
         "${_smoke-little}": [
            ["style", "top", '377px'],
            ["style", "background-size", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '156px'],
            ["style", "display", 'none']
         ],
         "${_sun}": [
            ["style", "top", '14px'],
            ["style", "display", 'none'],
            ["style", "height", '86px'],
            ["style", "opacity", '0.18831168831169'],
            ["style", "left", '792px'],
            ["style", "width", '88px']
         ],
         "${_prettycloud4}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '284px'],
            ["style", "height", '42px'],
            ["style", "opacity", '0.15584382956678'],
            ["style", "left", '1440px'],
            ["style", "width", '80px']
         ],
         "${_roadCopy}": [
            ["style", "left", '478px'],
            ["style", "top", '448px']
         ],
         "${_mine-bugs}": [
            ["style", "left", '960px'],
            ["style", "top", '83px']
         ],
         "${_truck-red}": [
            ["style", "top", '206px'],
            ["style", "-webkit-transform-origin", [63.55,82.05], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [63.55,82.05],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [63.55,82.05],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [63.55,82.05],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [63.55,82.05],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "display", 'block'],
            ["style", "background-size", [80,80], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '-560px'],
            ["style", "width", '620px']
         ],
         "${_prettycloud2}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '310px'],
            ["style", "height", '42px'],
            ["style", "opacity", '0.15584382956678'],
            ["style", "left", '734px'],
            ["style", "width", '80px']
         ],
         "${_speech-peergreen}": [
            ["style", "top", '153px'],
            ["style", "left", '121px'],
            ["style", "display", 'none']
         ],
         "${_mine-infra}": [
            ["style", "left", '1256px'],
            ["style", "top", '-6px']
         ],
         "${_prettycloud3}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '286px'],
            ["style", "height", '42px'],
            ["style", "opacity", '0.15584382956678'],
            ["style", "left", '1056px'],
            ["style", "width", '80px']
         ],
         "${_app-green}": [
            ["style", "top", '130px'],
            ["style", "background-size", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '-395px'],
            ["style", "display", 'block']
         ],
         "${_roadCopy2}": [
            ["style", "top", '448px'],
            ["style", "left", '958px'],
            ["style", "display", 'block']
         ],
         "${_prettycloud}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '326px'],
            ["style", "height", '42px'],
            ["style", "opacity", '0.15584382956678'],
            ["style", "left", '184px'],
            ["style", "width", '80px']
         ],
         "${_balloon-jaxrs}": [
            ["style", "top", '-208px'],
            ["style", "left", '465px'],
            ["style", "display", 'none']
         ],
         "${_prettycloud8}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '328px'],
            ["style", "height", '42px'],
            ["style", "display", 'block'],
            ["style", "left", '2976px'],
            ["style", "width", '80px']
         ],
         "${_balloon-jpa-servlet}": [
            ["style", "left", '367px'],
            ["style", "top", '-200px']
         ],
         "${_peergreen-logo}": [
            ["style", "top", '410px'],
            ["style", "left", '952px'],
            ["style", "display", 'none']
         ],
         "${_TextCopy2}": [
            ["style", "top", '62px'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", '700'],
            ["style", "left", '246px'],
            ["style", "font-family", 'MS Serif, New York, serif']
         ],
         "${_prettycloud5}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '286px'],
            ["style", "height", '42px'],
            ["style", "opacity", '0.15584382956678'],
            ["style", "left", '1822px'],
            ["style", "width", '80px']
         ],
         "${_speech-peergreen-upgrade}": [
            ["style", "top", '174px'],
            ["style", "left", '465px'],
            ["style", "display", 'none']
         ],
         "${_peergreen-platform-overview}": [
            ["style", "top", '174px'],
            ["style", "left", '906px'],
            ["style", "display", 'none']
         ],
         "${_TextCopy3}": [
            ["style", "top", '62px'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", '700'],
            ["style", "left", '246px'],
            ["style", "font-family", 'MS Serif, New York, serif']
         ],
         "${_jonas4Copy}": [
            ["color", "color", 'rgba(180,32,32,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '888px'],
            ["style", "font-size", '70px'],
            ["style", "top", '17px'],
            ["style", "font-style", 'italic'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "height", '86px'],
            ["style", "width", '400px']
         ],
         "${_OSGiCopy}": [
            ["color", "color", 'rgba(180,32,32,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1051px'],
            ["style", "font-size", '70px'],
            ["style", "top", '22px'],
            ["style", "display", 'block'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "height", '86px'],
            ["style", "width", '234px']
         ],
         "${_road}": [
            ["style", "left", '0px'],
            ["style", "top", '448px']
         ],
         "${_mine-mngt}": [
            ["style", "top", '72px'],
            ["style", "left", '1618px']
         ],
         "${_prettycloud6}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '266px'],
            ["style", "height", '42px'],
            ["style", "left", '2190px'],
            ["style", "width", '80px']
         ],
         "${_roadCopy3}": [
            ["style", "top", '448px'],
            ["style", "left", '1438px'],
            ["style", "display", 'block']
         ],
         "${_mine-dvlpt}": [
            ["style", "top", '397px'],
            ["style", "left", '1156px']
         ],
         "${_mine-maintenance}": [
            ["style", "top", '380px'],
            ["style", "left", '2060px']
         ],
         "${_smoke-big}": [
            ["style", "top", '200px'],
            ["style", "background-size", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '10px'],
            ["style", "display", 'none']
         ],
         "${_speech-oldmw}": [
            ["style", "top", '93px'],
            ["style", "left", '-56px'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '500px'],
            ["gradient", "background-image", [270,[['rgba(48,47,53,1.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "width", '900px']
         ],
         "${_prettycloud7}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '354px'],
            ["style", "height", '42px'],
            ["style", "left", '2584px'],
            ["style", "width", '80px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 24750,
         autoPlay: true,
         labels: {
            "start": 0
         },
         timeline: [
            { id: "eid2252", tween: [ "style", "${_app-green}", "background-size", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2651, duration: 0 },
            { id: "eid1213", tween: [ "style", "${_prettycloud4}", "width", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid2256", tween: [ "style", "${_balloon-jpa-servlet}", "top", '-60px', { fromValue: '-200px'}], position: 11000, duration: 250 },
            { id: "eid2265", tween: [ "style", "${_balloon-jpa-servlet}", "top", '90px', { fromValue: '-60px'}], position: 11250, duration: 750 },
            { id: "eid2277", tween: [ "style", "${_balloon-jpa-servlet}", "top", '210px', { fromValue: '90px'}], position: 15000, duration: 1000, easing: "swing" },
            { id: "eid2280", tween: [ "style", "${_balloon-jpa-servlet}", "top", '50px', { fromValue: '210px'}], position: 16000, duration: 1000, easing: "swing" },
            { id: "eid2284", tween: [ "style", "${_balloon-jpa-servlet}", "top", '210px', { fromValue: '50px'}], position: 17000, duration: 500, easing: "swing" },
            { id: "eid2288", tween: [ "style", "${_balloon-jpa-servlet}", "top", '-2px', { fromValue: '210px'}], position: 17500, duration: 750, easing: "swing" },
            { id: "eid2292", tween: [ "style", "${_balloon-jpa-servlet}", "top", '170px', { fromValue: '-2px'}], position: 18250, duration: 750, easing: "swing" },
            { id: "eid2447", tween: [ "style", "${_mine-bugs}", "left", '21px', { fromValue: '960px'}], position: 15000, duration: 1000, easing: "swing" },
            { id: "eid2453", tween: [ "style", "${_mine-bugs}", "left", '13px', { fromValue: '21px'}], position: 16000, duration: 1000, easing: "swing" },
            { id: "eid2473", tween: [ "style", "${_mine-bugs}", "left", '-12px', { fromValue: '13px'}], position: 17000, duration: 500, easing: "swing" },
            { id: "eid2475", tween: [ "style", "${_mine-bugs}", "left", '-760px', { fromValue: '-12px'}], position: 17500, duration: 3000, easing: "swing" },
            { id: "eid2340", tween: [ "style", "${_prettycloud3}", "opacity", '0.20129889985184', { fromValue: '0.15584382956678'}], position: 0, duration: 11000, easing: "easeOutBounce" },
            { id: "eid2349", tween: [ "style", "${_prettycloud3}", "opacity", '1', { fromValue: '0.20129889985184'}], position: 11750, duration: 0, easing: "easeOutBounce" },
            { id: "eid2298", tween: [ "style", "${_balloon-jaxrs}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
            { id: "eid2379", tween: [ "style", "${_peergreen-logo}", "left", '352px', { fromValue: '952px'}], position: 22000, duration: 1000 },
            { id: "eid2196", tween: [ "style", "${_prettycloud}", "bottom", '326px', { fromValue: '326px'}], position: 0, duration: 0 },
            { id: "eid2213", tween: [ "style", "${_smoke-normal}", "left", '86px', { fromValue: '86px'}], position: 7000, duration: 0 },
            { id: "eid2223", tween: [ "style", "${_smoke-normal}", "left", '86px', { fromValue: '86px'}], position: 9500, duration: 0 },
            { id: "eid2456", tween: [ "style", "${_mine-infra}", "top", '-6px', { fromValue: '-6px'}], position: 15000, duration: 0, easing: "swing" },
            { id: "eid2238", tween: [ "style", "${_truck-red}", "width", '620px', { fromValue: '620px'}], position: 0, duration: 0 },
            { id: "eid514", tween: [ "style", "${_prettycloud7}", "left", '-176px', { fromValue: '2584px'}], position: 0, duration: 23000 },
            { id: "eid1211", tween: [ "style", "${_prettycloud}", "width", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid1206", tween: [ "style", "${_prettycloud5}", "height", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid2306", tween: [ "style", "${_roadCopy2}", "display", 'none', { fromValue: 'block'}], position: 11750, duration: 0 },
            { id: "eid2233", tween: [ "style", "${_roadCopy2}", "display", 'none', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid1216", tween: [ "style", "${_prettycloud7}", "height", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid2444", tween: [ "style", "${_mine-dvlpt}", "left", '627px', { fromValue: '1156px'}], position: 15000, duration: 1000, easing: "swing" },
            { id: "eid2463", tween: [ "style", "${_mine-dvlpt}", "left", '-564px', { fromValue: '627px'}], position: 16000, duration: 4500, easing: "swing" },
            { id: "eid2342", tween: [ "style", "${_prettycloud2}", "opacity", '0.20129889985184', { fromValue: '0.15584382956678'}], position: 0, duration: 11000, easing: "easeOutBounce" },
            { id: "eid2348", tween: [ "style", "${_prettycloud2}", "opacity", '1', { fromValue: '0.20129889985184'}], position: 11750, duration: 0, easing: "easeOutBounce" },
            { id: "eid2448", tween: [ "style", "${_mine-infra}", "left", '198px', { fromValue: '1256px'}], position: 15000, duration: 2500, easing: "swing" },
            { id: "eid2474", tween: [ "style", "${_mine-infra}", "left", '-464px', { fromValue: '198px'}], position: 17500, duration: 3000, easing: "swing" },
            { id: "eid2209", tween: [ "style", "${_road}", "left", '-1380px', { fromValue: '0px'}], position: 6000, duration: 5000 },
            { id: "eid1214", tween: [ "style", "${_prettycloud6}", "height", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid512", tween: [ "style", "${_prettycloud3}", "left", '-1704px', { fromValue: '1056px'}], position: 0, duration: 23000 },
            { id: "eid2299", tween: [ "style", "${_balloon-jaxrs}", "top", '173px', { fromValue: '-208px'}], position: 19000, duration: 1000 },
            { id: "eid1215", tween: [ "style", "${_prettycloud6}", "width", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid2380", tween: [ "style", "${_peergreen-logo}", "top", '370px', { fromValue: '410px'}], position: 22000, duration: 1000 },
            { id: "eid2341", tween: [ "style", "${_prettycloud4}", "opacity", '0.20129889985184', { fromValue: '0.15584382956678'}], position: 0, duration: 11000, easing: "easeOutBounce" },
            { id: "eid2350", tween: [ "style", "${_prettycloud4}", "opacity", '1', { fromValue: '0.20129889985184'}], position: 11750, duration: 0, easing: "easeOutBounce" },
            { id: "eid515", tween: [ "style", "${_prettycloud2}", "left", '-2026px', { fromValue: '734px'}], position: 0, duration: 23000 },
            { id: "eid511", tween: [ "style", "${_prettycloud6}", "left", '-570px', { fromValue: '2190px'}], position: 0, duration: 23000 },
            { id: "eid2467", tween: [ "style", "${_mine-maintenance}", "top", '380px', { fromValue: '380px'}], position: 17500, duration: 0, easing: "swing" },
            { id: "eid2446", tween: [ "style", "${_mine-mngt}", "left", '1085px', { fromValue: '1618px'}], position: 15000, duration: 2000, easing: "swing" },
            { id: "eid2461", tween: [ "style", "${_mine-mngt}", "left", '650px', { fromValue: '1085px'}], position: 17000, duration: 500, easing: "swing" },
            { id: "eid2462", tween: [ "style", "${_mine-mngt}", "left", '471px', { fromValue: '650px'}], position: 17500, duration: 750, easing: "swing" },
            { id: "eid2476", tween: [ "style", "${_mine-mngt}", "left", '-102px', { fromValue: '471px'}], position: 18250, duration: 2250, easing: "swing" },
            { id: "eid2381", tween: [ "style", "${_peergreen-platform-overview}", "left", '306px', { fromValue: '906px'}], position: 22000, duration: 1000 },
            { id: "eid2391", tween: [ "style", "${_sun}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0, easing: "easeOutBounce" },
            { id: "eid513", tween: [ "style", "${_prettycloud4}", "left", '-1320px', { fromValue: '1440px'}], position: 0, duration: 23000 },
            { id: "eid1212", tween: [ "style", "${_prettycloud4}", "height", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid2445", tween: [ "style", "${_mine-maintenance}", "left", '1521px', { fromValue: '2060px'}], position: 15000, duration: 1000, easing: "swing" },
            { id: "eid2468", tween: [ "style", "${_mine-maintenance}", "left", '1043px', { fromValue: '1521px'}], position: 16000, duration: 649, easing: "swing" },
            { id: "eid2464", tween: [ "style", "${_mine-maintenance}", "left", '1415px', { fromValue: '1043px'}], position: 16649, duration: 351, easing: "swing" },
            { id: "eid2465", tween: [ "style", "${_mine-maintenance}", "left", '1104px', { fromValue: '1415px'}], position: 17000, duration: 500, easing: "swing" },
            { id: "eid2466", tween: [ "style", "${_mine-maintenance}", "left", '613px', { fromValue: '1104px'}], position: 17500, duration: 750, easing: "swing" },
            { id: "eid2477", tween: [ "style", "${_mine-maintenance}", "left", '-270px', { fromValue: '613px'}], position: 18250, duration: 2250, easing: "swing" },
            { id: "eid2382", tween: [ "style", "${_peergreen-platform-overview}", "top", '134px', { fromValue: '174px'}], position: 22000, duration: 1000 },
            { id: "eid2210", tween: [ "style", "${_roadCopy}", "left", '-902px', { fromValue: '478px'}], position: 6000, duration: 5000 },
            { id: "eid2197", tween: [ "style", "${_prettycloud3}", "bottom", '286px', { fromValue: '286px'}], position: 0, duration: 0 },
            { id: "eid2199", tween: [ "style", "${_speech-oldmw}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid2407", tween: [ "style", "${_speech-oldmw}", "display", 'block', { fromValue: 'block'}], position: 1208, duration: 0, easing: "easeOutBounce" },
            { id: "eid2200", tween: [ "style", "${_speech-oldmw}", "display", 'block', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid2421", tween: [ "style", "${_speech-oldmw}", "display", 'none', { fromValue: 'block'}], position: 5107, duration: 0, easing: "easeOutBounce" },
            { id: "eid2409", tween: [ "style", "${_speech-oldmw}", "display", 'none', { fromValue: 'none'}], position: 6250, duration: 0, easing: "easeOutBounce" },
            { id: "eid1714", tween: [ "style", "${_prettycloud8}", "display", 'none', { fromValue: 'block'}], position: 24750, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2214", tween: [ "style", "${_smoke-normal}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
            { id: "eid2218", tween: [ "style", "${_smoke-normal}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid2222", tween: [ "style", "${_smoke-normal}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
            { id: "eid2227", tween: [ "style", "${_smoke-normal}", "display", 'none', { fromValue: 'block'}], position: 10750, duration: 0 },
            { id: "eid2339", tween: [ "style", "${_prettycloud}", "opacity", '0.20129889985184', { fromValue: '0.15584382956678'}], position: 0, duration: 11000, easing: "easeOutBounce" },
            { id: "eid2347", tween: [ "style", "${_prettycloud}", "opacity", '1', { fromValue: '0.20129889985184'}], position: 11750, duration: 0, easing: "easeOutBounce" },
            { id: "eid1217", tween: [ "style", "${_prettycloud7}", "width", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid2371", tween: [ "style", "${_peergreen-logo}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
            { id: "eid2352", tween: [ "style", "${_speech-peergreen-upgrade}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
            { id: "eid2353", tween: [ "style", "${_speech-peergreen-upgrade}", "display", 'none', { fromValue: 'block'}], position: 21750, duration: 0 },
            { id: "eid1205", tween: [ "style", "${_prettycloud8}", "width", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid2406", tween: [ "style", "${_speech-oldmw}", "left", '4px', { fromValue: '-56px'}], position: 750, duration: 667, easing: "easeOutBounce" },
            { id: "eid2415", tween: [ "style", "${_speech-oldmw}", "left", '538px', { fromValue: '4px'}], position: 1875, duration: 3125 },
            { id: "eid2215", tween: [ "style", "${_smoke-big}", "left", '10px', { fromValue: '10px'}], position: 7500, duration: 0 },
            { id: "eid2225", tween: [ "style", "${_smoke-big}", "left", '10px', { fromValue: '10px'}], position: 10000, duration: 0 },
            { id: "eid1204", tween: [ "style", "${_prettycloud8}", "height", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid510", tween: [ "style", "${_prettycloud8}", "left", '216px', { fromValue: '2976px'}], position: 0, duration: 23000 },
            { id: "eid2241", tween: [ "transform", "${_truck-red}", "rotateZ", '80deg', { fromValue: '0deg'}], position: 11000, duration: 750 },
            { id: "eid1513", tween: [ "style", "${_Stage}", "width", '900px', { fromValue: '900px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1203", tween: [ "style", "${_prettycloud2}", "width", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid1210", tween: [ "style", "${_prettycloud}", "height", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid2253", tween: [ "style", "${_app-green}", "top", '130px', { fromValue: '130px'}], position: 0, duration: 0 },
            { id: "eid2266", tween: [ "style", "${_app-green}", "top", '280px', { fromValue: '130px'}], position: 11250, duration: 750 },
            { id: "eid2279", tween: [ "style", "${_app-green}", "top", '400px', { fromValue: '280px'}], position: 15000, duration: 1000, easing: "swing" },
            { id: "eid2281", tween: [ "style", "${_app-green}", "top", '240px', { fromValue: '400px'}], position: 16000, duration: 1000, easing: "swing" },
            { id: "eid2286", tween: [ "style", "${_app-green}", "top", '400px', { fromValue: '240px'}], position: 17000, duration: 500, easing: "swing" },
            { id: "eid2290", tween: [ "style", "${_app-green}", "top", '188px', { fromValue: '400px'}], position: 17500, duration: 750, easing: "swing" },
            { id: "eid2294", tween: [ "style", "${_app-green}", "top", '360px', { fromValue: '188px'}], position: 18250, duration: 750, easing: "swing" },
            { id: "eid2248", tween: [ "style", "${_app-green}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid2211", tween: [ "style", "${_smoke-little}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
            { id: "eid2219", tween: [ "style", "${_smoke-little}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid2220", tween: [ "style", "${_smoke-little}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "eid2228", tween: [ "style", "${_smoke-little}", "display", 'none', { fromValue: 'block'}], position: 10750, duration: 0 },
            { id: "eid2326", tween: [ "style", "${_sun}", "opacity", '0.39222887893776', { fromValue: '0.18831168831169'}], position: 0, duration: 11000, easing: "easeOutBounce" },
            { id: "eid2327", tween: [ "style", "${_sun}", "opacity", '1', { fromValue: '0.39222887893776'}], position: 11000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid2212", tween: [ "style", "${_smoke-little}", "left", '156px', { fromValue: '156px'}], position: 6500, duration: 0 },
            { id: "eid2221", tween: [ "style", "${_smoke-little}", "left", '156px', { fromValue: '156px'}], position: 9000, duration: 0 },
            { id: "eid2250", tween: [ "style", "${_app-green}", "left", '415px', { fromValue: '-395px'}], position: 1500, duration: 4500 },
            { id: "eid2264", tween: [ "style", "${_app-green}", "left", '565px', { fromValue: '415px'}], position: 11250, duration: 750 },
            { id: "eid2278", tween: [ "style", "${_app-green}", "left", '135px', { fromValue: '565px'}], position: 15000, duration: 1000, easing: "swing" },
            { id: "eid2283", tween: [ "style", "${_app-green}", "left", '665px', { fromValue: '135px'}], position: 16000, duration: 1000, easing: "swing" },
            { id: "eid2287", tween: [ "style", "${_app-green}", "left", '725px', { fromValue: '665px'}], position: 17000, duration: 500, easing: "swing" },
            { id: "eid2291", tween: [ "style", "${_app-green}", "left", '755px', { fromValue: '725px'}], position: 17500, duration: 750, easing: "swing" },
            { id: "eid2295", tween: [ "style", "${_app-green}", "left", '315px', { fromValue: '755px'}], position: 18250, duration: 750, easing: "swing" },
            { id: "eid2363", tween: [ "style", "${_app-green}", "left", '135px', { fromValue: '315px'}], position: 20750, duration: 1000 },
            { id: "eid2257", tween: [ "style", "${_balloon-jpa-servlet}", "left", '347px', { fromValue: '367px'}], position: 11000, duration: 250 },
            { id: "eid2263", tween: [ "style", "${_balloon-jpa-servlet}", "left", '497px', { fromValue: '347px'}], position: 11250, duration: 750 },
            { id: "eid2276", tween: [ "style", "${_balloon-jpa-servlet}", "left", '67px', { fromValue: '497px'}], position: 15000, duration: 1000, easing: "swing" },
            { id: "eid2282", tween: [ "style", "${_balloon-jpa-servlet}", "left", '597px', { fromValue: '67px'}], position: 16000, duration: 1000, easing: "swing" },
            { id: "eid2285", tween: [ "style", "${_balloon-jpa-servlet}", "left", '657px', { fromValue: '597px'}], position: 17000, duration: 500, easing: "swing" },
            { id: "eid2289", tween: [ "style", "${_balloon-jpa-servlet}", "left", '689px', { fromValue: '657px'}], position: 17500, duration: 750, easing: "swing" },
            { id: "eid2293", tween: [ "style", "${_balloon-jpa-servlet}", "left", '247px', { fromValue: '689px'}], position: 18250, duration: 750, easing: "swing" },
            { id: "eid2364", tween: [ "style", "${_balloon-jpa-servlet}", "left", '67px', { fromValue: '247px'}], position: 20750, duration: 1000 },
            { id: "eid2300", tween: [ "style", "${_balloon-jaxrs}", "left", '356px', { fromValue: '465px'}], position: 19000, duration: 1000 },
            { id: "eid2362", tween: [ "style", "${_balloon-jaxrs}", "left", '176px', { fromValue: '356px'}], position: 20750, duration: 1000 },
            { id: "eid2317", tween: [ "gradient", "${_Stage}", "background-image", [270,[['rgba(42,40,49,1.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(48,47,53,1.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 0, duration: 11000, easing: "easeOutBounce" },
            { id: "eid2318", tween: [ "gradient", "${_Stage}", "background-image", [270,[['rgba(75,44,211,1.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(42,40,49,1.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 12000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2305", tween: [ "style", "${_roadCopy3}", "display", 'none', { fromValue: 'block'}], position: 11750, duration: 0 },
            { id: "eid2232", tween: [ "style", "${_roadCopy3}", "display", 'none', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid2198", tween: [ "style", "${_prettycloud5}", "bottom", '286px', { fromValue: '286px'}], position: 0, duration: 0 },
            { id: "eid2243", tween: [ "style", "${_truck-red}", "left", '-560px', { fromValue: '-560px'}], position: 0, duration: 0 },
            { id: "eid2202", tween: [ "style", "${_truck-red}", "left", '240px', { fromValue: '-560px'}], position: 1500, duration: 4500 },
            { id: "eid2208", tween: [ "style", "${_roadCopy3}", "left", '58px', { fromValue: '1438px'}], position: 6000, duration: 5000 },
            { id: "eid1208", tween: [ "style", "${_prettycloud3}", "height", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid997", tween: [ "style", "${_Stage}", "height", '500px', { fromValue: '500px'}], position: 0, duration: 0 },
            { id: "eid2354", tween: [ "style", "${_peergreen-platform-overview}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
            { id: "eid2242", tween: [ "style", "${_truck-red}", "top", '646px', { fromValue: '206px'}], position: 11000, duration: 750 },
            { id: "eid2271", tween: [ "style", "${_truck-red}", "display", 'none', { fromValue: 'block'}], position: 11750, duration: 0 },
            { id: "eid1207", tween: [ "style", "${_prettycloud5}", "width", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid2338", tween: [ "style", "${_prettycloud5}", "opacity", '0.20129889985184', { fromValue: '0.15584382956678'}], position: 0, duration: 11000, easing: "easeOutBounce" },
            { id: "eid2351", tween: [ "style", "${_prettycloud5}", "opacity", '1', { fromValue: '0.20129889985184'}], position: 11750, duration: 0, easing: "easeOutBounce" },
            { id: "eid2207", tween: [ "style", "${_roadCopy2}", "left", '-422px', { fromValue: '958px'}], position: 6000, duration: 5000 },
            { id: "eid1209", tween: [ "style", "${_prettycloud3}", "width", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid517", tween: [ "style", "${_prettycloud}", "left", '-2576px', { fromValue: '184px'}], position: 0, duration: 23000 },
            { id: "eid516", tween: [ "style", "${_prettycloud5}", "left", '-938px', { fromValue: '1822px'}], position: 0, duration: 23000 },
            { id: "eid1202", tween: [ "style", "${_prettycloud2}", "height", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid2240", tween: [ "style", "${_truck-red}", "-webkit-transform-origin", [63.55,82.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [63.55,82.05]}], position: 11000, duration: 0 },
            { id: "eid2478", tween: [ "style", "${_truck-red}", "-moz-transform-origin", [63.55,82.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [63.55,82.05]}], position: 11000, duration: 0 },
            { id: "eid2479", tween: [ "style", "${_truck-red}", "-ms-transform-origin", [63.55,82.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [63.55,82.05]}], position: 11000, duration: 0 },
            { id: "eid2480", tween: [ "style", "${_truck-red}", "msTransformOrigin", [63.55,82.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [63.55,82.05]}], position: 11000, duration: 0 },
            { id: "eid2481", tween: [ "style", "${_truck-red}", "-o-transform-origin", [63.55,82.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [63.55,82.05]}], position: 11000, duration: 0 },
            { id: "eid2216", tween: [ "style", "${_smoke-big}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
            { id: "eid2217", tween: [ "style", "${_smoke-big}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid2224", tween: [ "style", "${_smoke-big}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
            { id: "eid2226", tween: [ "style", "${_smoke-big}", "display", 'none', { fromValue: 'block'}], position: 10750, duration: 0 },
            { id: "eid2230", tween: [ "style", "${_speech-peergreen}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid2231", tween: [ "style", "${_speech-peergreen}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-422264897");
