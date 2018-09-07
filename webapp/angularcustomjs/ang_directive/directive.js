scoremeapp.directive('addFacility', ['$compile', '$window', '$rootScope', function($compile, $window, $rootScope) {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            $scope.addAnotherFacility = function(count) {
                $scope.facilityDivCount = count;
                // if(count <= 5){
                var myElement = angular.element(document.querySelector('#facilityDiv'));
                console.log(myElement);
                var compiledHTML = $compile('<div class="col-md-12 m-top-20 pad-0">' +
                        '<div class="col-md-3 pad-0">' +
                        '<div class="field-box box-style-normal">' +
                        '<label class="app__label" ng-style={"visibility":name' + count + '?"visible":"hidden"}>Select Facility</label>' +
                        '<select class="input-setting input_style_select form-control" name="name' + count + '" id="name' + count + '" ng-model="name' + count + '">    ' +
                        '<option value=""  disabled hidden selected>Select Facility</option>' +
                        '<option value="Auto Loan">Auto Loan</option>' +
                        '<option value="Bank Guarantee">Bank Guarantee</option>' +
                        '<option value="Equipment Finance">Equipment Finance</option>' +
                        '<option value="Housing Loan">Housing Loan</option>' +
                        '<option value="Letter of Credit">Letter of Credit</option>' +
                        '<option value="Personal Loan">Personal Loan</option>' +
                        '<option value="Term Loan">Term Loan</option>' +
                        '<option value="WC Fund Based">WC Fund Based</option>' +
                        '</select>' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-md-3 pad-0">' +
                        '<div class="field-box box-style-normal">' +
                        '<label class="app__label" ng-style={"visibility":amount' + count + '?"visible":"hidden"}>Amount (In INR)</label>' +
                        '<input type="text" class="input-setting input__style2 form-control border-bot" id="amount' + count + '" name="amount' + count + '" ng-model="amount' + count + '" calculator-valid pre numeric-input placeholder="Amount (In INR)" />' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-md-3 pad-0">' +
                        '<div class="field-box box-style-normal">' +
                        '<label class="app__label" ng-style={"visibility":percent' + count + '?"visible":"hidden"}>ROI / Commission (in %)</label>' +
                        '<input type="text" class="input-setting input__style2 form-control border-bot" id="percent' + count + '" name="percent' + count + '" ng-model="percent' + count + '" pre placeholder="ROI / Commission (in %)" />' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-md-3 pad-0">' +
                        '<div class="field-box box-style-normal">' +
                        '<label class="app__label" ng-style={"visibility":bank' + count + '?"visible":"hidden"}>Bank Name</label>' +
                        '<select class="input-setting input_style_select form-control" name="bank' + count + '" id="bank' + count + '" ng-model="bank' + count + '">' +
                        '<option value="" disabled hidden selected>Bank Name</option>' +
                        '<option ng-repeat="b in bankNames.data" value="{{b.bankName}}">{{b.bankName}}</option>' +
                        '</select>' +
                        '</div>' +
                        '</div>' +
                        '</div>')
                    ($scope);
                myElement.append(compiledHTML);
            }
        }
    }
}]);


scoremeapp.directive("astrick", [function() {
    return {
        restrict: 'A',
        compile: ['element', function(element) {
            element.text(element.text() + "*");
        }]
    };
}]);

/*scoremeapp.directive("mandatory", function() {
    return {
        restrict: 'A',
        compile: function(element) {
           element.text(element.text() + "*");
        }
    };
 });*/

scoremeapp.directive("zeroValidation", [function() {
    return {
        restrict: "A",
        link: ['scope', 'elem', 'attrs', function(scope, elem, attrs) {
            var limit = parseInt(attrs.zeroValidation);
            angular.element(elem).on("keyup", function(event) {
                var currentVal = $(this).val();
                if (currentVal.length == 1 && (event.which == 48 || event.which == 96)) {
                    currentVal = currentVal.slice(0, -1);
                }
                $(this).val(currentVal);
            });
        }]
    }

}]);


scoremeapp.directive("pre", function() {
    return {
        link: ['scope', 'element', 'attributes', function(scope, element, attributes) {

            element.on("keyup", function() {
                var newVal = "",
                    n1 = "",
                    n2 = "";

                if (this.value != this.value.replace(/[^0-9,-.]/g, '')) {
                    this.value = this.value.replace(/[^0-9,-.]/g, '');
                    //console.log(this.value.slice(0,1));
                }

                if (this.value.length > 1) {

                    n1 = this.value.slice(0, 1);
                    n2 = this.value.slice(1, this.value.length);
                    n2 = n2.replace(/-/g, '');

                    n1 = n1 || "";
                    n2 = n2 || "";


                    newVal = n1 + n2;

                    console.log("if: " + newVal);
                    this.value = newVal;
                }

                console.log(newVal);



                if (this.value.slice(0, 1) == '-') {
                    console.log("------");
                    this.value = this.value.replace(this.value.slice(0, 1), '');
                }

            });

        }]
    };
});


scoremeapp.directive('numericInput', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: ['scope', 'element', 'attr', 'ngModelCtrl', function(scope, element, attr, ngModelCtrl) {
            function numericFormat(val) {
                if (val.length == 1) {
                    val = val;
                } else {
                    if (val.slice(0, 1) == 0) {
                        val = val.replace(val.slice(0, 1), '');
                    }
                }
                ngModelCtrl.$setViewValue(val);
                ngModelCtrl.$render();

                console.log("final replace: " + val);

                return val;

            }
            ngModelCtrl.$parsers.push(numericFormat);

        }]
    };
})


// account number formatting
/*scoremeapp.directive('accNumber',function() {
    return {
  	restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attr, ngModelCtrl) {
        function numericFormat(val) {
		   if(val.length == 1) {
			   if(val == " ")
				   val = val.replace(val, '');
			   else
			       val = val;
		   }else if(val.length > 1) {	   
			   if(val == " "){
				   val = val.replace(val, '');
			   }
			   else if(val.slice(0,8) == 00000000){
				   val = val.replace(val.slice(0,8), '');
			   } 
		   }
		   ngModelCtrl.$setViewValue(val);
           ngModelCtrl.$render();	
           console.log("final replace: "+ val);
           return val;
        }
        ngModelCtrl.$parsers.push(numericFormat);
        
      }
    };
})
*/




scoremeapp.directive('comma2decimal', [
    function() { // should be altered to suit your needs
        return function(input) {
            console.log(input);
            var ret = (input) ? input.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") : null;
            return parseFloat(ret);
        };
    }
]);


scoremeapp.directive('companyDropdown', function() {
    var controller = ['$scope', 'commonServices', '$state', '$window', '$rootScope', '$document', function($scope, commonServices, $state, $window, $rootScope, $document) {
        // Register a body reference to enable/disable body scroll
        var bodyRef = angular.element($document[0].body);
        //loader starts
        $scope.dataLoading = true;
        // Remove our overflow hidden class on loading
        bodyRef.addClass('ovh');
        commonServices.getAllPrimaryCompany().then(function successCallback(response) {
            if (response.Data.resp_code === 'CS1002') {
                //loader stops
                $scope.dataLoading = false;
                // Remove our overflow hidden class on loading
                bodyRef.removeClass('ovh');
                console.log(response.Data);
                $scope.primaryCompanyDropDown = response.Data.companiesbygroup;
                console.log($window.sessionStorage.getItem('companyId') + '-' + $window.sessionStorage.getItem('companyName') + '-' + $window.sessionStorage.getItem('flag'));
                //$scope.allPrimaryCompanies = $window.sessionStorage.getItem('companyId')+'-'+$window.sessionStorage.getItem('companyName')+'-'+$window.sessionStorage.getItem('flag');         
                $scope.allPrimaryCompanies = $window.sessionStorage.getItem('companyName');
                console.log($scope.allPrimaryCompanies);
            }
        });
        $scope.changeActiveCompanyId = function(id, name, flag) {
            c1 = id,
                c2 = name,
                c3 = flag;
            $window.sessionStorage.setItem('companyId', c1);
            $window.sessionStorage.setItem('companyName', c2);
            $window.sessionStorage.setItem('flag', c3);

            // if(c3 == 0){
            $state.go('mainDashboardState');
            // }	 
            $window.location.reload();
        }


        $scope.clickOnToggleButton = function() {
            $scope.outerLi = angular.element(document.getElementsByClassName('hamburger_menu_list_large'));
            var liCountLarge = $scope.outerLi.length;
            //alert(liCountLarge);	
            $scope.outerLi.removeClass('hideLi');
            $scope.outerLi.addClass('showLi');
            for (var i = 0; i < liCountLarge; i++) {
                $scope.innerLi = angular.element(document.getElementsByClassName('hamburger_menu_list_small' + i));
                var liCountSmall = $scope.innerLi.length;
                for (var j = 0; j < liCountSmall; j++) {
                    $scope.innerLi.eq(j).removeClass('hideLi');
                    $scope.innerLi.eq(j).addClass('showLi');
                }
            }
        }

        $scope.mySearchFunction = function(data) {
            console.log("*********************************** = " + data);
            var currentVal = data.toLowerCase();
            $scope.outerLi = angular.element(document.getElementsByClassName('hamburger_menu_list_large'));
            var liCountLarge = $scope.outerLi.length;

            if (currentVal.length >= 1) {
                $scope.outerLi.removeClass('showLi');
                $scope.outerLi.addClass('hideLi');

                for (var i = 0; i < liCountLarge; i++) {
                    console.log(liCountLarge);
                    var orgNameOuter = $scope.outerLi.eq(i).text().toLowerCase();
                    console.log("Outer = " + orgNameOuter);
                    $scope.innerLi = angular.element(document.getElementsByClassName('hamburger_menu_list_small' + i));
                    var liCountSmall = $scope.innerLi.length;

                    if (orgNameOuter.match(currentVal)) {
                        console.log("*****************")
                        $scope.outerLi.eq(i).removeClass('hideLi');
                        $scope.outerLi.eq(i).addClass('showLi');
                        $scope.innerLi.removeClass('hideLi');
                        $scope.innerLi.addClass('showLi');
                    }

                    for (var j = 0; j < liCountSmall; j++) {
                        var orgNameInner = $scope.innerLi.eq(j).text().toLowerCase();
                        // console.log("li name = "+orgNameInner);
                        if (orgNameInner.match(currentVal)) {
                            $scope.innerLi.eq(j).removeClass('hideLi');
                            $scope.innerLi.eq(j).addClass('showLi');
                        }
                    }

                }
            } else {
                $scope.outerLi.removeClass('hideLi');
                $scope.outerLi.addClass('showLi');
                for (var i = 0; i < liCountLarge; i++) {
                    $scope.innerLi = angular.element(document.getElementsByClassName('hamburger_menu_list_small' + i));
                    var liCountSmall = $scope.innerLi.length;
                    for (var j = 0; j < liCountSmall; j++) {
                        $scope.innerLi.eq(j).removeClass('hideLi');
                        $scope.innerLi.eq(j).addClass('showLi');
                    }
                }
            }
        }
    }];
    return {
        restrict: 'A',
        controller: controller,
    }
})





scoremeapp.directive('companyName', function() {
    var controller = ['$scope', 'commonServices', '$state', '$window', function($scope, commonServices, $state, $window) {
        if (sessionStorage.getItem('companyName') != null) {
            var companyN = $window.sessionStorage.getItem('companyName').split(" ");
            var c1, c2;
            if (companyN[0] != undefined) {
                c1 = companyN[0].substring(0, 1);
                $scope.companyName = c1;
            }
            if (companyN[1] != undefined) {
                c2 = companyN[1].substring(0, 1);
                $scope.companyName = c1 + c2;
            }
        }
        if ($window.sessionStorage.getItem('name') != null)
            $scope.fullName = $window.sessionStorage.getItem('name');
        if ($window.sessionStorage.getItem('userRole') != null)
            $scope.role = $window.sessionStorage.getItem('userRole');
        //alert($scope.role);

    }];
    return {
        restrict: 'A',
        controller: controller,
    }
})



scoremeapp.directive('ratingPdf', function() {
    var controller = ['$scope', 'commonServices', '$state', '$window', function($scope, commonServices, $state, $window) {
        $scope.getPdf = function(certificateUrl) {
            console.log(certificateUrl);
            $window.sessionStorage.setItem('reportUrl', certificateUrl);
            $state.go("scoreReportURLState");
        }
    }];
    return {
        restrict: 'A',
        controller: controller,
    }
})


scoremeapp.directive('alphabetOnly', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: ['scope', 'element', 'attr', 'ngModelCtrl', function(scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^a-zA-Z]/g, '');
                if (transformedInput !== text) {
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }]
    };
})


scoremeapp.directive('numbersOnly', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: ['scope', 'element', 'attr', 'ngModelCtrl', function(scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^0-9]/g, '');
                // transformedInput=transformedInput.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
                if (transformedInput !== text) {
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }]
    };
})


scoremeapp.directive('calculatorValid', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: ['scope', 'element', 'attr', 'ngModelCtrl', function(scope, element, attr, ngModelCtrl) {
            function fromUser(text) {


                console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++ = " + text);

                var n1, n2;
                var transformedInput = text.replace(/[^0-9.+,()-]/g, '');
                if (transformedInput.match(',')) {
                    transformedInput = transformedInput.replace(/,/g, "");
                }

                console.log(transformedInput.substring(0, 1));
                console.log(transformedInput.substring(1).indexOf("+"));
                //if((transformedInput.indexOf("+") != -1 || transformedInput.indexOf("-") != -1  || transformedInput.indexOf("(") != -1||transformedInput.indexOf(")") != -1)&&
                if ((transformedInput.substring(1).indexOf("+") != -1 || transformedInput.substring(1).indexOf("-") != -1 || transformedInput.substring(0, 1).indexOf("(") != -1 || transformedInput.substring(0, 1).indexOf(")") != -1)) {
                    // console.log("************************************** = "+transformedInput.substring(0,1).indexOf("+"));
                    transformedInput = transformedInput.replace(/,/g, "");
                } else {
                    //console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&= "+transformedInput.substring(0,1).indexOf("+"));
                    if (transformedInput.indexOf(".") != -1) {
                        n1 = transformedInput.split('.');
                        n2 = n1[1] || null;
                        n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                        console.log("n1 = " + n1);
                        transformedInput = n2 ? n1 + '.' + n2 : n1 + '.';
                        transformedInput = transformedInput;
                        console.log("last number = " + transformedInput);
                    } else {
                        console.log("without dot = " + transformedInput);
                        n1 = transformedInput;
                        console.log("n1 else = " + n1);
                        n1 = n1.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                        transformedInput = n1;
                        console.log("last number else = " + transformedInput);
                    }
                }

                if (transformedInput !== text) {
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }]
    };
})


scoremeapp.directive('passwordVerify', function() {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: ['scope', 'elem', 'attrs', 'ngModel', function(scope, elem, attrs, ngModel) {
            scope.$watch(attrs.ngModel, function() {
                var matches = scope.confirmPassword === scope.password;
                if (scope.confirmPassword != undefined && matches == true) {
                    scope.signupForm.confirmPassword.$setValidity('passwordVerify', true);
                } else if (scope.confirmPassword == undefined && matches == false) {
                    scope.signupForm.confirmPassword.$setValidity('passwordVerify', true);
                } else {
                    scope.signupForm.confirmPassword.$setValidity('passwordVerify', matches);
                }
                //}
            });
        }]
    };
});

scoremeapp.directive('passwordVerifyForChange', function() {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: ['scope', 'elem', 'attrs', 'ngModel', function(scope, elem, attrs, ngModel) {
            scope.$watch(attrs.ngModel, function() {
                var matches = scope.confirmPassword === scope.newPassword;
                if (scope.confirmPassword != undefined && matches == true) {
                    scope.changePasswordForm.confirmPassword.$setValidity('passwordVerifyForChange', true);
                } else if (scope.confirmPassword == undefined && matches == false) {
                    scope.changePasswordForm.confirmPassword.$setValidity('passwordVerifyForChange', true);
                } else {
                    scope.changePasswordForm.confirmPassword.$setValidity('passwordVerifyForChange', matches);
                }
            });
        }]
    };
});



//************************************************SCORE DIRECTIVE *******************************//

//***************************** excel upload for facility (SCORE)************************** 
scoremeapp.directive('importSheetJs', function() {
    return {
        restrict: 'A',
        link: ['scope', 'element', 'attrs', function(scope, element, attrs) {
            var onChangeFunc = scope.$eval(attrs.importSheetJs);
            element.bind('change', onChangeFunc);
        }]
    };
});

//***************************** calculator validation in score (SCORE)******************
scoremeapp.directive('calculatorValid', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: ['scope', 'element', 'attr', 'ngModelCtrl', function(scope, element, attr, ngModelCtrl) {
            function fromUser(text) {

                var n1, n2;
                var transformedInput = text.replace(/[^0-9.+,()-]/g, '');
                if (transformedInput.match(',')) {
                    transformedInput = transformedInput.replace(/,/g, "");
                }

                if ((transformedInput.substring(1).indexOf("+") != -1 || transformedInput.substring(1).indexOf("-") != -1 || transformedInput.substring(0, 1).indexOf("(") != -1 || transformedInput.substring(0, 1).indexOf(")") != -1)) {
                    transformedInput = transformedInput.replace(/,/g, "");
                } else {
                    if (transformedInput.indexOf(".") != -1) {
                        n1 = transformedInput.split('.');
                        n2 = n1[1] || null;
                        n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                        console.log("n1 = " + n1);
                        transformedInput = n2 ? n1 + '.' + n2 : n1 + '.';
                        transformedInput = transformedInput;
                        console.log("last number = " + transformedInput);
                    } else {
                        console.log("without dot = " + transformedInput);
                        n1 = transformedInput;
                        console.log("n1 else = " + n1);
                        n1 = n1.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                        transformedInput = n1;
                        console.log("last number else = " + transformedInput);
                    }
                }

                if (transformedInput !== text) {
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }]
    };
})

//**************************** when click on score sidebar tab (SCORE) *************** 
scoremeapp.directive('isRating', function() {
    var controller = ['$scope', '$state', '$window', function($scope, $state, $window) {
        var flag = $window.sessionStorage.getItem('flag');
        $scope.showHideScoreTab = function() {
            if (flag == 0) {
                $state.go('scoreDashboardState', { status: 'empty' })
            } else if (flag == 1) {
                $state.go('recalculateScoreDashboardState')
            }
        }
    }];
    return {
        restrict: 'A',
        controller: controller,
    }
})

//**********************************************BANK STATEMENT ********************************************//

//**************************** when click on bank statement sidebar tab (BANK STATEMENT) *************** 
scoremeapp.directive('isBankStatementCompleted', function() {
    var controller = ['$scope', '$state', '$window', function($scope, $state, $window) {
        var bankFlag = $window.sessionStorage.getItem('bankFlag');
        $scope.showHideBankTab = function() {
            if (bankFlag == 0) {
                $state.go('bankStatementState');
            } else if (bankFlag == 1) {
                $state.go('bankStatementDashboardState');
            }
        }
    }];
    return {
        restrict: 'A',
        controller: controller,
    }
})





//********************** setting modal in bankController (BANK STATEMENT)*******************************
scoremeapp.directive('modal', function() {
    return {
        template: '<div class="modal fade" id="Setting" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content modal_content_div">' +
            '<div class="closer">' +
            '<span data-dismiss="modal" aria-hidden="true">' +
            '<img src="../assets/images/close-lite.svg" width="15" draggable="false">' +
            '</span>' +
            '</div>' +
            '<div class="modal-header modal_header_div">' +
            '<div class="col-md-12 tc-box0">' +
            '<h1>Settings</h1>' +
            '</div>' +
            '</div>' +
            '<div class="modal-body modal_body_div pad-0" ng-transclude>' +
            '<div></div></div></div>',
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: true,
        link: ['scope', 'element', 'attrs', function postLink(scope, element, attrs) {
            scope.title = attrs.title;

            scope.$watch(attrs.visible, function(value) {
                if (value == true)
                    $(element).modal('show');
                else
                    $(element).modal('hide');
            });

            $(element).on('shown.bs.modal', function() {
                scope.$apply(function() {
                    scope.$parent[attrs.visible] = true;
                });
            });

            $(element).on('hidden.bs.modal', function() {
                scope.$apply(function() {
                    scope.$parent[attrs.visible] = false;
                });
            });
        }]
    };
});


//************************************************** GLOBAL DIRECTIVE *******************************
// ****************************global credits (GLOBAL)***********************
scoremeapp.directive('globalCredits', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        controller: ['$scope', 'commonServices', '$state', '$window', '$rootScope', '$document', 'callAjaxService', function($scope, commonServices, $state, $window, $rootScope, $document, callAjaxService) {
            if ($window.sessionStorage.getItem("auth-token") != null) {
                callAjaxService.callAjaxFunction("../rest/csn/product/credits", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
                    if (response.Data.resp_code === 'CS1002') {
                        console.log(response.Data);
                        $scope.bankStatementBalance = response.Data.data.bankstatementBal;
                        $scope.creditScoreBalance = response.Data.data.creditscoreBal;
                        $scope.financialDocumentReaderBalance = 0;
                        $scope.tradeLicenseBalance = 0;
                        $scope.etihadCreditReportBalance = 0
                        $scope.valuationBalance = 0;
                        $window.sessionStorage.setItem('bankCredit', $scope.bankStatementBalance)
                    }
                });
            }

        }]
    }
})

//************************************************ capitalize the string (GLOBAL) *******************************/
scoremeapp.directive('capitalize', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: ['scope', 'element', 'attr', 'ngModelCtrl', function(scope, element, attr, ngModelCtrl) {
            function capitalize(inputValue) {
                var newString = "";
                console.log("inputValue: " + inputValue);

                if (inputValue != undefined && inputValue != "") {
                    var stringArr = inputValue.split(/ /g);

                    console.log("before: " + stringArr);

                    for (var i = 0; i < stringArr.length; i++) {
                        var newValue = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);

                        stringArr[i] = newValue;
                    }

                    newString = stringArr.toString().replace(/,/g, ' ');

                    ngModelCtrl.$setViewValue(newString);
                    ngModelCtrl.$render();

                    console.log("after: " + stringArr);
                    console.log(newString);

                } else {
                    console.log("else: " + newString);
                }
                return newString;
            }
            ngModelCtrl.$parsers.push(capitalize);
        }]
    };
})

//********************************* back button (GLOBAL)**********************
scoremeapp.directive('back', ['$window', function($window) {
    return {
        restrict: 'A',
        link: ['scope', 'elem', 'attrs', function(scope, elem, attrs) {
            elem.bind('click', function() {
                //$window.sessionStorage.setItem("backScoreData" , true);
                $window.history.back();
            });
        }]
    };
}]);

//***************************** notifications *************************
var previousCount = 0;
scoremeapp.directive('myNotificationDirective', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        controller: ['$scope', 'commonServices', '$state', '$window', '$rootScope', '$document', 'callAjaxService', function($scope, commonServices, $state, $window, $rootScope, $document, callAjaxService) {

            if ($window.sessionStorage.getItem("auth-token") != null) {
                var eventURL = "../rest/signinws/get/main/notification/" + $window.sessionStorage.getItem("auth-token");
                // angular.element(document.querySelector('#myAudio')).html(event.notificationCounts);

                // var x = document.getElementById("myAudio"); 

                if (EventSource != null) {
                    var eventSource = new EventSource(eventURL);
                }

                eventSource.onmessage = function(event) {
                    console.log(JSON.parse(event.data))
                    var event = JSON.parse(event.data)
                    $scope.notificationAll = event.notificationstatus;
                    var notify = "";
                    angular.forEach(event.notificationstatus, function(val, key) {
                        notify += '<li class="pad-5 m-bot-10" ng-repeat="notify in notificationAll"><h3>' + val.heading + '</h3><div class="notification_slider">' + val.notifymsg + '</div></li>';
                    })

                    /*var currentCount = event.notificationCounts;
	        	  if(previousCount < currentCount){
                       x.play(); 
                       previousCount = currentCount;
	        	  }else if(previousCount == currentCount){
	        		  x.pause;	        		  
	        	  }*/
                    // x.pause(); 
                    angular.element(document.querySelector('#notification_div')).html(notify);
                    angular.element(document.querySelector('#notification_count')).html(event.notificationCounts);
                    //console.log($scope.notificationAll);
                    //console.log($scope.notificationCount);
                }
            }

            $scope.seeAllNotification = function() {
                callAjaxService.callAjaxFunction("../rest/csn/get/main/notification/all", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
                    if (response.Data.resp_code === 'CS1002') {
                        console.log(response.Data);
                        console.log(JSON.stringify(response.Data.data));
                        $window.sessionStorage.setItem('allNotification', JSON.stringify(response.Data.data));
                        $window.sessionStorage.setItem('filterNotify', '');
                        $window.sessionStorage.setItem('sortNotify', '');
                        $state.go('notificationState');
                    }
                });
            }
        }]
    }
});




scoremeapp.directive('pageSelect', function() {
    return {
        restrict: 'E',
        template: '<input type="text" class="select-page" ng-model="inputPage" ng-change="selectPage(inputPage)">',
        link: ['scope', 'element', 'attrs', function(scope, element, attrs) {
            scope.$watch('currentPage', function(c) {
                sessionStorage.setItem('currentPaginationPage', c);
                scope.inputPage = c;
            });
        }]
    }
});