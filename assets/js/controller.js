var beirutController = angular.module('beirutController', []);
var service = "http://localhost:8180/beirut/api";
var mandatoryParam = "clientId=1&storeId=1&requestId=1&channelId=1&username=asd";
var positionContService = "position";
var candidateContService = "candidate";

beirutController.controller('CandidatePositionController',['$scope', '$routeParams', '$http',
function($scope,$routeParams,$http){
	$scope.page = "candidates";
	changeTitleHeader("Recruitment Center");
	$http.get("assets/json/imgbli.json").success(function(response){
		// console.log("RESP...");
		$scope.icobli = response.url;
		// console.log("RESPONSE: ",$scope.icobli);
	});
	// console.log("GOBL");
	$http.get(service+"/"+candidateContService+"/getCandidatePositionBySolrQuery?query=*%3A*"+mandatoryParam).success(function(response){
		// console.log(response);
		$scope.candidates = response.content;
		console.log("JNJKSNDKLND");
		console.log("$scope.candidates: ",$scope.candidates);
	});
}]);

beirutController.controller('PositionController',['$scope', '$routeParams', '$http',
	function($scope,$routeParams,$http){
		$scope.page = "jobs";
		changeTitleHeader("Jobs Management");
		// console.log("GETIN");
		$http.get("assets/json/imgbli.json").success(function(response){
			// console.log("RESP...");
			$scope.icobli = response.url;
			// console.log("RESPONSE: ",$scope.icobli);
		});

		$http.get(service+"/"+positionContService+"/getAllPosition?"+mandatoryParam).success(function(response){
			// console.log(response);
			$scope.positions = response.content;
			// console.log("$scope.positions: ",$scope.positions);
		});

		$scope.clickPosition = function(id){
			console.log("$scope.itr: ",$scope.itr);
			$scope.activeData = $scope.positionsContent[id];
			console.log("$scope.activeData: ",$scope.activeData);
		}

		$scope.search = function(){
			console.log("$scope.search: ",$scope.search);
			$http.get(service+"/"+positionContService+"/getPositionByTitle?title="+$scope.query+"&"+mandatoryParam).success(function(response){
				// console.log("Search Result: ",response);
				$scope.positions = response.content;
			})
		}

}]);
