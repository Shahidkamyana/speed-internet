'use strict';

angular.module('sif', ['firebase', 'ui.router'])
.service("MbpsService", function() {
  this.Mbps = 0;
  this.devices = 0;
  this.survey2 = 0;
  this.survey3 = 0;
  this.addDevice = function() {
    this.devices += 1;
    this.Mbps += 1;
  };
  this.removeDevice = function() {
    this.devices -= 1;
    this.Mbps -= 1;
    if (this.Mbps > 0 ){
      this.Mbps = 0;
    }
    if (this.devices > 0) {
      this.devices = 0;
    }
  };
  this.howOftenMedia = function(frequency) {
    if (this.survey2 > 0) {
      this.Mbps -= this.survey2;
    }
    this.survey2 = frequency;
    this.Mbps += this.survey2;
  };
  this.howOftenStreaming = function(frequency) {
    if (this.survey3 > 0) {
      this.Mbps -= this.survey3;
    }
    this.survey3 = frequency;
    this.Mbps += this.survey3;
  };
})
.controller("MainCtrl", function($rootScope, $scope, MbpsService){
  $scope.Mbps = MbpsService.Mbps;
  $scope.devices = MbpsService.devices;
  $scope.survey2 = MbpsService.survey2;
  $scope.survey3 = MbpsService.survey3;

  $scope.removeDevice = function() {
    MbpsService.removeDevice();
    $scope.devices = MbpsService.devices;
    $scope.Mbps = MbpsService.Mbps;
  };

  $scope.addDevice = function() {
    MbpsService.addDevice();
    $scope.devices = MbpsService.devices;
    $scope.Mbps = MbpsService.Mbps;
  };

  $scope.howOftenMedia = function(frequency) {
    MbpsService.howOftenMedia(frequency);
    $scope.Mbps = MbpsService.Mbps;
    $scope.survey2 = MbpsService.survey2;
  };
  $scope.howOftenStreaming = function(frequency) {
    MbpsService.howOftenStreaming(frequency);
    $scope.Mbps = MbpsService.Mbps;
    console.log(MbpsService.survey3)
    $scope.survey3 = MbpsService.survey3;
  };
});
