
(function($,Edge,compId){var _=null,y=true,n=false,or='-webkit-transform-origin',qw='swing',e42='${_smoke-little}',e47='${_sun}',e48='${_prettycloud4}',e53='${_roadCopy}',b='block',e51='${_mine-bugs}',a='Base State',bsz='background-size',x37='hidden',s='style',i='none',e40='${_prettycloud8}',e56='${_balloon-jpa-servlet}',lf='left',x34='Tahoma, Geneva, sans-serif',x33='bold',e52='${_peergreen-platform-overview}',bg='background-color',x26='auto',bt='bottom',e59='${_prettycloud7}',fs='font-size',tp='top',x3='rgba(0,0,0,0)',e67='${_prettycloud}',ov='overflow',e43='${_Stage}',e66='${_mine-infra}',x24='stage',e65='${_roadCopy2}',e64='${_mine-maintenance}',e49='${_prettycloud5}',c='color',x31='rgba(180,32,32,1)',x2='1.5.0.217',dt='Default Timeline',e60='${_prettycloud3}',x28='italic',e58='${_speech-peergreen}',e57='${_prettycloud2}',oo='-o-transform-origin',on='msTransformOrigin',om='-ms-transform-origin',t='transform',e55='${_truck-red}',rz='rotateZ',oz='-moz-transform-origin',r='deg',e54='${_mine-mngt}',e50='${_speech-oldmw}',e63='${_app-green}',h='height',e68='${_balloon-jaxrs}',e44='${_smoke-big}',e39='${_mine-dvlpt}',e41='${_smoke-normal}',p='px',o='opacity',x29='MS Serif, New York, serif',e30='${_TextCopy3}',e45='${_peergreen-logo}',qob='easeOutBounce',g='image',e27='${_TextCopy2}',e46='${_speech-peergreen-upgrade}',x1='1.5.0',x36='rgba(255,255,255,1)',qq='easeInOutQuad',d='display',e35='${_OSGiCopy}',e38='${_road}',w='width',e61='${_prettycloud6}',e62='${_roadCopy3}',ql='linear',e32='${_jonas4Copy}',ff='font-family',x25='@@0@@% @@1@@%';var im='images/';var g20='mine-dvlpt.png',g17='peergreen-platform-overview.png',g19='mine-bugs.png',g18='peergreen-logo.png',g4='prettycloud.png',g15='balloon-jaxrs.png',g9='speech-peergreen.png',g23='mine-mngt.png',g11='smoke-little.png',g10='speech-oldmw.png',g16='speech-peergreen-upgrade.png',g13='smoke-big.png',g12='smoke-normal.png',g22='mine-maintenance.png',g14='balloon-jpa-servlet.png',g21='mine-infra.png',g5='sun.png',g8='app-green.png',g6='road.png',g7='truck-red.png';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'prettycloud',t:g,r:['184px','auto','100px','52px','auto','226px'],f:[x3,im+g4,'0px','0px']},{id:'prettycloud2',t:g,r:['734px','auto','100px','52px','auto','310px'],f:[x3,im+g4,'0px','0px']},{id:'prettycloud3',t:g,r:['1056px','auto','100px','52px','auto','186px'],f:[x3,im+g4,'0px','0px']},{id:'prettycloud4',t:g,r:['1440px','auto','100px','52px','auto','284px'],f:[x3,im+g4,'0px','0px']},{id:'prettycloud5',t:g,r:['1822px','auto','100px','52px','auto','186px'],f:[x3,im+g4,'0px','0px']},{id:'prettycloud6',t:g,r:['2190px','auto','100px','52px','auto','266px'],f:[x3,im+g4,'0px','0px']},{id:'prettycloud7',t:g,r:['2584px','auto','100px','52px','auto','354px'],f:[x3,im+g4,'0px','0px']},{id:'prettycloud8',t:g,r:['2976px','auto','100px','52px','auto','328px'],f:[x3,im+g4,'0px','0px']},{id:'sun',v:i,t:g,r:['792px','14px','88px','86px','auto','auto'],o:0.19480518532264,f:[x3,im+g5,'0px','0px']},{id:'road',t:g,r:['0px','448px','500px','23px','auto','auto'],f:[x3,im+g6,'0px','0px']},{id:'roadCopy',t:g,r:['478px','448px','500px','23px','auto','auto'],f:[x3,im+g6,'0px','0px']},{id:'roadCopy2',t:g,r:['958px','448px','500px','23px','auto','auto'],f:[x3,im+g6,'0px','0px']},{id:'roadCopy3',t:g,r:['1438px','448px','500px','23px','auto','auto'],f:[x3,im+g6,'0px','0px']},{id:'truck-red',t:g,r:['-440px','206px','500px','312px','auto','auto'],f:[x3,im+g7,'0px','0px','80%','80%']},{id:'app-green',t:g,r:['-395px','90px','150px','188px','auto','auto'],f:[x3,im+g8,'0px','0px','75%','75%']},{id:'speech-peergreen',v:i,t:g,r:['121px','153px','354px','224px','auto','auto'],f:[x3,im+g9,'0px','0px']},{id:'speech-oldmw',v:i,t:g,r:['264px','90px','353px','246px','auto','auto'],f:[x3,im+g10,'0px','0px']},{id:'smoke-little',v:i,t:g,r:['156px','377px','142px','112px','auto','auto'],f:[x3,im+g11,'0px','0px','50%','50%']},{id:'smoke-normal',v:i,t:g,r:['86px','313px','176px','147px','auto','auto'],f:[x3,im+g12,'0px','0px','50%','50%']},{id:'smoke-big',v:i,t:g,r:['10px','200px','270px','211px','auto','auto'],f:[x3,im+g13,'0px','0px','50%','50%']},{id:'balloon-jpa-servlet',t:g,r:['367px','-200px','148px','200px','auto','auto'],f:[x3,im+g14,'0px','0px']},{id:'balloon-jaxrs',v:i,t:g,r:['516','-178','79px','200px','auto','auto'],f:[x3,im+g15,'0px','0px']},{id:'speech-peergreen-upgrade',v:i,t:g,r:['465px','174px','354px','224px','auto','auto'],f:[x3,im+g16,'0px','0px']},{id:'peergreen-platform-overview',v:i,t:g,r:['456px','184px','500px','248px','auto','auto'],f:[x3,im+g17,'0px','0px']},{id:'peergreen-logo',v:i,t:g,r:['952px','420px','408px','101px','auto','auto'],f:[x3,im+g18,'0px','0px']},{id:'mine-bugs',t:g,r:['960px','83px','100px','97px','auto','auto'],f:[x3,im+g19,'0px','0px']},{id:'mine-dvlpt',t:g,r:['1156px','397px','100px','97px','auto','auto'],f:[x3,im+g20,'0px','0px']},{id:'mine-infra',t:g,r:['1256px','14px','100px','97px','auto','auto'],f:[x3,im+g21,'0px','0px']},{id:'mine-maintenance',t:g,r:['1450px','300px','100px','97px','auto','auto'],f:[x3,im+g22,'0px','0px']},{id:'mine-mngt',t:g,r:['1618px','72px','100px','97px','auto','auto'],f:[x3,im+g23,'0px','0px']}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:24750,a:y,l:{"start":0},tt:[]}}}};var S1=symbols[x24];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e27).P(tp,62).P("font-style",x28).P("font-weight",700,_,_,"").P(lf,246,_,_,p).P(ff,x29);A1.A(e30).P(tp,62).P("font-style",x28).P("font-weight",700,_,_,"").P(lf,246,_,_,p).P(ff,x29);A1.A(e32).P(c,x31,c).P("font-weight",x33).P(lf,888).P(fs,70).P(tp,17).P("font-style",x28).P(d,i).P(ff,x34).P(h,86).P(w,400);A1.A(e35).P(c,x31,c).P("font-weight",x33).P(lf,1051).P(fs,70).P(tp,22).P(d,b).P("font-style",x28).P(ff,x34).P(h,86).P(w,234);A1.A(e38).P(tp,448).P(lf,0).T(6,-1380,5,ql);A1.A(e39).P(tp,397).P(lf,1156).T(15,627,1,qw).T(16,-564,4.5);A1.A(e40).P(tp,x26).P(bt,328).P(d,b).T(24.75,i).P(h,42).T(0,42).P(lf,2976).T(0,216,23,ql).P(w,80).T(0,80);A1.A(e41).P(tp,313).P(bsz,[50,50],_,x25).P(lf,86).T(7,86).T(9.5,86).P(d,i).T(7,b).T(8,i).T(9.5,b).T(10.75,i);A1.A(e42).P(tp,377).P(bsz,[50,50],_,x25).P(d,i).T(6.5,b).T(8,i).T(9,b).T(10.75,i).P(lf,156).T(6.5,156).T(9,156);A1.A(e43).P(bg,x36,c).P(ov,x37).P(h,500).T(0,500).P("background-image",[270,[['rgba(48,47,53,1.00)',0],['rgba(255,255,255,0.00)',100]]],"gradient").T(0,[270,[['rgba(42,40,49,1.00)',0],['rgba(255,255,255,0.00)',100]]],11,qob).T(12,[270,[['rgba(75,44,211,1.00)',0],['rgba(255,255,255,0.00)',100]]]).P(w,900).T(0,900);A1.A(e44).P(tp,200).P(bsz,[50,50],_,x25).P(lf,10).T(7.5,10).T(10,10).P(d,i).T(7.5,b).T(8,i).T(10,b).T(10.75,i);A1.A(e45).P(tp,410).T(22,370,1,ql).P(lf,952).T(22,352,1).P(d,i).T(22,b);A1.A(e46).P(tp,174).P(lf,465).P(d,i).T(19,b).T(21.75,i);A1.A(e47).P(tp,14).P(h,86).P(lf,792).P(w,88).P(d,i).T(12,b).P(o,0.19,_,_,"").T(0,0.39,11,qob).T(11,1,1);A1.A(e48).P(tp,x26).P(bt,284).P(h,42).T(0,42).P(o,0.16,_,_,"").T(0,0.2,11,qob).T(11.75,1).P(lf,1440,_,_,p).T(0,-1320,23,ql).P(w,80).T(0,80);A1.A(e49).P(tp,x26).P(bt,286).T(0,286).P(h,42).T(0,42).P(o,0.16,_,_,"").T(0,0.2,11,qob).T(11.75,1).P(lf,1822,_,_,p).T(0,-938,23,ql).P(w,80).T(0,80);A1.A(e50).P(tp,93).P(d,i).T(0.75,b).T(1.208,b).T(3.5,b).T(5.107,i).T(6.25,i).P(lf,-56).T(0.75,4,0.667,qob).T(1.875,538,3.125,ql);A1.A(e51).P(tp,83).P(lf,960).T(15,21,1,qw).T(16,13,1).T(17,-12,0.5).T(17.5,-760,3);A1.A(e52).P(tp,174).T(22,134,1,ql).P(lf,906).T(22,306,1).P(d,i).T(22,b);A1.A(e53).P(tp,448).P(lf,478).T(6,-902,5,ql);A1.A(e54).P(tp,72).P(lf,1618).T(15,1085,2,qw).T(17,650,0.5).T(17.5,471,0.75).T(18.25,-102,2.25);A1.A(e55).P(bsz,[80,80],_,x25).P(tp,206).T(11,646,0.75,ql).P(rz,0,t,_,r).T(11,80,0.75).P(d,b).T(11.75,i).P(or,[63.55,82.05],_,x25).T(11,[63.55,82.05]).P(oz,[63.55,82.05],_,x25).T(11,[63.55,82.05]).P(om,[63.55,82.05],_,x25).T(11,[63.55,82.05]).P(on,[63.55,82.05],_,x25).T(11,[63.55,82.05]).P(oo,[63.55,82.05],_,x25).T(11,[63.55,82.05]).P(lf,-560,_,_,p).T(0,-560).T(1.5,240,4.5,ql).P(w,620).T(0,620);A1.A(e56).P(tp,-200).T(11,-60,0.25,ql).T(11.25,90,0.75).T(15,210,1,qw).T(16,50,1).T(17,210,0.5).T(17.5,-2,0.75).T(18.25,170,0.75).P(lf,367).T(11,347,0.25,ql).T(11.25,497,0.75).T(15,67,1,qw).T(16,597,1).T(17,657,0.5).T(17.5,689,0.75).T(18.25,247,0.75).T(20.75,67,1,ql);A1.A(e57).P(tp,x26).P(bt,310).P(h,42).T(0,42).P(o,0.16,_,_,"").T(0,0.2,11,qob).T(11.75,1).P(lf,734,_,_,p).T(0,-2026,23,ql).P(w,80).T(0,80);A1.A(e58).P(tp,153).P(lf,121).P(d,i).T(12,b).T(15,i);A1.A(e59).P(tp,x26).P(bt,354).P(h,42).T(0,42).P(lf,2584).T(0,-176,23,ql).P(w,80).T(0,80);A1.A(e60).P(tp,x26).P(bt,286).T(0,286).P(h,42).T(0,42).P(o,0.16,_,_,"").T(0,0.2,11,qob).T(11.75,1).P(lf,1056,_,_,p).T(0,-1704,23,ql).P(w,80).T(0,80);A1.A(e61).P(tp,x26).P(bt,266).P(h,42).T(0,42).P(lf,2190).T(0,-570,23,ql).P(w,80).T(0,80);A1.A(e62).P(tp,448).P(d,b).T(11.75,i).T(15,i).P(lf,1438).T(6,58,5,ql);A1.A(e63).P(tp,130).T(0,130).T(11.25,280,0.75,ql).T(15,400,1,qw).T(16,240,1).T(17,400,0.5).T(17.5,188,0.75).T(18.25,360,0.75).P(bsz,[50,50],_,x25).T(2.651,[50,50]).P(lf,-395).T(1.5,415,4.5,ql).T(11.25,565,0.75).T(15,135,1,qw).T(16,665,1).T(17,725,0.5).T(17.5,755,0.75).T(18.25,315,0.75).T(20.75,135,1,ql).P(d,b).T(0,b);A1.A(e64).P(tp,380).T(17.5,380).P(lf,2060).T(15,1521,1,qw).T(16,1043,0.649).T(16.649,1415,0.351).T(17,1104,0.5).T(17.5,613,0.75).T(18.25,-270,2.25);A1.A(e65).P(tp,448).P(d,b).T(11.75,i).T(15,i).P(lf,958).T(6,-422,5,ql);A1.A(e66).P(tp,-6).T(15,-6).P(lf,1256).T(15,198,2.5,qw).T(17.5,-464,3);A1.A(e67).P(tp,x26).P(bt,326).T(0,326).P(h,42).T(0,42).P(o,0.16,_,_,"").T(0,0.2,11,qob).T(11.75,1).P(lf,184,_,_,p).T(0,-2576,23,ql).P(w,80).T(0,80);A1.A(e68).P(tp,-208).T(19,173,1,ql).P(lf,465).T(19,356,1).T(20.75,176,1).P(d,i).T(19,b);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-422264897");