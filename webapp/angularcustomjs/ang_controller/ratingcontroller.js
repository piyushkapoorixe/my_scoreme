/*
 * @author Romal Singla
 */

scoremeapp.controller('ratingController', ['callAjaxService', 'commonServices', '$window', '$scope', '$location', '$rootScope', '$compile', '$state', '$stateParams', '$timeout', '$document', '$interval', '$filter', function(callAjaxService, commonServices, $window, $scope, $location, $rootScope, $compile, $state, $stateParams, $timeout, $document, $interval, $filter) {

    // Register a body reference to enable/disable body scroll
    var bodyRef = angular.element($document[0].body);
    var status = $state.params.status;
    if (status == 'empty') {
        $scope.headerName = "New Score";
    } else if (status == 'draft') {
        $scope.headerName = "Last Saved Draft";
    } else if (status == 'rating') {
        $scope.headerName = "Revised Score";
    }

    //loader starts
    $scope.dataLoading = true;
    // Add our overflow hidden class on loading
    bodyRef.addClass('ovh');

    // ************ when user logout from its current session *************
    if ($window.sessionStorage.getItem('loggedUsername') == null) {
        $state.go('signInState');
    }
    // ************ when user logout from its current session *************
    var status = $state.params.status;
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $scope.facilityDivCount = 1;

    var companyId = $window.sessionStorage.getItem("companyId");
    $scope.completeData = JSON.parse($window.sessionStorage.getItem("companyDataCompleteJson"));
    $scope.draftData = JSON.parse($window.sessionStorage.getItem("draftCompleteJson"));
    $scope.percentageCircleBar = 0;

    // *************** for facility ***********	
    $scope.noOfFacilityDiv = [];
    $scope.noOfFacilityDiv.length = 1;
    $scope.length = 1;
    var countFacilityDiv = 0;
    $scope.addAnotherFacility = function(index) {
        // if ($scope.noOfFacilityDiv.length < 5) {
        $scope.noOfFacilityDiv.push(countFacilityDiv);
        countFacilityDiv = countFacilityDiv + 1;
        console.log(countFacilityDiv);
        //}
    }

    $scope.delFacility = function(i) {
            console.log(i);
            $scope.noOfFacilityDiv.splice(i, 1);
            $scope.count = $scope.count - 1;
        }
        // ************* facility ends ************


    //$state.go('loaderState');
    commonServices.companyParameters(companyId).then(function successCallback(response) {

        if (response.Data.resp_code == "CS1002") {
            //loader starts
            $scope.dataLoading = false;
            // Add our overflow hidden class on loading
            bodyRef.removeClass('ovh');
            if (response.Data.companyData != null && response.Data.companyData != "") {
                $scope.companyData = response.Data.companyData;

                //console.log($scope.companyData);

                $scope.specialFactors = response.Data.companyData[7].param;
                $scope.nonFinancial = response.Data.companyData[4].param;
                $scope.profitAndLoss = response.Data.companyData[3].param;
                $scope.balanceSheet = response.Data.companyData[1].param;
                $scope.facilityScope = response.Data.companyData[5].param;
                $scope.companyInfo = response.Data.companyData[0].param;

                $scope.industryId = response.Data.industryId;
                $scope.account_balance = response.Data.account_balance;
            }
            commonServices.bankName().then(function successCallback(response) { //bank service call
                if (response.Data.resp_code == "CS1002") {
                    //loader starts
                    $scope.dataLoading = false;
                    // Add our overflow hidden class on loading
                    bodyRef.removeClass('ovh');
                    $scope.bankNames = response.Data;

                    /*//
    		        
    		        if($window.sessionStorage.getItem('bankDataStore') == null){
    		   	     commonServices.bankName().then(function successCallback(response) {
    		   		    $scope.bankData = response.Data;
    		   		    $window.sessionStorage.setItem('bankDataStore' ,JSON.stringify(response.Data));
    		   	     });
    		   	}else{
    		   		 $scope.bankData = JSON.parse($window.sessionStorage.getItem('bankDataStore'));
    		   	}
    		   			  	        
    //
*/


                    //	if(status == 'draft' || status == 'rating'){
                    var ratingId = $window.sessionStorage.getItem('ratingId');
                    var url = "";
                    if (status == 'rating') {
                        url = "csn/get/draft/data/rating/" + ratingId;
                    } else if (status == 'draft') {
                        url = "csn/get/draft/data/company/" + companyId;
                    } else if (status == 'empty') {
                        url = "csn/get/autosave/data/" + companyId;
                    }
                    callAjaxService.callAjaxFunction(url, 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {

                            var count = 0;
                            if (response.Data.resp_code == "CS1002") {
                                $window.sessionStorage.removeItem('ratingId');
                                var data = response.Data.data;
                                var parsedData = JSON.parse(data);
                                angular.forEach(parsedData, function(value, key) {
                                    if (key.indexOf('amount') != -1 || key.indexOf('bank') != -1 || key.indexOf('name') != -1 || key.indexOf('percent') != -1) {
                                        var k = "",
                                            c = "";
                                        if (key.indexOf('amount') != -1) {
                                            k = key.substring(0, 6);
                                            c = key.substring(6);
                                        } else if (key.indexOf('bank') != -1 || key.indexOf('name') != -1) {
                                            k = key.substring(0, 4);
                                            c = key.substring(4);
                                        } else if (key.indexOf('percent') != -1) {
                                            k = key.substring(0, 7);
                                            c = key.substring(7);
                                        }
                                        if (c == 1) {
                                            console.log("key = " + key + " value = " + value);
                                            angular.element(document.querySelector('#' + key)).val(value);
                                            console.log('#' + key + '_label');
                                            angular.element(document.querySelector('#' + key + '_label')).css('visibility', 'visible');
                                            console.log(angular.element(document.querySelector('#' + key)).val());
                                        } else if (c > 1) {
                                            //console.log("key = "+key+" c > 1 = "+value)
                                            setTimeout(function() {
                                                if (k == "name") {
                                                    angular.element(document.querySelector('#addFacility')).triggerHandler('click');
                                                    angular.element(document.querySelector('#' + key)).val(value);
                                                    angular.element(document.querySelector('#' + key + '_label')).css('visibility', 'visible');
                                                } else {
                                                    angular.element(document.querySelector('#' + key)).val(value);
                                                    angular.element(document.querySelector('#' + key + '_label')).css('visibility', 'visible');
                                                }
                                            }, 0);

                                        }
                                    } else if (key.indexOf('facility') != -1) {
                                        //console.log("facilityArray = "+value);
                                        angular.forEach(value, function(val, i) {
                                            var j = i + 1;
                                            angular.forEach(val, function(innerVal, innerKey) {
                                                if (i == 0) {
                                                    if (innerKey == "facility") {
                                                        angular.element(document.querySelector('#name' + j)).val(innerVal);
                                                    } else {
                                                        angular.element(document.querySelector('#' + innerKey + j)).val(innerVal);
                                                    }
                                                } else {
                                                    //console.log(innerVal);
                                                    setTimeout(function() {
                                                        if (innerKey == "facility") {
                                                            //alert("inside facility");	    	            	
                                                            angular.element(document.querySelector('#addFacility')).triggerHandler('click');
                                                            angular.element(document.querySelector('#name' + j)).val(innerVal);
                                                        } else {
                                                            angular.element(document.querySelector('#' + innerKey + j)).val(innerVal);
                                                        }
                                                    }, 0)
                                                }
                                            })
                                        })

                                    } else {

                                        if (value != "") {

                                            angular.forEach($scope.companyData, function(val1, k1) {
                                                angular.forEach(val1, function(v1, k1) {
                                                    if (k1 == 'param') {
                                                        angular.forEach(v1, function(v2, k2) {
                                                            //console.log(key+"-------------"+v2.name);
                                                            if (v2.name == key) {
                                                                if (v2.type == 'N') {
                                                                    if (value.match(',')) {
                                                                        value = value.replace(/,/g, "");
                                                                        n1 = value.split('.');
                                                                        n2 = n1[1] || null;
                                                                        n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                                                                        value = n2 ? n1 + '.' + n2 : n1;
                                                                    } else {
                                                                        value = value;
                                                                        n1 = value.split('.');
                                                                        n2 = n1[1] || null;
                                                                        n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                                                                        value = n2 ? n1 + '.' + n2 : n1;
                                                                    }
                                                                } else {
                                                                    value = value;
                                                                }

                                                                angular.element(document.querySelector('#' + key)).val(value);
                                                                angular.element(document.querySelector('#' + key + '_label')).css('visibility', 'visible');
                                                            }
                                                        })
                                                    }
                                                })
                                            })
                                        }
                                    }
                                })

                                var totalCount = 0,
                                    filledCount = 0,
                                    circleBarInitCount = 0;
                                angular.forEach($scope.companyData, function(value, key) {
                                    angular.forEach(value.param, function(v2, k2) {
                                        if (v2['mandat'] == "true") {
                                            totalCount++;
                                            if (angular.element(document.querySelector('#' + v2['name'])).val() != "") {
                                                //circleBarInitCount = circleBarInitCount+count;
                                                filledCount++;
                                            }
                                        }
                                    })
                                })

                                circleBarInitCount = 1 / totalCount;
                                $scope.percentageCircleBar = parseInt((filledCount * circleBarInitCount) * 100);
                                console.log(filledCount * circleBarInitCount);
                                $('#circle_scoredash').circleProgress({
                                    value: filledCount * circleBarInitCount,
                                    size: 70,
                                    fill: {
                                        gradient: ["#0057ff", "#00ceed"]
                                    }
                                });
                                //console.log(count);
                            }
                        })
                        // }

                    // drafted API ends  	
                }
            });
            // bank API ends	   
        }
        // company parameter API ends			
    }, function errorCallback(response) {
        //console.log(response);
    })


    callAjaxService.callAjaxFunction("csn/get/company/" + companyId, 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        if (response.Data.resp_code == "CS1002") {
            var data = response.Data.data;
            $scope.companyName = data.companyName;
            $scope.industryName = data.industryName;
            $scope.companyId = data.companyId;
            $scope.compId = data.id;
            $scope.groupName = data.groupName;

            var payload = {
                industrygroupId: data.industrygroupId,
                industryId: data.industryId,
                companyName: data.companyName
            }
            callAjaxService.callAjaxFunction("csn/get/entityByBusinessType/user", 'POST', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
                if (response.Data.resp_code == "CS1002") {
                    $scope.filterCompanyNames = response.Data.data;
                    $scope.filterCompanyNamesData = $window.sessionStorage.getItem('companyName');
                }
            })
        }
    }, function errorCallback(response) {
        //	console.log(response);
    })

    $scope.changeLocalCompanyDropDown = function(companyN1, companyN2) {
        $scope.dataLoading = true;
        $scope.filterCompanyNamesData = companyN2;
        $('.filter_dropdown_list_small').toggleClass('closeDropdown openDropdown');
        var c1 = companyN1,
            c2 = companyN2,
            url = "csn/get/draft/data/company/" + c1;
        callAjaxService.callAjaxFunction(url, 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
            //console.log(response);	
            //$state.go('scoreDashboardState');
            var count = 0;
            if (response.Data.resp_code == "CS1002") {
                $scope.dataLoading = false;
                $window.sessionStorage.removeItem('ratingId');
                var data = response.Data.data;
                var parsedData = JSON.parse(data);
                angular.forEach(parsedData, function(value, key) {
                    //console.log(parsedData);
                    if (key.indexOf('amount') != -1 || key.indexOf('bank') != -1 || key.indexOf('name') != -1 || key.indexOf('percent') != -1) {
                        var k = "",
                            c = "";
                        if (key.indexOf('amount') != -1) {
                            k = key.substring(0, 6);
                            c = key.substring(6);
                        } else if (key.indexOf('bank') != -1 || key.indexOf('name') != -1) {
                            k = key.substring(0, 4);
                            c = key.substring(4);
                        } else if (key.indexOf('percent') != -1) {
                            k = key.substring(0, 7);
                            c = key.substring(7);
                        }
                        if (c == 1) {
                            angular.element(document.querySelector('#' + key)).val(value);
                        } else if (c > 1) {
                            setTimeout(function() {
                                if (k == "name") {
                                    angular.element(document.querySelector('#addFacility')).triggerHandler('click');
                                    angular.element(document.querySelector('#' + key)).val(value);
                                } else {
                                    angular.element(document.querySelector('#' + key)).val(value);
                                }
                            }, 0);

                        }
                    } else if (key.indexOf('facility') != -1) {
                        angular.forEach(value, function(val, i) {
                            var j = i + 1;
                            angular.forEach(val, function(innerVal, innerKey) {
                                if (i == 0) {
                                    if (innerKey == "facility") {
                                        angular.element(document.querySelector('#name' + j)).val(innerVal);
                                    } else {
                                        angular.element(document.querySelector('#' + innerKey + j)).val(innerVal);
                                    }
                                } else {
                                    setTimeout(function() {
                                        if (innerKey == "facility") {
                                            angular.element(document.querySelector('#addFacility')).triggerHandler('click');
                                            angular.element(document.querySelector('#name' + j)).val(innerVal);
                                        } else {
                                            angular.element(document.querySelector('#' + innerKey + j)).val(innerVal);
                                        }
                                    }, 0)
                                }
                            })
                        })

                    } else {
                        angular.element(document.querySelector('#' + key)).val(value);
                    }
                })

                var totalCount = 0,
                    filledCount = 0,
                    circleBarInitCount = 0;
                angular.forEach($scope.companyData, function(value, key) {
                    angular.forEach(value.param, function(v2, k2) {
                        if (v2['mandat'] == "true") {
                            totalCount++;
                            if (angular.element(document.querySelector('#' + v2['name'])).val() != "") {
                                filledCount++;
                            }
                        }
                    })
                })

                circleBarInitCount = 1 / totalCount;
                $scope.percentageCircleBar = parseInt((filledCount * circleBarInitCount) * 100);
                // console.log(filledCount*circleBarInitCount);
                $('#circle_scoredash').circleProgress({
                    value: filledCount * circleBarInitCount,
                    size: 70,
                    fill: {
                        gradient: ["#0057ff", "#00ceed"]
                    }
                });
                //console.log(count);
            }
        })

    }


    $scope.mySearchLocalFunction = function(data) {
        var currentVal = data.toLowerCase();
        $scope.outerLi = angular.element(document.getElementsByClassName('localCompanyLi'));
        var liCountLarge = $scope.outerLi.length;

        if (currentVal.length >= 1) {
            $scope.outerLi.removeClass('showLi');
            $scope.outerLi.addClass('hideLi');

            for (var i = 0; i < liCountLarge; i++) {
                console.log(liCountLarge);
                var orgNameOuter = $scope.outerLi.eq(i).text().toLowerCase();
                console.log("Outer = " + orgNameOuter);

                if (orgNameOuter.match(currentVal)) {
                    console.log("*****************")
                    $scope.outerLi.eq(i).removeClass('hideLi');
                    $scope.outerLi.eq(i).addClass('showLi');
                    $scope.innerLi.removeClass('hideLi');
                    $scope.innerLi.addClass('showLi');
                }
            }
        } else {
            $scope.outerLi.removeClass('hideLi');
            $scope.outerLi.addClass('showLi');
        }
    }




    $scope.saveDraft = function(status, isAutoSave) {
        var name1 = "",
            value1 = "",
            name2 = "",
            value2 = "";
        var completeJson = {},
            jsonData1 = {},
            jsonInnerData = {};

        // ********for print page*********
        var companyDataArray = $scope.companyData
        angular.forEach(companyDataArray, function(value, key) {
                name = value.group;
                jsonData1 = {};
                angular.forEach(value.param, function(v2, k2) {
                    jsonInnerData = {};
                    if (v2['name'].indexOf('input-G') != -1 && value.group != 'SCOPE') {
                        if (angular.element(document.querySelector('#' + v2['name'])).val() != undefined) {
                            name1 = "name";
                            value1 = angular.element(document.querySelector('#' + v2['name'])).val();
                            name2 = "label";
                            value2 = v2['label'];
                            jsonInnerData[name1] = value1;
                            jsonInnerData[name2] = value2;
                            jsonData1[k2] = jsonInnerData;
                            completeJson[name] = jsonData1;
                        }
                    }
                })
            })
            // ********for print page*********

        $window.sessionStorage.setItem("draftCompleteJson", JSON.stringify(completeJson));
        var jsonData = {},
            name = "",
            value = "";
        jsonData['companyId'] = $scope.compId;
        angular.forEach($scope.companyData, function(value, key) {
            angular.forEach(value, function(v1, k1) {
                if (k1 == 'param') {
                    angular.forEach(v1, function(v2, k2) {

                        if (angular.element(document.querySelector('#' + v2.name)).val() != undefined) {
                            name = v2.name;
                            value = angular.element(document.querySelector('#' + v2.name)).val();


                            if (v2.type == 'N') {
                                if (value.match(',')) {
                                    value = value.replace(/,/g, '');
                                } else {
                                    value = value;
                                }
                            } else {
                                value = value;
                            }
                            jsonData[name] = value;
                        }
                    })
                }
            })
        })

        for (var i = 1; i <= $scope.facilityDivCount; i++) {
            var name = angular.element(document.querySelector('#name' + i)).val(),
                amount = angular.element(document.querySelector('#amount' + i)).val(),
                percent = angular.element(document.querySelector('#percent' + i)).val(),
                bank = angular.element(document.querySelector('#bank' + i)).val();
            console.log(name + "-" + amount + "-" + bank + "-" + percent);

            if (name != "" && amount != "" && percent != "" && bank != "") {
                jsonData['name' + i] = name;
                jsonData['amount' + i] = amount;
                jsonData['percent' + i] = percent;
                jsonData['bank' + i] = bank;
            }
        }

        console.log(jsonData);
        jsonData['isAutoSave'] = isAutoSave;
        // console.log(jsonData);

        var payload = jsonData,
            url = "cs/save/draft",
            method = 'POST',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            if (response.Data.resp_code == "CS1002") {
                if (status === 'draft') {
                    $state.go("draftConfirmDashboardState");
                }
                //$timeout( function(){	
                show_p_notify('success', response.Data.resp_msg);
                //}, 2000);
            } else {
                show_p_notify('error', response.Data.resp_msg);
            }
        }, function errorCallback(response) {
            //console.log(response);
        })
    }


    $scope.getConfirmPage = function() {
        var jsonData = {},
            name = "",
            value = "",
            name1 = "",
            value1 = "",
            name2 = "",
            value2 = "";
        var completeJson = {},
            jsonData1 = {},
            jsonInnerData = {};

        var facility = "",
            amount = "",
            percent = "",
            bankName = "",
            g126_term_loan_amount = 0,
            g127_term_loan_roi = 0,
            g128_term_loan_bank = "",
            g130_wc_fund_amount = 0,
            g131_wc_fund_roi = 0,
            g132_wc_fund_bank = "",
            g133_wc_lc_roi = 0,
            g134_wc_lc_amount = 0,
            g136_wc_lc_bank = "",
            g135_wc_bg_amount = 0,
            g137_wc_bg_bank = "",
            g138_wc_bg_roi = 0;

        var facilityObject = {},
            facilityArray = [];

        // console.log($scope.facilityDivCount)
        for (var i = 1; i <= $scope.facilityDivCount; i++) {

            g126_term_loan_amount = isNaN(parseFloat(angular.element(document.querySelector('#input-G126')).val())) ? 0 : parseFloat(angular.element(document.querySelector('#input-G126')).val());
            g127_term_loan_roi = isNaN(parseInt(angular.element(document.querySelector('#input-G127')).val())) ? 0 : parseInt(angular.element(document.querySelector("#input-G127")).val());
            g128_term_loan_bank = angular.element(document.querySelector('#input-G128')).val();

            g130_wc_fund_amount = isNaN(parseInt(angular.element(document.querySelector('#input-G130')).val())) ? 0 : parseInt(angular.element(document.querySelector("#input-G130")).val());
            g131_wc_fund_roi = isNaN(parseInt(angular.element(document.querySelector('#input-G131')).val())) ? 0 : parseFloat(angular.element(document.querySelector("#input-G131")).val());
            g132_wc_fund_bank = angular.element(document.querySelector('#input-G132')).val();

            g133_wc_lc_roi = isNaN(parseInt(angular.element(document.querySelector('#input-G133')).val())) ? 0 : parseInt(angular.element(document.querySelector('#input-G133')).val());
            g134_wc_lc_amount = isNaN(parseFloat(angular.element(document.querySelector('#input-G134')).val())) ? 0 : parseFloat(angular.element(document.querySelector('#input-G134')).val());
            g136_wc_lc_bank = angular.element(document.querySelector('#input-G136')).val();

            g135_wc_bg_amount = isNaN(parseFloat(angular.element(document.querySelector('#input-G135')).val())) ? 0 : parseFloat(angular.element(document.querySelector('#input-G135')).val());
            g138_wc_bg_roi = isNaN(parseInt(angular.element(document.querySelector('#input-G138')).val())) ? 0 : parseInt(angular.element(document.querySelector('#input-G138')).val());
            g137_wc_bg_bank = angular.element(document.querySelector('#input-G137')).val();

            // console.log(g126_term_loan_amount+"-"+g127_term_loan_roi+"-"+g128_term_loan_bank+"-"+g130_wc_fund_amount+"-"
            // +g131_wc_fund_roi+"-"+g132_wc_fund_bank+"-"+g133_wc_lc_roi+"-"+g133_wc_lc_roi+"-"+g134_wc_lc_amount);

            facilityObject = {};
            facilityObject['facility'] = angular.element(document.querySelector('#name' + i)).val();
            facilityObject['amount'] = angular.element(document.querySelector('#amount' + i)).val();
            facilityObject['percent'] = angular.element(document.querySelector('#percent' + i)).val();
            facilityObject['bank'] = angular.element(document.querySelector('#bank' + i)).val();

            console.log(facilityObject);
            console.log("*******************************" + facilityObject['facility']);


            if (facilityObject['facility'].trim() != "" && facilityObject['amount'].trim() != "" &&
                facilityObject['percent'].trim() != "" && facilityObject['bank'].trim() != "") {
                // console.log(facility+"-"+amount+"-"+percent+"-"+bankName);
                if (facilityObject['facility'].trim() == 'Term Loan' || facilityObject['facility'].trim() == 'Auto Loan' || facilityObject['facility'].trim() == 'Housing Loan' || facilityObject['facility'].trim() == 'Personal Loan' || facilityObject['facility'].trim() == 'Equipment Finance') {
                    // console.log(facility+"-"+amount+"-"+percent+"-"+bankName);
                    if (i == 1) {
                        g126_term_loan_amount = parseInt(facilityObject['amount']);
                        g127_term_loan_roi = parseFloat(facilityObject['percent']);
                        g128_term_loan_bank = facilityObject['bank'];
                        // console.log(g126_term_loan_amount+"-"+ g127_term_loan_roi+"-"+g128_term_loan_bank);
                    } else {
                        g126_term_loan_amount += parseFloat(facilityObject['amount']);
                        if (g127_term_loan_roi < parseInt(facilityObject['percent'])) {
                            g127_term_loan_roi = parseInt(facilityObject['percent']);
                        }
                        g128_term_loan_bank = facilityObject['bank'] + "," + g128_term_loan_bank;
                        // console.log(g126_term_loan_amount+"-"+ g127_term_loan_roi+"-"+g128_term_loan_bank);
                    }

                } else if (facilityObject['facility'].trim() == 'WC Fund Based') {
                    //console.log(facility+"-"+amount+"-"+percent+"-"+bankName);
                    if (g132_wc_fund_bank == "") {
                        g130_wc_fund_amount = parseFloat(facilityObject['amount']);
                        g131_wc_fund_roi = parseInt(facilityObject['percent']);
                        g132_wc_fund_bank = facilityObject['bank'];
                        //console.log(g130_wc_fund_amount+"-"+ g131_wc_fund_roi+"-"+g132_wc_fund_bank);
                    } else {
                        g130_wc_fund_amount += parseFloat(facilityObject['amount']);
                        if (g131_wc_fund_roi < parseInt(facilityObject['percent'])) {
                            g131_wc_fund_roi = parseInt(facilityObject['percent']);
                        }
                        g132_wc_fund_bank = facilityObject['bank'] + "," + g132_wc_fund_bank;
                        //console.log(g130_term_loan_amount+"-"+ g131_term_loan_roi+"-"+g132_term_loan_bank);
                    }
                } else if (facilityObject['facility'].trim() == 'Letter of Credit') {
                    if (g136_wc_lc_bank == "") {
                        g134_wc_lc_amount = parseFloat(facilityObject['amount']);
                        g133_wc_lc_roi = parseInt(facilityObject['percent']);
                        g136_wc_lc_bank = facilityObject['bank'];
                        //console.log(g130_term_loan_amount+"-"+ g131_term_loan_roi+"-"+g132_term_loan_bank);
                    } else {
                        g134_wc_lc_amount += parseFloat(facilityObject['amount']);
                        if (g133_wc_lc_roi < parseInt(facilityObject['percent'])) {
                            g133_wc_lc_roi = parseInt(facilityObject['percent']);
                        }
                        g136_wc_lc_bank = facilityObject['bank'] + "," + g136_wc_lc_bank;
                        // console.log(g134_wc_lc_amount+"-"+ g133_wc_lc_roi+"-"+g136_wc_lc_bank);
                    }

                } else if (facilityObject['facility'].trim() == 'Bank Guarantee') {
                    if (g137_wc_bg_bank == "") {
                        g135_wc_bg_amount = parseFloat(facilityObject['amount']);
                        g138_wc_bg_roi = parseInt(facilityObject['percent']);
                        g137_wc_bg_bank = facilityObject['bank'];
                        // console.log(g130_term_loan_amount+"-"+ g131_term_loan_roi+"-"+g132_term_loan_bank);
                    } else {
                        g135_wc_bg_amount += parseFloat(facilityObject['amount']);
                        if (g138_wc_bg_roi < parseInt(facilityObject['percent'])) {
                            g138_wc_bg_roi = parseInt(facilityObject['percent']);
                        }
                        g137_wc_bg_bank = facilityObject['bank'] + "," + g137_wc_bg_bank;
                        //console.log(g135_wc_bg_amount+"-"+ g138_wc_bg_roi+"-"+g137_wc_bg_bank);
                    }
                }

                //console.log(g126_term_loan_amount+"-"+g127_term_loan_roi+"-"+g128_term_loan_bank);
                facilityArray.push(facilityObject);

                angular.element(document.querySelector('#input-G126')).val(g126_term_loan_amount);
                angular.element(document.querySelector('#input-G127')).val(g127_term_loan_roi);
                angular.element(document.querySelector('#input-G128')).val(g128_term_loan_bank);

                angular.element(document.querySelector('#input-G130')).val(g130_wc_fund_amount);
                angular.element(document.querySelector('#input-G131')).val(g131_wc_fund_roi);
                angular.element(document.querySelector('#input-G132')).val(g132_wc_fund_bank);

                angular.element(document.querySelector('#input-G133')).val(g133_wc_lc_roi);
                angular.element(document.querySelector('#input-G134')).val(g134_wc_lc_amount);
                angular.element(document.querySelector('#input-G136')).val(g136_wc_lc_bank);

                angular.element(document.querySelector('#input-G135')).val(g135_wc_bg_amount);
                angular.element(document.querySelector('#input-G138')).val(g138_wc_bg_roi);
                angular.element(document.querySelector('#input-G137')).val(g137_wc_bg_bank);
            }
        }

        //console.log(facilityArray);
        jsonData['facility'] = facilityArray;

        jsonData['industryId'] = angular.element(document.querySelector('#industryId')).val();
        jsonData['input-G186'] = angular.element(document.querySelector('#input-G186')).val();

        angular.forEach($scope.companyData, function(value, key) {
            angular.forEach(value, function(v1, k1) {
                if (k1 == 'param') {
                    angular.forEach(v1, function(v2, k2) {
                        // angular.forEach(v2 , function(v3 , k3){	
                        //if(k3 == 'name'){	
                        if (angular.element(document.querySelector('#' + v2.name)).val() != undefined) {
                            name = v2.name;
                            value = angular.element(document.querySelector('#' + v2.name)).val();


                            if (v2.type == 'N') {
                                if (value.match(',')) {
                                    value = value.replace(/,/g, '');
                                } else {
                                    value = value;
                                }
                            } else {
                                value = value;
                            }

                            jsonData[name] = value;
                        }
                        //}
                        // })
                    })
                }
            })
        })

        //console.log(jsonData);
        // for function key and industry key in request key of company parameter


        var companyDataArray = $scope.companyData
        angular.forEach(companyDataArray, function(value, key) {
            name = value.group;
            jsonData1 = {};
            angular.forEach(value.param, function(v2, k2) {
                jsonInnerData = {};
                if (v2['name'].indexOf('input-G') != -1 && value.group != 'SCOPE') {
                    if (angular.element(document.querySelector('#' + v2['name'])).val() != undefined) {
                        if (angular.element(document.querySelector('#' + v2['name'])).val() != "") {
                            name1 = "name";
                            value1 = angular.element(document.querySelector('#' + v2['name'])).val();
                        } else {
                            name1 = "name";
                            value1 = '-';
                        }

                        //remove coma from amount		
                        //if (value1 != "" && value1 != undefined && value1 != null) {
                        /*if (value1.match(',')) {
                        	value1 = value1.replace(/,/g, '');
                        }else{
                        	value1= value1;
                        }*/
                        //	}


                        name2 = "label";
                        value2 = v2['label'];
                        jsonInnerData[name1] = value1;
                        jsonInnerData[name2] = value2;
                        jsonData1[k2] = jsonInnerData;
                        completeJson[name] = jsonData1;
                    }
                }
            })
        })
        console.log(jsonData);

        $window.sessionStorage.setItem("companyDataJson", JSON.stringify(jsonData));
        $window.sessionStorage.setItem("companyDataCompleteJson", JSON.stringify(completeJson));
        $state.go('scoreConfirmDashboardState');
    }



    $scope.calculateRating = function() {
        var companyData = $window.sessionStorage.getItem("companyDataJson");
        var parseData = JSON.parse(companyData);
        $state.go('scoreAnalysisDashboardState');
        var payload = parseData,
            url = "cs/calculate/rating",
            method = 'POST',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            if (response.Data.resp_code == "CS1002") {
                var score = response.Data.score;
                var grade = response.Data.grade;
                var report = response.Data.REPORT;
                console.log(response.Data.MSG_LTL);
                $window.sessionStorage.setItem('rating_score', score);
                $window.sessionStorage.setItem('rating_grade', grade);
                $window.sessionStorage.setItem('rating_MSG_LTL', response.Data.MSG_LTL);
                $window.sessionStorage.setItem('rating_MSG_OD', response.Data.MSG_OD);
                $window.sessionStorage.setItem('rating_MSG_LC', response.Data.MSG_LC);
                $window.sessionStorage.setItem('rating_MSG_BG', response.Data.MSG_BG);
                $window.sessionStorage.setItem('rating_MSG_ROI_LTL', response.Data.MSG_ROI_LTL);
                $window.sessionStorage.setItem('rating_MSG_ROI_WC', response.Data.MSG_ROI_WC);
                $window.sessionStorage.setItem('rating_REPORT', report);
                $state.go('scoreResultDashboardState');
                console.log(response);
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }

    $scope.printDiv = function(divName, status) {
        //alert(divName);

        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;

        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            var popupWin = window.open('', '_blank', 'width=600,height=600,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
            popupWin.window.focus();
            popupWin.document.write('<!DOCTYPE html><html><head>' +
                '<link rel="stylesheet" type="text/css" href="style.css" />' +
                '</head><body onload="window.print()"><div class="reward-body">' + printContents + '</div></html>');
            popupWin.onbeforeunload = function(event) {
                popupWin.close();
                return '.\n';
            };
            popupWin.onabort = function(event) {
                popupWin.document.close();
                popupWin.close();
            }
        } else {
            var popupWin = window.open('', '_blank', 'width=800,height=600');
            popupWin.document.open();
            popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</html>');
            popupWin.document.close();
        }
        popupWin.document.close();

        //
        if (status === 'draft') {
            setTimeout(function() {
                angular.element(document.querySelector('#backBtn')).triggerHandler('click');
            }, 0);
        }
        return true;
    }



    /*$scope.inputValidation = function(name , label){
    	console.log(name);
    	console.log(label);
    	 if(angular.element(document.querySelector('#'+name)).val() != ""){
            angular.element(document.querySelector('#'+name+'_span')).html("");	
    	 }else{
    		 angular.element(document.querySelector('#'+name+'_span')).html("Please Enter Valid Data ");	
    	 }
    }*/

    $scope.keyupValidation = function(name, label, mandat) {

        if (mandat == "true") {
            console.log(mandat);
            console.log(angular.element(document.querySelector('#' + name)).val());
            if (angular.element(document.querySelector('#' + name)).val() != "") {
                console.log("************ clear html ****************");
                angular.element(document.querySelector('#' + name + '_span')).html("");
            } else if (angular.element(document.querySelector('#' + name)).val() == "") {
                // console.log("************ html ****************");
                //console.log('#'+name+'_span');
                angular.element(document.querySelector('#' + name + '_span')).html("Please Enter Valid Data ");
                //console.log(angular.element(document.querySelector('#'+name+'_span')).html());
            }
        } else {
            //console.log("else = "+'#'+name+'_span');
            angular.element(document.querySelector('#' + name + '_span')).html("");
        }

        var x = [];
        angular.forEach($scope.companyData, function(value, key) {
            var fillCount = 0,
                emptyCount = 0,
                paramLength = 0;
            angular.forEach(value.param, function(v2, k2) {
                var paramRows = $filter('filter')(value.param, v2['mandat'] == "true");
                if (v2['mandat'] == "true") {
                    if (angular.element(document.querySelector('#' + v2['name'])).val() != "") {
                        if (x.indexOf(v2['name']) == -1) {
                            x.push(v2['name']);
                            fillCount++;
                        }
                    } else {
                        if (x.indexOf(v2['name']) != -1) {
                            var i = array.indexOf(v2['name']);
                            x.splice(i, 1);
                            fillCount--;
                            //totalFillCount--;  
                        }
                    }
                }
                if (paramRows.length == fillCount && (fillCount > 0 && paramRows.length > 0)) {
                    angular.element(document.querySelector('#companyLabelId' + key)).css("visibility", "hidden");
                } else if (paramRows.length != fillCount && (fillCount > 0 && paramRows.length > 0)) {
                    angular.element(document.querySelector('#companyLabelId' + key)).css("visibility", "visible");
                }
            })
        })
    }

    $scope.getProgress = function() {
        var totalCount = 0,
            filledCount = 0,
            circleBarInitCount = 0;
        angular.forEach($scope.companyData, function(value, key) {
            angular.forEach(value.param, function(v2, k2) {
                if (v2['mandat'] == "true") {
                    totalCount++;
                    if (angular.element(document.querySelector('#' + v2['name'])).val() != "") {
                        //circleBarInitCount = circleBarInitCount+0.0257;   			  
                        filledCount++;
                    }
                }
            })
        })
        circleBarInitCount = 1 / totalCount;
        $scope.percentageCircleBar = parseInt((filledCount * circleBarInitCount) * 100);

        // *************automatic save the filled data ************* 
        if (($scope.percentageCircleBar % 15) % 2 == 0) {
            //console.log("*************************"+$scope.percentageCircleBar);	
            $scope.saveDraft('empty', 1);
        }
        // *************automatic save the filled data ************* 

        console.log((filledCount * circleBarInitCount) * 100);
        $('#circle_scoredash').circleProgress({
            value: filledCount * circleBarInitCount,
            size: 70,
            fill: {
                gradient: ["#0057ff", "#00ceed"]
            }
        });
    }


    $scope.customValidation = function() {
        var breakLoop = false,
            count = 0,
            totalCount = 0,
            filledCount = 0,
            circleBarInitCount = 0,
            totalParamRows = 0,
            totalFillCount = 0;
        var x = [],
            y = [],
            fillCount = 0,
            emptyCount = 0,
            paramRows = "";
        angular.forEach($scope.companyData, function(value, key) {
            fillCount = 0, emptyCount = 0, paramRows = "";
            angular.forEach(value.param, function(v2, k2) {
                paramRows = $filter('filter')(value.param, v2['mandat'] == "true");
                if (v2['mandat'] == "true") {
                    if (y.indexOf(key) == -1) {
                        y.push(key);
                        totalParamRows += paramRows.length;
                    }
                    totalCount++;
                    if (angular.element(document.querySelector('#' + v2['name'])).val() != "") {
                        filledCount++;
                        angular.element(document.querySelector('#companyLabelId' + key)).css("visibility", "hidden");
                        angular.element(document.querySelector('#' + v2['name'] + '_span')).html("");
                        if (x.indexOf(v2['name']) == -1) {
                            x.push(v2['name']);
                            fillCount++;
                            totalFillCount++;
                        }
                    } else if (angular.element(document.querySelector('#' + v2['name'])).val() == "") {

                        if (x.indexOf(v2['name']) != -1) {
                            console.log(x);
                            console.log("name is already present in array = " + v2['name']);
                            var i = array.indexOf(v2['name']);
                            x.splice(i, 1);
                            fillCount--;
                            totalFillCount--;
                        }
                        emptyCount++;
                        angular.element(document.querySelector('#companyLabelId' + key)).css("visibility", "visible");
                        if (v2['type'] == 'S') {
                            angular.element(document.querySelector('#' + v2['name'] + '_span')).html("Please select ");
                        } else if (v2['type'] == 'N') {
                            angular.element(document.querySelector('#' + v2['name'] + '_span')).html("Please Enter Valid Data ");
                        }
                    }

                    if (paramRows.length == fillCount && (fillCount > 0 && paramRows.length > 0)) {
                        console.log(key + "= param rows = " + paramRows.length + " fill count =" + fillCount);
                        console.log("key equal ********************* " + key);
                        angular.element(document.querySelector('#companyLabelId' + key)).css("visibility", "hidden");
                    } else {
                        angular.element(document.querySelector('#companyLabelId' + key)).css("visibility", "visible");
                    }


                } else {
                    angular.element(document.querySelector('#' + v2['name'] + '_span')).html("");
                }
            })
        })

        console.log("total param rows = " + totalParamRows + " total Fill count =" + totalFillCount);

        if (angular.element(document.querySelector('#input-G186')).val() == "") {
            angular.element(document.querySelector('#input-G186_span')).html("Please Select Financial Year");
        } else {
            angular.element(document.querySelector('#input-G186_span')).html("");
        }

        if (totalParamRows == totalFillCount && (totalParamRows > 0 && totalFillCount > 0)) {
            if (angular.element(document.querySelector('#input-G186')).val() == "") {
                angular.element(document.querySelector('#input-G186_span')).html("Please Select Financial Year");
            } else {
                angular.element(document.querySelector('#input-G186_span')).html("");
                console.log("total param rows = " + totalParamRows + " total Fill count =" + totalFillCount);
                $scope.saveDraft("confirm", 0); // save draft
                $scope.getConfirmPage(); // submit the data
                return false;
            }
        }

        circleBarInitCount = 1 / totalCount;
        $scope.percentageCircleBar = parseInt((filledCount * circleBarInitCount) * 100);
        $('#circle_scoredash').circleProgress({
            value: filledCount * circleBarInitCount,
            size: 70,
            fill: {
                gradient: ["#0057ff", "#00ceed"]
            }
        });

    }


    $scope.downloadExcel = function() {
        var payload = "",
            url = "csn/download/template/xls",
            method = 'GET',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            if (response.Data.resp_code == "CS1002") {

            }
        });
    }



    $scope.addBits = function(s) {
        console.log("++++++++++++++++++++++++++++++++++++++++++" + s);
        return (s.replace(/\s/g, '').match(/[+\-]?([0-9\.]+)/g) || [])
            .reduce(function(sum, value) {
                return parseFloat(sum) + parseFloat(value);
            });
    }

    var globalCalculateValue;
    var globalId;
    $scope.calculator = function(e, data, id, eventTrigger) {
        ///console.log(e);
        var keycode = e.keyCode || e.which;
        var calculatedValue = 0,
            sum = 0;

        //console.log(keycode);
        //console.log("--------------------------"+data);
        //var inputData = angular.element(document.querySelector('#'+id)).val();
        //console.log(inputData);
        if (data != undefined) {
            globalId = id;
            globalCalculateValue = data;
        }
        if (keycode == 13) {
            if (data != undefined) {
                if ((data.substring(1).indexOf("+") != -1 || data.substring(1).indexOf("-") != -1 || data.substring(0, 1).indexOf("(") != -1 || data.substring(0, 1).indexOf(")") != -1)) {
                    var currentInpVal = data;
                    var val = $scope.addBits(currentInpVal);
                    //console.log("calculator value = "+val);		
                    val = val.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                    angular.element(document.querySelector('#' + id)).val(val);
                }
            }
        } else
        if (globalCalculateValue != undefined) {
            if ((keycode == 9 || eventTrigger == 'blur') && (globalCalculateValue.indexOf("+") != -1 || globalCalculateValue.indexOf("-") != -1 || globalCalculateValue.indexOf("(") != -1 || globalCalculateValue.indexOf(")") != -1)) {
                if ((globalCalculateValue.substring(1).indexOf("+") != -1 || globalCalculateValue.substring(1).indexOf("-") != -1 || globalCalculateValue.substring(0, 1).indexOf("(") != -1 || globalCalculateValue.substring(0, 1).indexOf(")") != -1)) {
                    var val = $scope.addBits(globalCalculateValue);
                    val = val.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                    angular.element(document.querySelector('#' + globalId)).val(val);
                }

            }
        }
    }


    // *********************** excel upload in facility tab ************************
    angular.element(document.querySelector('#uploadExcel_span')).html("");
    $scope.uploadExcel = function() {
        angular.element(document.querySelector('#name1')).val("");
        angular.element(document.querySelector('#percent1')).val("");
        angular.element(document.querySelector('#bank1')).val("");
        angular.element(document.querySelector('#amount1')).val("");
        angular.element(document.querySelector('#facilityDiv')).html("");
        //  console.log(changeEvent)
        // $scope.count = $attrs["importSheetJs"];
        //  console.log("************************************"+$scope.count);
        $scope.facilityDivCount = 1;
        var reader = new FileReader();
        console.log(reader);
        reader.onload = function(e) {
            console.log(e);
            //read workbook 
            var bstr = e.target.result;
            var workbook = XLSX.read(bstr, { type: 'binary' });
            console.log(workbook);
            var sheetId = workbook['SheetNames'][0];
            var sheet = workbook['Sheets'][sheetId];
            var romal = XLSX.utils.sheet_to_json(sheet, {
                header: 1
            });
            console.log(romal);
            var jsonObject = {};
            var c = 1;

            //  console.log("empty data = "+romal[4].length);
            if (romal[1][0] == 'Facility Type' && romal[1][1] == 'Amount' && romal[1][2] == 'Rate of Interest' && romal[1][3] == 'Bank') {
                for (var i = (c); i < (romal.length + c - 2); i++) {
                    if (romal[i - c + 2].length > 0) {
                        jsonObject["name" + i] = romal[i - c + 2][0];
                        jsonObject["amount" + i] = romal[i - c + 2][1];
                        jsonObject["percent" + i] = romal[i - c + 2][2];
                        jsonObject["bank" + i] = romal[i - c + 2][3];
                    }
                }
                angular.element(document.querySelector('#uploadExcel_span')).html("");
            } else {
                console.log("incorrect excel");
                angular.element(document.querySelector('#uploadExcel_span')).html("Please select correct excel for upload");
            }
            console.log(jsonObject);
            angular.forEach(jsonObject, function(value, key) {
                var k = "",
                    cc = "";
                if (key.indexOf('amount') != -1) {
                    k = key.substring(0, 6);
                    cc = key.substring(6);
                } else if (key.indexOf('bank') != -1 || key.indexOf('name') != -1) {
                    k = key.substring(0, 4);
                    cc = key.substring(4);
                } else if (key.indexOf('percent') != -1) {
                    k = key.substring(0, 7);
                    cc = key.substring(7);
                }
                if (cc == 1) {
                    console.log("key = " + key + " value = " + value);
                    angular.element(document.querySelector('#' + key)).val(value);
                    console.log(angular.element(document.querySelector('#' + key)).val());
                } else if (cc > 1) {
                    setTimeout(function() {
                        if (k == "name") {
                            angular.element(document.querySelector('#addFacility')).triggerHandler('click');
                            angular.element(document.querySelector('#' + key)).val(value);
                        } else {
                            angular.element(document.querySelector('#' + key)).val(value);
                        }
                    }, 0);
                }

            })

            angular.element(document.querySelector('#uploadExcelId')).val("");
            console.log(jsonObject);
            //DO SOMETHING WITH workbook HERE 
        };
        reader.readAsBinaryString(event.target.files[0]);
    }

    /*callAjaxService.callAjaxFunction("csn/product/credits",'GET',{'Content-Type': "application/json; charset=utf-8"},"").then(function successCallback(response) {
        if(response.Data.resp_code === 'CS1002'){   
        	console.log(response.Data);
        	$scope.bankStatementBalance = response.Data.data.bankstatementBal;
        	$scope.creditScoreBalance = response.Data.data.creditscoreBal;
        	$scope.financialDocumentReaderBalance = 0;
        	$scope.tradeLicenseBalance = 0;
        	$scope.etihadCreditReportBalance = 0
        	$scope.valuationBalance = 0;	
        	$window.sessionStorage.setItem('bankCredit',$scope.bankStatementBalance)
        }
    });	*/

}])