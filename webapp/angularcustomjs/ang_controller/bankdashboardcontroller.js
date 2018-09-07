/*
 * @author Romal Singla
 */

scoremeapp.controller('bankDashboardController', ['callAjaxService', 'commonServices', 'simpleServices', '$window', '$scope', '$location', '$state', '$stateParams', '$rootScope', 'Upload', '$timeout', '$http', '$document', function(callAjaxService, commonServices, simpleServices, $window, $scope, $location, $state, $stateParams, $rootScope, Upload, $timeout, $http, $document) {

    var companyId = $window.sessionStorage.getItem("companyId");
    //$('#loadingBar').css("display","block");
    // Register a body reference to enable/disable body scroll
    var bodyRef = angular.element($document[0].body);

    //loader starts
    $scope.dataLoading = true;
    // Add our overflow hidden class on loading
    bodyRef.addClass('ovh');


    // get acc number
    callAjaxService.callAjaxFunction("csn/get/accountNumber/by/companyId/" + companyId, 'GET', { 'Content-Type': 'application/json; charset=utf-8' }, "").then(function successCallback(response) {
        if (response.Data.resp_code = 'CS1002') {

            $scope.dataLoading = false;
            console.log(response);
            console.log(response.Data.data);
            var eodData = "";

            $scope.accountNumberList = response.Data.accList;
            $scope.firstAccountNumber = response.Data.accList[0];

            $scope.inhouseDebit = response.Data.data.inhouseDebit;
            $scope.inhouseCredit = response.Data.data.inhouseCredit;
            $scope.inhouseCreditCount = response.Data.data.inhouseCreditCount;
            $scope.inhouseDebitCount = response.Data.data.inhouseDebitCount;

            $scope.creditAmount = response.Data.data.creditAmount;
            $scope.debitAmount = response.Data.data.debitAmount;
            $scope.totalCreditCount = response.Data.data.totalCreditCount;
            $scope.totalDebitCount = response.Data.data.totalDebitCount;

            $scope.icreTurnCredit = response.Data.data.icreTurnCredit;
            $scope.icreTurnDebit = response.Data.data.icreTurnDebit;
            $scope.totalICReturnUnit = response.Data.data.totalICReturnUnit;
            $scope.totalOcrUnit = response.Data.data.totalOcrUnit;

            $scope.validatedCount = response.Data.data.fileStatusDTO.validatedCount;
            $scope.convertedCount = response.Data.data.fileStatusDTO.convertedCount;
            $scope.completedCount = response.Data.data.fileStatusDTO.completedCount;

            var resp = response.Data.data;
            console.log("iiii = " + response.Data.averageUtilization);
            if (response.Data.averageUtilization != undefined || response.Data.limitOverDrawn != undefined || response.Data.eodMonthKeyAndAverageValue != undefined) {
                $scope.averageUtilization = response.Data.averageUtilization;
                $scope.limitOverDrawn = response.Data.limitOverDrawn;
                eodData = response.Data.eodMonthKeyAndAverageValue;
            } else {
                $scope.averageUtilization = 0;
                $scope.limitOverDrawn = 0;
                eodData = null;
            }
            console.log(eodData['Jan'])

            //*************** debit chart ****************		
            $scope.debitChart = {
                options: {
                    chart: {
                        height: '50%',
                        width: 500,
                        marginTop: 50,
                        //marginLeft:50,
                        polar: true,
                    },
                    yAxis: {
                        min: 0,
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px;"><b>{point.x}</b></span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>INR {point.y:,.0f}</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true, // hover effect 
                        useHTML: true
                    },
                    pane: {
                        size: '80%'
                    },

                    xAxis: {
                        categories: ['Cash Withdrawal', 'Cheque Payment', 'Online Payment', 'Loan', 'Interest', 'Others'],
                        tickmarkPlacement: 'on',
                        lineWidth: 0,
                        crosshair: true // hover effect 
                    },
                    legend: {
                        align: 'right',
                        verticalAlign: 'top',
                        y: 70,
                        layout: 'vertical'
                    },
                },
                series: [{
                    name: 'Total Debits',
                    type: 'column',
                    color: '#005E9A',
                    marker: {
                        lineWidth: 1,
                        lineColor: '#005E9A',
                        fillColor: '#005E9A',
                    },
                    data: [resp.cashWithdrawDebit, resp.chequePaymentDebit, resp.onlinePaymentDebit, resp.loanDebit, resp.interestDebit, resp.othersDebit],
                    pointPlacement: 'between'
                }]
            }

            //************* credit chart **************	

            $scope.creditChart = {
                options: {
                    chart: {
                        height: '50%',
                        width: 500,
                        marginTop: 50,
                        //marginLeft:50,
                        polar: true,
                    },
                    yAxis: {
                        min: 0,
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px"><b>{point.x}</b></span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>INR {point.y:,.0f}</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true, // hover effect 
                        useHTML: true
                    },
                    pane: {
                        size: '80%'
                    },

                    xAxis: {
                        categories: ['Cash Deposit', 'Cheque Receipt', 'Online Receipt', 'Loan', 'Interest', 'Others'],
                        tickmarkPlacement: 'on',
                        lineWidth: 0,
                        crosshair: true // hover effect 
                    },
                    legend: {
                        align: 'right',
                        verticalAlign: 'top',
                        y: 70,
                        layout: 'vertical'
                    },
                },
                series: [{
                    name: 'Total Credits',
                    type: 'column',
                    color: '#F95A1E',
                    marker: {
                        lineWidth: 1,
                        lineColor: '#F95A1E',
                        fillColor: '#F95A1E',
                    },
                    data: [resp.cashWithdrawCredit, resp.chequePaymentCredit, resp.onlinePaymentCredit, resp.loanCredit, resp.interestCredit, resp.othersCredit],
                    pointPlacement: 'between'
                }]
            }

            //************* eod chart **************	
            if (eodData != null) {
                $scope.eodChart = {
                    options: {
                        chart: {
                            height: '30%',
                            width: 1000,
                            marginTop: 10
                        },
                        yAxis: {
                            // min : 0,

                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px"><b>{point.x}</b></span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>INR {point.y:,.0f}</b></td></tr>',
                            footerFormat: '</table>',
                            shared: true, // hover effect 
                            useHTML: true
                        },
                        pane: {
                            size: '80%'
                        },

                        xAxis: {
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            tickmarkPlacement: 'on',
                            lineWidth: 0,
                            labels: {
                                enabled: true,
                                formatter: function() {
                                    if (this.value == 'Dec') {
                                        return '<span title="December" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Jan') {
                                        return '<span title="January" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Feb') {
                                        return '<span title="February" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Mar') {
                                        return '<span title="March" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Apr') {
                                        return '<span title="April" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'May') {
                                        return '<span title="May" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Jun') {
                                        return '<span title="June" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Jul') {
                                        return '<span title="July" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Aug') {
                                        return '<span title="August" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Sep') {
                                        return '<span title="September" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Oct') {
                                        return '<span title="October" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Nov') {
                                        return '<span title="November" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Dec') {
                                        return '<span title="December" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                },
                                useHTML: true,
                            },
                            crosshair: true // hover effect 
                        },
                        legend: {
                            align: 'right',
                            verticalAlign: 'top',
                            y: 70,
                            layout: 'vertical'
                        },
                    },
                    series: [{
                        name: 'Average EOD',
                        type: 'line',
                        color: '#005E9A',
                        marker: {
                            lineWidth: 1,
                            lineColor: '#005E9A',
                            fillColor: '#005E9A',
                        },
                        data: [eodData['Jan'], eodData['Feb'], eodData['Mar'], eodData['Apr'], eodData['May'], eodData['Jun'], eodData['Jul'], eodData['Aug'], eodData['Sep'], eodData['Oct'], eodData['Nov'], eodData['Dec']],
                        pointPlacement: 'between'
                    }]
                }
            }
        } else {

        }
    }, function errorCallback(response) {
        console.log(response);
    })



    $scope.changeAccNumberData = function(accNumber) {
        $scope.dataLoading = true;
        $scope.firstAccountNumber = accNumber;
        $('.filter_dropdown_list_account').toggleClass('closeDropdown openDropdown');
        callAjaxService.callAjaxFunction("csn/get/accNumber/data/by/" + accNumber, 'GET', { 'Content-Type': 'application/json; charset=utf-8' }, "").then(function successCallback(response) {
            if (response.Data.resp_code = 'CS1002') {
                $scope.dataLoading = false;
                console.log(response);
                var eodData;
                console.log(response.Data.data);
                $scope.inhouseDebit = response.Data.data.inhouseDebit;
                $scope.inhouseCredit = response.Data.data.inhouseCredit;
                $scope.inhouseCreditCount = response.Data.data.inhouseCreditCount;
                $scope.inhouseDebitCount = response.Data.data.inhouseDebitCount;

                $scope.creditAmount = response.Data.data.creditAmount;
                $scope.debitAmount = response.Data.data.debitAmount;
                $scope.totalCreditCount = response.Data.data.totalCreditCount;
                $scope.totalDebitCount = response.Data.data.totalDebitCount;

                $scope.icreTurnCredit = response.Data.data.icreTurnCredit;
                $scope.icreTurnDebit = response.Data.data.icreTurnDebit;
                $scope.totalICReturnUnit = response.Data.data.totalICReturnUnit;
                $scope.totalOcrUnit = response.Data.data.totalOcrUnit;

                $scope.validatedCount = response.Data.data.fileStatusDTO.validatedCount;
                $scope.convertedCount = response.Data.data.fileStatusDTO.convertedCount;
                $scope.completedCount = response.Data.data.fileStatusDTO.completedCount;

                var resp = response.Data.data;
                console.log("iiii = " + response.Data.averageUtilization);
                if (response.Data.averageUtilization != undefined || response.Data.limitOverDrawn != undefined || response.Data.eodMonthKeyAndAverageValue != undefined) {
                    $scope.averageUtilization = response.Data.averageUtilization;
                    $scope.limitOverDrawn = response.Data.limitOverDrawn;
                    eodData = response.Data.eodMonthKeyAndAverageValue;
                } else {
                    $scope.averageUtilization = 0;
                    $scope.limitOverDrawn = 0;
                    eodData = null;
                }
                //console.log(eodData['Jan'])

                //*************** debit chart ****************		
                $scope.debitChart = {
                    options: {
                        chart: {
                            height: '50%',
                            width: 500,
                            marginTop: 50,
                            //marginLeft:50,
                            polar: true,
                        },
                        yAxis: {
                            min: 0,
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px;"><b>{point.x}</b></span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>INR {point.y:,.0f}</b></td></tr>',
                            footerFormat: '</table>',
                            shared: true, // hover effect 
                            useHTML: true
                        },
                        pane: {
                            size: '80%'
                        },

                        xAxis: {
                            categories: ['Cash Withdrawal', 'Cheque Payment', 'Online Payment', 'Loan', 'Interest', 'Others'],
                            tickmarkPlacement: 'on',
                            lineWidth: 0,
                            labels: {
                                enabled: true,
                                formatter: function() {
                                    if (this.value == 'Cash Withdrawal') {
                                        return '<span title="Cash Withdrawal" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Cheque Payment') {
                                        return '<span title="Cheque Payment" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Online Payment') {
                                        return '<span title="Online Payment" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Loan') {
                                        return '<span title="Loan" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Interest') {
                                        return '<span title="Interest" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Others') {
                                        return '<span title="Others" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                },
                                useHTML: true,
                            },
                            crosshair: true // hover effect 
                        },
                        legend: {
                            align: 'right',
                            verticalAlign: 'top',
                            y: 70,
                            layout: 'vertical'
                        },
                    },
                    series: [{
                        name: 'Total Debits',
                        type: 'column',
                        color: '#005E9A',
                        marker: {
                            lineWidth: 1,
                            lineColor: '#005E9A',
                            fillColor: '#005E9A',
                        },
                        data: [resp.cashWithdrawDebit, resp.chequePaymentDebit, resp.onlinePaymentDebit, resp.loanDebit, resp.interestDebit, resp.othersDebit],
                        pointPlacement: 'between'
                    }]
                }

                //************* credit chart **************	

                $scope.creditChart = {
                    options: {
                        chart: {
                            height: '50%',
                            width: 500,
                            marginTop: 50,
                            //marginLeft:50,
                            polar: true,
                        },
                        yAxis: {
                            min: 0,
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px"><b>{point.x}</b></span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>INR {point.y:,.0f}</b></td></tr>',
                            footerFormat: '</table>',
                            shared: true, // hover effect 
                            useHTML: true
                        },
                        pane: {
                            size: '80%'
                        },

                        xAxis: {
                            categories: ['Cash Deposit', 'Cheque Receipt', 'Online Receipt', 'Loan', 'Interest', 'Others'],
                            tickmarkPlacement: 'on',
                            lineWidth: 0,
                            labels: {
                                enabled: true,
                                formatter: function() {
                                    if (this.value == 'Cash Withdrawal') {
                                        return '<span title="Cash Withdrawal" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Cheque Payment') {
                                        return '<span title="Cheque Payment" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Online Payment') {
                                        return '<span title="Online Payment" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Loan') {
                                        return '<span title="Loan" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Interest') {
                                        return '<span title="Interest" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                    if (this.value == 'Others') {
                                        return '<span title="Others" style="color:#000"><b>' + this.value + '</b></span>';
                                    }
                                },
                                useHTML: true,
                            },
                            crosshair: true // hover effect 
                        },
                        legend: {
                            align: 'right',
                            verticalAlign: 'top',
                            y: 70,
                            layout: 'vertical'
                        },
                    },
                    series: [{
                        name: 'Total Credits',
                        type: 'column',
                        color: '#F95A1E',
                        marker: {
                            lineWidth: 1,
                            lineColor: '#F95A1E',
                            fillColor: '#F95A1E',
                        },
                        data: [resp.cashWithdrawCredit, resp.chequePaymentCredit, resp.onlinePaymentCredit, resp.loanCredit, resp.interestCredit, resp.othersCredit],
                        pointPlacement: 'between'
                    }]
                }

                //************* eod chart **************	
                //if(eodData != null){
                $scope.eodChart = {
                        options: {
                            chart: {
                                height: '30%',
                                width: 1000,
                                marginTop: 10
                            },
                            yAxis: {
                                // min : 0,

                            },
                            tooltip: {
                                headerFormat: '<span style="font-size:10px"><b>{point.x}</b></span><table>',
                                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                    '<td style="padding:0"><b>INR {point.y:,.0f}</b></td></tr>',
                                footerFormat: '</table>',
                                shared: true, // hover effect 
                                useHTML: true
                            },
                            pane: {
                                size: '80%'
                            },

                            xAxis: {
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                tickmarkPlacement: 'on',
                                lineWidth: 0,
                                labels: {
                                    enabled: true,
                                    formatter: function() {
                                        if (this.value == 'Dec') {
                                            return '<span title="December" style="color:#000"><b>' + this.value + '</b></span>';
                                        }
                                        if (this.value == 'Jan') {
                                            return '<span title="January" style="color:#000"><b>' + this.value + '</b></span>';
                                        }
                                        if (this.value == 'Feb') {
                                            return '<span title="February" style="color:#000"><b>' + this.value + '</b></span>';
                                        }
                                        if (this.value == 'Mar') {
                                            return '<span title="March" style="color:#000"><b>' + this.value + '</b></span>';
                                        }
                                        if (this.value == 'Apr') {
                                            return '<span title="April" style="color:#000"><b>' + this.value + '</b></span>';
                                        }
                                        if (this.value == 'May') {
                                            return '<span title="May" style="color:#000"><b>' + this.value + '</b></span>';
                                        }
                                        if (this.value == 'Jun') {
                                            return '<span title="June" style="color:#000"><b>' + this.value + '</b></span>';
                                        }
                                        if (this.value == 'Jul') {
                                            return '<span title="July" style="color:#000"><b>' + this.value + '</b></span>';
                                        }
                                        if (this.value == 'Aug') {
                                            return '<span title="August" style="color:#000"><b>' + this.value + '</b></span>';
                                        }
                                        if (this.value == 'Sep') {
                                            return '<span title="September" style="color:#000"><b>' + this.value + '</b></span>';
                                        }
                                        if (this.value == 'Oct') {
                                            return '<span title="October" style="color:#000"><b>' + this.value + '</b></span>';
                                        }
                                        if (this.value == 'Nov') {
                                            return '<span title="November" style="color:#000"><b>' + this.value + '</b></span>';
                                        }
                                        if (this.value == 'Dec') {
                                            return '<span title="December" style="color:#000"><b>' + this.value + '</b></span>';
                                        }
                                    },
                                    useHTML: true,
                                },
                                crosshair: true // hover effect 
                            },
                            legend: {
                                align: 'right',
                                verticalAlign: 'top',
                                y: 70,
                                layout: 'vertical'
                            },
                        },
                        series: [{
                            name: 'Average EOD',
                            type: 'line',
                            color: '#005E9A',
                            marker: {
                                lineWidth: 1,
                                lineColor: '#005E9A',
                                fillColor: '#005E9A',
                            },
                            data: [eodData['Jan'], eodData['Feb'], eodData['Mar'], eodData['Apr'], eodData['May'], eodData['Jun'], eodData['Jul'], eodData['Aug'], eodData['Sep'], eodData['Oct'], eodData['Nov'], eodData['Dec']],
                            pointPlacement: 'between'
                        }]
                    }
                    //  }				

            } else {
                show_p_notify('error', response.Data.resp_msg);
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }


    $scope.mySearchAccountNumberFunction = function(data) {
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






}])