
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
	$scope.vn = null;
	$scope.list = null;
	$scope.info = {
		type : "No Name",
		total : 0,
		recovered : 0,
		critical : 0,
		death :0, 
		changed: {
			total : 0,
			recovered : 0,
			critical : 0,
			death :0
		}
	};
	$scope.LoadData = function() {
		$scope.loader = "show";
		$scope.searchtxt = "";
		$http.get("https://tygia.com/app/covid-19/api.json?type=2")
		.then(function(response) {
			$scope.list = response.data.items;
			$scope.vn = $scope.list.find(list => list.type === "vietnam");
			$scope.loader = "hide";
		});


	}
	$scope.LoadData();
	$scope.orderByMe = function(x) {
		$scope.myOrderBy = x;
	}
	$scope.showInfo = function(x) {
		const ojb = $scope.list.find(list => list.type === x);
		$scope.info.type = ojb.type;
		$scope.info.total = ojb.total;
		$scope.info.recovered = ojb.recovered;
		$scope.info.critical = ojb.critical;
		$scope.info.death = ojb.death;

//change
$scope.info.changed.total = ojb.changed.total;
$scope.info.changed.recovered = ojb.changed.recovered;
$scope.info.changed.critical = ojb.changed.critical;
$scope.info.changed.death = ojb.changed.death;
// $("#myModal").modal("show");
console.log(ojb);
}
});