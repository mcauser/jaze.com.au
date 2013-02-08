/*
Aurora Core Script Libraries

Includes YUI Compressed versions of...

	* Mootools Core (1.2.4)
	* Mootools More (1.2.4) with
		More
		Lang
		Log
		Class.Refactor
		Class.Binds
		Class.Occlude
		Class.Wait
		Array.Extras
		Date
		Date.Extras
		Hash.Extras
		String.Extras
		String.QueryString
		URI
		URI.Relative
		Element.Forms
		Elements.Form
		Element.Delegation
		Element.Measure
		Element.Pin
		Element.Position
		Element.Shortcuts
		Form.Validator
		Form.Validator.Inline
		Form.Validator.Extras
		OverText
		Fx.Elements
		Fx.Move
		Fx.Reveal
		Fx.Scroll
		Fx.SmoothScroll
		Drag
		Drag.Move
		Slider
		Sortables
		Assets
		Hash.Cookie
		IframeShim
		HtmlTable
		HtmlTable.Zebra
		HtmlTable.Sort
		HtmlTable.Select
		Keyboard
		Mash
		Spinner
		Date.English.US
		Form.Validator.English
		Date.English.GB
		
		JSONP
	
And a collection of Aurora-specific extensions

*/

// TW 2012-02-04: Mootools selector fix
// http://stackoverflow.com/questions/14267457/firefox-18-breaks-mootools-1-2-5-selector-engine/14272657
String.prototype.contains = function(string, separator){
	return (separator) ? (separator + this + separator).indexOf(separator + string + separator) > -1 : String(this).indexOf(string) > -1;
};

//MooTools, <http://mootools.net>, My Object Oriented (JavaScript) Tools. Copyright (c) 2006-2009 Valerio Proietti, <http://mad4milk.net>, MIT Style License.

var MooTools={version:"1.2.5",build:"008d8f0f2fcc2044e54fdd3635341aaab274e757"};var Native=function(l){l=l||{};var a=l.name;var j=l.legacy;var b=l.protect;var c=l.implement;var i=l.generics;var g=l.initialize;var h=l.afterImplement||function(){};var d=g||j;i=i!==false;d.constructor=Native;d.$family={name:"native"};if(j&&g){d.prototype=j.prototype;}d.prototype.constructor=d;if(a){var f=a.toLowerCase();d.prototype.$family={name:f};Native.typize(d,f);}var k=function(o,m,p,n){if(!b||n||!o.prototype[m]){o.prototype[m]=p;}if(i){Native.genericize(o,m,b);}h.call(o,m,p);return o;};d.alias=function(o,m,q){if(typeof o=="string"){var p=this.prototype[o];if((o=p)){return k(this,m,o,q);}}for(var n in o){this.alias(n,o[n],m);}return this;};d.implement=function(n,m,q){if(typeof n=="string"){return k(this,n,m,q);}for(var o in n){k(this,o,n[o],m);}return this;};if(c){d.implement(c);}return d;};Native.genericize=function(b,c,a){if((!a||!b[c])&&typeof b.prototype[c]=="function"){b[c]=function(){var d=Array.prototype.slice.call(arguments);return b.prototype[c].apply(d.shift(),d);};}};Native.implement=function(d,c){for(var b=0,a=d.length;b<a;b++){d[b].implement(c);}};Native.typize=function(a,b){if(!a.type){a.type=function(c){return($type(c)===b);};}};(function(){var a={Array:Array,Date:Date,Function:Function,Number:Number,RegExp:RegExp,String:String};for(var j in a){new Native({name:j,initialize:a[j],protect:true});}var d={"boolean":Boolean,"native":Native,object:Object};for(var c in d){Native.typize(d[c],c);}var h={Array:["concat","indexOf","join","lastIndexOf","pop","push","reverse","shift","slice","sort","splice","toString","unshift","valueOf"],String:["charAt","charCodeAt","concat","indexOf","lastIndexOf","match","replace","search","slice","split","substr","substring","toLowerCase","toUpperCase","valueOf"]};for(var f in h){for(var b=h[f].length;b--;){Native.genericize(a[f],h[f][b],true);}}})();var Hash=new Native({name:"Hash",initialize:function(a){if($type(a)=="hash"){a=$unlink(a.getClean());}for(var b in a){this[b]=a[b];}return this;}});Hash.implement({forEach:function(b,c){for(var a in this){if(this.hasOwnProperty(a)){b.call(c,this[a],a,this);}}},getClean:function(){var b={};for(var a in this){if(this.hasOwnProperty(a)){b[a]=this[a];}}return b;},getLength:function(){var b=0;for(var a in this){if(this.hasOwnProperty(a)){b++;}}return b;}});Hash.alias("forEach","each");Array.implement({forEach:function(c,d){for(var b=0,a=this.length;b<a;b++){c.call(d,this[b],b,this);}}});Array.alias("forEach","each");function $A(b){if(b.item){var a=b.length,c=new Array(a);while(a--){c[a]=b[a];}return c;}return Array.prototype.slice.call(b);}function $arguments(a){return function(){return arguments[a];};}function $chk(a){return !!(a||a===0);}function $clear(a){clearTimeout(a);clearInterval(a);return null;}function $defined(a){return(a!=undefined);}function $each(c,b,d){var a=$type(c);((a=="arguments"||a=="collection"||a=="array")?Array:Hash).each(c,b,d);}function $empty(){}function $extend(c,a){for(var b in (a||{})){c[b]=a[b];}return c;}function $H(a){return new Hash(a);}function $lambda(a){return($type(a)=="function")?a:function(){return a;};}function $merge(){var a=Array.slice(arguments);a.unshift({});return $mixin.apply(null,a);}function $mixin(f){for(var d=1,a=arguments.length;d<a;d++){var b=arguments[d];if($type(b)!="object"){continue;}for(var c in b){var h=b[c],g=f[c];f[c]=(g&&$type(h)=="object"&&$type(g)=="object")?$mixin(g,h):$unlink(h);}}return f;}function $pick(){for(var b=0,a=arguments.length;b<a;b++){if(arguments[b]!=undefined){return arguments[b];}}return null;}function $random(b,a){return Math.floor(Math.random()*(a-b+1)+b);}function $splat(b){var a=$type(b);return(a)?((a!="array"&&a!="arguments")?[b]:b):[];}var $time=Date.now||function(){return +new Date;};function $try(){for(var b=0,a=arguments.length;b<a;b++){try{return arguments[b]();}catch(c){}}return null;}function $type(a){if(a==undefined){return false;}if(a.$family){return(a.$family.name=="number"&&!isFinite(a))?false:a.$family.name;}if(a.nodeName){switch(a.nodeType){case 1:return"element";case 3:return(/\S/).test(a.nodeValue)?"textnode":"whitespace";}}else{if(typeof a.length=="number"){if(a.callee){return"arguments";}else{if(a.item){return"collection";}}}}return typeof a;}function $unlink(c){var b;switch($type(c)){case"object":b={};for(var f in c){b[f]=$unlink(c[f]);}break;case"hash":b=new Hash(c);break;case"array":b=[];for(var d=0,a=c.length;d<a;d++){b[d]=$unlink(c[d]);}break;default:return c;}return b;}Array.implement({every:function(c,d){for(var b=0,a=this.length;b<a;b++){if(!c.call(d,this[b],b,this)){return false;}}return true;},filter:function(d,f){var c=[];for(var b=0,a=this.length;b<a;b++){if(d.call(f,this[b],b,this)){c.push(this[b]);}}return c;},clean:function(){return this.filter($defined);},indexOf:function(c,d){var a=this.length;for(var b=(d<0)?Math.max(0,a+d):d||0;b<a;b++){if(this[b]===c){return b;}}return -1;},map:function(d,f){var c=[];for(var b=0,a=this.length;b<a;b++){c[b]=d.call(f,this[b],b,this);}return c;},some:function(c,d){for(var b=0,a=this.length;b<a;b++){if(c.call(d,this[b],b,this)){return true;}}return false;},associate:function(c){var d={},b=Math.min(this.length,c.length);for(var a=0;a<b;a++){d[c[a]]=this[a];}return d;},link:function(c){var a={};for(var f=0,b=this.length;f<b;f++){for(var d in c){if(c[d](this[f])){a[d]=this[f];delete c[d];break;}}}return a;},contains:function(a,b){return this.indexOf(a,b)!=-1;},extend:function(c){for(var b=0,a=c.length;b<a;b++){this.push(c[b]);}return this;},getLast:function(){return(this.length)?this[this.length-1]:null;},getRandom:function(){return(this.length)?this[$random(0,this.length-1)]:null;},include:function(a){if(!this.contains(a)){this.push(a);}return this;},combine:function(c){for(var b=0,a=c.length;b<a;b++){this.include(c[b]);}return this;},erase:function(b){for(var a=this.length;a--;a){if(this[a]===b){this.splice(a,1);}}return this;},empty:function(){this.length=0;return this;},flatten:function(){var d=[];for(var b=0,a=this.length;b<a;b++){var c=$type(this[b]);if(!c){continue;}d=d.concat((c=="array"||c=="collection"||c=="arguments")?Array.flatten(this[b]):this[b]);}return d;},hexToRgb:function(b){if(this.length!=3){return null;}var a=this.map(function(c){if(c.length==1){c+=c;}return c.toInt(16);});return(b)?a:"rgb("+a+")";},rgbToHex:function(d){if(this.length<3){return null;}if(this.length==4&&this[3]==0&&!d){return"transparent";}var b=[];for(var a=0;a<3;a++){var c=(this[a]-0).toString(16);b.push((c.length==1)?"0"+c:c);}return(d)?b:"#"+b.join("");}});String.implement({test:function(a,b){return((typeof a=="string")?new RegExp(a,b):a).test(this);},contains:function(a,b){return(b)?(b+this+b).indexOf(b+a+b)>-1:this.indexOf(a)>-1;},trim:function(){return this.replace(/^\s+|\s+$/g,"");},clean:function(){return this.replace(/\s+/g," ").trim();},camelCase:function(){return this.replace(/-\D/g,function(a){return a.charAt(1).toUpperCase();});},hyphenate:function(){return this.replace(/[A-Z]/g,function(a){return("-"+a.charAt(0).toLowerCase());});},capitalize:function(){return this.replace(/\b[a-z]/g,function(a){return a.toUpperCase();});},escapeRegExp:function(){return this.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1");},toInt:function(a){return parseInt(this,a||10);},toFloat:function(){return parseFloat(this);},hexToRgb:function(b){var a=this.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);return(a)?a.slice(1).hexToRgb(b):null;},rgbToHex:function(b){var a=this.match(/\d{1,3}/g);return(a)?a.rgbToHex(b):null;},stripScripts:function(b){var a="";var c=this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){a+=arguments[1]+"\n";return"";});if(b===true){$exec(a);}else{if($type(b)=="function"){b(a,c);}}return c;},substitute:function(a,b){return this.replace(b||(/\\?\{([^{}]+)\}/g),function(d,c){if(d.charAt(0)=="\\"){return d.slice(1);}return(a[c]!=undefined)?a[c]:"";});}});try{delete Function.prototype.bind;}catch(e){}Function.implement({extend:function(a){for(var b in a){this[b]=a[b];}return this;},create:function(b){var a=this;b=b||{};return function(d){var c=b.arguments;c=(c!=undefined)?$splat(c):Array.slice(arguments,(b.event)?1:0);if(b.event){c=[d||window.event].extend(c);}var f=function(){return a.apply(b.bind||null,c);};if(b.delay){return setTimeout(f,b.delay);}if(b.periodical){return setInterval(f,b.periodical);}if(b.attempt){return $try(f);}return f();};},run:function(a,b){return this.apply(b,$splat(a));},pass:function(a,b){return this.create({bind:b,arguments:a});},bind:function(b,a){return this.create({bind:b,arguments:a});},bindWithEvent:function(b,a){return this.create({bind:b,arguments:a,event:true});},attempt:function(a,b){return this.create({bind:b,arguments:a,attempt:true})();},delay:function(b,c,a){return this.create({bind:c,arguments:a,delay:b})();},periodical:function(c,b,a){return this.create({bind:b,arguments:a,periodical:c})();}});Number.implement({limit:function(b,a){return Math.min(a,Math.max(b,this));},round:function(a){a=Math.pow(10,a||0);return Math.round(this*a)/a;},times:function(b,c){for(var a=0;a<this;a++){b.call(c,a,this);}},toFloat:function(){return parseFloat(this);},toInt:function(a){return parseInt(this,a||10);}});Number.alias("times","each");(function(b){var a={};b.each(function(c){if(!Number[c]){a[c]=function(){return Math[c].apply(null,[this].concat($A(arguments)));};}});Number.implement(a);})(["abs","acos","asin","atan","atan2","ceil","cos","exp","floor","log","max","min","pow","sin","sqrt","tan"]);Hash.implement({has:Object.prototype.hasOwnProperty,keyOf:function(b){for(var a in this){if(this.hasOwnProperty(a)&&this[a]===b){return a;}}return null;},hasValue:function(a){return(Hash.keyOf(this,a)!==null);},extend:function(a){Hash.each(a||{},function(c,b){Hash.set(this,b,c);},this);return this;},combine:function(a){Hash.each(a||{},function(c,b){Hash.include(this,b,c);},this);return this;},erase:function(a){if(this.hasOwnProperty(a)){delete this[a];}return this;},get:function(a){return(this.hasOwnProperty(a))?this[a]:null;},set:function(a,b){if(!this[a]||this.hasOwnProperty(a)){this[a]=b;}return this;},empty:function(){Hash.each(this,function(b,a){delete this[a];},this);return this;},include:function(a,b){if(this[a]==undefined){this[a]=b;}return this;},map:function(b,c){var a=new Hash;Hash.each(this,function(f,d){a.set(d,b.call(c,f,d,this));},this);return a;},filter:function(b,c){var a=new Hash;Hash.each(this,function(f,d){if(b.call(c,f,d,this)){a.set(d,f);}},this);return a;},every:function(b,c){for(var a in this){if(this.hasOwnProperty(a)&&!b.call(c,this[a],a)){return false;}}return true;},some:function(b,c){for(var a in this){if(this.hasOwnProperty(a)&&b.call(c,this[a],a)){return true;}}return false;},getKeys:function(){var a=[];Hash.each(this,function(c,b){a.push(b);});return a;},getValues:function(){var a=[];Hash.each(this,function(b){a.push(b);});return a;},toQueryString:function(a){var b=[];Hash.each(this,function(g,f){if(a){f=a+"["+f+"]";}var d;switch($type(g)){case"object":d=Hash.toQueryString(g,f);break;case"array":var c={};g.each(function(j,h){c[h]=j;});d=Hash.toQueryString(c,f);break;default:d=f+"="+encodeURIComponent(g);}if(g!=undefined){b.push(d);}});return b.join("&");}});Hash.alias({keyOf:"indexOf",hasValue:"contains"});function Class(b){if(b instanceof Function){b={initialize:b};}var a=function(){Object.reset(this);if(a._prototyping){return this;}this._current=$empty;var c=(this.initialize)?this.initialize.apply(this,arguments):this;delete this._current;delete this.caller;return c;}.extend(this);a.implement(b);a.constructor=Class;a.prototype.constructor=a;return a;}Function.prototype.protect=function(){this._protected=true;return this;};Object.reset=function(a,c){if(c==null){for(var f in a){Object.reset(a,f);}return a;}delete a[c];switch($type(a[c])){case"object":var d=function(){};d.prototype=a[c];var b=new d;a[c]=Object.reset(b);break;case"array":a[c]=$unlink(a[c]);break;}return a;};new Native({name:"Class",initialize:Class}).extend({instantiate:function(b){b._prototyping=true;var a=new b;delete b._prototyping;return a;},wrap:function(a,b,c){if(c._origin){c=c._origin;}return function(){if(c._protected&&this._current==null){throw new Error('The method "'+b+'" cannot be called.');}var f=this.caller,g=this._current;this.caller=g;this._current=arguments.callee;var d=c.apply(this,arguments);this._current=g;this.caller=f;return d;}.extend({_owner:a,_origin:c,_name:b});}});Class.implement({implement:function(a,d){if($type(a)=="object"){for(var f in a){this.implement(f,a[f]);}return this;}var g=Class.Mutators[a];if(g){d=g.call(this,d);if(d==null){return this;}}var c=this.prototype;switch($type(d)){case"function":if(d._hidden){return this;}c[a]=Class.wrap(this,a,d);break;case"object":var b=c[a];if($type(b)=="object"){$mixin(b,d);}else{c[a]=$unlink(d);}break;case"array":c[a]=$unlink(d);break;default:c[a]=d;}return this;}});Class.Mutators={Extends:function(a){this.parent=a;this.prototype=Class.instantiate(a);this.implement("parent",function(){var b=this.caller._name,c=this.caller._owner.parent.prototype[b];if(!c){throw new Error('The method "'+b+'" has no parent.');}return c.apply(this,arguments);}.protect());},Implements:function(a){$splat(a).each(function(b){if(b instanceof Function){b=Class.instantiate(b);}this.implement(b);},this);}};var Chain=new Class({$chain:[],chain:function(){this.$chain.extend(Array.flatten(arguments));return this;},callChain:function(){return(this.$chain.length)?this.$chain.shift().apply(this,arguments):false;},clearChain:function(){this.$chain.empty();return this;}});var Events=new Class({$events:{},addEvent:function(c,b,a){c=Events.removeOn(c);if(b!=$empty){this.$events[c]=this.$events[c]||[];this.$events[c].include(b);if(a){b.internal=true;}}return this;},addEvents:function(a){for(var b in a){this.addEvent(b,a[b]);}return this;},fireEvent:function(c,b,a){c=Events.removeOn(c);if(!this.$events||!this.$events[c]){return this;}this.$events[c].each(function(d){d.create({bind:this,delay:a,"arguments":b})();},this);return this;},removeEvent:function(b,a){b=Events.removeOn(b);if(!this.$events[b]){return this;}if(!a.internal){this.$events[b].erase(a);}return this;},removeEvents:function(c){var d;if($type(c)=="object"){for(d in c){this.removeEvent(d,c[d]);}return this;}if(c){c=Events.removeOn(c);}for(d in this.$events){if(c&&c!=d){continue;}var b=this.$events[d];for(var a=b.length;a--;a){this.removeEvent(d,b[a]);}}return this;}});Events.removeOn=function(a){return a.replace(/^on([A-Z])/,function(b,c){return c.toLowerCase();});};var Options=new Class({setOptions:function(){this.options=$merge.run([this.options].extend(arguments));if(!this.addEvent){return this;}for(var a in this.options){if($type(this.options[a])!="function"||!(/^on[A-Z]/).test(a)){continue;}this.addEvent(a,this.options[a]);delete this.options[a];}return this;}});var Browser=$merge({Engine:{name:"unknown",version:0},Platform:{name:(window.orientation!=undefined)?"ipod":(navigator.platform.match(/mac|win|linux/i)||["other"])[0].toLowerCase()},Features:{xpath:!!(document.evaluate),air:!!(window.runtime),query:!!(document.querySelector)},Plugins:{},Engines:{presto:function(){return(!window.opera)?false:((arguments.callee.caller)?960:((document.getElementsByClassName)?950:925));},trident:function(){return(!window.ActiveXObject)?false:((window.XMLHttpRequest)?((document.querySelectorAll)?6:5):4);},webkit:function(){return(navigator.taintEnabled)?false:((Browser.Features.xpath)?((Browser.Features.query)?525:420):419);},gecko:function(){return(!document.getBoxObjectFor&&window.mozInnerScreenX==null)?false:((document.getElementsByClassName)?19:18);}}},Browser||{});Browser.Platform[Browser.Platform.name]=true;Browser.detect=function(){for(var b in this.Engines){var a=this.Engines[b]();if(a){this.Engine={name:b,version:a};this.Engine[b]=this.Engine[b+a]=true;break;}}return{name:b,version:a};};Browser.detect();Browser.Request=function(){return $try(function(){return new XMLHttpRequest();},function(){return new ActiveXObject("MSXML2.XMLHTTP");},function(){return new ActiveXObject("Microsoft.XMLHTTP");});};Browser.Features.xhr=!!(Browser.Request());Browser.Plugins.Flash=(function(){var a=($try(function(){return navigator.plugins["Shockwave Flash"].description;},function(){return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");})||"0 r0").match(/\d+/g);return{version:parseInt(a[0]||0+"."+a[1],10)||0,build:parseInt(a[2],10)||0};})();function $exec(b){if(!b){return b;}if(window.execScript){window.execScript(b);}else{var a=document.createElement("script");a.setAttribute("type","text/javascript");a[(Browser.Engine.webkit&&Browser.Engine.version<420)?"innerText":"text"]=b;document.head.appendChild(a);document.head.removeChild(a);}return b;}Native.UID=1;var $uid=(Browser.Engine.trident)?function(a){return(a.uid||(a.uid=[Native.UID++]))[0];}:function(a){return a.uid||(a.uid=Native.UID++);};var Window=new Native({name:"Window",legacy:(Browser.Engine.trident)?null:window.Window,initialize:function(a){$uid(a);if(!a.Element){a.Element=$empty;if(Browser.Engine.webkit){a.document.createElement("iframe");}a.Element.prototype=(Browser.Engine.webkit)?window["[[DOMElement.prototype]]"]:{};}a.document.window=a;return $extend(a,Window.Prototype);},afterImplement:function(b,a){window[b]=Window.Prototype[b]=a;}});Window.Prototype={$family:{name:"window"}};new Window(window);var Document=new Native({name:"Document",legacy:(Browser.Engine.trident)?null:window.Document,initialize:function(a){$uid(a);a.head=a.getElementsByTagName("head")[0];a.html=a.getElementsByTagName("html")[0];if(Browser.Engine.trident&&Browser.Engine.version<=4){$try(function(){a.execCommand("BackgroundImageCache",false,true);});}if(Browser.Engine.trident){a.window.attachEvent("onunload",function(){a.window.detachEvent("onunload",arguments.callee);a.head=a.html=a.window=null;});}return $extend(a,Document.Prototype);},afterImplement:function(b,a){document[b]=Document.Prototype[b]=a;}});Document.Prototype={$family:{name:"document"}};new Document(document);var Element=new Native({name:"Element",legacy:window.Element,initialize:function(a,b){var c=Element.Constructors.get(a);if(c){return c(b);}if(typeof a=="string"){return document.newElement(a,b);}return document.id(a).set(b);},afterImplement:function(a,b){Element.Prototype[a]=b;if(Array[a]){return;}Elements.implement(a,function(){var c=[],h=true;for(var f=0,d=this.length;f<d;f++){var g=this[f][a].apply(this[f],arguments);c.push(g);if(h){h=($type(g)=="element");}}return(h)?new Elements(c):c;});}});Element.Prototype={$family:{name:"element"}};Element.Constructors=new Hash;var IFrame=new Native({name:"IFrame",generics:false,initialize:function(){var g=Array.link(arguments,{properties:Object.type,iframe:$defined});var d=g.properties||{};var c=document.id(g.iframe);var f=d.onload||$empty;delete d.onload;d.id=d.name=$pick(d.id,d.name,c?(c.id||c.name):"IFrame_"+$time());c=new Element(c||"iframe",d);var b=function(){var h=$try(function(){return c.contentWindow.location.host;});if(!h||h==window.location.host){var i=new Window(c.contentWindow);new Document(c.contentWindow.document);$extend(i.Element.prototype,Element.Prototype);}f.call(c.contentWindow,c.contentWindow.document);};var a=$try(function(){return c.contentWindow;});((a&&a.document.body)||window.frames[d.id])?b():c.addListener("load",b);return c;}});var Elements=new Native({initialize:function(g,b){b=$extend({ddup:true,cash:true},b);g=g||[];if(b.ddup||b.cash){var h={},f=[];for(var c=0,a=g.length;c<a;c++){var d=document.id(g[c],!b.cash);if(b.ddup){if(h[d.uid]){continue;}h[d.uid]=true;}if(d){f.push(d);}}g=f;}return(b.cash)?$extend(g,this):g;}});Elements.implement({filter:function(a,b){if(!a){return this;}return new Elements(Array.filter(this,(typeof a=="string")?function(c){return c.match(a);}:a,b));}});(function(){var d;try{var a=document.createElement("<input name=x>");d=(a.name=="x");}catch(b){}var c=function(f){return(""+f).replace(/&/g,"&amp;").replace(/"/g,"&quot;");};Document.implement({newElement:function(f,g){if(g&&g.checked!=null){g.defaultChecked=g.checked;}if(d&&g){f="<"+f;if(g.name){f+=' name="'+c(g.name)+'"';}if(g.type){f+=' type="'+c(g.type)+'"';}f+=">";delete g.name;delete g.type;}return this.id(this.createElement(f)).set(g);},newTextNode:function(f){return this.createTextNode(f);},getDocument:function(){return this;},getWindow:function(){return this.window;},id:(function(){var f={string:function(i,h,g){i=g.getElementById(i);return(i)?f.element(i,h):null;},element:function(g,j){$uid(g);if(!j&&!g.$family&&!(/^object|embed$/i).test(g.tagName)){var h=Element.Prototype;for(var i in h){g[i]=h[i];}}return g;},object:function(h,i,g){if(h.toElement){return f.element(h.toElement(g),i);}return null;}};f.textnode=f.whitespace=f.window=f.document=$arguments(0);return function(h,j,i){if(h&&h.$family&&h.uid){return h;}var g=$type(h);return(f[g])?f[g](h,j,i||document):null;};})()});})();if(window.$==null){Window.implement({$:function(a,b){return document.id(a,b,this.document);}});}Window.implement({$$:function(a){if(arguments.length==1&&typeof a=="string"){return this.document.getElements(a);}var g=[];var c=Array.flatten(arguments);for(var d=0,b=c.length;d<b;d++){var f=c[d];switch($type(f)){case"element":g.push(f);break;case"string":g.extend(this.document.getElements(f,true));}}return new Elements(g);},getDocument:function(){return this.document;},getWindow:function(){return this;}});Native.implement([Element,Document],{getElement:function(a,b){return document.id(this.getElements(a,true)[0]||null,b);},getElements:function(a,d){a=a.split(",");var c=[];var b=(a.length>1);a.each(function(f){var g=this.getElementsByTagName(f.trim());(b)?c.extend(g):c=g;},this);return new Elements(c,{ddup:b,cash:!d});}});(function(){var i={},g={};var j={input:"checked",option:"selected",textarea:(Browser.Engine.webkit&&Browser.Engine.version<420)?"innerHTML":"value"};var c=function(m){return(g[m]||(g[m]={}));};var h=function(o,m){if(!o){return;}var n=o.uid;if(m!==true){m=false;}if(Browser.Engine.trident){if(o.clearAttributes){var r=m&&o.cloneNode(false);o.clearAttributes();if(r){o.mergeAttributes(r);}}else{if(o.removeEvents){o.removeEvents();}}if((/object/i).test(o.tagName)){for(var q in o){if(typeof o[q]=="function"){o[q]=$empty;}}Element.dispose(o);}}if(!n){return;}i[n]=g[n]=null;};var d=function(){Hash.each(i,h);if(Browser.Engine.trident){$A(document.getElementsByTagName("object")).each(h);}if(window.CollectGarbage){CollectGarbage();}i=g=null;};var k=function(o,m,t,n,q,s){var p=o[t||m];var r=[];while(p){if(p.nodeType==1&&(!n||Element.match(p,n))){if(!q){return document.id(p,s);}r.push(p);}p=p[m];}return(q)?new Elements(r,{ddup:false,cash:!s}):null;};var f={html:"innerHTML","class":"className","for":"htmlFor",defaultValue:"defaultValue",text:(Browser.Engine.trident||(Browser.Engine.webkit&&Browser.Engine.version<420))?"innerText":"textContent"};var b=["compact","nowrap","ismap","declare","noshade","checked","disabled","readonly","multiple","selected","noresize","defer"];var l=["value","type","defaultValue","accessKey","cellPadding","cellSpacing","colSpan","frameBorder","maxLength","readOnly","rowSpan","tabIndex","useMap"];b=b.associate(b);Hash.extend(f,b);Hash.extend(f,l.associate(l.map(String.toLowerCase)));var a={before:function(n,m){if(m.parentNode){m.parentNode.insertBefore(n,m);}},after:function(n,m){if(!m.parentNode){return;}var o=m.nextSibling;(o)?m.parentNode.insertBefore(n,o):m.parentNode.appendChild(n);},bottom:function(n,m){m.appendChild(n);},top:function(n,m){var o=m.firstChild;(o)?m.insertBefore(n,o):m.appendChild(n);}};a.inside=a.bottom;Hash.each(a,function(m,n){n=n.capitalize();Element.implement("inject"+n,function(o){m(this,document.id(o,true));return this;});Element.implement("grab"+n,function(o){m(document.id(o,true),this);return this;});});Element.implement({set:function(q,n){switch($type(q)){case"object":for(var o in q){this.set(o,q[o]);}break;case"string":var m=Element.Properties.get(q);(m&&m.set)?m.set.apply(this,Array.slice(arguments,1)):this.setProperty(q,n);}return this;},get:function(n){var m=Element.Properties.get(n);return(m&&m.get)?m.get.apply(this,Array.slice(arguments,1)):this.getProperty(n);},erase:function(n){var m=Element.Properties.get(n);(m&&m.erase)?m.erase.apply(this):this.removeProperty(n);return this;},setProperty:function(n,o){var m=f[n];if(o==undefined){return this.removeProperty(n);}if(m&&b[n]){o=!!o;}(m)?this[m]=o:this.setAttribute(n,""+o);return this;},setProperties:function(m){for(var n in m){this.setProperty(n,m[n]);}return this;},getProperty:function(n){var m=f[n];var o=(m)?this[m]:this.getAttribute(n,2);return(b[n])?!!o:(m)?o:o||null;},getProperties:function(){var m=$A(arguments);return m.map(this.getProperty,this).associate(m);},removeProperty:function(n){var m=f[n];(m)?this[m]=(m&&b[n])?false:"":this.removeAttribute(n);return this;},removeProperties:function(){Array.each(arguments,this.removeProperty,this);return this;},hasClass:function(m){return this.className.contains(m," ");},addClass:function(m){if(!this.hasClass(m)){this.className=(this.className+" "+m).clean();}return this;},removeClass:function(m){this.className=this.className.replace(new RegExp("(^|\\s)"+m+"(?:\\s|$)"),"$1");return this;},toggleClass:function(m){return this.hasClass(m)?this.removeClass(m):this.addClass(m);},adopt:function(){Array.flatten(arguments).each(function(m){m=document.id(m,true);if(m){this.appendChild(m);}},this);return this;},appendText:function(n,m){return this.grab(this.getDocument().newTextNode(n),m);},grab:function(n,m){a[m||"bottom"](document.id(n,true),this);return this;},inject:function(n,m){a[m||"bottom"](this,document.id(n,true));return this;},replaces:function(m){m=document.id(m,true);m.parentNode.replaceChild(this,m);return this;},wraps:function(n,m){n=document.id(n,true);return this.replaces(n).grab(n,m);},getPrevious:function(m,n){return k(this,"previousSibling",null,m,false,n);},getAllPrevious:function(m,n){return k(this,"previousSibling",null,m,true,n);},getNext:function(m,n){return k(this,"nextSibling",null,m,false,n);},getAllNext:function(m,n){return k(this,"nextSibling",null,m,true,n);},getFirst:function(m,n){return k(this,"nextSibling","firstChild",m,false,n);},getLast:function(m,n){return k(this,"previousSibling","lastChild",m,false,n);},getParent:function(m,n){return k(this,"parentNode",null,m,false,n);},getParents:function(m,n){return k(this,"parentNode",null,m,true,n);},getSiblings:function(m,n){return this.getParent().getChildren(m,n).erase(this);},getChildren:function(m,n){return k(this,"nextSibling","firstChild",m,true,n);},getWindow:function(){return this.ownerDocument.window;},getDocument:function(){return this.ownerDocument;},getElementById:function(p,o){var n=this.ownerDocument.getElementById(p);if(!n){return null;}for(var m=n.parentNode;m!=this;m=m.parentNode){if(!m){return null;}}return document.id(n,o);},getSelected:function(){return new Elements($A(this.options).filter(function(m){return m.selected;}));},getComputedStyle:function(n){if(this.currentStyle){return this.currentStyle[n.camelCase()];}var m=this.getDocument().defaultView.getComputedStyle(this,null);return(m)?m.getPropertyValue([n.hyphenate()]):null;},toQueryString:function(){var m=[];this.getElements("input, select, textarea",true).each(function(n){if(!n.name||n.disabled||n.type=="submit"||n.type=="reset"||n.type=="file"){return;}var o=(n.tagName.toLowerCase()=="select")?Element.getSelected(n).map(function(p){return p.value;}):((n.type=="radio"||n.type=="checkbox")&&!n.checked)?null:n.value;$splat(o).each(function(p){if(typeof p!="undefined"){m.push(n.name+"="+encodeURIComponent(p));}});});return m.join("&");},clone:function(p,m){p=p!==false;var s=this.cloneNode(p);var o=function(w,v){if(!m){w.removeAttribute("id");}if(Browser.Engine.trident){w.clearAttributes();w.mergeAttributes(v);w.removeAttribute("uid");if(w.options){var x=w.options,t=v.options;for(var u=x.length;u--;){x[u].selected=t[u].selected;}}}var y=j[v.tagName.toLowerCase()];if(y&&v[y]){w[y]=v[y];}};if(p){var q=s.getElementsByTagName("*"),r=this.getElementsByTagName("*");for(var n=q.length;n--;){o(q[n],r[n]);}}o(s,this);return document.id(s);},destroy:function(){Element.empty(this);Element.dispose(this);h(this,true);return null;},empty:function(){$A(this.childNodes).each(function(m){Element.destroy(m);});return this;},dispose:function(){return(this.parentNode)?this.parentNode.removeChild(this):this;},hasChild:function(m){m=document.id(m,true);if(!m){return false;}if(Browser.Engine.webkit&&Browser.Engine.version<420){return $A(this.getElementsByTagName(m.tagName)).contains(m);}return(this.contains)?(this!=m&&this.contains(m)):!!(this.compareDocumentPosition(m)&16);},match:function(m){return(!m||(m==this)||(Element.get(this,"tag")==m));}});Native.implement([Element,Window,Document],{addListener:function(p,o){if(p=="unload"){var m=o,n=this;o=function(){n.removeListener("unload",o);m();};}else{i[this.uid]=this;}if(this.addEventListener){this.addEventListener(p,o,false);}else{this.attachEvent("on"+p,o);}return this;},removeListener:function(n,m){if(this.removeEventListener){this.removeEventListener(n,m,false);}else{this.detachEvent("on"+n,m);}return this;},retrieve:function(n,m){var p=c(this.uid),o=p[n];if(m!=undefined&&o==undefined){o=p[n]=m;}return $pick(o);},store:function(n,m){var o=c(this.uid);o[n]=m;return this;},eliminate:function(m){var n=c(this.uid);delete n[m];return this;}});window.addListener("unload",d);})();Element.Properties=new Hash;Element.Properties.style={set:function(a){this.style.cssText=a;},get:function(){return this.style.cssText;},erase:function(){this.style.cssText="";}};Element.Properties.tag={get:function(){return this.tagName.toLowerCase();}};Element.Properties.html=(function(){var c=document.createElement("div");var a={table:[1,"<table>","</table>"],select:[1,"<select>","</select>"],tbody:[2,"<table><tbody>","</tbody></table>"],tr:[3,"<table><tbody><tr>","</tr></tbody></table>"]};a.thead=a.tfoot=a.tbody;var b={set:function(){var f=Array.flatten(arguments).join("");var g=Browser.Engine.trident&&a[this.get("tag")];if(g){var h=c;h.innerHTML=g[1]+f+g[2];for(var d=g[0];d--;){h=h.firstChild;}this.empty().adopt(h.childNodes);}else{this.innerHTML=f;}}};b.erase=b.set;return b;})();if(Browser.Engine.webkit&&Browser.Engine.version<420){Element.Properties.text={get:function(){if(this.innerText){return this.innerText;}var a=this.ownerDocument.newElement("div",{html:this.innerHTML}).inject(this.ownerDocument.body);var b=a.innerText;a.destroy();return b;}};}(function(){Element.implement({scrollTo:function(i,j){if(b(this)){this.getWindow().scrollTo(i,j);}else{this.scrollLeft=i;this.scrollTop=j;}return this;},getSize:function(){if(b(this)){return this.getWindow().getSize();}return{x:this.offsetWidth,y:this.offsetHeight};},getScrollSize:function(){if(b(this)){return this.getWindow().getScrollSize();}return{x:this.scrollWidth,y:this.scrollHeight};},getScroll:function(){if(b(this)){return this.getWindow().getScroll();}return{x:this.scrollLeft,y:this.scrollTop};},getScrolls:function(){var j=this,i={x:0,y:0};while(j&&!b(j)){i.x+=j.scrollLeft;i.y+=j.scrollTop;j=j.parentNode;}return i;},getOffsetParent:function(){var i=this;if(b(i)){return null;}if(!Browser.Engine.trident){return i.offsetParent;}while((i=i.parentNode)&&!b(i)){if(d(i,"position")!="static"){return i;}}return null;},getOffsets:function(){if(this.getBoundingClientRect){var k=this.getBoundingClientRect(),n=document.id(this.getDocument().documentElement),q=n.getScroll(),l=this.getScrolls(),j=this.getScroll(),i=(d(this,"position")=="fixed");return{x:k.left.toInt()+l.x-j.x+((i)?0:q.x)-n.clientLeft,y:k.top.toInt()+l.y-j.y+((i)?0:q.y)-n.clientTop};}var m=this,o={x:0,y:0};if(b(this)){return o;}while(m&&!b(m)){o.x+=m.offsetLeft;o.y+=m.offsetTop;if(Browser.Engine.gecko){if(!g(m)){o.x+=c(m);o.y+=h(m);}var p=m.parentNode;if(p&&d(p,"overflow")!="visible"){o.x+=c(p);o.y+=h(p);}}else{if(m!=this&&Browser.Engine.webkit){o.x+=c(m);o.y+=h(m);}}m=m.offsetParent;}if(Browser.Engine.gecko&&!g(this)){o.x-=c(this);o.y-=h(this);}return o;},getPosition:function(l){if(b(this)){return{x:0,y:0};}var m=this.getOffsets(),j=this.getScrolls();var i={x:m.x-j.x,y:m.y-j.y};var k=(l&&(l=document.id(l)))?l.getPosition():{x:0,y:0};return{x:i.x-k.x,y:i.y-k.y};},getCoordinates:function(k){if(b(this)){return this.getWindow().getCoordinates();}var i=this.getPosition(k),j=this.getSize();var l={left:i.x,top:i.y,width:j.x,height:j.y};l.right=l.left+l.width;l.bottom=l.top+l.height;return l;},computePosition:function(i){return{left:i.x-f(this,"margin-left"),top:i.y-f(this,"margin-top")};},setPosition:function(i){return this.setStyles(this.computePosition(i));}});Native.implement([Document,Window],{getSize:function(){if(Browser.Engine.presto||Browser.Engine.webkit){var j=this.getWindow();return{x:j.innerWidth,y:j.innerHeight};}var i=a(this);return{x:i.clientWidth,y:i.clientHeight};},getScroll:function(){var j=this.getWindow(),i=a(this);return{x:j.pageXOffset||i.scrollLeft,y:j.pageYOffset||i.scrollTop};},getScrollSize:function(){var j=a(this),i=this.getSize();return{x:Math.max(j.scrollWidth,i.x),y:Math.max(j.scrollHeight,i.y)};},getPosition:function(){return{x:0,y:0};},getCoordinates:function(){var i=this.getSize();return{top:0,left:0,bottom:i.y,right:i.x,height:i.y,width:i.x};}});var d=Element.getComputedStyle;function f(i,j){return d(i,j).toInt()||0;}function g(i){return d(i,"-moz-box-sizing")=="border-box";}function h(i){return f(i,"border-top-width");}function c(i){return f(i,"border-left-width");}function b(i){return(/^(?:body|html)$/i).test(i.tagName);}function a(i){var j=i.getDocument();return(!j.compatMode||j.compatMode=="CSS1Compat")?j.html:j.body;}})();Element.alias("setPosition","position");Native.implement([Window,Document,Element],{getHeight:function(){return this.getSize().y;},getWidth:function(){return this.getSize().x;},getScrollTop:function(){return this.getScroll().y;},getScrollLeft:function(){return this.getScroll().x;},getScrollHeight:function(){return this.getScrollSize().y;},getScrollWidth:function(){return this.getScrollSize().x;},getTop:function(){return this.getPosition().y;},getLeft:function(){return this.getPosition().x;}});var Event=new Native({name:"Event",initialize:function(a,g){g=g||window;var l=g.document;a=a||g.event;if(a.$extended){return a;}this.$extended=true;var k=a.type;var h=a.target||a.srcElement;while(h&&h.nodeType==3){h=h.parentNode;}if(k.test(/key/)){var b=a.which||a.keyCode;var n=Event.Keys.keyOf(b);if(k=="keydown"){var d=b-111;if(d>0&&d<13){n="f"+d;}}n=n||String.fromCharCode(b).toLowerCase();}else{if(k.match(/(click|mouse|menu)/i)){l=(!l.compatMode||l.compatMode=="CSS1Compat")?l.html:l.body;var j={x:a.pageX||a.clientX+l.scrollLeft,y:a.pageY||a.clientY+l.scrollTop};var c={x:(a.pageX)?a.pageX-g.pageXOffset:a.clientX,y:(a.pageY)?a.pageY-g.pageYOffset:a.clientY};if(k.match(/DOMMouseScroll|mousewheel/)){var i=(a.wheelDelta)?a.wheelDelta/120:-(a.detail||0)/3;}var f=(a.which==3)||(a.button==2);var m=null;if(k.match(/over|out/)){switch(k){case"mouseover":m=a.relatedTarget||a.fromElement;break;case"mouseout":m=a.relatedTarget||a.toElement;}if(!(function(){while(m&&m.nodeType==3){m=m.parentNode;}return true;}).create({attempt:Browser.Engine.gecko})()){m=false;}}}}return $extend(this,{event:a,type:k,page:j,client:c,rightClick:f,wheel:i,relatedTarget:m,target:h,code:b,key:n,shift:a.shiftKey,control:a.ctrlKey,alt:a.altKey,meta:a.metaKey});}});Event.Keys=new Hash({enter:13,up:38,down:40,left:37,right:39,esc:27,space:32,backspace:8,tab:9,"delete":46});Event.implement({stop:function(){return this.stopPropagation().preventDefault();},stopPropagation:function(){if(this.event.stopPropagation){this.event.stopPropagation();}else{this.event.cancelBubble=true;}return this;},preventDefault:function(){if(this.event.preventDefault){this.event.preventDefault();}else{this.event.returnValue=false;}return this;}});Element.Properties.events={set:function(a){this.addEvents(a);}};Native.implement([Element,Window,Document],{addEvent:function(f,h){var i=this.retrieve("events",{});i[f]=i[f]||{keys:[],values:[]};if(i[f].keys.contains(h)){return this;}i[f].keys.push(h);var g=f,a=Element.Events.get(f),c=h,j=this;if(a){if(a.onAdd){a.onAdd.call(this,h);}if(a.condition){c=function(k){if(a.condition.call(this,k)){return h.call(this,k);}return true;};}g=a.base||g;}var d=function(){return h.call(j);};var b=Element.NativeEvents[g];if(b){if(b==2){d=function(k){k=new Event(k,j.getWindow());if(c.call(j,k)===false){k.stop();}};}this.addListener(g,d);}i[f].values.push(d);return this;},removeEvent:function(c,b){var a=this.retrieve("events");if(!a||!a[c]){return this;}var g=a[c].keys.indexOf(b);if(g==-1){return this;}a[c].keys.splice(g,1);var f=a[c].values.splice(g,1)[0];var d=Element.Events.get(c);if(d){if(d.onRemove){d.onRemove.call(this,b);}c=d.base||c;}return(Element.NativeEvents[c])?this.removeListener(c,f):this;},addEvents:function(a){for(var b in a){this.addEvent(b,a[b]);}return this;},removeEvents:function(a){var c;if($type(a)=="object"){for(c in a){this.removeEvent(c,a[c]);}return this;}var b=this.retrieve("events");if(!b){return this;}if(!a){for(c in b){this.removeEvents(c);}this.eliminate("events");}else{if(b[a]){while(b[a].keys[0]){this.removeEvent(a,b[a].keys[0]);}b[a]=null;}}return this;},fireEvent:function(d,b,a){var c=this.retrieve("events");if(!c||!c[d]){return this;}c[d].keys.each(function(f){f.create({bind:this,delay:a,"arguments":b})();},this);return this;},cloneEvents:function(d,a){d=document.id(d);var c=d.retrieve("events");if(!c){return this;}if(!a){for(var b in c){this.cloneEvents(d,b);}}else{if(c[a]){c[a].keys.each(function(f){this.addEvent(a,f);},this);}}return this;}});try{if(typeof HTMLElement!="undefined"){HTMLElement.prototype.fireEvent=Element.prototype.fireEvent;}}catch(e){}Element.NativeEvents={click:2,dblclick:2,mouseup:2,mousedown:2,contextmenu:2,mousewheel:2,DOMMouseScroll:2,mouseover:2,mouseout:2,mousemove:2,selectstart:2,selectend:2,keydown:2,keypress:2,keyup:2,focus:2,blur:2,change:2,reset:2,select:2,submit:2,load:1,unload:1,beforeunload:2,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1};(function(){var a=function(b){var c=b.relatedTarget;if(c==undefined){return true;}if(c===false){return false;}return($type(this)!="document"&&c!=this&&c.prefix!="xul"&&!this.hasChild(c));};Element.Events=new Hash({mouseenter:{base:"mouseover",condition:a},mouseleave:{base:"mouseout",condition:a},mousewheel:{base:(Browser.Engine.gecko)?"DOMMouseScroll":"mousewheel"}});})();Element.Properties.styles={set:function(a){this.setStyles(a);}};Element.Properties.opacity={set:function(a,b){if(!b){if(a==0){if(this.style.visibility!="hidden"){this.style.visibility="hidden";}}else{if(this.style.visibility!="visible"){this.style.visibility="visible";}}}if(!this.currentStyle||!this.currentStyle.hasLayout){this.style.zoom=1;}if(Browser.Engine.trident){this.style.filter=(a==1)?"":"alpha(opacity="+a*100+")";}this.style.opacity=a;this.store("opacity",a);},get:function(){return this.retrieve("opacity",1);}};Element.implement({setOpacity:function(a){return this.set("opacity",a,true);},getOpacity:function(){return this.get("opacity");},setStyle:function(b,a){switch(b){case"opacity":return this.set("opacity",parseFloat(a));case"float":b=(Browser.Engine.trident)?"styleFloat":"cssFloat";}b=b.camelCase();if($type(a)!="string"){var c=(Element.Styles.get(b)||"@").split(" ");a=$splat(a).map(function(f,d){if(!c[d]){return"";}return($type(f)=="number")?c[d].replace("@",Math.round(f)):f;}).join(" ");}else{if(a==String(Number(a))){a=Math.round(a);}}this.style[b]=a;return this;},getStyle:function(h){switch(h){case"opacity":return this.get("opacity");case"float":h=(Browser.Engine.trident)?"styleFloat":"cssFloat";}h=h.camelCase();var a=this.style[h];if(!$chk(a)){a=[];for(var g in Element.ShortStyles){if(h!=g){continue;}for(var f in Element.ShortStyles[g]){a.push(this.getStyle(f));}return a.join(" ");}a=this.getComputedStyle(h);}if(a){a=String(a);var c=a.match(/rgba?\([\d\s,]+\)/);if(c){a=a.replace(c[0],c[0].rgbToHex());}}if(Browser.Engine.presto||(Browser.Engine.trident&&!$chk(parseInt(a,10)))){if(h.test(/^(height|width)$/)){var b=(h=="width")?["left","right"]:["top","bottom"],d=0;b.each(function(i){d+=this.getStyle("border-"+i+"-width").toInt()+this.getStyle("padding-"+i).toInt();},this);return this["offset"+h.capitalize()]-d+"px";}if((Browser.Engine.presto)&&String(a).test("px")){return a;}if(h.test(/(border(.+)Width|margin|padding)/)){return"0px";}}return a;},setStyles:function(b){for(var a in b){this.setStyle(a,b[a]);}return this;},getStyles:function(){var a={};Array.flatten(arguments).each(function(b){a[b]=this.getStyle(b);},this);return a;}});Element.Styles=new Hash({left:"@px",top:"@px",bottom:"@px",right:"@px",width:"@px",height:"@px",maxWidth:"@px",maxHeight:"@px",minWidth:"@px",minHeight:"@px",backgroundColor:"rgb(@, @, @)",backgroundPosition:"@px @px",color:"rgb(@, @, @)",fontSize:"@px",letterSpacing:"@px",lineHeight:"@px",clip:"rect(@px @px @px @px)",margin:"@px @px @px @px",padding:"@px @px @px @px",border:"@px @ rgb(@, @, @) @px @ rgb(@, @, @) @px @ rgb(@, @, @)",borderWidth:"@px @px @px @px",borderStyle:"@ @ @ @",borderColor:"rgb(@, @, @) rgb(@, @, @) rgb(@, @, @) rgb(@, @, @)",zIndex:"@",zoom:"@",fontWeight:"@",textIndent:"@px",opacity:"@"});Element.ShortStyles={margin:{},padding:{},border:{},borderWidth:{},borderStyle:{},borderColor:{}};["Top","Right","Bottom","Left"].each(function(h){var g=Element.ShortStyles;var b=Element.Styles;["margin","padding"].each(function(i){var j=i+h;g[i][j]=b[j]="@px";});var f="border"+h;g.border[f]=b[f]="@px @ rgb(@, @, @)";var d=f+"Width",a=f+"Style",c=f+"Color";g[f]={};g.borderWidth[d]=g[f][d]=b[d]="@px";g.borderStyle[a]=g[f][a]=b[a]="@";g.borderColor[c]=g[f][c]=b[c]="rgb(@, @, @)";});var Fx=new Class({Implements:[Chain,Events,Options],options:{fps:50,unit:false,duration:500,link:"ignore"},initialize:function(a){this.subject=this.subject||this;this.setOptions(a);this.options.duration=Fx.Durations[this.options.duration]||this.options.duration.toInt();var b=this.options.wait;if(b===false){this.options.link="cancel";}},getTransition:function(){return function(a){return -(Math.cos(Math.PI*a)-1)/2;};},step:function(){var a=$time();if(a<this.time+this.options.duration){var b=this.transition((a-this.time)/this.options.duration);this.set(this.compute(this.from,this.to,b));}else{this.set(this.compute(this.from,this.to,1));this.complete();}},set:function(a){return a;},compute:function(c,b,a){return Fx.compute(c,b,a);},check:function(){if(!this.timer){return true;}switch(this.options.link){case"cancel":this.cancel();return true;case"chain":this.chain(this.caller.bind(this,arguments));return false;}return false;},start:function(b,a){if(!this.check(b,a)){return this;}this.from=b;this.to=a;this.time=0;this.transition=this.getTransition();this.startTimer();this.onStart();return this;},complete:function(){if(this.stopTimer()){this.onComplete();}return this;},cancel:function(){if(this.stopTimer()){this.onCancel();}return this;},onStart:function(){this.fireEvent("start",this.subject);},onComplete:function(){this.fireEvent("complete",this.subject);if(!this.callChain()){this.fireEvent("chainComplete",this.subject);}},onCancel:function(){this.fireEvent("cancel",this.subject).clearChain();},pause:function(){this.stopTimer();return this;},resume:function(){this.startTimer();return this;},stopTimer:function(){if(!this.timer){return false;}this.time=$time()-this.time;this.timer=$clear(this.timer);return true;},startTimer:function(){if(this.timer){return false;}this.time=$time()-this.time;this.timer=this.step.periodical(Math.round(1000/this.options.fps),this);return true;}});Fx.compute=function(c,b,a){return(b-c)*a+c;};Fx.Durations={"short":250,normal:500,"long":1000};Fx.CSS=new Class({Extends:Fx,prepare:function(d,f,b){b=$splat(b);var c=b[1];if(!$chk(c)){b[1]=b[0];b[0]=d.getStyle(f);}var a=b.map(this.parse);return{from:a[0],to:a[1]};},parse:function(a){a=$lambda(a)();a=(typeof a=="string")?a.split(" "):$splat(a);return a.map(function(c){c=String(c);var b=false;Fx.CSS.Parsers.each(function(g,f){if(b){return;}var d=g.parse(c);if($chk(d)){b={value:d,parser:g};}});b=b||{value:c,parser:Fx.CSS.Parsers.String};return b;});},compute:function(d,c,b){var a=[];(Math.min(d.length,c.length)).times(function(f){a.push({value:d[f].parser.compute(d[f].value,c[f].value,b),parser:d[f].parser});});a.$family={name:"fx:css:value"};return a;},serve:function(c,b){if($type(c)!="fx:css:value"){c=this.parse(c);}var a=[];c.each(function(d){a=a.concat(d.parser.serve(d.value,b));});return a;},render:function(a,d,c,b){a.setStyle(d,this.serve(c,b));},search:function(a){if(Fx.CSS.Cache[a]){return Fx.CSS.Cache[a];}var b={};Array.each(document.styleSheets,function(f,d){var c=f.href;if(c&&c.contains("://")&&!c.contains(document.domain)){return;}var g=f.rules||f.cssRules;Array.each(g,function(k,h){if(!k.style){return;}var j=(k.selectorText)?k.selectorText.replace(/^\w+/,function(i){return i.toLowerCase();}):null;if(!j||!j.test("^"+a+"$")){return;}Element.Styles.each(function(l,i){if(!k.style[i]||Element.ShortStyles[i]){return;}l=String(k.style[i]);b[i]=(l.test(/^rgb/))?l.rgbToHex():l;});});});return Fx.CSS.Cache[a]=b;}});Fx.CSS.Cache={};Fx.CSS.Parsers=new Hash({Color:{parse:function(a){if(a.match(/^#[0-9a-f]{3,6}$/i)){return a.hexToRgb(true);}return((a=a.match(/(\d+),\s*(\d+),\s*(\d+)/)))?[a[1],a[2],a[3]]:false;},compute:function(c,b,a){return c.map(function(f,d){return Math.round(Fx.compute(c[d],b[d],a));});},serve:function(a){return a.map(Number);}},Number:{parse:parseFloat,compute:Fx.compute,serve:function(b,a){return(a)?b+a:b;}},String:{parse:$lambda(false),compute:$arguments(1),serve:$arguments(0)}});Fx.Morph=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);this.parent(a);},set:function(a){if(typeof a=="string"){a=this.search(a);}for(var b in a){this.render(this.element,b,a[b],this.options.unit);}return this;},compute:function(f,d,c){var a={};for(var b in f){a[b]=this.parent(f[b],d[b],c);}return a;},start:function(b){if(!this.check(b)){return this;}if(typeof b=="string"){b=this.search(b);}var f={},d={};for(var c in b){var a=this.prepare(this.element,c,b[c]);f[c]=a.from;d[c]=a.to;}return this.parent(f,d);}});Element.Properties.morph={set:function(a){var b=this.retrieve("morph");if(b){b.cancel();}return this.eliminate("morph").store("morph:options",$extend({link:"cancel"},a));},get:function(a){if(a||!this.retrieve("morph")){if(a||!this.retrieve("morph:options")){this.set("morph",a);}this.store("morph",new Fx.Morph(this,this.retrieve("morph:options")));}return this.retrieve("morph");}};Element.implement({morph:function(a){this.get("morph").start(a);return this;}});Fx.implement({getTransition:function(){var a=this.options.transition||Fx.Transitions.Sine.easeInOut;if(typeof a=="string"){var b=a.split(":");a=Fx.Transitions;a=a[b[0]]||a[b[0].capitalize()];if(b[1]){a=a["ease"+b[1].capitalize()+(b[2]?b[2].capitalize():"")];}}return a;}});Fx.Transition=function(b,a){a=$splat(a);return $extend(b,{easeIn:function(c){return b(c,a);},easeOut:function(c){return 1-b(1-c,a);},easeInOut:function(c){return(c<=0.5)?b(2*c,a)/2:(2-b(2*(1-c),a))/2;}});};Fx.Transitions=new Hash({linear:$arguments(0)});Fx.Transitions.extend=function(a){for(var b in a){Fx.Transitions[b]=new Fx.Transition(a[b]);}};Fx.Transitions.extend({Pow:function(b,a){return Math.pow(b,a[0]||6);},Expo:function(a){return Math.pow(2,8*(a-1));},Circ:function(a){return 1-Math.sin(Math.acos(a));},Sine:function(a){return 1-Math.sin((1-a)*Math.PI/2);},Back:function(b,a){a=a[0]||1.618;return Math.pow(b,2)*((a+1)*b-a);},Bounce:function(g){var f;for(var d=0,c=1;1;d+=c,c/=2){if(g>=(7-4*d)/11){f=c*c-Math.pow((11-6*d-11*g)/4,2);break;}}return f;},Elastic:function(b,a){return Math.pow(2,10*--b)*Math.cos(20*b*Math.PI*(a[0]||1)/3);}});["Quad","Cubic","Quart","Quint"].each(function(b,a){Fx.Transitions[b]=new Fx.Transition(function(c){return Math.pow(c,[a+2]);});});Fx.Tween=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);this.parent(a);},set:function(b,a){if(arguments.length==1){a=b;b=this.property||this.options.property;}this.render(this.element,b,a,this.options.unit);return this;},start:function(c,f,d){if(!this.check(c,f,d)){return this;}var b=Array.flatten(arguments);this.property=this.options.property||b.shift();var a=this.prepare(this.element,this.property,b);return this.parent(a.from,a.to);}});Element.Properties.tween={set:function(a){var b=this.retrieve("tween");if(b){b.cancel();}return this.eliminate("tween").store("tween:options",$extend({link:"cancel"},a));},get:function(a){if(a||!this.retrieve("tween")){if(a||!this.retrieve("tween:options")){this.set("tween",a);}this.store("tween",new Fx.Tween(this,this.retrieve("tween:options")));}return this.retrieve("tween");}};Element.implement({tween:function(a,c,b){this.get("tween").start(arguments);return this;},fade:function(c){var f=this.get("tween"),d="opacity",a;c=$pick(c,"toggle");switch(c){case"in":f.start(d,1);break;case"out":f.start(d,0);break;case"show":f.set(d,1);break;case"hide":f.set(d,0);break;case"toggle":var b=this.retrieve("fade:flag",this.get("opacity")==1);f.start(d,(b)?0:1);this.store("fade:flag",!b);a=true;break;default:f.start(d,arguments);}if(!a){this.eliminate("fade:flag");}return this;},highlight:function(c,a){if(!a){a=this.retrieve("highlight:original",this.getStyle("background-color"));a=(a=="transparent")?"#fff":a;}var b=this.get("tween");b.start("background-color",c||"#ffff88",a).chain(function(){this.setStyle("background-color",this.retrieve("highlight:original"));b.callChain();}.bind(this));return this;}});var Request=new Class({Implements:[Chain,Events,Options],options:{url:"",data:"",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"text/javascript, text/html, application/xml, text/xml, */*"},async:true,format:false,method:"post",link:"ignore",isSuccess:null,emulation:true,urlEncoded:true,encoding:"utf-8",evalScripts:false,evalResponse:false,noCache:false},initialize:function(a){this.xhr=new Browser.Request();this.setOptions(a);this.options.isSuccess=this.options.isSuccess||this.isSuccess;this.headers=new Hash(this.options.headers);},onStateChange:function(){if(this.xhr.readyState!=4||!this.running){return;}this.running=false;this.status=0;$try(function(){this.status=this.xhr.status;}.bind(this));this.xhr.onreadystatechange=$empty;if(this.options.isSuccess.call(this,this.status)){this.response={text:this.xhr.responseText,xml:this.xhr.responseXML};this.success(this.response.text,this.response.xml);}else{this.response={text:null,xml:null};this.failure();}},isSuccess:function(){return((this.status>=200)&&(this.status<300));},processScripts:function(a){if(this.options.evalResponse||(/(ecma|java)script/).test(this.getHeader("Content-type"))){return $exec(a);}return a.stripScripts(this.options.evalScripts);},success:function(b,a){this.onSuccess(this.processScripts(b),a);},onSuccess:function(){this.fireEvent("complete",arguments).fireEvent("success",arguments).callChain();},failure:function(){this.onFailure();},onFailure:function(){this.fireEvent("complete").fireEvent("failure",this.xhr);},setHeader:function(a,b){this.headers.set(a,b);return this;},getHeader:function(a){return $try(function(){return this.xhr.getResponseHeader(a);}.bind(this));},check:function(){if(!this.running){return true;}switch(this.options.link){case"cancel":this.cancel();return true;case"chain":this.chain(this.caller.bind(this,arguments));return false;}return false;},send:function(l){if(!this.check(l)){return this;}this.running=true;var j=$type(l);if(j=="string"||j=="element"){l={data:l};}var d=this.options;l=$extend({data:d.data,url:d.url,method:d.method},l);var h=l.data,b=String(l.url),a=l.method.toLowerCase();switch($type(h)){case"element":h=document.id(h).toQueryString();break;case"object":case"hash":h=Hash.toQueryString(h);}if(this.options.format){var k="format="+this.options.format;h=(h)?k+"&"+h:k;}if(this.options.emulation&&!["get","post"].contains(a)){var i="_method="+a;h=(h)?i+"&"+h:i;a="post";}if(this.options.urlEncoded&&a=="post"){var c=(this.options.encoding)?"; charset="+this.options.encoding:"";this.headers.set("Content-type","application/x-www-form-urlencoded"+c);}if(this.options.noCache){var g="noCache="+new Date().getTime();h=(h)?g+"&"+h:g;}var f=b.lastIndexOf("/");if(f>-1&&(f=b.indexOf("#"))>-1){b=b.substr(0,f);}if(h&&a=="get"){b=b+(b.contains("?")?"&":"?")+h;h=null;}this.xhr.open(a.toUpperCase(),b,this.options.async);this.xhr.onreadystatechange=this.onStateChange.bind(this);this.headers.each(function(n,m){try{this.xhr.setRequestHeader(m,n);}catch(o){this.fireEvent("exception",[m,n]);}},this);this.fireEvent("request");this.xhr.send(h);if(!this.options.async){this.onStateChange();}return this;},cancel:function(){if(!this.running){return this;}this.running=false;this.xhr.abort();this.xhr.onreadystatechange=$empty;this.xhr=new Browser.Request();this.fireEvent("cancel");return this;}});(function(){var a={};["get","post","put","delete","GET","POST","PUT","DELETE"].each(function(b){a[b]=function(){var c=Array.link(arguments,{url:String.type,data:$defined});return this.send($extend(c,{method:b}));};});Request.implement(a);})();Element.Properties.send={set:function(a){var b=this.retrieve("send");if(b){b.cancel();}return this.eliminate("send").store("send:options",$extend({data:this,link:"cancel",method:this.get("method")||"post",url:this.get("action")},a));},get:function(a){if(a||!this.retrieve("send")){if(a||!this.retrieve("send:options")){this.set("send",a);}this.store("send",new Request(this.retrieve("send:options")));}return this.retrieve("send");}};Element.implement({send:function(a){var b=this.get("send");b.send({data:this,url:a||b.options.url});return this;}});Request.HTML=new Class({Extends:Request,options:{update:false,append:false,evalScripts:true,filter:false},processHTML:function(c){var b=c.match(/<body[^>]*>([\s\S]*?)<\/body>/i);c=(b)?b[1]:c;var a=new Element("div");return $try(function(){var d="<root>"+c+"</root>",h;if(Browser.Engine.trident){h=new ActiveXObject("Microsoft.XMLDOM");h.async=false;h.loadXML(d);}else{h=new DOMParser().parseFromString(d,"text/xml");}d=h.getElementsByTagName("root")[0];if(!d){return null;}for(var g=0,f=d.childNodes.length;g<f;g++){var j=Element.clone(d.childNodes[g],true,true);if(j){a.grab(j);}}return a;})||a.set("html",c);},success:function(d){var c=this.options,b=this.response;b.html=d.stripScripts(function(f){b.javascript=f;});var a=this.processHTML(b.html);b.tree=a.childNodes;b.elements=a.getElements("*");if(c.filter){b.tree=b.elements.filter(c.filter);}if(c.update){document.id(c.update).empty().set("html",b.html);}else{if(c.append){document.id(c.append).adopt(a.getChildren());}}if(c.evalScripts){$exec(b.javascript);}this.onSuccess(b.tree,b.elements,b.html,b.javascript);}});Element.Properties.load={set:function(a){var b=this.retrieve("load");if(b){b.cancel();}return this.eliminate("load").store("load:options",$extend({data:this,link:"cancel",update:this,method:"get"},a));},get:function(a){if(a||!this.retrieve("load")){if(a||!this.retrieve("load:options")){this.set("load",a);}this.store("load",new Request.HTML(this.retrieve("load:options")));}return this.retrieve("load");}};Element.implement({load:function(){this.get("load").send(Array.link(arguments,{data:Object.type,url:String.type}));return this;}});var JSON=new Hash(this.JSON&&{stringify:JSON.stringify,parse:JSON.parse}).extend({$specialChars:{"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},$replaceChars:function(a){return JSON.$specialChars[a]||"\\u00"+Math.floor(a.charCodeAt()/16).toString(16)+(a.charCodeAt()%16).toString(16);},encode:function(b){switch($type(b)){case"string":return'"'+b.replace(/[\x00-\x1f\\"]/g,JSON.$replaceChars)+'"';case"array":return"["+String(b.map(JSON.encode).clean())+"]";case"object":case"hash":var a=[];Hash.each(b,function(f,d){var c=JSON.encode(f);if(c){a.push(JSON.encode(d)+":"+c);}});return"{"+a+"}";case"number":case"boolean":return String(b);case false:return"null";}return null;},decode:function(string,secure){if($type(string)!="string"||!string.length){return null;}if(secure&&!(/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(string.replace(/\\./g,"@").replace(/"[^"\\\n\r]*"/g,""))){return null;}return eval("("+string+")");}});Request.JSON=new Class({Extends:Request,options:{secure:true},initialize:function(a){this.parent(a);this.headers.extend({Accept:"application/json","X-Request":"JSON"});},success:function(a){this.response.json=JSON.decode(a,this.options.secure);this.onSuccess(this.response.json,a);}});var Cookie=new Class({Implements:Options,options:{path:false,domain:false,duration:false,secure:false,document:document},initialize:function(b,a){this.key=b;this.setOptions(a);},write:function(b){b=encodeURIComponent(b);if(this.options.domain){b+="; domain="+this.options.domain;}if(this.options.path){b+="; path="+this.options.path;}if(this.options.duration){var a=new Date();a.setTime(a.getTime()+this.options.duration*24*60*60*1000);b+="; expires="+a.toGMTString();}if(this.options.secure){b+="; secure";}this.options.document.cookie=this.key+"="+b;return this;},read:function(){var a=this.options.document.cookie.match("(?:^|;)\\s*"+this.key.escapeRegExp()+"=([^;]*)");return(a)?decodeURIComponent(a[1]):null;},dispose:function(){new Cookie(this.key,$merge(this.options,{duration:-1})).write("");return this;}});Cookie.write=function(b,c,a){return new Cookie(b,a).write(c);};Cookie.read=function(a){return new Cookie(a).read();};Cookie.dispose=function(b,a){return new Cookie(b,a).dispose();};Element.Events.domready={onAdd:function(a){if(Browser.loaded){a.call(this);}}};(function(){var b=function(){if(Browser.loaded){return;}Browser.loaded=true;window.fireEvent("domready");document.fireEvent("domready");};window.addEvent("load",b);if(Browser.Engine.trident){var a=document.createElement("div");(function(){($try(function(){a.doScroll();return document.id(a).inject(document.body).set("html","temp").dispose();}))?b():arguments.callee.delay(50);})();}else{if(Browser.Engine.webkit&&Browser.Engine.version<525){(function(){(["loaded","complete"].contains(document.readyState))?b():arguments.callee.delay(50);})();}else{document.addEvent("DOMContentLoaded",b);}}})();Native.implement([Document,Element],{getElements:function(j,h){j=j.split(",");var c,f={};for(var d=0,b=j.length;d<b;d++){var a=j[d],g=Selectors.Utils.search(this,a,f);if(d!=0&&g.item){g=$A(g);}c=(d==0)?g:(c.item)?$A(c).concat(g):c.concat(g);}return new Elements(c,{ddup:(j.length>1),cash:!h});}});Element.implement({match:function(b){if(!b||(b==this)){return true;}var d=Selectors.Utils.parseTagAndID(b);var a=d[0],f=d[1];if(!Selectors.Filters.byID(this,f)||!Selectors.Filters.byTag(this,a)){return false;}var c=Selectors.Utils.parseSelector(b);return(c)?Selectors.Utils.filter(this,c,{}):true;}});var Selectors={Cache:{nth:{},parsed:{}}};Selectors.RegExps={id:(/#([\w-]+)/),tag:(/^(\w+|\*)/),quick:(/^(\w+|\*)$/),splitter:(/\s*([+>~\s])\s*([a-zA-Z#.*:\[])/g),combined:(/\.([\w-]+)|\[(\w+)(?:([!*^$~|]?=)(["']?)([^\4]*?)\4)?\]|:([\w-]+)(?:\(["']?(.*?)?["']?\)|$)/g)};Selectors.Utils={chk:function(b,c){if(!c){return true;}var a=$uid(b);if(!c[a]){return c[a]=true;}return false;},parseNthArgument:function(i){if(Selectors.Cache.nth[i]){return Selectors.Cache.nth[i];}var f=i.match(/^([+-]?\d*)?([a-z]+)?([+-]?\d*)?$/);if(!f){return false;}var h=parseInt(f[1],10);var d=(h||h===0)?h:1;var g=f[2]||false;var c=parseInt(f[3],10)||0;if(d!=0){c--;while(c<1){c+=d;}while(c>=d){c-=d;}}else{d=c;g="index";}switch(g){case"n":f={a:d,b:c,special:"n"};break;case"odd":f={a:2,b:0,special:"n"};break;case"even":f={a:2,b:1,special:"n"};break;case"first":f={a:0,special:"index"};break;case"last":f={special:"last-child"};break;case"only":f={special:"only-child"};break;default:f={a:(d-1),special:"index"};}return Selectors.Cache.nth[i]=f;},parseSelector:function(f){if(Selectors.Cache.parsed[f]){return Selectors.Cache.parsed[f];}var d,i={classes:[],pseudos:[],attributes:[]};while((d=Selectors.RegExps.combined.exec(f))){var j=d[1],h=d[2],g=d[3],b=d[5],c=d[6],k=d[7];if(j){i.classes.push(j);}else{if(c){var a=Selectors.Pseudo.get(c);if(a){i.pseudos.push({parser:a,argument:k});}else{i.attributes.push({name:c,operator:"=",value:k});}}else{if(h){i.attributes.push({name:h,operator:g,value:b});}}}}if(!i.classes.length){delete i.classes;}if(!i.attributes.length){delete i.attributes;}if(!i.pseudos.length){delete i.pseudos;}if(!i.classes&&!i.attributes&&!i.pseudos){i=null;}return Selectors.Cache.parsed[f]=i;},parseTagAndID:function(b){var a=b.match(Selectors.RegExps.tag);var c=b.match(Selectors.RegExps.id);return[(a)?a[1]:"*",(c)?c[1]:false];},filter:function(g,c,f){var d;if(c.classes){for(d=c.classes.length;d--;d){var h=c.classes[d];if(!Selectors.Filters.byClass(g,h)){return false;}}}if(c.attributes){for(d=c.attributes.length;d--;d){var b=c.attributes[d];if(!Selectors.Filters.byAttribute(g,b.name,b.operator,b.value)){return false;}}}if(c.pseudos){for(d=c.pseudos.length;d--;d){var a=c.pseudos[d];if(!Selectors.Filters.byPseudo(g,a.parser,a.argument,f)){return false;}}}return true;},getByTagAndID:function(b,a,d){if(d){var c=(b.getElementById)?b.getElementById(d,true):Element.getElementById(b,d,true);return(c&&Selectors.Filters.byTag(c,a))?[c]:[];}else{return b.getElementsByTagName(a);}},search:function(p,o,u){var b=[];var c=o.trim().replace(Selectors.RegExps.splitter,function(k,j,i){b.push(j);return":)"+i;}).split(":)");var q,f,B;for(var A=0,w=c.length;A<w;A++){var z=c[A];if(A==0&&Selectors.RegExps.quick.test(z)){q=p.getElementsByTagName(z);continue;}var a=b[A-1];var r=Selectors.Utils.parseTagAndID(z);var C=r[0],s=r[1];if(A==0){q=Selectors.Utils.getByTagAndID(p,C,s);}else{var d={},h=[];for(var y=0,x=q.length;y<x;y++){h=Selectors.Getters[a](h,q[y],C,s,d);}q=h;}var g=Selectors.Utils.parseSelector(z);if(g){f=[];for(var v=0,t=q.length;v<t;v++){B=q[v];if(Selectors.Utils.filter(B,g,u)){f.push(B);}}q=f;}}return q;}};Selectors.Getters={" ":function(j,h,k,a,f){var d=Selectors.Utils.getByTagAndID(h,k,a);for(var c=0,b=d.length;c<b;c++){var g=d[c];if(Selectors.Utils.chk(g,f)){j.push(g);}}return j;},">":function(j,h,k,a,g){var c=Selectors.Utils.getByTagAndID(h,k,a);for(var f=0,d=c.length;f<d;f++){var b=c[f];if(b.parentNode==h&&Selectors.Utils.chk(b,g)){j.push(b);}}return j;},"+":function(c,b,a,f,d){while((b=b.nextSibling)){if(b.nodeType==1){if(Selectors.Utils.chk(b,d)&&Selectors.Filters.byTag(b,a)&&Selectors.Filters.byID(b,f)){c.push(b);}break;}}return c;},"~":function(c,b,a,f,d){while((b=b.nextSibling)){if(b.nodeType==1){if(!Selectors.Utils.chk(b,d)){break;}if(Selectors.Filters.byTag(b,a)&&Selectors.Filters.byID(b,f)){c.push(b);}}}return c;}};Selectors.Filters={byTag:function(b,a){return(a=="*"||(b.tagName&&b.tagName.toLowerCase()==a));},byID:function(a,b){return(!b||(a.id&&a.id==b));},byClass:function(b,a){return(b.className&&b.className.contains&&b.className.contains(a," "));},byPseudo:function(a,d,c,b){return d.call(a,c,b);},byAttribute:function(c,d,b,f){var a=Element.prototype.getProperty.call(c,d);if(!a){return(b=="!=");}if(!b||f==undefined){return true;}switch(b){case"=":return(a==f);case"*=":return(a.contains(f));case"^=":return(a.substr(0,f.length)==f);case"$=":return(a.substr(a.length-f.length)==f);case"!=":return(a!=f);case"~=":return a.contains(f," ");case"|=":return a.contains(f,"-");}return false;}};Selectors.Pseudo=new Hash({checked:function(){return this.checked;},empty:function(){return !(this.innerText||this.textContent||"").length;},not:function(a){return !Element.match(this,a);},contains:function(a){return(this.innerText||this.textContent||"").contains(a);},"first-child":function(){return Selectors.Pseudo.index.call(this,0);},"last-child":function(){var a=this;while((a=a.nextSibling)){if(a.nodeType==1){return false;}}return true;},"only-child":function(){var b=this;while((b=b.previousSibling)){if(b.nodeType==1){return false;}}var a=this;while((a=a.nextSibling)){if(a.nodeType==1){return false;}}return true;},"nth-child":function(h,f){h=(h==undefined)?"n":h;var c=Selectors.Utils.parseNthArgument(h);if(c.special!="n"){return Selectors.Pseudo[c.special].call(this,c.a,f);}var g=0;f.positions=f.positions||{};var d=$uid(this);if(!f.positions[d]){var b=this;while((b=b.previousSibling)){if(b.nodeType!=1){continue;}g++;var a=f.positions[$uid(b)];if(a!=undefined){g=a+g;break;}}f.positions[d]=g;}return(f.positions[d]%c.a==c.b);},index:function(a){var b=this,c=0;while((b=b.previousSibling)){if(b.nodeType==1&&++c>a){return false;}}return(c==a);},even:function(b,a){return Selectors.Pseudo["nth-child"].call(this,"2n+1",a);},odd:function(b,a){return Selectors.Pseudo["nth-child"].call(this,"2n",a);},selected:function(){return this.selected;},enabled:function(){return(this.disabled===false);}});var Swiff=new Class({Implements:[Options],options:{id:null,height:1,width:1,container:null,properties:{},params:{quality:"high",allowScriptAccess:"always",wMode:"transparent",swLiveConnect:true},callBacks:{},vars:{}},toElement:function(){return this.object;},initialize:function(m,n){this.instance="Swiff_"+$time();this.setOptions(n);n=this.options;var b=this.id=n.id||this.instance;var a=document.id(n.container);Swiff.CallBacks[this.instance]={};var f=n.params,h=n.vars,g=n.callBacks;var i=$extend({height:n.height,width:n.width},n.properties);var l=this;for(var d in g){Swiff.CallBacks[this.instance][d]=(function(o){return function(){return o.apply(l.object,arguments);};})(g[d]);h[d]="Swiff.CallBacks."+this.instance+"."+d;}f.flashVars=Hash.toQueryString(h);if(Browser.Engine.trident){i.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";f.movie=m;}else{i.type="application/x-shockwave-flash";i.data=m;}var k='<object id="'+b+'"';for(var j in i){k+=" "+j+'="'+i[j]+'"';}k+=">";for(var c in f){if(f[c]){k+='<param name="'+c+'" value="'+f[c]+'" />';}}k+="</object>";this.object=((a)?a.empty():new Element("div")).set("html",k).firstChild;},replaces:function(a){a=document.id(a,true);a.parentNode.replaceChild(this.toElement(),a);return this;},inject:function(a){document.id(a,true).appendChild(this.toElement());return this;},remote:function(){return Swiff.remote.apply(Swiff,[this.toElement()].extend(arguments));}});Swiff.CallBacks={};Swiff.remote=function(obj,fn){var rs=obj.CallFunction('<invoke name="'+fn+'" returntype="javascript">'+__flash__argumentsToXML(arguments,2)+"</invoke>");return eval(rs);};

//MooTools More, <http://mootools.net/more>. Copyright (c) 2006-2009 Aaron Newton <http://clientcide.com/>, Valerio Proietti <http://mad4milk.net> & the MooTools team <http://mootools.net/developers>, MIT Style License.

MooTools.More={version:"1.2.4.2",build:"bd5a93c0913cce25917c48cbdacde568e15e02ef"};(function(){var a={language:"en-US",languages:{"en-US":{}},cascades:["en-US"]};
var b;MooTools.lang=new Events();$extend(MooTools.lang,{setLanguage:function(c){if(!a.languages[c]){return this;}a.language=c;this.load();this.fireEvent("langChange",c);
return this;},load:function(){var c=this.cascade(this.getCurrentLanguage());b={};$each(c,function(e,d){b[d]=this.lambda(e);},this);},getCurrentLanguage:function(){return a.language;
},addLanguage:function(c){a.languages[c]=a.languages[c]||{};return this;},cascade:function(e){var c=(a.languages[e]||{}).cascades||[];c.combine(a.cascades);
c.erase(e).push(e);var d=c.map(function(f){return a.languages[f];},this);return $merge.apply(this,d);},lambda:function(c){(c||{}).get=function(e,d){return $lambda(c[e]).apply(this,$splat(d));
};return c;},get:function(e,d,c){if(b&&b[e]){return(d?b[e].get(d,c):b[e]);}},set:function(d,e,c){this.addLanguage(d);langData=a.languages[d];if(!langData[e]){langData[e]={};
}$extend(langData[e],c);if(d==this.getCurrentLanguage()){this.load();this.fireEvent("langChange",d);}return this;},list:function(){return Hash.getKeys(a.languages);
}});})();(function(){var c=this;var b=function(){if(c.console&&console.log){try{console.log.apply(console,arguments);}catch(d){console.log(Array.slice(arguments));
}}else{Log.logged.push(arguments);}return this;};var a=function(){this.logged.push(arguments);return this;};this.Log=new Class({logged:[],log:a,resetLog:function(){this.logged.empty();
return this;},enableLog:function(){this.log=b;this.logged.each(function(d){this.log.apply(this,d);},this);return this.resetLog();},disableLog:function(){this.log=a;
return this;}});Log.extend(new Log).enableLog();Log.logger=function(){return this.log.apply(this,arguments);};})();Class.refactor=function(b,a){$each(a,function(e,d){var c=b.prototype[d];
if(c&&(c=c._origin)&&typeof e=="function"){b.implement(d,function(){var f=this.previous;this.previous=c;var g=e.apply(this,arguments);this.previous=f;return g;
});}else{b.implement(d,e);}});return b;};Class.Mutators.Binds=function(a){return a;};Class.Mutators.initialize=function(a){return function(){$splat(this.Binds).each(function(b){var c=this[b];
if(c){this[b]=c.bind(this);}},this);return a.apply(this,arguments);};};Class.Occlude=new Class({occlude:function(c,b){b=document.id(b||this.element);var a=b.retrieve(c||this.property);
if(a&&!$defined(this.occluded)){return this.occluded=a;}this.occluded=false;b.store(c||this.property,this);return this.occluded;}});(function(){var a={wait:function(b){return this.chain(function(){this.callChain.delay($pick(b,500),this);
}.bind(this));}};Chain.implement(a);if(window.Fx){Fx.implement(a);["Css","Tween","Elements"].each(function(b){if(Fx[b]){Fx[b].implement(a);}});}Element.implement({chains:function(b){$splat($pick(b,["tween","morph","reveal"])).each(function(c){c=this.get(c);
if(!c){return;}c.setOptions({link:"chain"});},this);return this;},pauseFx:function(c,b){this.chains(b).get($pick(b,"tween")).wait(c);return this;}});})();
Array.implement({min:function(){return Math.min.apply(null,this);},max:function(){return Math.max.apply(null,this);},average:function(){return this.length?this.sum()/this.length:0;
},sum:function(){var a=0,b=this.length;if(b){do{a+=this[--b];}while(b);}return a;},unique:function(){return[].combine(this);}});(function(){var i=this.Date;
if(!i.now){i.now=$time;}i.Methods={ms:"Milliseconds",year:"FullYear",min:"Minutes",mo:"Month",sec:"Seconds",hr:"Hours"};["Date","Day","FullYear","Hours","Milliseconds","Minutes","Month","Seconds","Time","TimezoneOffset","Week","Timezone","GMTOffset","DayOfYear","LastMonth","LastDayOfMonth","UTCDate","UTCDay","UTCFullYear","AMPM","Ordinal","UTCHours","UTCMilliseconds","UTCMinutes","UTCMonth","UTCSeconds"].each(function(p){i.Methods[p.toLowerCase()]=p;
});var d=function(q,p){return new Array(p-String(q).length+1).join("0")+q;};i.implement({set:function(t,r){switch($type(t)){case"object":for(var s in t){this.set(s,t[s]);
}break;case"string":t=t.toLowerCase();var q=i.Methods;if(q[t]){this["set"+q[t]](r);}}return this;},get:function(q){q=q.toLowerCase();var p=i.Methods;if(p[q]){return this["get"+p[q]]();
}return null;},clone:function(){return new i(this.get("time"));},increment:function(p,r){p=p||"day";r=$pick(r,1);switch(p){case"year":return this.increment("month",r*12);
case"month":var q=this.get("date");this.set("date",1).set("mo",this.get("mo")+r);return this.set("date",q.min(this.get("lastdayofmonth")));case"week":return this.increment("day",r*7);
case"day":return this.set("date",this.get("date")+r);}if(!i.units[p]){throw new Error(p+" is not a supported interval");}return this.set("time",this.get("time")+r*i.units[p]());
},decrement:function(p,q){return this.increment(p,-1*$pick(q,1));},isLeapYear:function(){return i.isLeapYear(this.get("year"));},clearTime:function(){return this.set({hr:0,min:0,sec:0,ms:0});
},diff:function(q,p){if($type(q)=="string"){q=i.parse(q);}return((q-this)/i.units[p||"day"](3,3)).toInt();},getLastDayOfMonth:function(){return i.daysInMonth(this.get("mo"),this.get("year"));
},getDayOfYear:function(){return(i.UTC(this.get("year"),this.get("mo"),this.get("date")+1)-i.UTC(this.get("year"),0,1))/i.units.day();},getWeek:function(){return(this.get("dayofyear")/7).ceil();
},getOrdinal:function(p){return i.getMsg("ordinal",p||this.get("date"));},getTimezone:function(){return this.toString().replace(/^.*? ([A-Z]{3}).[0-9]{4}.*$/,"$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/,"$1$2$3");
},getGMTOffset:function(){var p=this.get("timezoneOffset");return((p>0)?"-":"+")+d((p.abs()/60).floor(),2)+d(p%60,2);},setAMPM:function(p){p=p.toUpperCase();
var q=this.get("hr");if(q>11&&p=="AM"){return this.decrement("hour",12);}else{if(q<12&&p=="PM"){return this.increment("hour",12);}}return this;},getAMPM:function(){return(this.get("hr")<12)?"AM":"PM";
},parse:function(p){this.set("time",i.parse(p));return this;},isValid:function(p){return !!(p||this).valueOf();},format:function(p){if(!this.isValid()){return"invalid date";
}p=p||"%x %X";p=k[p.toLowerCase()]||p;var q=this;return p.replace(/%([a-z%])/gi,function(s,r){switch(r){case"a":return i.getMsg("days")[q.get("day")].substr(0,3);
case"A":return i.getMsg("days")[q.get("day")];case"b":return i.getMsg("months")[q.get("month")].substr(0,3);case"B":return i.getMsg("months")[q.get("month")];
case"c":return q.toString();case"d":return d(q.get("date"),2);case"H":return d(q.get("hr"),2);case"I":return((q.get("hr")%12)||12);case"j":return d(q.get("dayofyear"),3);
case"m":return d((q.get("mo")+1),2);case"M":return d(q.get("min"),2);case"o":return q.get("ordinal");case"p":return i.getMsg(q.get("ampm"));case"S":return d(q.get("seconds"),2);
case"U":return d(q.get("week"),2);case"w":return q.get("day");case"x":return q.format(i.getMsg("shortDate"));case"X":return q.format(i.getMsg("shortTime"));
case"y":return q.get("year").toString().substr(2);case"Y":return q.get("year");case"T":return q.get("GMTOffset");case"Z":return q.get("Timezone");}return r;
});},toISOString:function(){return this.format("iso8601");}});i.alias("toISOString","toJSON");i.alias("diff","compare");i.alias("format","strftime");var k={db:"%Y-%m-%d %H:%M:%S",compact:"%Y%m%dT%H%M%S",iso8601:"%Y-%m-%dT%H:%M:%S%T",rfc822:"%a, %d %b %Y %H:%M:%S %Z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"};
var g=[];var e=i.parse;var n=function(s,u,r){var q=-1;var t=i.getMsg(s+"s");switch($type(u)){case"object":q=t[u.get(s)];break;case"number":q=t[month-1];
if(!q){throw new Error("Invalid "+s+" index: "+index);}break;case"string":var p=t.filter(function(v){return this.test(v);},new RegExp("^"+u,"i"));if(!p.length){throw new Error("Invalid "+s+" string");
}if(p.length>1){throw new Error("Ambiguous "+s);}q=p[0];}return(r)?t.indexOf(q):q;};i.extend({getMsg:function(q,p){return MooTools.lang.get("Date",q,p);
},units:{ms:$lambda(1),second:$lambda(1000),minute:$lambda(60000),hour:$lambda(3600000),day:$lambda(86400000),week:$lambda(608400000),month:function(q,p){var r=new i;
return i.daysInMonth($pick(q,r.get("mo")),$pick(p,r.get("year")))*86400000;},year:function(p){p=p||new i().get("year");return i.isLeapYear(p)?31622400000:31536000000;
}},daysInMonth:function(q,p){return[31,i.isLeapYear(p)?29:28,31,30,31,30,31,31,30,31,30,31][q];},isLeapYear:function(p){return((p%4===0)&&(p%100!==0))||(p%400===0);
},parse:function(r){var q=$type(r);if(q=="number"){return new i(r);}if(q!="string"){return r;}r=r.clean();if(!r.length){return null;}var p;g.some(function(t){var s=t.re.exec(r);
return(s)?(p=t.handler(s)):false;});return p||new i(e(r));},parseDay:function(p,q){return n("day",p,q);},parseMonth:function(q,p){return n("month",q,p);
},parseUTC:function(q){var p=new i(q);var r=i.UTC(p.get("year"),p.get("mo"),p.get("date"),p.get("hr"),p.get("min"),p.get("sec"));return new i(r);},orderIndex:function(p){return i.getMsg("dateOrder").indexOf(p)+1;
},defineFormat:function(p,q){k[p]=q;},defineFormats:function(p){for(var q in p){i.defineFormat(q,p[q]);}},parsePatterns:g,defineParser:function(p){g.push((p.re&&p.handler)?p:l(p));
},defineParsers:function(){Array.flatten(arguments).each(i.defineParser);},define2DigitYearStart:function(p){h=p%100;m=p-h;}});var m=1900;var h=70;var j=function(p){return new RegExp("(?:"+i.getMsg(p).map(function(q){return q.substr(0,3);
}).join("|")+")[a-z]*");};var a=function(p){switch(p){case"x":return((i.orderIndex("month")==1)?"%m[.-/]%d":"%d[.-/]%m")+"([.-/]%y)?";case"X":return"%H([.:]%M)?([.:]%S([.:]%s)?)? ?%p? ?%T?";
}return null;};var o={d:/[0-2]?[0-9]|3[01]/,H:/[01]?[0-9]|2[0-3]/,I:/0?[1-9]|1[0-2]/,M:/[0-5]?\d/,s:/\d+/,o:/[a-z]*/,p:/[ap]\.?m\.?/,y:/\d{2}|\d{4}/,Y:/\d{4}/,T:/Z|[+-]\d{2}(?::?\d{2})?/};
o.m=o.I;o.S=o.M;var c;var b=function(p){c=p;o.a=o.A=j("days");o.b=o.B=j("months");g.each(function(r,q){if(r.format){g[q]=l(r.format);}});};var l=function(r){if(!c){return{format:r};
}var p=[];var q=(r.source||r).replace(/%([a-z])/gi,function(t,s){return a(s)||t;}).replace(/\((?!\?)/g,"(?:").replace(/ (?!\?|\*)/g,",? ").replace(/%([a-z%])/gi,function(t,s){var u=o[s];
if(!u){return s;}p.push(s);return"("+u.source+")";}).replace(/\[a-z\]/gi,"[a-z\\u00c0-\\uffff]");return{format:r,re:new RegExp("^"+q+"$","i"),handler:function(u){u=u.slice(1).associate(p);
var s=new i().clearTime();if("d" in u){f.call(s,"d",1);}if("m" in u){f.call(s,"m",1);}for(var t in u){f.call(s,t,u[t]);}return s;}};};var f=function(p,q){if(!q){return this;
}switch(p){case"a":case"A":return this.set("day",i.parseDay(q,true));case"b":case"B":return this.set("mo",i.parseMonth(q,true));case"d":return this.set("date",q);
case"H":case"I":return this.set("hr",q);case"m":return this.set("mo",q-1);case"M":return this.set("min",q);case"p":return this.set("ampm",q.replace(/\./g,""));
case"S":return this.set("sec",q);case"s":return this.set("ms",("0."+q)*1000);case"w":return this.set("day",q);case"Y":return this.set("year",q);case"y":q=+q;
if(q<100){q+=m+(q<h?100:0);}return this.set("year",q);case"T":if(q=="Z"){q="+00";}var r=q.match(/([+-])(\d{2}):?(\d{2})?/);r=(r[1]+"1")*(r[2]*60+(+r[3]||0))+this.getTimezoneOffset();
return this.set("time",this-r*60000);}return this;};i.defineParsers("%Y([-./]%m([-./]%d((T| )%X)?)?)?","%Y%m%d(T%H(%M%S?)?)?","%x( %X)?","%d%o( %b( %Y)?)?( %X)?","%b( %d%o)?( %Y)?( %X)?","%Y %b( %d%o( %X)?)?","%o %b %d %X %T %Y");
MooTools.lang.addEvent("langChange",function(p){if(MooTools.lang.get("Date")){b(p);}}).fireEvent("langChange",MooTools.lang.getCurrentLanguage());})();
Date.implement({timeDiffInWords:function(a){return Date.distanceOfTimeInWords(this,a||new Date);},timeDiff:function(g,b){if(g==null){g=new Date;}var f=((g-this)/1000).toInt();
if(!f){return"0s";}var a={s:60,m:60,h:24,d:365,y:0};var e,d=[];for(var c in a){if(!f){break;}if((e=a[c])){d.unshift((f%e)+c);f=(f/e).toInt();}else{d.unshift(f+c);
}}return d.join(b||":");}});Date.alias("timeDiffInWords","timeAgoInWords");Date.extend({distanceOfTimeInWords:function(b,a){return Date.getTimePhrase(((a-b)/1000).toInt());
},getTimePhrase:function(f){var d=(f<0)?"Until":"Ago";if(f<0){f*=-1;}var b={minute:60,hour:60,day:24,week:7,month:52/12,year:12,eon:Infinity};var e="lessThanMinute";
for(var c in b){var a=b[c];if(f<1.5*a){if(f>0.75*a){e=c;}break;}f/=a;e=c+"s";}return Date.getMsg(e+d).substitute({delta:f.round()});}});Date.defineParsers({re:/^(?:tod|tom|yes)/i,handler:function(a){var b=new Date().clearTime();
switch(a[0]){case"tom":return b.increment();case"yes":return b.decrement();default:return b;}}},{re:/^(next|last) ([a-z]+)$/i,handler:function(e){var f=new Date().clearTime();
var b=f.getDay();var c=Date.parseDay(e[2],true);var a=c-b;if(c<=b){a+=7;}if(e[1]=="last"){a-=7;}return f.set("date",f.getDate()+a);}});Hash.implement({getFromPath:function(a){var b=this.getClean();
a.replace(/\[([^\]]+)\]|\.([^.[]+)|[^[.]+/g,function(c){if(!b){return null;}var d=arguments[2]||arguments[1]||arguments[0];b=(d in b)?b[d]:null;return c;
});return b;},cleanValues:function(a){a=a||$defined;this.each(function(c,b){if(!a(c)){this.erase(b);}},this);return this;},run:function(){var a=arguments;
this.each(function(c,b){if($type(c)=="function"){c.run(a);}});}});(function(){var b=["À","à","Á","á","Â","â","Ã","ã","Ä","ä","Å","å","Ă","ă","Ą","ą","Ć","ć","Č","č","Ç","ç","Ď","ď","Đ","đ","È","è","É","é","Ê","ê","Ë","ë","Ě","ě","Ę","ę","Ğ","ğ","Ì","ì","Í","í","Î","î","Ï","ï","Ĺ","ĺ","Ľ","ľ","Ł","ł","Ñ","ñ","Ň","ň","Ń","ń","Ò","ò","Ó","ó","Ô","ô","Õ","õ","Ö","ö","Ø","ø","ő","Ř","ř","Ŕ","ŕ","Š","š","Ş","ş","Ś","ś","Ť","ť","Ť","ť","Ţ","ţ","Ù","ù","Ú","ú","Û","û","Ü","ü","Ů","ů","Ÿ","ÿ","ý","Ý","Ž","ž","Ź","ź","Ż","ż","Þ","þ","Ð","ð","ß","Œ","œ","Æ","æ","µ"];
var a=["A","a","A","a","A","a","A","a","Ae","ae","A","a","A","a","A","a","C","c","C","c","C","c","D","d","D","d","E","e","E","e","E","e","E","e","E","e","E","e","G","g","I","i","I","i","I","i","I","i","L","l","L","l","L","l","N","n","N","n","N","n","O","o","O","o","O","o","O","o","Oe","oe","O","o","o","R","r","R","r","S","s","S","s","S","s","T","t","T","t","T","t","U","u","U","u","U","u","Ue","ue","U","u","Y","y","Y","y","Z","z","Z","z","Z","z","TH","th","DH","dh","ss","OE","oe","AE","ae","u"];
var d={"[\xa0\u2002\u2003\u2009]":" ","\xb7":"*","[\u2018\u2019]":"'","[\u201c\u201d]":'"',"\u2026":"...","\u2013":"-","\u2014":"--","\uFFFD":"&raquo;"};
var c=function(e,f){e=e||"";var g=f?"<"+e+"[^>]*>([\\s\\S]*?)</"+e+">":"</?"+e+"([^>]+)?>";reg=new RegExp(g,"gi");return reg;};String.implement({standardize:function(){var e=this;
b.each(function(g,f){e=e.replace(new RegExp(g,"g"),a[f]);});return e;},repeat:function(e){return new Array(e+1).join(this);},pad:function(f,h,e){if(this.length>=f){return this;
}var g=(h==null?" ":""+h).repeat(f-this.length).substr(0,f-this.length);if(!e||e=="right"){return this+g;}if(e=="left"){return g+this;}return g.substr(0,(g.length/2).floor())+this+g.substr(0,(g.length/2).ceil());
},getTags:function(e,f){return this.match(c(e,f))||[];},stripTags:function(e,f){return this.replace(c(e,f),"");},tidy:function(){var e=this.toString();
$each(d,function(g,f){e=e.replace(new RegExp(f,"g"),g);});return e;}});})();String.implement({parseQueryString:function(){var b=this.split(/[&;]/),a={};
if(b.length){b.each(function(g){var c=g.indexOf("="),d=c<0?[""]:g.substr(0,c).match(/[^\]\[]+/g),e=decodeURIComponent(g.substr(c+1)),f=a;d.each(function(j,h){var k=f[j];
if(h<d.length-1){f=f[j]=k||{};}else{if($type(k)=="array"){k.push(e);}else{f[j]=$defined(k)?[k,e]:e;}}});});}return a;},cleanQueryString:function(a){return this.split("&").filter(function(e){var b=e.indexOf("="),c=b<0?"":e.substr(0,b),d=e.substr(b+1);
return a?a.run([c,d]):$chk(d);}).join("&");}});var URI=new Class({Implements:Options,options:{},regex:/^(?:(\w+):)?(?:\/\/(?:(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)?(\.\.?$|(?:[^?#\/]*\/)*)([^?#]*)(?:\?([^#]*))?(?:#(.*))?/,parts:["scheme","user","password","host","port","directory","file","query","fragment"],schemes:{http:80,https:443,ftp:21,rtsp:554,mms:1755,file:0},initialize:function(b,a){this.setOptions(a);
var c=this.options.base||URI.base;if(!b){b=c;}if(b&&b.parsed){this.parsed=$unlink(b.parsed);}else{this.set("value",b.href||b.toString(),c?new URI(c):false);
}},parse:function(c,b){var a=c.match(this.regex);if(!a){return false;}a.shift();return this.merge(a.associate(this.parts),b);},merge:function(b,a){if((!b||!b.scheme)&&(!a||!a.scheme)){return false;
}if(a){this.parts.every(function(c){if(b[c]){return false;}b[c]=a[c]||"";return true;});}b.port=b.port||this.schemes[b.scheme.toLowerCase()];b.directory=b.directory?this.parseDirectory(b.directory,a?a.directory:""):"/";
return b;},parseDirectory:function(b,c){b=(b.substr(0,1)=="/"?"":(c||"/"))+b;if(!b.test(URI.regs.directoryDot)){return b;}var a=[];b.replace(URI.regs.endSlash,"").split("/").each(function(d){if(d==".."&&a.length>0){a.pop();
}else{if(d!="."){a.push(d);}}});return a.join("/")+"/";},combine:function(a){return a.value||a.scheme+"://"+(a.user?a.user+(a.password?":"+a.password:"")+"@":"")+(a.host||"")+(a.port&&a.port!=this.schemes[a.scheme]?":"+a.port:"")+(a.directory||"/")+(a.file||"")+(a.query?"?"+a.query:"")+(a.fragment?"#"+a.fragment:"");
},set:function(b,d,c){if(b=="value"){var a=d.match(URI.regs.scheme);if(a){a=a[1];}if(a&&!$defined(this.schemes[a.toLowerCase()])){this.parsed={scheme:a,value:d};
}else{this.parsed=this.parse(d,(c||this).parsed)||(a?{scheme:a,value:d}:{value:d});}}else{if(b=="data"){this.setData(d);}else{this.parsed[b]=d;}}return this;
},get:function(a,b){switch(a){case"value":return this.combine(this.parsed,b?b.parsed:false);case"data":return this.getData();}return this.parsed[a]||"";
},go:function(){document.location.href=this.toString();},toURI:function(){return this;},getData:function(c,b){var a=this.get(b||"query");if(!$chk(a)){return c?null:{};
}var d=a.parseQueryString();return c?d[c]:d;},setData:function(a,c,b){if(typeof a=="string"){a=this.getData();a[arguments[0]]=arguments[1];}else{if(c){a=$merge(this.getData(),a);
}}return this.set(b||"query",Hash.toQueryString(a));},clearData:function(a){return this.set(a||"query","");}});URI.prototype.toString=URI.prototype.valueOf=function(){return this.get("value");
};URI.regs={endSlash:/\/$/,scheme:/^(\w+):/,directoryDot:/\.\/|\.$/};URI.base=new URI(document.getElements("base[href]",true).getLast(),{base:document.location});
String.implement({toURI:function(a){return new URI(this,a);}});URI=Class.refactor(URI,{combine:function(f,e){if(!e||f.scheme!=e.scheme||f.host!=e.host||f.port!=e.port){return this.previous.apply(this,arguments);
}var a=f.file+(f.query?"?"+f.query:"")+(f.fragment?"#"+f.fragment:"");if(!e.directory){return(f.directory||(f.file?"":"./"))+a;}var d=e.directory.split("/"),c=f.directory.split("/"),g="",h;
var b=0;for(h=0;h<d.length&&h<c.length&&d[h]==c[h];h++){}for(b=0;b<d.length-h-1;b++){g+="../";}for(b=h;b<c.length-1;b++){g+=c[b]+"/";}return(g||(f.file?"":"./"))+a;
},toAbsolute:function(a){a=new URI(a);if(a){a.set("directory","").set("file","");}return this.toRelative(a);},toRelative:function(a){return this.get("value",new URI(a));
}});Element.implement({tidy:function(){this.set("value",this.get("value").tidy());},getTextInRange:function(b,a){return this.get("value").substring(b,a);
},getSelectedText:function(){if(this.setSelectionRange){return this.getTextInRange(this.getSelectionStart(),this.getSelectionEnd());}return document.selection.createRange().text;
},getSelectedRange:function(){if($defined(this.selectionStart)){return{start:this.selectionStart,end:this.selectionEnd};}var e={start:0,end:0};var a=this.getDocument().selection.createRange();
if(!a||a.parentElement()!=this){return e;}var c=a.duplicate();if(this.type=="text"){e.start=0-c.moveStart("character",-100000);e.end=e.start+a.text.length;
}else{var b=this.get("value");var d=b.length;c.moveToElementText(this);c.setEndPoint("StartToEnd",a);if(c.text.length){d-=b.match(/[\n\r]*$/)[0].length;
}e.end=d-c.text.length;c.setEndPoint("StartToStart",a);e.start=d-c.text.length;}return e;},getSelectionStart:function(){return this.getSelectedRange().start;
},getSelectionEnd:function(){return this.getSelectedRange().end;},setCaretPosition:function(a){if(a=="end"){a=this.get("value").length;}this.selectRange(a,a);
return this;},getCaretPosition:function(){return this.getSelectedRange().start;},selectRange:function(e,a){if(this.setSelectionRange){this.focus();this.setSelectionRange(e,a);
}else{var c=this.get("value");var d=c.substr(e,a-e).replace(/\r/g,"").length;e=c.substr(0,e).replace(/\r/g,"").length;var b=this.createTextRange();b.collapse(true);
b.moveEnd("character",e+d);b.moveStart("character",e);b.select();}return this;},insertAtCursor:function(b,a){var d=this.getSelectedRange();var c=this.get("value");
this.set("value",c.substring(0,d.start)+b+c.substring(d.end,c.length));if($pick(a,true)){this.selectRange(d.start,d.start+b.length);}else{this.setCaretPosition(d.start+b.length);
}return this;},insertAroundCursor:function(b,a){b=$extend({before:"",defaultMiddle:"",after:""},b);var c=this.getSelectedText()||b.defaultMiddle;var g=this.getSelectedRange();
var f=this.get("value");if(g.start==g.end){this.set("value",f.substring(0,g.start)+b.before+c+b.after+f.substring(g.end,f.length));this.selectRange(g.start+b.before.length,g.end+b.before.length+c.length);
}else{var d=f.substring(g.start,g.end);this.set("value",f.substring(0,g.start)+b.before+d+b.after+f.substring(g.end,f.length));var e=g.start+b.before.length;
if($pick(a,true)){this.selectRange(e,e+d.length);}else{this.setCaretPosition(e+f.length);}}return this;}});Elements.from=function(e,d){if($pick(d,true)){e=e.stripScripts();
}var b,c=e.match(/^\s*<(t[dhr]|tbody|tfoot|thead)/i);if(c){b=new Element("table");var a=c[1].toLowerCase();if(["td","th","tr"].contains(a)){b=new Element("tbody").inject(b);
if(a!="tr"){b=new Element("tr").inject(b);}}}return(b||new Element("div")).set("html",e).getChildren();};(function(){var d=/(.*?):relay\(([^)]+)\)$/,c=/[+>~\s]/,f=function(g){var h=g.match(d);
return !h?{event:g}:{event:h[1],selector:h[2]};},b=function(m,g){var k=m.target;if(c.test(g=g.trim())){var j=this.getElements(g);for(var h=j.length;h--;
){var l=j[h];if(k==l||l.hasChild(k)){return l;}}}else{for(;k&&k!=this;k=k.parentNode){if(Element.match(k,g)){return document.id(k);}}}return null;};var a=Element.prototype.addEvent,e=Element.prototype.removeEvent;
Element.implement({addEvent:function(j,i){var k=f(j);if(k.selector){var h=this.retrieve("$moo:delegateMonitors",{});if(!h[j]){var g=function(m){var l=b.call(this,m,k.selector);
if(l){this.fireEvent(j,[m,l],0,l);}}.bind(this);h[j]=g;a.call(this,k.event,g);}}return a.apply(this,arguments);},removeEvent:function(j,i){var k=f(j);if(k.selector){var h=this.retrieve("events");
if(!h||!h[j]||(i&&!h[j].keys.contains(i))){return this;}if(i){e.apply(this,[j,i]);}else{e.apply(this,j);}h=this.retrieve("events");if(h&&h[j]&&h[j].length==0){var g=this.retrieve("$moo:delegateMonitors",{});
e.apply(this,[k.event,g[j]]);delete g[j];}return this;}return e.apply(this,arguments);},fireEvent:function(j,h,g,k){var i=this.retrieve("events");if(!i||!i[j]){return this;
}i[j].keys.each(function(l){l.create({bind:k||this,delay:g,arguments:h})();},this);return this;}});})();Element.implement({measure:function(e){var g=function(h){return !!(!h||h.offsetHeight||h.offsetWidth);
};if(g(this)){return e.apply(this);}var d=this.getParent(),f=[],b=[];while(!g(d)&&d!=document.body){b.push(d.expose());d=d.getParent();}var c=this.expose();
var a=e.apply(this);c();b.each(function(h){h();});return a;},expose:function(){if(this.getStyle("display")!="none"){return $empty;}var a=this.style.cssText;
this.setStyles({display:"block",position:"absolute",visibility:"hidden"});return function(){this.style.cssText=a;}.bind(this);},getDimensions:function(a){a=$merge({computeSize:false},a);
var f={};var d=function(g,e){return(e.computeSize)?g.getComputedSize(e):g.getSize();};var b=this.getParent("body");if(b&&this.getStyle("display")=="none"){f=this.measure(function(){return d(this,a);
});}else{if(b){try{f=d(this,a);}catch(c){}}else{f={x:0,y:0};}}return $chk(f.x)?$extend(f,{width:f.x,height:f.y}):$extend(f,{x:f.width,y:f.height});},getComputedSize:function(a){a=$merge({styles:["padding","border"],plains:{height:["top","bottom"],width:["left","right"]},mode:"both"},a);
var c={width:0,height:0};switch(a.mode){case"vertical":delete c.width;delete a.plains.width;break;case"horizontal":delete c.height;delete a.plains.height;
break;}var b=[];$each(a.plains,function(g,f){g.each(function(h){a.styles.each(function(i){b.push((i=="border")?i+"-"+h+"-width":i+"-"+h);});});});var e={};
b.each(function(f){e[f]=this.getComputedStyle(f);},this);var d=[];$each(a.plains,function(g,f){var h=f.capitalize();c["total"+h]=c["computed"+h]=0;g.each(function(i){c["computed"+i.capitalize()]=0;
b.each(function(k,j){if(k.test(i)){e[k]=e[k].toInt()||0;c["total"+h]=c["total"+h]+e[k];c["computed"+i.capitalize()]=c["computed"+i.capitalize()]+e[k];}if(k.test(i)&&f!=k&&(k.test("border")||k.test("padding"))&&!d.contains(k)){d.push(k);
c["computed"+h]=c["computed"+h]-e[k];}});});});["Width","Height"].each(function(g){var f=g.toLowerCase();if(!$chk(c[f])){return;}c[f]=c[f]+this["offset"+g]+c["computed"+g];
c["total"+g]=c[f]+c["total"+g];delete c["computed"+g];},this);return $extend(e,c);}});(function(){var a=false;window.addEvent("domready",function(){var b=new Element("div").setStyles({position:"fixed",top:0,right:0}).inject(document.body);
a=(b.offsetTop===0);b.dispose();});Element.implement({pin:function(d){if(this.getStyle("display")=="none"){return null;}var f,b=window.getScroll();if(d!==false){f=this.getPosition();
if(!this.retrieve("pinned")){var h={top:f.y-b.y,left:f.x-b.x};if(a){this.setStyle("position","fixed").setStyles(h);}else{this.store("pinnedByJS",true);
this.setStyles({position:"absolute",top:f.y,left:f.x}).addClass("isPinned");this.store("scrollFixer",(function(){if(this.retrieve("pinned")){var i=window.getScroll();
}this.setStyles({top:h.top.toInt()+i.y,left:h.left.toInt()+i.x});}).bind(this));window.addEvent("scroll",this.retrieve("scrollFixer"));}this.store("pinned",true);
}}else{var g;if(!Browser.Engine.trident){var e=this.getParent();g=(e.getComputedStyle("position")!="static"?e:e.getOffsetParent());}f=this.getPosition(g);
this.store("pinned",false);var c;if(a&&!this.retrieve("pinnedByJS")){c={top:f.y+b.y,left:f.x+b.x};}else{this.store("pinnedByJS",false);window.removeEvent("scroll",this.retrieve("scrollFixer"));
c={top:f.y,left:f.x};}this.setStyles($merge(c,{position:"absolute"})).removeClass("isPinned");}return this;},unpin:function(){return this.pin(false);},togglepin:function(){this.pin(!this.retrieve("pinned"));
}});})();(function(){var a=Element.prototype.position;Element.implement({position:function(h){if(h&&($defined(h.x)||$defined(h.y))){return a?a.apply(this,arguments):this;
}$each(h||{},function(w,u){if(!$defined(w)){delete h[u];}});h=$merge({relativeTo:document.body,position:{x:"center",y:"center"},edge:false,offset:{x:0,y:0},returnPos:false,relFixedPosition:false,ignoreMargins:false,ignoreScroll:false,allowNegative:false},h);
var s={x:0,y:0},f=false;var c=this.measure(function(){return document.id(this.getOffsetParent());});if(c&&c!=this.getDocument().body){s=c.measure(function(){return this.getPosition();
});f=c!=document.id(h.relativeTo);h.offset.x=h.offset.x-s.x;h.offset.y=h.offset.y-s.y;}var t=function(u){if($type(u)!="string"){return u;}u=u.toLowerCase();
var v={};if(u.test("left")){v.x="left";}else{if(u.test("right")){v.x="right";}else{v.x="center";}}if(u.test("upper")||u.test("top")){v.y="top";}else{if(u.test("bottom")){v.y="bottom";
}else{v.y="center";}}return v;};h.edge=t(h.edge);h.position=t(h.position);if(!h.edge){if(h.position.x=="center"&&h.position.y=="center"){h.edge={x:"center",y:"center"};
}else{h.edge={x:"left",y:"top"};}}this.setStyle("position","absolute");var g=document.id(h.relativeTo)||document.body,d=g==document.body?window.getScroll():g.getPosition(),n=d.y,i=d.x;
var e=g.getScrolls();n+=e.y;i+=e.x;var o=this.getDimensions({computeSize:true,styles:["padding","border","margin"]});var k={},p=h.offset.y,r=h.offset.x,l=window.getSize();
switch(h.position.x){case"left":k.x=i+r;break;case"right":k.x=i+r+g.offsetWidth;break;default:k.x=i+((g==document.body?l.x:g.offsetWidth)/2)+r;break;}switch(h.position.y){case"top":k.y=n+p;
break;case"bottom":k.y=n+p+g.offsetHeight;break;default:k.y=n+((g==document.body?l.y:g.offsetHeight)/2)+p;break;}if(h.edge){var b={};switch(h.edge.x){case"left":b.x=0;
break;case"right":b.x=-o.x-o.computedRight-o.computedLeft;break;default:b.x=-(o.totalWidth/2);break;}switch(h.edge.y){case"top":b.y=0;break;case"bottom":b.y=-o.y-o.computedTop-o.computedBottom;
break;default:b.y=-(o.totalHeight/2);break;}k.x+=b.x;k.y+=b.y;}k={left:((k.x>=0||f||h.allowNegative)?k.x:0).toInt(),top:((k.y>=0||f||h.allowNegative)?k.y:0).toInt()};
var j={left:"x",top:"y"};["minimum","maximum"].each(function(u){["left","top"].each(function(v){var w=h[u]?h[u][j[v]]:null;if(w!=null&&k[v]<w){k[v]=w;}});
});if(g.getStyle("position")=="fixed"||h.relFixedPosition){var m=window.getScroll();k.top+=m.y;k.left+=m.x;}if(h.ignoreScroll){var q=g.getScroll();k.top-=q.y;
k.left-=q.x;}if(h.ignoreMargins){k.left+=(h.edge.x=="right"?o["margin-right"]:h.edge.x=="center"?-o["margin-left"]+((o["margin-right"]+o["margin-left"])/2):-o["margin-left"]);
k.top+=(h.edge.y=="bottom"?o["margin-bottom"]:h.edge.y=="center"?-o["margin-top"]+((o["margin-bottom"]+o["margin-top"])/2):-o["margin-top"]);}k.left=Math.ceil(k.left);
k.top=Math.ceil(k.top);if(h.returnPos){return k;}else{this.setStyles(k);}return this;}});})();Element.implement({isDisplayed:function(){return this.getStyle("display")!="none";
},isVisible:function(){var a=this.offsetWidth,b=this.offsetHeight;return(a==0&&b==0)?false:(a>0&&b>0)?true:this.isDisplayed();},toggle:function(){return this[this.isDisplayed()?"hide":"show"]();
},hide:function(){var b;try{if((b=this.getStyle("display"))=="none"){b=null;}}catch(a){}return this.store("originalDisplay",b||"block").setStyle("display","none");
},show:function(a){return this.setStyle("display",a||this.retrieve("originalDisplay")||"block");},swapClass:function(a,b){return this.removeClass(a).addClass(b);
}});if(!window.Form){window.Form={};}var InputValidator=new Class({Implements:[Options],options:{errorMsg:"Validation failed.",test:function(a){return true;
}},initialize:function(b,a){this.setOptions(a);this.className=b;},test:function(b,a){if(document.id(b)){return this.options.test(document.id(b),a||this.getProps(b));
}else{return false;}},getError:function(c,a){var b=this.options.errorMsg;if($type(b)=="function"){b=b(document.id(c),a||this.getProps(c));}return b;},getProps:function(a){if(!document.id(a)){return{};
}return a.get("validatorProps");}});Element.Properties.validatorProps={set:function(a){return this.eliminate("validatorProps").store("validatorProps",a);
},get:function(a){if(a){this.set(a);}if(this.retrieve("validatorProps")){return this.retrieve("validatorProps");}if(this.getProperty("validatorProps")){try{this.store("validatorProps",JSON.decode(this.getProperty("validatorProps")));
}catch(c){return{};}}else{var b=this.get("class").split(" ").filter(function(d){return d.test(":");});if(!b.length){this.store("validatorProps",{});}else{a={};
b.each(function(d){var f=d.split(":");if(f[1]){try{a[f[0]]=JSON.decode(f[1]);}catch(g){}}});this.store("validatorProps",a);}}return this.retrieve("validatorProps");
}};Form.Validator=new Class({Implements:[Options,Events],Binds:["onSubmit"],options:{fieldSelectors:"input, select, textarea",ignoreHidden:true,ignoreDisabled:true,useTitles:false,evaluateOnSubmit:true,evaluateFieldsOnBlur:true,evaluateFieldsOnChange:true,serial:true,stopOnFailure:true,warningPrefix:function(){return Form.Validator.getMsg("warningPrefix")||"Warning: ";
},errorPrefix:function(){return Form.Validator.getMsg("errorPrefix")||"Error: ";}},initialize:function(b,a){this.setOptions(a);this.element=document.id(b);
this.element.store("validator",this);this.warningPrefix=$lambda(this.options.warningPrefix)();this.errorPrefix=$lambda(this.options.errorPrefix)();if(this.options.evaluateOnSubmit){this.element.addEvent("submit",this.onSubmit);
}if(this.options.evaluateFieldsOnBlur||this.options.evaluateFieldsOnChange){this.watchFields(this.getFields());}},toElement:function(){return this.element;
},getFields:function(){return(this.fields=this.element.getElements(this.options.fieldSelectors));},watchFields:function(a){a.each(function(b){if(this.options.evaluateFieldsOnBlur){b.addEvent("blur",this.validationMonitor.pass([b,false],this));
}if(this.options.evaluateFieldsOnChange){b.addEvent("change",this.validationMonitor.pass([b,true],this));}},this);},validationMonitor:function(){$clear(this.timer);
this.timer=this.validateField.delay(50,this,arguments);},onSubmit:function(a){if(!this.validate(a)&&a){a.preventDefault();}else{this.reset();}},reset:function(){this.getFields().each(this.resetField,this);
return this;},validate:function(b){var a=this.getFields().map(function(c){return this.validateField(c,true);},this).every(function(c){return c;});this.fireEvent("formValidate",[a,this.element,b]);
if(this.options.stopOnFailure&&!a&&b){b.preventDefault();}return a;},validateField:function(i,a){if(this.paused){return true;}i=document.id(i);var d=!i.hasClass("validation-failed");
var f,h;if(this.options.serial&&!a){f=this.element.getElement(".validation-failed");h=this.element.getElement(".warning");}if(i&&(!f||a||i.hasClass("validation-failed")||(f&&!this.options.serial))){var c=i.className.split(" ").some(function(j){return this.getValidator(j);
},this);var g=[];i.className.split(" ").each(function(j){if(j&&!this.test(j,i)){g.include(j);}},this);d=g.length===0;if(c&&!i.hasClass("warnOnly")){if(d){i.addClass("validation-passed").removeClass("validation-failed");
this.fireEvent("elementPass",i);}else{i.addClass("validation-failed").removeClass("validation-passed");this.fireEvent("elementFail",[i,g]);}}if(!h){var e=i.className.split(" ").some(function(j){if(j.test("^warn-")||i.hasClass("warnOnly")){return this.getValidator(j.replace(/^warn-/,""));
}else{return null;}},this);i.removeClass("warning");var b=i.className.split(" ").map(function(j){if(j.test("^warn-")||i.hasClass("warnOnly")){return this.test(j.replace(/^warn-/,""),i,true);
}else{return null;}},this);}}return d;},test:function(b,d,e){d=document.id(d);if((this.options.ignoreHidden&&!d.isVisible())||(this.options.ignoreDisabled&&d.get("disabled"))){return true;
}var a=this.getValidator(b);if(d.hasClass("ignoreValidation")){return true;}e=$pick(e,false);if(d.hasClass("warnOnly")){e=true;}var c=a?a.test(d):true;
if(a&&d.isVisible()){this.fireEvent("elementValidate",[c,d,b,e]);}if(e){return true;}return c;},resetField:function(a){a=document.id(a);if(a){a.className.split(" ").each(function(b){if(b.test("^warn-")){b=b.replace(/^warn-/,"");
}a.removeClass("validation-failed");a.removeClass("warning");a.removeClass("validation-passed");},this);}return this;},stop:function(){this.paused=true;
return this;},start:function(){this.paused=false;return this;},ignoreField:function(a,b){a=document.id(a);if(a){this.enforceField(a);if(b){a.addClass("warnOnly");
}else{a.addClass("ignoreValidation");}}return this;},enforceField:function(a){a=document.id(a);if(a){a.removeClass("warnOnly").removeClass("ignoreValidation");
}return this;}});Form.Validator.getMsg=function(a){return MooTools.lang.get("Form.Validator",a);};Form.Validator.adders={validators:{},add:function(b,a){this.validators[b]=new InputValidator(b,a);
if(!this.initialize){this.implement({validators:this.validators});}},addAllThese:function(a){$A(a).each(function(b){this.add(b[0],b[1]);},this);},getValidator:function(a){return this.validators[a.split(":")[0]];
}};$extend(Form.Validator,Form.Validator.adders);Form.Validator.implement(Form.Validator.adders);Form.Validator.add("IsEmpty",{errorMsg:false,test:function(a){if(a.type=="select-one"||a.type=="select"){return !(a.selectedIndex>=0&&a.options[a.selectedIndex].value!="");
}else{return((a.get("value")==null)||(a.get("value").length==0));}}});Form.Validator.addAllThese([["required",{errorMsg:function(){return Form.Validator.getMsg("required");
},test:function(a){return !Form.Validator.getValidator("IsEmpty").test(a);}}],["minLength",{errorMsg:function(a,b){if($type(b.minLength)){return Form.Validator.getMsg("minLength").substitute({minLength:b.minLength,length:a.get("value").length});
}else{return"";}},test:function(a,b){if($type(b.minLength)){return(a.get("value").length>=$pick(b.minLength,0));}else{return true;}}}],["maxLength",{errorMsg:function(a,b){if($type(b.maxLength)){return Form.Validator.getMsg("maxLength").substitute({maxLength:b.maxLength,length:a.get("value").length});
}else{return"";}},test:function(a,b){return(a.get("value").length<=$pick(b.maxLength,10000));}}],["validate-integer",{errorMsg:Form.Validator.getMsg.pass("integer"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||(/^(-?[1-9]\d*|0)$/).test(a.get("value"));
}}],["validate-numeric",{errorMsg:Form.Validator.getMsg.pass("numeric"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||(/^-?(?:0$0(?=\d*\.)|[1-9]|0)\d*(\.\d+)?$/).test(a.get("value"));
}}],["validate-digits",{errorMsg:Form.Validator.getMsg.pass("digits"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||(/^[\d() .:\-\+#]+$/.test(a.get("value")));
}}],["validate-alpha",{errorMsg:Form.Validator.getMsg.pass("alpha"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||(/^[a-zA-Z]+$/).test(a.get("value"));
}}],["validate-alphanum",{errorMsg:Form.Validator.getMsg.pass("alphanum"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||!(/\W/).test(a.get("value"));
}}],["validate-date",{errorMsg:function(a,b){if(Date.parse){var c=b.dateFormat||"%x";return Form.Validator.getMsg("dateSuchAs").substitute({date:new Date().format(c)});
}else{return Form.Validator.getMsg("dateInFormatMDY");}},test:function(a,b){if(Form.Validator.getValidator("IsEmpty").test(a)){return true;}var g;if(Date.parse){var f=b.dateFormat||"%x";
g=Date.parse(a.get("value"));var e=g.format(f);if(e!="invalid date"){a.set("value",e);}return !isNaN(g);}else{var c=/^(\d{2})\/(\d{2})\/(\d{4})$/;if(!c.test(a.get("value"))){return false;
}g=new Date(a.get("value").replace(c,"$1/$2/$3"));return(parseInt(RegExp.$1,10)==(1+g.getMonth()))&&(parseInt(RegExp.$2,10)==g.getDate())&&(parseInt(RegExp.$3,10)==g.getFullYear());
}}}],["validate-email",{errorMsg:Form.Validator.getMsg.pass("email"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(a.get("value"));
}}],["validate-url",{errorMsg:Form.Validator.getMsg.pass("url"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||(/^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i).test(a.get("value"));
}}],["validate-currency-dollar",{errorMsg:Form.Validator.getMsg.pass("currencyDollar"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||(/^\$?\-?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}\d*(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/).test(a.get("value"));
}}],["validate-one-required",{errorMsg:Form.Validator.getMsg.pass("oneRequired"),test:function(a,b){var c=document.id(b["validate-one-required"])||a.getParent();
return c.getElements("input").some(function(d){if(["checkbox","radio"].contains(d.get("type"))){return d.get("checked");}return d.get("value");});}}]]);
Element.Properties.validator={set:function(a){var b=this.retrieve("validator");if(b){b.setOptions(a);}return this.store("validator:options");},get:function(a){if(a||!this.retrieve("validator")){if(a||!this.retrieve("validator:options")){this.set("validator",a);
}this.store("validator",new Form.Validator(this,this.retrieve("validator:options")));}return this.retrieve("validator");}};Element.implement({validate:function(a){this.set("validator",a);
return this.get("validator",a).validate();}});var FormValidator=Form.Validator;Form.Validator.Inline=new Class({Extends:Form.Validator,options:{scrollToErrorsOnSubmit:true,scrollFxOptions:{transition:"quad:out",offset:{y:-20}}},initialize:function(b,a){this.parent(b,a);
this.addEvent("onElementValidate",function(g,f,e,h){var d=this.getValidator(e);if(!g&&d.getError(f)){if(h){f.addClass("warning");}var c=this.makeAdvice(e,f,d.getError(f),h);
this.insertAdvice(c,f);this.showAdvice(e,f);}else{this.hideAdvice(e,f);}});},makeAdvice:function(d,f,c,g){var e=(g)?this.warningPrefix:this.errorPrefix;
e+=(this.options.useTitles)?f.title||c:c;var a=(g)?"warning-advice":"validation-advice";var b=this.getAdvice(d,f);if(b){b=b.set("html",e);}else{b=new Element("div",{html:e,styles:{display:"none"},id:"advice-"+d+"-"+this.getFieldId(f)}).addClass(a);
}f.store("advice-"+d,b);return b;},getFieldId:function(a){return a.id?a.id:a.id="input_"+a.name;},showAdvice:function(b,c){var a=this.getAdvice(b,c);if(a&&!c.retrieve(this.getPropName(b))&&(a.getStyle("display")=="none"||a.getStyle("visiblity")=="hidden"||a.getStyle("opacity")==0)){c.store(this.getPropName(b),true);
if(a.reveal){a.reveal();}else{a.setStyle("display","block");}}},hideAdvice:function(b,c){var a=this.getAdvice(b,c);if(a&&c.retrieve(this.getPropName(b))){c.store(this.getPropName(b),false);
if(a.dissolve){a.dissolve();}else{a.setStyle("display","none");}}},getPropName:function(a){return"advice"+a;},resetField:function(a){a=document.id(a);if(!a){return this;
}this.parent(a);a.className.split(" ").each(function(b){this.hideAdvice(b,a);},this);return this;},getAllAdviceMessages:function(d,c){var b=[];if(d.hasClass("ignoreValidation")&&!c){return b;
}var a=d.className.split(" ").some(function(g){var e=g.test("^warn-")||d.hasClass("warnOnly");if(e){g=g.replace(/^warn-/,"");}var f=this.getValidator(g);
if(!f){return;}b.push({message:f.getError(d),warnOnly:e,passed:f.test(),validator:f});},this);return b;},getAdvice:function(a,b){return b.retrieve("advice-"+a);
},insertAdvice:function(a,c){var b=c.get("validatorProps");if(!b.msgPos||!document.id(b.msgPos)){if(c.type.toLowerCase()=="radio"){c.getParent().adopt(a);
}else{a.inject(document.id(c),"after");}}else{document.id(b.msgPos).grab(a);}},validateField:function(f,e){var a=this.parent(f,e);if(this.options.scrollToErrorsOnSubmit&&!a){var b=document.id(this).getElement(".validation-failed");
var c=document.id(this).getParent();while(c!=document.body&&c.getScrollSize().y==c.getSize().y){c=c.getParent();}var d=c.retrieve("fvScroller");if(!d&&window.Fx&&Fx.Scroll){d=new Fx.Scroll(c,this.options.scrollFxOptions);
c.store("fvScroller",d);}if(b){if(d){d.toElement(b);}else{c.scrollTo(c.getScroll().x,b.getPosition(c).y-20);}}}return a;}});Form.Validator.addAllThese([["validate-enforce-oncheck",{test:function(a,b){if(a.checked){var c=a.getParent("form").retrieve("validator");
if(!c){return true;}(b.toEnforce||document.id(b.enforceChildrenOf).getElements("input, select, textarea")).map(function(d){c.enforceField(d);});}return true;
}}],["validate-ignore-oncheck",{test:function(a,b){if(a.checked){var c=a.getParent("form").retrieve("validator");if(!c){return true;}(b.toIgnore||document.id(b.ignoreChildrenOf).getElements("input, select, textarea")).each(function(d){c.ignoreField(d);
c.resetField(d);});}return true;}}],["validate-nospace",{errorMsg:function(){return Form.Validator.getMsg("noSpace");},test:function(a,b){return !a.get("value").test(/\s/);
}}],["validate-toggle-oncheck",{test:function(b,c){var d=b.getParent("form").retrieve("validator");if(!d){return true;}var a=c.toToggle||document.id(c.toToggleChildrenOf).getElements("input, select, textarea");
if(!b.checked){a.each(function(e){d.ignoreField(e);d.resetField(e);});}else{a.each(function(e){d.enforceField(e);});}return true;}}],["validate-reqchk-bynode",{errorMsg:function(){return Form.Validator.getMsg("reqChkByNode");
},test:function(a,b){return(document.id(b.nodeId).getElements(b.selector||"input[type=checkbox], input[type=radio]")).some(function(c){return c.checked;
});}}],["validate-required-check",{errorMsg:function(a,b){return b.useTitle?a.get("title"):Form.Validator.getMsg("requiredChk");},test:function(a,b){return !!a.checked;
}}],["validate-reqchk-byname",{errorMsg:function(a,b){return Form.Validator.getMsg("reqChkByName").substitute({label:b.label||a.get("type")});},test:function(b,d){var c=d.groupName||b.get("name");
var a=$$(document.getElementsByName(c)).some(function(g,f){return g.checked;});var e=b.getParent("form").retrieve("validator");if(a&&e){e.resetField(b);
}return a;}}],["validate-match",{errorMsg:function(a,b){return Form.Validator.getMsg("match").substitute({matchName:b.matchName||document.id(b.matchInput).get("name")});
},test:function(b,c){var d=b.get("value");var a=document.id(c.matchInput)&&document.id(c.matchInput).get("value");return d&&a?d==a:true;}}],["validate-after-date",{errorMsg:function(a,b){return Form.Validator.getMsg("afterDate").substitute({label:b.afterLabel||(b.afterElement?Form.Validator.getMsg("startDate"):Form.Validator.getMsg("currentDate"))});
},test:function(b,c){var d=document.id(c.afterElement)?Date.parse(document.id(c.afterElement).get("value")):new Date();var a=Date.parse(b.get("value"));
return a&&d?a>=d:true;}}],["validate-before-date",{errorMsg:function(a,b){return Form.Validator.getMsg("beforeDate").substitute({label:b.beforeLabel||(b.beforeElement?Form.Validator.getMsg("endDate"):Form.Validator.getMsg("currentDate"))});
},test:function(b,c){var d=Date.parse(b.get("value"));var a=document.id(c.beforeElement)?Date.parse(document.id(c.beforeElement).get("value")):new Date();
return a&&d?a>=d:true;}}],["validate-custom-required",{errorMsg:function(){return Form.Validator.getMsg("required");},test:function(a,b){return a.get("value")!=b.emptyValue;
}}],["validate-same-month",{errorMsg:function(a,b){var c=document.id(b.sameMonthAs)&&document.id(b.sameMonthAs).get("value");var d=a.get("value");if(d!=""){return Form.Validator.getMsg(c?"sameMonth":"startMonth");
}},test:function(a,b){var d=Date.parse(a.get("value"));var c=Date.parse(document.id(b.sameMonthAs)&&document.id(b.sameMonthAs).get("value"));return d&&c?d.format("%B")==c.format("%B"):true;
}}],["validate-cc-num",{errorMsg:function(a){var b=a.get("value").ccNum.replace(/[^0-9]/g,"");return Form.Validator.getMsg("creditcard").substitute({length:b.length});
},test:function(c){if(Form.Validator.getValidator("IsEmpty").test(c)){return true;}var g=c.get("value");g=g.replace(/[^0-9]/g,"");var a=false;if(g.test(/^4[0-9]{12}([0-9]{3})?$/)){a="Visa";
}else{if(g.test(/^5[1-5]([0-9]{14})$/)){a="Master Card";}else{if(g.test(/^3[47][0-9]{13}$/)){a="American Express";}else{if(g.test(/^6011[0-9]{12}$/)){a="Discover";
}}}}if(a){var d=0;var e=0;for(var b=g.length-1;b>=0;--b){e=g.charAt(b).toInt();if(e==0){continue;}if((g.length-b)%2==0){e+=e;}if(e>9){e=e.toString().charAt(0).toInt()+e.toString().charAt(1).toInt();
}d+=e;}if((d%10)==0){return true;}}var f="";while(g!=""){f+=" "+g.substr(0,4);g=g.substr(4);}c.getParent("form").retrieve("validator").ignoreField(c);c.set("value",f.clean());
c.getParent("form").retrieve("validator").enforceField(c);return false;}}]]);var OverText=new Class({Implements:[Options,Events,Class.Occlude],Binds:["reposition","assert","focus","hide"],options:{element:"label",positionOptions:{position:"upperLeft",edge:"upperLeft",offset:{x:4,y:2}},poll:false,pollInterval:250,wrap:false},property:"OverText",initialize:function(b,a){this.element=document.id(b);
if(this.occlude()){return this.occluded;}this.setOptions(a);this.attach(this.element);OverText.instances.push(this);if(this.options.poll){this.poll();}return this;
},toElement:function(){return this.element;},attach:function(){var a=this.options.textOverride||this.element.get("alt")||this.element.get("title");if(!a){return;
}this.text=new Element(this.options.element,{"class":"overTxtLabel",styles:{lineHeight:"normal",position:"absolute",cursor:"text"},html:a,events:{click:this.hide.pass(this.options.element=="label",this)}}).inject(this.element,"after");
if(this.options.element=="label"){if(!this.element.get("id")){this.element.set("id","input_"+new Date().getTime());}this.text.set("for",this.element.get("id"));
}if(this.options.wrap){this.textHolder=new Element("div",{styles:{lineHeight:"normal",position:"relative"},"class":"overTxtWrapper"}).adopt(this.text).inject(this.element,"before");
}this.element.addEvents({focus:this.focus,blur:this.assert,change:this.assert}).store("OverTextDiv",this.text);window.addEvent("resize",this.reposition.bind(this));
this.assert(true);this.reposition();},wrap:function(){if(this.options.element=="label"){if(!this.element.get("id")){this.element.set("id","input_"+new Date().getTime());
}this.text.set("for",this.element.get("id"));}},startPolling:function(){this.pollingPaused=false;return this.poll();},poll:function(a){if(this.poller&&!a){return this;
}var b=function(){if(!this.pollingPaused){this.assert(true);}}.bind(this);if(a){$clear(this.poller);}else{this.poller=b.periodical(this.options.pollInterval,this);
}return this;},stopPolling:function(){this.pollingPaused=true;return this.poll(true);},focus:function(){if(this.text&&(!this.text.isDisplayed()||this.element.get("disabled"))){return;
}this.hide();},hide:function(c,a){if(this.text&&(this.text.isDisplayed()&&(!this.element.get("disabled")||a))){this.text.hide();this.fireEvent("textHide",[this.text,this.element]);
this.pollingPaused=true;try{if(!c){this.element.fireEvent("focus");}this.element.focus();}catch(b){}}return this;},show:function(){if(this.text&&!this.text.isDisplayed()){this.text.show();
this.reposition();this.fireEvent("textShow",[this.text,this.element]);this.pollingPaused=false;}return this;},assert:function(a){this[this.test()?"show":"hide"](a);
},test:function(){var a=this.element.get("value");return !a;},reposition:function(){this.assert(true);if(!this.element.isVisible()){return this.stopPolling().hide();
}if(this.text&&this.test()){this.text.position($merge(this.options.positionOptions,{relativeTo:this.element}));}return this;}});OverText.instances=[];$extend(OverText,{each:function(a){return OverText.instances.map(function(c,b){if(c.element&&c.text){return a.apply(OverText,[c,b]);
}return null;});},update:function(){return OverText.each(function(a){return a.reposition();});},hideAll:function(){return OverText.each(function(a){return a.hide(true,true);
});},showAll:function(){return OverText.each(function(a){return a.show();});}});if(window.Fx&&Fx.Reveal){Fx.Reveal.implement({hideInputs:Browser.Engine.trident?"select, input, textarea, object, embed, .overTxtLabel":false});
}Fx.Elements=new Class({Extends:Fx.CSS,initialize:function(b,a){this.elements=this.subject=$$(b);this.parent(a);},compute:function(g,h,j){var c={};for(var d in g){var a=g[d],e=h[d],f=c[d]={};
for(var b in a){f[b]=this.parent(a[b],e[b],j);}}return c;},set:function(b){for(var c in b){var a=b[c];for(var d in a){this.render(this.elements[c],d,a[d],this.options.unit);
}}return this;},start:function(c){if(!this.check(c)){return this;}var h={},j={};for(var d in c){var f=c[d],a=h[d]={},g=j[d]={};for(var b in f){var e=this.prepare(this.elements[d],b,f[b]);
a[b]=e.from;g[b]=e.to;}}return this.parent(h,j);}});Fx.Move=new Class({Extends:Fx.Morph,options:{relativeTo:document.body,position:"center",edge:false,offset:{x:0,y:0}},start:function(a){return this.parent(this.element.position($merge(this.options,a,{returnPos:true})));
}});Element.Properties.move={set:function(a){var b=this.retrieve("move");if(b){b.cancel();}return this.eliminate("move").store("move:options",$extend({link:"cancel"},a));
},get:function(a){if(a||!this.retrieve("move")){if(a||!this.retrieve("move:options")){this.set("move",a);}this.store("move",new Fx.Move(this,this.retrieve("move:options")));
}return this.retrieve("move");}};Element.implement({move:function(a){this.get("move").start(a);return this;}});Fx.Reveal=new Class({Extends:Fx.Morph,options:{link:"cancel",styles:["padding","border","margin"],transitionOpacity:!Browser.Engine.trident4,mode:"vertical",display:"block",hideInputs:Browser.Engine.trident?"select, input, textarea, object, embed":false},dissolve:function(){try{if(!this.hiding&&!this.showing){if(this.element.getStyle("display")!="none"){this.hiding=true;
this.showing=false;this.hidden=true;this.cssText=this.element.style.cssText;var d=this.element.getComputedSize({styles:this.options.styles,mode:this.options.mode});
this.element.setStyle("display","block");if(this.options.transitionOpacity){d.opacity=1;}var b={};$each(d,function(f,e){b[e]=[f,0];},this);this.element.setStyle("overflow","hidden");
var a=this.options.hideInputs?this.element.getElements(this.options.hideInputs):null;this.$chain.unshift(function(){if(this.hidden){this.hiding=false;$each(d,function(f,e){d[e]=f;
},this);this.element.style.cssText=this.cssText;this.element.setStyle("display","none");if(a){a.setStyle("visibility","visible");}}this.fireEvent("hide",this.element);
this.callChain();}.bind(this));if(a){a.setStyle("visibility","hidden");}this.start(b);}else{this.callChain.delay(10,this);this.fireEvent("complete",this.element);
this.fireEvent("hide",this.element);}}else{if(this.options.link=="chain"){this.chain(this.dissolve.bind(this));}else{if(this.options.link=="cancel"&&!this.hiding){this.cancel();
this.dissolve();}}}}catch(c){this.hiding=false;this.element.setStyle("display","none");this.callChain.delay(10,this);this.fireEvent("complete",this.element);
this.fireEvent("hide",this.element);}return this;},reveal:function(){try{if(!this.showing&&!this.hiding){if(this.element.getStyle("display")=="none"||this.element.getStyle("visiblity")=="hidden"||this.element.getStyle("opacity")==0){this.showing=true;
this.hiding=this.hidden=false;var d;this.cssText=this.element.style.cssText;this.element.measure(function(){d=this.element.getComputedSize({styles:this.options.styles,mode:this.options.mode});
}.bind(this));$each(d,function(f,e){d[e]=f;});if($chk(this.options.heightOverride)){d.height=this.options.heightOverride.toInt();}if($chk(this.options.widthOverride)){d.width=this.options.widthOverride.toInt();
}if(this.options.transitionOpacity){this.element.setStyle("opacity",0);d.opacity=1;}var b={height:0,display:this.options.display};$each(d,function(f,e){b[e]=0;
});this.element.setStyles($merge(b,{overflow:"hidden"}));var a=this.options.hideInputs?this.element.getElements(this.options.hideInputs):null;if(a){a.setStyle("visibility","hidden");
}this.start(d);this.$chain.unshift(function(){this.element.style.cssText=this.cssText;this.element.setStyle("display",this.options.display);if(!this.hidden){this.showing=false;
}if(a){a.setStyle("visibility","visible");}this.callChain();this.fireEvent("show",this.element);}.bind(this));}else{this.callChain();this.fireEvent("complete",this.element);
this.fireEvent("show",this.element);}}else{if(this.options.link=="chain"){this.chain(this.reveal.bind(this));}else{if(this.options.link=="cancel"&&!this.showing){this.cancel();
this.reveal();}}}}catch(c){this.element.setStyles({display:this.options.display,visiblity:"visible",opacity:1});this.showing=false;this.callChain.delay(10,this);
this.fireEvent("complete",this.element);this.fireEvent("show",this.element);}return this;},toggle:function(){if(this.element.getStyle("display")=="none"||this.element.getStyle("visiblity")=="hidden"||this.element.getStyle("opacity")==0){this.reveal();
}else{this.dissolve();}return this;},cancel:function(){this.parent.apply(this,arguments);this.element.style.cssText=this.cssText;this.hidding=false;this.showing=false;
}});Element.Properties.reveal={set:function(a){var b=this.retrieve("reveal");if(b){b.cancel();}return this.eliminate("reveal").store("reveal:options",a);
},get:function(a){if(a||!this.retrieve("reveal")){if(a||!this.retrieve("reveal:options")){this.set("reveal",a);}this.store("reveal",new Fx.Reveal(this,this.retrieve("reveal:options")));
}return this.retrieve("reveal");}};Element.Properties.dissolve=Element.Properties.reveal;Element.implement({reveal:function(a){this.get("reveal",a).reveal();
return this;},dissolve:function(a){this.get("reveal",a).dissolve();return this;},nix:function(){var a=Array.link(arguments,{destroy:Boolean.type,options:Object.type});
this.get("reveal",a.options).dissolve().chain(function(){this[a.destroy?"destroy":"dispose"]();}.bind(this));return this;},wink:function(){var b=Array.link(arguments,{duration:Number.type,options:Object.type});
var a=this.get("reveal",b.options);a.reveal().chain(function(){(function(){a.dissolve();}).delay(b.duration||2000);});}});Fx.Scroll=new Class({Extends:Fx,options:{offset:{x:0,y:0},wheelStops:true},initialize:function(b,a){this.element=this.subject=document.id(b);
this.parent(a);var d=this.cancel.bind(this,false);if($type(this.element)!="element"){this.element=document.id(this.element.getDocument().body);}var c=this.element;
if(this.options.wheelStops){this.addEvent("start",function(){c.addEvent("mousewheel",d);},true);this.addEvent("complete",function(){c.removeEvent("mousewheel",d);
},true);}},set:function(){var a=Array.flatten(arguments);if(Browser.Engine.gecko){a=[Math.round(a[0]),Math.round(a[1])];}this.element.scrollTo(a[0],a[1]);
},compute:function(c,b,a){return[0,1].map(function(d){return Fx.compute(c[d],b[d],a);});},start:function(c,g){if(!this.check(c,g)){return this;}var e=this.element.getScrollSize(),b=this.element.getScroll(),d={x:c,y:g};
for(var f in d){var a=e[f];if($chk(d[f])){d[f]=($type(d[f])=="number")?d[f]:a;}else{d[f]=b[f];}d[f]+=this.options.offset[f];}return this.parent([b.x,b.y],[d.x,d.y]);
},toTop:function(){return this.start(false,0);},toLeft:function(){return this.start(0,false);},toRight:function(){return this.start("right",false);},toBottom:function(){return this.start(false,"bottom");
},toElement:function(b){var a=document.id(b).getPosition(this.element);return this.start(a.x,a.y);},scrollIntoView:function(c,e,d){e=e?$splat(e):["x","y"];
var h={};c=document.id(c);var f=c.getPosition(this.element);var i=c.getSize();var g=this.element.getScroll();var a=this.element.getSize();var b={x:f.x+i.x,y:f.y+i.y};
["x","y"].each(function(j){if(e.contains(j)){if(b[j]>g[j]+a[j]){h[j]=b[j]-a[j];}if(f[j]<g[j]){h[j]=f[j];}}if(h[j]==null){h[j]=g[j];}if(d&&d[j]){h[j]=h[j]+d[j];
}},this);if(h.x!=g.x||h.y!=g.y){this.start(h.x,h.y);}return this;},scrollToCenter:function(c,e,d){e=e?$splat(e):["x","y"];c=$(c);var h={},f=c.getPosition(this.element),i=c.getSize(),g=this.element.getScroll(),a=this.element.getSize(),b={x:f.x+i.x,y:f.y+i.y};
["x","y"].each(function(j){if(e.contains(j)){h[j]=f[j]-(a[j]-i[j])/2;}if(h[j]==null){h[j]=g[j];}if(d&&d[j]){h[j]=h[j]+d[j];}},this);if(h.x!=g.x||h.y!=g.y){this.start(h.x,h.y);
}return this;}});var SmoothScroll=Fx.SmoothScroll=new Class({Extends:Fx.Scroll,initialize:function(b,c){c=c||document;this.doc=c.getDocument();var d=c.getWindow();
this.parent(this.doc,b);this.links=$$(this.options.links||this.doc.links);var a=d.location.href.match(/^[^#]*/)[0]+"#";this.links.each(function(f){if(f.href.indexOf(a)!=0){return;
}var e=f.href.substr(a.length);if(e){this.useLink(f,e);}},this);if(!Browser.Engine.webkit419){this.addEvent("complete",function(){d.location.hash=this.anchor;
},true);}},useLink:function(c,a){var b;c.addEvent("click",function(d){if(b!==false&&!b){b=document.id(a)||this.doc.getElement("a[name="+a+"]");}if(b){d.preventDefault();
this.anchor=a;this.toElement(b).chain(function(){this.fireEvent("scrolledTo",[c,b]);}.bind(this));c.blur();}}.bind(this));}});var Drag=new Class({Implements:[Events,Options],options:{snap:6,unit:"px",grid:false,style:true,limit:false,handle:false,invert:false,preventDefault:false,stopPropagation:false,modifiers:{x:"left",y:"top"}},initialize:function(){var b=Array.link(arguments,{options:Object.type,element:$defined});
this.element=document.id(b.element);this.document=this.element.getDocument();this.setOptions(b.options||{});var a=$type(this.options.handle);this.handles=((a=="array"||a=="collection")?$$(this.options.handle):document.id(this.options.handle))||this.element;
this.mouse={now:{},pos:{}};this.value={start:{},now:{}};this.selection=(Browser.Engine.trident)?"selectstart":"mousedown";this.bound={start:this.start.bind(this),check:this.check.bind(this),drag:this.drag.bind(this),stop:this.stop.bind(this),cancel:this.cancel.bind(this),eventStop:$lambda(false)};
this.attach();},attach:function(){this.handles.addEvent("mousedown",this.bound.start);return this;},detach:function(){this.handles.removeEvent("mousedown",this.bound.start);
return this;},start:function(c){if(c.rightClick){return;}if(this.options.preventDefault){c.preventDefault();}if(this.options.stopPropagation){c.stopPropagation();
}this.mouse.start=c.page;this.fireEvent("beforeStart",this.element);var a=this.options.limit;this.limit={x:[],y:[]};for(var d in this.options.modifiers){if(!this.options.modifiers[d]){continue;
}if(this.options.style){this.value.now[d]=this.element.getStyle(this.options.modifiers[d]).toInt();}else{this.value.now[d]=this.element[this.options.modifiers[d]];
}if(this.options.invert){this.value.now[d]*=-1;}this.mouse.pos[d]=c.page[d]-this.value.now[d];if(a&&a[d]){for(var b=2;b--;b){if($chk(a[d][b])){this.limit[d][b]=$lambda(a[d][b])();
}}}}if($type(this.options.grid)=="number"){this.options.grid={x:this.options.grid,y:this.options.grid};}this.document.addEvents({mousemove:this.bound.check,mouseup:this.bound.cancel});
this.document.addEvent(this.selection,this.bound.eventStop);},check:function(a){if(this.options.preventDefault){a.preventDefault();}var b=Math.round(Math.sqrt(Math.pow(a.page.x-this.mouse.start.x,2)+Math.pow(a.page.y-this.mouse.start.y,2)));
if(b>this.options.snap){this.cancel();this.document.addEvents({mousemove:this.bound.drag,mouseup:this.bound.stop});this.fireEvent("start",[this.element,a]).fireEvent("snap",this.element);
}},drag:function(a){if(this.options.preventDefault){a.preventDefault();}this.mouse.now=a.page;for(var b in this.options.modifiers){if(!this.options.modifiers[b]){continue;
}this.value.now[b]=this.mouse.now[b]-this.mouse.pos[b];if(this.options.invert){this.value.now[b]*=-1;}if(this.options.limit&&this.limit[b]){if($chk(this.limit[b][1])&&(this.value.now[b]>this.limit[b][1])){this.value.now[b]=this.limit[b][1];
}else{if($chk(this.limit[b][0])&&(this.value.now[b]<this.limit[b][0])){this.value.now[b]=this.limit[b][0];}}}if(this.options.grid[b]){this.value.now[b]-=((this.value.now[b]-(this.limit[b][0]||0))%this.options.grid[b]);
}if(this.options.style){this.element.setStyle(this.options.modifiers[b],this.value.now[b]+this.options.unit);}else{this.element[this.options.modifiers[b]]=this.value.now[b];
}}this.fireEvent("drag",[this.element,a]);},cancel:function(a){this.document.removeEvent("mousemove",this.bound.check);this.document.removeEvent("mouseup",this.bound.cancel);
if(a){this.document.removeEvent(this.selection,this.bound.eventStop);this.fireEvent("cancel",this.element);}},stop:function(a){this.document.removeEvent(this.selection,this.bound.eventStop);
this.document.removeEvent("mousemove",this.bound.drag);this.document.removeEvent("mouseup",this.bound.stop);if(a){this.fireEvent("complete",[this.element,a]);
}}});Element.implement({makeResizable:function(a){var b=new Drag(this,$merge({modifiers:{x:"width",y:"height"}},a));this.store("resizer",b);return b.addEvent("drag",function(){this.fireEvent("resize",b);
}.bind(this));}});Drag.Move=new Class({Extends:Drag,options:{droppables:[],container:false,precalculate:false,includeMargins:true,checkDroppables:true},initialize:function(b,a){this.parent(b,a);
b=this.element;this.droppables=$$(this.options.droppables);this.container=document.id(this.options.container);if(this.container&&$type(this.container)!="element"){this.container=document.id(this.container.getDocument().body);
}var c=b.getStyles("left","right","position");if(c.left=="auto"||c.top=="auto"){b.setPosition(b.getPosition(b.getOffsetParent()));}if(c.position=="static"){b.setStyle("position","absolute");
}this.addEvent("start",this.checkDroppables,true);this.overed=null;},start:function(a){if(this.container){this.options.limit=this.calculateLimit();}if(this.options.precalculate){this.positions=this.droppables.map(function(b){return b.getCoordinates();
});}this.parent(a);},calculateLimit:function(){var d=this.element.getOffsetParent(),g=this.container.getCoordinates(d),f={},c={},b={},i={},k={};["top","right","bottom","left"].each(function(o){f[o]=this.container.getStyle("border-"+o).toInt();
b[o]=this.element.getStyle("border-"+o).toInt();c[o]=this.element.getStyle("margin-"+o).toInt();i[o]=this.container.getStyle("margin-"+o).toInt();k[o]=d.getStyle("padding-"+o).toInt();
},this);var e=this.element.offsetWidth+c.left+c.right,n=this.element.offsetHeight+c.top+c.bottom,h=0,j=0,m=g.right-f.right-e,a=g.bottom-f.bottom-n;if(this.options.includeMargins){h+=c.left;
j+=c.top;}else{m+=c.right;a+=c.bottom;}if(this.element.getStyle("position")=="relative"){var l=this.element.getCoordinates(d);l.left-=this.element.getStyle("left").toInt();
l.top-=this.element.getStyle("top").toInt();h+=f.left-l.left;j+=f.top-l.top;m+=c.left-l.left;a+=c.top-l.top;if(this.container!=d){h+=i.left+k.left;j+=(Browser.Engine.trident4?0:i.top)+k.top;
}}else{h-=c.left;j-=c.top;if(this.container==d){m-=f.left;a-=f.top;}else{h+=g.left+f.left;j+=g.top+f.top;}}return{x:[h,m],y:[j,a]};},checkAgainst:function(c,b){c=(this.positions)?this.positions[b]:c.getCoordinates();
var a=this.mouse.now;return(a.x>c.left&&a.x<c.right&&a.y<c.bottom&&a.y>c.top);},checkDroppables:function(){var a=this.droppables.filter(this.checkAgainst,this).getLast();
if(this.overed!=a){if(this.overed){this.fireEvent("leave",[this.element,this.overed]);}if(a){this.fireEvent("enter",[this.element,a]);}this.overed=a;}},drag:function(a){this.parent(a);
if(this.options.checkDroppables&&this.droppables.length){this.checkDroppables();}},stop:function(a){this.checkDroppables();this.fireEvent("drop",[this.element,this.overed,a]);
this.overed=null;return this.parent(a);}});Element.implement({makeDraggable:function(a){var b=new Drag.Move(this,a);this.store("dragger",b);return b;}});
var Slider=new Class({Implements:[Events,Options],Binds:["clickedElement","draggedKnob","scrolledElement"],options:{onTick:function(a){if(this.options.snap){a=this.toPosition(this.step);
}this.knob.setStyle(this.property,a);},initialStep:0,snap:false,offset:0,range:false,wheel:false,steps:100,mode:"horizontal"},initialize:function(f,a,e){this.setOptions(e);
this.element=document.id(f);this.knob=document.id(a);this.previousChange=this.previousEnd=this.step=-1;var g,b={},d={x:false,y:false};switch(this.options.mode){case"vertical":this.axis="y";
this.property="top";g="offsetHeight";break;case"horizontal":this.axis="x";this.property="left";g="offsetWidth";}this.full=this.element.measure(function(){this.half=this.knob[g]/2;
return this.element[g]-this.knob[g]+(this.options.offset*2);}.bind(this));this.min=$chk(this.options.range[0])?this.options.range[0]:0;this.max=$chk(this.options.range[1])?this.options.range[1]:this.options.steps;
this.range=this.max-this.min;this.steps=this.options.steps||this.full;this.stepSize=Math.abs(this.range)/this.steps;this.stepWidth=this.stepSize*this.full/Math.abs(this.range);
this.knob.setStyle("position","relative").setStyle(this.property,this.options.initialStep?this.toPosition(this.options.initialStep):-this.options.offset);
d[this.axis]=this.property;b[this.axis]=[-this.options.offset,this.full-this.options.offset];var c={snap:0,limit:b,modifiers:d,onDrag:this.draggedKnob,onStart:this.draggedKnob,onBeforeStart:(function(){this.isDragging=true;
}).bind(this),onCancel:function(){this.isDragging=false;}.bind(this),onComplete:function(){this.isDragging=false;this.draggedKnob();this.end();}.bind(this)};
if(this.options.snap){c.grid=Math.ceil(this.stepWidth);c.limit[this.axis][1]=this.full;}this.drag=new Drag(this.knob,c);this.attach();},attach:function(){this.element.addEvent("mousedown",this.clickedElement);
if(this.options.wheel){this.element.addEvent("mousewheel",this.scrolledElement);}this.drag.attach();return this;},detach:function(){this.element.removeEvent("mousedown",this.clickedElement);
this.element.removeEvent("mousewheel",this.scrolledElement);this.drag.detach();return this;},set:function(a){if(!((this.range>0)^(a<this.min))){a=this.min;
}if(!((this.range>0)^(a>this.max))){a=this.max;}this.step=Math.round(a);this.checkStep();this.fireEvent("tick",this.toPosition(this.step));this.end();return this;
},clickedElement:function(c){if(this.isDragging||c.target==this.knob){return;}var b=this.range<0?-1:1;var a=c.page[this.axis]-this.element.getPosition()[this.axis]-this.half;
a=a.limit(-this.options.offset,this.full-this.options.offset);this.step=Math.round(this.min+b*this.toStep(a));this.checkStep();this.fireEvent("tick",a);
this.end();},scrolledElement:function(a){var b=(this.options.mode=="horizontal")?(a.wheel<0):(a.wheel>0);this.set(b?this.step-this.stepSize:this.step+this.stepSize);
a.stop();},draggedKnob:function(){var b=this.range<0?-1:1;var a=this.drag.value.now[this.axis];a=a.limit(-this.options.offset,this.full-this.options.offset);
this.step=Math.round(this.min+b*this.toStep(a));this.checkStep();},checkStep:function(){if(this.previousChange!=this.step){this.previousChange=this.step;
this.fireEvent("change",this.step);}},end:function(){if(this.previousEnd!==this.step){this.previousEnd=this.step;this.fireEvent("complete",this.step+"");
}},toStep:function(a){var b=(a+this.options.offset)*this.stepSize/this.full*this.steps;return this.options.steps?Math.round(b-=b%this.stepSize):b;},toPosition:function(a){return(this.full*Math.abs(this.min-a))/(this.steps*this.stepSize)-this.options.offset;
}});var Sortables=new Class({Implements:[Events,Options],options:{snap:4,opacity:1,clone:false,revert:false,handle:false,constrain:false},initialize:function(a,b){this.setOptions(b);
this.elements=[];this.lists=[];this.idle=true;this.addLists($$(document.id(a)||a));if(!this.options.clone){this.options.revert=false;}if(this.options.revert){this.effect=new Fx.Morph(null,$merge({duration:250,link:"cancel"},this.options.revert));
}},attach:function(){this.addLists(this.lists);return this;},detach:function(){this.lists=this.removeLists(this.lists);return this;},addItems:function(){Array.flatten(arguments).each(function(a){this.elements.push(a);
var b=a.retrieve("sortables:start",this.start.bindWithEvent(this,a));(this.options.handle?a.getElement(this.options.handle)||a:a).addEvent("mousedown",b);
},this);return this;},addLists:function(){Array.flatten(arguments).each(function(a){this.lists.push(a);this.addItems(a.getChildren());},this);return this;
},removeItems:function(){return $$(Array.flatten(arguments).map(function(a){this.elements.erase(a);var b=a.retrieve("sortables:start");(this.options.handle?a.getElement(this.options.handle)||a:a).removeEvent("mousedown",b);
return a;},this));},removeLists:function(){return $$(Array.flatten(arguments).map(function(a){this.lists.erase(a);this.removeItems(a.getChildren());return a;
},this));},getClone:function(b,a){if(!this.options.clone){return new Element("div").inject(document.body);}if($type(this.options.clone)=="function"){return this.options.clone.call(this,b,a,this.list);
}return a.clone(true).setStyles({margin:"0px",position:"absolute",visibility:"hidden",width:a.getStyle("width")}).inject(this.list).setPosition(a.getPosition(a.getOffsetParent()));
},getDroppables:function(){var a=this.list.getChildren();if(!this.options.constrain){a=this.lists.concat(a).erase(this.list);}return a.erase(this.clone).erase(this.element);
},insert:function(c,b){var a="inside";if(this.lists.contains(b)){this.list=b;this.drag.droppables=this.getDroppables();}else{a=this.element.getAllPrevious().contains(b)?"before":"after";
}this.element.inject(b,a);this.fireEvent("sort",[this.element,this.clone]);},start:function(b,a){if(!this.idle){return;}this.idle=false;this.element=a;
this.opacity=a.get("opacity");this.list=a.getParent();this.clone=this.getClone(b,a);this.drag=new Drag.Move(this.clone,{snap:this.options.snap,container:this.options.constrain&&this.element.getParent(),droppables:this.getDroppables(),onSnap:function(){b.stop();
this.clone.setStyle("visibility","visible");this.element.set("opacity",this.options.opacity||0);this.fireEvent("start",[this.element,this.clone]);}.bind(this),onEnter:this.insert.bind(this),onCancel:this.reset.bind(this),onComplete:this.end.bind(this)});
this.clone.inject(this.element,"before");this.drag.start(b);},end:function(){this.drag.detach();this.element.set("opacity",this.opacity);if(this.effect){var a=this.element.getStyles("width","height");
var b=this.clone.computePosition(this.element.getPosition(this.clone.offsetParent));this.effect.element=this.clone;this.effect.start({top:b.top,left:b.left,width:a.width,height:a.height,opacity:0.25}).chain(this.reset.bind(this));
}else{this.reset();}},reset:function(){this.idle=true;this.clone.destroy();this.fireEvent("complete",this.element);},serialize:function(){var c=Array.link(arguments,{modifier:Function.type,index:$defined});
var b=this.lists.map(function(d){return d.getChildren().map(c.modifier||function(e){return e.get("id");},this);},this);var a=c.index;if(this.lists.length==1){a=0;
}return $chk(a)&&a>=0&&a<this.lists.length?b[a]:b;}});var Asset={javascript:function(f,d){d=$extend({onload:$empty,document:document,check:$lambda(true)},d);
var b=new Element("script",{src:f,type:"text/javascript"});var e=d.onload.bind(b),a=d.check,g=d.document;delete d.onload;delete d.check;delete d.document;
b.addEvents({load:e,readystatechange:function(){if(["loaded","complete"].contains(this.readyState)){e();}}}).set(d);if(Browser.Engine.webkit419){var c=(function(){if(!$try(a)){return;
}$clear(c);e();}).periodical(50);}return b.inject(g.head);},css:function(b,a){return new Element("link",$merge({rel:"stylesheet",media:"screen",type:"text/css",href:b},a)).inject(document.head);
},image:function(c,b){b=$merge({onload:$empty,onabort:$empty,onerror:$empty},b);var d=new Image();var a=document.id(d)||new Element("img");["load","abort","error"].each(function(e){var f="on"+e;
var g=b[f];delete b[f];d[f]=function(){if(!d){return;}if(!a.parentNode){a.width=d.width;a.height=d.height;}d=d.onload=d.onabort=d.onerror=null;g.delay(1,a,a);
a.fireEvent(e,a,1);};});d.src=a.src=c;if(d&&d.complete){d.onload.delay(1);}return a.set(b);},images:function(d,c){c=$merge({onComplete:$empty,onProgress:$empty,onError:$empty,properties:{}},c);
d=$splat(d);var a=[];var b=0;return new Elements(d.map(function(e){return Asset.image(e,$extend(c.properties,{onload:function(){c.onProgress.call(this,b,d.indexOf(e));
b++;if(b==d.length){c.onComplete();}},onerror:function(){c.onError.call(this,b,d.indexOf(e));b++;if(b==d.length){c.onComplete();}}}));}));}};Hash.Cookie=new Class({Extends:Cookie,options:{autoSave:true},initialize:function(b,a){this.parent(b,a);
this.load();},save:function(){var a=JSON.encode(this.hash);if(!a||a.length>4096){return false;}if(a=="{}"){this.dispose();}else{this.write(a);}return true;
},load:function(){this.hash=new Hash(JSON.decode(this.read(),true));return this;}});Hash.each(Hash.prototype,function(b,a){if(typeof b=="function"){Hash.Cookie.implement(a,function(){var c=b.apply(this.hash,arguments);
if(this.options.autoSave){this.save();}return c;});}});var IframeShim=new Class({Implements:[Options,Events,Class.Occlude],options:{className:"iframeShim",src:'javascript:false;document.write("");',display:false,zIndex:null,margin:0,offset:{x:0,y:0},browsers:(Browser.Engine.trident4||(Browser.Engine.gecko&&!Browser.Engine.gecko19&&Browser.Platform.mac))},property:"IframeShim",initialize:function(b,a){this.element=document.id(b);
if(this.occlude()){return this.occluded;}this.setOptions(a);this.makeShim();return this;},makeShim:function(){if(this.options.browsers){var c=this.element.getStyle("zIndex").toInt();
if(!c){c=1;var b=this.element.getStyle("position");if(b=="static"||!b){this.element.setStyle("position","relative");}this.element.setStyle("zIndex",c);
}c=($chk(this.options.zIndex)&&c>this.options.zIndex)?this.options.zIndex:c-1;if(c<0){c=1;}this.shim=new Element("iframe",{src:this.options.src,scrolling:"no",frameborder:0,styles:{zIndex:c,position:"absolute",border:"none",filter:"progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)"},"class":this.options.className}).store("IframeShim",this);
var a=(function(){this.shim.inject(this.element,"after");this[this.options.display?"show":"hide"]();this.fireEvent("inject");}).bind(this);if(IframeShim.ready){window.addEvent("load",a);
}else{a();}}else{this.position=this.hide=this.show=this.dispose=$lambda(this);}},position:function(){if(!IframeShim.ready||!this.shim){return this;}var a=this.element.measure(function(){return this.getSize();
});if(this.options.margin!=undefined){a.x=a.x-(this.options.margin*2);a.y=a.y-(this.options.margin*2);this.options.offset.x+=this.options.margin;this.options.offset.y+=this.options.margin;
}this.shim.set({width:a.x,height:a.y}).position({relativeTo:this.element,offset:this.options.offset});return this;},hide:function(){if(this.shim){this.shim.setStyle("display","none");
}return this;},show:function(){if(this.shim){this.shim.setStyle("display","block");}return this.position();},dispose:function(){if(this.shim){this.shim.dispose();
}return this;},destroy:function(){if(this.shim){this.shim.destroy();}return this;}});window.addEvent("load",function(){IframeShim.ready=true;});var HtmlTable=new Class({Implements:[Options,Events,Class.Occlude],options:{properties:{cellpadding:0,cellspacing:0,border:0},rows:[],headers:[],footers:[]},property:"HtmlTable",initialize:function(){var a=Array.link(arguments,{options:Object.type,table:Element.type});
this.setOptions(a.options);this.element=a.table||new Element("table",this.options.properties);if(this.occlude()){return this.occluded;}this.build();},build:function(){this.element.store("HtmlTable",this);
this.body=document.id(this.element.tBodies[0])||new Element("tbody").inject(this.element);$$(this.body.rows);if(this.options.headers.length){this.setHeaders(this.options.headers);
}else{this.thead=document.id(this.element.tHead);}if(this.thead){this.head=document.id(this.thead.rows[0]);}if(this.options.footers.length){this.setFooters(this.options.footers);
}this.tfoot=document.id(this.element.tFoot);if(this.tfoot){this.foot=document.id(this.thead.rows[0]);}this.options.rows.each(function(a){this.push(a);},this);
["adopt","inject","wraps","grab","replaces","dispose"].each(function(a){this[a]=this.element[a].bind(this.element);},this);},toElement:function(){return this.element;
},empty:function(){this.body.empty();return this;},setHeaders:function(a){this.thead=(document.id(this.element.tHead)||new Element("thead").inject(this.element,"top")).empty();
this.push(a,this.thead,"th");this.head=document.id(this.thead.rows[0]);return this;},setFooters:function(a){this.tfoot=(document.id(this.element.tFoot)||new Element("tfoot").inject(this.element,"top")).empty();
this.push(a,this.tfoot);this.foot=document.id(this.thead.rows[0]);return this;},push:function(d,c,a){var b=d.map(function(g){var h=new Element(a||"td",g.properties),f=g.content||g||"",e=document.id(f);
if(e){h.adopt(e);}else{h.set("html",f);}return h;});return{tr:new Element("tr").inject(c||this.body).adopt(b),tds:b};}});HtmlTable=Class.refactor(HtmlTable,{options:{classZebra:"table-tr-odd",zebra:true},initialize:function(){this.previous.apply(this,arguments);
if(this.occluded){return this.occluded;}if(this.options.zebra){this.updateZebras();}},updateZebras:function(){Array.each(this.body.rows,this.zebra,this);
},zebra:function(b,a){return b[((a%2)?"remove":"add")+"Class"](this.options.classZebra);},push:function(){var a=this.previous.apply(this,arguments);if(this.options.zebra){this.updateZebras();
}return a;}});HtmlTable=Class.refactor(HtmlTable,{options:{sortIndex:0,sortReverse:false,parsers:[],defaultParser:"string",classSortable:"table-sortable",classHeadSort:"table-th-sort",classHeadSortRev:"table-th-sort-rev",classNoSort:"table-th-nosort",classGroupHead:"table-tr-group-head",classGroup:"table-tr-group",classCellSort:"table-td-sort",classSortSpan:"table-th-sort-span",sortable:false},initialize:function(){this.previous.apply(this,arguments);
if(this.occluded){return this.occluded;}this.sorted={index:null,dir:1};this.bound={headClick:this.headClick.bind(this)};this.sortSpans=new Elements();if(this.options.sortable){this.enableSort();
if(this.options.sortIndex!=null){this.sort(this.options.sortIndex,this.options.sortReverse);}}},attachSorts:function(a){this.element[$pick(a,true)?"addEvent":"removeEvent"]("click:relay(th)",this.bound.headClick);
},setHeaders:function(){this.previous.apply(this,arguments);if(this.sortEnabled){this.detectParsers();}},detectParsers:function(c){if(!this.head){return;
}var a=this.options.parsers,b=this.body.rows;this.parsers=$$(this.head.cells).map(function(d,e){if(!c&&(d.hasClass(this.options.classNoSort)||d.retrieve("htmltable-sort"))){return d.retrieve("htmltable-sort");
}var g=new Element("span",{html:"&#160;","class":this.options.classSortSpan}).inject(d,"top");this.sortSpans.push(g);var h=a[e],f;switch($type(h)){case"function":h={convert:h};
f=true;break;case"string":h=h;f=true;break;}if(!f){HtmlTable.Parsers.some(function(n){var l=n.match;if(!l){return false;}if(Browser.Engine.trident){return false;
}for(var m=0,k=b.length;m<k;m++){var o=b[m].cells[e].get("html").clean();if(o&&l.test(o)){h=n;return true;}}});}if(!h){h=this.options.defaultParser;}d.store("htmltable-parser",h);
return h;},this);},headClick:function(c,b){if(!this.head){return;}var a=Array.indexOf(this.head.cells,b);this.sort(a);return false;},sort:function(f,h,m){if(!this.head){return;
}m=!!(m);var l=this.options.classCellSort;var o=this.options.classGroup,t=this.options.classGroupHead;if(!m){if(f!=null){if(this.sorted.index==f){this.sorted.reverse=!(this.sorted.reverse);
}else{if(this.sorted.index!=null){this.sorted.reverse=false;this.head.cells[this.sorted.index].removeClass(this.options.classHeadSort).removeClass(this.options.classHeadSortRev);
}else{this.sorted.reverse=true;}this.sorted.index=f;}}else{f=this.sorted.index;}if(h!=null){this.sorted.reverse=h;}var d=document.id(this.head.cells[f]);
if(d){d.addClass(this.options.classHeadSort);if(this.sorted.reverse){d.addClass(this.options.classHeadSortRev);}else{d.removeClass(this.options.classHeadSortRev);
}}this.body.getElements("td").removeClass(this.options.classCellSort);}var c=this.parsers[f];if($type(c)=="string"){c=HtmlTable.Parsers.get(c);}if(!c){return;
}if(!Browser.Engine.trident){var b=this.body.getParent();this.body.dispose();}var s=Array.map(this.body.rows,function(v,j){var u=c.convert.call(document.id(v.cells[f]));
return{position:j,value:u,toString:function(){return u.toString();}};},this);s.reverse(true);s.sort(function(j,i){if(j.value===i.value){return 0;}return j.value>i.value?1:-1;
});if(!this.sorted.reverse){s.reverse(true);}var p=s.length,k=this.body;var n,r,a,g;while(p){var q=s[--p];r=q.position;var e=k.rows[r];if(e.disabled){continue;
}if(!m){if(g===q.value){e.removeClass(t).addClass(o);}else{g=q.value;e.removeClass(o).addClass(t);}if(this.zebra){this.zebra(e,p);}e.cells[f].addClass(l);
}k.appendChild(e);for(n=0;n<p;n++){if(s[n].position>r){s[n].position--;}}}s=null;if(b){b.grab(k);}return this.fireEvent("sort",[k,f]);},reSort:function(){if(this.sortEnabled){this.sort.call(this,this.sorted.index,this.sorted.reverse);
}return this;},enableSort:function(){this.element.addClass(this.options.classSortable);this.attachSorts(true);this.detectParsers();this.sortEnabled=true;
return this;},disableSort:function(){this.element.remove(this.options.classSortable);this.attachSorts(false);this.sortSpans.each(function(a){a.destroy();
});this.sortSpans.empty();this.sortEnabled=false;return this;}});HtmlTable.Parsers=new Hash({date:{match:/^\d{2}[-\/ ]\d{2}[-\/ ]\d{2,4}$/,convert:function(){return Date.parse(this.get("text").format("db"));
},type:"date"},"input-checked":{match:/ type="(radio|checkbox)" /,convert:function(){return this.getElement("input").checked;}},"input-value":{match:/<input/,convert:function(){return this.getElement("input").value;
}},number:{match:/^\d+[^\d.,]*$/,convert:function(){return this.get("text").toInt();},number:true},numberLax:{match:/^[^\d]+\d+$/,convert:function(){return this.get("text").replace(/[^-?^0-9]/,"").toInt();
},number:true},"float":{match:/^[\d]+\.[\d]+/,convert:function(){return this.get("text").replace(/[^-?^\d.]/,"").toFloat();},number:true},floatLax:{match:/^[^\d]+[\d]+\.[\d]+$/,convert:function(){return this.get("text").replace(/[^-?^\d.]/,"");
},number:true},string:{match:null,convert:function(){return this.get("text");}},title:{match:null,convert:function(){return this.title;}}});HtmlTable=Class.refactor(HtmlTable,{options:{useKeyboard:true,classRowSelected:"table-tr-selected",classRowHovered:"table-tr-hovered",classSelectable:"table-selectable",allowMultiSelect:true,selectable:false},initialize:function(){this.previous.apply(this,arguments);
if(this.occluded){return this.occluded;}this.selectedRows=new Elements();this.bound={mouseleave:this.mouseleave.bind(this),focusRow:this.focusRow.bind(this)};
if(this.options.selectable){this.enableSelect();}},enableSelect:function(){this.selectEnabled=true;this.attachSelects();this.element.addClass(this.options.classSelectable);
},disableSelect:function(){this.selectEnabled=false;this.attach(false);this.element.removeClass(this.options.classSelectable);},attachSelects:function(a){a=$pick(a,true);
var b=a?"addEvents":"removeEvents";this.element[b]({mouseleave:this.bound.mouseleave});this.body[b]({"click:relay(tr)":this.bound.focusRow});if(this.options.useKeyboard||this.keyboard){if(!this.keyboard){this.keyboard=new Keyboard({events:{down:function(c){c.preventDefault();
this.shiftFocus(1);}.bind(this),up:function(c){c.preventDefault();this.shiftFocus(-1);}.bind(this),enter:function(c){c.preventDefault();if(this.hover){this.focusRow(this.hover);
}}.bind(this)},active:true});}this.keyboard[a?"activate":"deactivate"]();}this.updateSelects();},mouseleave:function(){if(this.hover){this.leaveRow(this.hover);
}},focus:function(){if(this.keyboard){this.keyboard.activate();}},blur:function(){if(this.keyboard){this.keyboard.deactivate();}},push:function(){var a=this.previous.apply(this,arguments);
this.updateSelects();return a;},updateSelects:function(){Array.each(this.body.rows,function(a){var b=a.retrieve("binders");if((b&&this.selectEnabled)||(!b&&!this.selectEnabled)){return;
}if(!b){b={mouseenter:this.enterRow.bind(this,[a]),mouseleave:this.leaveRow.bind(this,[a])};a.store("binders",b).addEvents(b);}else{a.removeEvents(b);}},this);
},enterRow:function(a){if(this.hover){this.hover=this.leaveRow(this.hover);}this.hover=a.addClass(this.options.classRowHovered);},shiftFocus:function(a){if(!this.hover){return this.enterRow(this.body.rows[0]);
}var b=Array.indexOf(this.body.rows,this.hover)+a;if(b<0){b=0;}if(b>=this.body.rows.length){b=this.body.rows.length-1;}if(this.hover==this.body.rows[b]){return this;
}this.enterRow(this.body.rows[b]);},leaveRow:function(a){a.removeClass(this.options.classRowHovered);},focusRow:function(){var b=arguments[1]||arguments[0];
if(!this.body.getChildren().contains(b)){return;}var a=function(c){this.selectedRows.erase(c);c.removeClass(this.options.classRowSelected);this.fireEvent("rowUnfocus",[c,this.selectedRows]);
}.bind(this);if(!this.options.allowMultiSelect){this.selectedRows.each(a);}if(!this.selectedRows.contains(b)){this.selectedRows.push(b);b.addClass(this.options.classRowSelected);
this.fireEvent("rowFocus",[b,this.selectedRows]);}else{a(b);}return false;},selectAll:function(a){a=$pick(a,true);if(!this.options.allowMultiSelect&&a){return;
}if(!a){this.selectedRows.removeClass(this.options.classRowSelected).empty();}else{this.selectedRows.combine(this.body.rows).addClass(this.options.classRowSelected);
}return this;},selectNone:function(){return this.selectAll(false);}});(function(){var a={};var b=["shift","control","alt","meta"];var d=/^(?:shift|control|ctrl|alt|meta)$/;
var e=function(i,h){i=i.toLowerCase().replace(/^(keyup|keydown):/,function(l,k){h=k;return"";});if(!a[i]){var g="",j={};i.split("+").each(function(k){if(d.test(k)){j[k]=true;
}else{g=k;}});j.control=j.control||j.ctrl;var f="";b.each(function(k){if(j[k]){f+=k+"+";}});a[i]=f+g;}return h+":"+a[i];};this.Keyboard=new Class({Extends:Events,Implements:[Options,Log],options:{defaultEventType:"keydown",active:false,events:{}},initialize:function(f){this.setOptions(f);
if(Keyboard.manager){Keyboard.manager.manage(this);}this.setup();},setup:function(){this.addEvents(this.options.events);if(this.options.active){this.activate();
}},handle:function(h,g){if(!this.active||h.preventKeyboardPropagation){return;}var f=!!this.manager;if(f&&this.activeKB){this.activeKB.handle(h,g);if(h.preventKeyboardPropagation){return;
}}this.fireEvent(g,h);if(!f&&this.activeKB){this.activeKB.handle(h,g);}},addEvent:function(h,g,f){return this.parent(e(h,this.options.defaultEventType),g,f);
},removeEvent:function(g,f){return this.parent(e(g,this.options.defaultEventType),f);},activate:function(){this.active=true;return this.enable();},deactivate:function(){this.active=false;
return this.fireEvent("deactivate");},toggleActive:function(){return this[this.active?"deactivate":"activate"]();},enable:function(f){if(f){if(f!=this.activeKB){this.previous=this.activeKB;
}this.activeKB=f.fireEvent("activate");}else{if(this.manager){this.manager.enable(this);}}return this;},relenquish:function(){if(this.previous){this.enable(this.previous);
}},manage:function(f){if(f.manager){f.manager.drop(f);}this.instances.push(f);f.manager=this;if(!this.activeKB){this.enable(f);}else{this._disable(f);}},_disable:function(f){if(this.activeKB==f){this.activeKB=null;
}},drop:function(f){this._disable(f);this.instances.erase(f);},instances:[],trace:function(){this.enableLog();var f=this;this.log("the following items have focus: ");
while(f){this.log(document.id(f.widget)||f.widget||f,"active: "+this.active);f=f.activeKB;}}});Keyboard.stop=function(f){f.preventKeyboardPropagation=true;
};Keyboard.manager=new this.Keyboard({active:true});Keyboard.trace=function(){Keyboard.manager.trace();};var c=function(g){var f="";b.each(function(h){if(g[h]){f+=h+"+";
}});Keyboard.manager.handle(g,g.type+":"+f+g.key);};document.addEvents({keyup:c,keydown:c});Event.Keys.extend({pageup:33,pagedown:34,end:35,home:36,capslock:20,numlock:144,scrolllock:145});
})();var Mask=new Class({Implements:[Options,Events],Binds:["resize"],options:{style:{},"class":"mask",maskMargins:false,useIframeShim:true},initialize:function(b,a){this.target=document.id(b)||document.body;
this.target.store("mask",this);this.setOptions(a);this.render();this.inject();},render:function(){this.element=new Element("div",{"class":this.options["class"],id:this.options.id||"mask-"+$time(),styles:$merge(this.options.style,{display:"none"}),events:{click:function(){this.fireEvent("click");
if(this.options.hideOnClick){this.hide();}}.bind(this)}});this.hidden=true;},toElement:function(){return this.element;},inject:function(b,a){a=a||this.options.inject?this.options.inject.where:""||this.target==document.body?"inside":"after";
b=b||this.options.inject?this.options.inject.target:""||this.target;this.element.inject(b,a);if(this.options.useIframeShim){this.shim=new IframeShim(this.element);
this.addEvents({show:this.shim.show.bind(this.shim),hide:this.shim.hide.bind(this.shim),destroy:this.shim.destroy.bind(this.shim)});}},position:function(){this.resize(this.options.width,this.options.height);
this.element.position({relativeTo:this.target,position:"topLeft",ignoreMargins:!this.options.maskMargins,ignoreScroll:this.target==document.body});return this;
},resize:function(a,e){var b={styles:["padding","border"]};if(this.options.maskMargins){b.styles.push("margin");}var d=this.target.getComputedSize(b);if(this.target==document.body){var c=window.getSize();
if(d.totalHeight<c.y){d.totalHeight=c.y;}if(d.totalWidth<c.x){d.totalWidth=c.x;}}this.element.setStyles({width:$pick(a,d.totalWidth,d.x),height:$pick(e,d.totalHeight,d.y)});
return this;},show:function(){if(!this.hidden){return this;}this.target.addEvent("resize",this.resize);if(this.target!=document.body){document.id(document.body).addEvent("resize",this.resize);
}this.position();this.showMask.apply(this,arguments);return this;},showMask:function(){this.element.setStyle("display","block");this.hidden=false;this.fireEvent("show");
},hide:function(){if(this.hidden){return this;}this.target.removeEvent("resize",this.resize);this.hideMask.apply(this,arguments);if(this.options.destroyOnHide){return this.destroy();
}return this;},hideMask:function(){this.element.setStyle("display","none");this.hidden=true;this.fireEvent("hide");},toggle:function(){this[this.hidden?"show":"hide"]();
},destroy:function(){this.hide();this.element.destroy();this.fireEvent("destroy");this.target.eliminate("mask");}});Element.Properties.mask={set:function(b){var a=this.retrieve("mask");
return this.eliminate("mask").store("mask:options",b);},get:function(a){if(a||!this.retrieve("mask")){if(this.retrieve("mask")){this.retrieve("mask").destroy();
}if(a||!this.retrieve("mask:options")){this.set("mask",a);}this.store("mask",new Mask(this,this.retrieve("mask:options")));}return this.retrieve("mask");
}};Element.implement({mask:function(a){this.get("mask",a).show();return this;},unmask:function(){this.get("mask").hide();return this;}});var Spinner=new Class({Extends:Mask,options:{"class":"spinner",containerPosition:{},content:{"class":"spinner-content"},messageContainer:{"class":"spinner-msg"},img:{"class":"spinner-img"},fxOptions:{link:"chain"}},initialize:function(){this.parent.apply(this,arguments);
this.target.store("spinner",this);var a=function(){this.active=false;}.bind(this);this.addEvents({hide:a,show:a});},render:function(){this.parent();this.element.set("id",this.options.id||"spinner-"+$time());
this.content=document.id(this.options.content)||new Element("div",this.options.content);this.content.inject(this.element);if(this.options.message){this.msg=document.id(this.options.message)||new Element("p",this.options.messageContainer).appendText(this.options.message);
this.msg.inject(this.content);}if(this.options.img){this.img=document.id(this.options.img)||new Element("div",this.options.img);this.img.inject(this.content);
}this.element.set("tween",this.options.fxOptions);},show:function(a){if(this.active){return this.chain(this.show.bind(this));}if(!this.hidden){this.callChain.delay(20,this);
return this;}this.active=true;return this.parent(a);},showMask:function(a){var b=function(){this.content.position($merge({relativeTo:this.element},this.options.containerPosition));
}.bind(this);if(a){this.parent();b();}else{this.element.setStyles({display:"block",opacity:0}).tween("opacity",this.options.style.opacity||0.9);b();this.hidden=false;
this.fireEvent("show");this.callChain();}},hide:function(a){if(this.active){return this.chain(this.hide.bind(this));}if(this.hidden){this.callChain.delay(20,this);
return this;}this.active=true;return this.parent(a);},hideMask:function(a){if(a){return this.parent();}this.element.tween("opacity",0).get("tween").chain(function(){this.element.setStyle("display","none");
this.hidden=true;this.fireEvent("hide");this.callChain();}.bind(this));},destroy:function(){this.content.destroy();this.parent();this.target.eliminate("spinner");
}});Spinner.implement(new Chain);if(window.Request){Request=Class.refactor(Request,{options:{useSpinner:false,spinnerOptions:{},spinnerTarget:false},initialize:function(a){this._send=this.send;
this.send=function(c){if(this.spinner){this.spinner.chain(this._send.bind(this,c)).show();}else{this._send(c);}return this;};this.previous(a);var b=document.id(this.options.spinnerTarget)||document.id(this.options.update);
if(this.options.useSpinner&&b){this.spinner=b.get("spinner",this.options.spinnerOptions);["onComplete","onException","onCancel"].each(function(c){this.addEvent(c,this.spinner.hide.bind(this.spinner));
},this);}},getSpinner:function(){return this.spinner;}});}Element.Properties.spinner={set:function(a){var b=this.retrieve("spinner");return this.eliminate("spinner").store("spinner:options",a);
},get:function(a){if(a||!this.retrieve("spinner")){if(this.retrieve("spinner")){this.retrieve("spinner").destroy();}if(a||!this.retrieve("spinner:options")){this.set("spinner",a);
}new Spinner(this,this.retrieve("spinner:options"));}return this.retrieve("spinner");}};Element.implement({spin:function(a){this.get("spinner",a).show();
return this;},unspin:function(){var a=Array.link(arguments,{options:Object.type,callback:Function.type});this.get("spinner",a.options).hide(a.callback);
return this;}});MooTools.lang.set("en-US","Date",{months:["January","February","March","April","May","June","July","August","September","October","November","December"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dateOrder:["month","date","year"],shortDate:"%m/%d/%Y",shortTime:"%I:%M%p",AM:"AM",PM:"PM",ordinal:function(a){return(a>3&&a<21)?"th":["th","st","nd","rd","th"][Math.min(a%10,4)];
},lessThanMinuteAgo:"less than a minute ago",minuteAgo:"about a minute ago",minutesAgo:"{delta} minutes ago",hourAgo:"about an hour ago",hoursAgo:"about {delta} hours ago",dayAgo:"1 day ago",daysAgo:"{delta} days ago",weekAgo:"1 week ago",weeksAgo:"{delta} weeks ago",monthAgo:"1 month ago",monthsAgo:"{delta} months ago",yearAgo:"1 year ago",yearsAgo:"{delta} years ago",lessThanMinuteUntil:"less than a minute from now",minuteUntil:"about a minute from now",minutesUntil:"{delta} minutes from now",hourUntil:"about an hour from now",hoursUntil:"about {delta} hours from now",dayUntil:"1 day from now",daysUntil:"{delta} days from now",weekUntil:"1 week from now",weeksUntil:"{delta} weeks from now",monthUntil:"1 month from now",monthsUntil:"{delta} months from now",yearUntil:"1 year from now",yearsUntil:"{delta} years from now"});
MooTools.lang.set("en-US","Form.Validator",{required:"This field is required.",minLength:"Please enter at least {minLength} characters (you entered {length} characters).",maxLength:"Please enter no more than {maxLength} characters (you entered {length} characters).",integer:"Please enter an integer in this field. Numbers with decimals (e.g. 1.25) are not permitted.",numeric:'Please enter only numeric values in this field (i.e. "1" or "1.1" or "-1" or "-1.1").',digits:"Please use numbers and punctuation only in this field (for example, a phone number with dashes or dots is permitted).",alpha:"Please use letters only (a-z) with in this field. No spaces or other characters are allowed.",alphanum:"Please use only letters (a-z) or numbers (0-9) only in this field. No spaces or other characters are allowed.",dateSuchAs:"Please enter a valid date such as {date}",dateInFormatMDY:'Please enter a valid date such as MM/DD/YYYY (i.e. "12/31/1999")',email:'Please enter a valid email address. For example "fred@domain.com".',url:"Please enter a valid URL such as http://www.google.com.",currencyDollar:"Please enter a valid $ amount. For example $100.00 .",oneRequired:"Please enter something for at least one of these inputs.",errorPrefix:"Error: ",warningPrefix:"Warning: ",noSpace:"There can be no spaces in this input.",reqChkByNode:"No items are selected.",requiredChk:"This field is required.",reqChkByName:"Please select a {label}.",match:"This field needs to match the {matchName} field",startDate:"the start date",endDate:"the end date",currendDate:"the current date",afterDate:"The date should be the same or after {label}.",beforeDate:"The date should be the same or before {label}.",startMonth:"Please select a start month",sameMonth:"These two dates must be in the same month - you must change one or the other.",creditcard:"The credit card number entered is invalid. Please check the number and try again. {length} digits entered."});
MooTools.lang.set("en-GB","Date",{dateOrder:["date","month","year"],shortDate:"%d/%m/%Y",shortTime:"%H:%M"}).set("cascade",["en-US"]);MooTools.lang.setLanguage('en-GB');

Request.JSONP=new Class({Implements:[Chain,Events,Options,Log],options:{url:"",data:{},retries:0,timeout:0,link:"ignore",callbackKey:"callback",injectScript:document.head},initialize:function(a){this.setOptions(a);
if(this.options.log){this.enableLog();}this.running=false;this.requests=0;this.triesRemaining=[];},check:function(){if(!this.running){return true;}switch(this.options.link){case"cancel":this.cancel();
return true;case"chain":this.chain(this.caller.bind(this,arguments));return false;}return false;},send:function(c){if(!$chk(arguments[1])&&!this.check(c)){return this;
}var e=$type(c),a=this.options,b=$chk(arguments[1])?arguments[1]:this.requests++;if(e=="string"||e=="element"){c={data:c};}c=$extend({data:a.data,url:a.url},c);
if(!$chk(this.triesRemaining[b])){this.triesRemaining[b]=this.options.retries;}var d=this.triesRemaining[b];(function(){var f=this.getScript(c);this.log("JSONP retrieving script with url: "+f.get("src"));
this.fireEvent("request",f);this.running=true;(function(){if(d){this.triesRemaining[b]=d-1;if(f){f.destroy();this.send(c,b).fireEvent("retry",this.triesRemaining[b]);
}}else{if(f&&this.options.timeout){f.destroy();this.cancel().fireEvent("failure");}}}).delay(this.options.timeout,this);}).delay(Browser.Engine.trident?50:0,this);
return this;},cancel:function(){if(!this.running){return this;}this.running=false;this.fireEvent("cancel");return this;},getScript:function(c){var b=Request.JSONP.counter,d;
Request.JSONP.counter++;switch($type(c.data)){case"element":d=document.id(c.data).toQueryString();break;case"object":case"hash":d=Hash.toQueryString(c.data);
}var e=c.url+(c.url.test("\\?")?"&":"?")+(c.callbackKey||this.options.callbackKey)+"=Request.JSONP.request_map.request_"+b+(d?"&"+d:"");if(e.length>2083){this.log("JSONP "+e+" will fail in Internet Explorer, which enforces a 2083 bytes length limit on URIs");
}var a=new Element("script",{type:"text/javascript",src:e});Request.JSONP.request_map["request_"+b]=function(f){this.success(f,a);}.bind(this);return a.inject(this.options.injectScript);
},success:function(b,a){if(a){a.destroy();}this.running=false;this.log("JSONP successfully retrieved: ",b);this.fireEvent("complete",[b]).fireEvent("success",[b]).callChain();
}});Request.JSONP.counter=0;Request.JSONP.request_map={};

/*
Class: Element
	Contains extensions to the Element class
	
*/
Element.implement({
	
	/*
	Method: getDataFromComment
		Retrieve JSON data from a comment
	*/
	getDataFromComment: function()
	{
		var i = 0,
			data = null;
		
		// look for a comment containing json data
		while ( i < this.childNodes.length )
		{
			if ( this.childNodes[i].nodeType == 8 ) // comments
			{
				if ( /^\s*\{(?:.|\n)+\}\s*$/.test( this.childNodes[i].data ) )
				{
					data = JSON.decode( this.childNodes[i].data );
					if ( data )
						break;
				}
			}
			else if ( this.childNodes[i].nodeType == 1 ) // elements
				break;
			
			i++;
		}
		
		return data;
	},
	
	/*
	Method: setStyles
		Replace the built-in setStyles, to better handle css text strings
	*/
	setStyles: function( source )
	{
		var styles = $A( arguments ).flatten().clean();
		
		if ( styles.length > 1 )
		{
			var types = [];
			var cssText = '';
			
			for ( var i = 0; i < styles.length; i++ )
			{				
				types[i] = $type( styles[i] );
				
				if ( styles[i] === true )
					cssText += this.style.cssText;
				
				else if ( types[i] == 'string' )
					cssText += arguments[i];
			}
			
			if ( cssText != this.style.cssText )
				this.style.cssText = cssText;
			
			for ( var i = 0; i < styles.length; i++ )
			{
				if ( types[i] == 'object' )
				{
					for ( var style in styles[i] )
						this.setStyle(style, styles[i][style]);
				}
			}
			
		}
		else if ( source && styles[i] !== true )
		{
			switch( $type( source ) )
			{
				case 'object':
					for ( var style in source )
						this.setStyle(style, source[ style ]);
					break;
					
				case 'string':
					this.style.cssText = source;
					break;
			}
		}
		
		return this;
	},
	
	/*
	Method: hide
		Hides the element (sets style.display = 'none')
	*/
	hide: function()
	{
		var display = this.getStyle( 'display' );
		
		if ( display == 'none' )
			return this;
		
		return this.store( 'display mode', display ).setStyle( 'display', 'none' );
	},
		
	/*
	Property: show
		Shows the element (sets style.display = '')		
		If the element was hidden with Element.hide(), and previously had an explicit 'display' property, that property is reapplied.	
	*/
	show: function()
	{
		if ( this.getStyle( 'visibility' ) != 'visible' )
			this.setStyle( 'visibility', 'visible' );
		
		if ( this.getStyle( 'display' ) != 'none' )
			return this;
		
		this.setStyle( 'display', this.retrieve( 'display mode', '' ) );
		
		return this;
	},
		
	/*
	Property: showIf
		Calls <show> or <hide>, if the first argument is true or false.	
	*/
	showIf: function( b )
	{
		if ( b )
			return this.show();
		else
			return this.hide();
	},
	
	/*
	Property: slideIn
		Shows and slides the element in vertically
	*/
	slideIn: function( options )
	{
		var original = {
			overflow: this.getStyle( 'overflow' ),
			height: this.getStyle( 'height' )
		}
		
		options = $options( options );
		
		// set up the element to get the height, with a series of setStyles so it happens in the right order
		this.setStyle( 'overflow', 'visible' ).setStyle( 'visibility', 'hidden' ).setStyle( 'display', 'block' );
		
		// store the height
		var toHeight = this.getSize().y;
		
		// get the element ready to show
		this.setStyle( 'overflow', 'hidden' ).setStyle( 'height', 1 ).setStyle( 'visibility', 'visible' );
		
		// animate it in
		this.get( 'tween' ).start( 'height', toHeight ).chain( function() {
			// cleanup
			this.element.setStyle( 'overflow', original.overflow ).setStyle( 'height', original.height );
			$call( options.onComplete, this );
		});
	},
	
	/*
	Property: slideIn
		slides the element out vertically then hides it
	*/
	slideOut: function( options )
	{
		var original = {
			overflow: this.getStyle( 'overflow' ),
			height: this.getStyle( 'height' )
		}
		
		options = $options( options );
		
		// get the element ready to hide
		this.setStyle( 'overflow', 'hidden' );
		
		// animate it in
		this.get( 'tween' ).start( 'height', 1 ).chain( function() {
			// cleanup
			this.element.hide().setStyle( 'overflow', original.overflow ).setStyle( 'height', original.height );
			$call( options.onComplete, this );
		});
	}
	
});

Element.Properties.visible = {
	set: function( visible )
	{
		this.showIf( visible );
	},	
	get: function()
	{
		return !( this.getStyle( 'visibility' ) == 'hidden' || this.getStyle( 'display' ) == 'none' || this.getStyle( 'opacity' ) == 0 || !this.offsetHeight );
	}
};

Element.Properties.selectable = {
	set: function( on )
	{
		this.setStyle( '-moz-user-select', ( on ) ? 'text' : '-moz-none' ) // '-moz-none' let you re-enable it on child elements
			.setStyle( '-khtml-user-select', ( on ) ? 'text' : 'none' ) // safari
			.setStyle( 'user-select', ( on ) ? 'text' : 'none' ) // because we can hope
			.setProperty( 'unselectable', 'on' ) // internet explorer variant
			.onselectstart = function() { return false; }; // also IE
	}
};

Element.Properties.focusDots = {
	set: function( on )
	{
		this.setProperty( 'hideFocus', ( on ) ? false : true ) // hide focus dots in IE
			.setStyle( 'outline', ( on ) ? '' : 'none' ); // hide focus dots in Firefox
	}
};


/*** Aurora Core Functions, Copyright (c) Jaze Technology 2011. ***/

/*
Function: $log
	Safe logging of variables to firebug (logs each arguments separately).
	Checks for (window.console) before logging anything.
*/

function $log() {
	
	if ( !window.console ) return;
	
	for ( var i = 0; i < arguments.length; i++ )
		console.log( arguments[i] );
}

function $options( options, defaults ) {
	
	if ( $type( options ) != 'object' )
		options = {};
	
	if ( $type( defaults ) != 'object' )
		defaults = {};
	
	return $extend( defaults, options );
	
}

function $date( str )
{
	switch ( $type( str ) )
	{
		case 'date': return str;
		case 'undefined': return new Date();
	}
	
	return Date.parse( str );
}

$D = $date;


/*
Function $call
	Lets you safely try and call a function.
	
	Has flexible arguments, detected by type, eg
	$call( fn, args, scope, trycatch );
	
	Will only attempt if the fn argument is a function.
*/
function $call( fn ) {
	
	var params = Array.link( arguments, { 'fn': Function.type, 'args': Array.type, 'trycatch': Boolean.type, 'scope': $defined } );
	
	if ( !params.fn )
		return undefined;
	
	if ( params.trycatch )
	{
		try { return params.fn.apply( params.scope || this, params.args ); }
		catch( e ) { return e; }
	}
		
	return params.fn.apply( params.scope || this, params.args );
}


/*
Function: Aurora.doCallback
*/

Aurora.doCallback = function( fn, data ) {

	try {
		if ( $type( fn ) == 'string' )
			fn = eval( fn )( data );
		
		if ( $type( fn ) == 'function' )
			return fn( data );
			
		if ( $type( fn ) == 'element' )
			return fn;
	}
	catch(e) {
		$log( 'Error doing callback function: ' + fn, e );
	}

};


/*
Function: Aurora.callAction
	Quick and easy way to call an Aurora Action
	
	Arguments:
		* action (string)
		* data (obj)
		* debug (bool)
		
	Passes events from options to Request.JSON
		* onComplete
		* onSuccess
		* onFailure
*/

Aurora.callAction = function( options, onComplete ) {
	
	options = $options( options, {
			action: '',		// action to call (required)
			data: {},		// data to pass to the action
			debug: false	// will log what's being sent
		});
	
	if ( !$chk( options.action ) )
		throw "Aurora.callAction requires an object argument with a valid action specified.";
	
	$extend( options.data, { action: options.action });
	
	if ( options.debug )
	{
		$log( "Calling Action (" + options.action + ") with data:" );
		$log( options.data );
	}
	
	new Request.JSON({
			url: callActionURL,
			onComplete: options.onComplete,
			onSuccess: options.onSuccess,
			onFailure: options.onFailure,
			noCache: true // IE
		})
		.post( options.data );
	
}


/*
Function: Aurora.callAPI
	Quick and easy way to call the Aurora API
	
	Arguments:
		* key (string) like 'Update Item' or 'Create ForumPost' - from the API def
		* data (obj)
		* debug (bool)
*/
/* DEPRECATED
Aurora.callAPI = function( options ) {
	
	options = $options( options, {
			key: '',		// api to call (required)
			data: {},		// data to pass to the action
			debug: false	// will log what's being sent
		});
	
	var key = options.key.split(' ');
	
	if ( key.length != 2 )
		throw "Aurora.callAPI requires a valid key property in the format 'Create Client'.";
	
	if ( !Aurora.api.apiKeys[ key[0] ] || !Aurora.api.apiKeys[ key[0] ][ key[1] ] )
		throw "Aurora.callAPI error: The key provided (" + options.key + ") is invalid on this page.";
	
	$extend( options.data, {
			action: 'callAPI',
			apiKey: Aurora.api.apiKeys[ key[0] ][ key[1] ]
		});
	
	if ( options.debug )
	{
		$log( "Calling Data API (" + options.key + ") with data:" );
		$log( options.data );
		
		var _onComplete = options.onComplete || function() {};
		
		options.onComplete = function( rtnData ) {
			if ( rtnData.success )
			{
				$log( "Data API Call (" + options.key + ") completed successfully. Returned data:" );
				$log( rtnData );
			}
			else
			{
				$log( "Data API Call (" + options.key + ") failed. Returned data:" );
				$log( rtnData );
			}
			
			_onComplete();
		}
	}
	
	new Request.JSON({
			url: callActionURL,
			onComplete: options.onComplete,
			onSuccess: options.onSuccess,
			onFailure: options.onFailure
		})
		.post( options.data );
	
}
*/

/*
Function: Aurora.loadSparkle

	Quick and easy way to load additional parsed Sparkle from the Resources folder
	
	Path argument maps to /Resources/[businessKey]/Sites/[siteKey]/Sparkle/Remotes/[path]
	
	You can alternatively make a simple call by passing the path as a string.
	
	Aurora.loadSparkle( 'Popups/Signup-Business' )
		.then( function( rtn ) { $log( rtn ); } );
	
	Aurora.loadSparkle( { path: 'Popups/Signup-Business', data: { itemId: 1 } )
		.then( function( rtn ) { $log( rtn ); } );
	
*/
Aurora.loadSparkle = function( options ) {
	
	if ( $type( options ) == 'string' )
		options = { path: options };
	
	options = $options( options, {
			path: '',		// path to the sparkle file (required)
			data: {}		// data to pass to the sparkle parser (becomes params.*)
		});
	
	$extend( options.data, {
			action: 'sparkle.parse',
			path: options.path
		});
	
	var onCompleteQueue = [],
		onErrorQueue = [];
	
	var proxy = {
		then: function( fn ) { onCompleteQueue.push( fn ) }
	};
	
	new Request.JSON({
			url: callActionURL,
			onSuccess: function( rtn ) {
				while ( onCompleteQueue.length )
					onCompleteQueue.shift()( rtn );
			},
			onFailure: function( err ) {
				
				if ( err.status == '500' && options.onError )
				{
					Aurora.doCallback( options.onError( err ) );
					return;
				}
				
				if ( err.status == '404' )
				{
					alert( 'The Sparkle file specified ("' + options.path + '") could not be found. Please check the path:\n\n/Sites/[siteKey]/Sparkle/Remotes/' + options.path + '.sparkle' );
					return;
				}
				
				$log( err );
				// alert( "There was an error loading the Sparkle file " + options.path + '.\n\nError has been logged to console.' );
				
			}
		})
		.post( options.data );
	
	return proxy;
	
}


/*
Function: Aurora.handleIframeCallback

	Handles the iframe callback for forms.
	
*/
Aurora.handleIframeCallback = function( callbackId, actionRtn ) {

	$log( 'Received callback with id: ' + callbackId + ', action returned:', actionRtn );
	
	// Gather details
	var $iframe = $( callbackId ),
		$form = document.body.getElement( '[target=' + callbackId + ']' ),
		form = $form.retrieve( 'form' );
	
	if ( !form )
	{
		alert( 'No form element detected, cannot process return from iframe.' );
		return;
	}
	
	// Give the form the return of the iframe
	form.processResponse( actionRtn );
	
	// Destroy the iframe
	$iframe.destroy();

};


/*
Class: Popup

	Applies classes:
		aurora-popup
		aurora-popup-blockout
	
	Options
		modal
		width
		height
		transition		[ fade | immediate ]
		fromElement		(containing element, copies all children into the dialog on open, back on close)
		fromSparkle		(wraps Aurora.loadSparkle; can be 'path' or { path: '', data: {} )
		loadingHTML		(html to display while the popup is loading)
		onRender
		zIndex
		cssClass
	
	Methods
		close
		
	Events
		ready
		visible
		beforeClose
		close
		destroy
*/

Aurora.$popupBlockout = null; // all popups share the same blockout once it's created

Aurora.Popup = new Class({
	
	Implements: [ Options, Events ],
	
	options: {
		modal: true,
		width: false,
		height: false,
		transition: 'fade', // not implemented
		fromElement: null, // not implemented
		fromSparkle: null,
		loadingHTML: null, // not implemented
		onRender: null,
		zIndex: 1000,
		cssClass: null
	},
	
	initialize: function( options )
	{
		this.setOptions( options );
		
		// Create popup container
		var $container = this.$container = new Element( 'div', {
			'class': 'aurora-dialog aurora-popup',
			style: 'overflow: hidden; position: absolute; z-index: ' + ( this.options.zIndex + 1 ) + ';'
		}).inject( document.body, 'top' ).hide();
		
		
		// Store instance of class with popup
		$container.store( 'popup', this );
		
		// Add CSS class
		if ( this.options.cssClass )
			$container.addClass( this.options.cssClass );
		
		
		// Store the instance of this class to the popup container
		$container.store( 'popup', this );
		
		
		// Create the blockout element (if it doesn't exist yet)
		if ( this.options.modal )
		{
			if ( !Aurora.$popupBlockout )
			{
				Aurora.$popupBlockout = new Element( 'div', {
						'class': 'aurora-popup-blockout',
						style: 'position: fixed; top: 0px; left: 0px; width: 100%; z-index: ' + this.options.zIndex + ';'
					})
					.setOpacity( 0 )
					.inject( document.body, 'top' );
			}
			else
				Aurora.$popupBlockout.show();
		}
		
		
		// Load sparkle content (if neccesary)
		if ( this.options.fromSparkle )
		{
			var render = (function( rtn ) {
			
				this.content = rtn.html;
				this.render();
			
			}.bind( this ));
		
			var content = Aurora.loadSparkle( this.options.fromSparkle ).then( function( rtn ) { render( rtn ) } );
		}
		
		
		// Clone element content (if neccessary)
		if ( this.options.fromElement )
		{
			//
		}
		
	},
	
	render: function()
	{
		this.$container.show().setOpacity( 0 );
		
		
		// Create inner element
		this.$el = new Element( 'div', { style: 'position: absolute; width: 100%; height: 100%;' } )
			.inject( this.$container );
		
		
		// Create content containers
		var $contentContainer = new Element( 'div', { style: 'position: absolute; width: 100%; height: 100%; z-index: ' + ( this.options.zIndex + 2 ) + ';'  } ).inject( this.$el );
		var $contentPadding = new Element( 'div', { style: 'padding: 0px; position: relative;' } ).inject( $contentContainer );
		
		this.$content = new Element( 'div', { style: 'position: relative;' } )
			.inject( $contentPadding );
		
		
		// Inject content
		this.$content.set( 'html', this.content );
		
		
		// If we haven't specified a width and height, calculate it based on the content we inject
		if ( !this.options.width && !this.options.height )
		{
			this.$container.setStyles({ position: 'relative', top: 0, left: 0, overflow: 'visible' });
			
			var $content = this.$content.getChildren()[0];
			
			var cs = $content.getSize();
			
			this.options.width = cs.x;
			this.options.height = cs.y;
		}
		
		
		// Set width and height
		if ( this.options.width )
			this.$container.setStyles({ width: this.options.width });
		
		if ( this.options.height )
			this.$container.setStyles({ height: this.options.height });
		
		
		// Correct centering positioning, should it be on the $el, not the $container? (seems to be only effective on the $el)
		this.$container.setStyles({
			position: 'absolute',
			overflow: 'hidden',
			'margin-left': '50%',
			'left': -( Math.round( this.options.width / 2 ) )
		});
		
		
		// Initialise Aurora classes
		if ( this.options.fromSparkle )
			Aurora.initClasses( this.$content );
		
		
		// Make sure its positioned correctly relative to where we have scrolled to	
		this.positionPopup();
		window.addEvent( 'resize', (function() { this.positionPopup() }.bind( this )) );
		
		
		// Resize blockout
		this.resizeBlockout();
		window.addEvent( 'resize', (function() { this.resizeBlockout() }.bind( this )) );
		
		
		// Show contents
		var showContents = (function() {
		
			this.fireEvent( 'ready' );
			
			var onComplete = (function() {
			
				this.fireEvent( 'visible' );
				
				// Call render function (if provided)
				if ( this.options.onRender )
					Aurora.doCallback( this.options.onRender );
				
			}.bind( this ));
			
			this.$container.get( 'tween' ).setOptions({ duration: 300 }).start( 'opacity', 1 ).chain( onComplete );
		
		}.bind( this ));
		
		
		// Fade in the blockout, then the content
		if ( this.options.modal )
			Aurora.$popupBlockout.get( 'tween' ).setOptions({ duration: 1 }).start( 'opacity', 0.5 ).chain( (function() { showContents(); }.bind( this )));
		else
			showContents();
	},
	
	close: function()
	{
		// TODO: If this.options.fromElement, we need to put the content back in its original div
		
		this.fireEvent( 'beforeClose' );
		
		// TODO: Used to be this.$content, maybe add it back so content fades before box does?
		
		this.$container.get( 'tween' ).setOptions({ duration: 200 }).start( 'opacity', 0 ).chain( (function() {
			
			this.fireEvent( 'close' );
			
			if ( this.options.modal )
				Aurora.$popupBlockout.get( 'tween' ).setOptions({ duration: 100 }).start( 'opacity', 0 ).chain( (function() { this.destroy(); }.bind( this )));
			else
				this.destroy();
			
			// Note: Used to be bound to the popup itself, now its referencing the popup
		
		}.bind( this )));
	
	},
	
	destroy: function( dontHideBlockout )
	{
		// Unbind events
		window.removeEvent( 'resize', this.resizeBlockout );
		
		// Remove elements
		this.$container.destroy();
		
		if ( this.options.modal && !dontHideBlockout )
			Aurora.$popupBlockout.hide();
		
		this.fireEvent( 'destroy' );
	},
	
	positionPopup: function()
	{
		this.$container.setStyle( 'margin-top', document.getScrollTop() + ( ( window.getSize().y - this.options.height ) / 2 ) );
	},
	
	resizeBlockout: function()
	{
		if ( !this.options.modal )
			return;
		
		var windowHeight = window.getSize().y;
		var documentHeight = document.body.clientHeight;
		
		Aurora.$popupBlockout.setStyle( 'height', Math.max( windowHeight, documentHeight ) );
	}
	
});


/*
Class: Slides
*/
Aurora.Slides = new Class({
	
	Implements: Options,
	
	/* the options */
	options: {
		width: 0,
		height: 0,
		first: 1,
		type: 'immediate', // horizontal, vertical, fade, immediate
		duration: 500,
		effect: 'sine',
		ease: 'out',
		containerClass: 'aurora-slides-container',
		slidesQuery: '.aurora-slide',
		navQuery: '.aurora-slidesnav',
		navItemQuery: false
	},
	
	initialize: function( target, options )
	{
		this.setOptions( options );
		
		var $el = this.$el = $( target );
		
		
		// Transition
		this.transition = this.options.effect;
		
		if ( this.options.effect != 'linear' )
			this.transition += ':' + this.options.ease;
		
		
		// Setup nav
		this.$nav = $el.getElement( this.options.navQuery );
		
		if ( this.$nav )
		{
			var goto = this.goto.bind( this );
			
			this.navLinks = ( this.options.navItemQuery ? this.$nav.getElements( this.options.navItemQuery ) : this.$nav.getChildren() );
			
			this.navLinks.each( function( $navItem, i ) {
				
				$navItem.addEvent( 'click', function() { goto( i ); } );
				
			});
		}
		
		
		// Get the slides
		var slideTarget = $el.getElement( this.options.slidesQuery );
		
		this.$container = new Element( 'div', { 'class': this.options.containerClass, styles: 'position: relative; overflow: hidden;' } ).inject( slideTarget, 'after' );
		
		if ( this.options.width )
			this.$container.setStyle( 'width', this.options.width );
		
		if ( this.options.height )
			this.$container.setStyle( 'height', this.options.height );
		
		this.slides = $el.getElements( this.options.slidesQuery );
		
		if ( !this.slides.length ) {
			alert( 'No slides detected. Each slide must have the class [' + this.options.slidesQuery + ']' );
			return;
		}
		
		
		// Hide all slides and store indexes
		this.slides.each( (function( slide, index ) {
		
			slide.inject( this.$container );
		
			slide.setStyles({
				display: 'none',
				width: this.options.width || 'auto',
				height: this.options.height || 'auto'
			});
			
			slide.store( 'index', index );
		
		}.bind( this )));
		
		
		// Adjust first requested slide to deal with array
		this.options.first -= 1;
		
		
		// Go to slide
		this.goto( this.options.first, true );
	},
	
	show: function( index )
	{	
		var $nextSlide = this.slides[ index || 0 ];
		
		var width = this.$el.getSize().x;
		var height = this.$el.getSize().y;
		
		if ( !$nextSlide )
		{
			alert( 'Aurora.Slides Error: Slide ' + index + ' could not be found in the Slides array.' );
			return;
		}
		
		if ( this.currentSlide.index == index )
			return this;
		
		
		// Handle menu
		if ( this.navLinks )
		{
			if ( this.navLinks[ this.currentSlide.index ] )
				this.navLinks[ this.currentSlide.index ].removeClass( 'selected' );
			
			if ( this.navLinks[ index ] )
				this.navLinks[ index ].addClass( 'selected' );
		}
		
		
		// Store the new slide
		var storeSlide = (function() {
			
			this.currentSlide = {
				$el: $nextSlide,
				index: index
			}
		
		}.bind( this ));
		
		
		// Ensures all other slides are hidden (useful in transitions and the user is making very fast navigation changes and the animations can't keep up)
		var hideSlides = (function( s ) {
		
			this.slides.each( function( slide ) {
			
				if ( s && slide == s.$el )
					return;
				
				slide.hide();
			
			});
		
		}.bind( this ));
		
		
		// Note: It's possible this isn't even used anymore
		if ( !this.currentSlide )
		{
			$log( 'No current slide detected, showing immediately.' );
			
			var styles = { display: 'block' };
			
			switch( this.options.type )
			{
				case 'horizontal': styles.left = 0; break;
				case 'vertical': styles.top = 0; break;
				case 'fade': styles.opacity = 1; break;
			}
			
			$nextSlide.setStyles( styles );
			
			storeSlide();
			
			return;
		}
		
		var currentSlide = this.currentSlide;
		
		
		// Transition current and new slide
		switch( this.options.type )
		{
			case 'horizontal':
			case 'vertical':
			
				var direction = ( currentSlide.index < $nextSlide.retrieve( 'index' ) ) ? -1 : 1;
				
				var nextSlideSize = $nextSlide.getDimensions();
				
				if ( currentSlide.$nav )
					currentSlide.$nav.removeClass( 'current' ).addClass( 'normal' );
				
				currentSlide.$el.setStyles({
					position: 'absolute'
				});
				
				var $currentSlide = this.currentSlide.$el;
				
				// If we have a set width and height, give it to the slide
				if ( this.options.width )
					$currentSlide.setStyle( 'width', this.options.width );
				
				if ( this.options.height )
					$currentSlide.setStyle( 'height', this.options.height );
				
				// If we don't, try to calculate it
				if ( !this.options.width && !this.options.height )
				{
					this.$el.setStyle( 'height', nextSlideSize.y );
					$currentSlide.setStyles({ width: nextSlideSize.x, height: nextSlideSize.y })
				}
				
				// Move first slide
				$currentSlide.get( 'tween' ).setOptions({ duration: this.options.duration, transition: this.transition });
					
				switch( this.options.type )
				{
					case 'horizontal':
					
						$currentSlide.get( 'tween' )
							.start( 'left', nextSlideSize.x * direction )
							.chain( function() {
							
								this.element.setStyles({
									display: 'none',
									position: 'relative'
								});
							
							});
					
					break;
					
					case 'vertical':
					
						$currentSlide.get( 'tween' )
							.start( 'top', nextSlideSize.y * direction )
							.chain( function() {
							
								this.element.setStyles({
									display: 'none',
									position: 'relative'
								});
						
							});
					
					break;
				}
				
				// Move second slide
				$nextSlide.setStyles({ display: 'block', position: 'absolute' });
				
				$nextSlide
					.get( 'tween' )
					.setOptions({
						duration: this.options.duration,
						transition: this.transition
					});
				
				switch( this.options.type )
				{
					case 'horizontal':
						
						$nextSlide.setStyles({
							'left': nextSlideSize.x * direction * - 1
						})
						.get( 'tween' )
						.start( 'left', 0 )
						.chain( (function() {
						
							$nextSlide.setStyle( 'position', 'relative' );
							
							this.slideChanged( $nextSlide );
						
						}.bind( this )));
						
					break;
					
					case 'vertical':
					
						$nextSlide.setStyles({
							'top': nextSlideSize.y * direction * - 1
						})
						.get( 'tween' )
						.start( 'top', 0 )
						.chain( (function() {
						
							$nextSlide.setStyle( 'position', 'relative' );
							
							this.slideChanged( $nextSlide );
						
						}.bind( this )));
					
					break;
				}
				
				storeSlide();
			
			break;
			
			case 'fade':
			
				hideSlides( currentSlide );
				
				if ( currentSlide.$nav )
					currentSlide.$nav.removeClass( 'current' ).addClass( 'normal' );
				
				$nextSlide.show().setStyle( 'height', 'auto' );
				
				var nextSlideSize = $nextSlide.getComputedSize();
				
				$nextSlide.hide();
				
				this.currentSlide.$el.setStyles({ opacity: 1 })
				
				this.currentSlide.$el.get( 'tween' )
					.setOptions({
						duration: this.options.duration,
						transition: this.transition
					})
					.start( 'opacity', 0 )
					.chain( (function() {
					
						hideSlides();
						
						$nextSlide.show();
						
						$nextSlide.setStyles({
							width: nextSlideSize.x,
							height: nextSlideSize.y,
							opacity: 0
						})
						.get( 'tween' )
							.setOptions({
								duration: this.options.duration,
								transition: this.transition
							})
							.start( 'opacity', 0, 1 )
							.chain( (function() {
							
								$nextSlide.setStyles({
									position: 'relative',
									width: 'auto',
									height: 'auto'
								});
								
								this.slideChanged( $nextSlide );
							
							}.bind( this )));
					
					}.bind( this )));
				
				storeSlide();
			
			break;
			
			case 'immediate':
			
				currentSlide.$el.hide();
					
				$nextSlide.show();
				
				this.slideChanged( $nextSlide );
				
				storeSlide();
			
			break;
		}
		
		return this;
	},
	
	next: function()
	{
		if ( !this.currentSlide || this.currentSlide.index >= this.slides.length - 1 )
			return this.show( 0 );
		else
			return this.show( this.currentSlide.index + 1 );
	},
	
	previous: function()
	{
		if ( !this.currentSlide )
			return this.show( 0 );
		else if ( this.currentSlide.index == 0 )
			return this.show( this.slides.length - 1 )
		else
			return this.show( this.currentSlide.index - 1 );
	},
	
	gotoFirst: function()
	{
		this.goto( 0 );	
	},
	
	gotoLast: function()
	{
		var lastSlide = this.slides.length - 1;
		
		this.goto( lastSlide );
	},
	
	goto: function( i, immediate )
	{
		if ( !this.slides[ i ] || this.currentSlide == i )
			return;
		
		if ( !immediate )
		{
			this.show( i );
			return;
		}
		
		if ( this.currentSlide && this.currentSlide.index > -1 )
		{
			this.slides[ this.currentSlide.index ].setStyle( 'display', 'none' );
			
			if ( this.navLinks && this.navLinks[ this.currentSlide.index ] )
				this.navLinks[ this.currentSlide.index ].removeClass( 'selected' );
		}
		
		var $el = this.slides[ i ];
		
		this.currentSlide = {
			$el: this.slides[ i ],
			index: i
		};
		
		$el.setStyle( 'display', 'block' );
		
		if ( this.navLinks && this.navLinks[ i ] )
			this.navLinks[ i ].addClass( 'selected' );
	},
	
	slideChanged: function( $el )
	{
		this.checkForMaps( $el );
	},
	
	checkForMaps: function( $el )
	{
		var maps = $el.getElements( '.aurora-map' );
		
		if ( !maps.length )
			return;
		
		// For each map, create it if it has auto create disabled and we haven't created it yet
		maps.each( function( $map ) {
		
			var map = $map.retrieve( 'map' );
			
			if ( !map.options.autoCreate && !map._created )
				map.create();
		
		});
	}
	
});

document.addEvent( 'domready', function() {

	$$( '.aurora-slides' ).each( function( $el ) {
		$el.store( 'slides', new Aurora.Slides( $el, $el.getDataFromComment() ) );
	});

});


/*
Class: Expander
*/
Aurora.Expander = new Class({
	
	Implements: Options,
	
	options: {
		startExpanded: false,
		labelClass: 'aurora-expander-label',
		labelClass_close: 'aurora-expander-close',
		contentClass: 'aurora-expander-content',
		labelClass_expanded: 'aurora-expander-label-expanded',
		labelClass_contracted: 'aurora-expander-label-contracted',
		contentClass_expanded: 'aurora-expander-content-expanded',
		contentClass_contracted: 'aurora-expander-content-contracted',
		fx: true
	},
	
	initialize: function( target, options )
	{
		this.setOptions( options );
		this.$el = $( target );

		this.$content = this.$el.getElement( '.' + this.options.contentClass );
		this.$label = this.$el.getElement( '.' + this.options.labelClass );
		this.$close = this.$el.getElement( '.' + this.options.labelClass_close );
		
		this.defaults = {
			overflow: this.$content.getStyle( 'overflow' )
		};
		
		if ( this.options.startExpanded )
		{
			// Should be expanded in CSS, so no need to call expand();
			this.isExpanded = true;
		}
		else
		{
			this.$content.setStyles({ 'display' : 'none' });
			this.isExpanded = false;
		}
			
		// Event bindings
		this.$label.addEvent( 'click', this.toggle.bind( this ) );
		
		if ( this.$close ) {
			this.$close.addEvent( 'click', this.contract.bind( this ) );
		}

	},
	
	toggle: function()
	{
		if ( this.isExpanded )
			this.contract();
		else
			this.expand();
	},
	
	expand: function()
	{
		var defaults = this.defaults;
		
		if ( this.options.fx )
		{
			this.$content.setStyles({
					display: 'block',
					visibility: 'hidden',
					position: 'absolute'
				});
			
			var toHeight = this.$content.getSize().y;
			
			this.$content.setStyles({
					height: 1,
					position: 'relative',
					overflow: 'hidden',
					visibility: 'visible'
				})
				.get('tween')
					.start( 'height',  1, toHeight )
					.chain( function() {
						this.element.setStyles({
								height: '',
								overflow: defaults.overflow
							}); 
					});
		}
		else
		{
			this.$content.setStyles({
				display: 'block',
				visibility: 'visible'
			 });
		}
		
		this.$label.removeClass( this.options.labelClass_contracted ).addClass( this.options.labelClass_expanded );
		this.$content.removeClass( this.options.contentClass_contracted ).addClass( this.options.contentClass_expanded );
		
		this.isExpanded = true;
	},
	
	contract: function()
	{
		if ( this.options.fx )
		{
			this.$content.setStyle( 'overflow', 'hidden' )
				.get('tween')
				.start( 'height',  1 ).chain( function() {
					this.element.setStyles({
							height: '',
							display: 'none'
					}); 
				 });
		}
		else
		{
			this.$content.setStyles({ 'display' : 'none' });
		}
		
		this.$label.removeClass( this.options.labelClass_expanded ).addClass( this.options.labelClass_contracted );
		this.$content.removeClass( this.options.contentClass_expanded ).addClass( this.options.contentClass_contracted );
		
		this.isExpanded = false;
	}
	
});

document.addEvent( 'domready', function() {

	$$( '.aurora-expander' ).each( function( $el ) {
		$el.store( 'expander', new Aurora.Expander( $el, $el.getDataFromComment() ) );
	});

});


/*
	Class: ChildFader
*/
Aurora.ChildFader = new Class({
	
	Implements: Options,
	
	options: {
		duration: 500,
		interval: 1000,
		overlap: true,
		pauseOnHover: true
	},
	
	initialize: function( target, options )
	{
		var $el = $( target );
		this.setOptions( options );
		
		var children = $el.getChildren();
		
		children.each( function( $child, i ) {
			
			$child.setStyles({
				position: 'absolute',
				opacity: (i) ? 0 : 1, // leave the first child visible
				display: 'block'
			});
			
		});
		
		var currentlyVisible = 0;
		var currentlyHovered = false;
		
		var wait = ( this.options.overlap ) ? 0 : this.options.duration;
		var duration = this.options.duration;
		
		if ( this.options.pauseOnHover )
		{
			$el.addEvent( 'mouseenter', function() { currentlyHovered = true; } );
			$el.addEvent( 'mouseleave', function() { currentlyHovered = false; } );
		}
		
		(function() {
			
			if ( currentlyHovered )
				return;
			
			children[ currentlyVisible ].set( 'tween', { duration: this.options.duration } ).tween( 'opacity', 0 );
			
			currentlyVisible++;
			
			if ( currentlyVisible >= children.length )
				currentlyVisible = 0;
			
			(function() {
				children[ currentlyVisible ].set( 'tween', { duration: duration } ).tween( 'opacity', 1 );
			}).delay( wait );
			
		}).periodical( options.interval + wait, this );
		
	}
	
});

document.addEvent( 'domready', function() {

	$$( '.aurora-fadechildren' ).each( function( $el ) {
		$el.store( 'childfader', new Aurora.ChildFader( $el, $el.getDataFromComment() ) );
	});

});


Aurora.Floating = new Class({
	
	Implements: Options,
	
	options: {
		width: null,
		align: 'right',
		offset: 0
	},
	
	initialize: function( target, options )
	{
		this.setOptions( options );
		
		this.$el = target.getElement( '.aurora-floating-box' );
		
		this.$track = target;
		
		this.$track.setStyles({
			height: '100%',
			overflow: 'visible',
			position: 'absolute',
			width: this.options.width
		});
		
		switch( this.options.align )
		{
			case 'left':
				this.$track.setStyle( 'left', 0 );
			break;
			
			case 'right':
				this.$track.setStyle( 'right', 0 );
			break;
		}
		
		this.listen();
	},
	
	listen: function()
	{
		var position = this.$el.getPosition().y,
			trackSize = this.$track.getSize().y;
		
		var move = (function() {
		
			var scroll = $( document.body ).getScroll().y,
				height = this.$el.getDimensions().y,
				offset = this.options.offset;
			
			// Should element be floating?
			var floating = ( scroll > ( position - offset ) );
			
			// Has element reached the bottom?
			var bottom = ( ( scroll - position ) > ( trackSize - height - offset ) );
			
			// Position as needed
			if ( floating && !bottom )
			{
				this.$el.setStyles({
					position: 'fixed',
					top: offset,
					bottom: 'auto'
				});
			}
			else if ( bottom )
			{
				this.$el.setStyles({
					position: 'absolute',
					top: 'auto',
					bottom: 0
				});
			}
			else
			{
				this.$el.setStyles({
					position: 'absolute',
					top: 'auto'
				});
			}
		
		}.bind( this ));
		
		// Initial positioning
		move();
		
		// Add scroll event
		window.addEvent( 'scroll', move );
	
	}
	
});

document.addEvent( 'domready', function() {

	$$( '.aurora-floating' ).each( function( $el ) {
		$el.store( 'floating', new Aurora.Floating( $el, $el.getDataFromComment() ) );
	});

});


/*
Function: Aurora.loadSparkleData
	
	Path argument maps to /Resources/[businessKey]/Sites/[siteKey]/Sparkle/Remotes/[path]
	
	Aurora.loadSparkleData( { data: data } )
		.then( function( rtn ) { $log( rtn ); } );
	
*/
Aurora.loadSparkleData = function( options ) {
	
	var onCompleteQueue = [];
	
	var proxy = {
		then: function( fn ) { onCompleteQueue.push( fn ) }
	};
	
	var process = function( rtn )
	{
		if ( !rtn.success )
		{
			$log( 'Could not load sparkle data.' );
		}
		else
		{
			var response;
			
			try {
				response = JSON.decode( rtn.html )
			}
			catch( e ) {
			
				$log( 'Error decoding Sparkle return:', e );
				return;
			
			}
			
			if ( !response )
			{
				$log( 'Could not parse sparkle data.' );
				return;
			}
			
			$log( 'Successfully parsed sparkle data.' );
			
			while ( onCompleteQueue.length )
				onCompleteQueue.shift()( response );
		
		}
	
	};
	
	Aurora.loadSparkle( options )
		.then( function( rtn ) {
			process( rtn );
		});
		
	return proxy;
};


/*
Class: Aurora.Form
*/
Aurora.Form = new Class({
	
	Implements: Options,
	
	options: {
		
		target: null,
		
		fields: [],
		
		submitMethod: null,
		
		submitBtn: null,
		feedbackEl: null,
		activityEl: null,
		messageEl: null,
		
		fadeFeedback: false,
		
		displayFeedback: true,
		
		ignoreFields: false,
		
		detectFields: false,
		
		scrollToError: true,
		
		scrollToFeedback: false,
		
		validationMode: 'submit',
		
		hideHints: false,
		
		resetFields: false,
		
		focusField: null,
		
		hideMenu: false,
		
		splitMemberNameFrom: null,
		memberNameCheckPopup: null,
		
		invalidMessage: '',
		
		validFieldMessage: '',
		invalidFieldMessage: '',
		validatingFieldMessage: '',
		
		onSuccess: null,
		onFail: null,
		onValidation: null,
		onSubmission: null,
		onTransmission: null
	
	},
	
	_status: 'waiting',
	
	_preSubmitQueue: [],
	
	initialize: function( target, options )
	{
		var $el = this.$el = $( target );
		
		if ( !options ) {
			$log( 'A form was detected without any valid options.' );
			return;
		}
		
		this.setOptions( options );
		
		if ( !this.options.target ) {
			$log( 'A form was detected without a valid path.' );
			return;
		}
		
		// Submit Button
		var $submit = this.$submit = $( this.options.submitBtn );
		
		if ( !$submit && this.options.submitBtn )
			alert( 'Submit button specified in form options is invalid, unable to find: [#' + this.options.submitBtn + ']' )
		
		if ( !this.options.submitBtn )
			$submit = this.$submit = this.options.submitBtn = target.getElement( 'input[type=submit]' );
		
		
		// Feedback Element (optional)
		var $feedback = this.$feedback = this.options.feedbackEl = $( this.options.feedbackEl );
		
		if ( this.options.displayFeedback && !this.options.feedbackEl )
			$feedback = this.$feedback = this.options.feedbackEl = $el;
		
		
		// Activity (optional, tries to find it based on a class)
		var $activity = this.$activity = $el.getElement( '.aurora-form-activity' );
		
		if ( this.options.activityEl )
			$activity = this.$activity = $( this.options.activityEl );
		
		
		// Message (optional, tries to find it based on a class)
		var $message = this.$message = $el.getElement( '.aurora-form-message' );
		
		if ( this.options.messageEl )
			$message = this.$message = $( this.options.messageEl );
		
		
		// Define field map
		var fieldMap = {};
		
		
		// Set validation errors
		this._validationErrors = [];
		
		
		// Gather
		var gather = (function() {
		
			// Add field (called from the loops below)
			var addField = (function(f) {
			
				var $el = null,
					options = {},
					key = null;
				
				switch( $type(f) )
				{
					case 'object':
					
						$el = this.$el.getElement( 'input[name=' + f.key + ']' );
						
						options = f;
						
						$extend( options, { fieldOnly: true } );
						
						key = f.key;
						
					break;
					
					case 'element':
					
						$el = f;
						
						// Simple field
						var isFieldTag = /^(input|select|textarea)$/i.test( $el.get( 'tag' ) );
						
						if ( isFieldTag )
						{
							$extend( options, { fieldOnly: true } );
							key = f.getProperty( 'name' );
						}
						
						// Complex field
						else
						{
							$el = f;
							
							options = $el.getDataFromComment() || {};
							
							var $fields = $el.getElements( 'textarea,select,input' );
							
							options.fields = $fields;
							
							if ( options.key )
							{
								key = options.key;
							}
							else
							{
								switch( $type( $fields ) )
								{
									case 'array':
										var firstField = $fields[0],
											key = firstField.getProperty( 'name' ); // For now this is fine
									break;
									
									default: // Single field
										key = $fields.getProperty( 'name' );
								}
							}
						}
						
					break;
				}
				
				// Create the field (only if it doesn't exist)
				if ( key && !fieldMap[ key ] )
					fieldMap[ key ] = new Aurora.Form.Field( $el, this, options );
			
			}.bind( this ));
		
			/* Method 1: Array (fields array supplied to form) */
			var suppliedFields = this.options.fields;
				suppliedFields.each( function(f) { addField(f) });
			
			/* Method 2: Class (gather values from fields with class .aurora-field) */
			var classFields = this.$el.getElements( '.aurora-field' );
				classFields.each( function(f) { addField(f) });
			
			/* Method 3: Loop all other fields (look for inputs that haven't been detected yet, only if detectFields is true) */
			if ( this.options.detectFields )
			{
				var otherFields = this.$el.getElements( 'input,textarea' );
					otherFields.each( function(f) { addField(f) });
			}
			
			// Log fields
			// $log( fieldMap );
			
			// Store fields
			var fields = this.fields = $H( fieldMap );
			
			// Check to see if we have any file fields, and change the submit method if need be
			fields.each( (function(f) {
			
				if ( f.type == 'file' )
					this.options.submitMethod = 'iframe';
			
			}.bind( this )));
		
		}.bind( this ));
		
		
		// Gather fields together
		gather();
		
		
		// Add event to submit button
		if ( $submit )
		{
			$submit.addEvent( 'click', (function(e) {
			
				e.stop();
				this.validateForm();
			
			}.bind( this )));
		}
		
		
		// Focus a field
		if ( this.options.focusField )
		{
			var focusField = this.fields[ this.options.focusField ];
			
			if ( focusField )
				focusField.$field.focus();
		}
	
	},
	
	validateForm: function()
	{
		$log( 'Validating fields...' );
	
		if ( this._status == 'validating' || this._status == 'submitting' )
		{
			$log( 'The form is already in a validating or submitting state, please wait...' );
			return;
		}
		
		this._status = 'validating';
		
		this._validationErrors = [];
		
		this.fields.each( (function(f) {
			
			// Check if the field is valid
			var valid = false;
			
			// TW: This will probably eventually be removed - We always need to check if a field is valid even if we have validated it before, otherwise the user could have changed the value.
			/* if ( f.valid == 'yes' )
			{
				valid = true;
			}
			else
			{*/
			
				if ( f.options.validate || f.options.required )
					f.validate();
			
			// }
			
		}.bind( this )));
		
		this.preSubmitForm();
	
	},
	
	preSubmitForm: function()
	{
		$log( 'Pre Submit Form...' );
		
		// Call custom function (if it exists)
		if ( this.options.onSubmission )
			this.doCallback( this.options.onSubmission );
			
		this.toggleForm();
		
		// Check if theres any actions queued first
		if ( this._preSubmitQueue.length )
		{
			// Show activity
			if ( this.$activity )
				this.$activity.show();
		
			$log( 'There are actions still queued, waiting for completion...' );
			
			return;
		}
		
		// Otherwise check if we have any validation errors
		else if ( this._validationErrors.length )
		{
			$log( 'There are validation errors:', this._validationErrors );
			
			// Scroll to first error
			if ( this.options.scrollToError )
			{
				var firstError = this._validationErrors[0],
					$errorEl = firstError.$el;
				
				if ( $errorEl )
					new Fx.Scroll( document.body ).toElement( $errorEl ).chain( function() { firstError.$field.focus() } );
			}
			
			// Show message
			if ( this.$message )
				this.$message.show().set( 'html', ( this.options.invalidMessage ? this.options.invalidMessage : 'Please ensure all fields are completed.' ) );
			
			// Call custom function and pass errors (if it exists)
			if ( this.options.onValidation )
				this.doCallback( this.options.onValidation, this._validationErrors );
			
			// Hide activity
			if ( this.$activity )
				this.$activity.hide();
				
			this.toggleForm( true );
			
			this._status = 'waiting';
		}
		else
		{
			// Call custom function and pass no errors (if it exists)
			if ( this.options.onValidation )
				this.doCallback( this.options.onValidation, false );
			
			this.submitForm();
		}
	},
	
	checkSubmitQueue: function( remKey )
	{
		$log( 'Removing [' + remKey + '] from submit queue.' );
		
		if ( remKey )
			this._preSubmitQueue.erase( remKey );
		
		// If the submit queue is empty, pre submit the form again
		if ( !this._preSubmitQueue.length )
		{
			if ( this._status == 'validating' )
			{
				$log( 'Submit Queue is empty, attempting to submit again...' );
				this.preSubmitForm();
			}
			else
			{
				$log( 'Submit Queue is empty with no form submit detected.' );
			}
		}
	
	},
	
	toggleForm: function( revert )
	{
		if ( revert )
		{
			this.$el.removeClass( 'aurora-form-processing' );
			
			if ( this.$activity )
				this.$activity.hide();
			
			if ( this.$submit.retrieve( 'button' ) )
				this.$submit.retrieve( 'button' ).enable();
		}
		else
		{
			this.$el.addClass( 'aurora-form-processing' );
			
			if ( this.$activity )
				this.$activity.show();
			
			if ( this.$submit.retrieve( 'button' ) )
				this.$submit.retrieve( 'button' ).disable();
		}
	},
	
	submitForm: function()
	{
		var $el = this.$el,
			$activity = this.$activity,
			$message = this.$message,
			$submit = this.$submit,
			$feedback = this.options.feedbackEl;
		
		$log( 'Submitting form...' );
		
		// Check to see if we have already submitted the form
		if ( this._status == 'submitting' )
		{
			$log( 'The form is already in a submitting state, please wait...' );
			return;
		}
		
		this._status = 'submitting';
		
		// Call custom function (if it exists)
		if ( this.options.onTransmission )
			this.doCallback( this.options.onTransmission );
		
		if ( $message )
			$message.hide();
		
		// Gather values
		var data = {};
		
		// Ignore fields
		var ignoreFields = [];
		
		if ( this.options.ignoreFields )
			ignoreFields = this.options.ignoreFields.split( ',' );
		
		this.fields.each( (function( f, k ) {
		
			if ( ignoreFields.contains( f.name ) )
				return;
			
			var value = f.get( 'value' );
			
			switch( $type( value ) )
			{
				case 'string':
				case 'boolean':
				
					if ( ( this.options.splitMemberNameFrom && this.options.splitMemberNameFrom == f.name ) || f.options.splitAsMemberName )
					{
						if ( !value )
							return;
						
						var memberName = this.splitMemberName( value );
						
						$H( memberName ).each( function( string, key ) {
						
							if ( f.options.splitAsMemberName )
								data[ f.options.splitAsMemberName + '_' + key ] = string;
							else
								data[ key ] = string;
							
						});
					}
					else
						data[ k ] = value;
				
				break;
				
				case 'array':
					data[ k ] = value.toString();
				break;
				
				case 'object': // e.g group of checkboxes or date
				
					switch( f.options.type )
					{
						case 'dateSelects':
							return data[ k ] = value.cf;
						break;
					}
					
					switch( f.options.validate )
					{
						case 'date':
						case 'dob':
							return data[ k ] = value.cf;
						break;
						
						default:
							// $log( 'Detected object, adding the following group of data:', value );
							$extend( data, value );
					}
				
				break;
				
				default:
					$log( 'Warning: Unsupported data type from field detected: [' + $type( value ) + '], your form may be not be submitting correctly.' );
					return;
			}
		
		}.bind( this )));
		
		// Call action
		switch( this.options.submitMethod )
		{
			case 'iframe':
			
				$log( 'Submit form with:', data );
			
				var key = $time();
			
				// Create temporary iframe
				var $iframe = new Element( 'iframe', {
					id: key,
					name: key,
					src: 'about:blank',
					styles: 'display: none;' // width: 750px; height: 300px; border: 1px solid #B5B5B5; margin-bottom: 10px; display: block;
				}).inject( $el, 'top' );
				
				$el.setProperties({
					action: callActionURL + '?__iframeCallbackId__=' + key + '&action=sparkle.parse&path=' + this.options.target,
					enctype: 'multipart/form-data',
					method: 'post',
					target: key
				});
				
				$el.submit();
			
			break;
			
			default:
			
				$log( 'Submit form with:', data );
				
				Aurora.loadSparkle({
					path: this.options.target,
					data: data
				}).then( (function( rtn ) {
				
					this.processResponse( rtn );
				
				}.bind( this )));
			
			break;
		}
	},
	
	processResponse: function( rtn )
	{
		var $el = this.$el,
			$activity = this.$activity,
			$message = this.$message,
			$submit = this.$submit,
			$feedback = this.options.feedbackEl;
		
		if ( this._status != 'submitting' )
		{
			$log( 'Cannot process form, currently in [' + this._status + '] stage.' );
			return;
		}
		
		this._status = 'submitted';
		
		if ( rtn.success )
		{
			$log( 'Form submission successful.', rtn );
			
			if ( $feedback )
			{
				if ( this.options.fadeFeedback )
				{
					$el.get( 'tween' )
						.setOptions({
							duration: 300,
							transition: 'linear'
						})
						.start( 'opacity', 0 )
						.chain( (function() {
							
							var formSize = $el.setStyle( 'overflow', 'hidden' ).getDimensions();
							
							$el.hide();
							
							$feedback.empty();
							$feedback.set( 'html', rtn.html );
							
							var fbSize = $feedback.setStyle( 'overflow', 'hidden' ).getDimensions();
							
							$feedback.setStyles({ height: formSize.y });
							
							$feedback.show().setOpacity(0);
							
							$feedback.get( 'tween' )
								.setOptions({
									duration: 300,
									transition: 'linear'
								})
								.start( 'height', fbSize.y )
								.chain( (function() {
									
									$feedback.get( 'tween' )
										.start( 'opacity', 1 );
									
									if ( this.options.hideMenu )
										this.hideMenu();
									
									this.formCompleted();
									
								}.bind( this )));
						
						}.bind( this )));
				}
				else
				{
					$el.hide();
					
					$feedback.empty();
					$feedback.show();
					$feedback.set( 'html', rtn.html );
					
					this.formCompleted();
				}
				
				// Look for any aurora buttons that need initialising
				$feedback.getElements( '.aurora-button' ).each( function( $el ) {
					$el.store( 'button', new Aurora.Button( $el, $el.getDataFromComment() ) );
				});
			}
			else
				this.formCompleted();
			
			if ( this.options.onSuccess )
				this.doCallback( this.options.onSuccess, rtn );
		}
		else
		{
			$log( 'Form submission failed.' );
			
			if ( $message )
				$message.show().set( 'html', 'The form could not be submitted. ' + rtn.message );
			
			if ( this.options.onFail )
				this.doCallback( this.options.onFail, rtn );
		}
	},
	
	formCompleted: function()
	{
		var $el = this.$el,
			$activity = this.$activity,
			$message = this.$message,
			$submit = this.$submit,
			$feedback = this.options.feedbackEl;
	
		// Enable submit button (if its a button)
		if ( $submit.retrieve( 'button' ) )
			$submit.retrieve( 'button' ).enable();
		
		// Remove class from form
		$el.removeClass( 'aurora-form-processing' );
		
		// Hide activity
		if ( this.$activity )
			this.$activity.hide();
		
		// Reset fields
		if ( this.options.resetFields )
			this.resetFields();
			
		// Scroll to feedback
		if ( this.options.scrollToFeedback )
		{
			if ( $feedback )
				new Fx.Scroll( document.body ).toElement( $feedback );
		}
	
	},
	
	resetFields: function()
	{
		this.fields.each( function(f) {
			f.resetField();
		});
	},
	
	hideMenu: function()
	{
		var $curEl = this.$el,
			button = $( this.options.hideMenu ).retrieve( 'button' );
		
		(function() {
			
			var $menu = button.$target;
			
			$menu.get( 'tween' )
				.setOptions({
					duration: 150,
					transition: 'linear'
				})
				.start( 'opacity', 0 )
				.chain( (function() {
				
					$menu.setOpacity(1).hide();
				
				}.bind( this )));
			
			button._menuIsOpen = false;
		
		}).delay( 1500 );
		
	},
	
	splitMemberName: function( name )
	{
		var rtn = { firstName: '', lastName: '', salutation: '' };
		
		var a = name.split(' ');
		
		for ( var i = 0; i < a.length; i++ )
		{
			if ( !/[a-z]/.test( a[i] ) ) a[i] = a[i].toLowerCase();
			a[i] = a[i].capitalize( true );
		}
		
		if ( a.length == 1 )
		{
			rtn.firstName = a[0];
		}
		else
		{
			var sal = a[0].toLowerCase();
			
			if ( /^(mr|mrs|miss|ms|sir|madam|dr)$/.test( sal ) )
				rtn.salutation = a.shift();
			
			rtn.lastName = a.pop();
			rtn.firstName = a.join(' ');
		}
		
		return rtn;
	},
	
	toElement: function()
	{
		return this.$el;
	},
	
	doCallback: function( fn, data )
	{
		try {
			if ( $type( fn ) == 'string' )
				fn = eval( fn )( data );
			
			if ( $type( fn ) == 'function' )
				return fn( data );
		}
		catch(e) {
			$log( 'Error doing callback function: ' + fn );
		}
	},
	
	set: function( what, value )
	{
		switch ( what )
		{
			default:
				this.store[ what ] = value;
		}
		
		return this;
	},
	
	get: function( what )
	{
		switch ( what )
		{
			case 'fields':
				return this.fields;
			
			default:
				return this.store[ what ];
		}
	}
	
});

Aurora.Form.Field = new Class({
	
	Implements: [ Events, Options ],
	
	options: {
	
		form: null,
		
		type: null, // file, dob
		
		key: null,
		
		required: false,
		
		validate: false,
		
		fieldOnly: false, // internal use only
		
		showHintOnFocus: false,
		showHint: false,
		
		hideHint: false,
		
		submitForm: false,
		
		matchField: null,
		
		minLength: 1,
		
		hint: '',
		
		fileType: null,
		fileTypes: null,
		
		minDate: false,
		maxDate: false,
		
		validMessage: '',
		invalidMessage: ''
		
	},
	
	initialize: function( field, form, options )
	{
		this.setOptions( options );
		
		this.$el = field;
		
		// Define field(s)
		this.$field = null;
		this.$fields = [];
		
		if ( this.options.fieldOnly )
		{
			this.$field = this.$el;
		}
		else
		{
			if ( !options.fields )
				return;
			
			// If the field has multiple elements, it means we have more than one field
			if ( options.fields.length > 1 )
				this.$fields = options.fields;
				
			// Set the field to the first element in the array (so if the array was only equal to 1, handle it like a single field, otherwise
			// if there are several, we use the first field to detect the type of input and other information
			this.$field = options.fields[0];
		}
		
		
		// Hint
		this.$hint = this.$el.getElement( '.aurora-field-feedback' );
		
		
		// Form
		this.form =	form;
		this.$form = this.form.toElement();
		
		
		// Tag
		this.tag = this.$field.get( 'tag' );
		this.type = this.$field.getProperty( 'type' );
		
		
		// Name
		this.name = this.$field.getProperty( 'name' );
		
		
		// Type
		if ( !this.options.type && this.type == 'file' )
			this.options.type = 'file';
			
		switch( this.options.type )
		{
			case 'file':
			
				this.$selection = this.$el.getElement( '.aurora-file-selection' );
				
				if ( this.$selection )
					this.$selection.addClass( 'aurora-file-selection-none' );
				
				this.$browse = this.$el.getElement( '.aurora-file-browse' );
			
			break;
			
			case 'date':
				
				new Aurora.Form.Field.Date( this );
				
				// Enforce date validation
				this.options.validate = 'date';
				
			break;
			
			case 'dateSelects':
				
				var hasSelects = this.$el.getElement( 'select' );
				
				if ( !hasSelects )
				{
					var $input = this.$el.getElement( 'input' );
					
					if ( !$input ) {
						$log( 'Date selects require a standard input field.' );
						return;
					}
					
					$input.hide();
					
					var $selects = new Element( 'div', { 'class': 'aurora-date-selects' } );
					
					// Day
					var $day = this.$day = new Element( 'select', { 'class': 'aurora-date-day' } ).inject( $selects );
					
					new Element( 'option' ).inject( $day );
					
					for ( var d = 1; d <= 31; d++ )
						new Element( 'option', { html: d, value: d } ).inject( $day );
					
					// Month
					var $month = this.$month = new Element( 'select', { 'class': 'aurora-date-month' } ).inject( $selects );
					
					var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
					
					new Element( 'option' ).inject( $month );
					
					months.each( function( m, i ) {
						new Element( 'option', { html: m, value: i } ).inject( $month );
					});
					
					// Year
					var $year = this.$year = new Element( 'select', { 'class': 'aurora-date-year' } ).inject( $selects );
					
					new Element( 'option' ).inject( $year );
					
					for ( var y = 1900; y <= 2020; y++ )
						new Element( 'option', { html: y, value: y } ).inject( $year );
						
					$selects.inject( $input, 'after' );
				}
				else
				{
					var $day = this.$day = this.$el.getElement( '.aurora-date-day' );
					var $month = this.$month = this.$el.getElement( '.aurora-date-month' );
					var $year = this.$year = this.$el.getElement( '.aurora-date-year' );
				}
				
				this.$fields.push( $day, $month, $year );
				
				// Enforce dateSelects validation
				this.options.validate = 'dateSelects';
				
				// Overide the type in select fields case as we replace hide the original input field
				this.type = 'select-one';
			
			break;
		}
		
		
		// Min/Max Dates
		if ( this.options.minDate )
			this.minDate = new Date().parse( this.options.minDate );
			
		if ( this.options.minDate )
			this.maxDate = new Date().parse( this.options.maxDate );
		
		
		// Misc
		if ( ( this.$hint && this.form.options.hideHints && !this.options.showHint ) || this.options.hideHint )
			this.$hint.hide();
		
		
		if ( this.$hint && this.options.hint )
			this.$hint.set( 'html', this.options.hint );
		
		if ( this.options.required && !this.options.validate )
			this.options.validate = 'length';
		
		if ( !this.options.required && !this.options.validate )
			this.valid = 'yes';
		else
			this.valid = 'no';
		
		
		// Add flag if its an action
		this.customAction = false;
		
		if ( !/^(length|password|match|numeric|date|dob|email|dateSelects)$/.test( this.options.validate ) )
			this.customAction = true;
		
		
		// Init Events
		this.initEvents();
	},
	
	initEvents: function()
	{
		var form = this.form;
	
		// Generic events
		this.$field.addEvents({
		
			'keypress': (function( event ) {
			
				// TW: Disable for now...
				
				return;
				
				if ( event.key == 'enter' )
				{
					event.stop();
					
					// Delay it by 100ms so any other actions can complete (e.g if using Aurora.Suggest and its filling the field)
					(function() {
						form.validateForm();
					}).delay( 100 );
				}
			
			}.bind( this ))
		
		});
	
		// Validation Mode
		var mode = form.options.validationMode;
		
		if ( this.options.validate )
		{
			switch( mode )
			{
				case 'instant':
				
					// Execute validation
					var doValidation = (function( event, blur ) {
					
						var delay = ( blur ? 0 : 500 );
						
						if ( /^(length|password|match|numeric|email|dob)$/i.test( this.options.validate ) )
							delay = 250;
						
						if ( this.tag == 'select' )
							delay = 0;
							
						if ( /^(radio|checkbox|file)$/i.test( this.type ) )
							delay = 0;
						
						// If its not required and we don't have a value, we don't need a delay
						if ( !this.options.required && !this.get( 'value' ) )
							delay = 0;
						
						if ( !blur && event.key == 'tab' )
							return;
						
						$clear( this.executeValidation );
						
						this.executeValidation = (function() {
						
							this.validate();
							
						}.bind( this )).delay( delay );
					
					}.bind( this ));
					
					
					// Add events to execute validation
					var addEvents = (function( $field ) {
					
						$field.addEvents({
						
							'keyup': (function(e) { doValidation(e) }),
							
							'blur': (function(e) {
							
								if ( this.valid != 'processing' ) // don't do anything if 'processing'
									doValidation( e, true );
								
								// TW: Future enhancement - if ( this.valid == 'no' ) // don't do anything if its 'yes' or 'processing'
							
							}.bind( this ))
						
						});
						
						switch( this.type )
						{
							case 'file': // if ( this.options.type == 'file' )
							
								$field.addEvents({ 'change': (function(e) { doValidation(e) }.bind( this )) });
							
							break;
							
							case 'checkbox':
							case 'radio':
							case 'select-one': // $field.get( 'tag' ) == 'select';
								
								$field.addEvents({
								
									'click': (function(e) {
									
										// Special case: If its a select field and we haven't registered a click yet, don't do anything (otherwise
										// when the user clicks it the first time, it will display the valid message, as the selectfield might have
										// a predefined value set...)
										if ( this.type == 'select-one' && !this._clicked )
										{
											this._clicked = true;
											return;
										}
										
										doValidation(e);
									
									}.bind( this ))
								
								});
								
							break;
						}
					}.bind( this ));
					
					
					// Add events to each field inside the group or add it to the single field
					if ( this.$fields.length )
					{
						this.$fields.each( function(f) {
							addEvents(f);
						});
					}
					else
					{
						addEvents( this.$field );
					}
					
				break;
			}
		}
		
		// Show Hint on Focus
		if ( this.options.showHintOnFocus )
		{
			this.$field.addEvents({
			
				'focus': (function() {
					
					if ( this.$hint )
						this.$hint.show();
				
				}.bind( this ))
			
			});
		}
	},
	
	clearStatus: function()
	{
		// Remove current status
		this.valid = 'no';
		
		this.$field
			.removeClass( 'aurora-field-valid' )
			.removeClass( 'aurora-field-invalid' );
		
		if ( this.$hint )
			this.$hint
				.removeClass( 'aurora-field-feedback-validating' )
				.removeClass( 'aurora-field-feedback-valid' )
				.removeClass( 'aurora-field-feedback-invalid' );
	
	},
	
	isValid: function( msg, hide )
	{
		$log( '--> Field [' + this.name + '] is valid.' );
	
		var form = this.form;
		
		// Valid (ability to provide a custom msg (from an action) as well as hide the
		// hint if need be (field isn't required yet field is valid if nothing is entered))
		
		this.clearStatus();
		
		this.$field.addClass( 'aurora-field-valid' ); // Should we do this if field is not required yet field is valid? (already hiding hint)
		
		// Determine message
		var validMessage = this.validMessage = msg;
		
		// Manage hint
		if ( this.$hint )
		{
			switch( this.options.type )
			{
				case 'date':
				
					this.$hint.show().addClass( 'aurora-field-feedback-valid' );
				
				break;
				
				default:
				
					if ( hide )
						this.$hint.hide();
					else
					{
						if ( !validMessage )
							validMessage = this.validMessage = this.options.validMessage || form.options.validFieldMessage;
						
						this.$hint.show().addClass( 'aurora-field-feedback-valid' ).empty();
						this.$hint.set( 'html', validMessage );
					}
			}
		}
		
		// Custom procesing
		switch( this.options.type )
		{
			case 'file':
			
				if ( this.options.validBrowseText )
					if ( this.$browse )
						this.$browse.set( 'text', this.options.validBrowseText );
				
				if ( this.$selection )
					this.$selection
						.set( 'html', this.get( 'value' ) )
						.removeClass( 'aurora-file-selection-none' )
						.addClass( 'aurora-file-selection-selected' )
						.show();
			
			break;
		}
		
		this.valid = 'yes';
		
		// Submit form (for file fields)
		if ( this.options.submitForm )
		{
			// Don't submit twice (the change event is sometimes fired twice)
			if ( this._file == this.get( 'value' ) )
			{
				$log( 'Change event fired but the same file was selected.' );
				return;
			}
			
			this._file = this.get( 'value' );
			
			form.submitForm();
		}
		
		return 'yes';
	},
	
	isInvalid: function( msg )
	{
		$log( '--> Field [' + this.name + '] is invalid: ' + msg );
		
		var form = this.form;
		
		this.clearStatus();
		
		this.$field.addClass( 'aurora-field-invalid' );
		
		// Determine message
		var invalidMessage = this.invalidMessage = msg;
		
		// Manage hint
		if ( this.$hint )
		{
			switch( this.options.type )
			{
				case 'date':
				
					this.$hint.show().addClass( 'aurora-field-feedback-invalid' );
				
				break;
				
				default:
					
					if ( !invalidMessage )
						invalidMessage = this.invalidMessage = this.options.invalidMessage || form.options.invalidFieldMessage;
					
					this.$hint.show().addClass( 'aurora-field-feedback-invalid' ).empty();
					this.$hint.set( 'html', invalidMessage );
			}
		}
		
		// Custom procesing
		switch( this.type )
		{
			case 'file':
			
				if ( this.$selection )
					this.$selection
						.set( 'html', '(none selected)' )
						.removeClass( 'aurora-file-selection-selected' )
						.addClass( 'aurora-file-selection-none' );
			
			break;
		}
		
		this.valid = 'no';
		
		// Add to validation errors array
		form._validationErrors.push( this );
		
		return 'no';
	
	},
	
	validate: function()
	{
		var form = this.form,
			name = this.name,
			value = this.get( 'value' );
		
		var fields = this.$form.retrieve( 'form' ).get( 'fields' ); // unable to get directly from form...
		
		// Perform specific validation
		var check = (function( type ) {
		
			// If a field is not required and has no value, its theoretically valid
			if ( !this.options.required && !value.length )
			{
				this.isValid( false, true );
				return;
			}
			
			switch( type )
			{
				// Length
				case 'length':
				
					switch( this.type )
					{
						case 'file':
							
							if ( !value.length )
								this.isInvalid();
							
							var fileTypes = [];
							
							if ( this.options.fileType )
							{
								switch( this.options.fileType )
								{
									case 'image': fileTypes = [ 'jpg', 'jpeg', 'gif', 'png' ]; break;
									case 'document': fileTypes = [ 'doc', 'docx', 'pdf', 'pages' ]; break;
									case 'audio': fileTypes = [ 'wav', 'mp3', 'aac' ]; break;
								}
							}
							else if ( this.options.fileTypes )
							{
								fileTypes = this.options.fileTypes.split(',');
							}
							
							if ( !fileTypes.length )
							{
								this.isValid();
								return;
							}
							
							var ext = value.split('.').getLast().toLowerCase();
							
							if ( fileTypes.contains( ext ) )
								this.isValid();
							else
							{
								// alert( 'This file is not supported. Please choose a valid file.' )
								this.isInvalid();
							}
						
						break;
						
						case 'checkbox':
							
							// Multiple fields (handle the object returned)
							if ( !$H( value ).getLength() )
								this.isInvalid();
							else
								this.isValid();
								
							return;
						
						break;
						
						default:
						
							// Single field
							if ( value.length < this.options.minLength )
								this.isInvalid();
							else
								this.isValid();
					
					
					}
					
				break;
				
				// Password (same as length, keeping it seperate for now...)
				case 'password':
				
					if ( value.length < this.options.minLength )
						this.isInvalid();
					else
						this.isValid();
					
				break;
				
				// Match
				case 'match':
				
					var matchField = fields[ this.options.matchField ];
					
					if ( !matchField ) {
						$log( 'No matching field could be found, check that you have specified the correct field first.' );
						return;
					}
					
					var matchValue = matchField.get( 'value' );
					
					if ( value != matchValue )
						this.isInvalid();
					else
						this.isValid();
				
				break;
				
				// Numeric
				case 'numeric':
				
					value = value.toString().replace( / /g, '' );
					
					if ( !/^ *[0-9]+ *$/.test( value ) )
						this.isInvalid();
					else
						this.isValid();
				
				break;
				
				// Date
				case 'date':
				
					var valueTime = value.parsed.get( 'time' );
					
					// Check min date
					if ( this.options.minDate )
					{
						minDateTime = this.minDate.get( 'time' );
					
						if ( valueTime < minDateTime )
						{
							this.isInvalid();
							return;
						}
					}
					
					// Check max date
					if ( this.options.maxDate )
					{
						maxDateTime = this.maxDate.get( 'time' );
					
						if ( valueTime > maxDateTime )
						{
							this.isInvalid();
							return;
						}
					}
					
					if ( value.cf )
						this.isValid();
					else
						this.isInvalid();
				
				break;
				
				case 'dateSelects':
				
					// Validate only if we have all 3 values or are now validating the form before submit
					if ( this.form._status != 'validating' )
						if ( !value.day || !value.month || !value.year )
							return;
					
					if ( value.cf )
						this.isValid();
					else
						this.isInvalid();
				
				break;
				
				// DOB (backwards compatibility, no longer used)
				case 'dob':
				
					// Caters for slash, hyphen and period, must be valid date, takes leap years into account)
					if ( !/^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/.test( value.stored ) )
						this.isInvalid();
					else
						this.isValid();
				
				break;
				
				// Email
				case 'email':
				
					if ( !/^[\w\-]+(\.[\w\-]+)*@[\w\-]+\.([\w\-]+\.)*[a-z]{2,}$/i.test( value ) )
						this.isInvalid();
					else
						this.isValid();
				
				break;
				
				// Test for Sparkle action or abort
				default:
					
					// $log( 'Calling sparkle action...' );
					
					if ( !value.length )
					{
						this.isInvalid();
						return;
					}
					
					form._preSubmitQueue.push( this.name );
					
					this.valid = 'processing';
					
					this.clearStatus();
					
					if ( this.$hint )
					{
						this.$hint.show().addClass( 'aurora-field-feedback-validating' );
						this.$hint.set( 'html', this.options.validatingMessage || form.options.validatingFieldMessage );
					}
					
					var process = (function( rtn ) {
					
						if ( !rtn.success )
							$log( 'Sparkle validation failed:', rtn );
							
						var msg = rtn.html.clean();
							fail = ( msg.slice( 0, 4 ) == 'fail' ),
							success = ( msg.slice( 0, 7 ) == 'success' );
						
						if ( fail )
						{
							msg = msg.slice( 6 );
							
							this.isInvalid( msg );
						}
						else if ( success )
						{
							msg = msg.slice( 9 );
							
							this.isValid( msg );
						}
						else
						{
							$log( 'Sparkle validation return could not be parsed for success/fail.', rtn );
						}
						
						// Remove action from queue and check if we have any other actions
						form.checkSubmitQueue( name );
						
					}.bind( this ));
					
					// Determine path
					var validatePath = this.options.validate,
						validateData = {};
					
					if ( $type( this.options.validate ) == 'object' )
					{
						validatePath = this.options.validate.path;
						validateData = this.options.validate.data;
					}
					
					// Call action
					var send = {
						path: validatePath,
						data: validateData
					};
					
					var name = this.get( 'name' );
					
					send.data[ name ] = value;
					
					Aurora.loadSparkle( send )
						.then( function( rtn ) {
						
							// Illusion... (the question is, should there be one?)
							(function() {
								process( rtn )
							}).delay( 500 );
						
						}.bind( this ));
				
			}
		
		}.bind( this ));
		
		
		// Check for a basic value if the field is required, has no value and is a simple field type
		if ( this.options.required && !value && /^(length|password|match|numeric|date|dob|email)$/.test( this.options.type ) )
		{
			this.isInvalid();
		}
		else
		{
			// Validation types
			var types = [];
			
			switch( $type( this.options.validate ) )
			{
				case 'string':
					types = $A( this.options.validate.split(':') );
				break;
				
				case 'object':
					types = [ this.options.validate ];
				break;
			}
			
			// validated = false;
			types.each( function( type ) {
			
				check( type );
			
				// if ( validated && !check( type ) )
					// validated = false;
			
			});
		}
		
		return this.valid;
	},
	
	toElement: function()
	{
		return this.$field;
	},
	
	getValue: function()
	{
		// Get field value
		var $form = this.$form,
			key = this.get( 'name' ),
			field = $form[ key ];
		
		// If its a collection of fields (like a radio, just use the first one, we don't need references to the others)
		if ( $type( field ) == 'collection' || $type( field ) == 'object' )
			field = field[0];
		
		// Gather some information
		if ( field )
		{
			$log( field );
		
			var value = field.value,
				tag = field.get( 'tag' ),
				type = field.getProperty( 'type' );
		}
		
		// If we have a type, bypass usual field detection, as we know what field to expect
		if ( this.options.type )
		{
			switch ( this.options.type )
			{
				case 'date':
				
					if ( !value )
						return false;
					
					var date = new Date.parse( value );
					
					if ( !date.isValid() )
						return false;
					
					var dateObj = {
						stored: value,
						parsed: date,
						cf: date.format( 'cf' )
					}
					
					return dateObj;
				
				break;
				
				case 'dateSelects':
				
					var day = this.$day.value,
						month = this.$month.value,
						year = this.$year.value;
					
					if ( !day || !month || !year )
						return false;
					
					var value = day + '/' + month + '/' + year,
						date = new Date.parse( value );
					
					if ( !date.isValid() )
						return false;
					
					var dateObj = {
						day: day,
						month: month,
						year: year,
						stored: value,
						parsed: date,
						cf: date.format( 'cf' )
					}
					
					return dateObj;
					
				break;
			}
		}
		
		switch( tag )
		{
			case 'input':
			
				switch( type )
				{
					case 'text':
					case 'password':
					case 'file':
					
						switch( this.options.validate )
						{
							case 'date':
							case 'dob':
							
								if ( !value )
									return false;
								
								var date = new Date.parse( value );
								
								var dateObj = {
									stored: value,
									cf: date.format( 'cf' )
								};
								
								return dateObj;
							
							break;
							
							default:
								return value;
						}
					
					break;
					
					case 'checkbox':
					
						// Single
						if ( !this.$fields.length )
							return field.get( 'checked' );
						
						// Multiple
						var values = {};
						
						// If we have a key, we need to send it all together as an array
						if ( this.options.key )
							values = [];
						
						for ( var i = 0; i <= this.$fields.length - 1; i++ ) {
						
							var $field = this.$fields[ i ];
							
							var checked = $field.checked;
							
							var name = this.options.key || $field.getProperty( 'name' );
							
							// If the checkbox has been checked, send it
							if ( checked )
							{
								switch( $type( values ) )
								{
									case 'object':
										values[ name ] = true;
									break;
									
									case 'array':
									
										var fieldValue = $field.get( 'value' ).toInt();
										
										if ( $type( fieldValue ) != 'number' || fieldValue == 'NaN' )
											$log( 'A checkbox was checked but the value was not a number, therefore it was not sent, the value was: ' + fieldValue );
										else
											values.push( fieldValue );
									
									break;
								}
								
							}
						
						};
						
						return values;
					
					break;
					
					case 'radio':
						
						var value = false;
						
						for ( var i = 0; i <= $form[ key ].length - 1; i++ ) {
							
							var checked = $form[ key ][ i ].checked;
							
							if ( checked )
								value = $form[ key ][ i ].value;
						
						};
						
						return value;
						
					break;
					
					default:
					
						return value;
				}
			
			case 'textarea':
			case 'select':
			
				return value;
			
			break;
		}
	
	},
	
	resetField: function()
	{
		var $form = this.$form;
		
		var $field = this.$field,
			$fields = this.$fields;
		
		var name = this.get( 'name' );
		
		var tag = this.tag,
			type = this.type;
		
		var reset = (function( field ) {
			
			switch( tag )
			{
				case 'input':
				
					switch( type )
					{
						case 'text':
						case 'password':
							field.value = '';
						break;
						
						case 'checkbox':
							field.checked = false;
						break;
						
						case 'radio':
								
							var key = this.get( 'name' );
								
							for ( var i = 0; i <= $form[ name ].length - 1; i++ ) {
								$form[ name ][ i ].checked = false;
							};
							
						break;
						
						default:
							field.value = '';
					}
				
				case 'textarea':
					field.value = '';
				break;
				
				case 'select':
					field.selectedIndex = 0;
				break;
			}
		
		}.bind( this ));
		
		// Reset values (still need to handle selects and radios)
		if ( $fields.length )
		{
			$fields.each( function(f) {
				reset(f);
			});
		}
		else
		{
			reset( $field );
		}
		
		// Remove classes
		this.clearStatus();
		
		// Empty and hide the hint element
		if ( this.$hint )
			this.$hint.empty().hide();
			
		// Remove status
		this._file = null;
		this._clicked = null;
	
	},
	
	set: function( what, value )
	{
		switch ( what )
		{
			case 'value':
			
				if ( this.value == value )
					return;
					
				this.value = value;
				
			break;
			
			default:
				this.store[ what ] = value;
		}
		
		return this;
	},
	
	get: function( what )
	{
		switch ( what )
		{
			case 'value':
				return this.getValue();
				
			case 'name':
				return this.$field.getProperty( 'name' );
			
			default:
				return this.store[ what ];
		}
	}
	
});

Aurora.Form.Field.Date = new Class({
	
	Extends: Aurora.Form.Field,
	
	options: {
	
		dateHint: 'eg. today, last monday',
		
		tooltip: false
		
	},
	
	initialize: function( field, options )
	{
		this.setOptions( options );
		
		this.field = field;
		this.$field = field.$field;
		
		this.$el = field.$hint;
		
		if ( field.options.dateType == 'tooltip' )
		{
			this.options.tooltip = true;
			this.$el = field.$el.getElement( '.aurora-date-hint' ).hide();
		}
		
		this.$el.set( 'html', this.options.dateHint );
		
		this.$field.addEvents({
		
			'keyup': (function() {
			
				var showDateHint = (function() {
				
					$clear( this._hintUpdate );
					
					this._hintUpdate = function() { this.parse() }.delay( 200, this );
				
				}.bind( this ));
				
				showDateHint();
				
			}.bind( this )),
			
			'focus': (function() {
			
				if ( this.options.tooltip )
				{
					this.$el.show().set( 'opacity', 0 );
					
					this.$el.get( 'tween' )
						.setOptions({
							duration: 150,
							transition: 'linear'
						})
						.start( 'opacity', 1 );
				}
			
			}.bind( this )),
			
			'blur': (function() {
			
				if ( this.options.tooltip )
				{
					this.$el.get( 'tween' )
						.setOptions({
							duration: 150,
							transition: 'linear'
						})
						.start( 'opacity', 0 )
						.chain( (function() {
						
							this.$el.hide();
						
						}.bind( this )));
				}
			
			}.bind( this ))
		
		});
		
	},
	
	parse: function()
	{
		var value = this.field.get( 'value' ).stored;
		
		if ( !value )
		{
			this.$el.set( 'html', this.options.dateHint );
			return;
		}
			
		var parsedDate = new Date.parse( value );
		
		if ( parsedDate.isValid() )
			this.$el.set( 'html', parsedDate.format( '%A %d%o %B %Y' ) );
		else
			this.$el.set( 'html', this.options.dateHint );
	
	}
	
});

document.addEvent( 'domready', function() {

	$$( '.aurora-form' ).each( function( $el ) {
		$el.store( 'form', new Aurora.Form( $el, $el.getDataFromComment() ) );
	});

});


/*
	Class: Aurora.Images
*/
Aurora.Images = new Class({

	Implements: Options,
	
	options: {
	
		mode: 'image',
		
		effect: 'quad',
		ease: 'in:out',
		
		durations: {
			open: 700,
			resize: 400,
			fade: 200,
			caption: 400
		},
		
		explode: false, // to be implemented
		
		padding: 10,
		
		captions: false,
		animateCaption: true,
		
		overlay: true, // to be implemented
		
		imageQuery: 'a',
		
		counter: 'Image {num} of {total}',
		
		mouseWheel: false,
		keyboardShortcuts: false
		
	},
	
	initialize: function( target, options )
	{
		this.setOptions( options );
		
		var $el = this.$el = target;
		
		if ( !options )
			options = {};
		
		
		// Gather images
		this.images = [];
		
		
		// Mode
		switch( this.options.mode )
		{
			case 'gallery':
			
				var images = target.getElements( this.options.imageQuery );
				
				if ( images.length <= 1 )
					this.options.mode = 'image';
				
				images.each( function( $el ) {
				
					var options = $el.getDataFromComment() || {};
				
					var image = new Aurora.Images.Image( $el, this, options );
				
					this.images.push( image );
				
				}, this );
				
			break;
			
			case 'image':
			
				var image = new Aurora.Images.Image( $el, this, options );
				
				// Enable captions if its been set for the image and we don't set it specifically
				if ( image.get( 'caption' ) && !options.captions )
					this.options.captions = true;
			
			break;
		}
		
	},
	
	setup: function( image )
	{
		// Overlay
		this.$overlay = new Element( 'div', {
			'class': 'aurora-images-overlay',
			events: {
				click: this.close.bindWithEvent( this )
			}
		}).inject( document.body, 'top' );
		
		
		// Box
		this.$box = new Element( 'div', {
			'class': 'aurora-images-box',
			styles: {
				width: 0,
				height: 0,
				/* marginLeft: 0, */
				position: 'absolute',
				opacity: 0.2
			}
		}).inject( document.body, 'top' );
		
		
		// Previous / Next
		if ( this.options.mode == 'gallery' )
		{
			this.$prevLink = new Element( 'a', {
				'class': 'aurora-images-prev',
				href: 'javascript:;'
			}).inject( this.$box );
			
			this.$prevLink.addEvent( 'click', this.changeImage.bindWithEvent( this, -1 ) );
			
			this.$nextLink = new Element( 'a', {
				'class': 'aurora-images-next',
				href: 'javascript:;'
			}).inject( this.$box );
			
			this.$nextLink.addEvent( 'click', this.changeImage.bindWithEvent( this, 1 ) );
		}
		
		
		// Stage
		this.$stage = new Element( 'div', { 'class': 'aurora-images-stage' } ).inject( this.$box );
		this.$bottom = new Element( 'div', { 'class': 'aurora-images-bottom' } ).inject( this.$box );
		
		
		// Close
		this.$closeButton = new Element( 'div', {
		
			'class': 'aurora-images-close',
			
			events: {
				click: this.close.bindWithEvent( this )
			}
			
		}).inject( this.$bottom );
		
		
		// Caption
		if ( this.options.captions )
			this.$caption = new Element( 'div', { 'class': 'aurora-images-caption' } ).inject( this.$bottom );
		
		
		// Counter
		if ( this.images.length )
			this.$counter = new Element( 'div', { 'class': 'aurora-images-counter' } ).inject( this.$bottom );
			
		
		// Active flag (prevents keyboard and mouse events from firing unnecessarily)
		this._active = false;
		
		
		// Mouse Wheel
		if ( this.options.mouseWheel )
			document.addEvent( 'mousewheel', this.mouseWheelListener.bindWithEvent( this ) );
		
		
		// Keyboard
		if ( this.options.keyboardShortcuts )
			document.addEvent( 'keydown', this.keyboardListener.bindWithEvent( this ) );
		
		
		// Set flag so we don't setup again
		this._setup = true;
		
		
		// Open image
		if ( image )
			this.open( image );
	},
	
	toElement: function()
	{
		return this.$el;
	},
	
	open: function( image )
	{
		if ( !this._setup )
		{
			this.setup( image );
			return;
		}
	
		this._active = true;
		
		var size = window.getSize();
		var scroll = window.getScroll();
		var scrollSize = window.getScrollSize();
		
		// If images are bigger than 768 high, they might get chopped off, so move them to the top
		var offset = Math.round( ( size.y < 768 ) ? size.y / 36 : size.y / 10 );
		
		var top = scroll.y; // + offset;
		
		this.$overlay.setStyles({
			opacity: 0,
			display: 'block',
			width: scrollSize.x,
			height: scrollSize.y
		});
		
		// Code before fancy postioning and sizing
		/* this.image.setStyles({
			display: 'block',
			top: top
		}); */
		
		// Retrieve the original size of the image and set it
		var dimensions = image.get( 'dimensions' );
		
		this.$box.setStyles({
			display: 'block',
			width: dimensions.width,
			height: dimensions.height
		});
		
		// Position
		var $el = image.$el;
		
		if ( image.$el.getElement( 'img' ) )
			$el = image.$el.getElement( 'img' );
		
		this.$box.position({ relativeTo: $el });
		
		// Code before fancy postioning and sizing
		// marginLeft: -( originalSize.x / 2 )
		
		this.$box.setOpacity( 0 );
		
		new Fx.Tween( this.$overlay, {
			property: 'opacity'
		}).start( 0.8 );
		
		this.startLoad( image );
		
		// Resize event
		window.addEvent( 'resize', function() {
		
			this.resize();
		
		}.bind( this ));
	},
	
	resize: function()
	{
		if ( !this._active )
			return;
		
		var scrollSize = window.getScrollSize();
		
		this.$overlay.setStyles({
			width: scrollSize.x,
			height: scrollSize.y
		});
	},
	
	startLoad: function( image, preload )
	{
		if ( !image )
			return;
		
		var $image = new Asset.image( image.get( 'src' ), {
		
			onload: function() {
			
				if ( !preload && this.image == image ) this.nextEffect();
			
			}.bind( this )
		
		});
		
		if ( !preload )
		{
			this.$box.addClass( 'aurora-images-loading' );
			this.$stage.setStyle( 'display', 'block' );
			this.$stage.empty();
			
			this.$bottom.setStyle( 'opacity', 0 );
			
			if ( this.options.mode == 'gallery' )
			{
				this.$prevLink.setStyle( 'display', 'none' );
				this.$nextLink.setStyle( 'display', 'none' );
			}
			
			this.image = image;
			this.$image = $image;
			this.caption = image.get( 'caption' );
			this._index = this.images.indexOf( image );
			
			this.step = 1;
		}
	},
	
	keyboardListener: function( event )
	{
		if ( !this._active )
			return;
		
		if ( event.key != 'f5' )
			event.preventDefault();
		
		switch ( event.key )
		{
			case 'esc': case 'x': case 'q': this.close(); break;
			case 'b': case 'p': case 'left': this.changeImage( event, -1 ); break;
			case 'f': case 'n': case 'right': this.changeImage( event, 1 );
		}
	},
	
	mouseWheelListener: function( event )
	{
		if ( !this._active )
			return;
		
		if ( event.wheel > 0 )
			this.changeImage( event, -1 );
		
		if ( event.wheel < 0 )
			this.changeImage( event, 1 );
	},
	
	changeImage: function( event, step )
	{
		this._changed = true;
	
		event.preventDefault();
		
		var index = this._index + step,
			image = this.images[ index ],
			count = this.images.length;
		
		if ( !image )
			index == count ? image = this.images[0] : image = this.images[ count - 1 ];
		
		if ( !image )
			return false;
		
		for ( var f in this.effects )
			this.effects[f].cancel();
		
		this.startLoad( image );
	},
	
	nextEffect: function()
	{
		switch( this.step++ )
		{
			case 1:
			
				// $log( '1) Expand from image' );
			
				var w = this.$image.width + this.options.padding * 2,
					h = this.$image.height + this.options.padding * 2;
				
				if ( this.options.mode == 'gallery' )
				{
					this.$prevLink.setStyle( 'height', h );
					this.$nextLink.setStyle( 'height', h );
				}
				
				// var marginLeft = -( this.image.width / 2 ),
				// marginTop = ( ( window.getSize().y - this.image.height ) / 2 );
				
				var scrollTop = window.getScrollTop();
				
				var marginLeft = ( ( window.getSize().x - this.$image.width ) / 2 ),
					marginTop = ( ( window.getSize().y - this.$image.height ) / 2 ) + scrollTop;
				
				// marginTop: marginTop
				// marginLeft: marginLeft
				
				var effect = this.options.effect;
				
				if ( this.options.ease && effect != 'linear' )
					effect += ':' + this.options.ease;
				
				var duration = this.options.durations.resize;
				
				if ( !this._changed )
					duration = this.options.durations.open;
				
				
				new Fx.Morph( this.$box, {
					duration: duration,
					transition: this.options.effect,
					onComplete: this.nextEffect.bind( this )
				}).start({
					width: w,
					height: h,
					left: marginLeft,
					top: marginTop,
					opacity: 1
				});
				
			break;
				
			case 2:
			
				// $log( '2) Fade in' );
				
				this.$box.removeClass( 'aurora-images-loading' );
				this.$stage.setStyle( 'opacity', 0 );
				
				this.$image.setStyle( 'margin', this.options.padding );
				this.$image.inject( this.$stage );
				
				new Fx.Tween( this.$stage, {
					property: 'opacity',
					duration: this.options.durations.fade,
					onComplete: this.nextEffect.bind( this )
				}).start( 1 );
			
			break;
			
			case 3:
				
				// $log( '3) Show next/previous, captions' );
				
				if ( this.options.mode == 'gallery' )
				{
					this.$prevLink.setStyle( 'display', 'block' );
					this.$nextLink.setStyle( 'display', 'block' );
				}
				
				if ( this.options.captions && this.options.animateCaption )
				{
					if ( this.options.mode == 'gallery' && this.options.counter )
					{
						var total = this.images.length;
						var num = this._index + 1;
						var counterText = this.options.counter;
						
						counterText = counterText.replace( /\{num\}/, num );
						counterText = counterText.replace( /\{total\}/, total );
						
						this.$counter.set( 'text', counterText);
					}
					
					if ( this.$caption )
						this.$caption.set( 'text', this.caption );
					
					var height = this.$bottom.getStyle( 'height' ).toInt();
					
					this.$bottom.setStyles({
						opacity: 1,
						top: -( height )
					});
					
					new Fx.Tween( this.$bottom, {
						property: 'top',
						duration: this.options.durations.caption,
						onComplete: this.nextEffect.bind( this )
					}).start( 0 );
				}
				
			break;
			
			case 4:
			
				// $log( '4) Start preloading images' );
				
				this.startLoad( this.images[ this._index -1 ], true );
				this.startLoad( this.images[ this._index +1 ], true );
			
			break;
		}
	},
	
	close: function()
	{
		this.$box.setStyle( 'display', 'none' );
		
		this.$overlay.get( 'tween' )
			.start( 'opacity', 0 );
		
		this._active = false;
		
		this._changed = false;
	}
});

Aurora.Images.Image = new Class({
	
	Implements: [ Events, Options ],
	
	options: {
	
		src: null,
		
		caption: '',
		
		width: null,
		height: null
	
	},
	
	initialize: function( image, images, options )
	{
		this.setOptions( options );
		
		var $el = this.$el = image;
		
		if ( !this.options.src )
			this.options.src = image.get( 'href' );
		
		if ( !this.options.caption )
			this.options.caption = ( image.get( 'title' ) || ( image.getElement( 'img' ) ? image.getElement( 'img' ).get( 'alt' ) : '' ) );
		
		$el.addEvent( 'click', (function( event ) {
		
			event.stop();
		
			images.open( this );
		
		}.bind( this )));
	},
	
	toElement: function()
	{
		return this.$field;
	},
	
	set: function( what, value )
	{
		switch ( what )
		{
			//
		}
		
		return this;
	},
	
	get: function( what )
	{
		switch ( what )
		{
			case 'src':
				return this.options.src;
				
			case 'caption':
				return this.options.caption;
				
			case 'dimensions':
				
				var $el = this.$el;
				
				if ( this.$el.getElement( 'img' ) )
					$el = this.$el.getElement( 'img' );
				
				return $el.getDimensions({ styles: [ 'padding' ] });
				
			case 'position':
			
				var $el = this.$el;
				
				if ( this.$el.getElement( 'img' ) )
					$el = this.$el.getElement( 'img' );
				
				return $el.getPosition();
		}
	}
	
});

document.addEvent( 'domready', function() {

	$$( '.aurora-images' ).each( function( $el ) {
	
		var options = $el.getDataFromComment() || {};
		
		if ( !options.mode )
			$extend( options, { mode: 'gallery' } );
		
		$el.store( 'image', new Aurora.Images( $el, options ) );
	
	});
	
	$$( '.aurora-image-popup' ).each( function( $el ) {
		$el.store( 'image', new Aurora.Images( $el, $el.getDataFromComment() ) );
	});

});


/*
	Class: Aurora.OverText
*/
Aurora.OverText = new Class({

	Implements: [ Options, Events, Class.Occlude ],

	Binds: ['reposition', 'assert', 'focus', 'hide'],

	options: {
	
		/*
		textOverride: null,
		onFocus: $empty(),
		onTextHide: $empty(textEl, inputEl),
		onTextShow: $empty(textEl, inputEl),
		*/
		
		className: 'aurora-overtext',
		
		element: 'label',
		
		positionOptions: {
			position: 'upperLeft',
			edge: 'upperLeft',
			offset: {
				x: 0,
				y: 0
			}
		},
		
		poll: true,
		pollInterval: 100,
		
		zIndex: 500,
		
		wrap: false,
		
		wrapClass: 'aurora-overtext-wrap'
	},

	property: 'OverText',

	initialize: function( element, options )
	{
		this.element = element;
		
		if ( this.occlude() )
			return this.occluded;
		
		this.setOptions( options );
		
		this.attach( this.element );
		
		if ( this.options.poll )
			this.poll();
		
		return this;
	},

	toElement: function()
	{
		return this.element;
	},

	attach: function()
	{
		var val = this.options.textOverride || this.element.get( 'alt' ) || this.element.get( 'title' );
		
		if ( !val )
			return;
		
		this.text = new Element( this.options.element, {
		
			'class': this.options.className,
			
			styles: {
				lineHeight: 'normal',
				position: 'absolute',
				cursor: 'text',
				zIndex: this.options.zIndex
			},
			
			html: val,
			
			events: {
				click: this.hide.pass( this.options.element == 'label', this )
			}
			
		}).inject( this.element, 'after' );
		
		if ( this.options.element == 'label' )
		{
			if ( !this.element.get( 'id' ) )
				this.element.set( 'id', 'input_' + new Date().getTime() );
			
			this.text.set('for', this.element.get('id'));
		}
		
		if ( this.options.wrap )
		{
			this.textHolder = new Element( 'div', {
				
				styles: {
					lineHeight: 'normal',
					position: 'relative'
				},
				
				'class': this.options.wrapClass
				
			}).adopt( this.text ).inject( this.element, 'before' );
		}
		
		this.element.addEvents({
			focus: this.focus,
			blur: this.assert,
			change: this.assert
		}).store( 'overtext-div', this.text );
		
		window.addEvent( 'resize', this.reposition.bind( this ) );
		
		this.assert( true );
		
		this.reposition();
	},

	wrap: function()
	{
		if (this.options.element == 'label') {
			if (!this.element.get('id')) this.element.set('id', 'input_' + new Date().getTime());
			this.text.set('for', this.element.get('id'));
		}
	},

	startPolling: function()
	{
		this.pollingPaused = false;
		return this.poll();
	},

	poll: function(stop)
	{
		//start immediately
		//pause on focus
		//resumeon blur
		
		if (this.poller && !stop) return this;
		var test = function(){
			if (!this.pollingPaused) this.assert(true);
		}.bind(this);
		if (stop) $clear(this.poller);
		else this.poller = test.periodical(this.options.pollInterval, this);
		return this;
	},

	stopPolling: function()
	{
		this.pollingPaused = true;
		return this.poll(true);
	},

	focus: function()
	{
		if (this.text && (!this.text.isDisplayed() || this.element.get('disabled'))) return;
		
		// TW: We don't want to lose the hint when we focus, only when we start typing
		// this.hide();
	},

	hide: function( suppressFocus, force )
	{
		if (this.text && (this.text.isDisplayed() && (!this.element.get('disabled') || force))){
			this.text.hide();
			this.fireEvent('textHide', [this.text, this.element]);
			this.pollingPaused = true;
			try {
				if (!suppressFocus) this.element.fireEvent('focus');
				this.element.focus();
			} catch(e){} //IE barfs if you call focus on hidden elements
		}
		return this;
	},

	show: function()
	{
		if (this.text && !this.text.isDisplayed()){
			this.text.show();
			this.reposition();
			this.fireEvent( 'textShow', [ this.text, this.element ] );
			this.pollingPaused = false;
		}
		return this;
	},

	assert: function( suppressFocus )
	{
		this[this.test() ? 'show' : 'hide']( suppressFocus );
		
		// TW: Addition to make sure the text is always positioned
		if ( this.text && this.test() && this.element.isVisible() )
			this.position();
	},

	test: function()
	{
		var v = this.element.get('value');
		return !v;
	},

	reposition: function()
	{
		this.assert( true );
		
		// TW: Was causing OverText to be hidden if the element inside is originally hidden
		// if ( !this.element.isVisible() )
			// return this.stopPolling().hide();
		
		if ( this.text && this.test() )
			this.position();
		
		return this;
	},
	
	position: function()
	{
		this.text.position( $merge( this.options.positionOptions, { relativeTo: this.element } ) );
	}

});

document.addEvent( 'domready', function() {

	$$( 'input,textarea' ).each( function( $el ) {
		
		if ( $el.getProperty( 'title' ) )
			$el.store( 'overtext', new Aurora.OverText( $el ) );
	
	});

});


/*
Class: Button

	Applies classes:
		
		aurora-button (used to detect the buttons)
		
		aurora-button-hover
		aurora-button-press
		aurora-button-focus
		aurora-button-normal
	
	Available actions:
		
		show element
		hide element
		show menu
		
		switch elements
		
		next slide
		previous slide
		first slide
		last slide
		
		show popup
		show dialog
		
		close popup
		close dialog
		
		open prospekt
		
		goto
		
		new window
		
		(anything else is eval'd)
		
*/

Aurora.$currentButtonMenu = null; // used to close an existing button menu in case there is one open

Aurora.Button = new Class({
	
	Implements: [ Options, Events ],
	
	options: {
	
		action: 'do nothing',
		
		order: 0,
		
		isToggle: false
	
	},
	
	initialize: function( target, options )
	{
		var $el = this.$el = $( target );
		
		this.setOptions( options );
		
		this.bound = {
			maybeHideMenu: this.maybeHideMenu.bind( this )
		};
		
		this.state = {};
		
		
		// Add events
		this.$el.addEvent( 'focus', (function() {
			
				this.appearFocused();
			
			}).bind( this )).addEvent( 'blur', (function() {
			
				this.appearBlurred();
			
			}).bind( this )).addEvent( 'keydown', (function( event ) {
			
				if ( event.key == 'space' || event.key == 'enter' )
					this.toElement().fireEvent( 'mousedown' );
			
			}).bind( this )).addEvent( 'keyup', (function( event ) {
			
				if ( event.key == 'space' || event.key == 'enter' )
					this.toElement().fireEvent( 'click' );
			
			}).bind( this )).addEvent( 'mouseenter', (function() {
			
				this.state.mouseover = true;
				
				if ( this.state.disabled || this.state.pressed )
					return;
					
				if ( this.options.on == 'hover' )
					this.action();
				
				this.toElement()
					.removeClass( 'aurora-button-normal' )
					.removeClass( 'aurora-button-focus' )
					.addClass( 'aurora-button-hover' );
			
			}).bind( this )).addEvent( 'mouseleave', (function() {
				
				this.state.mouseover = false;
				this.state.mousedown = false;
				
				if ( this.state.disabled || this.state.pressed )
					return;
				
				this.toElement()
					.removeClass( 'aurora-button-hover' )
					.removeClass( 'aurora-button-press' )
					.addClass( ( this.state.focus ) ? 'aurora-button-focus' : 'aurora-button-normal' );
			
			}).bind( this )).addEvent( 'mousedown', (function() {
				
				if ( this.state.disabled )
					return;
				
				this.state.mousedown = true;
				
				this.toElement()
					.removeClass( 'aurora-button-normal' )
					.removeClass( 'aurora-button-focus' )
					.removeClass( 'aurora-button-hover' )
					.addClass( 'aurora-button-press' );
				
			}).bind( this )).addEvent( 'click', (function(e) {
				
				var elHref = $el.getProperty( 'href' );
				
				if ( this.options.action && this.options.action != 'do nothing' && elHref == 'javascript:;' )
					e.stop();
				
				if ( this.state.disabled || !this.state.mousedown )
					return;
				
				if ( !this.options.on || this.options.on != 'hover' )
					this.action();
				
				this.state.mousedown = false;
				
				if ( this.options.isToggle )
				{
					if ( this.state.pressed )
						this.unpress();
					else
						this.makePressed();
					
					return;
				}
				
				if ( this.options.sticky )
					this.state.pressed = true;
				
				if ( !this.options.sticky )
					this.toElement().removeClass( 'aurora-button-press' );
				
				if ( this.state.mouseover && !this.state.pressed )
					this.toElement().addClass( 'aurora-button-hover' );
				else
					this.toElement().removeClass( 'aurora-button-hover' );
				
				if ( !this.state.mouseover && this.state.focus )
					this.toElement().addClass( 'aurora-button-focus' );
				else
					this.toElement().removeClass( 'aurora-button-focus' );
				
				if ( !this.state.mouseover && !this.state.focus )
					this.toElement().addClass( 'aurora-button-normal' );
				else
					this.toElement().removeClass( 'aurora-button-normal' );
				
			}).bind( this ));
		
		this.$el.addClass( 'aurora-button-normal' );
		
		this.$el.tabIndex = this.options.order;
	},
	
	appearFocused: function()
	{
		if ( !this.state )
			return;
	
		if ( this.state.hover || this.state.pressed )
			return;
		
		this.state.focus = true;
		
		if ( this.state.disabled )
			return;
		
		this.toElement()
			.removeClass( 'aurora-button-normal' )
			.addClass( 'aurora-button-focus' );
	},
	
	appearBlurred: function()
	{
		if ( !this.state )
			return;
	
		this.state.focus = false;
		
		if ( this.state.disabled || this.state.pressed )
			return;
		
		this.toElement().removeClass( 'aurora-button-focus' );
		
		if ( this.state.hover )
			this.toElement().addClass( 'aurora-button-hover' );
		else
			this.toElement().addClass( 'aurora-button-normal' );
			
	},
	
	focus: function()
	{
		this.toElement().focus();
	},
	
	press: function()
	{
		this.toElement().fireEvent( 'mousedown' );
		
		if ( !this.options.isToggle )
			(function() { this.toElement().fireEvent( 'click' ); }).bind( this ).delay( 100 );
	},
	
	makePressed: function()
	{
		this.state.pressed = true;

		this.toElement().fireEvent( 'mousedown' );
	},
	
	makeHovered: function()
	{
		this.state.hover = true;
		this.toElement().fireEvent( 'mouseenter' );
	},
	
	makeUnpressed: function()
	{
		this.state.pressed = false;
		this.state.hover = false;
		this.state.focus = false;
		
		this.toElement()
			.removeClass( 'aurora-button-press' )
			.removeClass( 'aurora-button-hover' )
			.removeClass( 'aurora-button-focus' );
		
		this.toElement().addClass( 'aurora-button-normal' );
	},
	
	unpress: function()
	{
		this.state.pressed = false;
		
		this.toElement().removeClass( 'aurora-button-press' );
		
		if ( this.state.hover )
			this.toElement().addClass( 'aurora-button-hover' );
		else if ( this.state.focus )
			this.toElement().addClass( 'aurora-button-focus' );
		else
			this.toElement().addClass( 'aurora-button-normal' );
	},
	
	disable: function()
	{
		if ( this.state.disabled )
			return;
		
		this.state.disabled = true;
		
		(function() {
		
		this.toElement()
			.removeClass( 'aurora-button-hover' )
			.removeClass( 'aurora-button-press' )
			.removeClass( 'aurora-button-focus' )
			.addClass( 'aurora-button-normal' )
			.addClass( 'aurora-button-disabled' )
			.setStyle( 'opacity', 0.5 );
			
		}).bind( this ).delay( 50 );
		
		return this;
	},
	
	enable: function()
	{
		if ( !this.state.disabled )
			return;
		
		this.state.disabled = false;
		
		if ( this.state.hover )
			this.toElement().removeClass( 'aurora-button-normal' ).addClass( 'aurora-button-hover' );
		else if ( this.state.focus )
			this.toElement().removeClass( 'aurora-button-normal' ).addClass( 'aurora-button-focus' );
		
		( function() { 
			this.toElement().removeClass( 'aurora-button-disabled' ).setStyle( 'opacity', 1 );
		}.bind( this )).delay( 50 );
		
		return this;
	},
	
	reset: function()
	{
		this.state.pressed = false;
		this.state.hover = false;
		this.state.disabled = false;
		this.state.focus = false;
		this.state.mouseover = false;
		this.state.mousedown = false;
		
		this.toElement()
			.removeClass( 'aurora-button-hover' )
			.removeClass( 'aurora-button-press' )
			.removeClass( 'aurora-button-focus' )
			.removeClass( 'aurora-button-disabled' )
			.addClass( 'aurora-button-normal' );
	
	},
	
	set: function( what, value )
	{
		switch ( what )
		{
			case 'tabIndex':
				this.$el.tabIndex = value || 0;
			break;
		}
		
		return this;
	},
	
	action: function()
	{
		var $el = this.$el;
	
		var options = this.options;
		
		switch( options.action )
		{
			/** Show Element / Menu / Hide **/
			case 'show':
			case 'show element':
			case 'show menu':
			case 'hide':
			case 'hide element':
				
				/* Defaults */
				var $target = null,
					on = 'click', // click, hover, mouseenter
					transition = 'instant', // fade, slide, sweet, instant
					duration = 300,
					effect = 'linear',
					ease = 'out',
					hideSiblings = false;
				
				var anchorFrom = 'top left', // top left, center left, bottom left, top center, center, bottom center, top right, center right, bottom right
					align = 'top left', // top left, center left, bottom left, top center, center, bottom center, top right, center right, bottom right
					offsetX = 0,
					offsetY = 0,
					relativeTo = null;
					
				/* Show Menu only */
				var sticky = false,
					focusField = null;
				
				var fnChain = [];
				
				/* Set Options */
				
				// Target
				if ( options.target == 'this' )
					this.$target = $target = $el;
				else
					this.$target = $target = $( options.target );
				
				if ( !$target )
					return;
				
				// On
				if ( options.on ) on = options.on;
				if ( on == 'hover' ) on = 'mouseenter';
				
				// Transition
				if ( options.transition ) transition = options.transition;
				
				// Duration
				if ( options.duration ) duration = options.duration;
				
				// Effect
				if ( options.effect ) effect = options.effect;
					
				// Ease
				if ( options.ease && effect != 'linear' ) effect += ':' + options.ease;
				
				// Anchor From
				if ( options.anchorFrom ) anchorFrom = options.anchorFrom.replace( ' ', '-' ).camelCase();
				
				// Align
				if ( options.align ) align = options.align.replace( ' ', '-' ).camelCase();
				
				// Left Offset
				if ( options.left ) offsetX = options.left;
				
				// Top Offset
				if ( options.top ) offsetY = options.top;
				
				// Relative To
				relativeTo = options.relativeTo;
				
				if ( relativeTo == 'this' ) relativeTo = $el;
				
				
				/* Show Menu Only */
				
				// Sticky
				if ( options.action == 'show menu' && options.sticky )
					sticky = options.sticky;
				
				// Focus Field
				if ( options.action == 'show menu' && options.focusField )
					focusField = options.focusField;
				
				
				/* Position */
				var positionTarget = this.positionTarget = (function() {
				
					if ( !relativeTo )
						return;
					
					$target.position({
						position: anchorFrom,
						edge: align,
						relativeTo: relativeTo,
						offset: { x: Number( offsetX ), y: Number( offsetY ) }
					});
					
				});
				
				/* Hide Siblings */
				var hideSiblings = (function() {
				
					try {
						$target.getParent().getChildren().hide();
					}
					catch(e){}
				
				});
				
				
				/* Add events depending on action */
				switch( options.action )
				{
					case 'show':
					case 'show element':
					
						if ( options.hideSiblings )
							fnChain.push( hideSiblings );
					
					break;
				}
				
				/* Transition */
				switch( transition )
				{
					case 'fade':
					
						var showTarget = (function() {
							
							if ( $target.isVisible() )
								return;
							
							positionTarget();
							
							$target.show().setOpacity( 0 );
							
							$target.get( 'tween' )
								.setOptions({
									duration: duration,
									transition: effect
								})
								.start( 'opacity', 1 );
							
						});
						
						var hideTarget = (function() {
						
							if ( !$target.isVisible() )
								return;
							
							$target.get( 'tween' )
								.setOptions({
									duration: duration,
									transition: effect
								})
								.start( 'opacity', 0 )
								.chain( function() {
								
									$target.hide();
								
								});
						
						});
						
						switch( options.action )
						{
							case 'show':
							case 'show element':
							case 'show menu':
								fnChain.push( showTarget );
							break;
							
							case 'hide':
							case 'hide element':
								fnChain.push( hideTarget );
							break;
						}
					
					break;
					
					case 'slide':
					
						var showTarget = (function() {
						
							if ( $target.isVisible() )
								return;
							
							$target.setStyles({
								overflow: 'hidden'
							});
							
							var fromHeight = 0;
							
							$target.show();
							
							var toHeight = $target.getSize().y;
							
							$target.setStyles({
								height: 0,
								overflow: 'hidden'
							});
							
							$target.get( 'tween' )
								.setOptions({
									duration: duration,
									transition: effect
								})
								.start( 'height', fromHeight, toHeight )
								.chain( function() {
								
									//
								
								});
						
						});
						
						var hideTarget = (function() {
						
							if ( !$target.isVisible() )
								return;
							
							$target.setStyles({
								overflow: 'hidden'
							});
							
							$target.get( 'tween' )
								.setOptions({
									duration: duration,
									transition: effect
								})
								.start( 'height', 0 )
								.chain( function() {
								
									//
								
								});
						
						});
						
						switch( options.action )
						{
							case 'show':
							case 'show element':
							case 'show menu':
								fnChain.push( showTarget );
							break;
							
							case 'hide':
							case 'hide element':
								fnChain.push( hideTarget );
							break;
						}
					
					break;
					
					case 'sweet':
					
						// not yet implemented
					
					break;
					
					default: // instant
					
						var showTarget = (function() {
						
							if ( $target.isVisible() )
								return;
							
							$target.show();
							
							positionTarget();
						
						});
						
						var hideTarget = (function() {
						
							if ( !$target.isVisible() )
								return;
							
							$target.hide();
						
						});
						
						switch( options.action )
						{
							case 'show':
							case 'show element':
							case 'show menu':
								fnChain.push( showTarget );
							break;
							
							case 'hide':
							case 'hide element':
								fnChain.push( hideTarget );
							break;
						}
					
				}
				
				
				// Call functions
				switch( options.action )
				{
					case 'show':
					case 'show element':
					case 'hide':
					case 'hide element':
					
						fnChain.each( function(f) { f() } );
						
						if ( on == 'mouseenter' )
						{
							$el.addEvent( 'mouseleave', function() {
							
								$target.hide();
							
							});
						}
					
					break;
					
					case 'show menu':
					
						/* if ( this._menuIsOpen )
							this.hideMenu();
						else */
							fnChain.each( function(f) { f() } );
					
					break;
				}
				
				// Handle show menu
				if ( options.action == 'show menu' )
				{
					if ( this.options.sticky && this._menuIsOpen )
					{
						this.hideMenu();
					}
					else if ( !this._menuIsOpen )
					{
						if ( Aurora.$currentButtonMenu && Aurora.$currentButtonMenu._menuIsOpen )
							Aurora.$currentButtonMenu.hideMenu( true );
						
						Aurora.$currentButtonMenu = this;
						
						// Elevate z-index for buttons and the target
						var bIndex = $el.getStyle( 'z-index' ),
							tIndex = $target.getStyle( 'z-index' );
						
						if ( bIndex != 'auto' )
						{
							// Button
							var bInt = bIndex.toInt();
							
							this._buttonIndex = bInt;
							
							$el.setStyle( 'z-index', ( bInt + 10 ) );
						}
						
						if ( tIndex != 'auto' )
						{
							// Target
							var tInt = tIndex.toInt();
							
							this._targetIndex = tInt;
							
							$target.setStyle( 'z-index', ( tInt + 10 ) );
						}
						
						// Focus Field
						if ( this.options.focusField )
						{
							var field = $( this.options.focusField );
							
							if ( field )
								field.focus();
						}
						
						this._menuIsOpen = true;
						
						if ( options.sticky )
						{
							document.body.addEvent( 'click', this.bound.maybeHideMenu );
							document.body.addEvent( 'focus', this.bound.maybeHideMenu );
						}
						else
						{
							this.$el.addEvents({
							
								'mouseenter': (function() {
								
									$clear( this._closeTimer );
								
								}.bind( this )),
								
								'mouseleave': (function(e) {
								
									this.bound.maybeHideMenu(e);
								
								}.bind( this ))
							
							});
							
							this.$target.addEvents({
							
								'mouseenter': (function() {
								
									$clear( this._closeTimer );
								
								}.bind( this )),
								
								'mouseleave': (function(e) {
								
									this.bound.maybeHideMenu(e);
								
								}.bind( this ))
							
							});
						}
					}
				}
				
				// TW: What to do about this?
				if ( options.onComplete )
					$el.addEvent( on, (function(e) { Aurora.doCallback( options.onComplete, options ) }.bind( this )));
			
			break;
			
			case 'switch elements':
			
				/* Defaults */
				var $target = null,
					$show = null,
					$hide = null,
					transition = 'instant',
					duration = 300,
					effect = 'linear',
					ease = 'out';
				
				
				/* Set Options */
				$show = $( options.show );
				$hide = $( options.hide );
				
				// Transition
				if ( options.transition )
					transition = options.transition;
				
				// Duration
				if ( options.duration )
					duration = options.duration;
				
				// Effect
				if ( options.effect )
					effect = options.effect;
				
				// Ease
				if ( options.ease && effect != 'linear' )
					effect += ':' + options.ease;
				
				
				/* Transition */
				switch( transition )
				{
					case 'fade':
					
						$hide.get( 'tween' )
							.setOptions({
								duration: duration,
								transition: effect
							})
							.start( 'opacity', 0 )
							.chain( function() {
							
								$hide.hide();
								
								$show.show().setOpacity(0);
								
								$show.get( 'tween' )
									.setOptions({
										duration: duration / 2,
										transition: effect
									})
									.start( 'opacity', 1 );
								
							});
					
					break;
					
					case 'slide':
					
						var fromHeight = $hide.getSize().y;
						
						$show.show();
						
						var toHeight = $show.getSize().y;
						
						$show.hide();
						
						$hide.setStyle( 'overflow', 'hidden' );
						
						$hide.get( 'tween' )
							.setOptions({
								duration: duration / 2,
								transition: effect
							})
							.start( 'height', fromHeight, toHeight )
							.chain( function() {
							
								$hide.setStyle( 'height', 'auto' );
								$hide.hide();
								
								$show.show();
								
								$show.get( 'tween' )
									.setOptions({
										duration: duration / 2,
										transition: effect
									})
									.start( 'height', toHeight )
									.chain( function() {
									
										$show.setStyle( 'height', 'auto' );
									
									});
								
							});
					
					break;
					
					case 'sweet':
					
						var fromHeight = $hide.getSize().y;
						
						$show.show();
						
						var toHeight = $show.getSize().y;
						
						$show.hide();
						
						$hide.get( 'morph' )
							.setOptions({
								duration: duration / 2,
								transition: effect
							})
							.start({ 'height': [ fromHeight, toHeight ], opacity: 0 })
							.chain( function() {
							
								$hide.setStyle( 'height', 'auto' );
								$hide.hide();
								
								$show.show().setOpacity(0);
								
								$show.get( 'morph' )
									.setOptions({
										duration: duration / 2,
										transition: effect
									})
									.start({ 'height': toHeight, opacity: 1 })
									.chain( function() {
									
										$show.setStyle( 'height', 'auto' );
									
									});
								
							});
					
					break;
					
					default: // instant
					
						$show.show();
						$hide.hide();
						
						// TW: What to do about this?
						if ( options.onSwitch )
							eval( options.onSwitch )();
					
				}
			
			break;
			
			case 'next slide':
			case 'previous slide':
			case 'first slide':
			case 'last slide':
			
				var slides = null,
					$curEl = $el;
				
				while ( !slides )
				{
					$curEl = $curEl.getParent();
					
					if ( $curEl )
						if ( $curEl.hasClass( 'aurora-slides' ) )
							if ( $curEl.retrieve( 'slides' ) )
								slides = $curEl.retrieve( 'slides' );
				}
				
				if ( !slides ) {
					$log( 'Slides store not found for button:', $el, 'With action: ' + options.action );
					return;
				}
				
				switch( options.action )
				{
					case 'next slide': slides.next(); return;
					case 'previous slide': slides.previous(); return;
					case 'first slide': slides.gotoFirst(); return;
					case 'last slide': slides.gotoLast(); return;
				}
			
			break;
			
			case 'switch class':
			
				$el.removeClass( options.remove ).addClass( options.add );
			
			break;
			
			case 'show dialog':
			case 'show popup':
			
				new Aurora.Popup( options );
			
			break;
			
			case 'close dialog':
			case 'close popup':
			case 'close then open dialog':
			
				var dialog = null,
					$curEl = $el;
				
				while ( !dialog )
				{
					$curEl = $curEl.getParent();
					
					if ( $curEl )
					{
						if ( $curEl.hasClass( 'aurora-dialog' ) )
						{
							window.theElement = $curEl;
						
							if ( $curEl.retrieve( 'popup' ) )
							{
								dialog = $curEl.retrieve( 'popup' );
							}
						}
					}
				}
				
				if ( !dialog ) {
					$log( 'Popup store not found for button:', $el, 'With action: ' + options.action );
					return;
				}
				
				if ( options.action == 'close then open dialog' )
				{
					dialog.destroy( true );
					Aurora.$popupBlockout.show();
					new Aurora.Popup( options );
				}
				else
					dialog.close();
					
			break;
			
			case 'open prospekt':
			
				window.open( window.location.protocol + '//' + window.location.host + '/Platforms/Prospekt' );
			
			break;
			
			case 'goto':
			
				top.location.href = options.href;
			
			break;
			
			case 'new window':
			
				window.open( options.href );
			
			break;
			
			case 'do nothing':
			
				// nothing.
			
			break;
			
			/* Custom button action to allow source access for the docs website */
			case 'load source':
				
				var $target = $( options.target );
				
				var extension = 'html';
				
				if ( options.extension )
					extension = options.extension;
				
				new Request()
					.get( options.src + '.' + extension + '?' + $time() )
					.addEvent( 'success', (function() {
					
						var code = this.response.text;
					
						$target.empty();
						
						var $container = new Element( options.type || 'div' ).inject( $target );
						
						if ( code == $target.retrieve( 'code' ) && $target.isVisible() )
						{
							$target.hide();
							return;
						}
						
						$container.set( 'value', code );
						
						$target.store( 'code', code );
						
						if ( !$target.isVisible() )
							$target.setOpacity(0).setStyles({ display: 'block' });
						
						$target.get( 'morph' )
							.setOptions({
								duration: 500,
								transition: 'linear'
							})
							.start({ opacity: 1 });
						
					}));
					
			break;
			
			default:
			
				Aurora.doCallback( options.action, $el );
		
		}
		
	},
	
	toElement: function()
	{
		return this.$el;
	},
	
	/** Behaviour Specific Methods **/
	
	maybeHideMenu: function( e )
	{
		if ( this.options.on == 'hover' )
			this.makeHovered();
		else
			this.makePressed();
		
		// Hides the menu ($target) if the event didn't originate within the target or the button elements
		
		var target = e.target,
			relatedTarget = e.relatedTarget;
		
		// $log( 'Target', target );
		// $log( 'Related Target', relatedTarget );
		// $log( 'Target', this.$target );
		// $log( 'El', this.$el );
		
		// Don't hide the target if we are in sticky mode and we specifically click on it or the button element
		if ( this.options.sticky && ( target == this.$target || target == this.$el ) )
		{
			// $log( 'Target belongs to the button or the menu.' );
			return;
		}
		
		// Don't hide the target if we are mousing to the button itself or the menu
		if ( relatedTarget == this.$el || relatedTarget == this.$target )
		{
			// $log( 'Related Target belongs to button or the menu.' );
			return;
		}
		
		// Make sure the element we clicked doesn't belong to the target (if in sticky mode)
		if ( relatedTarget )
		{
			if ( relatedTarget.getParent )
			{
				var parents = relatedTarget.getParents(); // target
				
				if ( parents.contains( this.$target ) || parents.contains( this.$el ) )
					return;
			}
		}
		else
			return;
		
		// Otherwise hide the menu
		this.hideMenu();
	},
	
	hideMenu: function( force )
	{
		var hide = (function() {
		
			// Hide element
			this.$target.hide();
			
			// Reset button state
			this.reset();
			
			// Set open state
			this._menuIsOpen = false;
			
			// Remove events
			if ( this.options.sticky )
			{
				document.body.removeEvent( 'click', this.bound.maybeHideMenu );
				document.body.removeEvent( 'focus', this.bound.maybeHideMenu );
			}
			else
			{
				this.$el.removeEvent( 'mouseleave', this.bound.maybeHideMenu );
				this.$target.removeEvent( 'mouseleave', this.bound.maybeHideMenu );
			}
			
			// Set back position indexes
			if ( this._buttonIndex )
				this.$el.setStyle( 'z-index', this._buttonIndex );
				
			if ( this._targetIndex )
				this.$target.setStyle( 'z-index', this._targetIndex );
		
		}.bind( this ));
		
		
		this._closeTimer = (function() {
		
			hide();
		
		}.bind( this )).delay( ( force ? 0 : 300 ) );
	
	}
	
});

document.addEvent( 'domready', function() {

	$$( '.aurora-button' ).each( function( $el ) {
		$el.store( 'button', new Aurora.Button( $el, $el.getDataFromComment() ) );
	});

});


/*
	Class: Accordion
*/
Aurora.Accordion = new Class({
	
	Implements: Options,
	
	options: {
		direction: 'vertical', // horizontal
		effect: 'quad',
		ease: 'in:out',
		duration: 500,
		width: null,
		height: null,
		trigger: 'click',
		itemQuery: null
	},
	
	current: null,
	
	initialize: function( target, options )
	{
		var $el = $( target );
		this.setOptions( options );
		
		// Determine effect
		var effect = this.options.effect;
		
		if ( this.options.ease && effect != 'linear' )
			effect += ':' + this.options.ease;
			
		this.transition = effect;
		
		// Determine trigger
		if ( this.options.trigger == 'hover' )
			this.options.trigger = 'mouseenter';
		
		// Bind children
		var items = $el.getChildren();
		
		if ( this.options.itemQuery )
			items = $el.getElements( this.options.itemQuery );
		
		items.each( (function( item, i ) {
			
			var children = item.getChildren();
			
			// We must have at least 2 elements to support an accordian.
			if ( children.length < 2 )
				return;
			
			var $trigger = children[0],
				$element = children[1];
				
			// Add event to trigger
			$trigger.addEvent( this.options.trigger, (function(e) {
			
				e.stop();
				
				// If we click an item thats already open, close it.
				if ( this.current == $element )
				{
					this.contract( this.current );
					this.current = null;
					return;
				}
				
				// Make some sound
				if ( this.current )
					this.contract( this.current );
				
				this.expand( $element );
			
			}.bind( this )));
			
			
		}.bind( this )));
		
	},
	
	expand: function( $el )
	{
		var expanded = $el.retrieve( 'expanded' );
		
		if ( expanded )
			return;
		
		$el.show().setStyles( 'height', 'auto' );
		
		var elSize = $el.getDimensions();
		
		$el.setStyles({ position: 'relative', overflow: 'hidden' });
		
		$el.get( 'tween' ).setOptions({ duration: this.options.duration, transition: this.transition });
		
		switch( this.options.direction )
		{
			case 'vertical':
			
				$el.setStyle( 'height', 0 ).get( 'tween' ).start( 'height', this.options.height || elSize.y )
					.chain( function() {
					
						// ...
					
					});
			
			break;
		
			case 'horizontal':
				
				$el.setStyle( 'width', 0 ).get( 'tween' ).start( 'width', this.options.width || elSize.x )
					.chain( function() {
					
						// ...
					
					});
				
			break;
		}
		
		$el.store( 'expanded', true );
		
		this.current = $el;
		
	},
	
	contract: function( $el )
	{
		$el.get( 'tween' ).setOptions({ duration: this.options.duration, transition: this.transition });
		
		switch( this.options.direction )
		{
			case 'vertical':
				$el.get( 'tween' ).start( 'height', 0 );
			break;
		
			case 'horizontal':
				$el.get( 'tween' ).start( 'width', 0 );
			break;
		}
		
		$el.store( 'expanded', false );
	}
	
});

document.addEvent( 'domready', function() {

	$$( '.aurora-accordion' ).each( function( $el ) {
		$el.store( 'accordion', new Aurora.Accordion( $el, $el.getDataFromComment() ) );
	});

});


/*
Class: Aurora.Suggest
*/
Aurora.Suggest = new Class({
	
	Implements: Options,
	
	options: {
		
		target: null,
		
		parameter: null,
		
		field: null,
		
		itemQuery: 'li',
		
		minLength: 3,
		
		populateField: false,
		
		populateLabelField: false,
		populateValueField: false,
		
		highlightTerms: true,
		highlightQuery: 'a',
		
		gotoLink: false,
		
		disableBlur: false,
		
		left: 0,
		top: 0,
		
		onRender: null
		
	},
	
	initialize: function( target, options )
	{
		var $el = this.$el = $( target );
		
		this.setOptions( options );
		
		// Find the field
		var $field = this.$field = $el.getElement( 'input' );
		
		if ( this.options.field )
			$field = $( this.options.field );
		
		if ( !$field )
		{
			$log( 'No valid field was found for Aurora.Suggest, you must use a standard input field inside the container or supply an id as [field].' );
			return;
		}
		
		// Find results (or create it)
		var $results = this.$results = $el.getElement( '.aurora-suggest-results' );
		
		if ( !$results )
			$results = this.$results = new Element( 'div', { 'class': 'aurora-suggest-results', style: 'position: absolute;' } ).inject( $field, 'after' );
			
		$results.hide();
		
		// Activity El
		var $activity = this.$activity = $el.getElement( '.aurora-suggest-activity' );
		
		
		// Add events to field
		$field.addEvents({
			
			'keypress': (function( event ) {
				
				// Specific keys
				if ( event.key == 'esc' )
					return this.hide();
				
				if ( event.key == 'enter' )
				{
					if ( this._lastFocused )
						this._lastFocused.fireEvent( 'mousedown' );
					
					this.hide();
				}
				
				var ci = null;
				
				if ( this.results )
					ci = this.results.indexOf( this._lastFocused );
				
				if ( event.key == 'up' )
				{
					event.stop();
					
					if ( this.results && this.results[ ci - 1 ] )
						this.focusItem( this.results[ ci - 1 ] );
					
					return;
				}
				
				if ( event.key == 'down' )
				{
					event.stop();
					
					if ( !this._lastFocused )
					{
						var firstItem = this.results[0];
					
						this.focusItem( firstItem );
						
						return;
					}
					
					if ( this.results && this.results[ ci + 1 ] )
						this.focusItem( this.results[ ci + 1 ] );
					
					return;
				}
			
			}.bind( this )),
			
			'keyup': (function( event ) {
			
				if ( event.key == 'esc' )
					return;
				
				// Search
				if ( !$field.value.trim() )
				{
					this.hide();
					return;
				}
				
				if ( this._redirecting )
					return;
				
				var searchStr = $field.value.trim(),
					visible = 0,
					firstVisible = null;
				
				if ( searchStr && ( this._lastSearch == searchStr ) )
					return;
				
				if ( this._timer )
					$clear( this._timer );
				
				this._timer = (function() {
				
					this.search();
				
				}.bind( this )).delay( 250 );
			
			}.bind( this )),
			
			'blur': (function( event ) {
			
				if ( !this.options.disableBlur )
					this.hide();
			
			}.bind( this ))
		
		});
	
	},
	
	hide: function()
	{
		(function(){
			
			if ( this.$results )
				this.$results.hide();
				
			this._lastSearch = '';
			
		}).delay( 100, this );
	},
	
	search: function()
	{
		var value = this.$field.value.trim();
		
		if ( value.length < this.options.minLength )
			return;
		
		// Reset values
		this._lastSearch = this.$field.value.trim();
		
		this._lastFocused = false;
		
		if ( this.$labelField )
			this.$labelField.value = '';
		
		if ( this.$valueField )
			this.$valueField.value = '';
		
		// Search
		var send = {
			path: '/' + this.options.target,
			data: {}
		}
		
		var parameter = this.$field.getProperty( 'name' );
		
		if ( this.options.parameter )
			parameter = this.options.parameter;
		
		send.data[ parameter ] = value;
		
		// Show activity
		if ( this.$activity )
			this.$activity.show();
		
		// Call action
		Aurora.loadSparkle( send )
			.then( (function( rtn ) {
				
				if ( this.$field.value.trim() != value )
					return;
				
				this.render( rtn );
			
			}.bind( this )));
	},
	
	focusItem: function( newFocus )
	{
		if ( this._lastFocused )
			this._lastFocused.removeClass( 'aurora-suggest-focused' );
		
		this._lastFocused = newFocus;
		
		if ( newFocus )
			newFocus.addClass( 'aurora-suggest-focused' );
	},
	
	render: function( results )
	{
		var $field = this.$field,
			$results = this.$results;
		
		// If we have no results, don't render anything
		if ( !results.html )
			return;
		
		// Show and position results
		$results.show();
		
		$results.position({ relativeTo: $field, position: 'bottomLeft', align: 'topLeft', offset: { x: this.options.left, y: this.options.top } });
		
		$results.set( 'html', results.html );
		
		// Reset last focused as its a brand new set of elements
		this._lastFocused = false;
		
		// Add events to items
		var results = this.results = $results.getElements( this.options.itemQuery );
		
		results.each( (function( $i ) {
			
			$i.addEvents({
			
				'mouseover': (function() {
				
					// this.focusItem( $i );
				
				}.bind( this )),
				
				'mouseout': (function() {
				
					$i.removeClass( 'aurora-suggest-focused' );
					
				}.bind( this )),
				
				'mousedown': (function(e) {
				
					// TW: Disabled for now
					// this._redirecting = true;
					
					// Populate the label hidden field (if we have one) or just use the field we are binded to
					if ( this.options.populateLabelField )
					{
						var label = $i.getElement( '.aurora-suggest-label' ).get( 'text' ),
							$labelField = this.$labelField = this.$el.getElement( '[name=' + this.options.populateLabelField + ']' );
						
						$labelField.value = label;
						
						// Populate field
						if ( this.options.populateField )
							this.$field.value.trim() = label;
					}
					else
					{
						var label = $i.get( 'text' );
						
						// Populate field
						if ( this.options.populateField )
							this.$field.value.trim() = label;
					}
					
					// Populate the value hidden field (if we have one)
					if ( this.options.populateValueField )
					{
						var value = $i.getElement( '.aurora-suggest-value' ).get( 'text' ),
							$valueField = this.$valueField = this.$el.getElement( '[name=' + this.options.populateValueField + ']' );
						
						$valueField.value.trim() = value;
					}
					
					// Go to the first link we encounter (may want to expand this further in case we have examples with more than one link)
					if ( this.options.gotoLink )
					{
						var $link = $i;
					
						if ( $i.get( 'tag' ) != 'a' )
							$link = $i.getElement( 'a' );
						
						if ( !$link )
							return;
						
						top.location.href = $link.getProperty( 'href' );
					
					}
					
					// Make the sure last search is reflected by the current value (it may have changed)
					this._lastSearch = this.$field.value.trim();
					
					// Hide the results (since we selected something)
					if ( this.options.gotoLink || this.options.populateField )
						this.hide();
					
				}.bind( this ))
				
			});
			
		}.bind( this )));
		
		// Add highlights
		if ( this.options.highlightTerms )
		{
			var regex = new RegExp( '(' + this._lastSearch + ')', 'gi' );
			
			$results.getElements( this.options.highlightQuery ).each( (function( $el ) {
			
				var text = $el.get( 'text' ),
					parsed = text.replace( regex, '<span class="aurora-suggest-highlight">$1</span>' );
				
				$el.set( 'html', parsed );
			
			}.bind( this )));
		}
		
		// Hide activity
		if ( this.$activity )
			this.$activity.hide();
		
		// On Render Function
		if ( this.options.onRender )
			Aurora.doCallback( this.options.onRender, this.$el );
	
	}
	
});

document.addEvent( 'domready', function() {

	$$( '.aurora-suggest' ).each( function( $el ) {
		$el.store( 'suggest', new Aurora.Suggest( $el, $el.getDataFromComment() ) );
	});

});


/*
Class: Aurora.FilterField
*/
Aurora.FilterField = new Class({
	
	Implements: Options,
	
	options: {
		itemsEl: document,
		itemsQuery: '.aurora-search-item',
		fieldQuery: '.aurora-search-field',
		onInit: null
	},
	
	initialize: function( target, options )
	{
		var $el = this.$el = $( target );
		
		this.setOptions( options );
		
		this.originalItemsQuery = this.options.itemsQuery;
		
		this._lastSearch = '';
		
		var itemsEl = this.itemsEl = this.options.itemsEl;
		
		if ( itemsEl != document )
			itemsEl = this.itemsEl = document.getElement( this.options.itemsEl );
		
		this.doSearch();
		
		if ( this.options.onInit )
			Aurora.doCallback( this.options.onInit );
	},
	
	setQuery: function( newQuery )
	{
		this.itemsEl.getElements( this.originalItemsQuery ).hide();
		
		if ( !newQuery )
			newQuery = this.originalItemsQuery;
		
		this.options.itemsQuery = newQuery;
		
		this.doSearch( this._lastSearch );
	},
	
	initSearchData: function()
	{
		var searchData = [];
		
		this.itemsEl.getElements( this.options.itemsQuery ).each( (function( $item ) {
			
			var terms = '';
			
			$item.getElements( this.options.fieldQuery ).each( function( $term ) {
				terms += $term.innerHTML + ' |||| ';
			});
			
			searchData.push({ terms: terms, $el: $item });
			
		}.bind( this )));
		
		this._searchData = searchData;
	},
	
	doSearch: function( searchString )
	{
		if ( !this._searchData )
			this.initSearchData();
		
		var searchData = this._searchData;
		
		
		// Store the last search
		this._lastSearch = searchString;
		
		
		// If the search string is blank and the query is the same as we started, show everything and return
		if ( ( !searchString || !$chk( searchString.trim() ) ) && ( this.originalItemsQuery == this.options.itemsQuery ) )
		{
			searchData.each( function( i ) {
				i.$el.show();
			});
			
			return;
		}
		
		// Clean up search string
		if ( searchString )
			searchString = searchString.trim().escapeRegExp();
		
		
		// Determine class for detection
		var queryClass = this.options.itemsQuery.replace( '.', '', 'g' );
		
		// Loop over the data and show and hide elements
		searchData.each( (function( i ) {
			
			// Things got complicated, its easier right now to seperate it depending if we supply a string or not
			if ( searchString )
			{
				if ( i.terms.test( searchString, "i" ) && i.$el.hasClass( queryClass ) )
					i.$el.show();
				else
					i.$el.hide();
			}
			else
			{
				if ( i.$el.hasClass( queryClass ) )
					i.$el.show();
				else
					i.$el.hide();
			}
			
		}.bind( this )));
	}
	
});

document.addEvent( 'domready', function() {

	$$( '.aurora-filterfield' ).each( function( $el ) {
		$el.store( 'filterfield', new Aurora.FilterField( $el, $el.getDataFromComment() ) );
	});

});


/*
Class: Aurora.Masonry

Description: Masonry layout engine (converted from jQuery Masonry)

License: mooMasonry is dual-licensed under GPL and MIT, just like jQuery Masonry itself. You can use it for both personal and commercial applications.

Authors:
- David DeSandro
- Olivier Refalo
*/
Aurora.Masonry = new Class({

	Implements : Options,

	options : {
		singleMode : false,
		columnWidth : undefined,
		itemQuery : undefined,
		appendedContent : undefined,
		resizeable : true
	},
	
	element : undefined,
	colW : undefined,
	colCount : undefined,
	lastColCount : undefined,
	colY : undefined,
	lastColY: undefined,
	bound : undefined,
	masoned : undefined,
	bricks : undefined,
	posLeft : undefined,
	brickParent : undefined,

	initialize : function( target, options ) {
	
		this.setOptions(options);
	
		this.element = document.id( target );
		
		this.go();
		
	},
	
	go: function() {
	
		var options = this.options;
		
		if (this.masoned && options.appendedContent != undefined)
			// if we're dealing with appendedContent
			this.brickParent = options.appendedContent;
		else
			this.brickParent = this.element;
		
		if (this.brickParent.getChildren().length > 0) {
			// call masonry layout
			this.masonrySetup();
			this.masonryArrange();

			// binding window resizing

			// TODO: a REVOIR
			var resizeOn = this.options.resizeable;
			if (resizeOn)
			{
			  if(this.bound == undefined)
			  {
					this.bound = this.masonryResize.bind(this);
					this.attach();
			  }
			}

			if (!resizeOn)
				this.detach();
		}
	},

	attach : function() {
		window.addEvent('resize', this.bound);
		return this;
	},

	detach : function() {
	  if(this.bound != undefined )
	  {
		  window.removeEvent('resize', this.bound);
		  this.bound = undefined;
	  }
	  return this;
	},

	placeBrick : function(brick, setCount, setY, setSpan)
	{
		var shortCol = 0;

		for (var i = 0; i < setCount; i++)
			if (setY[i] < setY[shortCol])
				shortCol = i;

		brick.setStyles({
					top : setY[shortCol],
					left : this.colW * shortCol + this.posLeft
		});

		var size=brick.getSize().y+brick.getStyle('margin-top').toInt()+brick.getStyle('margin-bottom').toInt();
		for (var i = 0; i < setSpan; i++)
			this.colY[shortCol + i] = setY[shortCol] + size;
	},

	masonrySetup : function()
	{
		var s = this.options.itemQuery;
		this.bricks = s == undefined ? this.brickParent.getChildren() : this.brickParent.getElements(s);

		if (this.options.columnWidth == undefined)
		{
			var b = this.bricks[0];
			this.colW = b.getSize().x + b.getStyle('margin-left').toInt() + b.getStyle('margin-right').toInt();
		}
		else
			this.colW = this.options.columnWidth;

    	var size = this.element.getSize().x+this.element.getStyle('margin-left').toInt()+this.element.getStyle('margin-right').toInt();
		this.colCount = Math.floor(size / this.colW);
		this.colCount = Math.max(this.colCount, 1);
		
		return this;
	},

	masonryResize : function()
	{
		this.brickParent = this.element;
		this.lastColY=this.colY;
		this.lastColCount = this.colCount;
		
		this.masonrySetup();
		
		if (this.colCount != this.lastColCount)
			this.masonryArrange();
		return this;
	},

	masonryArrange : function()
	{
		// if masonry hasn't been called before
		if (!this.masoned) 
			this.element.setStyle('position', 'relative');

		if (!this.masoned || this.options.appendedContent != undefined)
			// just the new bricks
			this.bricks.setStyle('position', 'absolute');

		// get top left position of where the bricks should be
		var cursor = new Element('div').inject(this.element, 'top');

		var pos = cursor.getPosition();
		var epos = this.element.getPosition();
		
		var posTop = pos.y - epos.y;
		this.posLeft = pos.x - epos.x;

		cursor.dispose();
	
		// set up column Y array
		if (this.masoned && this.options.appendedContent != undefined) {
			// if appendedContent is set, use colY from last call
			if(this.lastColY != undefined)
				this.colY=this.lastColY; 
		 
			/*
			 * in the case that the wall is not resizeable, but the colCount has
			 * changed from the previous time masonry has been called
			 */
			for (var i = this.lastColCount; i < this.colCount; i++)
				this.colY[i] = posTop;
				
		} else {
			this.colY = [];
			for (var i = 0; i < this.colCount; i++)
				this.colY[i] = posTop;
		}

		// layout logic
		if (this.options.singleMode)
   		{
			for (var k = 0; k < this.bricks.length; k++)
      		{
				var brick = this.bricks[k];
				this.placeBrick(brick, this.colCount, this.colY, 1);
			}
		}
		else
		{
			for (var k = 0; k < this.bricks.length; k++)
			{
				var brick = this.bricks[k];

				// how many columns does this brick span
				var size=brick.getSize().x+brick.getStyle('margin-left').toInt()+brick.getStyle('margin-right').toInt();
				var colSpan = Math.ceil(size / this.colW);
				colSpan = Math.min(colSpan, this.colCount);

				if (colSpan == 1)
					// if brick spans only one column, just like singleMode
					this.placeBrick(brick, this.colCount, this.colY, 1);
				else {
					// brick spans more than one column
					// how many different places could this brick fit horizontally
					var groupCount = this.colCount + 1 - colSpan;
					var groupY = [0];
					// for each group potential horizontal position
					for (var i = 0; i < groupCount; i++)
					{
						groupY[i] = 0;
						// for each column in that group
						for (var j = 0; j < colSpan; j++)
							// get the maximum column height in that group
							groupY[i] = Math.max(groupY[i], this.colY[i + j]);
					}        					
					this.placeBrick(brick, groupCount, groupY, colSpan);
				} // else
			}
		} // /layout logic

		// set the height of the wall to the tallest column
		var wallH = 0;
		for (var i = 0; i < this.colCount; i++)
			wallH = Math.max(wallH, this.colY[i]);

		this.element.setStyle('height', wallH - posTop);

		// let listeners know that we are done
		this.element.fireEvent('masoned', this.element);
		this.masoned = true;
		this.options.appendedContent = undefined;

		// set all data so we can retrieve it for appended appendedContent
		// or anyone else's crazy jquery fun
		// this.element.data('masonry', props );
		return this;
	} // /masonryArrange function

});

/*
Element.Properties.mason = {

	set: function(options) {
		return this.store('mason:options', options);
	},
	
	get: function(options) {
		var mason = this.retrieve('mason');
		if (!mason)
		{ 
			if (options || !this.retrieve('mason:options'))
				this.set('mason', options);
			
			mason = new Aurora.Masonry(this, this.retrieve('mason:options'));
			this.store('mason', mason);
		}
		return mason;
	}
};

Element.implement({
	masonry : function(options) {
		return this.get('mason', options).go(options);
	}
});
*/

document.addEvent( 'domready', function() {

	$$( '.aurora-masonry' ).each( function( $el ) {
		$el.store( 'masonry', new Aurora.Masonry( $el, $el.getDataFromComment() ) );
	});

});


/*
Function: Aurora.initClasses
	-Used to initialise elements that are created after the page is loaded
*/
Aurora.initClasses = function( $element ) {

	if ( !$element )
		return;
	
	// Slides
	$element.getElements( '.aurora-slides' ).each( function( $el ) {
		$el.store( 'slides', new Aurora.Slides( $el, $el.getDataFromComment() ) );
	});
	
	// Buttons
	$element.getElements( '.aurora-button' ).each( function( $el ) {
		$el.store( 'button', new Aurora.Button( $el, $el.getDataFromComment() ) );
	});
	
	// Maps
	if ( Aurora.Google )
	{
		Aurora.Google.load( 'maps', (function() {
			$element.getElements( '.aurora-map' ).each( function( $el ) {
				$el.store( 'map', new Aurora.Map( $el, $el.getDataFromComment() ) );
			});
		}.bind( this )));
	}
	
	// Forms
	$element.getElements( '.aurora-form' ).each( function( $el ) {
		$el.store( 'form', new Aurora.Form( $el, $el.getDataFromComment() ) );
	});
	
	// Images	
	$element.getElements( '.aurora-images' ).each( function( $el ) {
	
		var options = $el.getDataFromComment() || {};
		
		if ( !options.mode )
			$extend( options, { mode: 'gallery' } );
		
		$el.store( 'image', new Aurora.Images( $el, options ) );
	
	});
	
	$element.getElements( '.aurora-image-popup' ).each( function( $el ) {
		$el.store( 'image', new Aurora.Images( $el, $el.getDataFromComment() ) );
	});
	
	// Overtext
	$$( 'input,textarea' ).each( function( $el ) {
		
		if ( $el.getProperty( 'title' ) )
			$el.store( 'overtext', new Aurora.OverText( $el ) );
	
	});
	
	// Suggest
	$element.getElements( '.aurora-suggest' ).each( function( $el ) {
		$el.store( 'suggest', new Aurora.Suggest( $el, $el.getDataFromComment() ) );
	});
	
	// FilterField
	$element.getElements( '.aurora-filterfield' ).each( function( $el ) {
		$el.store( 'filterfield', new Aurora.FilterField( $el, $el.getDataFromComment() ) );
	});
	
	// Expander
	$element.getElements( '.aurora-expander' ).each( function( $el ) {
		$el.store( 'expander', new Aurora.Expander( $el, $el.getDataFromComment() ) );
	});
}


/** Site & Page Objects **/

Site = {};
Page = {
	
	_iq_: [], // init queue
	_init_: function() // run on domready
	{
		while ( Page._iq_.length )
			Page._iq_.shift()();
	},
	
	_lq_: [], // load queue
	_load_: function() // run on domready
	{
		while ( Page._lq_.length )
			Page._lq_.shift()();
	}
	
}

function whenReady( fn ) { Page._iq_.push( fn ); }
window.addEvent( 'domready', Page._init_ );

function whenLoaded( fn ) { Page._lq_.push( fn ); }
window.addEvent( 'load', Page._load_ );