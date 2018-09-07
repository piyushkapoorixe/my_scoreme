/** 
 * @author Romal Singla
 */

scoremeapp.service('commonServices', ['callAjaxService', '$window', function(callAjaxService, $window) {

    this.getAllPrimaryCompany = function() {
        var payload = "",
            url = "../rest/csn/get/primary/company",
            method = 'GET',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        return callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            return response;
        }, function errorCallback(response) {
            console.log(response);
        })
    }

    // ********** get all bank Name (service)********//
    this.bankName = function() {
        var payload = "",
            url = "../rest/cs/get/banks",
            method = 'GET',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        var bankData = "";
        return callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            console.log(response);
            bankData = response;
            return bankData;
        }, function errorCallback(response) {
            console.log(response);
        });
    }


    // ********* Get All State Names *************
    /*this.stateName = function(){
    var stateData = "";
     var payload = "", url ="../rest/cs/get/states" , method = 'GET' , headers = {'Content-Type': "application/json; charset=utf-8"};	    
    	 return callAjaxService.callAjaxFunction(url,method,headers,payload).then(function successCallback(response) {
      	       console.log(response);
      	   if(response['Data'].resp_code == "CS1002"){
      	      stateData = response;
      	      $window.sessionStorage.setItem('stateName' , JSON.stringify(stateData)); 
      	   }
         }, function errorCallback(response) {
      	  	console.log(response);
    	  });
    	 
    	 return stateData;
    }*/

    /*this.stateName = function(){
    	 var stateData = "";
    		var allStateName = $window.sessionStorage.getItem('stateName');
    		allStateName = JSON.parse(allStateName);
    		if(allStateName != null){
    		   if(allStateName['Data'] != null){
    			  if(allStateName['Data'].resp_code == "CS1002"){
    			     $window.sessionStorage.setItem('stateName' , JSON.stringify(allStateName)); 
    			     stateData = allStateName;
    			    // return allStateName;
    			  }
    		    }else{
    		    	 var payload = "", url ="../rest/cs/get/states" , method = 'GET' , headers = {'Content-Type': "application/json; charset=utf-8"};	
    		 	    
    		 	    return callAjaxService.callAjaxFunction(url,method,headers,payload).then(function successCallback(response) {
    		     	   console.log(response);
    		     	   if(response['Data'].resp_code == "CS1002"){
    		     	      stateData = response;
    		     	      $window.sessionStorage.setItem('stateName' , JSON.stringify(stateData)); 
    		     	   }
    		          }, function errorCallback(response) {
    		     	  	console.log(response);
    		 	     });
    		    }
    		}else{
    	    var payload = "", url ="../rest/cs/get/states" , method = 'GET' , headers = {'Content-Type': "application/json; charset=utf-8"};	
    	    return callAjaxService.callAjaxFunction(url,method,headers,payload).then(function successCallback(response) {
        	   console.log(response);
        	   if(response['Data'].resp_code == "CS1002"){
        	      stateData = response;
        	      $window.sessionStorage.setItem('stateName' , JSON.stringify(stateData)); 
        	   }
             }, function errorCallback(response) {
        	  	console.log(response);
    	     });
    	}
    		//return stateData;
    }*/

    // ************ Get All Cities Names ***********
    this.getCityName = function(selectedState) {
        var payload = "",
            url = "../rest/cs/get/cities/" + selectedState,
            method = 'GET',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        var cityData = "";
        return callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            console.log(response);
            cityData = response.Data;
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    // get all company parameters on score dashboard	  
    this.companyParameters = function(companyId) {
        var payload = "",
            url = "../rest/csn/get/company/parameters/data/" + companyId,
            method = 'GET',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        return callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            console.log(response);
            return response;
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    // get Business Type (group name) 	  
    this.getBusinessType = function() {
        return callAjaxService.callAjaxFunction("../rest/cs/get/BusinessType", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
            return response;
        }, function errorCallback(response) {
            console.log(response);
        })
    }

    //get Industry Type   
    this.getIndustryType = function(businessType) {
        var payload = "",
            url = "../rest/cs/get/industriesByID/" + businessType,
            method = 'GET',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        return callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            return response;
        }, function errorCallback(response) {})
    }

}])