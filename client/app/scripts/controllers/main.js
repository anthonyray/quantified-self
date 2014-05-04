'use strict';

angular.module('quantifiedApp')
  .controller('MainCtrl', function ($scope,sugarFactory,$filter) {
  	
  	$scope.sugars = null;
  	
  	function init() {
  	    sugarFactory.getTodaySugar().success(function(sugs) {
  	        var labels = [];
  	        var datasets = [];

  	        sugs.forEach(function(sug){
  	        	labels.push($filter('date')(new Date(sug.date),'shortTime'));
  	        });

  	        sugs.forEach(function(sug){
  	        	datasets.push(sug.amount);
  	        })

  	        $scope.sugars = sugs;
          	
          	$scope.chart = {
          		labels : labels,
        		datasets : [
        			   {
          	            fillColor : "rgba(151,187,205,0)",
          	            strokeColor : "#e67e22",
          	            pointColor : "rgba(151,187,205,0)",
          	            pointStrokeColor : "#e67e22",
          	            data : datasets
          	        }
          	    ], 
          	};
  	    });
  	};

  	init(); 



  });


