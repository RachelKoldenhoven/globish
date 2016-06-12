(function(window,angular,undefined){'use strict';function setOneTimeBinding($scope,element,watch,watcherParser,bindingParser,done){var watchingValue=watcherParser($scope);if(watchingValue!==undefined){return done(element,watcherParser==bindingParser?watchingValue:bindingParser($scope));}var watcherRemover=$scope.$watch(watch,function(newValue){if(newValue==undefined)return;removeWatcher();return done(element,watcherParser==bindingParser?newValue:bindingParser($scope));});function removeWatcher(){if(watcherRemover){watcherRemover();}}$scope.$on("$destroy",removeWatcher);}var once=angular.module('once',[]);function makeBindingDirective(definition){once.directive(definition.name,['$parse',function($parse){return{priority:definition.priority||0,link:function($scope,element,attrs){var watch=attrs.onceWaitFor||attrs[definition.name];var watcherParser=$parse(watch);var bindingParser=attrs.onceWaitFor?$parse(attrs[definition.name]):watcherParser;setOneTimeBinding($scope,element,watch,watcherParser,bindingParser,definition.binding);}};}]);}var bindingsDefinitions=[{name:'onceText',binding:function(element,value){element.text(value!==null?value:"");}},{name:'onceHtml',binding:function(element,value){element.html(value);}},{name:'onceSrc',priority:99,binding:function(element,value){element.attr('src',value);}},{name:'onceHref',priority:99,binding:function(element,value){element.attr('href',value);}},{name:'onceTitle',binding:function(element,value){element.attr('title',value);}},{name:'onceAlt',binding:function(element,value){element.attr('alt',value);}},{name:'onceId',binding:function(element,value){element.attr('id',value);}},{name:'onceIf',priority:600,binding:function(element,value){if(!value){element.remove();}}},{name:'onceClass',binding:function(element,value){if(angular.isObject(value)&&!angular.isArray(value)){var results=[];angular.forEach(value,function(val,index){if(val)results.push(index);});value=results;}if(value){element.addClass(angular.isArray(value)?value.join(' '):value);}}},{name:'onceStyle',binding:function(element,value){element.css(value);}},{name:'onceShow',binding:function(element,value){if(value){element.css('display','');}else{element.css('display','none');}}},{name:'onceHide',binding:function(element,value){if(value){element.css('display','none');}else{element.css('display','');}}}];angular.forEach(bindingsDefinitions,makeBindingDirective);once.directive('once',['$parse',function($parse){return function($scope,element,attrs){angular.forEach(attrs,function(attr,attrName){if(!/^onceAttr[A-Z]/.test(attrName))return;var watch=attrs.onceWaitFor||attrs[attrName];var watcherParser=$parse(watch);var bindingParser=attrs.onceWaitFor?$parse(attrs[attrName]):watcherParser;var binding=function(element,value){var dashedName=attrName.replace(/[A-Z]/g,function(match){return'-'+match.toLowerCase();});var name=dashedName.substr(10);element.attr(name,value);}
setOneTimeBinding($scope,element,watch,watcherParser,bindingParser,binding);});};}]);})(window,window.angular);