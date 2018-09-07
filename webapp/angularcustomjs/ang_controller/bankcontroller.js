/*
 * @author Romal Singla
 */

scoremeapp.controller('bankController', ['callAjaxService', 'commonServices', '$window', '$scope', '$location', '$state', '$stateParams', '$rootScope', 'Upload', '$timeout', '$http', '$document', function(callAjaxService, commonServices, $window, $scope, $location, $state, $stateParams, $rootScope, Upload, $timeout, $http, $document) {


    var bodyRef = angular.element($document[0].body);
    //loader starts
    $scope.dataLoading = true;
    // Add our overflow hidden class on loading
    bodyRef.addClass('ovh');


    // ************ when user logout from its current session *************
    if (sessionStorage.getItem('loggedUsername') == null) {
        $state.go('signInState');
    }

    // ************ when user logout from its current session *************
    $scope.bankCompanyName = $window.sessionStorage.getItem('companyName');
    $scope.bankCredits = $window.sessionStorage.getItem('bankCredit');
    $scope.isHeroUser = $window.sessionStorage.getItem('isHeroUser');
    var companyId = $window.sessionStorage.getItem('companyId');
    $scope.isICICI = $window.sessionStorage.getItem('isICICI');
    //alert($scope.bankCredits);


    if ($window.sessionStorage.getItem('bankDataStore') == null) {
        commonServices.bankName().then(function successCallback(response) {
            $scope.bankData = response.Data;
            $window.sessionStorage.setItem('bankDataStore', JSON.stringify(response.Data));
        });
    } else {
        $scope.bankData = JSON.parse($window.sessionStorage.getItem('bankDataStore'));
    }

    // dp limit to add month year amount row	
    $scope.noOfMonthYearDiv = [];
    $scope.noOfMonthYearDiv.length = 1;
    $scope.length = 1;
    var countMonthYearDiv = 0;
    $scope.addAnotherMonthYearAmount = function(index) {
        if ($scope.noOfMonthYearDiv.length < 49) {
            $scope.noOfMonthYearDiv.push(countMonthYearDiv);
            countMonthYearDiv = countMonthYearDiv + 1;
            console.log(countMonthYearDiv);
        }
    }
    $scope.del = function(i) {
        console.log(i);
        $scope.noOfMonthYearDiv.splice(i, 1);
        $scope.count = $scope.count - 1;
    }


    $scope.bFiles = [];
    $scope.uploadCount = 0;
    $scope.totalFileSize = 0;
    $scope.fileSizeStorage = [];
    $scope.totalUploadedFileCount = 0;

    $scope.setFile = function(e) {
        $scope.$apply(function() {
            //if() {
            var j = 0;
            if (e.files.length <= 12) {
                j = e.files.length;
            } else {
                j = 12;
            }

            var firstFileDotIndex = 0,
                firstFileExt = "";
            if ($scope.bFiles.length != 0) {
                firstFileDotIndex = $scope.bFiles[0].name.lastIndexOf('.');
                firstFileExt = $scope.bFiles[0].name.substring(firstFileDotIndex + 1);
                firstFileExt = firstFileExt.toLowerCase();
            } else {
                firstFileDotIndex = e.files[0].name.lastIndexOf('.');
                firstFileExt = e.files[0].name.substring(firstFileDotIndex + 1);
                firstFileExt = firstFileExt.toLowerCase();
            }

            for (var i = 0; i < j; i++) {
                var dotIndex = e.files[i].name.lastIndexOf('.');
                var ext = e.files[i].name.substring(dotIndex + 1);
                ext = ext.toLowerCase();
                console.log(ext);
                if (ext == 'pdf' || ext == 'xlsx' || ext == 'txt' || ext == 'xls') {
                    console.log(ext);
                    if (ext == firstFileExt) {
                        if ($scope.uploadCount < 12) {
                            //add file size in a single variable
                            if (typeof(document.getElementById("bankStmtFile").files) != "undefined") {
                                $scope.size = parseFloat(document.getElementById("bankStmtFile").files[i].size / 1024).toFixed(2);
                                $scope.totalFileSize = (parseFloat($scope.totalFileSize) + parseFloat($scope.size)).toFixed(2);

                                console.log("*********************" + $scope.totalFileSize);
                                console.log('file name: ' + e.files[i].name + ' file size: ' + e.files[i].size);
                                if ($scope.totalFileSize <= 20480) {
                                    $scope.bFiles.push(e.files[i]);
                                    $scope.fileSizeStorage.push(parseFloat($scope.size));
                                    $scope.uploadCount++;
                                    angular.element(document.querySelector('#upload_span')).html("");
                                } else if ($scope.totalFileSize > 20480) {
                                    angular.element(document.querySelector('#upload_span')).html("Please select the file size below or equal to 20MB");
                                }
                            } else {
                                console.log("This browser does not support HTML5.");
                            }
                        } else {
                            angular.element(document.querySelector('#upload_span')).html("");
                        }
                    } else {
                        angular.element(document.querySelector('#upload_span')).html("Please select " + firstFileExt + " extension file");
                    }
                } else {
                    angular.element(document.querySelector('#upload_span')).html("Please select xlsx or pdf only");
                }
            }
        });
        angular.element(document.querySelector('#bankStmtFile')).val('');
    };


    $scope.removeFile = function(index) {
        console.log(index);
        $scope.bFiles.splice(index, 1);

        $scope.totalFileSize = $scope.totalFileSize - parseFloat($scope.fileSizeStorage[index]);
        $scope.fileSizeStorage.splice(index, 1);

        if (($scope.uploadCount) > 0) {
            $scope.uploadCount--;
        }
    }


    // analyzStatement
    $scope.showUploadingBar = false;
    $scope.uploadPercentComplete = '0%';

    $scope.uploadUserExcel = function(element, isValid) {
        console.log("file size: " + $scope.totalFileSize);
        console.log($scope.product);
        if ($scope.bFiles.length != 0) {
            if (isValid == true) {
                if ($scope.totalFileSize < 20480) {
                    //if ($scope.totalFileSize < 15361) {    	 
                    $scope.showUploadingBar = !$scope.showUploadingBar;
                    var fileObj = new FormData(),
                        sistercompany = $scope.keyword1 + "," + $scope.keyword2 + "," + $scope.keyword3 + "," + $scope.keyword4 + "," +
                        $scope.keyword5 + "," + $scope.keyword6 + "," + $scope.keyword7 + "," + $scope.keyword8 + "," + $scope.keyword9 + "," + $scope.keyword10,
                        od_cc_value = 0;

                    if ($scope.accountType == 'CASH_CREDIT' || $scope.accountType == 'OVER_DRAFT') {
                        od_cc_value = angular.element(document.querySelector('#od')).val();
                        if (od_cc_value == undefined || od_cc_value == "") {
                            od_cc_value = 0;
                        } else {
                            od_cc_value = od_cc_value.replace(/,/g, "");
                        }

                    }


                    var monthYearArray = [];
                    for (var i = 1; i <= $scope.noOfMonthYearDiv.length; i++) {
                        monthYearArray.push({
                            month: angular.element(document.querySelector('#month' + i)).val(),
                            year: angular.element(document.querySelector('#year' + i)).val(),
                            amount: angular.element(document.querySelector('#amount' + i)).val(),
                        });
                    }


                    for (var i in $scope.bFiles) {
                        fileObj.append("file", $scope.bFiles[i])
                    }
                    var dataObj = {
                        bankId: $scope.bankName,
                        accountType: $scope.accountType,
                        accountNumber: $scope.accountNumber,
                        companyName: $scope.bankCompanyName,
                        companyId: $window.sessionStorage.getItem('companyId'),
                        companyType: $scope.companyType,
                        odValue: od_cc_value,
                        sisterCompany: sistercompany,
                        sisterCompany: sistercompany,
                        odLimit: monthYearArray,
                        //product:$scope.product,
                        product: angular.element(document.querySelector('#product')).val(),
                        //product:document.getElementById("product").val(),
                        flag: false,
                    }
                    console.log(JSON.stringify(dataObj));

                    fileObj.append('data', JSON.stringify(dataObj));

                    var ip = $window.sessionStorage.getItem('ip-address');

                    var url = ip + "csn/upload/user/bank/statement",
                        method = 'POST',
                        headers = { 'Content-Type': undefined, 'Authorization': $window.sessionStorage.getItem("auth-token") },
                        payload = fileObj;

                    var resData = {
                        method: method.toUpperCase(),
                        url: url,
                        data: payload,
                        headers: headers,
                        async: false,
                        dataType: "json",
                        uploadEventHandlers: {
                            progress: function(evt) {
                                if (evt.lengthComputable) {
                                    var percentComplete = evt.loaded / evt.total;
                                    percentComplete = parseInt(percentComplete * 100);
                                    $scope.uploadPercentComplete = percentComplete + '%'
                                    console.log("percentage=" + $scope.uploadPercentComplete);
                                }
                                /*if($scope.uploadPercentComplete == '100%'){
                                	$scope.showUploadingBar = !$scope.showUploadingBar;
                                }*/
                            }
                        },
                    }
                    return $http(resData).then(
                        function mysuccess(response) {
                            if (response.data.resp_code === 'CS1002') {
                                $state.go('bankStatementReportState');
                                show_p_notify('success', response.data.resp_msg);
                                $scope.bFiles.length = 0;
                            } else if (response.data.resp_code === 'CS1003') {
                                show_p_notify('error', response.data.resp_msg);
                                $scope.bFiles.length = 0;
                                $state.go($state.current, {}, { reload: true });
                            }
                        },
                        function myerror(response) {
                            show_p_notify('error', response.Data.resp_msg);
                            console.log(response);
                        })
                }
                /*else{
			angular.element(document.querySelector('#upload_span')).html("Please select the file size below or equal to 15MB");
		} */
            }
        } else {
            angular.element(document.querySelector('#upload_span')).html("Please select atleast one file");
        }
    }

    $scope.bankStatementReportData = "";
    callAjaxService.callAjaxFunction("csn/bankstatementreport/user/" + companyId, 'GET', { 'Content-Type': 'application/json; charset=utf-8' }, "").then(function successCallback(response) {
        console.log(response);
        if (response.Data.resp_code === 'CS1002') {
            $scope.dataLoading = false;
            $scope.bankStatementReportData = response.Data.data;
        }
    }, function errorCallback(response) {
        console.log(response);
    })





    $scope.sortingBankReport = function(sortType) {
        callAjaxService.callAjaxFunction("csn/bankstatementreport/user/" + companyId + "/" + sortType, 'GET', { 'Content-Type': 'application/json; charset=utf-8' }, "").then(function successCallback(response) {
            console.log(response);
            if (response.Data.resp_code === 'CS1002') {
                $scope.dataLoading = false;
                $scope.bankStatementReportData = response.Data.data;
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }


    // ************************************event source*****************************************	

    var eventURL = "signinws/get/notification/" + $window.sessionStorage.getItem("auth-token");
    if (EventSource != null) {
        var eventSource = new EventSource(eventURL);
    }
    eventSource.onmessage = function(event) {
        angular.forEach(JSON.parse(event.data).notificationstatus, function(val, key) {
            if (val.status == 0) {

                //angular.element(document.querySelector('#reportMsg_'+val.refId)).html(val.statusMsg);	
                angular.element(document.querySelector('#convertTd_' + val.refId)).addClass('showLi').removeClass('hideLi').removeClass('ng-hide');;
                angular.element(document.querySelector('#firstDiv_' + val.refId)).removeClass('progress-bar');
                angular.element(document.querySelector('#secondDiv_' + val.refId)).removeClass('progress-bar');
                angular.element(document.querySelector('#thirdDiv_' + val.refId)).removeClass('progress-bar');

                angular.element(document.querySelector('#finalTd_' + val.refId)).addClass('hideLi').removeClass('showLi');
                angular.element(document.querySelector('#validateTd_' + val.refId)).addClass('hideLi').removeClass('showLi');
                angular.element(document.querySelector('#statusMsg_' + val.refId)).html(val.statusMsg);
                angular.element(document.querySelector('#steps_' + val.refId)).html("You are in Step " + val.step + " of 3");
            } else if (val.status == 1) {
                angular.element(document.querySelector('#convertTd_' + val.refId)).addClass('showLi').removeClass('hideLi').removeClass('ng-hide');;
                angular.element(document.querySelector('#firstDiv_' + val.refId)).addClass('progress-bar');
                angular.element(document.querySelector('#secondDiv_' + val.refId)).removeClass('progress-bar');
                angular.element(document.querySelector('#thirdDiv_' + val.refId)).removeClass('progress-bar');

                angular.element(document.querySelector('#finalTd_' + val.refId)).addClass('hideLi').removeClass('showLi');
                angular.element(document.querySelector('#validateTd_' + val.refId)).addClass('hideLi').removeClass('showLi');
                angular.element(document.querySelector('#statusMsg_' + val.refId)).html(val.statusMsg);
                angular.element(document.querySelector('#steps_' + val.refId)).html("You are in Step " + val.step + " of 3");
            } else if (val.status == 2) {
                angular.element(document.querySelector('#convertTd_' + val.refId)).addClass('showLi').removeClass('hideLi').removeClass('ng-hide');;
                angular.element(document.querySelector('#firstDiv_' + val.refId)).addClass('progress-bar');
                angular.element(document.querySelector('#secondDiv_' + val.refId)).addClass('progress-bar');
                angular.element(document.querySelector('#thirdDiv_' + val.refId)).removeClass('progress-bar');

                angular.element(document.querySelector('#finalTd_' + val.refId)).addClass('hideLi').removeClass('showLi');
                angular.element(document.querySelector('#validateTd_' + val.refId)).addClass('hideLi').removeClass('showLi');
                angular.element(document.querySelector('#statusMsg_' + val.refId)).html(val.statusMsg);
                angular.element(document.querySelector('#steps_' + val.refId)).html("You are in Step " + val.step + " of 3");
            } else if (val.status == 4) {
                angular.element(document.querySelector('#convertTd_' + val.refId)).addClass('hideLi').removeClass('showLi');
                angular.element(document.querySelector('#finalTd_' + val.refId)).addClass('hideLi').removeClass('showLi');
                angular.element(document.querySelector('#validateTd_' + val.refId)).addClass('showLi').removeClass('hideLi').removeClass('ng-hide');;
                angular.element(document.querySelector('#statusMsg_' + val.refId)).html(val.statusMsg);
                // angular.element(document.querySelector('#steps_'+val.refId)).html("You are in Step"+ val.status +"of 3");
            } else if (val.status == 3) {
                $window.sessionStorage.setItem('bankFlag', "1");
                angular.element(document.querySelector('#convertTd_' + val.refId)).addClass('hideLi').removeClass('showLi')
                angular.element(document.querySelector('#finalTd_' + val.refId)).addClass('showLi').removeClass('hideLi').removeClass('ng-hide');;
                angular.element(document.querySelector('#validateTd_' + val.refId)).addClass('hideLi').removeClass('showLi');
                angular.element(document.querySelector('#reportUrl_' + val.refId)).attr('href', val.reportFileUrl);
                angular.element(document.querySelector('#reportName_' + val.refId)).html(val.reportFileName);
                angular.element(document.querySelector('#statusMsg_' + val.refId)).html(val.statusMsg);
                angular.element(document.querySelector('#steps_' + val.refId)).html("You are in Step " + val.step + " of 3");
            }
        })
    }


    //************************* setting data *************************
    $scope.settingData = [
        { settingLabel: 'Account Details', trueValue: 1 },
        { settingLabel: 'Bank Statement', trueValue: 2 },
        { settingLabel: 'Overview', trueValue: 3 },
        { settingLabel: '10 Highest Tranx', trueValue: 4 },
        { settingLabel: 'Summary of Statement', trueValue: 5 },
        { settingLabel: 'Transaction Break-Up', trueValue: 6 },
        { settingLabel: 'Summary of Debits and Credits', trueValue: 7 },
        { settingLabel: 'Summary of Credits', trueValue: 8 },
        { settingLabel: 'Summary of Debits', trueValue: 9 },
        { settingLabel: 'Daily EOD', trueValue: 10 },
        { settingLabel: 'OD or CC Limit Utilization', trueValue: 11 },
        { settingLabel: 'Inhouse Tranx', trueValue: 12 },
        { settingLabel: 'Exceptional Tranx', trueValue: 13 },
        { settingLabel: 'Return Details', trueValue: 14 },
        { settingLabel: 'Interest Paid Tranx', trueValue: 15 },
        { settingLabel: 'ECS and NACH Tranx', trueValue: 16 },
        { settingLabel: 'Loan and WC Tranx', trueValue: 17 },
        { settingLabel: 'Tranx with Banks', trueValue: 18 },
        { settingLabel: 'Investment Tranx', trueValue: 19 },
        { settingLabel: 'Salary Tranx', trueValue: 20 },
        { settingLabel: 'Utility Tranx', trueValue: 21 },
        { settingLabel: 'Cash Flow', trueValue: 22 },
    ]


    // **************************************** apply setting ****************************************
    $scope.settingModalShow = false;
    $scope.settingCheckboxObject = {};
    $scope.settingCheckboxArray = [];

    $scope.openSettingModal = function() {
        $scope.settingCheckboxObject = {}
        $scope.settingModalShow = !$scope.settingModalShow;
        //alert($scope.settingModalShow);
        callAjaxService.callAjaxFunction("csn/get/setting/applied", 'GET', { 'Content-Type': 'application/json; charset=utf-8' }, "").then(function successCallback(response) {
            //console.log(response);
            if (response.Data.resp_code = 'CS1002') {
                //console.log(response.Data.setting.split(','));
                var dataArray = response.Data.setting.split(',');
                // console.log(dataArray);
                angular.forEach(dataArray, function(val, key) {
                    // console.log(val);
                    angular.forEach($scope.settingData, function(val1, key1) {
                        if (val1.trueValue == val) {
                            val1.selected = true;
                            $scope.settingCheckboxObject[val1.settingLabel] = val1.trueValue;
                        }
                    })
                })
            } else {
                show_p_notify('error', response.Data.resp_msg);
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }

    // ***************************select the checkbox before apply*******************
    $scope.selectAll = function(e, data) {
        angular.forEach($scope.settingData, function(val1, key1) {
            val1.selected = data;
            if (data == false)
                $scope.settingCheckboxObject[val1.settingLabel] = '';
            else if (data == true)
                $scope.settingCheckboxObject[val1.settingLabel] = val1.trueValue;
        });
    };

    /*$scope.oneTimeCheckboxFunc = function(data){
    	$scope.oneTimeCheckbox = data;
    }*/

    //$scope.oneTimeCheckbox = false;
    $scope.applySetting = function(status) {
        console.log($scope.settingCheckboxObject);
        angular.forEach($scope.settingCheckboxObject, function(val, key) {
            console.log(val);
            if (val != "" && val != null) {
                $scope.settingCheckboxArray.push(val);
            }
        })
        console.log($scope.settingCheckboxArray);
        var applyNowBoolean = false,
            applyAllBoolean = false;
        console.log(status);

        if (status == 'applyNow') {
            console.log("******************" + status);
            applyNowBoolean = true;
            applyAllBoolean = false;
        } else if (status == 'applyAll') {
            applyNowBoolean = false;
            applyAllBoolean = true;
        }

        console.log($scope.settingCheckbox);

        var payload = {
            applyNow: applyNowBoolean,
            applyAll: applyAllBoolean,
            sheetsNo: $scope.settingCheckboxArray,
        }
        callAjaxService.callAjaxFunction("csn/setting/apply", 'POST', { 'Content-Type': 'application/json; charset=utf-8' }, payload).then(function successCallback(response) {
            if (response.Data.resp_code = 'CS1002') {
                $('#Setting').modal('hide');

                show_p_notify('success', response.Data.resp_msg);
                $state.go($state.current, {}, { reload: true });
            } else {
                show_p_notify('error', response.Data.resp_msg);
                //$state.go($state.current, {}, {reload: true});
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }


    $scope.getSetttingUrl = function(refId) {
        callAjaxService.callAjaxFunction("csn/get/report/bysetting/" + refId, 'GET', { 'Content-Type': 'application/json; charset=utf-8' }, "").then(function successCallback(response) {
            if (response.Data.resp_code = 'CS1002') {
                console.log(response.Data.resp_code);
                $scope.newSettingUrl = response.Data.url;
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }

    //************************************mailing api's****************************************

    $scope.bankCheckbox = {};

    $scope.mailingBankStatement = function() {
        console.log($scope.bankCheckbox);
        var selectedBankReportArray = [],
            selectedBankReportObject = {},
            emailToArray = [],
            emailCcArray = [],
            emailBccArray = [];

        angular.forEach($scope.bankCheckbox, function(key, val) {
            selectedBankReportObject = {};

            if (key) {
                angular.forEach($scope.bankStatementReportData, function(val1, key1) {
                    if (val == val1.refId) {
                        if (val1.reportFile != null) {
                            console.log("Hello");
                            selectedBankReportObject['refId'] = val1.refId;
                            selectedBankReportObject['accNumber'] = val1.accNumber;
                            selectedBankReportObject['outputFile'] = val1.reportFile;
                            selectedBankReportArray.push(selectedBankReportObject);
                        }
                    }
                })
            }
        })

        emailToArray.push(angular.element(document.querySelector('#mailTo')).val());
        //emailCcArray.push(angular.element(document.querySelector('#mailCc')).val());
        //emailBccArray.push(angular.element(document.querySelector('#mailBcc')).val());

        var payload = {
            toEmail: emailToArray,
            toCC: emailCcArray,
            toBCC: emailBccArray,
            msg: angular.element(document.querySelector('#mailBody')).val(),
            sub: angular.element(document.querySelector('#mailSubject')).val(),
            ref: selectedBankReportArray
        }

        console.log(payload);

        callAjaxService.callAjaxFunction("csn/send/bankstatementreport/mail", 'POST', { 'Content-Type': 'application/json; charset=utf-8' }, payload).then(function successCallback(response) {
            console.log(response);
            if (response.Data.resp_code = 'CS1002') {
                $('#Email').modal('hide');

                show_p_notify('success', response.Data.resp_msg);
                $state.go($state.current, {}, { reload: true });
            } else {
                show_p_notify('error', response.Data.resp_msg);
                //$state.go($state.current, {}, {reload: true});
            }
        }, function errorCallback(response) {
            console.log(response);
        })


    }


    // **************************** archive ********************************
    $scope.applyArchive = function() {
        console.log($scope.bankCheckbox);
        var selectedBankReportArray = [];
        angular.forEach($scope.bankCheckbox, function(key, val) {
            if (key) {
                angular.forEach($scope.bankStatementReportData, function(val1, key1) {
                    if (val1.statuscode == 3 || val1.statuscode == 4) {
                        if (val == val1.refId) {
                            selectedBankReportArray.push(val1.refId);
                        }
                    }
                })
            }
        })


        console.log(selectedBankReportArray);
        var payload = {
            refIds: selectedBankReportArray
        }
        callAjaxService.callAjaxFunction("csn/archive/user", 'POST', { 'Content-Type': 'application/json; charset=utf-8' }, payload).then(function successCallback(response) {
            if (response.Data.resp_code = 'CS1002') {
                show_p_notify('success', response.Data.resp_msg);
                $state.go($state.current, {}, { reload: true });
            } else {
                show_p_notify('error', response.Data.resp_msg);
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }

    $scope.items = "10";
    $scope.changeItems = function(items) {
        $scope.itemsPerPage = items;
    }


    // validatin in mail modal 


    $scope.validateMail = function() {
        var count = 0;
        var email = angular.element(document.querySelector('#mailTo')).val();
        if (angular.element(document.querySelector('#mailTo')).val() == "") {
            angular.element(document.querySelector('#mailTo_span')).html("Please enter email id");

        } else if (!email.match(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
            angular.element(document.querySelector('#mailTo_span')).html("Please enter valid email id");
        } else {
            angular.element(document.querySelector('#mailTo_span')).html("");
            count++;
        }

        if (angular.element(document.querySelector('#mailSubject')).val() == "") {
            angular.element(document.querySelector('#mailSubject_span')).html("Please enter subject");

        } else {
            angular.element(document.querySelector('#mailSubject_span')).html("");
            count++;
        }

        if (angular.element(document.querySelector('#mailBody')).val() == "") {
            angular.element(document.querySelector('#mailBody_span')).html("Please enter valid data");

        } else {
            angular.element(document.querySelector('#mailBody_span')).html("");
            count++;
        }

        if (count == 3) {
            $scope.mailingBankStatement();
        }

    }

    $scope.mailValidationOnKeyUp = function(id) {
        if (angular.element(document.querySelector('#' + id)).val() == "") {
            angular.element(document.querySelector('#' + id + '_span')).html("Please enter valid data");
        } else {
            angular.element(document.querySelector('#' + id + '_span')).html("");
        }
    }


    $scope.accountChange = function(accountType) {
        if (accountType == 'SAVING' || accountType == 'CURRENT' || accountType == 'CREDIT_CARD') {
            $scope.od = "";
        } else {

        }
    }





}]);