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
      
      	if ($profile == "kernel" || $profile == "pccc") { 
      		sym.$("kernel_big").stop().animate({ opacity: 0 });
      	} else {	 
      		 sym.$("kernel_big").stop().animate({ opacity: 1 });
      	}
      
      	if ($profile == "kernel" || $profile == "pccc") { 
      		sym.$("p_tomcat_big").stop().animate({ opacity: 0 });
      	} else {	 
      		 sym.$("p_tomcat_big").stop().animate({ opacity: 1 });
      	}
      
      	if ($profile == "pccc") { 
      		sym.$("p_console_kernel_big").stop().animate({ opacity: 0 });
      	} else {	 
      		 sym.$("p_console_kernel_big").stop().animate({ opacity: 1 });
      	}
      
      	if ($profile == "kernel" || $profile == "pcs") { 
      		sym.$("p_control_center_console").stop().animate({ opacity: 0 });
      	} else {	 
      		 sym.$("p_control_center_console").stop().animate({ opacity: 1 });
      	}
      
      	sym.setVariable("profileDrawn", "true");
      };
      
      var selectProfile = function($symbol, $profileDesc, $archiveSize) {
      	var sym = $symbol;
      	var profileName = sym.getVariable("selected");
      	draw(sym, profileName);
      	if (sym.getVariable("loadDownloadImage") == "true") {
      		sym.$("imgDownload").empty();
      		sym.$("imgDownload").append('<img src="images/download_cloud.png" style="padding-bottom:20px;padding-top:20px;width:100px"/>');			
      		sym.$("textDownload").empty();
      		sym.$("textDownload").append('<div id="size" class="span7">' + $archiveSize + '</div><div class="span5">MB</div>');					
      		sym.setVariable("loadDownloadImage", "false");
      	} else {
      		sym.$("size").empty();
      		sym.$("size").append($archiveSize);
      	}
      	sym.$("desc").empty();
      	sym.$("desc").append($profileDesc);
      };
      
      var showInfo = function($symbol, $petalName) {
      	var sym = $symbol;
      	sym.$("i_txt").css("display", "none");
      	if ($petalName == "tomcat") {
      		sym.$("i_tomcat").css('display', 'block');
      	} else if ($petalName == "pck") {
      		sym.$("i_pck").css('display', 'block');
      	} else if ($petalName == "pccc") {
      		sym.$("i_pccc").css('display', 'block');
      	} else if ($petalName == "kernel") {
      		sym.$("i_kernel").css('display', 'block');	
      	}
      }
      
      var hideInfo = function($symbol) {
      	var sym = $symbol;
      	sym.$("i_tomcat").css('display', 'none');
      	sym.$("i_pck").css('display', 'none');
      	sym.$("i_pccc").css('display', 'none');
      	sym.$("i_kernel").css('display', 'none');
      	sym.$("i_txt").css('display', 'block');
      }
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.$('.button').click(function() {
         		$('.profiles').removeClass('active');
         		$(this).parent().addClass('active');
         		$('.profiles').find('.profile_title').css("font-weight", "normal");
         		$(this).find('.profile_title').css("font-weight", "bold");
         		
         		$('.maven', window.parent.document).css('display','none');
         		$('#maven_' + sym.getVariable("selected"), window.parent.document).css('display','block');
         		$('.server_name', window.parent.document).empty();
         		$('.server_name', window.parent.document).append("<b>" + sym.getVariable('serverName') + "</b>");
         });
         
         $('#downloadLink', window.parent.document).click(function(){
         	window.top.location = sym.getVariable("downloadURL");
         });
         
         $('#pcps_profile').click();

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_kernel_profile}", "click", function(sym, e) {
      sym.setVariable("selected", "kernel");
      sym.setVariable("profileDrawn", "false");
      
      var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/webconsole/peergreen-console-kernel/1.0.0-M1/peergreen-console-kernel-1.0.0-M1.jar";
      var serverName = "Peergreen Web Console Kernel 1.0M1";
      var desc = '<h2>' + serverName + '</h2>';
      desc += 'Based on Vaadin, Peergreen Console Kernel allows to create ';
      desc += 'instances of consoles based on Peergreen Web Console model.';
      sym.setVariable("serverName", serverName);
      
      sym.setVariable("downloadURL", url);
      
      selectProfile(sym, desc, "6.67");

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_pcs_profile}", "click", function(sym, e) {
         sym.setVariable("selected", "pcs");
         sym.setVariable("profileDrawn", "false");
         
         var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/webconsole/peergreen-console-server/1.0.0-M1/peergreen-console-server-1.0.0-M1.zip";
         var serverName = "Peergreen Console Server 1.0M1";
         var desc = '<h2>' + serverName + '</h2>';
         desc += 'Peergreen Console Server is an all in one package for developers who want to develop consoles based ';
         desc += 'on Peergreen Web Console model. <br /><br />';
         desc += 'It is a zip file containing examples inside deploy/ folder. See <a href="http://docs.peergreen.com/peergreen_server/latest/reference/xhtml-single/web-console-developer-guide.xhtml#examples" target="_parent">documentation</a>.';
         sym.setVariable("serverName", serverName);
         
         sym.setVariable("downloadURL", url);
         
         selectProfile(sym, desc, "7,93");
         

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_pccc_profile}", "click", function(sym, e) {
         sym.setVariable("selected", "pccc");
         sym.setVariable("profileDrawn", "false");
         
         var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/webconsole/peergreen-control-center-console/1.0.0-M1/peergreen-control-center-console-1.0.0-M1.jar";
         var serverName = "Peergreen Control Center Console 1.0M1";
         var desc = '<h2>' + serverName + '</h2>';
         desc += "Peergreen Control Center Console is Peergreen's administration console. You can use it ";
         desc += "to manage Peergreen Servers and Platform";
         sym.setVariable("serverName", serverName);
         
         sym.setVariable("downloadURL", url);
         
         selectProfile(sym, desc, "2,12");
         

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_pcps_profile}", "click", function(sym, e) {
         sym.setVariable("selected", "pcps");
         sym.setVariable("profileDrawn", "false");
         
         var url = "https://forge.peergreen.com/repository/content/repositories/releases/com/peergreen/community/webconsole/peergreen-control-point-server/1.0.0-M1/peergreen-control-point-server-1.0.0-M1.jar";
         var serverName = "Peergreen Control Point Server 1.0M1";
         var desc = '<h2>' + serverName + '</h2>';
         desc += 'Peergreen Control Point Server is a special assembly of Peergreen Server with Peergreen Console Kernel ';
         desc += 'and Peergreen Control Center Console. <br /><br />';
         desc += 'Start the server : java -jar peergreen-control-point-server-1.0.0-M1.jar <br />';
         desc += 'And access to Peergreen Control Center Console : <a href="http://localhost:9000/admin" target="_parent">http://localhost:9000/admin</a>';
         sym.setVariable("serverName", serverName);
         
         sym.setVariable("downloadURL", url);
         
         selectProfile(sym, desc, "8,40");
         

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_btnDownload}", "click", function(sym, e) {
         var selected = sym.getVariable("selected");
         window.location.href = sym.getVariable("downloadURL");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_btnDownload}", "mouseleave", function(sym, e) {
         sym.$('btnDownload').stop().animate({ opacity: 0.6 });
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_btnDownload}", "mouseenter", function(sym, e) {
         sym.$('btnDownload').stop().animate({ opacity: 1 });
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_java}", "click", function(sym, e) {
         window.top.location = "http://www.oracle.com/technetwork/java/javase/downloads/index.html";
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_vaadin}", "click", function(sym, e) {
         window.top.location = "https://vaadin.com/home";
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_pcccArea}", "mouseenter", function(sym, e) {
         showInfo(sym, "pccc");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_pcccArea}", "mouseleave", function(sym, e) {
         hideInfo(sym);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_pckArea}", "mouseenter", function(sym, e) {
         showInfo(sym, "pck");
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_tomcatArea}", "mouseenter", function(sym, e) {
         showInfo(sym, "tomcat");
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_tomcatArea}", "mouseleave", function(sym, e) {
         hideInfo(sym);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_pckArea}", "mouseleave", function(sym, e) {
         hideInfo(sym);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_kernalArea}", "mouseenter", function(sym, e) {
         showInfo(sym, "kernel");
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_kernalArea}", "mouseleave", function(sym, e) {
         hideInfo(sym);
      
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-98299582");