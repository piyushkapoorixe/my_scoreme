<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<div class="container" ng-controller="bankController">
	<!-- ********************** alert starts ******************************-->
	<div class="alert alert-success alert-dismissable"
		id="statement-success"
		style="display: none; width: 589px; margin-left: 33px">
		<strong>Success!</strong>Bank Details Successfully Added.
	</div>

	<div class="alert alert-danger alert-dismissable"
		id="statement-failure"
		style="display: none; width: 589px; margin-left: 33px">
		<strong>Failure!</strong>Unable To Upload Bank Statement.
	</div>

	<div class="alert alert-danger alert-dismissable" id="data-failure"
		style="display: none;">
		<strong>Failure!</strong> Please Fill All Fields.
	</div>

	<div class="alert alert-danger alert-dismissable" id="statement-update"
		style="display: none;">
		<strong>Update!</strong> Bank Details Successfully Updated.
	</div>
	<!-- *****************************alert ends********************* -->


	<!--**********************************  add bank details  *********************************************-->

	<div class="panel-heading" style="margin-top: 10px;">
		<h3 class="panel-title text-center">Add Bank Details</h3>
	</div>

	<form id="bankDetailForm">
		<div class="row">
			<div class="col-md-4">
				<div class="form-group">
					<p for="bankStmtFile">Bank Name</p>
					<div class="input-group">
						<span class="input-group-addon"><i class="fa fa-file"></i></span>
						<select class="form-control" ng-model="bank_name">
						<option value ="">Select Bank Name</option>
						<option ng-repeat="b in bankData.data" value="{{b.id}}">{{b.bankName}}</option>
					 </select>
					</div>
				</div>
			</div>

			<div class="col-md-4">
				<div class="form-group ">
					<p for="bankStmtFile">Account Type</p>
					<div class="input-group">
						<span class="input-group-addon"><i class="fa fa-file"></i></span>
						<select class="form-control" id="account_type" ng-model="account_type">
							<option value="">Select Account Type</option>
							<option value="SAVING">Saving Account</option>
							<option value="CURRENT">Current Account</option>
							<option value="CREDIT_CARD">Credit Card</option>
							<option value="CASH_CREDIT">Cash Credit(CC)</option>
							<option value="OVER_DRAFT">Over Draft(OD)</option>
						</select>
					</div>
				</div>
			</div>

			<div class="col-md-4">
				<div class="form-group ">
					<p for="bankStmtFile">Excel Column Name</p>
					<div class="input-group">
						<span class="input-group-addon"><i class="fa fa-file"></i></span>
						<input type="text" class="form-control" id="excel_column" ng-model="excel_column"
							placeholder="Excel Column">
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-4">
				<div class="form-group ">
					<p for="bankStmtFile">User Column Name</p>
					<div class="input-group">
						<span class="input-group-addon"><i class="fa fa-file"></i></span>
						<select class="form-control" id="user_column" ng-model="user_column">
							<option value="">Select User Column</option>
							<option value="DESCRIPTION">Description</option>
							<option value="AMOUNT IN">Amount In</option>
							<option value="AMOUNT OUT">Amount Out</option>
						</select>
					</div>
				</div>
			</div>


			<div class="col-md-4">
				<div class="form-group ">
					<p for="bankStmtFile">Credit Amount Column Name</p>
					<div class="input-group">
						<span class="input-group-addon"><i class="fa fa-file"></i></span>
						<input type="text" class="form-control" id="credit_column" ng-model="credit_column"
							placeholder="Credit Column">
					</div>
				</div>
			</div>


			<div class="col-md-4">
				<div class="form-group ">
					<p for="bankStmtFile">Debit Amount Column Name</p>
					<div class="input-group">
						<span class="input-group-addon"><i class="fa fa-file"></i></span>
						<input type="text" class="form-control" id="debit_column" ng-model="debit_column"
							placeholder="Debit Column">
					</div>
				</div>
			</div>
			
			<div class="col-md-4">
				<div class="form-group ">
					<p for="bankStmtFile">Date Column Name</p>
					<div class="input-group">
						<span class="input-group-addon"><i class="fa fa-file"></i></span>
						<input type="text" class="form-control" id="date_column" ng-model="date_column"
							placeholder="Date Column">
					</div>
				</div>
			</div>
			
			<div class="col-md-4">
				<div class="form-group ">
					<p for="bankStmtFile">Balance</p>
					<div class="input-group">
						<span class="input-group-addon"><i class="fa fa-file"></i></span>
						<input type="text" class="form-control" id="balance_column" ng-model="balance_column"
							placeholder="Balance Column">
					</div>
				</div>
			</div>
			
			<div class="col-md-4">
				<div class="form-group ">
					<p for="bankStmtFile">Reference Column</p>
					<div class="input-group">
						<span class="input-group-addon"><i class="fa fa-file"></i></span>
						<input type="text" class="form-control" id="ref_column" ng-model="ref_column"
							placeholder="Reference Column">
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-12">
				<button class="btn btn-success" ng-click="addBankDetail()">Submit</button>
			</div>
		</div>
	</form>

</div>


<script>
	/* function addBankDetail() {
		var jsonData = {
			"bankName" : $("#bank_name").val(),
			"excelColumn" : $("#excel_column").val(),
			"accountType" : $("#account_type").val(),
			"userColumn" : $("#user_column").val(),
			"debitColumn" : $("#debit_column").val(),
			"creditColumn" : $("#credit_column").val(),
			"dateColumn":$("#date_column").val(),
			"balanceColumn":$("#balance_column").val(),
			"refColumn":$("#ref_column").val(),
		};

		$.ajax({
			url : "rest/cs/add/bank/details",
			type : 'POST',
			dataType : "json",
			contentType : "application/json; charset=utf-8",
			data : JSON.stringify(jsonData),
			complete : function(data, textStatus, $XHR) {
				data = data["responseJSON"];
				if (data["resp_code"] == "CS1002") {
					$.LoadingOverlay("hide");
					$("#statement-success").show();
					location.reload();
					$("#statement-success").delay(5000).fadeOut(1800);
				} else if (data["resp_code"] == "CS1003") {
					$("#statement-failure").show();
					$("#statement-failure").delay(5000).fadeOut(1800);
					console.log("Unsuccess");
				} else if (data["resp_code"] == "CS1004") {
					$("#statement-update").show();
					$("#statement-update").delay(5000).fadeOut(1800);
					console.log("updated");
				}
			}
		});
	}
 */
	/* window.onload = function() {
		$.ajax({
			url : "rest/cs/get/banks",
			type : 'GET',
			dataType : "json",
			contentType : "application/json; charset=utf-8",
			complete : function(data, textStatus, $XHR) {
				data = data["responseJSON"];
				if ((data.resp_code) == 'CS1002') {
					$('#bank_name').html("");
					$('#bank_name').append(
							'<option value="">SELECT BANK</option>');
					$('#bankName').html("");
					$('#bankName').append(
							'<option value="">SELECT BANK</option>');
					$.each(data.data, function(key, bank) {
						$('#bank_name').append(
								'<option value="' + bank.id + '">'
										+ bank.bankName + '</option>');
						$('#bankName').append(
								'<option value="' + bank.id + '">'
										+ bank.bankName + '</option>');
					});
				} else {
					console.log(data.resp_code);
				}
			}
		}); */
	//};
</script>
<script>
// window.onload = function() {
// 	$(function() {
// 		$("#bankDetailForm").validate({
// 			rules : {
// 				bank_name : {
// 					required : true
// 				},
// 				account_type : {
// 					required : true
// 				},
// 				excel_column : {
// 					required : true
// 				},
// 				user_column : {
// 					required : true
// 				},
// 				credit_column : {
// 					required : true
// 				},
// 				debit_column : {
// 					required : true
// 				},
// 			},
// 			messages : {
// 				bank_name : {
// 					required : "Please enter bank name"
// 				},
// 				account_type : {
// 					required : "Please enter account type"
// 				},
// 				excel_column : {
// 					required : "Please enter excel column"
// 				},
// 				user_column : {
// 					required : "Please enter user column"
// 				},
// 				credit_column : {
// 					required : "Please enter credit column" 
// 				},
// 				debit_column : {
// 					required : "Please enter debit column"
// 				},

// 			},
// 	submitHandler: function(form) 
// 	{  
// 	            if ($('#bank_name').val() != "" && $('#account_type').val() != "" && $('#excel_column').val() != "" && $('#credit_column').val()!="" && $('#debit_column').val() != "") {
// 	            	addBankDetail();
// 	            }
// 	            return false; // for demo
// 	        }
// 		});
// 	});

// 	$.ajax({
// 		url : "rest/cs/get/banks",
// 		type : 'GET',
// 		dataType : "json",
// 		contentType : "application/json; charset=utf-8",
// 		complete : function(data, textStatus, $XHR) {
// 			data = data["responseJSON"];
// 			if ((data.resp_code) == 'CS1002') {
// 	            $('#bank_name').html("");
// 	            $('#bank_name').append('<option value="">SELECT BANK</option>');
// 	            $.each(data.data, function(key, bank) {
// 	                $('#bank_name').append('<option value="' + bank.id + '">' + bank.bankName + '</option>');
// 	            });
// 	        } else {
// 	            console.log(data.resp_code);
// 	        }
// 		}
// 	});

	
// }
</script>
