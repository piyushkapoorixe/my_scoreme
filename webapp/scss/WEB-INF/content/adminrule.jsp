<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<div class="container">

	<!-- ********************** alert starts ******************************-->
	<div class="alert alert-success alert-dismissable"
		id="statement-success"
		style="display: none; width: 589px; margin-left: 33px">
		<strong>Success!</strong>Admin Rule Successfully Added.
	</div>

	<div class="alert alert-danger alert-dismissable"
		id="statement-failure"
		style="display: none; width: 589px; margin-left: 33px">
		<strong>Failure!</strong>Unable To Process Request
	</div>

	<div class="alert alert-danger alert-dismissable" id="data-failure"
		style="display: none;">
		<strong>Failure!</strong> Please Fill All Fields.
	</div>

	<div class="alert alert-success alert-dismissable"
		id="statement-update" style="display: none;">
		<strong>Update!</strong>Admin Rule Successfully Updated.
	</div>
	<!-- *****************************alert ends********************* -->
	<div class="panel-heading" style="margin-top: 10px;">
		<h3 class="panel-title text-center">Add Admin Rule</h3>
	</div>
	<!-- _____________Row 1 starts____________ -->
	<form id="addAdminRule">
		<div class="row">
			<div class="col-md-6">
				<div class="form-group">
					<label for="rule-name">Rule Name</label> <input type="text"
						class="form-control" id="ruleName" name="ruleName">
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="rule-desc">Rule Description</label> <input type="text"
						class="form-control" id="ruleDescription" name="ruleDescription">
				</div>
			</div>
		</div>

		<!-- _____________Row 2 starts____________ -->

		<div class="row">
			<div class="col-md-6">
				<div class="form-group">
					<label for="points">UserColumn</label> <select class="form-control"
						id="userColumn" name="userColumn"
						onchange="changeOperator(this.value)">
						<option value="">Select User Column</option>
						<option value="DESCRIPTION">Description</option>
						<option value="AMOUNT IN">Amount In</option>
						<option value="AMOUNT OUT">Amount Out</option>
					</select>
				</div>
			</div>

			<div class="col-md-6">
				<div class="form-group">
					<label for="rule-desc">Operator</label> <select
						class="form-control" id="operator" name="operator">
					</select>
				</div>
			</div>
		</div>

		<!-- _____________Row 3 starts____________ -->
		<div class="row">
			<div class="col-md-6">
				<div class="form-group">
					<label for="points">Points</label> <input type="number"
						class="form-control" id="points" name="points">
				</div>
			</div>
		</div>

		<!-- _____________Row 4 starts____________-->
		<div class="row">
			<div class="col-md-12">
				<button class="btn btn-success" onclick="addAdminRule()">Submit</button>
			</div>
		</div>
	</form>
</div>

<script>
	function addAdminRule() {
		var jsonData = {
			"ruleName" : $("#ruleName").val(),
			"ruleDescription" : $("#ruleDescription").val(),
			"operator" : $("#operator").val(),
			"points" : $("#points").val(),
			"userColumn" : $("#userColumn").val(),
		};

		$.ajax({
			url : "rest/cs/admin/rule/engine",
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
					$("#statement-success").delay(5000).fadeOut(2000);
				} else if (data["resp_code"] == "CS1003") {
					$("#statement-failure").show();
					$("#statement-failure").delay(5000).fadeOut(2000);
					console.log("Unsuccess");
				} else if (data["resp_code"] == "CS1004") {
					$("#statement-update").show();
					$("#statement-update").delay(5000).fadeOut(2000);
					console.log("Unsuccess");
				}
			}
		});
	}

	function changeOperator(descvalue) {

		$
				.ajax({
					url : "rest/cs/get/operator",
					type : 'GET',
					dataType : "json",
					contentType : "application/json; charset=utf-8",
					complete : function(data, textStatus, $XHR) {
						data = data["responseJSON"];
						if (data["resp_code"] == "CS1002") {
							console.log(data);
							$
									.each(
											JSON.parse(data["data"]),
											function(key, value) {

												console.log(key);
												if (descvalue != "") {
													if (descvalue == "DESCRIPTION") {
														if (key == "stringOperator") {
															$('#operator')
																	.html("");
															$('#operator')
																	.append(
																			'<option value="">SELECT OPERATOR</option>');
															$
																	.each(
																			value,
																			function(
																					i,
																					sal) {

																				$(
																						'#operator')
																						.append(
																								'<option value="' + sal + '">'
																										+ sal
																										+ '</option>');
																			});
														}
													} else {
														if (key == "numberOperator") {
															$('#operator')
																	.html("");
															$('#operator')
																	.append(
																			'<option value="">SELECT OPERATOR</option>');
															$
																	.each(
																			value,
																			function(
																					i,
																					nal) {
																				$(
																						'#operator')
																						.append(
																								'<option value="' + nal + '">'
																										+ nal
																										+ '</option>');
																			});
														}
													}
												} else {
													$('#operator').html("");
												}
											})
						} else {
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
<script>
	$(function() {
		$("#bankDetailForm").validate(
				{
					rules : {
						ruleName : {
							required : true
						},
						ruleDescription : {
							required : true
						},
						userColumn : {
							required : true
						},
						operator : {
							required : true
						},
						points : {
							required : true
						},
					},
					messages : {
						ruleName : {
							required : "Please enter rule name"
						},
						ruleDescription : {
							required : "Please enter rule description"
						},
						userColumn : {
							required : "Please enter user column"
						},
						operator : {
							required : "Please enter operator"
						},
						points : {
							required : "Please enter points"
						},
					},
					submitHandler : function(form) {
						if ($('#ruleName').val() != ""
								&& $('#ruleDescription').val() != ""
								&& $('#userColumn').val() != ""
								&& $('#operator').val() != ""
								&& $('#points').val() != "") {
							addAdminRule();
						}
						return false; // for demo
					}
				});
	});
</script>
<script>
	var menuId = "menu-adminrule";
</script>



