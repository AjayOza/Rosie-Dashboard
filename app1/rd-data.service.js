//register the service

angular.module('rosieDash')
   .service('rdDataService', rdDataService);

function rdDataService () {
   this.somevariable = 'somevalue';
   
   this.aData = 
'[{"id":"a01","hid":"H01","group":"alpha","mid":"M01","mname":"speed","mvalue":"fast"},{"id":"a02","hid":"H01","group":"alpha","mid":"M02","mname":"agility","mvalue":"good"},{"id":"a03","hid":"H02","group":"alpha","mid":"M01","mname":"speed","mvalue":"slow"},{"id":"a04","hid":"H02","group":"alpha","mid":"M02","mname":"agility","mvalue":"unknown"},{"id":"a05","hid":"H03","group":"beta","mid":"M01","mname":"speed","mvalue":"unknown"},{"id":"a06","hid":"H03","group":"beta","mid":"M02","mname":"agility","mvalue":"poor"},{"id":"a07","hid":"H04","group":"beta","mid":"M01","mname":"speed","mvalue":"slow"},{"id":"a08","hid":"H04","group":"beta","mid":"M02","mname":"agility","mvalue":"poor"}]';


  this.hData = 
  '[{"hid":"H01","name":"Super Dude","group":"alpha","snippet":"Morbi est augue, tempus eu urna eu, pretium ullamcorper ipsum."},{"hid":"H02","name":"Bat Person","group":"alpha","snippet":"Donec luctus dignissim faucibus. Duis convallis molestie orci a vulputate."},{"hid":"H03","name":"Spider Chap","group":"beta","snippet":"Curabitur in dui in ligula convallis porta."},{"hid":"H04","name":"Mighty Man","group":"beta","snippet":"gasd yiuashuidgh aso."}]';
  
  
  this.gData = 
'[{"gid":"G01","group":"alpha"},{"gid":"G02","group":"beta"}]';
  
  
  this.mData = 
  '[{"mid":"M01","mname":"speed","mdesc":"fast or slow"},{"mid":"M02","mname":"agility","mdesc":"good or poor"}]';
  

//**********************************************
// If multiple variables are populated here as json strings in this file
//then the angularjs service part of this file can serve as a data store for a light
//javascript app. Advantage one file with minified strings of multiple variables!
//
//Q:How to inject data in to this service from R?
//A:use read-sub-write method:
// put a placeholder in a template file (copy of this file) such as
//
//      //*aData
//
// save the template into something like "rd-data.service.keep" 
//    and include subfolders if needed
// read this file into R:  tmp <- readLines("rd-data.service.keep")
// scan for all "//*" placeholders 
//  if the one being sought (i.e. one with "aData") is found, then
// use jsonlite lib to convert R dataframe "toJSON" and build it up:
// strSUB <- paste0("this.aData = ", sQuote(toJSON(aData.df)),";")
// now subsitute the line:  sub('//*aData', strSUB, tmp)
// move on to the next placeholder to replace
// write back to the .js file: write(tmp, "rd-data.service.js")
// note that this service will deliver the JSON string and the controll accessing it will have 
// reconvert to javascript array
//*********************************************
  
}