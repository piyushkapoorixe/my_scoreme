/*
 * @author Romal Singla
 */

scoremeapp.service('callAjaxService', ['$http', '$window', '$state', '$location', function($http, $window, $state, $location) {

    this.callAjaxFunction = function(url, method, headers, payload) {
        var responseHandler = "",
            content = {};
        angular.forEach(headers, function(value, key) {
            if (key == 'Content-Type') {
                content['Content-Type'] = value;
            }
        });
        content['Authorization'] = $window.sessionStorage.getItem("auth-token");

        //************************************   PLEASE DO NOT CHANGE THIS URL : *******************************//
        //************************************ PLEASE DO NOT CHANGE THIS URL : *******************************//
        var ip = "";
        console.log($location.absUrl());
        console.log($location.absUrl().indexOf('http://quality.scoreme.in/'));
        if ($location.absUrl().indexOf('https://www.scoreme.in/') != -1) {
            console.log("1");
            ip = "https://www.scoreme.in/rest/";
        } else if ($location.absUrl().indexOf('https://quality.scoreme.in/') != -1) {
            //$window.location.href = 'http://quality.scoreme.in/scoreme/layout.html#!/signin';
            //console.log("2")
             ip = "http://as1.quality.scoreme.in/creditscorePricing/rest/";
           // ip = "http://localhost:8383/creditscorePricing/rest/"
        } else {
            console.log("3");
           ip = "http://as1.quality.scoreme.in/creditscorePricing/rest/"
           // ip = "http://localhost:8383/creditscorePricing/rest/"
        }
        //************************************ PLEASE DO NOT CHANGE THIS URL : *******************************//
        //************************************ PLEASE DO NOT CHANGE THIS URL : *******************************//
        $window.sessionStorage.setItem('ip-address', ip);


        console.log(url);
        console.log(payload);
        var resData = {
            method: method.toUpperCase(),
            url: ip + url,
            data: payload,
            headers: content,
            async: false,
            dataType: "json",
            beforeSend: function() {},
            complete: function() {},
            eventHandlers: {
                progress: function(c) {}
            },
            uploadEventHandlers: {
                progress: function(evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        percentComplete = parseInt(percentComplete * 100);
                        $window.sessionStorage.setItem('uploadPercentage', percentComplete);
                    }
                }
            },
        }
        return $http(resData).then(
            function mysuccess(response, status, xhr) {
                console.log(response.status)
                ajaxStatus(response.status);
                responseHandler = { "Data": response.data };
                return responseHandler;
            },
            function myerror(response) {
                ajaxStatus(response.status);
                responseHandler = { "Data": response.data };
                return responseHandler;
            }
        );
    }

    function ajaxStatus(status) {
        console.log("status = " + status);
        if (status == 401) {
            $state.go('errorState');
        } else if (status == 0) {
            $state.go('noInternetErrorState');
        } else if (status == 500) {
            $state.go('internalServerErrorState');
        } else if (status == 404) {
            $state.go('pageNotFoundErrorState');
        }
    }

}])


//scoremeapp.service('checkStatusService', ['$http', '$window', 'ngProgressFactory', '$state', function($http, $window, ngProgressFactory) {
/* this.ajaxFunc = function(status){
		if(status == 401){
			$state.go('signInState');
		}else if(status == 0){
			alert("no internet connection");	  		
		}	
		return true;
  }	*/
//   }])
//this.callAjaxTrueFunction = function(url, method, headers, payload){

/*var resData = {
				method : method.toUpperCase(),
				url:url,
				data:payload,
				headers:content,
			    async:false,
			    dataType:"json",			   
                uploadEventHandlers: {
                    progress: function(evt) {
                    	if (evt.lengthComputable) {
                            var percentComplete = evt.loaded / evt.total;
                            percentComplete = parseInt(percentComplete * 100);
                            console.log("percentage="+ percentComplete);                     
                        }
                    }
                },
		   }
		  return $http(resData).then(
			function mysuccess(response)
		  {		
			console.log("success = "+response);
		    responseHandler = {"Data": response.data}; 
		    return responseHandler;
	      },
	      function myerror(response) 
	      {
	    	 console.log("error = "+response);
	    	 responseHandler = {"Data": response.data};
	    	 return responseHandler;
	      }*/

//  );				
// }