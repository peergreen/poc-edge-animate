
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){function reset(sym){sym.$("p_tomcat").hide();sym.$("p_easybeans").hide();sym.$("p_jotm").hide();sym.$("p_hibernate").hide();sym.$("p_jersey").hide();sym.$("p_joram").hide();sym.$("p_eclipselink").hide();sym.$("p_h2").hide();sym.$("p_derby").hide();sym.$("p_jetty").hide();sym.$("p_jdbc").hide();sym.$("p_jndi").hide();sym.$("p_aries").hide();sym.$("b_pg-kernel").show();sym.$("b_pg-tomcat").show();sym.$("b_pg-was").show();sym.$("b_pg-osgi").show();sym.setVariable("profile","unknown");sym.$("ProfileDesc").html("</br>Profile not selected yet");sym.$("b_download").hide();}
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){reset(sym);sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_pg-tomcat}","click",function(sym,e){var profile=sym.getVariable("profile");if(profile=="unknown"){sym.$("b_pg-kernel").fadeOut();sym.$("b_pg-was").fadeOut();sym.$("b_pg-osgi").fadeOut();sym.setVariable("profile","tomcat");sym.$("b_download").fadeIn();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_pg-tomcat}","mouseover",function(sym,e){var e=sym.$("b_pg-tomcat");e.width(e.width()*1.2).height(e.height()*1.2);sym.$("ProfileDesc").html("Peergreen Tomcat</br>provides a Tomcat based web container.");sym.$("p_tomcat").fadeIn();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_pg-tomcat}","mouseout",function(sym,e){var e=sym.$("b_pg-tomcat");e.width(e.width()/1.2).height(e.height()/1.2);var profile=sym.getVariable("profile");if(profile=="unknown"){sym.$("ProfileDesc").html("");sym.$("p_tomcat").fadeOut();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_pg-was}","click",function(sym,e){var profile=sym.getVariable("profile");if(profile=="unknown"){sym.$("b_pg-tomcat").fadeOut();sym.$("b_pg-kernel").fadeOut();sym.$("b_pg-osgi").fadeOut();sym.setVariable("profile","was");sym.$("b_download").fadeIn();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_pg-was}","mouseover",function(sym,e){var e=sym.$("b_pg-was");e.width(e.width()*1.2).height(e.height()*1.2);sym.$("ProfileDesc").html("Peergreen WAS</br>provides a Java EE web profile server.");sym.$("p_tomcat").fadeIn();sym.$("p_jotm").fadeIn();sym.$("p_hibernate").fadeIn();sym.$("p_jersey").fadeIn();sym.$("p_h2").fadeIn();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_pg-was}","mouseout",function(sym,e){var e=sym.$("b_pg-was");e.width(e.width()/1.2).height(e.height()/1.2);var profile=sym.getVariable("profile");if(profile=="unknown"){sym.$("ProfileDesc").html("");sym.$("p_tomcat").fadeOut();sym.$("p_jotm").fadeOut();sym.$("p_hibernate").fadeOut();sym.$("p_jersey").fadeOut();sym.$("p_h2").fadeOut();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_pg-kernel}","click",function(sym,e){var profile=sym.getVariable("profile");if(profile=="unknown"){sym.setVariable("profile","kernel");sym.$("ProfileDesc").html("Peergreen Kernel</br>provides a lightweight OSGi server.");sym.$("b_pg-tomcat").fadeOut();sym.$("b_pg-was").fadeOut();sym.$("b_pg-osgi").fadeOut();sym.$("b_download").fadeIn();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_pg-kernel}","mouseover",function(sym,e){var e=sym.$("b_pg-kernel");e.width(e.width()*1.2).height(e.height()*1.2);sym.$("ProfileDesc").html("Peergreen Kernel</br>provides a lightweight OSGi server.");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_pg-kernel}","mouseout",function(sym,e){var e=sym.$("b_pg-kernel");e.width(e.width()/1.2).height(e.height()/1.2);var profile=sym.getVariable("profile");if(profile=="unknown"){sym.$("ProfileDesc").html("");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_pg-osgi}","click",function(sym,e){var profile=sym.getVariable("profile");if(profile=="unknown"){sym.$("b_pg-tomcat").fadeOut();sym.$("b_pg-was").fadeOut();sym.$("b_pg-kernel").fadeOut();sym.setVariable("profile","enterpriseosgi");sym.$("b_download").fadeIn();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_pg-osgi}","mouseover",function(sym,e){var e=sym.$("b_pg-osgi");e.width(e.width()*1.2).height(e.height()*1.2);sym.$("ProfileDesc").html("Peergreen Enterprise OSGi</br>provides an Enterprise OSGi server.");sym.$("p_tomcat").fadeIn();sym.$("p_jotm").fadeIn();sym.$("p_hibernate").fadeIn();sym.$("p_jndi").fadeIn();sym.$("p_aries").fadeIn();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_pg-osgi}","mouseout",function(sym,e){var e=sym.$("b_pg-osgi");e.width(e.width()/1.2).height(e.height()/1.2);var profile=sym.getVariable("profile");if(profile=="unknown"){sym.$("ProfileDesc").html("");sym.$("p_tomcat").fadeOut();sym.$("p_jotm").fadeOut();sym.$("p_hibernate").fadeOut();sym.$("p_jndi").fadeOut();sym.$("p_aries").fadeOut();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_cancel}","click",function(sym,e){reset(sym);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_download}","click",function(sym,e){var profile=sym.getVariable("profile");if(profile!="unknown"){alert("Profile = "+profile);reset(sym);}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-487819750");