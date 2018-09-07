<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<div class="container">
	<!-- ********************** alert starts ******************************-->
	<div class="alert alert-success alert-dismissable"
		id="statement-success"
		style="display: none; width: 589px; margin-left: 33px">
		<strong>Success!</strong>Request Successfully Completed.
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

	<!-- *****************************alert ends********************* -->


	<!--**********************************  add bank details  *********************************************-->

	<div class="panel-heading" style="margin-top: 10px;">
		<h3 class="panel-title text-center">Add Bank Statement</h3>
	</div>


	<form id="bankStatementForm"  method="post" enctype="multipart/form-data">

		<!--**********************************  for user upload excel *********************************************-->
		<div class="col-md-4">
			<div class="form-group ">
				<p for="bankStmtFile">Bank Name</p>

				<div class="input-group" ng-controller="bankController">
					<span class="input-group-addon"><i class="fa fa-file"></i></span> <select
						class="form-control" id="bankName" name="bankName" ng-model="bankName">
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
					<span class="input-group-addon"><i class="fa fa-file"></i></span> <select
						class="form-control" id="accountType" name="accountType">
						<option value="">Select account type</option>
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
				<p for="bankStmtFile">Company Type</p>

				<div class="input-group">
					<span class="input-group-addon"><i class="fa fa-file"></i></span> <select
						class="form-control" id="companyType" name="companyType">
						<option>Select</option>
											<option value="Hindu Undivided Family">Hindu
							Undivided Family</option>
						<option value="Proprietorship">Proprietorship</option>
						<option value="Partnership">Partnership</option>
						<option value="Limited Liability Partnership (LLP)">Limited
							Liability Partnership (LLP)</option>
						<option value="Private Limited">Private Limited</option>
						<option value="Public Limited - Unlisted">Public Limited
							- Unlisted</option>
						<option value="Public Limited - listed">Public Limited -
							listed</option>
					</select>
				</div>
			</div>
		</div>
		
		<div class="col-md-4">
			<div class="form-group ">
				<p for="bankStmtFile">Company Name</p>
				<div class="input-group">
					<span class="input-group-addon"><i class="fa fa-file"></i></span> 
					<input type="text" class="form-control" id="companyName" name="companyName"/>
				</div>
			</div>
		</div>
		
		
		
		                                    
		
		<div class="col-md-4">
			<div class="form-group ">
				<p for="bankStmtFile">Account Name</p>

				<div class="input-group">
					<span class="input-group-addon"><i class="fa fa-file"></i></span> 
					<input type="text" class="form-control" id="accountName" name="accountName"/>
				</div>
			</div>
		</div>
		
		<div class="col-md-4">
			<div class="form-group ">
				<p for="bankStmtFile">Account Number</p>

				<div class="input-group">
					<span class="input-group-addon"><i class="fa fa-file"></i></span> 
					<input type="text" class="form-control" id="accountNumber" name="accountNumber"/>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="form-group ">
				<p for="bankStmtFile">Bank Statement</p>

				<div class="input-group">
					<span class="input-group-addon"><i class="fa fa-file"></i></span> <input
						type="file" id="file1" name="bankStmtFile" class="form-control"
						id="bankStmtFile" placeholder="Upload Bank Statement" value=""
						multiple="" required>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<button class="btn btn-success" onclick="uploadUserExcel()">Submit</button>
			</div>
		</div>
		</form>


</div>


<script>
/* window.onload = function() {
	$.ajax({
		url : "rest/cs/get/banks",
		type : 'GET',
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		complete : function(data, textStatus, $XHR) {
			data = data["responseJSON"];
			if ((data.resp_code) == 'CS1002') {
	            $('#bankName').html("");
	            $('#bankName').append('<option value="">SELECT BANK</option>');
	            $.each(data.data, function(key, bank) {
	                $('#bankName').append('<option value="' + bank.id + '">' + bank.bankName + '</option>');
	            });
	        } else {
	            console.log(data.resp_code);
	        }
		}
	});
}; */
	function uploadUserExcel() {

		
		var dataObj = new FormData();

		$.each($('#file1')[0].files, function(i, file) {
			dataObj.append('file', file);
		});

		var bankName = $('#bankName').val();
		var accountType = $('#accountType').val();
		var accNumber=$('#accountNumber').val();
		var accName=$('#accountName').val();
		var companyName=$('#companyName').val();
		var companyType=$('#companyType').val();

		$.ajax({
			url : "rest/cs/upload/user/bank/statement/excel/" + bankName + "/"
					+ accountType+"/"+accNumber+"/"+accName+"/"+companyName+"/"+companyType,
			type : 'POST',
			contentType : false,
			processData : false,
			data : dataObj,
			complete : function(data, textStatus, $XHR) {
				data = data["responseJSON"];
				if (data["resp_code"] == "CS1002") {
					$.LoadingOverlay("hide");
					$("#statement-success").show();
					location.reload();
					$("#statement-success").delay(5000).fadeOut(1500);
				} else if (data["resp_code"] == "CS1003") {
					$("#statement-failure").show();
					$("#statement-failure").delay(5000).fadeOut(1500);
					console.log("Unsuccess");
				}
			}
		});
	}

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
		});
	} */
</script>
<!-- <script>
	$(function() {
		$("#bankStatementForm").validate(
				{
					rules : {
						bankName : {
							required : true
						},
						accountType : {
							required : true
						},
						bankStmtFile : {
							required : true
						},

					},
					messages : {
						bankName : {
							required : "Please enter bank name"
						},
						accountType : {
							required : "Please enter account type"
						},
						bankStmtFile : {
							required : "select excel file"
						},
					},
					submitHandler : function(form) {
						if ($('#bank_name').val() != ""
								&& $('#account_type').val() != ""
								&& $('#excel_column').val() != ""
								&& $('#credit_column').val() != ""
								&& $('#debit_column').val() != "") {
							uploadUserExcel();
						}
						return false; // for demo
					}
				});
	});
</script> -->
