//multiply by 0.5 rather than divide by 2 to avoid divide by 0 errors
//Used limitTo: 1 to keep from rounding in height.


app.controller("metricCtrl", function($scope) {
    $scope.mph = 0;	
	$scope.kmph = 0;
	$scope.far = 0;	
	$scope.cel = 0;
	$scope.mi = 0;	
	$scope.yds = 0;
	$scope.ft = 0;	
	$scope.inch = 0;
	$scope.km = 0;	
	$scope.met = 0;
	$scope.cm = 0;	
	$scope.hft = 0;	
	$scope.hin = 0;
	$scope.hmet = 0;	
	$scope.gal = 0;
	$scope.qt = 0;
	$scope.pt = 0;	
	$scope.cup = 0;
	$scope.lit = 0;	
	$scope.cc = 0;
	$scope.sqmi = 0;	
	$scope.sqkm = 0;
	$scope.acr = 0;	
	$scope.hctr = 0;
	$scope.lbs = 0;
	$scope.ozs = 0;	
	$scope.kgs = 0;
	$scope.stn = 0;	
	$scope.slb = 0;
  
});

//document.getElementById(id).style.property = new style