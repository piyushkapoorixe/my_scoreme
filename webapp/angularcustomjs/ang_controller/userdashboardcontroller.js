/*
 * @author Romal Singla
 */

scoremeapp.controller('userDashboardController', ['callAjaxService', 'commonServices', 'simpleServices', '$window', '$scope', '$location', '$state', '$stateParams', '$rootScope', 'Upload', '$timeout', '$http', '$document', function(callAjaxService, commonServices, simpleServices, $window, $scope, $location, $state, $stateParams, $rootScope, Upload, $timeout, $http, $document) {
    //alert("helloooooooooo");
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
            console.log(response.Data.data);
            $scope.businessTypeData = response.Data.data;
        }
    });

    // ******* get Industry type *******
    $scope.getIndustryType = function(businessType) {
        var payload = "",
            url = "cs/get/industriesByID/" + businessType,
            method = 'GET',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            $scope.industryTypeData = response.Data.data;
        }, function errorCallback(response) {})
    }


    callAjaxService.callAjaxFunction("csn/get/userdashboard/default/default/default/default/default", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        if (response.Data.resp_code == "CS1002") {
            $window.sessionStorage.setItem('filter1', "");
            $window.sessionStorage.setItem('filter2', "");
            $window.sessionStorage.setItem('filter3', "");
            $window.sessionStorage.setItem('filter4', "");
            $window.sessionStorage.setItem('filter5', "");
            console.log(response.Data.data.bankstatement);

            $scope.dataLoading = false;
            console.log(response.Data.resp_msg);
            var scoreG, bankG;
            // acc summary
            if (response.Data.data.credits != undefined) {
                $scope.creditScore = response.Data.data.credits[1].balance;
                $scope.bankStatement = response.Data.data.credits[0].balance;
            }

            if (response.Data.data.accSummary != undefined) {
                $scope.totalEntities = response.Data.data.accSummary.totalEntity;
                $scope.totalGroupName = response.Data.data.accSummary.totalGroupName;
                $scope.scoreCalForEntities = response.Data.data.accSummary.scoreCalcEntity;
                $scope.bankStatementReportGenerated = response.Data.data.accSummary.bankReportGenerated;
            }

            if (response.Data.data.score != undefined || response.Data.data.bankstatement != undefined) {
                $scope.score = response.Data.data.score.scoreMeGrade;
                $scope.bank = response.Data.data.bankstatement.totalRequest;
                scoreG = response.Data.data.score.scoreMeGrade;
                bankG = response.Data.data.bankstatement;
            }

            console.log(bankG.completedRequest);
            console.log(bankG.totalRequest);

            if (response.Data.data.scorealldata != undefined || response.Data.data.bankstatementalldata != undefined) {
                $scope.scoreData = response.Data.data.scorealldata;
                $scope.bankStatementData = response.Data.data.bankstatementalldata;
            }

            //*************** score bar graph ****************		
            if (scoreG != null || scoreG != undefined) {
                console.log(scoreG);
                console.log(scoreG.ScoreMe1);
                $scope.scoreChart = {
                    options: {
                        chart: {
                            height: '30%',
                            width: 840,
                        },
                        yAxis: {
                            max: 50,
                            min: 0,
                            tickInterval: 5,
                        },
                        xAxis: {
                            categories: ["ScoreMe1", "ScoreMe2", "ScoreMe3", "ScoreMe4", "ScoreMe5", "ScoreMe6", "ScoreMe7", "ScoreMe8"],

                            labels: {
                                enabled: true,
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
                        name: 'Score Data',
                        type: 'column',
                        color: '#005E9A',
                        marker: {
                            lineWidth: 1,
                            lineColor: '#005E9A',
                            fillColor: '#005E9A',
                        },
                        //data:[bankG.totalRequest,bankG.completedRequest],
                        data: [scoreG.ScoreMe1, scoreG.ScoreMe2, scoreG.ScoreMe3, scoreG.ScoreMe4, scoreG.ScoreMe5, scoreG.ScoreMe6, scoreG.ScoreMe7, scoreG.ScoreMe8],
                        // data:[scoreG.ScoreMe1,scoreG.ScoreMe2,scoreG.ScoreMe3,scoreG.ScoreMe4,scoreG.ScoreMe5,scoreG.ScoreMe6,scoreG.ScoreMe7,scoreG.ScoreMe8],
                        // data: [scoreGraph[0].ScoreMe1,scoreGraph[1].ScoreMe2,scoreGraph[2].ScoreMe3,scoreGraph[3].ScoreMe4,scoreGraph[4].ScoreMe5,scoreGraph[5].ScoreMe6,scoreGraph[6].ScoreMe7,scoreGraph[7].ScoreMe8],	 
                    }]
                }
            }

            //************** bank statement graph ****************
            if (bankG != null || bankG != undefined) {

                console.log(bankG.completedRequest);
                console.log(bankG.totalRequest);

                $scope.bankChart = {
                    options: {
                        chart: {
                            height: '30%',
                            width: 840,
                        },
                        yAxis: {
                            max: 50,
                            min: 0,
                            tickInterval: 5,
                        },
                        xAxis: {
                            categories: ["Total Request", "Completed"],

                            labels: {
                                enabled: true,
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
                        name: 'Bank Data',
                        type: 'column',
                        color: '#F95A1E',
                        marker: {
                            lineWidth: 1,
                            lineColor: '#F95A1E',
                            fillColor: '#F95A1E'
                        },
                        //data:[scoreG.ScoreMe1,scoreG.ScoreMe2],
                        data: [bankG.totalRequest, bankG.completedRequest],
                        //data:[2,4],
                    }]
                }
            }
        } else {
            show_p_notify('error', response.Data.resp_msg);
        }
    }, function errorCallback(response) {
        console.log(response);
    })


    $scope.filterGraphs = function(filterMonth, filterBusiness, filterIndustry, filterAccountType, filterRange) {
        $scope.dataLoading = true;
        console.log(filterMonth + ',' + filterBusiness + ',' + filterIndustry + ',' + filterAccountType + ',' + filterRange);
        $window.sessionStorage.setItem('filter1', filterMonth);
        $window.sessionStorage.setItem('filter2', filterBusiness);
        $window.sessionStorage.setItem('filter3', filterIndustry);
        $window.sessionStorage.setItem('filter4', filterAccountType);
        $window.sessionStorage.setItem('filter5', filterRange);
        var url = "";

        if ((filterMonth == "" || filterMonth == undefined) && (filterBusiness == "" || filterBusiness == undefined) && (filterIndustry == "" || filterIndustry == undefined) && (filterAccountType == "" || filterAccountType == undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/userdashboard/default/default/default/default/default";
        } else if ((filterMonth != "" || filterMonth != undefined) && (filterBusiness == "" || filterBusiness == undefined) && (filterIndustry == "" || filterIndustry == undefined) && (filterAccountType == "" || filterAccountType == undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/userdashboard/default/" + filterMonth + "/default/default/default";
        } else if ((filterMonth == "" || filterMonth == undefined) && (filterBusiness != "" || filterBuiness != undefined) && (filterIndustry == "" || filterIndustry == undefined) && (filterAccountType == "" || filterAccountType == undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/userdashboard/business/default/" + filterBusiness + "/default/default";
        } else if ((filterMonth != "" || filterMonth != undefined) && (filterBusiness != "" || filterBusiness != undefined) && (filterIndustry == "" || filterIndustry == undefined) && (filterAccountType == "" || filterAccountType == undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/userdashboard/business/" + filterMonth + "/" + filterBusiness + "/default/default";
        } else if ((filterMonth == "" || filterMonth == undefined) && (filterBusiness != "" || filterBusiness != undefined) && (filterIndustry != "" || filterIndustry != undefined) && (filterAccountType == "" || filterAccountType == undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/userdashboard/industry/default/" + filterIndustry + "/default/default";
        } else if ((filterMonth != "" || filterMonth != undefined) && (filterBusiness != "" || filterBusiness != undefined) && (filterIndustry != "" || filterIndustry != undefined) && (filterAccountType == "" || filterAccountType == undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/userdashboard/industry/" + filterMonth + "/" + filterIndustry + "/default/default";
        } else if ((filterMonth == "" || filterMonth == undefined) && (filterBusiness == "" || filterBusiness == undefined) && (filterIndustry == "" || filterIndustry == undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/userdashboard/default/default/default/accType/" + filterAccountType;
        } else if ((filterMonth != "" || filterMonth != undefined) && (filterBusiness == "" || filterBusiness == undefined) && (filterIndustry == "" || filterIndustry == undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/userdashboard/default/" + filterMonth + "/default/accType/" + filterAccountType;
        } else if ((filterMonth == "" || filterMonth == undefined) && (filterBusiness != "" || filterBuiness != undefined) && (filterIndustry == "" || filterIndustry == undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/userdashboard/business/default/" + filterBusiness + "/accType/" + filterAccountType;
        } else if ((filterMonth != "" || filterMonth != undefined) && (filterBusiness != "" || filterBusiness != undefined) && (filterIndustry == "" || filterIndustry == undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/userdashboard/business/" + filterMonth + "/" + filterBusiness + "/accType/" + filterAccountType;
        } else if ((filterMonth == "" || filterMonth == undefined) && (filterBusiness != "" || filterBusiness != undefined) && (filterIndustry != "" || filterIndustry != undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/userdashboard/industry/default/" + filterIndustry + "/accType/" + filterAccountType;
        } else if ((filterMonth != "" || filterMonth != undefined) && (filterBusiness != "" || filterBusiness != undefined) && (filterIndustry != "" || filterIndustry != undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/userdashboard/industry/" + filterMonth + "/" + filterIndustry + "/accType/" + filterAccountType;
        } else if ((filterMonth == "" || filterMonth == undefined) && (filterBusiness == "" || filterBusiness == undefined) && (filterIndustry == "" || filterIndustry == undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange != "" || filterRange != undefined)) {
            url = "csn/get/userdashboard/default/default/default/" + filterAccountType + "/" + filterRange;
        } else if ((filterMonth != "" || filterMonth != undefined) && (filterBusiness == "" || filterBusiness == undefined) && (filterIndustry == "" || filterIndustry == undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange != "" || filterRange != undefined)) {
            url = "csn/get/userdashboard/default/" + filterMonth + "/default/" + filterAccountType + "/" + filterRange;
        } else if ((filterMonth == "" || filterMonth == undefined) && (filterBusiness != "" || filterBuiness != undefined) && (filterIndustry == "" || filterIndustry == undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange != "" || filterRange != undefined)) {
            url = "csn/get/userdashboard/business/default/" + filterBusiness + "/" + filterAccountType + "/" + filterRange;
        } else if ((filterMonth != "" || filterMonth != undefined) && (filterBusiness != "" || filterBusiness != undefined) && (filterIndustry == "" || filterIndustry == undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange != "" || filterRange != undefined)) {
            url = "csn/get/userdashboard/business/" + filterMonth + "/" + filterBusiness + "/" + filterAccountType + "/" + filterRange;
        } else if ((filterMonth == "" || filterMonth == undefined) && (filterBusiness != "" || filterBusiness != undefined) && (filterIndustry != "" || filterIndustry != undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange != "" || filterRange != undefined)) {
            url = "csn/get/userdashboard/industry/default/" + filterIndustry + "/" + filterAccountType + "/" + filterRange;
        } else if ((filterMonth != "" || filterMonth != undefined) && (filterBusiness != "" || filterBusiness != undefined) && (filterIndustry != "" || filterIndustry != undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange != "" || filterRange != undefined)) {
            url = "csn/get/userdashboard/industry/" + filterMonth + "/" + filterIndustry + "/" + filterAccountType + "/" + filterRange;
        }


        callAjaxService.callAjaxFunction(url, 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {

            if (response.Data.resp_code == "CS1002") {

                console.log(response.Data.data.bankstatement);
                $scope.dataLoading = false;
                console.log(response.Data.response_msg);
                var scoreG, bankG;
                // acc summary
                if (response.Data.data.credits != undefined) {
                    $scope.creditScore = response.Data.data.credits[1].balance;
                    $scope.bankStatement = response.Data.data.credits[0].balance;
                }
                if (response.Data.data.accSummary != undefined) {
                    $scope.totalEntities = response.Data.data.accSummary.totalEntity;
                    $scope.totalGroupName = response.Data.data.accSummary.totalGroupName;
                    $scope.scoreCalForEntities = response.Data.data.accSummary.scoreCalcEntity;
                    $scope.bankStatementReportGenerated = response.Data.data.accSummary.bankReportGenerated;
                }
                if (response.Data.data.score != undefined || response.Data.data.bankstatement != undefined) {
                    $scope.score = response.Data.data.score; // for hide and show of score graph 
                    $scope.bank = response.Data.data.bankstatement; // for hide and show of bank graph 
                    scoreG = response.Data.data.score.scoreMeGrade;
                    bankG = response.Data.data.bankstatement;
                }

                if (response.Data.data.scorealldata != undefined || response.Data.data.bankstatementalldata != undefined) {
                    $scope.scoreData = response.Data.data.scorealldata;
                    $scope.bankStatementData = response.Data.data.bankstatementalldata;
                }


                //*************** score bar graph ****************		
                if (scoreG != null || scoreG != undefined) {
                    $scope.scoreChart = {
                        options: {
                            chart: {
                                height: '30%',
                                width: 840,
                            },
                            yAxis: {
                                max: 50,
                                min: 0,
                                tickInterval: 5,
                            },
                            xAxis: {
                                categories: ["Score 1", "Score 2", "Score 3", "Score 4", "Score 5", "Score 6", "Score 7", "Score 8"],

                                labels: {
                                    enabled: true,
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
                            name: 'Score Data',
                            type: 'column',
                            color: '#005E9A',
                            marker: {
                                lineWidth: 1,
                                lineColor: '#005E9A',
                                fillColor: '#005E9A',
                            },
                            data: [scoreG.ScoreMe1, scoreG.ScoreMe2, scoreG.ScoreMe3, scoreG.ScoreMe4, scoreG.ScoreMe5, scoreG.ScoreMe6, scoreG.ScoreMe7, scoreG.ScoreMe8],
                            //data: [scoreGraph.ScoreMe1,scoreGraph.ScoreMe2,scoreGraph.ScoreMe3,scoreGraph.ScoreMe4,scoreGraph.ScoreMe5,scoreGraph.ScoreMe6,scoreGraph.ScoreMe7,scoreGraph.ScoreMe8],	 
                        }]
                    }
                }
                //************** bank statement graph ****************
                if (bankG != null || bankG != undefined) {

                    $scope.bankChart = {
                        options: {
                            chart: {
                                height: '30%',
                                width: 840,
                            },
                            yAxis: {
                                max: 50,
                                min: 0,
                                tickInterval: 5,
                            },
                            xAxis: {
                                categories: ["Total Request", "Completed"],

                                labels: {
                                    enabled: true,
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
                            name: 'Bank Data',
                            type: 'column',
                            color: '#F95A1E',
                            marker: {
                                lineWidth: 1,
                                lineColor: '#F95A1E',
                                fillColor: '#F95A1E',
                            },

                            data: [bankG.totalRequest, bankG.completedRequest],
                        }]
                    }
                }
            } else {

            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }




    // bank statement graph	

    $scope.filterBankSGraphs = function(filterMonth, filterAccountType, filterRange) {
        console.log(filterMonth + ',' + filterAccountType + ',' + filterRange);
        //$window.sessionStorage.setItem('filter1',filterMonth);
        //$window.sessionStorage.setItem('filter2',filterBusiness);
        //$window.sessionStorage.setItem('filter3',filterIndustry);
        var url = "";
        if ((filterMonth == "" || filterMonth == undefined) && (filterAccountType == "" || filterAccountType == undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/filter/data/bankstatement/userdashboard/default/default/default";
        } else if ((filterMonth != "" || filterMonth != undefined) && (filterAccountType == "" || filterAccountType == undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/filter/data/bankstatement/userdashboard/default/" + filterMonth + "/default";
        } else if ((filterMonth == "" || filterMonth == undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/filter/data/bankstatement/userdashboard/accountType/default/" + filterAccountType;
        } else if ((filterMonth != "" || filterMonth != undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange == "" || filterRange == undefined)) {
            url = "csn/get/filter/data/bankstatement/userdashboard/accountType/" + filterMonth + "/" + filterAccountType;
        } else if ((filterMonth == "" || filterMonth == undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange != "" || filterRange != undefined)) {
            url = "csn/get/filter/data/bankstatement/userdashboard/" + filterAccountType + "/default/" + filterRange;
        } else if ((filterMonth != "" || filterMonth != undefined) && (filterAccountType != "" || filterAccountType != undefined) && (filterRange != "" || filterRange != undefined)) {
            url = "csn/get/filter/data/bankstatement/userdashboard/" + filterAccountType + "/" + filterMonth + "/" + filterRange;
        }
        callAjaxService.callAjaxFunction(url, 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {

            if (response.Data.resp_code == "CS1002") {

                var bankG;

                if (response.Data.data.bankstatement != undefined) {
                    $scope.bank = response.Data.data; // for hide and show of bank graph 
                    bankG = response.Data.data.bankstatement;
                }


                //************** bank statement graph ****************
                if (bankG != null || bankG != undefined || response.Data.data != "") {

                    $scope.bankChart = {
                        options: {
                            chart: {
                                height: '30%',
                                width: 840,
                            },
                            yAxis: {
                                max: 50,
                                min: 0,
                                tickInterval: 5,
                            },
                            xAxis: {
                                categories: ["Total Request", "Completed"],

                                labels: {
                                    enabled: true,
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
                            name: 'Bank Data',
                            type: 'column',
                            color: '#F95A1E',
                            marker: {
                                lineWidth: 1,
                                lineColor: '#F95A1E',
                                fillColor: '#F95A1E',
                            },

                            data: [bankG.totalRequest, bankG.completedRequest],
                        }]
                    }
                }
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }



    $scope.filterScoreSGraphs = function(filterMonth, filterBusiness, filterIndustry) {

        console.log(filterMonth + ',' + filterBusiness + ',' + filterIndustry);

        var url = "";
        if ((filterMonth == "" || filterMonth == undefined) && (filterBusiness == "" || filterBusiness == undefined) && (filterIndustry == "" || filterIndustry == undefined)) {
            url = "csn/get/filter/data/score/userdashboard/default/default/default";
        } else if ((filterMonth != "" || filterMonth != undefined) && (filterBusiness == "" || filterBusiness == undefined) && (filterIndustry == "" || filterIndustry == undefined)) {
            url = "csn/get/filter/data/score/userdashboard/default/" + filterMonth + "/default";
        } else if ((filterMonth == "" || filterMonth == undefined) && (filterBusiness != "" || filterBuiness != undefined) && (filterIndustry == "" || filterIndustry == undefined)) {
            url = "csn/get/filter/data/score/userdashboard/business/default/" + filterBusiness;
        } else if ((filterMonth != "" || filterMonth != undefined) && (filterBusiness != "" || filterBusiness != undefined) && (filterIndustry == "" || filterIndustry == undefined)) {
            url = "csn/get/filter/data/score/userdashboard/business/" + filterMonth + "/" + filterBusiness;
        } else if ((filterMonth == "" || filterMonth == undefined) && (filterBusiness != "" || filterBusiness != undefined) && (filterIndustry != "" || filterIndustry != undefined)) {
            url = "csn/get/filter/data/score/userdashboard/industry/default/" + filterIndustry;
        } else if ((filterMonth != "" || filterMonth != undefined) && (filterBusiness != "" || filterBusiness != undefined) && (filterIndustry != "" || filterIndustry != undefined)) {
            url = "csn/get/filter/data/score/userdashboard/industry/" + filterMonth + "/" + filterIndustry;
        }

        callAjaxService.callAjaxFunction(url, 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {

            if (response.Data.resp_code == "CS1002") {

                console.log(response.Data.data.bankstatement);
                $scope.dataLoading = false;
                console.log(response.Data.response_msg);
                var scoreG;

                if (response.Data.data.score.scoreMeGrade != undefined) {
                    $scope.score = response.Data.data; // for hide and show of score graph  
                    scoreG = response.Data.data.score.scoreMeGrade;
                }

                //*************** score bar graph ****************		
                if (scoreG != null || scoreG != undefined) {
                    $scope.scoreChart = {
                        options: {
                            chart: {
                                height: '30%',
                                width: 840,
                            },
                            yAxis: {
                                max: 50,
                                min: 0,
                                tickInterval: 5,
                            },
                            xAxis: {
                                categories: ["Score 1", "Score 2", "Score 3", "Score 4", "Score 5", "Score 6", "Score 7", "Score 8"],

                                labels: {
                                    enabled: true,
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
                            name: 'Score Data',
                            type: 'column',
                            color: '#005E9A',
                            marker: {
                                lineWidth: 1,
                                lineColor: '#005E9A',
                                fillColor: '#005E9A',
                            },
                            data: [scoreG.ScoreMe1, scoreG.ScoreMe2, scoreG.ScoreMe3, scoreG.ScoreMe4, scoreG.ScoreMe5, scoreG.ScoreMe6, scoreG.ScoreMe7, scoreG.ScoreMe8],
                            //data: [scoreGraph.ScoreMe1,scoreGraph.ScoreMe2,scoreGraph.ScoreMe3,scoreGraph.ScoreMe4,scoreGraph.ScoreMe5,scoreGraph.ScoreMe6,scoreGraph.ScoreMe7,scoreGraph.ScoreMe8],	 
                        }]
                    }
                }
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }


    $scope.accountChange = function(periodFilter, accountType, od) {
        if (accountType == 'SAVING' || accountType == 'CURRENT' || accountType == 'CREDIT_CARD') {
            $scope.odLimit = "";
            od = "";
            $scope.filterBankSGraphs(periodFilter, accountType, od);
        } else {
            $scope.filterBankSGraphs(periodFilter, accountType, od);
        }
    }



}])