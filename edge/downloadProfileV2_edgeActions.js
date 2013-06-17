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
  
         if ($profile == "alacarte") { 
         	sym.$("p_easybeans").fadeIn(); 
         	sym.$("easybeans_mouseover").fadeIn();
         } else { 
         	sym.$("p_easybeans").fadeOut();
         	sym.$("easybeans_mouseover").fadeOut();
         }
  
			if ($profile == "kernel") { 
				sym.$("p_tomcat").fadeOut();
				sym.$("tomcat_mouseover").fadeOut();
			} else {	 
				 sym.$("p_tomcat").fadeIn();
				 sym.$("tomcat_mouseover").fadeIn();
			}

         if (($profile == "alacarte")||($profile == "osgi")) { 
         	sym.$("p_jndi").fadeIn();  
         	sym.$("jndi_mouseover").fadeIn();  
         } else {	
         	sym.$("p_jndi").fadeOut();
         	sym.$("jndi_mouseover").fadeOut();
         }

         if (($profile == "alacarte")||($profile == "osgi")) { 
         	sym.$("p_aries").fadeIn();
         	sym.$("aries_mouseover").fadeIn();
         } else { 
         	sym.$("p_aries").fadeOut();
         	sym.$("aries_mouseover").fadeOut();
         }

         if (($profile == "alacarte")||($profile == "was")||($profile == "osgi")) { 
         	sym.$("p_h2").fadeIn(); 
         	sym.$("h2_mouseover").fadeIn(); 
         } else { 
         	sym.$("p_h2").fadeOut();
         	sym.$("h2_mouseover").fadeOut();
         }

         if (($profile == "alacarte")||($profile == "was")) { 
         	sym.$("p_jersey").fadeIn(); 
         	sym.$("jersey_mouseover").fadeIn(); 
         } else { 
         	sym.$("p_jersey").fadeOut();
         	sym.$("jersey_mouseover").fadeOut();
         }

			if (($profile == "alacarte")||($profile == "was")) { 
				sym.$("p_hibernate").fadeIn(); 
				sym.$("hibernate_mouseover").fadeIn(); 
			} else { 
				sym.$("p_hibernate").fadeOut();
				sym.$("hibernate_mouseover").fadeOut();
			}

         if (($profile == "alacarte")||($profile == "was")||($profile == "osgi")) { 
         	sym.$("p_jotm").fadeIn(); 
         	sym.$("jotm_mouseover").fadeIn(); 
         } else { 
         	sym.$("p_jotm").fadeOut();
         	sym.$("jotm_mouseover").fadeOut();
         }
		};

		var selectProfile = function($symbol, $profileDesc, $archiveSize) {
			var sym = $symbol;
			var profileName = sym.getVariable("selected");

			sym.$("box").empty();
			sym.$("box").append('<img src="images/box_' + profileName + '.png"	/>');		

			if (profileName == "alacarte") {
				sym.$("imgDownload").empty();
				//sym.$("imgDownload").append('<span style="font-size:18px">2) Contact us</span><br/>');
				sym.$("imgDownload").append('<img src="images/contact.png" style="padding-top:20px;width:100px"/>');			
				sym.$("textDownload").empty();
					sym.$("textDownload").append('<span style="font-size:22px">Contact us</span>');	
				sym.setVariable("loadDownloadImage", "true");
			} else {
				if (sym.getVariable("loadDownloadImage") == "true") {
					sym.$("imgDownload").empty();
					//.$("imgDownload").append('<span style="font-size:12px">2) Click to download</span><br/>');
					sym.$("imgDownload").append('<img src="images/download_cloud.png" style="padding-bottom:20px;padding-top:20px;width:100px"/>');			
					sym.$("textDownload").empty();
					sym.$("textDownload").append('<div id="size" class="span5">' + $archiveSize + '</div><div class="span7">MB</div>');					
					sym.setVariable("loadDownloadImage", "false");
				} else {
					sym.$("size").empty();
					sym.$("size").append($archiveSize);
				}
			}
			sym.$("desc").empty();
			sym.$("desc").append($profileDesc);
		};

		var showPetal = function($symbol, $petal, $desc) {
      	var sym = $symbol;
			($petal != "tomcat") ? sym.$("p_tomcat").stop().animate({ opacity: 0.2 }) : sym.$("p_tomcat").stop().animate({ opacity: 1 });
         ($petal != "jndi") ? sym.$("p_jndi").stop().animate({ opacity: 0.2 }) : sym.$("p_jndi").stop().animate({ opacity: 1 });
         ($petal != "aries") ? sym.$("p_aries").stop().animate({ opacity: 0.2 }) : sym.$("p_aries").stop().animate({ opacity: 1 });
         ($petal != "h2") ? sym.$("p_h2").stop().animate({ opacity: 0.2 }) : sym.$("p_h2").stop().animate({ opacity: 1 });
         ($petal != "jersey") ? sym.$("p_jersey").stop().animate({ opacity: 0.2 }) : sym.$("p_jersey").stop().animate({ opacity: 1 });
			($petal != "hibernate") ? sym.$("p_hibernate").stop().animate({ opacity: 0.2 }) : sym.$("p_hibernate").stop().animate({ opacity: 1 });
         ($petal != "jotm") ? sym.$("p_jotm").stop().animate({ opacity: 0.2 }) : sym.$("p_jotm").stop().animate({ opacity: 1 });
         ($petal != "easybeans") ? sym.$("p_easybeans").stop().animate({ opacity: 0.2 }) : sym.$("p_easybeans").stop().animate({ opacity: 1 });
			//sym.$('tige').stop().animate({ opacity: 0.2 });
			sym.$('smallLeaf').stop().animate({ opacity: 0 });
			sym.$('bigLeaf').stop().animate({ opacity: 1 });
			sym.$('textInLeaf').html($desc);
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
			sym.$("p_easybeans").stop().animate({ opacity: 1 });
			sym.$('tige').stop().animate({ opacity: 1 });
			sym.$('smallLeaf').stop().animate({ opacity: 1 });
			sym.$('bigLeaf').stop().animate({ opacity: 0 });
			sym.$('textLeaf').html("");
		};

		var enhance = function($symbol, $petal) {
			var e = symbol.$($petal);
			e.width(e.width() * 1.2).height(e.height() * 1.2);
		};


      Symbol.bindElementAction(compId, symbolName, "${_kernel_profile}", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/peergreen-server-light/1.0.0-M1/peergreen-server-light-1.0.0-M1.jar";
         	var desc = '<h2>Peergreen Kernel 1.0</h2>';
         	desc += 'Provides a lightweight OSGi server.';	

         	sym.setVariable("selected", "kernel");
         	sym.setVariable("downloadURL", url);

         	draw(sym, "kernel");
         	selectProfile(sym, desc, "3,2");
          }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tomcat_profile}", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/peergreen-server-light/1.0.0-M1/peergreen-server-light-1.0.0-M1.jar";
         	var desc = "<h2>Peergreen Tomcat 1.0</h2>";
         	desc +="Tomcat : web container [Servlet 3.0, JSP 2.2]";

         	sym.setVariable("selected", "tomcat");
            sym.setVariable("downloadURL", url);

         	draw(sym, "tomcat");
         	selectProfile(sym, desc, "4");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_was_profile}", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/peergreen-server-light/1.0.0-M1/peergreen-server-light-1.0.0-M1.jar";
         	var desc = "<h2>Peergreen WAS 1.0</h2>";
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

      Symbol.bindElementAction(compId, symbolName, "${_osgi_profile}", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/peergreen-server-light/1.0.0-M1/peergreen-server-light-1.0.0-M1.jar";
         	var desc = "<h2>Peergreen Enterprise OSGi 1.0</h2>";
         	desc += "Tomcat : web container [Enterprise OSGi Http service]";
         	desc += "<br />Aries : OSGi Sub-Systems [Enterprise OSGi Sub-System]";
         	desc += "<br />JOTM: transaction manager [JTA 1.1]";
         	desc += "<br />JNDI : Registry [Enterprise OSGi JNDI service]";
         	desc += "<br />H2 : OSGi JDBC datasource factory [Enterprise OSGi JDBC datasource]";

         	sym.setVariable("selected", "osgi");
            sym.setVariable("downloadURL", url);

         	draw(sym, "osgi");
         	selectProfile(sym, desc, "4,9");
         }

      });
      //Edge binding end













      Symbol.bindElementAction(compId, symbolName, "${_kernel_profile}", "mouseenter", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	//draw(sym, "kernel");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tomcat_profile}", "mouseenter", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	//draw(sym, "tomcat");
         }


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_was_profile}", "mouseenter", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	//draw(sym, "was");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_osgi_profile}", "mouseenter", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	//draw(sym, "osgi");
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
         sym.setVariable("first", "true");
         sym.setVariable("init", "true");
         sym.setVariable("busy", "false");

         sym.$('h2_mouseover').addClass('tooltip');

         sym.$('.button').click(function() {
         	if (sym.getVariable("busy") == "false") {
         		$('.profiles').removeClass('active');
         		$(this).parent().addClass('active');
         		$('.profiles').find('img').stop().animate({ opacity: 0.2 });
         		$('.profiles').find('.profile_title').css("font-weight", "normal");
         		$(this).find('img').stop().animate({ opacity: 1 });
         		$(this).find('.profile_title').css("font-weight", "bold");
         		$('html, body').animate({scrollTop:0}, 'slow');

         		$('#getStarted').css("display", "none");
         		$('#raspberry').css("display", "none");
         		$('#raspberry').css("cursor", "");
         		if ($(this).attr('id') == "kernel_profile") {
         			$('#raspberry').css("display", "block");
         			$('#raspberry').css("cursor", "pointer");
         		}
         		if (sym.getVariable('init') == 'false') {
         			sym.$('step1').stop().animate({ opacity: 0 });
         			sym.$('step3').stop().animate({ opacity: 0 });
         			if (sym.getVariable('first') == "false") {
         				sym.$('step2').stop().animate({ opacity: 0 });
         				sym.$('getStarted').removeClass('span10 offset2');
         				sym.$('getStarted').addClass('span12');
         			} else {
         				sym.$('step2').stop().animate({ opacity: 1 });
         			}
         		}
         		sym.setVariable('init', 'false');
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
         sym.$("tomcat_profile").click();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2086, function(sym, e) {
         sym.stop();
         sym.setVariable("busy", "false");

         // insérer le code ici

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnDownload}", "click", function(sym, e) {
         var selected = sym.getVariable("selected");
         if (selected == "alacarte") {
         	window.top.location = "/About/Contact";
         } else {
         	sym.play("play");
         	sym.setVariable("busy", "true");
         	sym.$("getStarted").css("display", "block");
         	e.preventDefault();  //stop the browser from following
         	window.location.href = sym.getVariable("downloadURL");
         	sym.$('step1').stop().animate({ opacity: 0 });
         	sym.$('step2').stop().animate({ opacity: 0 });
         	if (sym.getVariable('first') != 'false') {
         		sym.$('step3').stop().animate({ opacity: 1 });
         		sym.setVariable('first', 'false');
         	}
         }

      });
      //Edge binding end



      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2315, function(sym, e) {
         sym.play()

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_profiles_menu}", "mouseleave", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	//draw(sym, sym.getVariable("selected"));
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_java}", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	window.top.location = "http://www.oracle.com/technetwork/java/javase/downloads/index.html";
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_alacarte_profile}", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	var desc = '<h2>Peergreen &agrave; la carte Server</h2>';
         	desc += 'Customized server built according to the application needs';	

         	sym.setVariable("selected", "alacarte");

         	draw(sym, "alacarte");
         	selectProfile(sym, desc, "");
          }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_raspberry}", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	window.top.location = "http://www.raspberrypi.org/";
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnDownload}", "mouseenter", function(sym, e) {
         sym.$('btnDownload').stop().animate({ opacity: 1 });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnDownload}", "mouseleave", function(sym, e) {
         sym.$('btnDownload').stop().animate({ opacity: 0.6 });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_linkGetStarted}", "click", function(sym, e) {
         window.top.location = "http://docs.peergreen.com/peergreen_server/latest/reference/xhtml-single/user-guide.xhtml";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_h2_mouseover}", "mouseenter", function(sym, e) {
         showPetal(sym, "h2", "H2 1.3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_h2_mouseover}", "mouseleave", function(sym, e) {
         showAllPetals(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_easybeans_mouseover}", "mouseenter", function(sym, e) {
         showPetal(sym,"easybeans", "EasyBeans 3.0");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jersey_mouseover}", "mouseenter", function(sym, e) {
         showPetal(sym,"jersey", "Jersey 2.0");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hibernate_mouseover}", "mouseenter", function(sym, e) {
         showPetal(sym,"hibernate", "Hibernate 4.1");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jndi_mouseover}", "mouseenter", function(sym, e) {
         showPetal(sym,"jndi", "JNDI 1.0");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jotm_mouseover}", "mouseenter", function(sym, e) {
         showPetal(sym,"jotm", "JOTM 2.3");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tomcat_mouseover}", "mouseenter", function(sym, e) {
         showPetal(sym,"tomcat", "Tomcat 7");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_aries_mouseover}", "mouseenter", function(sym, e) {
         showPetal(sym,"aries", "Aries 1.0");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_easybeans_mouseover}", "mouseleave", function(sym, e) {
         showAllPetals(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jersey_mouseover}", "mouseleave", function(sym, e) {
         showAllPetals(sym);


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hibernate_mouseover}", "mouseleave", function(sym, e) {
         showAllPetals(sym);


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jndi_mouseover}", "mouseleave", function(sym, e) {
         showAllPetals(sym);


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jotm_mouseover}", "mouseleave", function(sym, e) {
         showAllPetals(sym);


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tomcat_mouseover}", "mouseleave", function(sym, e) {
         showAllPetals(sym);


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_aries_mouseover}", "mouseleave", function(sym, e) {
         showAllPetals(sym);


      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-634258009");