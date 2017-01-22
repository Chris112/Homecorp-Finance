if(typeof(window.FG_NS)==="undefined"){var FG_NS=new function(){var jQuery;var jqtimer;var loadedWidgets=new Array();var tocache=new Array("ab6","550","a73","daa","85d","a73","568","177","675","692","8c0","339","58a","91a","22e","e10","d0d","615","939","739","f10","b92","d6e","c02","752","0f8","35d","ed7","4fe","4b5","f27","7be","496","657","ee9","4da","cb0","67e","55d","be2","321","26b","689","15c","4f8","ab1","b71","ddc","06a","6da","dd9","55a","8d1","378","a06","dc8","817","899","ebc","c2f","ef7","6a9","6e0","d08","1ec","7dc","ac4","ef7","5e2","5a5","aa2","781","670","af2","37a","25d","b30","edf","fda","7b1","382","802","660","6ac","d35","981","76a","690","5aa","5b7","f3d","1b7","e6d","a03","86b","b03","8a5","dd7","229","189","f69","8dc","bf1","a7b","9dd","ea9","e61","553","dba","7c7","d23","a6a","ee8","43b","960","ebe","756","2b9","08f","eb6","3d1","8e2","ee1","b5b","9eb","6b7","c17","4a0","0ce","8bc","097","ec1","cb4","515","881","7f3","4ba","902","515","481","9fb","5dc","481","54e","979","c4c","1a4","e36","1f2","412","336","d0d","90e","3e0","cc0","421","927","863","647","0ff","842","0c8","f23","a26","efa","4d3","5ca","78c","814","a32","9d2","fa9","caa","63c","8e3","08c","1f7","4d8","8bb","480","986","6d0","faf","d5d","3fa","02a","3c0","624","e7f","646","418","3cf","bd0","f49","263","02b","476","00e","832","6fb","857","d40","d1d","4e9","678","a9d","044","928","d32","04c","717","13d","d87","af8","5ab","251","03f","a45","677","0a3","d81","465","2a4","a87","92f","af4");var u1=document.URL;var x1=u1.indexOf(':');var fg_proto=u1.substr(0,x1);var jqversion="1.11.0";if(fg_proto=="file")
fg_proto="http";var home_url=fg_proto+"://feedgrabbr.com/";var cacheurl=fg_proto+"://www.feedgrabbr.com/";switch(window.location.hostname){case"localhost":home_url=fg_proto+"://localhost/feedgrab/";cacheurl="http://localhost/feedgrab/";break;case"fgtest.slideawesome.com":home_url=cacheurl=fg_proto+"://fgtest.slideawesome.com/";break;}
if(u1.indexOf(".wix.com")!=-1||u1.indexOf(".usrfiles.com")!=-1)
jqversion="1.8.0";var is_safari=(navigator.userAgent.indexOf('Safari')!=-1&&navigator.userAgent.indexOf('Chrome')==-1)?true:false;var loadjq=true;if(typeof(window.jQuery)!=="undefined"){var jqv=window.jQuery.fn.jquery;var jqvm=jqv.substring(0,3);var jqvm2=jqv.substring(0,4);if(jqvm=="1.8"||jqvm=="1.9"||jqvm=="1.7"||jqvm2=="1.10"||jqvm2=="1.11"){loadjq=false;}}
if(typeof(fg_noloadjq)!=='undefined')
loadjq=false;if(loadjq){var script_tag=document.createElement('script');script_tag.setAttribute("type","text/javascript");script_tag.setAttribute("src",fg_proto+"://ajax.googleapis.com/ajax/libs/jquery/"+jqversion+"/jquery.js");if(script_tag.readyState){script_tag.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){jqLoadedUs();}};}else{script_tag.onload=jqLoadedUs;}
(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(script_tag);}else{if(typeof(window.jQuery)!=="undefined"){jQuery=window.jQuery;main();}
else
{jqtimer=setInterval(function(){if(typeof(window.jQuery)!=="undefined")
{clearInterval(jqtimer);jQuery=window.jQuery;main();}},2000);}}
function jqLoadedUs(){jQuery=window.jQuery.noConflict(true);main();}
function main(){var cssurl=cacheurl+"widget/fgwidget.css";var css_link=jQuery("<link>",{rel:"stylesheet",type:"text/css",href:cssurl});css_link.appendTo('head');if(is_safari)
startWidgetSetup();else
css_link.load(startWidgetSetup);}
function startWidgetSetup()
{if(typeof(fg_widgets)!=='undefined')
{for(var i=0;i<fg_widgets.length;i++)
{loadJSONWid(fg_widgets[i]);loadedWidgets.push(fg_widgets[i]);}}
else
fg_widgets=new Array();jQuery(document).ready(function($){FG_NS.drawWidget1();});}
var scrolltimer=null;this.drawWidget1=function()
{jQuery('.feedgrabbr_widget').each(function(){FG_NS.drawWidget2(jQuery(this));});}
this.clearLoadedWidgets=function()
{loadedWidgets.length=0;}
this.drawWidget2=function(cont)
{var widid=cont.attr('id');if(typeof(widid)==="undefined")
widid="fgid_"+cont.attr("fgid");if(typeof(widid)!=="undefined"){if(loadedWidgets.indexOf(widid)==-1)
{loadedWidgets.push(widid);loadJSONWid(widid);}}}
function loadJSONWid(fgid)
{var jsonp_url;var first_three=fgid.substring(5,8);if(typeof(fg_params)!=="undefined"||jQuery.inArray(first_three,tocache)==-1)
jsonp_url=home_url;else
jsonp_url=cacheurl;jsonp_url+="fg-widget/?id="+fgid;if(typeof(fg_params)!=="undefined")
jsonp_url+="&"+jQuery.param(fg_params);jsonp_url+="&refer="+encodeURIComponent(location.protocol+"//"+location.host);jQuery.ajax({dataType:"jsonp",cache:true,url:jsonp_url,jsonpCallback:"FG_NS.receiveHTML"});}
this.receiveHTML=function(data)
{var widel=jQuery("#fgid_"+data.fgid);if(widel.length==0){widel=jQuery("div[fgid="+data.fgid+"]");}
if(widel.length!=0){widel.html(data.html);setupFGWidget(widel);}}
this.extSetupFGWidget=function(cont)
{setupFGWidget(jQuery(cont));}
function setupFGWidget(cont)
{FG_NS.hidePartialItems(cont);FG_NS.setImageHandlers(cont);var wid=cont.find(".fg_widget_in");FG_NS.startScrollTimer(wid);FG_NS.onLoad(cont.get(0));FG_NS.setupEvents(wid);var wid1=wid.parent();FG_NS.setupNBPopup(wid1);}
var mask=null;var popup;var popupspin;var popupcont;var popupclose;this.setupNBPopup=function(wid)
{if(mask==null){mask=wid.find(".fg_popupmask");if(mask.length>0)
{mask.detach();mask.appendTo("body");popup=wid.find(".fg_popup").detach();popup.appendTo("body");popupclose=popup.find(".fg_popup_close");popupclose.click(function(){mask.hide();popup.hide();return false;});popupspin=popup.find(".fg_popupspin");popupcont=popup.find(".fg_popupcont");}}
else
{wid.find(".fg_popupmask").remove();wid.find(".fg_popup").remove();}
wid.find(".fg_popuplink").click(function(e){mask.show();popupcont.empty().hide();popupspin.show();popup.show();popupclose.focus();var url=home_url+"/fg-doajax/?op=loadpopup&objid="+jQuery(this).attr("storyid");if(typeof(fg_pp_params)!=="undefined"){url+="&"+jQuery.param(fg_pp_params);}
jQuery.ajax({dataType:"jsonp",cache:true,url:url,jsonpCallback:"FG_NS.receivePopupHTML"});return false;});}
this.receivePopupHTML=function(data)
{popupspin.hide();popupcont.show();popupcont.html(data.html);popupcont.scrollTop(0);}
var nb_paused=false;this.setupEvents=function(wid)
{wid.find(".fg_nb_pause").unbind("click");wid.find(".fg_nb_pause").click(function(){if(jQuery(this).hasClass("fg_nb_play"))
{nb_paused=false;}
else
{clearInterval(wid.data("scrolltimer"));nb_paused=true;}
jQuery(this).toggleClass("fg_nb_play");return false;});wid.find(".fg_nb_next,.fg_nb_prev").unbind("click");wid.find(".fg_nb_next,.fg_nb_prev").click(function(){if(!nb_paused)
clearInterval(wid.data("scrolltimer"));if(jQuery(this).hasClass("fg_nb_next"))
FG_NS.doNBScroll(wid,1);else
FG_NS.doNBScroll(wid,-1);if(!nb_paused)
FG_NS.startScrollTimer(wid);return false;});wid.unbind("mouseenter mouseleave");wid.hover(function(){clearInterval(jQuery(this).data("scrolltimer"));},function(){if(!nb_paused)
FG_NS.startScrollTimer(jQuery(this));});wid.find(".fg_fb_lbutton,.fg_fb_rbutton").unbind("click");wid.find(".fg_fb_lbutton,.fg_fb_rbutton").click(function(){if(this.hasClass("fg_fb_rbutton"))
scrollNext(wid.parent());else
scrollBack(wid.parent());});}
this.doNBScroll=function(wid,delta)
{var mask=wid.find(".fg_nb_mask");var col=wid.find('.fg_col');var storycount=parseInt(col.attr("storycount"));var curr=col.data("curr");if(typeof(curr)==="undefined"){curr=0;}
var stories=col.find(".fg_story");mask.css({"opacity":0,"display":"block"});mask.animate({opacity:1.0},{complete:function(){jQuery(stories[curr]).hide();curr=curr+delta;if(curr>=storycount)
curr=0;if(curr<0)
curr=storycount-1;jQuery(stories[curr]).show();col.data("curr",curr);mask.fadeOut();}});}
this.startScrollTimer=function(widcont)
{var wid=jQuery(widcont);var scrint=wid.attr("scrollinterval");if(typeof(scrint)=="undefined")
scrint=5000;if(typeof(wid.data("scrollinterval"))!=="undefined")
clearInterval(wid.data("scrolltimer"));wid.data("scrolltimer",setInterval(function(){scrollNext(wid.parent())},parseInt(scrint)));}
this.setImageHandlers=function(widcont)
{var wid=jQuery(widcont);FG_NS.autoSizeImages(widcont);}
this.autoSizeImages=function(widcont)
{jQuery(widcont).find('.fg_wid_cont2 img').each(function(){if(this.complete)
{FG_NS.autoSizeImage(this);}
else
{if(typeof(jQuery(this).on)==="undefined")
jQuery(this).bind('load',function(){FG_NS.autoSizeImage(this);});else
jQuery(this).on('load',function(){FG_NS.autoSizeImage(this);});}});}
this.autoSizeImage=function(img1)
{var img=jQuery(img1);var widcont2=img.parent();if(typeof(img1.naturalHeight)!=="undefined"){var hw1=img1.naturalHeight / img1.naturalWidth;var hw2=(widcont2.innerHeight())/(widcont2.innerWidth());if(hw2<hw1)
img.css({'height':'auto','width':'100%'});else
img.css({'width':'auto','height':'100%'});var v1=Math.floor((widcont2.innerWidth()-img.width())/ 2);img.css({"margin-left":v1+"px"});}}
this.onLoad=function(wid)
{}
this.hidePartialItems=function(widcont)
{}
function scrollNext(el)
{FG_NS.doScroll(el,"next");}
function scrollBack(el)
{FG_NS.doScroll(el,"back");}
this.doScroll=function(el,dir)
{var wid=el;if(wid.hasClass("fg_l_nb")){FG_NS.doNBScroll(wid,1);return;}
if(!wid.hasClass('fg_scrolling')){return;}
if(wid.hasClass('fg_l_fb'))
{var col=wid.find('.fg_col');var usecss=true;if(typeof(col[0].style.webkitTransition)==="undefined"&&typeof(col[0].style.transition)==="undefined"&&typeof(col[0].style.mozTransition)==="undefined")
usecss=false;var cnt=col.data("scount");var cntmax=parseInt(col.attr('storycount'));if(typeof(cnt)=="undefined"){cnt=0;}
if(dir=="next")
cnt++;else
cnt--;if(cnt<cntmax){var swidth=col.find('.fg_story').width();if(cnt<0)
cnt=cntmax-1;var curleft=-1*(cnt*swidth);if(usecss){col.css('left',curleft+"px");}
else
{col.animate({left:curleft},400,'linear',function(){col.css("left",curleft+"px");});}}
else
{col.css("left","0px");cnt=0;}
col.data("scount",cnt);}
else
{var el1=wid.find('.fg_story:last-child');var elheight=el1.css('height');el1.css({'height':'0px','opacity':0,'display':'block'});wid.find('.fg_padder').prepend(el1);el1.animate({height:elheight},{complete:function(){jQuery(this).css('height','');}});el1.animate({opacity:1.0});}}};}