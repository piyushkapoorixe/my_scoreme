/*
 * @author Romal Singla
 */

scoremeapp.controller('dashboardController', ['callAjaxService', 'commonServices', 'simpleServices', '$window', '$scope', '$location', '$rootScope', '$compile', '$state', '$document', '$timeout', function(callAjaxService, commonServices, simpleServices, $window, $scope, $location, $rootScope, $compile, $state, $document, $timeout) {
    //$('#loadingBar').css("display","block");
    // Register a body reference to enable/disable body scroll
    var bodyRef = angular.element($document[0].body);
    // ************ when user logout from its current session *************
    if (sessionStorage.getItem('loggedUsername') == null) {
        $state.go('signInState');
    }
    // ************ when user logout from its current session *************

    var companyId = $window.sessionStorage.getItem("companyId");
    $rootScope.$state = $state;
    //$rootScope.$stateParams = $stateParams;
    //loader starts
    $scope.dataLoading = true;
    // Add our overflow hidden class on loading
    bodyRef.addClass('ovh');


    // *********************** for score card on dashboard *************************************//

    callAjaxService.callAjaxFunction("csn/get/latest/rating/" + companyId, 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        if (response.Data.resp_code === 'CS1002') {
            //loader stops
            /*$scope.dataLoading = false;*/
            // Remove our overflow hidden class on loading
            $scope.bankstatementCard();
            $scope.sliderBar();

            if ($location.absUrl().indexOf('scorereporthistory') != -1) {
                $scope.dataLoading = false;
                // Add our overflow hidden class on loading
                bodyRef.removeClass('ovh');
            }

            //$scope.ratingFlag = 1;
            if (response.Data.data != "") {
                $scope.score = response.Data.data[0]['score']; //latest score
                $scope.grade = response.Data.data[0]['grade']; //latest grade
                $scope.report = response.Data.data[0]['certificate']; //latest grade
                $window.sessionStorage.setItem('flag', "1");
                $scope.ratingMsg = response.Data.data[0]['ratingMessage']; //latest grade
                $scope.getSliderValue = response.Data.data[0]['inputString']; //latest rating data
                $scope.allCompanyRatingData = response.Data.data;
                console.log($scope.allCompanyRatingData);
                $scope.ratingFlag = 1;
            } else {
                $scope.ratingFlag = 0;
            }
            console.log(response);
            $('#circle1').circleProgress({
                value: parseInt($scope.score) / 100,
                size: 70,
                fill: {
                    gradient: ["#0057ff", "#00ceed"]
                }
            });

            $('#recalculateScore').circleProgress({
                value: parseInt($scope.score) / 100,
                size: 110,
                fill: {
                    gradient: ["#0057ff", "#00ceed"]
                }
            });

        } else {
            $scope.ratingFlag = 0;
            $scope.score = "NA";
            $scope.grade = 0;
        }

    }, function errorCallback(response) {
        $scope.ratingFlag = 0;
        $scope.score = "NA";
        $scope.grade = 0;
    })


    $scope.report = $window.sessionStorage.getItem('rating_REPORT');
    $scope.MSG_LTL = $window.sessionStorage.getItem('rating_MSG_LTL');
    $scope.MSG_OD = $window.sessionStorage.getItem('rating_MSG_OD');
    $scope.MSG_LC = $window.sessionStorage.getItem('rating_MSG_LC');
    $scope.MSG_BG = $window.sessionStorage.getItem('rating_MSG_BG');
    $scope.MSG_ROI_LTL = $window.sessionStorage.getItem('rating_MSG_ROI_LTL');
    $scope.MSG_ROI_WC = $window.sessionStorage.getItem('rating_MSG_ROI_WC');



    //*********************** for bank statement card on dashboard *************************************//
    $scope.bankstatementCard = function() {
        console.log($location.absUrl().indexOf('maindashboard'));
        if ($location.absUrl().indexOf('maindashboard') != -1) {
            callAjaxService.callAjaxFunction("csn/get/fileProcessingDetails/" + companyId, 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
                if (response.Data.resp_code === 'CS1002') {
                    $scope.dataLoading = false;
                    if (response.Data.processingdetails != "") {
                        $scope.failedFiles = response.Data.processingdetails['failedfile']; //latest score
                        $scope.generatedFiles = response.Data.processingdetails['generatedfile']; //latest grade
                        $scope.inprocessFiles = response.Data.processingdetails['inprocessfile']; //latest grade
                        $scope.totalFilesUploaded = response.Data.processingdetails['totalfilesuploaded']; //latest grade
                        $scope.bankUrl = response.Data.processingdetails['url']; //latest rating data
                        $scope.uploadedFlag = response.Data.flag;

                        bodyRef.removeClass('ovh');
                    } else {
                        $scope.dataLoading = false;
                        $scope.uploadedFlag = response.Data.flag;
                    }
                } else if (response.Data.resp_code === 'CS1003') {
                    $scope.dataLoading = false;
                    $scope.uploadedFlag = 0;
                }
            }, function errorCallback(response) {
                $scope.uploadedFlag = 0;
            })
        }
    }



    $scope.sliderBar = function() {
        if ($location.absUrl().indexOf('recalscore') != -1) {

            var count = 0;
            commonServices.companyParameters(companyId).then(function successCallback(response) {
                if (response.Data.resp_code == "CS1002") {

                    if (response.Data.companyData != null && response.Data.companyData != "") {

                        $scope.companyData = response.Data.companyData;
                        $scope.industryId = response.Data.industryId;
                        if ($scope.companyData.length > 0) {
                            $timeout(function() {
                                $scope.dataLoading = false;
                                bodyRef.removeClass('ovh');
                                angular.forEach($scope.companyData, function(val, key) {
                                    //angular.forEach(val , function(val1 , key1){

                                    if (val.group == 'SLIDER') {

                                        angular.forEach(val.param, function(val2, key2) {

                                            var parsedData = JSON.parse($scope.getSliderValue);

                                            angular.forEach(parsedData, function(value, key) {
                                                if (key == "input-" + val2.min) {
                                                    previousValue = value.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");

                                                    var maxValue = value.replace(/,/g, "");
                                                    console.log(maxValue);
                                                    angular.element(document.querySelector('#previous_' + val2.min)).html(previousValue);
                                                    angular.element(document.querySelector('#slider_' + val2.min)).val(previousValue);
                                                    angular.element(document.querySelector('#slider_' + val2.min)).attr('max', parseInt(maxValue) * 5);
                                                }
                                            })



                                            var $element = $('#slider_' + val2.min);
                                            //console.log("Hello init function");	    
                                            var $previous = $('#previous_' + val2.min);
                                            var $output = $('#' + val2.name);
                                            $('#percentage_' + val2.min).val(0);
                                            // Initialize rangeslider.js
                                            $element.rangeslider({
                                                polyfill: false
                                            });

                                            if ($previous[0] != undefined) {
                                                $element.val($previous[0].innerHTML.replace(/,/g, "")).trigger('change');
                                            }

                                            //************************ slides slider *************************				      
                                            $element.on('input', function() {
                                                count++;
                                                console.log(count);
                                                if (count == 10) {
                                                    console.log(count);
                                                    //$scope.dataLoading = false;    
                                                }
                                                console.log("percentage value = " + $('#percentage_' + val2.min).val());
                                                console.log("this value = " + this.value);
                                                var thisValue = 0;
                                                if (this.value != undefined && this.value != null) {
                                                    if (this.value.toString().indexOf(',') != -1) {
                                                        thisValue = this.value.toString().replace(/,/g, "");
                                                    } else {
                                                        thisValue = this.value;
                                                    }
                                                }
                                                var outputVal = thisValue;
                                                outputVal = outputVal.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                                                $output[0].innerHTML = outputVal;
                                                // var $previous = $('#previous_'+minVal);    
                                                var perc = 0,
                                                    n1, n2;
                                                if ($previous[0] != undefined && $output[0] != undefined) {

                                                    perc = (((parseInt($output[0].innerHTML.replace(/,/g, "")) - parseInt($previous[0].innerHTML.replace(/,/g, ""))) / (parseInt($previous[0].innerHTML.replace(/,/g, "")))) * 100);
                                                    // console.log(perc);	
                                                    perc = perc.toFixed();
                                                    if (perc.toString().indexOf(".") != -1) {
                                                        n1 = perc.toString().split('.');
                                                        n2 = n1[1] || null;
                                                        n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                                                        perc = n2 ? n1 + '.' + n2 : n1 + '.';
                                                    } else {
                                                        n1 = perc.toString();
                                                        n1 = n1.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                                                        perc = n1;
                                                    }
                                                    $('#percentage_' + val2.min).val(perc);


                                                    //$output[0].value = $output[0].value;
                                                }
                                            });

                                            // create an observer instance
                                            var observer = new MutationObserver(function(mutations) {
                                                mutations.forEach(function(mutation) {
                                                    if (mutation.type === 'attributes') {
                                                        $element.rangeslider('update', true);
                                                        $output[0].value = 0;
                                                    }
                                                });
                                            });
                                            observer.observe($element[0], {
                                                attributes: true
                                            });
                                        })
                                    }
                                })
                            }, 5000);
                        }
                    }
                }
            })
        }

    }





    $scope.changeSliderValueOnPercKeyUp = function(minVal, name) {


        var $element = $('#slider_' + minVal); // slider node
        var $output = $('#' + name); //current value node
        var $perc = $('#percentage_' + minVal).val();
        var $previous = $('#previous_' + minVal);

        console.log("--------------------------------- = " + parseInt($perc));
        console.log("--------------------------------- = " + $perc);

        $output[0].value = ((parseInt($perc.replace(/,/g, "")) * parseInt($previous[0].innerHTML.replace(/,/g, ""))) / 100) + parseInt($previous[0].innerHTML.replace(/,/g, ""));

        var i = $output[0].value;
        i = i.toString().replace(/,/g, "");
        console.log(i);
        if (i != "" && $perc != "") {
            $element.val(i).trigger('change');
        } else {
            $('#percentage_' + minVal).val(0);
            $element.val(parseInt($previous[0].innerHTML.replace(/,/g, ""))).trigger('change');
        }
        //console.log($element.val());	
    }

    /*$scope.getMinValue = function(minVal , name){	
    	  var parsedData = JSON.parse($scope.getSliderValue);
    	  var count = 0;
        angular.forEach(parsedData, function(value, key) 
    		  {		  	
    		   if(key == "input-"+minVal)
    		     {
    			    previousValue = value.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");	
    			    
    			    var maxValue = value.replace(/,/g, "");
    			    console.log(maxValue);
    		        angular.element(document.querySelector('#previous_'+minVal)).html(previousValue);
    		        //console.log("***************************************** = "+parseInt(maxValue)*5);
    		        //angular.element(document.querySelector('#slider_'+minVal)).val(parseInt(maxValue));
    		        //angular.element(document.querySelector('#slider_'+minVal)).attr('max' ,parseInt(maxValue)*5);
    		     }
    		 })
    }*/

    $scope.getKeyValue = function(keyVal) {
        var parsedData = JSON.parse($scope.getSliderValue);
        angular.forEach(parsedData, function(value, key) {
            if (key == keyVal) {
                // value = value.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");	
                angular.element(document.querySelector('#' + keyVal)).val(value);
            }
        })
    }





    callAjaxService.callAjaxFunction("csn/get/company/" + companyId, 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        if (response.Data.resp_code == "CS1002") {
            var data = response.Data.data;
            $scope.companyName = data.companyName;
            $scope.industryName = data.industryName;
            $scope.companyId = data.companyId;
            $scope.compId = data.id;
            $scope.groupName = data.groupName;
        }
    }, function errorCallback(response) {
        console.log(response);
    })






    // ***********************initialize the slider with previous value *****************************
    var count = 0;
    /*$scope.initFunction = function(minVal , name){

    	console.log("Hello init function");
        var $element = $('#slider_'+minVal);
        var $output = $('#'+name);

       // Initialize rangeslider.js
         $element.rangeslider({
            polyfill: false
         });

    $element.on('input', function() {
    	
    	var outputVal = this.value ; 
    	outputVal  = outputVal.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");	
        $output[0].innerHTML = outputVal;
        var $previous = $('#previous_'+minVal);    
        var perc = 0,n1,n2;
        if($previous[0] != undefined && $output[0] != undefined){
        	
        	console.log($output[0].innerHTML);
        	console.log($previous[0].innerHTML);
         	
        perc = (((parseInt($output[0].innerHTML.replace(/,/g, ""))- parseInt($previous[0].innerHTML.replace(/,/g, "")))/(parseInt($previous[0].innerHTML.replace(/,/g, ""))))*100);
        console.log(perc);	
        perc = perc.toFixed(2);
        	if(perc.toString().indexOf(".") != -1){
                n1 = perc.toString().split('.');
                n2 = n1[1]|| null;
                n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");          
                perc = n2 ? n1 + '.' + n2 : n1 +'.';
             }else{
            	 n1 = perc.toString();
                 n1 = n1.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                 perc = n1;      
             }
      
        $('#percentage_'+minVal).html(perc+"%"); 
        $output[0].innerHTML = $output[0].innerHTML;
        }
    });

    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes') {
                $element.rangeslider('update', true);
               $output[0].innerHTML = '-';
            }
        });
    });

    observer.observe($element[0], {
        attributes: true
    });

    $('input[type=text]').on('input', function() {
        $element[0].setAttribute(this.name, this.value);
    });

    }*/


    $scope.initFunction = function(minVal, name) {

        var $element = $('#slider_' + minVal);
        console.log("Hello init function");

        var $previous = $('#previous_' + minVal);
        var $output = $('#' + name);

        //console.log($element);
        // Initialize rangeslider.js
        /* $element.rangeslider({
            polyfill: false
         });

         $element.val($previous[0].innerHTML.replace(/,/g, "")).trigger('change');*/
        /*$element.on('input', function() {
        	
        	var outputVal = this.value ; 
        	outputVal  = outputVal.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");	
            $output[0].value = outputVal;
            var $previous = $('#previous_'+minVal);    
            var perc = 0,n1,n2;
            if($previous[0] != undefined && $output[0] != undefined){
            	
            	//console.log($output[0].innerHTML);
            	//console.log($previous[0].innerHTML);
             	
            perc = (((parseInt($output[0].value.replace(/,/g, ""))- parseInt($previous[0].innerHTML.replace(/,/g, "")))/(parseInt($previous[0].innerHTML.replace(/,/g, ""))))*100);
            console.log(perc);	
            perc = perc.toFixed(2);
            	if(perc.toString().indexOf(".") != -1){
                    n1 = perc.toString().split('.');
                    n2 = n1[1]|| null;
                    n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");          
                    perc = n2 ? n1 + '.' + n2 : n1 +'.';
                 }else{
                	 n1 = perc.toString();
                     n1 = n1.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                     perc = n1;      
                 }
          
            $('#percentage_'+minVal).html(perc+"%"); 
            $output[0].value = $output[0].value;
            }
        });

        // create an observer instance
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes') {
                    $element.rangeslider('update', true);
                   //$output[0].value = '-';
                }
            });
        });

        observer.observe($element[0], {
            attributes: true
        });*/

        /*$('input[type=text]').on('input', function() {
            $element[0].setAttribute(this.name, this.value);
        });*/

    }






    // **********************************recalculate the score*********************************** 

    $scope.getRecalculateRatingData = function() {
        var jsonData = {},
            name = "",
            value = "",
            name1 = "",
            value1 = "",
            name2 = "",
            value2 = "",
            name3 = "",
            value3 = "";
        var completeJson = {},
            jsonData1 = {},
            jsonInnerData = {};

        angular.forEach($scope.companyData, function(value, key) {
            jsonData1 = {};
            name = value.group;
            angular.forEach(value.param, function(v2, k2) {
                jsonInnerData = {};
                if (v2['slider'] == 'Y') {
                    console.log(v2['slider']);
                    if (angular.element(document.querySelector('#' + v2['name'])).html() != undefined) {
                        //console.log(k2+" = "+angular.element(document.querySelector('#'+v2['name'])).html());
                        name1 = "name";
                        value1 = angular.element(document.querySelector('#' + v2['name'])).html();
                        name2 = "label";
                        value2 = v2['label'];
                        name3 = "currentVal";
                        value3 = v2['name'];
                        jsonInnerData[name1] = value1;
                        jsonInnerData[name2] = value2;
                        jsonInnerData[name3] = value3;
                        console.log(jsonInnerData)
                        jsonData1[k2] = jsonInnerData;
                        completeJson[name] = jsonData1;

                        //console.log(jsonData1);
                    }
                }
            })
        })

        $scope.sliderData = completeJson;
        console.log(completeJson);
        var facilityArray = [];
        jsonData['facility'] = facilityArray;
        jsonData['industryId'] = $scope.industryId;
        angular.forEach($scope.companyData, function(value, key) {
            angular.forEach(value.param, function(v2, k2) {
                if (v2['slider'] == 'Y') {
                    if (angular.element(document.querySelector('#' + v2['name'])).html() != undefined) {
                        name = v2['name'];
                        value = angular.element(document.querySelector('#' + v2['name'])).html();
                        jsonData[name] = value;
                    }
                }
                if (v2['slider'] == 'N') {
                    if (angular.element(document.querySelector('#' + v2['name'])).val() != undefined) {
                        name = v2['name'];
                        value = angular.element(document.querySelector('#' + v2['name'])).val();
                        jsonData[name] = value;
                    }
                }
                if (v2['slider'] == null) {
                    if (angular.element(document.querySelector('#' + v2['name'])).val() != undefined) {
                        name = v2['name'];
                        value = angular.element(document.querySelector('#' + v2['name'])).val();
                        jsonData[name] = value;
                    }
                }

            })
        })

        console.log(jsonData);
        $window.sessionStorage.setItem('CompleteDataForCalculation', JSON.stringify(jsonData));
        $('#recalculate-confirm').modal('show');

        console.log("modal is already opened");


        angular.forEach($scope.sliderData.SLIDER, function(val, i) {
            console.log(angular.element(document.querySelector('#input-G192')).html());
            angular.element(document.querySelector('#' + val.currentVal)).html(val.name);
        })
        console.log(angular.element(document.querySelector('#input-G192')).html());
    }


    $scope.recalculateScore = function(ratingId) {
        //alert("Inside dashboard controller = "+ratingId);
        $window.sessionStorage.setItem('ratingId', ratingId);
        $state.go("scoreDashboardState", { status: 'rating' });
    }


    $scope.recalculateRating = function() {
        var companyData = $window.sessionStorage.getItem("CompleteDataForCalculation");
        var parseData = JSON.parse(companyData);
        $('#recalculate-confirm').modal('hide');
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

    $scope.initRecalculateCircle = function() {
        console.log("init");
        $('#recalculateScore').circleProgress({
            value: parseInt($scope.score) / 100,
            size: 110,
            fill: {
                gradient: ["#0057ff", "#00ceed"]
            }
        });

    }


    $scope.initializeProgressCircle = function() {
        //console.log("hello");	
        $('#circle1').circleProgress({
            value: parseInt($scope.score) / 100,
            size: 70,
            fill: {
                gradient: ["#0057ff", "#00ceed"]
            }
        });
        $('#circle2').circleProgress({
            value: 0.30,
            size: 70,
            fill: {
                gradient: ["#0057ff", "#00ceed"]
            }
        });
        $('#circle3').circleProgress({
            value: 0.90,
            size: 70,
            fill: {
                gradient: ["#0057ff", "#00ceed"]
            }
        });
        $('#circle4').circleProgress({
            value: 0.70,
            size: 70,
            fill: {
                gradient: ["#0057ff", "#00ceed"]
            }
        });
        $('#circle5').circleProgress({
            value: 0.35,
            size: 70,
            fill: {
                gradient: ["#0057ff", "#00ceed"]
            }
        });
        $('#circle6').circleProgress({
            value: 0.10,
            size: 70,
            fill: {
                gradient: ["#0057ff", "#00ceed"]
            }
        });
    }


    // *********************highchart(graph) API************************
    $scope.highchartValue = "";
    callAjaxService.callAjaxFunction("csn/get/score/chart/values/" + companyId, "GET", { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        if (response.Data.resp_code == "CS1002") {
            console.log(response);
            $scope.highchartValue = response.Data.data;
            $window.sessionStorage.setItem('highChartValues', JSON.stringify(response.Data.data));
            $scope.chart = {
                options: {
                    chart: {
                        height: '40%',
                        width: 750,
                        // title:"romal",
                        // polar: true,
                    },
                    yAxis: {
                        max: 10,
                        min: -10,
                    },
                    xAxis: {
                        categories: ["CR", "CR/TN", "DR/TN", "S/A", "S/NWC", "ICR", "D/E", "FA/NW", "OPR",
                            "NPR", "RONW", "ROCE"
                        ],
                        offset: -104,
                        tickmarkPlacement: 'on',
                        lineWidth: 0,
                        labels: {
                            enabled: true,
                            formatter: function() {
                                if (this.value == 'CR') {
                                    return '<span title="Current Ratio">' + this.value + '</span>';
                                }
                                if (this.value == 'CR/TN') {
                                    return '<span title="Creditors Turnover">' + this.value + '</span>';
                                }
                                if (this.value == 'DR/TN') {
                                    return '<span title="Debtors Turnover">' + this.value + '</span>';
                                }
                                if (this.value == 'S/A') {
                                    return '<span title="Sales to Assets">' + this.value + '</span>';
                                }
                                if (this.value == 'S/NWC') {
                                    return '<span title="Sales to Net Working Capital">' + this.value + '</span>';
                                }
                                if (this.value == 'ICR') {
                                    return '<span title="Interest Coverage Ratio">' + this.value + '</span>';
                                }
                                if (this.value == 'D/E') {
                                    return '<span title="Debt-Equality Ratio">' + this.value + '</span>';
                                }
                                if (this.value == 'FA/NW') {
                                    return '<span title="Fixed Assets to NetWorth Ratio">' + this.value + '</span>';
                                }
                                if (this.value == 'OPR') {
                                    return '<span title="Operating Profit Ratio">' + this.value + '</span>';
                                }
                                if (this.value == 'NPR') {
                                    return '<span title="Net Profit Margin Ratio">' + this.value + '</span>';
                                }
                                if (this.value == 'RONW') {
                                    return '<span title="Return on Net Worth">' + this.value + '</span>';
                                }
                                if (this.value == 'ROCE') {
                                    return '<span title="Return on Capital Employed">' + this.value + '</span>';
                                }

                            },
                            useHTML: true,
                        },

                        crosshair: true // hover effect 
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px"><b>{point.x}</b></span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y}</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true, // hover effect 
                        useHTML: true
                    },

                },
                series: [{
                    name: 'Company Data',
                    type: 'column',
                    color: '#005E9A',
                    marker: {
                        lineWidth: 1,
                        lineColor: '#005E9A',
                        fillColor: '#005E9A',
                    },
                    data: [simpleServices.getValue('CR'), simpleServices.getValue('APD'),
                        simpleServices.getValue('CPD'), simpleServices.getValue('STA'), simpleServices.getValue('SNWC'), simpleServices.getValue('ICR'), simpleServices.getValue('DER'), simpleServices.getValue('FANR'), simpleServices.getValue('OPR'), simpleServices.getValue('NPMR'), simpleServices.getValue('RNW'), simpleServices.getValue('RCE')
                    ],
                }, {
                    name: 'Benchmark',
                    type: 'line',
                    color: '#F95A1E',
                    marker: {
                        lineWidth: 1,
                        lineColor: '#F95A1E',
                        fillColor: '#F95A1E'
                    },
                    data: [simpleServices.getValue('CR_B'), simpleServices.getValue('APD_B'), simpleServices.getValue('CPD_B'),
                        simpleServices.getValue('STA_B'), simpleServices.getValue('SNWC_B'), simpleServices.getValue('ICR_B'), simpleServices.getValue('DER_B'), simpleServices.getValue('FANR_B'), simpleServices.getValue('OPR_B'),
                        simpleServices.getValue('NPMR_B'), simpleServices.getValue('RNW_B'), simpleServices.getValue('RCE_B')
                    ],
                }]
            }
        } else {

        }
    }, function errorCallback(response) {
        console.log(response);
    })

    $scope.items = "10";
    $scope.changeItems = function(items) {
        $scope.itemsPerPage = items;
    }

    $scope.deleteReportHistory = function(ratingId) {
        //loader stops
        ///$scope.dataLoading = true;
        // Remove our overflow hidden class on loading
        bodyRef.addClass('ovh');
        callAjaxService.callAjaxFunction("csn/delete/request/reporthistory/" + ratingId, 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
            if (response.Data.resp_code == "CS1002") {
                //loader stops
                //$scope.dataLoading = false;
                // Remove our overflow hidden class on loading
                bodyRef.removeClass('ovh');
                $state.go($state.current, {}, { reload: true });
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }







}])