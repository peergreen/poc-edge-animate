
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.stop();sym.$("p_tomcat").hide();sym.$("p_tomcat2").show();sym.$("p_jetty2").hide();sym.setVariable("busy","false");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_tomcat}","click",function(sym,e){var isBusy=sym.getVariable("busy");if(isBusy=="false"){sym.setVariable("busy","true");sym.$("p_jetty").hide();sym.$("p_tomcat").show();sym.$("kernel").show();sym.play("begin_tomcat");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_jetty}","click",function(sym,e){var isBusy=sym.getVariable("busy");if(isBusy=="false"){sym.setVariable("busy","true");sym.$("p_jetty").show();sym.$("p_tomcat").hide();sym.$("kernel").show();sym.play("begin_jetty");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4500,function(sym,e){sym.stop();sym.$("p_jetty").hide();sym.$("p_jetty2").show();sym.$("p_tomcat2").hide();sym.setVariable("busy","false");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("p_tomcat").hide();sym.$("p_jetty").hide();sym.$("p_eclipselink").hide();sym.$("p_hibernate").hide();sym.$("p_easybeans").hide();sym.$("p_h2").hide();sym.$("p_derby").hide();sym.$("p_jotm").hide();sym.$("p_joram").hide();sym.$("p_jersey").hide();sym.$("p_business").hide();sym.$("p_tomcat2").hide();sym.$("p_jetty2").hide();sym.$("p_eclipselink2").hide();sym.$("p_hibernate2").hide();sym.$("p_easybeans2").hide();sym.$("p_h22").hide();sym.$("p_derby2").hide();sym.$("p_jotm2").hide();sym.$("p_joram2").hide();sym.$("p_jersey2").hide();sym.$("p_business2").hide();sym.$("speech_build").hide();sym.$("t_speech_build").hide();sym.$("speech_deploy").hide();sym.$("t_speech_deploy").hide();sym.$("button").hide();sym.$("button2").hide();sym.$("peergreen-platform").hide();sym.$("peergreen-logo").hide();sym.setVariable("busy","false");sym.play("begin_help");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_raspberry2}","click",function(sym,e){var isBusy=sym.getVariable("busy");if(isBusy=="false"){sym.setVariable("busy","true");sym.setVariable("deployTarget","raspberry");sym.play("begin_deploy");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",34250,function(sym,e){sym.setVariable("busy","false");sym.stop();sym.play("begin_end");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_eclipselink}","click",function(sym,e){var isBusy=sym.getVariable("busy");if(isBusy=="false"){sym.setVariable("busy","true");sym.$("p_eclipselink").show();sym.$("p_hibernate").hide();sym.$("kernel").show();sym.play("begin_eclipselink");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_hibernate}","click",function(sym,e){var isBusy=sym.getVariable("busy");if(isBusy=="false"){sym.setVariable("busy","true");sym.$("p_eclipselink").hide();sym.$("p_hibernate").show();sym.$("kernel").show();sym.play("begin_hibernate");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6500,function(sym,e){sym.stop();sym.$("p_eclipselink").hide();sym.$("p_eclipselink2").show();sym.$("p_hibernate2").hide();sym.setVariable("busy","false");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8444,function(sym,e){sym.$("p_hibernate").hide();sym.$("p_hibernate2").show();sym.$("p_eclipselink2").hide();sym.stop();sym.setVariable("busy","false");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_derby}","click",function(sym,e){var isBusy=sym.getVariable("busy");if(isBusy=="false"){sym.setVariable("busy","true");sym.$("p_h2").hide();sym.$("p_derby").show();sym.$("kernel").show();sym.play("begin_derby");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_h2}","click",function(sym,e){var isBusy=sym.getVariable("busy");if(isBusy=="false"){sym.setVariable("busy","true");sym.$("p_derby").hide();sym.$("p_h2").show();sym.$("kernel").show();sym.play("begin_h2");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10500,function(sym,e){sym.$("p_derby").hide();sym.$("p_derby2").show();sym.$("p_h22").hide();sym.setVariable("busy","false");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12500,function(sym,e){sym.setVariable("busy","false");sym.$("p_h2").hide();sym.$("p_h22").show();sym.$("p_derby2").hide();sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",40000,function(sym,e){sym.$("button").hide();sym.$("button2").hide();sym.$("peergreen-platform").hide();sym.$("peergreen-logo").hide();sym.setVariable("busy","true");sym.$("kernel").hide();sym.$("speech_build").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",43000,function(sym,e){sym.$("speech_build").hide();sym.$("t_speech_build").hide()
sym.$("speech_deploy").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",39992,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",636,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",46000,function(sym,e){sym.$("t_speech_deploy").hide()
sym.$("speech_deploy").hide()
sym.setVariable("busy","false");sym.play("begin_reset");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.$("kernel").show();sym.$("t_speech_build").hide()
sym.$("t_speech_deploy").hide()
sym.setVariable("busy","false");sym.$("button").hide();sym.$("button2").hide();sym.$("peergreen-platform").hide();sym.$("peergreen-logo").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12492,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",15000,function(sym,e){sym.setVariable("busy","false");sym.$("p_jersey").hide();sym.$("p_jersey2").show();sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_jersey}","click",function(sym,e){var isBusy=sym.getVariable("busy");if(isBusy=="false"){sym.setVariable("busy","true");sym.$("p_jersey").show();sym.$("kernel").show();sym.play("begin_jersey");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_easybeans}","click",function(sym,e){var isBusy=sym.getVariable("busy");if(isBusy=="false"){sym.setVariable("busy","true");sym.$("p_easybeans").show();sym.$("kernel").show();sym.play("begin_easybeans");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_jotm}","click",function(sym,e){var isBusy=sym.getVariable("busy");if(isBusy=="false"){sym.setVariable("busy","true");sym.$("p_jotm").show();sym.$("kernel").show();sym.play("begin_jotm");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_joram}","click",function(sym,e){var isBusy=sym.getVariable("busy");if(isBusy=="false"){sym.setVariable("busy","true");sym.$("p_joram").show();sym.$("kernel").show();sym.play("begin_joram");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_b_business}","click",function(sym,e){var isBusy=sym.getVariable("busy");if(isBusy=="false"){sym.setVariable("busy","true");sym.$("p_business").show();sym.$("kernel").show();sym.play("begin_business");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",18000,function(sym,e){sym.setVariable("busy","false");sym.$("p_easybeans").hide();sym.$("p_easybeans2").show();sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",39992,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",46000,function(sym,e){sym.$("speech_deploy").hide();sym.play("begin_reset");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",18997,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",21000,function(sym,e){sym.setVariable("busy","false");sym.$("p_business").hide();sym.$("p_business2").show();sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",24000,function(sym,e){sym.setVariable("busy","false");sym.$("p_joram").hide();sym.$("p_joram2").show();sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",27000,function(sym,e){sym.setVariable("busy","false");sym.$("p_jotm").hide();sym.$("p_jotm2").show();sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2960,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",40711,function(sym,e){sym.$("t_speech_build").show()});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",43737,function(sym,e){sym.$("t_speech_deploy").show()});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_server}","click",function(sym,e){var isBusy=sym.getVariable("busy");if(isBusy=="false"){sym.setVariable("busy","true");sym.setVariable("deployTarget","server");sym.play("begin_deploy");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_cloud}","click",function(sym,e){var isBusy=sym.getVariable("busy");if(isBusy=="false"){sym.setVariable("busy","true");sym.setVariable("deployTarget","cloud");sym.play("begin_deploy");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",32000,function(sym,e){sym.$("p_tomcat2").hide();sym.$("p_jetty2").hide();sym.$("p_eclipselink2").hide();sym.$("p_hibernate2").hide();sym.$("p_easybeans2").hide();sym.$("p_h22").hide();sym.$("p_derby2").hide();sym.$("p_jotm2").hide();sym.$("p_joram2").hide();sym.$("p_jersey2").hide();sym.$("p_business2").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",33000,function(sym,e){sym.$("kernel").hide();sym.stop();var deployTarget=sym.getVariable("deployTarget");if(deployTarget=="raspberry"){sym.play("begin_raspberry");}else if(deployTarget=="server"){sym.play("begin_server");}else if(deployTarget=="cloud"){sym.play("begin_cloud");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",29990,function(sym,e){sym.setVariable("busy","true");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",35958,function(sym,e){sym.setVariable("busy","false");sym.stop();sym.play("begin_end");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",37859,function(sym,e){sym.setVariable("busy","false");sym.stop();sym.play("begin_end");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button}","click",function(sym,e){sym.play("begin_help");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",38034,function(sym,e){sym.$("button").show();sym.$("button2").show();sym.$("peergreen-platform").show();sym.$("t_button_restart").show();sym.$("t_button_url").show();sym.$("peergreen-logo").show();sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button2}","click",function(sym,e){sym.stop();window.open("http://www.peergreen.com/Download/WebHome","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-345678754");