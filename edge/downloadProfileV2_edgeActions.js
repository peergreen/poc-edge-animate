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
         sym.$("p_jdbc").fadeOut();
         sym.$("p_easybeans").fadeOut();
  
		($profile == "kernel") ? sym.$("p_tomcat").fadeOut() : sym.$("p_tomcat").fadeIn();
         ($profile == "osgi") ? sym.$("p_jndi").fadeIn() : sym.$("p_jndi").fadeOut();
         ($profile == "osgi") ? sym.$("p_aries").fadeIn() : sym.$("p_aries").fadeOut();
         ($profile == "was") ? sym.$("p_h2").fadeIn() : sym.$("p_h2").fadeOut();
         ($profile == "was") ? sym.$("p_jersey").fadeIn() : sym.$("p_jersey").fadeOut();

		(($profile == "was")||($profile == "osgi")) ? sym.$("p_hibernate").fadeIn() : sym.$("p_hibernate").fadeOut();
         (($profile == "was")||($profile == "osgi")) ? sym.$("p_jotm").fadeIn() : sym.$("p_jotm").fadeOut();
		};

		var selectProfile = function($symbol, $profileDesc, $archiveSize) {
			var sym = $symbol;
			var profileName = sym.getVariable("selected");

			sym.$("box").empty();
			sym.$("box").append('<img src="images/box_' + profileName + '.png"	/>');		

			sym.$("btnDownload").empty();
			var btnDownload = '<img src="images/download_cloud.png" style="padding-bottom:10px;width:100px"/>';
			btnDownload += '<h2>' + $archiveSize + ' MB</h2>';
			sym.$("btnDownload").append(btnDownload);

			sym.$("desc").empty();
			sym.$("desc").append($profileDesc);
		};

		var showPetal = function($symbol, $petal) {
      	var sym = $symbol;	
			($petal != "tomcat") ? sym.$("p_tomcat").stop().animate({ opacity: 0.2 }) : sym.$("p_tomcat").stop().animate({ opacity: 1 });
         ($petal != "jndi") ? sym.$("p_jndi").stop().animate({ opacity: 0.2 }) : sym.$("p_jndi").stop().animate({ opacity: 0.2 });
         ($petal != "aries") ? sym.$("p_aries").stop().animate({ opacity: 0.2 }) : sym.$("p_aries").stop().animate({ opacity: 0.2 });
         ($petal != "h2") ? sym.$("p_h2").stop().animate({ opacity: 0.2 }) : sym.$("p_h2").stop().animate({ opacity: 0.2 });
         ($petal != "jersey") ? sym.$("p_jersey").stop().animate({ opacity: 0.2 }) : sym.$("p_jersey").stop().animate({ opacity: 0.2 });
			($petal != "hibernate") ? sym.$("p_hibernate").stop().animate({ opacity: 0.2 }) : sym.$("p_hibernate").stop().animate({ opacity: 0.2 });
         ($petal != "jotm") ? sym.$("p_jotm").stop().animate({ opacity: 0.2 }) : sym.$("p_jotm").stop().animate({ opacity: 0.2 });
         ($petal != "jdbc") ? sym.$("p_jdbc").stop().animate({ opacity: 0.2 }) : sym.$("p_jdbc").stop().animate({ opacity: 0.2 });
         ($petal != "easybeans") ? sym.$("p_easybeans").stop().animate({ opacity: 0.2 }) : sym.$("p_easybeans").stop().animate({ opacity: 0.2 });
		};

		var showAllPetals = function($symbol) {
			var sym = $symbol;
			sym.$("p_tomcat").stop().animate({ opacity: 1 });
			sym.$("p_jndi").stop().animate({ opacity: 1 });
			sym.$("p_aries").stop().animate({ opacity: 1 });
			sym.$("p_h2").stop().animate({ opacity: 1 });
			sym.$("p_jersey").stop().animate({ opacity: 1 });
			sym.$("p_hibernate").stop().animate({ opacity: 1 });
			sym.$("p_jotm").stop().animate({ opacity: 1 });
			sym.$("p_jdbc").stop().animate({ opacity: 1 });
			sym.$("p_easybeans").stop().animate({ opacity: 1 });
		};

		var enhance = function($symbol, $petal) {
			var e = symbol.$($petal);
			e.width(e.width() * 1.2).height(e.height() * 1.2);
		};


      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/peergreen-server-light/1.0.0-M1/peergreen-server-light-1.0.0-M1.jar";
         	var desc = '<h2>Peergreen Kernel </h2>';
         	desc += 'Provides a lightweight OSGi server.';	
         
         	sym.setVariable("selected", "kernel");
         	sym.setVariable("downloadURL", url);
         
         	draw(sym, "kernel");
         	selectProfile(sym, desc, "3,2");
          }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/peergreen-server-light/1.0.0-M1/peergreen-server-light-1.0.0-M1.jar";
         	var desc = "<h2>Peergreen Tomcat</h2>";
         	desc +="Tomcat : web container [Servlet 3.0, JSP 2.2]";
         
         	sym.setVariable("selected", "tomcat");
            sym.setVariable("downloadURL", url);
         
         	draw(sym, "tomcat");
         	selectProfile(sym, desc, "4");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/peergreen-server-light/1.0.0-M1/peergreen-server-light-1.0.0-M1.jar";
         	var desc = "<h2>Peergreen WAS</h2>";
         	desc +="Tomcat : web container [Servlet 3.0, JSP 2.2]";
         	desc +="<br/>JOTM : transaction manager [JTA 1.1]";
         	desc +="<br/>Jersey : RESTful Web service [JAX-RS 2.0]";
         	desc +="<br/>H2 : java database ";
         	desc +="<br/>Hibernate : persistence layer [JPA 2.0]";
         
         	sym.setVariable("selected", "was");
            sym.setVariable("downloadURL", url);
         
            draw(sym, "was");
         	selectProfile(sym, desc, "5,1");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/peergreen-server-light/1.0.0-M1/peergreen-server-light-1.0.0-M1.jar";
         	var desc = "<h2>Peergreen Enterprise OSGi</h2>";
         	desc += "Tomcat : web container [Enterprise OSGi Http service]";
         	desc += "<br />Aries : OSGi Sub-Systems [Enterprise OSGi Sub-System]";
         	desc += "<br />JOTM: transaction manager [JTA 1.1]";
         	desc += "<br />JNDI : Registry [Enterprise OSGi JNDI service]";
         	desc += "<br />Hibernate : persistence layer [JPA 2.0]";
         
         	sym.setVariable("selected", "osgi");
            sym.setVariable("downloadURL", url);
         
         	draw(sym, "osgi");
         	selectProfile(sym, desc, "4,9");
         }

      });
      //Edge binding end













      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)", "mouseenter", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	//draw(sym, "kernel");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)", "mouseenter", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	//draw(sym, "tomcat");
         }


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)", "mouseenter", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	//draw(sym, "was");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)", "mouseenter", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	//draw(sym, "osgi");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)", "mouseleave", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	draw(sym, sym.getVariable("selected"));
         }

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
         var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/peergreen-server-light/1.0.0-M1/peergreen-server-light-1.0.0-M1.jar";
         var desc = "<h2>Peergreen Tomcat </h2>";
         desc +="Tomcat : web container [Servlet 3.0, JSP 2.2]";
         
         sym.setVariable("selected", "tomcat");
         sym.setVariable("downloadURL", url);
         
         draw(sym, "tomcat");
         selectProfile(sym, desc, "4");
         
         sym.setVariable("busy", "false");
         sym.$("tomcat_profile").addClass("active");
         sym.$("tomcat_profile").find('img').stop().animate({ opacity: 1 });
         
         sym.$('.button').click(function() {
         	if (sym.getVariable("busy") == "false") {
         		$('.profiles').removeClass('active');
         		$(this).parent().addClass('active');
         		$('.profiles').find('img').stop().animate({ opacity: 0.2 });
         		$('.profiles').find('.profile_title').css("font-weight", "normal");
         		$(this).find('img').stop().animate({ opacity: 1 });
         		$(this).find('.profile_title').css("font-weight", "bold");
         	}
         });
         $('.profiles').hover(
         	function () {
         		$(this).find('img').stop().animate({ opacity: 1 });
         	},
         	function () {
         		if (!$(this).hasClass('active')) {
         			$(this).find('img').stop().animate({ opacity: 0.2 });
         		}
         	}
         );

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2086, function(sym, e) {
         sym.stop();
         sym.setVariable("busy", "false");

         // insérer le code ici

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnDownload}", "click", function(sym, e) {
         sym.play("play");
         sym.setVariable("busy", "true");
         e.preventDefault();  //stop the browser from following
         window.location.href = sym.getVariable("downloadURL");

      });
      //Edge binding end



   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-634258009");