// Register `rdSection` component, along with its associated controller and template
angular.
module('rdSection').
component('rdSection', {
  templateUrl: 'rd-section.template.html',
  controller:  function rdSectionController() {
    

    
    this.hDefaulti = 0; //defaults to first hospital

    this.hList = [{
      hid: 'H01',
      name: 'Super Dude',
      group: 'alpha',
      snippet: 'Morbi est augue, tempus eu urna eu, pretium ullamcorper ipsum.'
    }, {
      hid: 'H02',
      name: 'Bat Person',
      group: 'alpha',
      snippet: 'Donec luctus dignissim faucibus. Duis convallis molestie orci a vulputate.'
    }, {
      hid: 'H03',
      name: 'Spider Chap',
      group: 'beta',
      snippet: 'Curabitur in dui in ligula convallis porta.'
    }, {
      hid: 'H04',
      name: 'Mighty Man',
      group: 'beta',
      snippet: 'gasd yiuashuidgh aso.'
    }];
    this.query = this.hList[this.hDefaulti];

    this.gList = [{
      gid: 'G01',
      group: 'alpha'
    }, {
      gid: 'G02',
      group: 'beta'
    }];
    this.gDefault = this.gList[search(this.gList,"group",this.query.group)];

    this.mList = [{
      mid: 'M01',
      mname: 'speed',
      mdesc: 'fast or slow'
    }, {
      mid: 'M02',
      mname: 'agility',
      mdesc: 'good or poor'
    }];
    this.mDefault = this.mList[0];

    this.aData = [{
      id: 'a01',
      hid: 'H01',
      group: 'alpha',
      mid: 'M01',
      mname: 'speed',
      mvalue: 'fast'
    }, {
      id: 'a02',
      hid: 'H01',
      group: 'alpha',
      mid: 'M02',
      mname: 'agility',
      mvalue: 'good'
    }, {
      id: 'a03',
      hid: 'H02',
      group: 'alpha',
      mid: 'M01',
      mname: 'speed',
      mvalue: 'slow'
    }, {
      id: 'a04',
      hid: 'H02',
      group: 'alpha',
      mid: 'M02',
      mname: 'agility',
      mvalue: 'unknown'
    }, {
      id: 'a05',
      hid: 'H03',
      group: 'beta',
      mid: 'M01',
      mname: 'speed',
      mvalue: 'unknown'
    }, {
      id: 'a06',
      hid: 'H03',
      group: 'beta',
      mid: 'M02',
      mname: 'agility',
      mvalue: 'poor'
    }, {
      id: 'a07',
      hid: 'H04',
      group: 'beta',
      mid: 'M01',
      mname: 'speed',
      mvalue: 'slow'
    }, {
      id: 'a08',
      hid: 'H04',
      group: 'beta',
      mid: 'M02',
      mname: 'agility',
      mvalue: 'poor'
    }];

    this.onL3Click = function(selm) {
      this.mDefault = selm;
    };

    this.onL2Click = function(selg) {
      this.gDefault = selg;
    };

    this.onL1Change = function() {
      this.gDefault = this.gList[search(this.gList,"group",this.query.group)];
    };
    
    this.onT2Click = function(selh) {
      this.mDefault = this.mList[search(this.mList,"mid",selh.mid)];
    };
    
    this.onT3Click = function(selh) {
      this.query = this.hList[search(this.hList,"hid",selh.hid)];
    };

//improvised search of JSON (source= JSON obj, k key, v val, returns index)
    function search(source, kname, vname) {
      var results = null;
      var l = Object.keys(source).length;
      for(var i=0; i < l; ++i) {
          if(source[i][kname] == vname) {
            results = i;
            break;
          }
        }
      return results;
    }
  }
  
});