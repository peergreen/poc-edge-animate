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
      
      
      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("p_tomcat").hide();
         sym.$("p_easybeans").hide();
         sym.$("p_jotm").hide();
         sym.$("p_hibernate").hide();
         sym.$("p_jersey").hide();
         sym.$("p_joram").hide();
         sym.$("p_eclipselink").hide();
         sym.$("p_h2").hide();
         sym.$("p_derby").hide();
         sym.$("p_jetty").hide();
         sym.$("p_jdbc").hide();
         sym.$("p_jndi").hide();
         sym.$("p_aries").hide();
         
         sym.$("speech-alacarte").hide();
         
         sym.$("l_tomcat").show();
         sym.$("l_jotm").show();
         sym.$("l_hibernate").show();
         sym.$("l_easybeans").show();
         sym.$("l_jersey").show();
         sym.$("l_h2").show();
         sym.$("l_jdbc").show();
         sym.$("l_jndi").show();
         sym.$("l_aries").show();
         
         
         sym.$("b_pg-kernel").show();
         sym.$("b_pg-tomcat").show();
         sym.$("b_pg-was").show();
         sym.$("b_pg-osgi").show();
         sym.$("b_pg-embedded").show();
         
         sym.setVariable("profile", "unknown");
         sym.$("ProfileDetail").html("</br>Profile not selected yet");
         sym.$("b_download").fadeOut();
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_download}", "click", function(sym, e) {
         var profile = sym.getVariable("profile");
         if (profile != "unknown") {
         	alert("Profile = " + profile);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_reset}", "click", function(sym, e) {
         // lire le scénario à partir de la position spécifiée (ms ou étiquette)
         sym.play("reset");
         

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_l_jersey}", "click", function(sym, e) {
         var profile = sym.getVariable("profile");
         if (profile == "unknown") {
         	sym.$("b_pg-kernel").fadeOut();
         	sym.$("b_pg-embedded").fadeOut();
         	sym.$("b_pg-tomcat").fadeOut();
         	sym.$("b_pg-osgi").fadeOut();
         	sym.$("l_aries").fadeOut();
         
         	sym.$("p_jersey").fadeIn();
         }

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_l_tomcat}", "mouseover", function(sym, e) {
         sym.$("FeatureDetail").html("Tomcat</br>Web Container</br>[Servlet 3.0]</br>[HTTP Service]");
         // lire le scénario à partir de la position spécifiée (ms ou étiquette)
         var e = sym.$("l_tomcat");
         e.width(e.width()*1.1).height(e.height()*1.1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_tomcat}", "click", function(sym, e) {
         var profile = sym.getVariable("profile");
         if (profile == "unknown") {
         	sym.$("b_pg-kernel").fadeOut();
         	sym.$("b_pg-embedded").fadeOut();
         
         	sym.$("p_tomcat").fadeIn();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_jotm}", "mouseover", function(sym, e) {
         sym.$("FeatureDetail").html("JOTM</br>Transaction</br>[JTA]");
         var e = sym.$("l_jotm");
         e.width(e.width()*1.1).height(e.height()*1.1);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_hibernate}", "mouseover", function(sym, e) {
         sym.$("FeatureDetail").html("Hibernate</br>Persistence</br>[JPA]");
         var e = sym.$("l_hibernate");
         e.width(e.width()*1.1).height(e.height()*1.1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_jdbc}", "mouseover", function(sym, e) {
         sym.$("FeatureDetail").html("JDBC</br>JDBC Connection Pool");
         var e = sym.$("l_jdbc");
         e.width(e.width()*1.1).height(e.height()*1.1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_jersey}", "mouseover", function(sym, e) {
         sym.$("FeatureDetail").html("Jersey</br>Web Service</br>[JAX-RS 2.0]");
         var e = sym.$("l_jersey");
         e.width(e.width()*1.1).height(e.height()*1.1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_easybeans}", "mouseover", function(sym, e) {
         sym.$("FeatureDetail").html("Easybeans</br>EJB Container</br>[EJB 3.1]");
         var e = sym.$("l_easybeans");
         e.width(e.width()*1.1).height(e.height()*1.1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_h2}", "mouseover", function(sym, e) {
         sym.$("FeatureDetail").html("H2</br>Java Database</br>");
         var e = sym.$("l_h2");
         e.width(e.width()*1.1).height(e.height()*1.1);
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_l_easybeans}", "click", function(sym, e) {
         var profile = sym.getVariable("profile");
         if (profile == "unknown") {
         	sym.$("b_pg-kernel").fadeOut();
         	sym.$("b_pg-embedded").fadeOut();
         	sym.$("b_pg-tomcat").fadeOut();
         
         	sym.$("p_easybeans").fadeIn();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_hibernate}", "click", function(sym, e) {
         var profile = sym.getVariable("profile");
         if (profile == "unknown") {
         
         	sym.$("b_pg-kernel").fadeOut();
         	sym.$("b_pg-embedded").fadeOut();
         	sym.$("b_pg-tomcat").fadeOut();
         
         	sym.$("p_hibernate").fadeIn();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_jotm}", "click", function(sym, e) {
         var profile = sym.getVariable("profile");
         if (profile == "unknown") {
         	sym.$("b_pg-kernel").fadeOut();
         	sym.$("b_pg-embedded").fadeOut();
         	sym.$("b_pg-tomcat").fadeOut();
         
         	sym.$("p_jotm").fadeIn();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_h2}", "click", function(sym, e) {
         var profile = sym.getVariable("profile");
         if (profile == "unknown") {
         	sym.$("b_pg-kernel").fadeOut();
         	sym.$("b_pg-embedded").fadeOut();
         	sym.$("b_pg-tomcat").fadeOut();
         	sym.$("b_pg-osgi").fadeOut();
         
         	sym.$("p_h2").fadeIn();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_jdbc}", "click", function(sym, e) {
         var profile = sym.getVariable("profile");
         if (profile == "unknown") {
         	sym.$("b_pg-kernel").fadeOut();
         	sym.$("b_pg-embedded").fadeOut();
         	sym.$("b_pg-tomcat").fadeOut();
         	sym.$("b_pg-osgi").fadeOut();
         	sym.$("p_jdbc").fadeIn();
         }
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_l_tomcat}", "mouseout", function(sym, e) {
         sym.$("FeatureDetail").html("");
         var e = sym.$("l_tomcat");
         e.width(e.width()/1.1).height(e.height()/1.1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_jotm}", "mouseout", function(sym, e) {
         sym.$("FeatureDetail").html("");
         var e = sym.$("l_jotm");
         e.width(e.width()/1.1).height(e.height()/1.1);
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_hibernate}", "mouseout", function(sym, e) {
         sym.$("FeatureDetail").html("");
         var e = sym.$("l_hibernate");
         e.width(e.width()/1.1).height(e.height()/1.1);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_jdbc}", "mouseout", function(sym, e) {
         sym.$("FeatureDetail").html("");
         var e = sym.$("l_jdbc");
         e.width(e.width()/1.1).height(e.height()/1.1);
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_jersey}", "mouseout", function(sym, e) {
         sym.$("FeatureDetail").html("");
         var e = sym.$("l_jersey");
         e.width(e.width()/1.1).height(e.height()/1.1);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_easybeans}", "mouseout", function(sym, e) {
         sym.$("FeatureDetail").html("");
         var e = sym.$("l_easybeans");
         e.width(e.width()/1.1).height(e.height()/1.1);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_h2}", "mouseout", function(sym, e) {
         sym.$("FeatureDetail").html("");
         var e = sym.$("l_h2");
         e.width(e.width()/1.1).height(e.height()/1.1);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-embedded}", "click", function(sym, e) {
         var profile = sym.getVariable("profile");
         if (profile == "unknown") {
         	sym.$("b_pg-tomcat").fadeOut();
         	sym.$("b_pg-was").fadeOut();
         	sym.$("b_pg-kernel").fadeOut();
         	sym.$("b_pg-osgi").fadeOut();
         	sym.$("b_pg-user").fadeOut();
         
         	sym.setVariable("profile", "embedded");
         	sym.$("ProfileDetail").html("</br>Peergreen Embedded Server</br>");
         	sym.$("b_download").fadeIn();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-embedded}", "mouseover", function(sym, e) {
         var e = sym.$("b_pg-embedded");
         e.width(e.width()*1.1).height(e.height()*1.1);
         sym.$("ProfileDesc").html("Peergreen Embedded server</br></br>provides a lightweight server for constrained environment.");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-embedded}", "mouseout", function(sym, e) {
         var e = sym.$("b_pg-embedded");
         e.width(e.width()/1.1).height(e.height()/1.1);
         sym.$("ProfileDesc").html("");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-tomcat}", "click", function(sym, e) {
         var profile = sym.getVariable("profile");
         if (profile == "unknown") {
         	sym.$("p_tomcat").fadeIn();
         
         	sym.$("b_pg-kernel").fadeOut();
         	sym.$("b_pg-was").fadeOut();
         	sym.$("b_pg-embedded").fadeOut();
         	sym.$("b_pg-osgi").fadeOut();
         	sym.$("b_pg-user").fadeOut();
         
         	sym.setVariable("profile", "tomcat");
         	sym.$("ProfileDetail").html("</br>Peergreen Tomcat</br>");
         
         	sym.$("b_download").fadeIn();
         
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-tomcat}", "mouseover", function(sym, e) {
         var e = sym.$("b_pg-tomcat");
         e.width(e.width()*1.1).height(e.height()*1.1);
         sym.$("ProfileDesc").html("Peergreen Tomcat</br></br>provides a Tomcat based web container");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-tomcat}", "mouseout", function(sym, e) {
         var e = sym.$("b_pg-tomcat");
         e.width(e.width()/1.1).height(e.height()/1.1);
         sym.$("ProfileDesc").html("");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-was}", "click", function(sym, e) {
         var profile = sym.getVariable("profile");
         if (profile == "unknown") {
         	sym.$("p_tomcat").fadeIn();
         	sym.$("p_jotm").fadeIn();
         	sym.$("p_hibernate").fadeIn();
         	sym.$("p_jersey").fadeIn();
         	sym.$("p_easybeans").fadeIn();
         	sym.$("p_h2").fadeIn();
         	sym.$("p_jdbc").fadeIn();
         	sym.$("p_jndi").fadeIn();
         
         	sym.$("b_pg-tomcat").fadeOut();
         	sym.$("b_pg-kernel").fadeOut();
         	sym.$("b_pg-embedded").fadeOut();
         	sym.$("b_pg-osgi").fadeOut();
         	sym.$("b_pg-user").fadeOut();
         
         	sym.setVariable("profile", "was");
         	sym.$("ProfileDetail").html("</br>Peergreen WAS</br>");
         
         	sym.$("b_download").fadeIn();
         
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-was}", "mouseover", function(sym, e) {
         var e = sym.$("b_pg-was");
         e.width(e.width()*1.1).height(e.height()*1.1);
         sym.$("ProfileDesc").html("Peergreen WAS</br></br>provides a Java EE 6 web profile server.");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-was}", "mouseout", function(sym, e) {
         var e = sym.$("b_pg-was");
         e.width(e.width()/1.1).height(e.height()/1.1);
         sym.$("ProfileDesc").html("");
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-user}", "mouseover", function(sym, e) {
         var e = sym.$("b_pg-user");
         e.width(e.width()*1.1).height(e.height()*1.1);
         sym.$("speech-alacarte").fadeIn();
         sym.$("ProfileDesc").html("Peergreen User Defined</br></br> provides 'A la carte' servers.");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-user}", "mouseout", function(sym, e) {
         var e = sym.$("b_pg-user");
         e.width(e.width()/1.1).height(e.height()/1.1);
         sym.$("speech-alacarte").fadeOut();
         
         sym.$("ProfileDesc").html("");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-kernel}", "click", function(sym, e) {
         var profile = sym.getVariable("profile");
         if (profile == "unknown") {
         	sym.setVariable("profile", "kernel");
         	sym.$("ProfileDetail").html("</br>Peergreen Kernel</br>");
         
         	sym.$("b_pg-tomcat").fadeOut();
         	sym.$("b_pg-was").fadeOut();
         	sym.$("b_pg-embedded").fadeOut();
         	sym.$("b_pg-osgi").fadeOut();
         	sym.$("b_pg-user").fadeOut();
         
         	sym.$("b_download").fadeIn();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-kernel}", "mouseover", function(sym, e) {
         var e = sym.$("b_pg-kernel");
         e.width(e.width()*1.1).height(e.height()*1.1);
         sym.$("ProfileDesc").html("Peergreen Kernel</br></br>provides a lightweight OSGi server.");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-kernel}", "mouseout", function(sym, e) {
         var e = sym.$("b_pg-kernel");
         e.width(e.width()/1.1).height(e.height()/1.1);
         sym.$("ProfileDesc").html("");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-osgi}", "click", function(sym, e) {
         var profile = sym.getVariable("profile");
         if (profile == "unknown") {
         	sym.$("p_tomcat").fadeIn();
         	sym.$("p_jotm").fadeIn();
         	sym.$("p_hibernate").fadeIn();
         	sym.$("p_easybeans").fadeIn();
         	sym.$("p_jndi").fadeIn();
         
         	sym.$("b_pg-tomcat").fadeOut();
         	sym.$("b_pg-was").fadeOut();
         	sym.$("b_pg-embedded").fadeOut();
         	sym.$("b_pg-kernel").fadeOut();
         	sym.$("b_pg-user").fadeOut();
         
         	sym.setVariable("profile", "enterpriseosgi");
         	sym.$("ProfileDetail").html("</br>Peergreen Enterprise OSGi</br>");
         	sym.$("b_download").fadeIn();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-osgi}", "mouseover", function(sym, e) {
         var e = sym.$("b_pg-osgi");
         e.width(e.width()*1.1).height(e.height()*1.1);
         sym.$("ProfileDesc").html("Peergreen Enterprise OSGi</br></br>provides an Enterprise OSGi server.");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b_pg-osgi}", "mouseout", function(sym, e) {
         var e = sym.$("b_pg-osgi");
         e.width(e.width()/1.1).height(e.height()/1.1);
         sym.$("ProfileDesc").html("");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_reset}", "click", function(sym, e) {
         sym.$("p_tomcat").fadeOut();
         sym.$("p_easybeans").fadeOut();
         sym.$("p_jotm").fadeOut();
         sym.$("p_hibernate").fadeOut();
         sym.$("p_jersey").fadeOut();
         sym.$("p_joram").fadeOut();
         sym.$("p_eclipselink").fadeOut();
         sym.$("p_h2").fadeOut();
         sym.$("p_derby").fadeOut();
         sym.$("p_jetty").fadeOut();
         sym.$("p_jdbc").fadeOut();
         sym.$("p_jndi").fadeOut();
         sym.$("p_aries").fadeOut();
         
         
         sym.$("l_tomcat").fadeIn();
         sym.$("l_jotm").fadeIn();
         sym.$("l_hibernate").fadeIn();
         sym.$("l_easybeans").fadeIn();
         sym.$("l_jersey").fadeIn();
         sym.$("l_h2").fadeIn();
         sym.$("l_jdbc").fadeIn();
         sym.$("l_jndi").fadeIn();
         sym.$("l_aries").fadeIn();
         
         
         sym.$("b_pg-kernel").fadeIn();
         sym.$("b_pg-tomcat").fadeIn();
         sym.$("b_pg-was").fadeIn();
         sym.$("b_pg-embedded").fadeIn();
         sym.$("b_pg-osgi").fadeIn();
         sym.$("b_pg-user").fadeIn();
         
         sym.setVariable("profile", "unknown");
         sym.$("ProfileDetail").html("</br>Profile not selected yet");
         
         sym.$("b_download").fadeOut();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_aries}", "mouseover", function(sym, e) {
         sym.$("FeatureDetail").html("Apache Aries</br>OSGi Sub Systems</br>{Enterprise OSGi]</br>");
         var e = sym.$("l_aries");
         e.width(e.width()*1.1).height(e.height()*1.1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_aries}", "click", function(sym, e) {
         var profile = sym.getVariable("profile");
         if (profile == "unknown") {
         	sym.$("b_pg-kernel").fadeOut();
         	sym.$("b_pg-embedded").fadeOut();
         	sym.$("b_pg-tomcat").fadeOut();
         	sym.$("b_pg-was").fadeOut();
         
         	sym.$("l_jersey").fadeOut();
         
         	sym.$("p_aries").fadeIn();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_aries}", "mouseout", function(sym, e) {
         sym.$("FeatureDetail").html("");
         var e = sym.$("l_aries");
         e.width(e.width()/1.1).height(e.height()/1.1);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_jndi}", "mouseover", function(sym, e) {
         sym.$("FeatureDetail").html("JNDI</br>JNDI Registry</br>[JNDI]");
         var e = sym.$("l_jndi");
         e.width(e.width()*1.1).height(e.height()*1.1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_jndi}", "click", function(sym, e) {
         var profile = sym.getVariable("profile");
         if (profile == "unknown") {
         	sym.$("b_pg-kernel").fadeOut();
         	sym.$("b_pg-embedded").fadeOut();
         	sym.$("b_pg-tomcat").fadeOut();
         
         	sym.$("p_jndi").fadeIn();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_l_jndi}", "mouseout", function(sym, e) {
         sym.$("FeatureDetail").html("");
         var e = sym.$("l_jndi");
         e.width(e.width()/1.1).height(e.height()/1.1);
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-487819750");