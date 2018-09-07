/*
 *
 * @author Romal Singla
 * 
 */

scoremeapp.controller('loginController', ['callAjaxService', 'commonServices', '$window', '$scope', '$location', '$state', '$stateParams', '$rootScope', '$document', function(callAjaxService, commonServices, $window, $scope, $location, $state, $stateParams, $rootScope, $document) {
    // Register a body reference to enable/disable body scroll
    var bodyRef = angular.element($document[0].body);

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $scope.noOfCompanyCount = $window.sessionStorage.getItem("noOfCompanyCount");
    // var activeCount = 0;
    //sessionStorage.setItem('TEMPLATE_URL',"template/layout_new.html#!");


    $rootScope.flag = $window.sessionStorage.getItem("flag");
    $scope.loginUser = function() {
        //loader starts
        //$scope.dataLoading = true;
        // Add our overflow hidden class on loading
        //bodyRef.addClass('ovh');

        var payload = {
                username: $scope.username,
                password: $scope.password,
            },
            url = "signinws/login/user",
            method = 'POST',
            headers = { 'Content-Type': "application/json; charset=utf-8" };

        console.log(payload);
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(
            function successCallback(response) {
                $scope.userRespData = response.Data;
                if (response.Data.resp_code === 'CS1002') {
                    //loader stops
                    //$scope.dataLoading = false;
                    if (response.Data.auth_token != undefined) {

                        // Remove our overflow hidden class on loading
                        // bodyRef.removeClass('ovh');
                        $window.sessionStorage.setItem('userRole', response.Data.data.role);
                        $window.sessionStorage.setItem('loggedUsername', $scope.username);
                        $window.sessionStorage.setItem('isHeroUser', response.Data.isHeroUser);
                        $window.sessionStorage.setItem('isICICI', response.Data.isICICI);
                        var companylength = response.Data.companiesCount;
                        $window.sessionStorage.setItem("noOfCompanyCount", companylength);
                        var companyId = response.Data.companyId;
                        var companyName = response.Data.companyName;
                        $window.sessionStorage.setItem("auth-token", response.Data.auth_token);
                        //alert($window.sessionStorage.getItem("auth-token"));
                        var flag = response.Data.flag;
                        $rootScope.flag = response.Data.flag;
                        console.log(flag);
                        console.log($rootScope.flag);
                        $window.sessionStorage.setItem('flag', response.Data.flag);
                        $window.sessionStorage.setItem('bankFlag', response.Data.bankFlag);
                        var isReset = response.Data.isReset;
                        if (isReset == 1) {
                            //loader stops
                            //$scope.dataLoading = false;
                            // Remove our overflow hidden class on loading
                            //bodyRef.removeClass('ovh');
                            $state.go('changePasswordState');
                        } else {
                            if (companylength == 0) {
                                //loader stops
                                //$scope.dataLoading = false;
                                // Remove our overflow hidden class on loading
                                //bodyRef.removeClass('ovh');
                                $state.go('introductoryPageState')
                                    //$state.go('addEntityState');
                            } else if (flag == 0) {
                                //loader stops
                                //$scope.dataLoading = false;
                                // Remove our overflow hidden class on loading
                                //bodyRef.removeClass('ovh');
                                $window.sessionStorage.setItem('companyId', companyId);
                                $window.sessionStorage.setItem('companyName', companyName);
                                $window.sessionStorage.setItem('name', response.Data.data.firstName + " " + response.Data.data.lastName);
                                $state.go('userDashboardState');
                                // $state.go('scoreDashboardState',{status :'empty'});
                            } else if (flag == 1) {
                                $window.sessionStorage.setItem('companyId', companyId);
                                $window.sessionStorage.setItem('companyName', companyName);
                                $window.sessionStorage.setItem('name', response.Data.data.firstName + " " + response.Data.data.lastName);
                                $state.go('userDashboardState');
                                //$state.go('mainDashboardState');   
                            }
                        }
                        show_p_notify('info', response.Data.welcome_msg);
                    } else {
                        show_p_notify('error', response.Data.resp_msg);
                    }
                } else {
                    //loader stops
                    //$scope.dataLoading = false;
                    // Remove our overflow hidden class on loading
                    // bodyRef.removeClass('ovh');
                    show_p_notify('error', response.Data.resp_msg);
                    $state.go('signInState');
                }
            },
            function errorCallback(response) {
                $state.go('signUpState');
            }
        )
    }

    //******************* sign up **********************
    $scope.signupUser = function() {
        //loader stops
        //$scope.dataLoading = true;
        // Remove our overflow hidden class on loading
        //bodyRef.addClass('ovh');
        var payload = {
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                email: $scope.email,
                password: $scope.password,
                username: $scope.email,
                mobile: $scope.mobileNo,
                name: $scope.firstName + " " + $scope.lastName
            },
            url = "signinws/signup/user",
            method = 'POST',
            headers = { 'Content-Type': "application/json; charset=utf-8" };

        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            $scope.userRespData = response.Data;
            if (response.Data.resp_code === 'CS1002') {
                //loader stops
                //$scope.dataLoading = false;
                // Remove our overflow hidden class on loading
                // bodyRef.removeClass('ovh');
                // alert($scope.mobileNo);

                $state.go('verifyMobileState', { mobileNo: $scope.mobileNo, email: $scope.email });
                show_p_notify('success', response.Data.resp_msg);
            } else {
                //loader stops
                //$scope.dataLoading = false;
                // Remove our overflow hidden class on loading
                //bodyRef.removeClass('ovh');
                show_p_notify('error', response.Data.resp_msg);
            }
        });
    }

    //***************mobile verification *********************//

    //$scope.otp = $state.params.otp;
    $scope.validateOTP = function() {
        //loader stops
        //$scope.dataLoading = true;
        // Remove our overflow hidden class on loading
        //bodyRef.addClass('ovh');
        var mobileNo = $state.params.mobileNo,
            username = $state.params.email,
            otp = $scope.otp;
        if (mobileNo.length == 10) {
            var payload = "",
                url = "signinws/validateOTP/" + username + "/" + otp,
                method = 'GET',
                headers = { 'Content-Type': "application/json; charset=utf-8" };
            callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
                $scope.instituteRespData = response.Data;
                if (response.Data.resp_code === 'CS1002') {
                    //loader stops
                    //$scope.dataLoading = false;
                    // Remove our overflow hidden class on loading
                    //bodyRef.removeClass('ovh');
                    show_p_notify('success', response.Data.resp_msg);
                    $state.go('signInState');
                } else {
                    show_p_notify('error', response.Data.resp_msg);
                }
            }, function errorCallback(response) {})
        }
    }


    //*************** resend OTP *********************//
    $scope.resendOTP = function() {
        //loader stops
        //$scope.dataLoading = true;
        // Remove our overflow hidden class on loading
        //bodyRef.addClass('ovh');
        var mobileNo = $state.params.mobileNo;
        var email = $state.params.email;

        if (mobileNo.length == 10) {
            payload = "", url = "signinws/get/OTP/" + mobileNo + "/" + email, method = 'GET', headers = { 'Content-Type': "application/json; charset=utf-8" };
            callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
                if (response.Data.resp_code === 'CS1002') {
                    //loader stops
                    //$scope.dataLoading = false;
                    // Remove our overflow hidden class on loading
                    //bodyRef.removeClass('ovh');
                    show_p_notify('success', response.Data.resp_msg);
                } else if (response.Data.resp_code === 'CS1003') {
                    show_p_notify('error', response.Data.resp_msg);
                }
            }, function errorCallback(response) {
                console.log(response);
            })
        }
    }

    //*************** forgot password **************//
    $scope.forgotPassword = function() {
        //loader stops
        //$scope.dataLoading = true;
        // Remove our overflow hidden class on loading
        //bodyRef.addClass('ovh');
        var email = angular.element(document.querySelector('#email')).val();
        //console.log(email);
        var payload = "",
            url = "signinws/forgot/password/" + email,
            method = 'GET',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            $scope.userRespData = response.Data;
            if (response.Data.resp_code === 'CS1002') {
                //loader stops
                //$scope.dataLoading = false;
                // Remove our overflow hidden class on loading
                //bodyRef.removeClass('ovh');
                $state.go('signInState');
                show_p_notify('success', response.Data.resp_msg);
            } else {
                show_p_notify('error', response.Data.resp_msg);
                //$state.go('resetPasswordState');
                console.log("unsuccessfull...");
            }
        });
    }



    $scope.changePassword = function() {
        //loader stops
        //$scope.dataLoading = true;
        // Remove our overflow hidden class on loading
        // bodyRef.removeClass('ovh');
        var payload = {
                oldpass: $scope.oldPassword,
                newpass: $scope.newPassword
            },
            url = "csn/changepassword/user",
            method = 'POST',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            $scope.userRespData = response.Data;
            if (response.Data.resp_code === 'CS1002') {
                //loader stops
                //$scope.dataLoading = false;
                // Remove our overflow hidden class on loading
                //bodyRef.removeClass('ovh');
                show_p_notify('success', response.Data.resp_msg);
                console.log(response.Data.resp_msg);
                $window.history.back();
            } else {
                show_p_notify('error', response.Data.resp_msg);
            }
        }, function errorCallback(response) {
            console.log(response);
            show_p_notify('error', response.Data.resp_msg);
        });
    }


    //var payload ="", url ="csn/getOAuthurl" , method = 'GET' , headers = {'Content-Type': "application/json; charset=utf-8"};	*/   


    // console.log($location.absUrl()); 

    console.log($location.absUrl().indexOf('?user=google'))
    if ($location.absUrl().indexOf('?user=google') != -1) {

        callAjaxService.callAjaxFunction("signinws/getGoogleUserDataByUniqueKey/" + $window.sessionStorage.getItem("unique-token"), 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
            if (response.Data != null) {
                if (response.Data.resp_code === 'CS1002') {
                    //loader stops
                    //$scope.dataLoading = false;
                    // Remove our overflow hidden class on loading
                    //bodyRef.removeClass('ovh');
                    /*$window.sessionStorage.setItem('userRole',response.Data.data.role);
		$window.sessionStorage.setItem('loggedUsername' , $scope.username);
		var companylength = response.Data.companiesCount;
		$window.sessionStorage.setItem("noOfCompanyCount", companylength);
		var companyId = response.Data.companyId;	
		var companyName = response.Data.companyName;
	    $window.sessionStorage.setItem("auth-token", response.Data.auth_token);
	    //alert($window.sessionStorage.getItem("auth-token"));
		var flag = response.Data.flag;
			 if(companylength == 0){			
    		    $state.go('addEntityState');   		    
    		 }
			 else if(flag == 0){
				 $window.sessionStorage.setItem('companyId',companyId);
				 $window.sessionStorage.setItem('companyName',companyName);
			
    		     $state.go('scoreDashboardState',{status :'empty'});
    		 }else if(flag == 1) {
    			 $window.sessionStorage.setItem('companyId',companyId);
    			 $window.sessionStorage.setItem('companyName',companyName);
    			
    		     $state.go('mainDashboardState');
    		 }  
			 $window.sessionStorage.setItem('name',response.Data.data.firstName+" "+response.Data.data.lastName);*/

                    $window.sessionStorage.setItem('userRole', response.Data.data.role);
                    $window.sessionStorage.setItem('loggedUsername', $scope.username);
                    $window.sessionStorage.setItem('isHeroUser', response.Data.isHeroUser);
                    $window.sessionStorage.setItem('isICICI', response.Data.isICICI);
                    var companylength = response.Data.companiesCount;
                    $window.sessionStorage.setItem("noOfCompanyCount", companylength);
                    var companyId = response.Data.companyId;
                    var companyName = response.Data.companyName;
                    $window.sessionStorage.setItem("auth-token", response.Data.auth_token);
                    //alert($window.sessionStorage.getItem("auth-token"));
                    var flag = response.Data.flag;
                    $rootScope.flag = response.Data.flag;
                    console.log(flag);
                    console.log($rootScope.flag);
                    $window.sessionStorage.setItem('flag', response.Data.flag);
                    $window.sessionStorage.setItem('bankFlag', response.Data.bankFlag);
                    var isReset = response.Data.isReset;
                    if (isReset == 1) {
                        //loader stops
                        //$scope.dataLoading = false;
                        // Remove our overflow hidden class on loading
                        // bodyRef.removeClass('ovh');
                        $state.go('changePasswordState');
                    } else {
                        if (companylength == 0) {
                            //loader stops
                            //$scope.dataLoading = false;
                            // Remove our overflow hidden class on loading
                            //bodyRef.removeClass('ovh');
                            $state.go('introductoryPageState')
                                //$state.go('addEntityState');
                        } else if (flag == 0) {
                            //loader stops
                            //$scope.dataLoading = false;
                            // Remove our overflow hidden class on loading
                            //bodyRef.removeClass('ovh');
                            $window.sessionStorage.setItem('companyId', companyId);
                            $window.sessionStorage.setItem('companyName', companyName);
                            $window.sessionStorage.setItem('name', response.Data.data.firstName + " " + response.Data.data.lastName);
                            $state.go('userDashboardState');
                            // $state.go('scoreDashboardState',{status :'empty'});
                        } else if (flag == 1) {
                            $window.sessionStorage.setItem('companyId', companyId);
                            $window.sessionStorage.setItem('companyName', companyName);
                            $window.sessionStorage.setItem('name', response.Data.data.firstName + " " + response.Data.data.lastName);
                            $state.go('userDashboardState');
                            //$state.go('mainDashboardState');

                        }
                    }
                    show_p_notify('info', response.Data.welcome_msg);
                }
            }
        });
    } else {
        callAjaxService.callAjaxFunction("signinws/getOAuthurl", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
            if (response.Data.resp_code === 'CS1002') {
                //loader stops
                $scope.dataLoading = false;
                // Remove our overflow hidden class on loading
                //bodyRef.removeClass('ovh');
                console.log(response.Data.resp_msg);
                $scope.url = response.Data.url;
                $window.sessionStorage.setItem("unique-token", response.Data.key);
            }
        });
    }


}])