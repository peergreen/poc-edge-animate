
(function($,Edge,compId){var _=null,y=true,n=false,e44='${_smoke-little}',e45='${_sun}',e46='${_prettycloud4}',e47='${_roadCopy}',b='block',e48='${_mine-bugs}',bsz='background-size',x36='hidden',s='style',x1='1.5.0',e56='${_raspberry}',i='none',e59='${_prettycloud8}',e60='${_balloon-jpa-servlet}',lf='left',x41='Tahoma, Geneva, sans-serif',e77='${_speech-peergreen-earth}',e76='${_prettycloud5}',e75='${_Stage}',e74='${_mine-maintenance}',e73='${_server}',e64='${_peergreen-platform-overview}',bg='background-color',x31='auto',bt='bottom',e70='${_speech-peergreen-upgrade}',e69='${_prettycloud7}',x35='rgba(255,255,255,1)',tp='top',e68='${_mine-dvlpt}',e66='${_speech-peergreen-cloud}',ov='overflow',e67='${_smoke-big}',e65='${_speech-oldmw}',x29='stage',fs='font-size',e62='${_mine-mngt}',e61='${_peergreen-logo}',c='color',x38='rgba(180,32,32,1)',qw='swing',e57='${_prettycloud}',x33='italic',e55='${_roadCopy2}',on='msTransformOrigin',e53='${_prettycloud3}',e52='${_mine-infra}',e51='${_speech-peergreen}',e50='${_prettycloud2}',e49='${_truck-red}',rz='rotateZ',oz='-moz-transform-origin',t='transform',r='deg',x3='rgba(0,0,0,0)',e54='${_app-green}',om='-ms-transform-origin',h='height',or='-webkit-transform-origin',x2='1.5.0.217',e58='${_balloon-jaxrs}',e42='${_jonas4Copy}',p='px',o='opacity',e43='${_smoke-normal}',oo='-o-transform-origin',qob='easeOutBounce',d='display',e32='${_TextCopy2}',g='image',e63='${_cloud}',x40='bold',e37='${_TextCopy3}',a='Base State',qq='easeInOutQuad',dt='Default Timeline',e39='${_OSGiCopy}',e78='${_road}',w='width',e71='${_prettycloud6}',e72='${_roadCopy3}',ql='linear',x34='MS Serif, New York, serif',ff='font-family',x30='@@0@@% @@1@@%';var im='images/';var g28='cloud.png',g17='speech-peergreen-upgrade.png',g22='speech-peergreen-earth.png',g24='mine-dvlpt.png',g18='peergreen-platform-overview.png',g23='mine-bugs.png',g21='server.png',g25='mine-infra.png',g12='smoke-normal.png',g19='peergreen-logo.png',g4='prettycloud.png',g15='balloon-jaxrs.png',g13='smoke-big.png',g9='speech-peergreen.png',g27='mine-mngt.png',g11='smoke-little.png',g10='speech-oldmw.png',g8='app-green.png',g20='raspberry.png',g26='mine-maintenance.png',g16='speech-peergreen-cloud.png',g14='balloon-jpa-servlet.png',g5='sun.png',g6='road.png',g7='truck-red.png';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'prettycloud',t:g,r:['184px','auto','100px','52px','auto','226px'],f:[x3,im+g4,'0px','0px']},{id:'prettycloud2',t:g,r:['734px','auto','100px','52px','auto','310px'],f:[x3,im+g4,'0px','0px']},{id:'prettycloud3',t:g,r:['1056px','auto','100px','52px','auto','186px'],f:[x3,im+g4,'0px','0px']},{id:'prettycloud4',t:g,r:['1440px','auto','100px','52px','auto','284px'],f:[x3,im+g4,'0px','0px']},{id:'prettycloud5',t:g,r:['1822px','auto','100px','52px','auto','186px'],f:[x3,im+g4,'0px','0px']},{id:'prettycloud6',t:g,r:['2190px','auto','100px','52px','auto','266px'],f:[x3,im+g4,'0px','0px']},{id:'prettycloud7',t:g,r:['2584px','auto','100px','52px','auto','354px'],f:[x3,im+g4,'0px','0px']},{id:'prettycloud8',t:g,r:['2976px','auto','100px','52px','auto','328px'],f:[x3,im+g4,'0px','0px']},{id:'sun',v:i,t:g,r:['792px','14px','88px','86px','auto','auto'],o:0.19480518532264,f:[x3,im+g5,'0px','0px']},{id:'road',t:g,r:['0px','448px','500px','23px','auto','auto'],f:[x3,im+g6,'0px','0px']},{id:'roadCopy',t:g,r:['478px','448px','500px','23px','auto','auto'],f:[x3,im+g6,'0px','0px']},{id:'roadCopy2',t:g,r:['958px','448px','500px','23px','auto','auto'],f:[x3,im+g6,'0px','0px']},{id:'roadCopy3',t:g,r:['1438px','448px','500px','23px','auto','auto'],f:[x3,im+g6,'0px','0px']},{id:'truck-red',t:g,r:['-440px','206px','500px','312px','auto','auto'],f:[x3,im+g7,'0px','0px','80%','80%']},{id:'app-green',t:g,r:['-395px','90px','150px','188px','auto','auto'],f:[x3,im+g8,'0px','0px','75%','75%']},{id:'speech-peergreen',v:i,t:g,r:['121px','153px','354px','224px','auto','auto'],f:[x3,im+g9,'0px','0px']},{id:'speech-oldmw',v:i,t:g,r:['264px','90px','353px','246px','auto','auto'],f:[x3,im+g10,'0px','0px']},{id:'smoke-little',v:i,t:g,r:['156px','377px','142px','112px','auto','auto'],f:[x3,im+g11,'0px','0px','50%','50%']},{id:'smoke-normal',v:i,t:g,r:['86px','313px','176px','147px','auto','auto'],f:[x3,im+g12,'0px','0px','50%','50%']},{id:'smoke-big',v:i,t:g,r:['10px','200px','270px','211px','auto','auto'],f:[x3,im+g13,'0px','0px','50%','50%']},{id:'balloon-jpa-servlet',t:g,r:['367px','-200px','148px','200px','auto','auto'],f:[x3,im+g14,'0px','0px']},{id:'balloon-jaxrs',v:i,t:g,r:['516','-178','79px','200px','auto','auto'],f:[x3,im+g15,'0px','0px']},{id:'speech-peergreen-cloud',v:i,t:g,r:['0px','-242px','354px','224px','auto','auto'],f:[x3,im+g16,'0px','0px']},{id:'speech-peergreen-upgrade',v:i,t:g,r:['465px','174px','354px','224px','auto','auto'],f:[x3,im+g17,'0px','0px']},{id:'peergreen-platform-overview',v:i,t:g,r:['456px','184px','500px','248px','auto','auto'],f:[x3,im+g18,'0px','0px']},{id:'peergreen-logo',v:i,t:g,r:['952px','420px','408px','101px','auto','auto'],f:[x3,im+g19,'0px','0px']},{id:'raspberry',v:i,t:g,r:['532px','418px','66px','84px','auto','auto'],f:[x3,im+g20,'0px','0px']},{id:'server',v:i,t:g,r:['1064px','397px','150px','137px','auto','auto'],f:[x3,im+g21,'0px','0px']},{id:'speech-peergreen-earth',v:i,t:g,r:['356px','132px','354px','224px','auto','auto'],f:[x3,im+g22,'0px','0px']},{id:'mine-bugs',t:g,r:['960px','83px','100px','97px','auto','auto'],f:[x3,im+g23,'0px','0px']},{id:'mine-dvlpt',t:g,r:['1156px','397px','100px','97px','auto','auto'],f:[x3,im+g24,'0px','0px']},{id:'mine-infra',t:g,r:['1256px','14px','100px','97px','auto','auto'],f:[x3,im+g25,'0px','0px']},{id:'mine-maintenance',t:g,r:['1450px','300px','100px','97px','auto','auto'],f:[x3,im+g26,'0px','0px']},{id:'mine-mngt',t:g,r:['1618px','72px','100px','97px','auto','auto'],f:[x3,im+g27,'0px','0px']},{id:'cloud',t:g,r:['766px','-59px','693px','311px','auto','auto'],f:[x3,im+g28,'0px','0px']}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:30105,a:y,l:{"start":0},tt:[]}}}};var S1=symbols[x29];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e32).P(tp,62).P("font-style",x33).P("font-weight",700,_,_,"").P(lf,246,_,_,p).P(ff,x34);A1.A(e37).P(tp,62).P("font-style",x33).P("font-weight",700,_,_,"").P(lf,246,_,_,p).P(ff,x34);A1.A(e39).P(c,x38,c).P("font-weight",x40).P(lf,1051).P(fs,70).P(tp,22).P(w,234).P(d,b).P(ff,x41).P(h,86).P("font-style",x33);A1.A(e42).P(c,x38,c).P("font-weight",x40).P(lf,888).P(fs,70).P(tp,17).P(w,400).P("font-style",x33).P(ff,x41).P(h,86).P(d,i);A1.A(e43).P(tp,313).P(bsz,[50,50],_,x30).P(lf,86).T(7,86).T(9.5,86).P(d,i).T(7,b).T(8,i).T(9.5,b).T(10.75,i);A1.A(e44).P(tp,377).P(bsz,[50,50],_,x30).P(lf,156).T(6.5,156).T(9,156).P(d,i).T(6.5,b).T(8,i).T(9,b).T(10.75,i);A1.A(e45).P(tp,14).P(h,86).P(lf,792).P(w,88).P(d,i).T(12,b).P(o,0.19,_,_,"").T(0,0.39,11,qob).T(11,1,1);A1.A(e46).P(tp,x31).P(bt,284).P(h,42).T(0,42).P(o,0.16,_,_,"").T(0,0.2,11,qob).T(11.75,1).P(lf,1440,_,_,p).T(0,-1320,23,ql).P(w,80).T(0,80);A1.A(e47).P(tp,448).P(lf,478).T(6,-902,5,ql);A1.A(e48).P(lf,960).T(14.5,660,0.712,qw).T(15.212,21,0.788).T(16,13,1).T(17,-12,0.5).T(17.5,21,2).T(19.5,-110,1).P(tp,91).T(15,181,4.5,ql);A1.A(e49).P(bsz,[80,80],_,x30).P(or,[63.55,82.05],_,x30).T(11,[63.55,82.05]).P(oz,[63.55,82.05],_,x30).T(11,[63.55,82.05]).P(om,[63.55,82.05],_,x30).T(11,[63.55,82.05]).P(on,[63.55,82.05],_,x30).T(11,[63.55,82.05]).P(oo,[63.55,82.05],_,x30).T(11,[63.55,82.05]).P(rz,0,t,_,r).T(11,80,0.75,ql).P(d,b).T(11.75,i).P(tp,206,_,_,p).T(11,646,0.75).P(lf,-560).T(0,-560).T(1.5,240,4.5).P(w,620).T(0,620);A1.A(e50).P(tp,x31).P(bt,310).P(h,42).T(0,42).P(o,0.16,_,_,"").T(0,0.2,11,qob).T(11.75,1).P(lf,734,_,_,p).T(0,-2026,23,ql).P(w,80).T(0,80);A1.A(e51).P(tp,153).P(lf,121).P(d,i).T(12,b).T(15,i);A1.A(e52).P(tp,-6).T(15,-6).P(lf,1256).T(14.5,198,3,qw).T(17.5,18,0.75).T(18.25,21,1.25).T(19.5,-104,1);A1.A(e53).P(tp,x31).P(bt,286).T(0,286).P(h,42).T(0,42).P(o,0.16,_,_,"").T(0,0.2,11,qob).T(11.75,1).P(lf,1056,_,_,p).T(0,-1704,23,ql).P(w,80).T(0,80);A1.A(e54).P(tp,130).T(0,130).T(11.25,280,0.75,ql).T(15,400,1,qw).T(16,240,1).T(17,400,0.5).T(17.5,188,0.75).T(18.25,360,0.75).T(21.75,340,1.25,ql).T(25,160,0.5).T(27,310,0.5).P(bsz,[50,50],_,x30).T(2.651,[50,50]).P(lf,-395).T(1.5,415,4.5).T(11.25,565,0.75).T(15,135,1,qw).T(16,665,1).T(17,725,0.5).T(17.5,755,0.75).T(18.25,315,0.75).T(20.75,135,1,ql).T(21.75,165,1.25).T(25,615,0.5).T(25.5,611,1.5).T(27,121,0.5).P(d,b).T(0,b);A1.A(e55).P(tp,448).P(d,b).T(11.75,i).T(15,i).P(lf,958).T(6,-422,5,ql);A1.A(e56).P(h,84).P(w,66).P(tp,418).T(21.75,401,1.25,ql).T(25,541,0.5).P(lf,956).T(21.75,87,1.25).P(d,i).T(21.75,b);A1.A(e57).P(tp,x31).P(bt,326).T(0,326).P(h,42).T(0,42).P(o,0.16,_,_,"").T(0,0.2,11,qob).T(11.75,1).P(lf,184,_,_,p).T(0,-2576,23,ql).P(w,80).T(0,80);A1.A(e58).P(tp,-208).T(19,173,1,ql).T(21.75,153,1.25).T(25,-27,0.5).T(27,123,0.5).P(lf,465).T(19,356,1).T(20.75,176,1).T(21.75,206,1.25).T(25,656,0.5).T(25.5,652,1.5).T(27,162,0.5).P(d,i).T(19,b);A1.A(e59).P(tp,x31).P(bt,328).P(d,b).T(24.75,i).P(h,42).T(0,42).P(lf,2976).T(0,216,23,ql).P(w,80).T(0,80);A1.A(e60).P(tp,-200).T(11,-60,0.25,ql).T(11.25,90,0.75).T(15,210,1,qw).T(16,50,1).T(17,210,0.5).T(17.5,-2,0.75).T(18.25,170,0.75).T(21.75,150,1.25,ql).T(25,-30,0.5).T(27,120,0.5).P(lf,367).T(11,347,0.25).T(11.25,497,0.75).T(15,67,1,qw).T(16,597,1).T(17,657,0.5).T(17.5,689,0.75).T(18.25,247,0.75).T(20.75,67,1,ql).T(21.75,97,1.25).T(25,547,0.5).T(25.5,543,1.5).T(27,53,0.5);A1.A(e61).P(tp,410).T(28,370,1,ql).P(lf,952).T(28,352,1).P(d,i).T(28,b);A1.A(e62).P(tp,83).T(17.176,83).P(lf,1618).T(15,1085,1,qw).T(16,800,0.792).T(16.792,792,0.384).T(17.176,650,0.324).T(17.5,271,0.75).T(18.25,22,1.25).T(19.5,-102,1);A1.A(e63).P(h,311).P(w,693).P(tp,-59).T(27,-309,0.5,ql).P(lf,766).T(25,346,0.5).T(25.5,342,1.5);A1.A(e64).P(tp,174).T(28,134,1,ql).P(lf,906).T(28,306,1).P(d,i).T(28,b);A1.A(e65).P(tp,93).P(d,i).T(0.75,b).T(1.208,b).T(3.5,b).T(5.107,i).T(6.25,i).P(lf,-56).T(0.75,4,0.667,qob).T(1.875,538,3.125,ql);A1.A(e66).P(d,i).T(25,b).T(27,i).P(lf,0).T(25,108,0.5,ql).P(tp,-242).T(25,80,0.5);A1.A(e67).P(tp,200).P(bsz,[50,50],_,x30).P(lf,10).T(7.5,10).T(10,10).P(d,i).T(7.5,b).T(8,i).T(10,b).T(10.75,i);A1.A(e68).P(lf,1156).T(14.5,627,1.5,qw).T(16,23,3.5).T(19.5,-124,1).P(tp,277).T(19.5,277);A1.A(e69).P(tp,x31).P(bt,354).P(h,42).T(0,42).P(lf,2584).T(0,-176,23,ql).P(w,80).T(0,80);A1.A(e70).P(tp,174).P(lf,465).P(d,i).T(19,b).T(21.75,i);A1.A(e71).P(tp,x31).P(bt,266).P(h,42).T(0,42).P(lf,2190).T(0,-570,23,ql).P(w,80).T(0,80);A1.A(e72).P(tp,448).P(d,b).T(11.75,i).T(15,i).P(lf,1438).T(6,58,5,ql);A1.A(e73).P(d,i).T(21.75,b).P(lf,1064).T(21.75,195,1.25,ql).P(tp,397).T(21.75,380,1.25).T(25,520,0.5);A1.A(e74).P(lf,2060).T(15,1521,1,qw).T(16,1043,0.649).T(16.649,1415,0.351).T(17,850,0.5).T(17.5,788,0.25).T(17.75,283,0.5).T(18.25,19,1.25).T(19.5,-120,1).P(tp,374).T(17.5,374);A1.A(e75).P(bg,x35,c).P(ov,x36).P(h,500).T(0,500).P("background-image",[270,[['rgba(48,47,53,1.00)',0],['rgba(255,255,255,0.00)',100]]],"gradient").T(0,[270,[['rgba(42,40,49,1.00)',0],['rgba(255,255,255,0.00)',100]]],11,qob).T(12,[270,[['rgba(75,44,211,1.00)',0],['rgba(255,255,255,0.00)',100]]]).P(w,900).T(0,900);A1.A(e76).P(tp,x31).P(bt,286).T(0,286).P(h,42).T(0,42).P(o,0.16,_,_,"").T(0,0.2,11,qob).T(11.75,1).P(lf,1822,_,_,p).T(0,-938,23,ql).P(w,80).T(0,80);A1.A(e77).P(tp,125).T(21.75,121,1.25,ql).P(lf,949).T(21.75,369,1.25).P(d,i).T(21.75,b).T(25,i);A1.A(e78).P(tp,448).P(lf,0).T(6,-1380,5,ql);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-422264897");