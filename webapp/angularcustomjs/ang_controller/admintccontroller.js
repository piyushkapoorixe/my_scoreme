
/*
 * @author Shubhangi
 */

scoremeapp.controller('adminTcController', ['callAjaxService', 'commonServices', '$window', '$scope', '$location', '$state', '$filter','$stateParams', '$rootScope', '$timeout', '$http', '$document', function(callAjaxService, commonServices, $window, $scope, $location, $state,$filter, $stateParams, $rootScope, $timeout, $http, $document) {

   


    var data = [];


    var companyId = $window.sessionStorage.getItem("companyId");
    //$('#loadingBar').css("display","block");
    // Register a body reference to enable/disable body scroll
    var bodyRef = angular.element($document[0].body);

    //loader starts
    $scope.dataLoading = true;
    // Add our overflow hidden class on loading
    bodyRef.addClass('ovh');

    // ******* Get Business Type ********
    commonServices.getBusinessType().then(function successCallback(response) {
        if (response.Data.resp_code === 'CS1002') {
            console.log(response.Data);
            $scope.businessTypeData = response.Data;
        }
    });
///
$('.numbersOnly').keyup(
    function() {
        if (this.value != this.value.replace(
                /[^0-9]/g, '')) {
            this.value = this.value.replace(
                    /[^0-9]/g, '');
        }
    });

    $scope.futureDate = $filter('date')(new Date(),
                                    "yyyy-MM-dd");
                                    

    callAjaxService.callAjaxFunction("cs/get/BusinessTypeAdmin", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        if (response.Data.resp_code == "CS1002") {
            console.log(response.Data.data);
            $scope.BusinessTypeAdminData = response.Data.data;
        } else {
            show_p_notify('error', response.Data.resp_msg);
        }
    }, function errorCallback(response) {
        console.log(response);
    })


    callAjaxService.callAjaxFunction("csa/get/institute/all", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        console.log(response.Data.response_msg);
        if (response.Data.resp_code == "CS1002") {
            $scope.instituteData = response.Data.data;

            $scope.aa = "institute";
           console.log($scope.instituteData);
        } 
    }, function errorCallback(response) {
        console.log(response);
    })

    // callAjaxService.callAjaxFunction("csa/get/users/163", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
    //     console.log(response.Data.response_msg);
    //     if (response.Data.resp_code == "CS1002") {
    //         $scope.userManagement = response.Data.data;

    //         $scope.aa = "institute";
    //        console.log($scope.userManagement);
    //     } 
    // }, function errorCallback(response) {
    //     console.log(response);
    // })


   



    // callAjaxService.callAjaxFunction("csa/get/plan/cs/all/166", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
    //     console.log(response.Data.response_msg);
    //     if (response.Data.resp_code == "CS1002") {
    //         $scope.postpaidDetailsBase = response.Data.data;

    //        // $scope.aa = "institute";
    //        console.log($scope.postpaidDetailsBase);
    //     } 
    // }, function errorCallback(response) {
    //     console.log(response);
    // })


    // callAjaxService.callAjaxFunction("csa/get/plan/cs/all/164", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
    //     console.log(response.Data.response_msg);
    //     if (response.Data.resp_code == "CS1002") {
    //         $scope.licenseDetailsBase = response.Data.data;

    //        // $scope.aa = "institute";
    //        console.log($scope.licenseDetailsBase);
    //     } 
    // }, function errorCallback(response) {
    //     console.log(response);
    // })

    // ****************** add institute ***************
    $scope.getCities = function(selectedState) {
        //alert(selectedState);
        var payload = "",
            url = "csa/get/cities/" + selectedState,
            method = 'GET',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            console.log(response);
            $scope.cityData = response.Data;
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    

    // callAjaxService.callAjaxFunction("csa/get/institute/all", 'GET',
    //  { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
    //         //  if (response.Data.resp_code == "CS1002") {
    //         //      console.log(response.Data.response_msg);
    //         //      $scope.userInstituteMapData = response.Data.data;
    //         //  }
            
    //         if (response.Data.resp_code == "CS1002") {
    //            // console.log(response.Data);
    //             console.log(response.Data.data);
    //            // console.log(response.Data.resp_msg);
    //            // console.log(response.Data.resp_code);
    //            // $scope.data = response.Data;
    //             $scope.instituteData = response.Data.data;
    //             console.log($scope.instituteData);
                
    //         }
    //         else {
    //              show_p_notify('error', response.Data.resp_msg);
    //          }
    //      }, function errorCallback(response) {
    //          console.log(response);
    //      })



         $scope.addInstitute = function(valid) {
            if (valid) {
                var payload = {
                    instituteName: $scope.instituteName,
                    instituteAddress: $scope.instituteAddress,
                    stateId: $scope.instituteState,
                    cityId: $scope.instituteCity,
                    contactPerson: $scope.instituteContactName,
                    contactNumber: $scope.instituteContactNumber,
                    //instituteType: $scope.instituteTypeName
                    mobileNumber: $scope.instituteMobileNumber,
                    gstinNumber: $scope.instituteGstinNumber,
                    cinNumber: $scope.instituteCinNumber,
                    emailAddress: $scope.instituteEmailAddress,
                    panNumber: $scope.institutePanNumber,


                }
                console.log("payload = " + JSON.stringify(payload));
                callAjaxService.callAjaxFunction("csa/create/institute", 'POST', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
                    if (response.Data.resp_code == "CS1002") {
                        console.log(response.Data.response_msg);
    
                        $state.go($state.current, {}, { reload: true });
                        show_p_notify('success', response.Data.resp_msg);
                    } else {
                        show_p_notify('error', response.Data.resp_msg);
                    }
                }, function errorCallback(response) {
                    console.log(response);
                })
            }
        }


        $scope.fetchData = function(serviceType,tierLimit,rate,amount ,balanceCredit, processingLimit){
                     
            data.push({
                serviceType:serviceType,
                tierLimit:tierLimit,
                rate: rate,
                amount:amount,
                balanceCredit:balanceCredit,
                processingLimit:processingLimit
            });

             console.log( data);

        }

//for prepaid
        $scope.createPlan = function(valid) {
            if (valid) {
                var payload = {
                    planType: $scope.planType,
                   instituteId: $('#userInstitute').val(),
                   planValidityFrom: $scope.planValidityFrom,
                   planValidityTo: $scope.planValidityTo,
                   csPlanDetails: data
                   

                }
                console.log("payload = " + JSON.stringify(payload));
                callAjaxService.callAjaxFunction("csa/create/plan/cs", 'POST', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
                    if (response.Data.resp_code == "CS1002") {
                        console.log(response.Data.response_msg);
    
                        $state.go($state.current, {}, { reload: true });
                        show_p_notify('success', response.Data.resp_msg);
                    } else {
                        show_p_notify('error', response.Data.resp_msg);
                    }
                }, function errorCallback(response) {
                    console.log(response);
                })
            }
        }

//for prepaid 



$scope.fetchDataPostpaid = function(serviceType,tierLimit,rate,amount ,balanceCredit, processingLimit){
                     
    data.push({
        serviceType:serviceType,
        tierLimit:tierLimit,
        rate: rate,
        amount:amount,
        balanceCredit:balanceCredit,
        processingLimit:processingLimit
    });

     console.log( data);

}
//for postpaid
$scope.createPlanPostpaid = function(valid) {
    if (valid) {
        var payload = {
            planType: $scope.planType,
           instituteId: $('#userInstitute').val(),
           planValidityFrom: $scope.planValidityFrom,
           planValidityTo: $scope.planValidityTo,
           csPlanDetails: data
           

        }
        console.log("payload = " + JSON.stringify(payload));
        callAjaxService.callAjaxFunction("csa/create/plan/cs", 'POST', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
            if (response.Data.resp_code == "CS1002") {
                console.log(response.Data.response_msg);

                $state.go($state.current, {}, { reload: true });
                show_p_notify('success', response.Data.resp_msg);
            } else {
                show_p_notify('error', response.Data.resp_msg);
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }
}

//for prepaid 



$scope.fetchDataLicense = function(serviceType,tierLimit,rate,amount ,balanceCredit, processingLimit){
                     
    data.push({
        serviceType:serviceType,
        tierLimit:tierLimit,
        rate: rate,
        amount:amount,
        balanceCredit:balanceCredit,
        processingLimit:processingLimit
    });

     console.log( data);

}
//for License
$scope.createPlanLicense = function(valid) {
    if (valid) {
        var payload = {
            planType: $scope.planType,
           instituteId: $('#userInstitute').val(),
           planValidityFrom: $scope.planValidityFrom,
           planValidityTo: $scope.planValidityTo,
           csPlanDetails: data
           

        }
        console.log("payload = " + JSON.stringify(payload));
        callAjaxService.callAjaxFunction("csa/create/plan/cs", 'POST', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
            if (response.Data.resp_code == "CS1002") {
                console.log(response.Data.response_msg);

                $state.go($state.current, {}, { reload: true });
                show_p_notify('success', response.Data.resp_msg);
            } else {
                show_p_notify('error', response.Data.resp_msg);
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }
}




        // callAjaxService.callAjaxFunction("csa/get/plans/cs/all/164", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        //     if (response.Data.resp_code == "CS1002") {
        //         console.log(response.Data.data);
        //         $scope.CsData = response.Data.data;
        //     } else {
        //         show_p_notify('error', response.Data.resp_msg);
        //     }
        // }, function errorCallback(response) {
        //     console.log(response);
        // })
    


//   callAjaxService.callAjaxFunction("csa/get/plans/bsa/1", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
//             if (response.Data.resp_code == "CS1002") {
//                 console.log(response.Data.data);
//                 $scope.BsaData = response.Data.data;
//             } else {
//                 show_p_notify('error', response.Data.resp_msg);
//             }
//         }, function errorCallback(response) {
//             console.log(response);
//         })
    



        $scope.createBsa = function(valid) {
            if (valid) {
                var payload = {
                    // planType: $scope.planType,
                    // instituteId: $scope.instituteId,
                    // balanceCarryForward: $scope.balanceCarryForward,
                    // billingCycle: $scope.billingCycle,
                    // planValidityFrom: $scope.planValidityFrom,
                    // planValidityTo: $scope.planValidityTo,
                    // csPlanDetails: $scope.csPlanDetails,
                    // serviceType: $scope.serviceType,
                    // tierLimit: $scope.tierLimit,
                    // rate: $scope.rate,
                    // validTill: $scope.validTill,
                    // amount: $scope.amount,
                    planType: prepaid,
                    planBasis: "merge report basis",
                    planValidityFrom: 27/08/2018,
                    planValidityTo: "30/08/2018",
                    isProrated: Y,
                    balanceCarryForward: Y,
                    instituteId: 163,
                    billingCycle: monthly,

                }
                console.log("payload = " + JSON.stringify(payload));
                callAjaxService.callAjaxFunction("csa/create/plan/bsa", 'POST', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
                    if (response.Data.resp_code == "CS1002") {
                        console.log(response.Data.response_msg);
    
                        $state.go($state.current, {}, { reload: true });
                        show_p_notify('success', response.Data.resp_msg);
                    } else {
                        show_p_notify('error', response.Data.resp_msg);
                    }
                }, function errorCallback(response) {
                    console.log(response);
                })
            }
        }


        // callAjaxService.callAjaxFunction("csa/get/plans/bsa/1", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        //     if (response.Data.resp_code == "CS1002") {
        //         console.log(response.Data.data);
        //         $scope.BsaData = response.Data.data;
        //     } else {
        //         show_p_notify('error', response.Data.resp_msg);
        //     }
        // }, function errorCallback(response) {
        //     console.log(response);
        // })
    
    // callAjaxService.callAjaxFunction("cs/get/userInstituteMapData", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
    //     if (response.Data.resp_code == "CS1002") {
    //         console.log(response.Data.response_msg);
    //         $scope.userInstituteMapData = response.Data.data;
    //     } else {
    //         show_p_notify('error', response.Data.resp_msg);
    //     }
    // }, function errorCallback(response) {
    //     console.log(response);
    // })
    callAjaxService.callAjaxFunction("cs/get/BusinessTypeAdmin", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        if (response.Data.resp_code == "CS1002") {
            console.log(response.Data.data);
            $scope.BusinessTypeAdminData = response.Data.data;
        } else {
            show_p_notify('error', response.Data.resp_msg);
        }
    }, function errorCallback(response) {
        console.log(response);
    })

    $scope.mapUserInstitute = function(valid) {
        console.log(valid);
        if (valid) {
          
            var id = $('#userInstitute').val();
            console.log('id ::: '+id);
            console.log("payload = " + JSON.stringify(payload));
            callAjaxService.callAjaxFunction("csa/get/users/"+id, 'GET', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
                if (response.Data.resp_code == "CS1002") {
                    console.log(response.Data.response_msg);
                    $scope.userManagement = response.Data.data;
                    $scope.aa = "institute";
                   console.log($scope.userManagement);
                    // $state.go($state.current, {}, {reload: true});
                    show_p_notify('success', response.Data.resp_msg);
                } 
                
                else {
                    show_p_notify('error', response.Data.resp_msg);
                }
            }, function errorCallback(response) {
                console.log(response);
            })
        }
    }
// add user starts here
    $scope.addUser = function(valid) {
        if (valid) {

            var id = $('#userInstitute').val();
            console.log('id ::: '+id);
            var payload = {
                instituteId: $('#userInstitute').val(),
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                mobileNumber: $scope.userMobileNumber,
                // role: $scope.userRole,
                "role":"user",
                username: $scope.username,
                emailAddress: $scope.userEmailAddress,
                password: $scope.userPassword,
                "password" : $('#userPassword').val(),

            }
            console.log("payload = " + JSON.stringify(payload));
            callAjaxService.callAjaxFunction("csa/create/user", 'POST', 
            { 'Content-Type': "application/json; charset=utf-8" },
             payload).then(function successCallback(response) {
                if (response.Data.resp_code == "CS1002") {
                    console.log(response.Data.response_msg);
                    $scope.userManagement = response.Data.data;
    
                    $scope.aa = "institute";
                   console.log($scope.userManagement);
                    $state.go($state.current, {}, { reload: true });
                    show_p_notify('success', response.Data.resp_msg);
                } else {
                    show_p_notify('error', response.Data.resp_msg);
                }
            }, function errorCallback(response) {
                console.log(response);
            })
        }
    }
// add user ends here
$scope.modal = function(user) {
    console.log(user);
    angular.element(document.querySelector('#institute')).val(user.instituteName);
    angular.element(document.querySelector('#contactName')).val(user.contactPerson);
    angular.element(document.querySelector('#contactNumber2')).val(user.contactNumber);
    angular.element(document.querySelector('#mobileNumb')).val(user.mobileNumber);
    angular.element(document.querySelector('#EAddress')).val(user.emailAddress);
    angular.element(document.querySelector('#insAddress')).val(user.instituteAddress);

    angular.element(document.querySelector('#panNumb')).val(user.panNumber); 
    angular.element(document.querySelector('#gstNumb')).val(user.gstinNumber);
    angular.element(document.querySelector('#cinNumb')).val(user.cinNumber);




}
//Prepaid View starts here
$scope.viewPrepaidModel = function(valid) {
    if (valid) {
          
        callAjaxService.callAjaxFunction("csa/get/plandetails/cs/29", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
            if (response.Data.resp_code == "CS1002") {
                console.log(response.Data);
                $scope.plandetailsData = response.Data.data;
                console.log($scope.plandetailsData);
                show_p_notify('success', response.Data.resp_msg);
            } 
            
            else {
                show_p_notify('error', response.Data.resp_msg);
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }
}

//Prepaid View ends here





// update manage starts here



$scope.reset = function(){

    callAjaxService.callAjaxFunction("csa/reset/user/password/10", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
        console.log(response.Data);
        if (response.Data.resp_code == "CS1002") {
            console.log(response.Data.response_msg);

            console.log(response.Data.resp_code);
           
            // $state.go($state.current, {}, {reload: true});
            show_p_notify('success', response.Data.resp_msg);
        } 
        
        else {
            show_p_notify('error', response.Data.resp_msg);
        }
    }, function errorCallback(response) {
        console.log(response);
    })
// }
}


$scope.active = function(){

    callAjaxService.callAjaxFunction("csa/update/active/0", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
        console.log(response.Data);
        if (response.Data.resp_code == "CS1002") {
            console.log(response.Data.response_msg);

            console.log(response.Data.resp_code);
           
            // $state.go($state.current, {}, {reload: true});
            show_p_notify('success', response.Data.resp_msg);
        } 
        
        else {
            show_p_notify('error', response.Data.resp_msg);
        }
    }, function errorCallback(response) {
        console.log(response);
    })
// }
}



$scope.updateManage = function(valid) {
    if (valid) {

       
        var payload = {
            instituteName: $scope.instituteName,
            contactNumber: $scope.contactNumber,
            mobileNumber: $scope.mobileNumber,
            emailAddress: $scope.emailAddress,
            contactPerson: $scope.contactPerson,
            instituteAddress: $scope.instituteAddress,
            panNumber: $scope.panNumber,
            gstinNumber: $scope.gstinNumber,
            cinNumber: $scope.cinNumber,
           

        }
        console.log("payload = " + JSON.stringify(payload));
        callAjaxService.callAjaxFunction("csa/update/institute/163", 'POST', 
        { 'Content-Type': "application/json; charset=utf-8" },
         payload).then(function successCallback(response) {
            if (response.Data.resp_code == "CS1002") {
                console.log(response.Data.response_msg);
                $scope.userManagement = response.Data.data;

                $scope.aa = "institute";
               console.log($scope.userManagement);
                $state.go($state.current, {}, { reload: true });
                show_p_notify('success', response.Data.resp_msg);
            } else {
                show_p_notify('error', response.Data.resp_msg);
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }
}
// update manage ends here




    $scope.generatePassword = function() {
      //  console.log(valid);
        // if (valid) {
          
        
            callAjaxService.callAjaxFunction("csa/generate/password", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
                console.log(response.Data);
                console.log(response.Data.password);
                var pass = response.Data.password ;
                $("#userPassword").val(pass);
                if (response.Data.resp_code == "CS1002") {
                    console.log(response.Data.response_msg);

                    console.log(response.Data.resp_code);
                   
                    // $state.go($state.current, {}, {reload: true});
                    show_p_notify('success', response.Data.resp_msg);
                } 
                
                else {
                    show_p_notify('error', response.Data.resp_msg);
                }
            }, function errorCallback(response) {
                console.log(response);
            })
        // }
    }


    $scope.pricingPlaInstitute = function(valid) {
        console.log(valid);
        if (valid) {
            var id =  $('#userInstitute').val();
            console.log('id ::: '+id);
            console.log("payload = " + JSON.stringify(payload));
            callAjaxService.callAjaxFunction("csa/get/plan/cs/all/"+id, 'GET', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
                if (response.Data.resp_code == "CS1002") {
                    console.log(response.Data.response_msg);
                    $scope.prepaidDetailsBase = response.Data.data;
                    console.log($scope.prepaidDetailsBase);
                    // $state.go($state.current, {}, {reload: true});
                    show_p_notify('success', response.Data.resp_msg);
                } else {
                    show_p_notify('error', response.Data.resp_msg);
                }
            }, function errorCallback(response) {
                console.log(response);
            })
        }
    }

    $scope.pricingPlaInstitute = function(valid) {
        console.log(valid);
        if (valid) {
            var id =  $('#userInstitute').val();
            console.log('id ::: '+id);
            console.log("payload = " + JSON.stringify(payload));
            callAjaxService.callAjaxFunction("csa/get/plan/cs/all/"+id, 'GET', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
                if (response.Data.resp_code == "CS1002") {
                    console.log(response.Data.response_msg);
                    $scope.postpaidDetailsBase = response.Data.data;
                    console.log($scope.postpaidDetailsBase);
                    // $state.go($state.current, {}, {reload: true});
                    show_p_notify('success', response.Data.resp_msg);
                } else {
                    show_p_notify('error', response.Data.resp_msg);
                }
            }, function errorCallback(response) {
                console.log(response);
            })
        }
    }
 


    $scope.items = "10";
    $scope.itemsI = "10";
    $scope.itemsB = "10";
    $scope.itemsIn = "10";
    $scope.itemsUi = "10";

    $scope.changeItems = function(items) {
        $scope.itemsPerPage = items;
    }


    $scope.hitUrl = function(url) {
        $window.open(url, '_blank');
    }

    $scope.hitConUrl = function(url) {
        $window.open(url, '_blank');
    }


    // state API
    //state API
    var allStateName = $window.sessionStorage.getItem('stateName');
    allStateName = JSON.parse(allStateName);
    if (allStateName != null) {
        if (allStateName['Data'] != null) {
            if (allStateName['Data'].resp_code == "CS1002") {
                console.log("repeat call = " + allStateName);
                $window.sessionStorage.setItem('stateName', JSON.stringify(allStateName));
                $scope.stateData = allStateName.Data;
                // return allStateName;
            }
        } else {
            var payload = "",
                url = "csa/get/states",
                method = 'GET',
                headers = { 'Content-Type': "application/json; charset=utf-8" };
            return callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
                console.log("1st call = " + response);
                if (response['Data'].resp_code == "CS1002") {
                    $scope.stateData = response.Data;
                    $window.sessionStorage.setItem('stateName', JSON.stringify(response));
                }
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    } else {
        var payload = "",
            url = "csa/get/states",
            method = 'GET',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        return callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            console.log("1st call = " + response);
            if (response['Data'].resp_code == "CS1002") {
                $scope.stateData = response.Data;
                $window.sessionStorage.setItem('stateName', JSON.stringify(response));
            }
        }, function errorCallback(response) {
            console.log(response);
        });
    }



}])