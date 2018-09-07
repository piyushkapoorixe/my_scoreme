/**
 * @author Romal Singla
 */


scoremeapp.service('simpleServices' ,['callAjaxService' , '$window', function(callAjaxService , $window){
		
	this.getValue = function(status){
		var highchartValues = $window.sessionStorage.getItem('highChartValues');
		var chartVal = 0;
		angular.forEach(JSON.parse(highchartValues) , function(value,key){	
			if(status == key){
				chartVal = value;
			}
		})
		console.log(chartVal);
		return chartVal;	
     }	
}])