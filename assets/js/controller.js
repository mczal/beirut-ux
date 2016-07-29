var sidekeekController = angular.module('sidekeekController', []);
var token = "eyJhbGciOiJIUzI1NiJ9.dXNlcg.2Tbs8TkRGe7ZNu4CeiR5BXpK7-MMQZXc6ZTOLZiBoLQ";

sidekeekController.controller('Imgbase64Controller',['$scope','$http','$routeParams', function($scope,$http,$routeParams){
	$scope.submitImage = function(){
		var domain = "http://localhost:3000/sideAPIkeek/";
		var path = "editAccountPic";
		console.log($scope.imagebase64);
		var processedImg = "data:"+$scope.imagebase64.filetype+";base64,"+$scope.imagebase64.base64;
		$.ajax({
			url: domain+path,
			method: 'POST',
			data: {
				token: token,
				sessionCode: 'XjoLQBUFRc',
				imgbase64: processedImg,
				timestamp: '2015-10-10 12:12:12'
			},
			success: function(response){
				console.log(response);
			},
			error: function(xhr,status,error){
				console.log(error);
			}
		})
	}
}]);

// var x;
// sidekeekController.controller('AspirasiController',['$scope','$http','$routeParams', function($scope,$http,$routeParams){
// 		closeAspirasiBox();
// 		$scope.submitAspiration = function(){
// 				$scope.loading = true;
// 				var name = $scope.form.name;
// 	      		var content = $scope.form.content;
// 				var img_base64 = $("#img_base64").val();
//
// 				if(content == undefined || content == ""){
// 						alert("content harus diisi");
// 				}else {
// 						$.ajax({
// 							url: domain + '/aspirations',
// 							method: 'POST',
// 							data: {
// 								content: content,
// 								name: name,
// 								img_base64: img_base64
// 							},
// 							success: function(response){
// 								$scope.loading = false;
// 								alert('Aspirasi sudah terkirim!');
// 							},
// 							error: function(xhr, status, error){
// 								$scope.loading = false;
// 								alert(error);
// 							},
// 							complete: function(){
// 								document.location.reload();
// 							}
// 						})
// 				}
// 		}
//
// 		$scope.thumbsup = function(id_aspirasi){
// 			var code = $scope.code;
// 			// var status = $scope.status;
// 			$.ajax({
// 				url: domain + '/thumbs',
// 				method: 'POST',
// 				data: {
// 					id_aspirasi: id_aspirasi,
// 					code: regId,
// 					status: 1
// 				},
// 				success: function(response){
// 					// window.location.reload();
// 					$(this).addClass('text-success');
// 				},
// 				error: function(xhr, status, error){
// 				},
// 				complete: function(){
// 					document.location.reload();
// 				}
// 			})
// 		}
//
// 		$scope.thumbsdown = function(id_aspirasi){
// 			var code = $scope.code;
// 			// var status = $scope.status;
//
// 			$.ajax({
// 				url: domain + '/thumbs',
// 				method: 'POST',
// 				data: {
// 					id_aspirasi: id_aspirasi,
// 					code: regId,
// 					status: 0
// 				},
// 				success: function(response){
// 					// window.location.reload();
// 					$(this).addClass('text-danger');
// 				},
// 				error: function(xhr, status, error){
// 				},
// 				complete: function(){
// 				   document.location.reload();
// 				}
// 			})
// 		}
//
// 		$scope.busy = false;
//
// 		$scope.backLinkClick = function () {
//   		window.location.reload();
// 		};
//
// 		$http.get(domain + '/aspirations').success(function(data){
// 				$scope.aspiration=data;
// 				x = data;
// 				$scope.loading = false;
// 		});
//
// 		var page = 1;
// 		$scope.myPagingFunction = function(){
// 			if (this.busy) return;
// 			$scope.busy = true;
// 			$http.get(domain + '/aspiration?page='+page).success(function(data,status,headers,config){
// 				// console.log('distras testing');
// 				if(headers('X-Pagination-Page-Count') < page){
// 					// console.log('headers: '+headers('X-Pagination-Page-Count'));
// 					// console.log('page: '+page);
// 					$scope.busy = false;
// 					return;
// 				}
// 				console.log(headers('link'));
// 					for (var i = 0; i < data.length; i++) {
// 						if ($scope.aspiration.length >= 1) {
// 							if ($scope.aspiration.content != undefined && $scope.aspiration.content != null && $scope.aspiration.content != "") {
// 								console.log("undefined? "+$scope.aspiration.content);
// 								$scope.aspiration.push(data[i]);
// 							}
// 						}
// 					}
// 					$scope.loading = false;
// 					$scope.busy = false;
// 					page++;
// 			});
// 		}
//
// 		changeTitleHeader('Aspirasi');
// }]);
