var templateApp = angular.module('templatesApp', []);

templateApp
.controller('TemplatesController', ['$http', '$scope', function($http, $scope){
	$scope.copyTemplateValue = function(template){
		if(template){
			copyTextToClipboard(template.text);
		}
		return false;
	}
	$http.get(''). //paste the url from where you will get the data from.......
	  success(function(data, status, headers, config) {
	    // this callback will be called asynchronously
	    // when the response is available
	    $scope.templatesData = data;
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
}]);

function copyTextToClipboard(text) {
    var copyFrom = $('<textarea/>');
    copyFrom.text(text);
    $('body').append(copyFrom);
    copyFrom.select();
    document.execCommand('copy', true);
    copyFrom.remove();

}