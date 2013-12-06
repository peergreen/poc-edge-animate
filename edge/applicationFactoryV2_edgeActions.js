/***********************
* Actions de compositions pour Adobe Edge Animate
*
* Modifier ce fichier avec précaution, en veillant à conserver 
* les signatures et les commentaires de fonction commençant par « Edge » pour maintenir la 
* possibilité d’interagir avec ces actions depuis Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // alias pour les classes Edge couramment utilisées

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.setVariable('onRaspberry', 'false');
         sym.setVariable('onServer', 'false');
         sym.setVariable('onCloud', 'false');
         sym.setVariable('nbDeployment', 0);
         sym.setVariable('nbPetals', 0);
         sym.setVariable('init', 'true');
         sym.$('step2').fadeOut();
         
         sym.$('p_tomcat').fadeOut();
         sym.$('p_tomcat_click').fadeOut();
         sym.$('p_jetty').fadeOut();
         sym.$('p_jetty_click').fadeOut();
         sym.$('p_hibernate').fadeOut();
         sym.$('p_hibernate_click').fadeOut();
         sym.$('p_eclipselink').fadeOut();
         sym.$('p_eclipselink_click').fadeOut();
         sym.$('p_h2').fadeOut();
         sym.$('p_h2_click').fadeOut();
         sym.$('p_derby').fadeOut();
         sym.$('p_derby_click').fadeOut();
         sym.$('p_jersey').fadeOut();
         sym.$('p_jersey_click').fadeOut();
         sym.$('p_easybeans').fadeOut();
         sym.$('p_easybeans_click').fadeOut();
         sym.$('p_jotm').fadeOut();
         sym.$('p_jotm_click').fadeOut();
         sym.$('p_aries').fadeOut();
         sym.$('p_aries_click').fadeOut();
         sym.$('p_jndi').fadeOut();
         sym.$('p_jndi_click').fadeOut();
         
         $('.petal').click(function() {
         	if (sym.getVariable('init') == 'true') {
         		sym.$('step1').stop().animate({ opacity: 0 });
         		sym.$('step1').fadeOut();
         		sym.$('step2').fadeIn();
         		sym.$('step2').stop().animate({ opacity: 1 });
         	}
         	var id = $(this).attr('id');
         	if (id.indexOf('p_') != -1 && id.indexOf('_click') != -1) {
         		//alert("id = " + id + " ; nb = " + sym.getVariable('nbPetals'));
         		if (sym.getVariable('nbPetals') > 0) { 
         			sym.setVariable('nbPetals', sym.getVariable('nbPetals') - 1);
         		}
         	} else {		
         		sym.setVariable('nbPetals', sym.getVariable('nbPetals') + 1);
         		//alert("id = " + id + " ; nb = " + sym.getVariable('nbPetals'));
         	}
         	if (sym.getVariable('nbPetals') >= 1 ) {
         		$('#reset').stop().animate({ opacity: 1 });
         	} else {
         		$('#reset').stop().animate({ opacity: 0 });
         	}
         	if (sym.getVariable('onRaspberry') == 'true' ) sym.$('raspberry2').click();
         	if (sym.getVariable('onServer') == 'true' ) sym.$('server2').click();
         	if (sym.getVariable('onCloud') == 'true' ) sym.$('cloud2').click();
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_tomcat}", "click", function(sym, e) {
         sym.$('p_tomcat').fadeIn();
         sym.$('p_tomcat_click').fadeIn();
         sym.$('b_tomcat').fadeOut();
         
         if (sym.$('p_jetty').is(':visible')) {	
         	sym.$('p_jetty_click').click();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p_tomcat_click}", "click", function(sym, e) {
         sym.$('p_tomcat').fadeOut();
         sym.$('p_tomcat_click').fadeOut();
         sym.$('b_tomcat').fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_jetty}", "click", function(sym, e) {
         sym.$('p_jetty').fadeIn();
         sym.$('p_jetty_click').fadeIn();
         sym.$('b_jetty').fadeOut();
         
         if (sym.$('p_tomcat').is(':visible')) {	
         	sym.$('p_tomcat_click').click();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p_jetty_click}", "click", function(sym, e) {
         sym.$('p_jetty').fadeOut();
         sym.$('p_jetty_click').fadeOut();
         sym.$('b_jetty').fadeIn();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_hibernate}", "click", function(sym, e) {
         sym.$('p_hibernate').fadeIn();
         sym.$('p_hibernate_click').fadeIn();
         sym.$('b_hibernate').fadeOut();
         
         if (sym.$('p_eclipselink').is(':visible')) {	
         	sym.$('p_eclipselink_click').click();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_eclipselink}", "click", function(sym, e) {
         sym.$('p_eclipselink').fadeIn();
         sym.$('p_eclipselink_click').fadeIn();
         sym.$('b_eclipselink').fadeOut();
         
         if (sym.$('p_hibernate').is(':visible')) {	
         	sym.$('p_hibernate_click').click();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_h2}", "click", function(sym, e) {
         sym.$('p_h2').fadeIn();
         sym.$('p_h2_click').fadeIn();
         sym.$('b_h2').fadeOut();
         
         if (sym.$('p_derby').is(':visible')) {	
         	sym.$('p_derby_click').click();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_derby}", "click", function(sym, e) {
         sym.$('p_derby').fadeIn();
         sym.$('p_derby_click').fadeIn();
         sym.$('b_derby').fadeOut();
         
         if (sym.$('p_h2').is(':visible')) {	
         	sym.$('p_h2_click').click();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_jersey}", "click", function(sym, e) {
         sym.$('p_jersey').fadeIn();
         sym.$('p_jersey_click').fadeIn();
         sym.$('b_jersey').fadeOut();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_easybeans}", "click", function(sym, e) {
         sym.$('p_easybeans').fadeIn();
         sym.$('p_easybeans_click').fadeIn();
         sym.$('b_easybeans').fadeOut();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_jotm}", "click", function(sym, e) {
         sym.$('p_jotm').fadeIn();
         sym.$('p_jotm_click').fadeIn();
         sym.$('b_jotm').fadeOut();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_aries}", "click", function(sym, e) {
         sym.$('p_aries').fadeIn();
         sym.$('p_aries_click').fadeIn();
         sym.$('b_aries').fadeOut();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_jndi}", "click", function(sym, e) {
         sym.$('p_jndi').fadeIn();
         sym.$('p_jndi_click').fadeIn();
         sym.$('b_jndi').fadeOut();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p_aries_click}", "click", function(sym, e) {
         sym.$('p_aries').fadeOut();
         sym.$('p_aries_click').fadeOut();
         sym.$('b_aries').fadeIn();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p_h2_click}", "click", function(sym, e) {
         sym.$('p_h2').fadeOut();
         sym.$('p_h2_click').fadeOut();
         sym.$('b_h2').fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p_derby_click}", "click", function(sym, e) {
         sym.$('p_derby').fadeOut();
         sym.$('p_derby_click').fadeOut();
         sym.$('b_derby').fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p_easybeans_click}", "click", function(sym, e) {
         sym.$('p_easybeans').fadeOut();
         sym.$('p_easybeans_click').fadeOut();
         sym.$('b_easybeans').fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p_jersey_click}", "click", function(sym, e) {
         sym.$('p_jersey').fadeOut();
         sym.$('p_jersey_click').fadeOut();
         sym.$('b_jersey').fadeIn();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p_hibernate_click}", "click", function(sym, e) {
         sym.$('p_hibernate').fadeOut();
         sym.$('p_hibernate_click').fadeOut();
         sym.$('b_hibernate').fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p_eclipselink_click}", "click", function(sym, e) {
         sym.$('p_eclipselink').fadeOut();
         sym.$('p_eclipselink_click').fadeOut();
         sym.$('b_eclipselink').fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p_jndi_click}", "click", function(sym, e) {
         sym.$('p_jndi').fadeOut();
         sym.$('p_jndi_click').fadeOut();
         sym.$('b_jndi').fadeIn();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p_jotm_click}", "click", function(sym, e) {
         sym.$('p_jotm').fadeOut();
         sym.$('p_jotm_click').fadeOut();
         sym.$('b_jotm').fadeIn();

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_raspberry2}", "click", function(sym, e) {
         var delay = 100;
         if (sym.getVariable('init') == 'true') {
         	sym.$('step1').stop().animate({ opacity: 0 });
         	sym.$('step2').stop().animate({ opacity: 0 });
         	sym.$('step1').fadeOut();
         	sym.$('step2').fadeOut();
         	sym.setVariable('init', 'false');
         }
         if (sym.getVariable('onRaspberry') == 'false') {
         	sym.setVariable('onRaspberry', 'true');
         	sym.setVariable('nbDeployment', sym.getVariable('nbDeployment') + 1);
         
         	sym.$('tige').stop().animate({ opacity: 0.2 });
         	sym.$('Daisy').stop().animate({ opacity: 0.2 });
         	sym.$('tigeRaspberry').stop().delay(delay).animate({ opacity: 1 }); delay +=100;
         	sym.$('kernelRaspberry').stop().delay(delay).animate({ opacity: 1 }); delay +=100;
         	if (sym.$('p_tomcat').is(':visible')) {sym.$('p_tomcatRaspberry').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_jetty').is(':visible')) {sym.$('p_jettyRaspberry').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_jotm').is(':visible')) {sym.$('p_jotmRaspberry').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_jndi').is(':visible')) {sym.$('p_jndiRaspberry').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_hibernate').is(':visible')) {sym.$('p_hibernateRaspberry').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_eclipselink').is(':visible')) {sym.$('p_eclipselinkRaspberry').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_jersey').is(':visible')) {sym.$('p_jerseyRaspberry').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_easybeans').is(':visible')) {sym.$('p_easybeansRaspberry').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_h2').is(':visible')) {sym.$('p_h2Raspberry').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_derby').is(':visible')) {sym.$('p_derbyRaspberry').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_aries').is(':visible')) sym.$('p_ariesRaspberry').stop().delay(delay).animate({ opacity: 1 });
         
         } else {
         	sym.setVariable('onRaspberry', 'false');
         	sym.setVariable('nbDeployment', sym.getVariable('nbDeployment') - 1);
         
         	if (sym.$('p_tomcat').is(':visible')) {sym.$('p_tomcatRaspberry').stop().animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_jetty').is(':visible')) {sym.$('p_jettyRaspberry').stop().animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_jotm').is(':visible')) {sym.$('p_jotmRaspberry').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_jndi').is(':visible')) {sym.$('p_jndiRaspberry').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_hibernate').is(':visible')) {sym.$('p_hibernateRaspberry').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_eclipselink').is(':visible')) {sym.$('p_eclipselinkRaspberry').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_jersey').is(':visible')) {sym.$('p_jerseyRaspberry').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_easybeans').is(':visible')) {sym.$('p_easybeansRaspberry').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_h2').is(':visible')) {sym.$('p_h2Raspberry').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_derby').is(':visible')) {sym.$('p_derbyRaspberry').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_aries').is(':visible')) {sym.$('p_ariesRaspberry').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	sym.$('kernelRaspberry').stop().delay(delay).animate({ opacity: 0 }); delay +=100;
         	sym.$('tigeRaspberry').stop().delay(delay).animate({ opacity: 0 });
         	if (sym.getVariable('nbDeployment') == 0) {
         		sym.$('Daisy').stop().animate({ opacity: 1 });
         		sym.$('tige').stop().animate({ opacity: 1 });
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_server2}", "click", function(sym, e) {
         var delay = 100;
         if (sym.getVariable('init') == 'true') {
         	sym.$('step1').stop().animate({ opacity: 0 });
         	sym.$('step2').stop().animate({ opacity: 0 });
         	sym.$('step1').fadeOut();
         	sym.$('step2').fadeOut();
         	sym.setVariable('init', 'false');
         }
         if (sym.getVariable('onServer') == 'false') {
         	sym.setVariable('onServer', 'true');
         	sym.setVariable('nbDeployment', sym.getVariable('nbDeployment') + 1);
         
         	sym.$('tige').stop().animate({ opacity: 0.2 });
         	sym.$('Daisy').stop().animate({ opacity: 0.2 });
         	sym.$('tigeServer').stop().delay(delay).animate({ opacity: 1 }); delay +=100;
         	sym.$('kernelServer').stop().delay(delay).animate({ opacity: 1 }); delay +=100;
         	if (sym.$('p_tomcat').is(':visible')) {sym.$('p_tomcatServer').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_jetty').is(':visible')) {sym.$('p_jettyServer').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_jotm').is(':visible')) {sym.$('p_jotmServer').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_jndi').is(':visible')) {sym.$('p_jndiServer').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_hibernate').is(':visible')) {sym.$('p_hibernateServer').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_eclipselink').is(':visible')) {sym.$('p_eclipselinkServer').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_jersey').is(':visible')) {sym.$('p_jerseyServer').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_easybeans').is(':visible')) {sym.$('p_easybeansServer').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_h2').is(':visible')) {sym.$('p_h2Server').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_derby').is(':visible')) {sym.$('p_derbyServer').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_aries').is(':visible')) sym.$('p_ariesServer').stop().delay(delay).animate({ opacity: 1 });
         
         } else {
         	sym.setVariable('onServer', 'false');
         	sym.setVariable('nbDeployment', sym.getVariable('nbDeployment') - 1);
         
         	if (sym.$('p_tomcat').is(':visible')) {sym.$('p_tomcatServer').stop().animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_jetty').is(':visible')) {sym.$('p_jettyServer').stop().animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_jotm').is(':visible')) {sym.$('p_jotmServer').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_jndi').is(':visible')) {sym.$('p_jndiServer').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_hibernate').is(':visible')) {sym.$('p_hibernateServer').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_eclipselink').is(':visible')) {sym.$('p_eclipselinkServer').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_jersey').is(':visible')) {sym.$('p_jerseyServer').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_easybeans').is(':visible')) {sym.$('p_easybeansServer').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_h2').is(':visible')) {sym.$('p_h2Server').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_derby').is(':visible')) {sym.$('p_derbyServer').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_aries').is(':visible')) {sym.$('p_ariesServer').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	sym.$('kernelServer').stop().delay(delay).animate({ opacity: 0 }); delay +=100;
         	sym.$('tigeServer').stop().delay(delay).animate({ opacity: 0 });
         	if (sym.getVariable('nbDeployment') == 0) {
         		sym.$('Daisy').stop().animate({ opacity: 1 });
         		sym.$('tige').stop().animate({ opacity: 1 });
         	}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cloud2}", "click", function(sym, e) {
         var delay = 100;
         if (sym.getVariable('init') == 'true') {
         	sym.$('step1').stop().animate({ opacity: 0 });
         	sym.$('step2').stop().animate({ opacity: 0 });
         	sym.$('step1').fadeOut();
         	sym.$('step2').fadeOut();
         	sym.setVariable('init', 'false');
         }
         if (sym.getVariable('onCloud') == 'false') {
         	sym.setVariable('onCloud', 'true');
         	sym.setVariable('nbDeployment', sym.getVariable('nbDeployment') + 1);
         
         	sym.$('tige').stop().animate({ opacity: 0.2 });
         	sym.$('Daisy').stop().animate({ opacity: 0.2 });
         	sym.$('tigeCloud').stop().delay(delay).animate({ opacity: 1 }); delay +=100;
         	sym.$('kernelCloud').stop().delay(delay).animate({ opacity: 1 }); delay +=100;
         	if (sym.$('p_tomcat').is(':visible')) {sym.$('p_tomcatCloud').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_jetty').is(':visible')) {sym.$('p_jettyCloud').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_jotm').is(':visible')) {sym.$('p_jotmCloud').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_jndi').is(':visible')) {sym.$('p_jndiCloud').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_hibernate').is(':visible')) {sym.$('p_hibernateCloud').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_eclipselink').is(':visible')) {sym.$('p_eclipselinkCloud').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_jersey').is(':visible')) {sym.$('p_jerseyCloud').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_easybeans').is(':visible')) {sym.$('p_easybeansCloud').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_h2').is(':visible')) {sym.$('p_h2Cloud').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_derby').is(':visible')) {sym.$('p_derbyCloud').stop().delay(delay).animate({ opacity: 1 }); delay +=100;}
         	if (sym.$('p_aries').is(':visible')) sym.$('p_ariesCloud').stop().delay(delay).animate({ opacity: 1 });
         
         } else {
         	sym.setVariable('onCloud', 'false');
         	sym.setVariable('nbDeployment', sym.getVariable('nbDeployment') - 1);
         
         	if (sym.$('p_tomcat').is(':visible')) {sym.$('p_tomcatCloud').stop().animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_jetty').is(':visible')) {sym.$('p_jettyCloud').stop().animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_jotm').is(':visible')) {sym.$('p_jotmCloud').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_jndi').is(':visible')) {sym.$('p_jndiCloud').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_hibernate').is(':visible')) {sym.$('p_hibernateCloud').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_eclipselink').is(':visible')) {sym.$('p_eclipselinkCloud').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_jersey').is(':visible')) {sym.$('p_jerseyCloud').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_easybeans').is(':visible')) {sym.$('p_easybeansCloud').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_h2').is(':visible')) {sym.$('p_h2Cloud').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_derby').is(':visible')) {sym.$('p_derbyCloud').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	if (sym.$('p_aries').is(':visible')) {sym.$('p_ariesCloud').stop().delay(delay).animate({ opacity: 0 }); delay +=100;}
         	sym.$('kernelCloud').stop().delay(delay).animate({ opacity: 0 }); delay +=100;
         	sym.$('tigeCloud').stop().delay(delay).animate({ opacity: 0 });
         	if (sym.getVariable('nbDeployment') == 0) {
         		sym.$('Daisy').stop().animate({ opacity: 1 });
         		sym.$('tige').stop().animate({ opacity: 1 });
         	}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_downloadBtn}", "click", function(sym, e) {
         window.top.location = '/Download/Community+Peergreen+Server';

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_kernel_click}", "dblclick", function(sym, e) {
         sym.setVariable('nbPetals', 0);
         sym.$('p_tomcat_click').click();
         sym.$('p_jetty_click').click();
         sym.$('p_jotm_click').click();
         sym.$('p_jndi_click').click();
         sym.$('p_hibernate_click').click();
         sym.$('p_eclipselink_click').click();
         sym.$('p_jersey_click').click();
         sym.$('p_easybeans_click').click();
         sym.$('p_h2_click').click();
         sym.$('p_derby_click').click();
         sym.$('p_aries_click').click();
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_reset}", "dblclick", function(sym, e) {
         sym.$('kernel_click').dblclick();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-6711452");