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
      
      var draw = function($symbol, $profile) {
      	var sym = $symbol;
			($profile == "kernel") ? sym.$("p_tomcat").fadeOut() : sym.$("p_tomcat").fadeIn();
         ($profile == "osgi") ? sym.$("p_jndi").fadeIn() : sym.$("p_jndi").fadeOut();
         ($profile == "osgi") ? sym.$("p_aries").fadeIn() : sym.$("p_aries").fadeOut();
         sym.$("p_jdbc").fadeOut();
         ($profile == "was") ? sym.$("p_h2").fadeIn() : sym.$("p_h2").fadeOut();
         sym.$("p_easybeans").fadeOut();
         sym.$("p_jersey").fadeOut();
         (($profile == "was")||($profile == "osgi")) ? sym.$("p_hibernate").fadeIn() : sym.$("p_hibernate").fadeOut();
         (($profile == "was")||($profile == "osgi")) ? sym.$("p_jotm").fadeIn() : sym.$("p_jotm").fadeOut();
		};

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)", "click", function(sym, e) {
         sym.setVariable("selected", "kernel");
         
         sym.$("product_box").empty();
         sym.$("product_box").append('<img src="images/box_kernel.png"/>');
         
         sym.$("download").empty();
         sym.$("download").append('<img src="images/download.png"/>');
         
         sym.$("profile_desc").html("<b>Peergreen Kernel</b><br /><br />provides a lightweight OSGi server.");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)", "click", function(sym, e) {
         sym.setVariable("selected", "tomcat");
         
         sym.$("product_box").empty();
         sym.$("product_box").append('<img src="images/box_tomcat.png"/>');
         
         sym.$("download").empty();
         sym.$("download").append('<img src="images/download.png"/>');
         
         sym.$("profile_desc").html("<b>Peergreen Tomcat</b><br/><br/>provides a Tomcat based web container.");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)", "click", function(sym, e) {
         sym.setVariable("selected", "was");
         
         sym.$("product_box").empty();
         sym.$("product_box").append('<img src="images/box_was.png"/>');
         
         sym.$("download").empty();
         sym.$("download").append('<img src="images/download.png"/>');
         
         sym.$("profile_desc").html("<b>Peergreen WAS</b> <br /><br />provides a Java EE web profile server.");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)", "click", function(sym, e) {
         sym.setVariable("selected", "osgi");
         
         sym.$("product_box").empty();
         sym.$("product_box").append('<img src="images/box_osgi.png"/>');
         
         sym.$("download").empty();
         sym.$("download").append('<img src="images/download.png"/>');
         
         sym.$("profile_desc").html("<b>Peergreen Enterprise OSGi</b><br /><br />provides an Enterprise OSGi server.");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_download}", "click", function(sym, e) {
         sym.play("play");

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)", "mouseenter", function(sym, e) {
         draw(sym, "kernel");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)", "mouseenter", function(sym, e) {
         draw(sym, "tomcat");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)", "mouseenter", function(sym, e) {
         draw(sym, "was");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)", "mouseenter", function(sym, e) {
         draw(sym, "osgi");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)", "mouseleave", function(sym, e) {
         draw(sym, sym.getVariable("selected"));

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 261, function(sym, e) {
         sym.play();// insérer le code ici

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         draw(sym, "tomcat");
         sym.setVariable("selected", "tomcat");
         
         sym.$("product_box").empty();
         sym.$("product_box").append('<img src="images/box_tomcat.png"/>');
         
         sym.$("download").empty();
         sym.$("download").append('<img src="images/download.png"/>');
         
         sym.$("profile_desc").html("<b>Peergreen Tomcat</b><br/><br/>provides a Tomcat based web container.");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         // insérer le code ici

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-634258009");