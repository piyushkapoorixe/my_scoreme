/**
 * @author Romal Singla
 */

scoremeapp.filter('myCustomFilter', ['$filter', function($filter) {	  
	  // function that's invoked each time Angular runs $digest()
	  return function(input, predicate) {
	    searchValue = predicate['$'];
	    //console.log(searchValue);
	    var customPredicate = function(value, index, array) {
	      console.log(value);	      
	      // if filter has no value, return true for each element of the input array
	      if (typeof searchValue === 'undefined') {
	        return true;
	      }	      
	      var p0 = value['requestDate'].toLowerCase().indexOf(searchValue.toLowerCase());
	      var p1 = value['grade'].toLowerCase().indexOf(searchValue.toLowerCase());
	      var p2 = value['score'].toLowerCase().indexOf(searchValue.toLowerCase());
	      if (p0 > -1 || p1 > -1 || p2>-1) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	    //console.log(customPredicate);
	    return $filter('filter')(input, customPredicate, false);
	  }
}])

 scoremeapp.filter('myCustomFilterIndustry', ['$filter', function($filter) {	  
	  // function that's invoked each time Angular runs $digest()
	  return function(input, predicate) {
	    searchValue = predicate['$'];
	    //console.log(searchValue);
	    var customPredicate = function(value, index, array) {
	      console.log(value);	      
	      // if filter has no value, return true for each element of the input array
	      if (typeof searchValue === 'undefined') {
	        return true;
	      }	      
	      var p0 = value['groupName'].toLowerCase().indexOf(searchValue.toLowerCase());
	      var p1 = value['industryName'].toLowerCase().indexOf(searchValue.toLowerCase());
	      if (p0 > -1 || p1 > -1) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	    //console.log(customPredicate);
	    return $filter('filter')(input, customPredicate, false);
	  }
}])

 

scoremeapp.filter('myCustomFilterBusiness', ['$filter', function($filter) {	  
	  // function that's invoked each time Angular runs $digest()
	  return function(input, predicate) {
	    searchValue = predicate['$'];
	    //console.log(searchValue);
	    var customPredicate = function(value, index, array) {
	      console.log(value);	      
	      // if filter has no value, return true for each element of the input array
	      if (typeof searchValue === 'undefined') {
	        return true;
	      }	      
	      var p0 = value['groupName'].toLowerCase().indexOf(searchValue.toLowerCase());
	        if (p0 > -1) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	    //console.log(customPredicate);
	    return $filter('filter')(input, customPredicate, false);
	  }
}])



scoremeapp.filter('myCustomFilterInstitute', ['$filter', function($filter) {	  
	  // function that's invoked each time Angular runs $digest()
	  return function(input, predicate) {
	    searchValue = predicate['$'];
	    //console.log(searchValue);
	    var customPredicate = function(value, index, array) {
	      console.log(value);	      
	      // if filter has no value, return true for each element of the input array
	      if (typeof searchValue === 'undefined') {
	        return true;
	      }	      
	      var p0 = value['instituteName'].toLowerCase().indexOf(searchValue.toLowerCase());
	        if (p0 > -1) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	    //console.log(customPredicate);
	    return $filter('filter')(input, customPredicate, false);
	  }
}])


scoremeapp.filter('myCustomFilterInstitute', ['$filter', function($filter) {	  
	  // function that's invoked each time Angular runs $digest()
	  return function(input, predicate) {
	    searchValue = predicate['$'];
	    //console.log(searchValue);
	    var customPredicate = function(value, index, array) {
	      console.log(value);	      
	      // if filter has no value, return true for each element of the input array
	      if (typeof searchValue === 'undefined') {
	        return true;
	      }	      
	      var p0 = value['instituteName'].toLowerCase().indexOf(searchValue.toLowerCase());
	        if (p0 > -1) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	    //console.log(customPredicate);
	    return $filter('filter')(input, customPredicate, false);
	  }
}])

scoremeapp.filter('myCustomFilterUserInstitute', ['$filter', function($filter) {	  
	  // function that's invoked each time Angular runs $digest()
	  return function(input, predicate) {
	    searchValue = predicate['$'];
	    //console.log(searchValue);
	    var customPredicate = function(value, index, array) {
	      console.log(value);	      
	      // if filter has no value, return true for each element of the input array
	      if (typeof searchValue === 'undefined') {
	        return true;
	      }	      
	      var p0 = value['firstName'].toLowerCase().indexOf(searchValue.toLowerCase());
	      var p1 = value['username'].toLowerCase().indexOf(searchValue.toLowerCase());
	      var p2 = value['instituteName'].toLowerCase().indexOf(searchValue.toLowerCase());
	     // var p0 = value['firstName'].toLowerCase().indexOf(searchValue.toLowerCase());
	        if (p0 > -1 || p1 > -1 || p2 > -1 ) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	    //console.log(customPredicate);
	    return $filter('filter')(input, customPredicate, false);
	  }
}])

scoremeapp.filter('myBankReportFilter', ['$filter', function($filter) {	  
	  // function that's invoked each time Angular runs $digest()
	  return function(input, predicate) {
	    searchValue = predicate['$'];
	    //console.log(searchValue);
	    var customPredicate = function(value, index, array) {
	      console.log(value);	      
	      // if filter has no value, return true for each element of the input array
	      if (typeof searchValue === 'undefined') {
	        return true;
	      }	      
	     /* var p0 = value['serialno'].toLowerCase().indexOf(searchValue.toLowerCase());*/
	      var p1 = value['reqDateTime'].toLowerCase().indexOf(searchValue.toLowerCase());
	      var p2 = value['bankName'].toLowerCase().indexOf(searchValue.toLowerCase());
	      var p3 = value['accNumber'].toLowerCase().indexOf(searchValue.toLowerCase());
	     // var p0 = value['firstName'].toLowerCase().indexOf(searchValue.toLowerCase());
	        if (p3 > -1 || p1 > -1 || p2 > -1 ) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	    //console.log(customPredicate);
	    return $filter('filter')(input, customPredicate, false);
	  }
}])

 


scoremeapp.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});


