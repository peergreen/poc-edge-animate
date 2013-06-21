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
		function isPetalInProfile($petal, $profile) {
			if ($profile == "kernel") {
				return "false";
			} else if ($profile == "tomcat") {
				if ($petal == "tomcat") return "true"; 
				else return "false";	
			} else if ($profile == "was") {
				if ($petal == "tomcat" || $petal == "jotm" || $petal == "hibernate" || $petal == "jersey" || $petal == "h2") return "true";
				else return "false";
			} else if ($profile == "osgi") {
				if ($petal == "tomcat" || $petal == "jotm" || $petal == "jndi" || $petal == "aries" || $petal == "h2") return "true";
				else return "false";
			} else {
				return "true";
			}		
		}
		
  	   var draw = function($symbol, $profile) {
      	var sym = $symbol;  	

         if ($profile == "alacarte") { 
         	sym.$("p_easybeans").fadeIn(); 
         	sym.$("p_easybeans").stop().animate({ opacity: 1 })
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
				sym.$("p_tomcat").stop().animate({ opacity: 1 });
				 sym.$("tomcat_mouseover").fadeIn();
			}

         if (($profile == "alacarte")||($profile == "osgi")) { 
         	sym.$("p_jndi").fadeIn();  
         	sym.$("p_jndi").stop().animate({ opacity: 1 })
         	sym.$("jndi_mouseover").fadeIn();  
         } else {	
         	sym.$("p_jndi").fadeOut();
         	sym.$("jndi_mouseover").fadeOut();
         }

         if (($profile == "alacarte")||($profile == "osgi")) { 
         	sym.$("p_aries").fadeIn();
         	sym.$("p_aries").stop().animate({ opacity: 1 })
         	sym.$("aries_mouseover").fadeIn();
         } else { 
         	sym.$("p_aries").fadeOut();
         	sym.$("aries_mouseover").fadeOut();
         }

         if (($profile == "alacarte")||($profile == "was")||($profile == "osgi")) { 
         	sym.$("p_h2").fadeIn(); 
         	sym.$("p_h2").stop().animate({ opacity: 1 })
         	sym.$("h2_mouseover").fadeIn(); 
         } else { 
         	sym.$("p_h2").fadeOut();
         	sym.$("h2_mouseover").fadeOut();
         }

         if (($profile == "alacarte")||($profile == "was")) { 
         	sym.$("p_jersey").fadeIn(); 
         	sym.$("p_jersey").stop().animate({ opacity: 1 })
         	sym.$("jersey_mouseover").fadeIn(); 
         } else { 
         	sym.$("p_jersey").fadeOut();
         	sym.$("jersey_mouseover").fadeOut();
         }

			if (($profile == "alacarte")||($profile == "was")) { 
				sym.$("p_hibernate").fadeIn(); 
				sym.$("p_hibernate").stop().animate({ opacity: 1 })
				sym.$("hibernate_mouseover").fadeIn(); 
			} else { 
				sym.$("p_hibernate").fadeOut();
				sym.$("hibernate_mouseover").fadeOut();
			}

         if (($profile == "alacarte")||($profile == "was")||($profile == "osgi")) { 
         	sym.$("p_jotm").fadeIn(); 
         	sym.$("p_jotm").stop().animate({ opacity: 1 })
         	sym.$("jotm_mouseover").fadeIn(); 
         } else { 
         	sym.$("p_jotm").fadeOut();
         	sym.$("jotm_mouseover").fadeOut();
         }
         sym.setVariable("profileDrawn", "true");
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
					sym.$("textDownload").append('<div id="size" class="span7">' + $archiveSize + '</div><div class="span5">MB</div>');					
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
      	draw(sym, sym.getVariable('selected'));
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
			sym.$('p_' + $petal + '_info').stop().animate({ opacity: 1 });
		};

		var hideLeaves = function($symbol) {
			var sym = $symbol;
			sym.$('p_tomcat_info').stop().animate({ opacity: 0 });
			sym.$('p_jotm_info').stop().animate({ opacity: 0 });
			sym.$('p_jndi_info').stop().animate({ opacity: 0 });
			sym.$('p_hibernate_info').stop().animate({ opacity: 0 });
			sym.$('p_jersey_info').stop().animate({ opacity: 0 });
			sym.$('p_easybeans_info').stop().animate({ opacity: 0 });
			sym.$('p_h2_info').stop().animate({ opacity: 0 });
			sym.$('p_aries_info').stop().animate({ opacity: 0 });
		}

		var showAllPetals = function($symbol) {
			var sym = $symbol;
			draw(sym, sym.getVariable('selected'));
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
			hideLeaves(sym);
		};

		var enhance = function($symbol, $petal) {
			var e = symbol.$($petal);
			e.width(e.width() * 1.2).height(e.height() * 1.2);
		};


      Symbol.bindElementAction(compId, symbolName, "${_kernel_profile}", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	sym.setVariable("selected", "kernel");
         	sym.setVariable("profileDrawn", "false");

         	var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/peergreen-kernel/1.0.0-M2/peergreen-kernel-1.0.0-M2.jar";
         	var serverName = "Peergreen Kernel 1.0M2";
         	var desc = '<h2>' + serverName + '</h2>';
         	desc += 'Provides a lightweight OSGi server.';	
         	sym.setVariable("serverName", serverName);

         	sym.setVariable("downloadURL", url);

         	//draw(sym, "kernel");
         	selectProfile(sym, desc, "2,16");
          }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tomcat_profile}", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	sym.setVariable("selected", "tomcat");

         	var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/peergreen-server-tomcat/1.0.0-M2/peergreen-server-tomcat-1.0.0-M2.jar";
         	var serverName = "Peergreen Tomcat 1.0M2";
         	var desc = "<h2>" + serverName + "</h2>";
         	desc += 'Tomcat : web container [<img src="images/osgi_logo.png" style="height:18px;display:inline-block;"/> Http service | ';
         	desc += '<img src="images/logo_java.png" style="height:18px;display:inline-block;"/> Servlet 3.0, JSP 2.2]';
         	sym.setVariable("serverName", serverName);

            sym.setVariable("downloadURL", url);

         	//draw(sym, "tomcat");
         	selectProfile(sym, desc, "4,42");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_was_profile}", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	sym.setVariable("selected", "was");

         	var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/peergreen-server-was/1.0.0-M2/peergreen-server-was-1.0.0-M2.jar";
         	//var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/peergreen-server-light/1.0.0-M1/peergreen-server-light-1.0.0-M1.jar";
         	var serverName = "Peergreen WAS 1.0M2";
         	var desc = "<h2>" + serverName + "</h2>";
         	desc += 'Tomcat : web container [<img src="images/osgi_logo.png" style="height:18px;display:inline-block;"/> Http service | ';
         	desc += '<img src="images/logo_java.png" style="height:18px;display:inline-block;"/> Servlet 3.0, JSP 2.2]';
         	desc += '<br />JOTM: <img src="images/osgi_logo.png" style="height:18px;display:inline-block;"/> ';
         	desc += '<img src="images/logo_java.png" style="height:18px;display:inline-block;"/> transaction manager [JTA 1.1]';	
         	desc +='<br/>Jersey : <img src="images/logo_java.png" style="height:18px;display:inline-block;"/> RESTful Web service [JAX-RS 2.0]';
         	desc +="<br/>H2 : java database ";
         	desc +='<br/>Hibernate : <img src="images/logo_java.png" style="height:18px;display:inline-block;"/> persistence layer [JPA 2.0]';
         	sym.setVariable("serverName", serverName);

            sym.setVariable("downloadURL", url);

            //draw(sym, "was");
         	selectProfile(sym, desc, "8,51");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_osgi_profile}", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	sym.setVariable("selected", "osgi");

         	var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/peergreen-server-osgiee/1.0.0-M2/peergreen-server-osgiee-1.0.0-M2.jar";
         	//var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/peergreen-server-light/1.0.0-M1/peergreen-server-light-1.0.0-M1.jar";
         	var serverName = "Peergreen Enterprise OSGi 1.0M2";
         	var desc = "<h3>" + serverName + "</h3>";
         	desc += 'Tomcat : web container [<img src="images/osgi_logo.png" style="height:18px;display:inline-block;"/> Http service | ';
         	desc += '<img src="images/logo_java.png" style="height:18px;display:inline-block;"/> Servlet 3.0, JSP 2.2]';
         	desc += '<br />Aries : <img src="images/osgi_logo.png" style="height:18px;display:inline-block;"/>OSGi Sub-Systems [Enterprise OSGi Sub-System]';
         	desc += '<br />JOTM: <img src="images/osgi_logo.png" style="height:18px;display:inline-block;"/> ';
         	desc += '<img src="images/logo_java.png" style="height:18px;display:inline-block;"/> transaction manager [JTA 1.1]';
         	desc += '<br />JNDI : Registry [<img src="images/osgi_logo.png" style="height:18px;display:inline-block;"/>Enterprise OSGi JNDI service]';
         	desc += '<br />H2 : JDBC datasource factory [<img src="images/osgi_logo.png" style="height:18px;display:inline-block;"/> Enterprise OSGi JDBC datasource]';
         	sym.setVariable("serverName", serverName);

            sym.setVariable("downloadURL", url);

         	//draw(sym, "osgi");
         	selectProfile(sym, desc, "4,90");
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
         
         sym.play('play3');
         sym.stop();
         
         sym.$('.button').click(function() {
         	if (sym.getVariable("busy") == "false") {
         		if (sym.getVariable("selected") != "alacarte") {
         			sym.stop();
         			draw(sym, sym.getVariable("selected"));
         		}
         		$('.profiles').removeClass('active');
         		$(this).parent().addClass('active');
         		$('.profiles').find('img').stop().animate({ opacity: 0.2 });
         		$('.profiles').find('.profile_title').css("font-weight", "normal");
         		$(this).find('img').stop().animate({ opacity: 1 });
         		$(this).find('.profile_title').css("font-weight", "bold");
         
         		$('#getStarted').css("display", "none");
         
         		if ($(this).attr('id') == "kernel_profile") {
         			$('#hybrid').css("display", "none");
         			$('#hybrid').css("cursor", "");
         			$('#raspberry').css("display", "block");
         			$('#raspberry').css("cursor", "pointer");
         			$('#framework').css("display", "block");
         			$('#framework').css("cursor", "pointer");
         		} else {
         			$('#raspberry').css("display", "none");
         			$('#raspberry').css("cursor", "");
         			$('#framework').css("display", "none");
         			$('#framework').css("cursor", "");
         			$('#hybrid').css("display", "block");
         			$('#hybrid').css("cursor", "pointer");
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
         		$('.maven', window.parent.document).css('display','none');
         		$('#maven_' + sym.getVariable("selected"), window.parent.document).css('display','block');
         		$('.server_name', window.parent.document).empty();
         		$('.server_name', window.parent.document).append("<b>" + sym.getVariable('serverName') + "</b>");
         	}
         });
         
         $('#downloadLink', window.parent.document).click(function(){
         	window.top.location = sym.getVariable("downloadURL");
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
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



      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.play();
         sym.$('p_tomcat').stop().animate({ opacity: 0.2 });
         sym.$('p_jotm').stop().animate({ opacity: 0.2 });
         sym.$('p_jndi').stop().animate({ opacity: 0.2 });
         sym.$('p_hibernate').stop().animate({ opacity: 0.2 });
         sym.$('p_jersey').stop().animate({ opacity: 0.2 });
         sym.$('p_easybeans').stop().animate({ opacity: 0.2 });
         sym.$('p_h2').stop().animate({ opacity: 0.2 });
         sym.$('p_aries').stop().animate({ opacity: 0.2 });

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
         	sym.play("play2");
          }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_raspberry}", "click", function(sym, e) {
         var isBusy = sym.getVariable("busy");
         if (isBusy == "false") {
         	window.top.location = "/Blog/Running+Peergreen+Server+on+Raspberry+Pi";
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnDownload}", "mouseenter", function(sym, e) {
         sym.$('btnDownload').stop().animate({ opacity: 1 });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnDownload}", "mouseleave", function(sym, e) {
         sym.$('btnDownload').stop().animate({ opacity: 0.6 });
         if (sym.getVariable("alacarte")) {
         	sym.play("play2");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_linkGetStarted}", "click", function(sym, e) {
         window.top.location = "http://docs.peergreen.com/peergreen_server/latest/reference/xhtml-single/user-guide.xhtml";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_h2_mouseover}", "mouseenter", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("h2", sym.getVariable('selected')) == "true") {
         		showPetal(sym, "h2", "<br/>H2 Database");
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.stop();
         		}
         	} else {
         		sym.$("p_h2").fadeOut();
               sym.$("h2_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_h2_mouseover}", "mouseleave", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("h2", sym.getVariable('selected')) == "true") {
         		showAllPetals(sym);
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.play("play2");
         		}
         	} else {
         		sym.$("p_h2").fadeOut();
               sym.$("h2_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_easybeans_mouseover}", "mouseenter", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("easybeans", sym.getVariable('selected')) == "true") {
         		showPetal(sym,"easybeans", "OW2 EasyBeans<br />EJB container");
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.stop();
         		}
         	} else {
         		sym.$("p_easybeans").fadeOut();
               sym.$("easybeans_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jersey_mouseover}", "mouseenter", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("jersey", sym.getVariable('selected')) == "true") {
         		showPetal(sym,"jersey", "Jersey RESTful <br/> Web Services");
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.stop();
         		}
         	} else {
         		sym.$("p_jersey").fadeOut();
               sym.$("jersey_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hibernate_mouseover}", "mouseenter", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("hibernate", sym.getVariable('selected')) == "true") {
         		showPetal(sym,"hibernate", "Hibernate<br/>Persistence Manager");
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.stop();
         		}
         	} else {
         		sym.$("p_hibernate").fadeOut();
               sym.$("hibernate_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jndi_mouseover}", "mouseenter", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("jndi", sym.getVariable('selected')) == "true") {
         		showPetal(sym,"jndi", "JNDI <br/> Java Naming");
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.stop();
         		}
         	}  else {
         		sym.$("p_jndi").fadeOut();
               sym.$("jndi_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jotm_mouseover}", "mouseenter", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("jotm", sym.getVariable('selected')) == "true") {
         		showPetal(sym,"jotm", "OW2 JOTM <br/> Transaction Manager");
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.stop();
         		}
         	} else {
         		sym.$("p_jotm").fadeOut();
               sym.$("jotm_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tomcat_mouseover}", "mouseenter", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("tomcat", sym.getVariable('selected')) == "true") {
         		showPetal(sym,"tomcat", "Apache Tomcat<br/>Web container");
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.stop();
         		}
         	} else {
         		sym.$("p_tomcat").fadeOut();
               sym.$("tomcat_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_aries_mouseover}", "mouseenter", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("aries", sym.getVariable('selected')) == "true") {
         		showPetal(sym,"aries", "Apache Aries<br/>OSGi isolation");
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.stop();
         		}
         	} else {
         		sym.$("p_aries").fadeOut();
               sym.$("aries_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_easybeans_mouseover}", "mouseleave", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("easybeans", sym.getVariable('selected')) == "true") {
         		showAllPetals(sym);
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.play("play2");
         		}
         	} else {
         		sym.$("p_easybeans").fadeOut();
               sym.$("easybeans_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jersey_mouseover}", "mouseleave", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("jersey", sym.getVariable('selected')) == "true") {
         		showAllPetals(sym);
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.play("play2");
         		}
         	} else {
         		sym.$("p_jersey").fadeOut();
               sym.$("jersey_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hibernate_mouseover}", "mouseleave", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("hibernate", sym.getVariable('selected')) == "true") {
         		showAllPetals(sym);
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.play("play2");
         		}
         	} else {
         		sym.$("p_hibernate").fadeOut();
               sym.$("hibernate_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jndi_mouseover}", "mouseleave", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("jndi", sym.getVariable('selected')) == "true") {
         		showAllPetals(sym);
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.play("play2");
         		}
         	} else {
         		sym.$("p_jndi").fadeOut();
               sym.$("jndi_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jotm_mouseover}", "mouseleave", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("jotm", sym.getVariable('selected')) == "true") {
         		showAllPetals(sym);
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.play("play2");
         		}
         	} else {
         		sym.$("p_jotm").fadeOut();
               sym.$("jotm_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tomcat_mouseover}", "mouseleave", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("tomcat", sym.getVariable('selected')) == "true") {
         		showAllPetals(sym);
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.play("play2");
         		}
         	} else {
         		sym.$("p_tomcat").fadeOut();
               sym.$("tomcat_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_aries_mouseover}", "mouseleave", function(sym, e) {
         var profileDrawn = sym.getVariable("profileDrawn");
         if (profileDrawn == "true") {
         	if (isPetalInProfile("aries", sym.getVariable('selected')) == "true") {
         		showAllPetals(sym);
         		if (sym.getVariable("selected") == "alacarte") {
         			sym.play("play2");
         		}
         	} else {
         		sym.$("p_aries").fadeOut();
               sym.$("aries_mouseover").fadeOut();
         	}
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.$('p_tomcat').stop().animate({ opacity: 1 });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.$('p_jotm').stop().animate({ opacity: 1 });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.$('p_jndi').stop().animate({ opacity: 1 });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         sym.$('p_hibernate').stop().animate({ opacity: 1 });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         sym.$('p_jersey').stop().animate({ opacity: 1 });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
         sym.$('p_easybeans').stop().animate({ opacity: 1 });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         sym.$('p_h2').stop().animate({ opacity: 1 });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         sym.$('p_aries').stop().animate({ opacity: 1 });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.$('p_tomcat').stop().animate({ opacity: 0.2 });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13500, function(sym, e) {
         sym.$('p_jotm').stop().animate({ opacity: 0.2 });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14500, function(sym, e) {
         sym.$('p_jndi').stop().animate({ opacity: 0.2 });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15500, function(sym, e) {
         sym.$('p_hibernate').stop().animate({ opacity: 0.2 });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16500, function(sym, e) {
         sym.$('p_jersey').stop().animate({ opacity: 0.2 });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym, e) {
         sym.$('p_easybeans').stop().animate({ opacity: 0.2 });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18500, function(sym, e) {
         sym.$('p_h2').stop().animate({ opacity: 0.2 });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19500, function(sym, e) {
         sym.$('p_aries').stop().animate({ opacity: 0.2 });
         sym.play("play2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20250, function(sym, e) {
         // insérer le code ici
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-634258009");