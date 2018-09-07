scoremeapp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    // use the HTML5 History API & set HTM5 mode true
    // $locationProvider.html5Mode(true);

    $stateProvider
    /*.state('firstPageState', {
		  url: '/index',
		  templateUrl : "../index.html",
		  controller:function($window){  				
			  $window.scrollTo(0,0);		  
			  $('#myCarousel').carousel({
			        interval:3000,
			        pause: "false"
			    });		  
			 }		      
		}) */
        .state('signInState', {
            url: '/signin',
            templateUrl: "../score-htmls/signin.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
                $('#myCarousel').carousel({
                    interval: 3000,
                    pause: "false"
                });
            }]
        })
        .state('signUpState', {
            url: '/signup',
            templateUrl: "../score-htmls/signup.html",
            controller: ['$window', function($window) {
                $window.sessionStorage.setItem("backScoreData", false);
                $window.scrollTo(0, 0);
                $('#myCarousel').carousel({
                    interval: 3000,
                    pause: "false"
                });
            }]
        })

    .state('introductoryPageState', {
        url: '/intro',
        templateUrl: "../score-htmls/extra/introductory.html",
        controller: ['$window', function($window) {
            //  $window.sessionStorage.setItem("backScoreData" ,false);
            $window.scrollTo(0, 0);
        }]
    })

    .state('verifyMobileState', {
            url: '/verifyno/:mobileNo/:email',
            templateUrl: "../score-htmls/extra/verify-no.html",
            controller: ['$window', function($window) {
                $window.sessionStorage.setItem("backScoreData", false);
                $window.scrollTo(0, 0);
                $('#myCarousel').carousel({
                    interval: 3000,
                    pause: "false"
                });
            }]
        })
        .state('resetPasswordState', {
            url: '/resetpassword',
            templateUrl: "../score-htmls/extra/reset-password.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
                $window.sessionStorage.setItem("backScoreData", false);
            }]
        })
        .state('addEntityState', {
            url: '/addentity',
            templateUrl: "../score-htmls/extra/add-entity.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
                $window.sessionStorage.setItem("backScoreData", false);
            }]
        })
        .state('manageEntityState', {
            url: '/manageentity',
            templateUrl: "../score-htmls/extra/manage-entity.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
                $window.sessionStorage.setItem("backScoreData", false);
            }]
        })
        .state("changePasswordState", {
            url: '/changepassword',
            templateUrl: "../score-htmls/extra/change-password.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
                $window.sessionStorage.setItem("backScoreData", false);
            }]
        })
        .state("mainDashboardState", {
            /*url: '/dashboard-content/dashboard',
        templateUrl : "../dashboard-content/dashboard/",*/
            url: '/maindashboard',
            templateUrl: "../score-htmls/extra/dashboard.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
                $window.sessionStorage.setItem("backScoreData", false);
            }]
        })
        .state("collapseOneState", {
            url: '#collapseOne',
        })
        .state("collapseTwoState", {
            url: '#collapseTwo',
        })
        .state("collapseThreeState", {
            url: '#collapseThree',
        })
        .state("collapseFourState", {
            url: '#collapseFour',
        })

    .state("scoreDashboardState", {
            url: '/ratingpage/:status',
            templateUrl: "../score-htmls/score/rating-page.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
                $('[data-toggle="tooltip"]').tooltip();

                $('#score-rating').circleProgress({
                    value: 0.60,
                    size: 140,
                    fill: {
                        gradient: ["#0057ff", "#00ceed"]
                    }
                });
                $('#circle_scoredash').circleProgress({
                    value: 0 / 100,
                    size: 70,
                    fill: {
                        gradient: ["#0057ff", "#00ceed"]
                    }
                });

                var slideCount = $('#slider ul li').length;
                var slideWidth = $('#slider ul li').width();
                var slideHeight = $('#slider ul li').height();
                var sliderUlWidth = slideCount * slideWidth;

                $('#slider').css({
                    width: slideWidth,
                    height: slideHeight
                });

                $('#slider ul').css({
                    width: sliderUlWidth,
                    marginLeft: -slideWidth
                });

                $('#slider ul li:last-child').prependTo('#slider ul');

                function moveLeft() {
                    $('#slider ul').animate({
                        left: +slideWidth
                    }, 200, function() {
                        $('#slider ul li:last-child').prependTo('#slider ul');
                        $('#slider ul').css('left', '');
                    });
                };

                function moveRight() {
                    $('#slider ul').animate({
                        left: -slideWidth
                    }, 200, function() {
                        $('#slider ul li:first-child').appendTo('#slider ul');
                        $('#slider ul').css('left', '');
                    });
                };

                $('a.control_prev').click(function() {
                    moveLeft();
                });

                $('a.control_next').click(function() {
                    moveRight();
                });
            }]
        })
        .state("companyInformationState", {
            url: '#companyInformation',
        })
        .state("facilitiesState", {
            url: '#facilities',
        })
        .state("companyLabelState0", {
            url: '#companyLabel0',
        })
        .state("companyLabelState1", {
            url: '#companyLabel1',
        })
        .state("companyLabelState2", {
            url: '#companyLabel2',
        })
        .state("companyLabelState3", {
            url: '#companyLabel3',
        })
        .state("companyLabelState4", {
            url: '#companyLabel4',
        })
        .state("companyLabelState5", {
            url: '#companyLabel5',
        })
        .state("companyLabelState6", {
            url: '#companyLabel6',
        })
        .state("companyLabelState7", {
            url: '#companyLabel7',
        })
        .state("companyLabelState8", {
            url: '#companyLabel8',
        })
        .state("companyLabelState9", {
            url: '#companyLabel9',
        })
        .state("scoreConfirmDashboardState", {
            url: '/scoreme/index.html',
            templateUrl: "../score-htmls/score/score-confirmation.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
            }]
        })
        .state("draftConfirmDashboardState", {
            url: '/draftconfir',
            templateUrl: "../score-htmls/score/draft-confirmation.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
            }]
        })
        .state("scoreAnalysisDashboardState", {

            url: '/scoreanalysis',
            templateUrl: "../score-htmls/score/score-analysis.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
                var count = 1;
                var t1 = setTimeout(function() {
                    $("#slide1").css('display', 'block');
                    $('.progress-bar').css('width', '0%');

                    $('#percentage').css('display', 'block');
                    $('#percentage').text("0%");

                    $('div.tip span').css('left', '-2%');
                    $('div.tip span').css('  transition', ' width .35s ease-in-out');

                }, 1000);
                var t2 = setTimeout(function() {
                    $("#slide1").css('display', 'none');
                    $("#slide2").css('display', 'block');
                    $("#progress-steps>span#count").html(count);
                    $('.progress-bar').css('width', '0%');
                    $('#percentage').css('display', 'block');
                    $('#percentage').text("0%");

                    $('div.tip span').css('left', '-2%');
                    $('div.tip span').css('  transition', ' width .35s ease-in-out');


                }, 2000);
                var t3 = setTimeout(function() {
                    $("#slide2").css('display', 'none');
                    $("#slide3").css('display', 'block');
                    $(".filler-container>ul>li>div.step1").css('background-color', '#00e9a4');
                    count = count + 1;
                    $("#progress-steps>span#count").html(count);
                    $('.progress-bar').css('width', '20%');
                    $('#percentage').css('display', 'block');
                    $('#percentage').text("20%");

                    $('div.tip span').css('left', '17%');
                    $('div.tip span').css('  transition', ' width .35s ease-in-out');

                }, 10000);
                var t4 = setTimeout(function() {
                    $("#slide3").css('display', 'none');
                    $("#slide4").css('display', 'block');
                    $(".filler-container>ul>li>div.step2").css('background-color', '#00e9a4');
                    count = count + 1;
                    $("#progress-steps>span#count").html(count);
                    $('.progress-bar').css('width', '40%');
                    $('#percentage').css('display', 'block');
                    $('#percentage').text("40%");

                    $('div.tip span').css('left', '37%');
                    $('div.tip span').css('  transition', ' width .35s ease-in-out');

                }, 28000);
                var t5 = setTimeout(function() {
                    $("#slide4").css('display', 'none');
                    $("#slide5").css('display', 'block');
                    $(".filler-container>ul>li>div.step3").css('background-color', '#00e9a4');
                    count = count + 1;
                    $("#progress-steps>span#count").html(count);

                    $('.progress-bar').css('width', '60%');
                    $('#percentage').css('display', 'block');
                    $('#percentage').text("60%");

                    $('div.tip span').css('left', '57%');
                    $('div.tip span').css('  transition', ' width .35s ease-in-out');

                }, 34000);
                var t6 = setTimeout(function() {
                    $("#slide5").css('display', 'none');
                    $("#slide6").css('display', 'block');
                    $(".filler-container>ul>li>div.step4").css('background-color', '#00e9a4');
                    count = count + 1;
                    $("#progress-steps>span#count").html(count);
                    $('.progress-bar').css('width', '80%');
                    $('#percentage').css('display', 'block');
                    $('#percentage').text("80%");

                    $('div.tip span').css('left', '77%');
                    $('div.tip span').css('  transition', ' width .35s ease-in-out');

                }, 39000);
                var t7 = setTimeout(function() {
                    $("#closeup-txt").addClass('launch-txt');
                    $('.progress-bar').css('width', '90%');
                    $('#percentage').css('display', 'block');
                    $('#percentage').text("90%");

                    $('div.tip span').css('left', '87%');
                    $('div.tip span').css('  transition', ' width .35s ease-in-out');

                }, 50000);
            }]
        })
        .state("scoreResultDashboardState", {
            /*url: '/dashboard-content/scoreResult',
        templateUrl : "../dashboard-content/score-result/",	*/
            url: '/scoreresult',
            templateUrl: "../score-htmls/score/score-result.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
                $window.sessionStorage.setItem("backScoreData", false)
            }]
        })
        .state("scoreReportDashboardState", {
            /*url: '/dashboard-content/scoreReport',
        templateUrl : "../dashboard-content/score-report-history/",	*/
            url: '/scorereporthistory',
            templateUrl: "../score-htmls/score/score-report-history.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
                $window.sessionStorage.setItem("backScoreData", false)
            }]
        })
        .state("recalculateScoreDashboardState", {
            /*url: '/dashboard-content/recalculateScore',
        templateUrl : "../dashboard-content/recalculate-score/", */
            url: '/recalscore',
            templateUrl: "../score-htmls/score/recalculate-score.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
                $window.sessionStorage.setItem("backScoreData", false)
            }]
        })
        .state("bankStatementState", {
            /*url: '/dashboard-content/bankStatement',
        templateUrl : "../dashboard-content/bank-statement/",*/
            url: '/bankstat',
            templateUrl: "../score-htmls/bankstatement/bank-statement.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
                $window.sessionStorage.setItem("backScoreData", false)
            }]
        })
        .state("bankStatementReportState", {
            /*url: '/dashboard-content/bankStatementHistory',
        templateUrl : "../dashboard-content/bank-statement-process/",	*/
            url: '/bankstatprocess',
            templateUrl: "../score-htmls/bankstatement/bank-statement-process.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
                $window.sessionStorage.setItem("backScoreData", false)
            }]
        })
        .state("bankArchiveReportState", {
            url: '/bankarchivereport',
            templateUrl: "../score-htmls/bankstatement/bank-archive-report.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
                $window.sessionStorage.setItem("backScoreData", false)
            }]
        })
        .state("bankStatementDashboardState", {
            url: '/bankstatdashboard',
            templateUrl: "../score-htmls/bankstatement/bank-statement-dashboard.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
                $window.sessionStorage.setItem("backScoreData", false)
            }]
        })

    //admin panel routing starts
    .state("adminPanelState", {
            url: '/adminpanel',
            templateUrl: "../score-htmls/admin-panel.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
            }]
        })
        .state("industryState", {
            url: '#industry',
        })
        .state("businessState", {
            url: '#business',
        })
        .state("instituteState", {
            url: '#institute',
        })
        .state("userInstituteMappingState", {
            url: '#userInstituteMapping',
        })
        .state("creditScoreAdminState", {
            url: '#creditScore',
        })
        .state("bankStatementAdminState", {
            url: '#bankStatement',
        })

        //my new states starts here
        .state("gsGlobalSetUpState", {
            url: '#gsGlobalSetUp',
        })
        .state("smSystemManagementState", {
            url: '#smSystemManagement',
        })
        .state("iInstituteState", {
            url: '#iInstitute',
        })
        .state("pmProductManagementState", {
            url: '#pmProductManagement',
        })
        .state("ipIndustryTypeState", {
            url: '#ipIndustryType',
        })
        .state("btBusinessTypeState", {
            url: '#btBusinessType',
        })
        .state("csCreditScoreState", {
            url: '#csCreditScore',
        })
        .state("bsBankStatementState", {
            url: '#bsBankStatement',
        })
        .state("mManageState", {
            url: '#mManage',
        })
        .state("sSetupState", {
            url: '#sSetup',
        })
        .state("umUserManagementState", {
            url: '#umUserManagement',
        })
        .state("ppPricingPlanState", {
            url: '#ppPricingPlan',
        })
        .state("bBillingState", {
            url: '#bBilling',
        })
        .state("ppPrePaidState", {
            url: '#ppPrePaid',
        })
        .state("ppPostPaidState", {
            url: '#ppPostPaid',
        })
        .state("lLicenseState", {
            url: '#lLicense',
        })
        //my new states ends here

        // admin panel routing ends 

        // admin panel tc starts
        .state("adminPanelTcState", {
            url: '/adminpaneltc',
            templateUrl: "../score-htmls/admin-panel-tc.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
            }]
        })
        



        // admin panel tc ends
    .state("notificationState", {
            url: '/notify',
            templateUrl: "../score-htmls/notification.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
            }]
        })
        .state("pricingPlanState", {
            url: '/pricingplan',
            templateUrl: "../score-htmls/pricing-plan.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
            }]
        })
        .state("confirmationState", {
            url: '/confirm',
            templateUrl: "../score-htmls/confirmation.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
            }]
        })
        .state("errorState", {
            url: '/unautherr',
            templateUrl: "../score-htmls/error-pages/unauthorized-error.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
            }]
        })
        .state("internalServerErrorState", {
            url: '/internalerr',
            templateUrl: "../score-htmls/error-pages/internal-server-error.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
            }]
        })
        .state("noInternetErrorState", {
            url: '/nointerneterr',
            templateUrl: "../score-htmls/error-pages/no-internet-connection.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
            }]
        })
        .state("pageNotFoundErrorState", {
            url: '/pagenotfounderr',
            templateUrl: "../score-htmls/error-pages/pagenot-found.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
            }]
        })
        .state("accountState", {
            url: '/account',
            templateUrl: "../score-htmls/extra/account.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
            }]
        })
        .state("profileState", {
            url: '#profile',
        })
        .state("creditsState", {
            url: '#credits',
        })
        .state("billingAddressState", {
            url: '#billingAddress',
        })
        .state("billingHistoryState", {
            url: '#billingHistory',
        })
        .state("billingAccountState", {
            url: '/billingadd',
            templateUrl: "../score-htmls/extra/billing-address.html",
            controller: ['$window', function($window) {
                $window.scrollTo(0, 0);
            }]
        })

    .state("userDashboardState", {
        url: '/userdashboard',
        templateUrl: "../score-htmls/user-dashboard.html",
        controller: ['$window', function($window) {
            $window.scrollTo(0, 0);
            $(".contact").click(function() {
                $(".contact").hide(100);
            });
            $(".contact").click(function() {
                $(".after-display").show(700);
            });
            $(".back-g").click(function() {
                $(".after-display").hide(100);
            });
            $(".back-g").click(function() {
                $(".contact").show(700);
            });
        }]
    })

    .state("userDashboardScoreTableState", {
        url: '/userdashscore',
        templateUrl: "../score-htmls/extra/user-dashboard-score-table.html",
        controller: ['$window', function($window) {
            $window.scrollTo(0, 0);
        }]
    })

    .state("userDashboardBankTableState", {
        url: '/userdashbank',
        templateUrl: "../score-htmls/extra/user-dashboard-bank-table.html",
        controller: ['$window', function($window) {
            $window.scrollTo(0, 0);
        }]
    })


}]);