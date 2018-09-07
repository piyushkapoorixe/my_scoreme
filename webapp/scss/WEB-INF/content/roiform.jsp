<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<section id="content">
	<section class="hbox stretch">
		<section>
			<section class="vbox gradient">
				<section class="scrollable padder">
					<section class="row m-b-md"></section>
					<section class="row m-b-md">
						<div class="col-sm-1"></div>
						<div class="col-sm-10" style="text-align: center;">
							<div class="h4 font-bold" style="color: #333;">Score
								History</div>
							<p>
								<i>Please select Score from below to initiate request from
									existing data</i>
							</p>
						</div>
						<div class="col-sm-1"></div>
					</section>
					<section class="row m-b-md">
						<div class="col-sm-1"></div>
						<div class="col-sm-10">
							<div class="">
								<div class="row clearfix">
									<div class="col-md-12 column">
										<div class="text-right">
											<button type="button" id="add_row"
												class="btn btn-success btn-s-xs">Add Row</button>
											&nbsp;&nbsp;
											<button type="button" id="delete_row"
												class="btn btn-failure btn-s-xs">Delete Row</button>
										</div>
										<table class="table table-bordered table-hover" id="tab_logic">
											<thead>
												<tr>
													<th class="text-center">#</th>
													<th class="text-center">Facilities</th>
													<th class="text-center">Amount (in INR)</th>
													<th class="text-center">ROI/ProcessingFee/Gurantee Commission (in %)</th>
													<th class="text-center">Bank Name</th>
												</tr>
											</thead>
											<tbody>
												<tr id='addr0'>
													<td>1</td>
													<td><select name="name0" id="name0" data-required="true"
												class="form-control">
														<option value="">Select facility</option>
														<option value="TERM_LOAN">Term Loan</option>
														<option value="WC_FUND">Working Capital Fund Based</option>
														<option value="WC_LC">Working Capital  LC</option>
														<option value="WC_BG">Working Capital Bank Guarantee</option>
														</select></td>
													<td><input type="text" name='amount0' id='amount0' data-required="true" placeholder='Amount (in INR)'
														class="form-control" /></td>
													<td><input type="text" name='percent0' id='percent0' data-required="true"
														placeholder='(in %)' class="form-control" /></td>
													<td><input type="text" name='bank0' id='bank0' data-required="true"
														placeholder='Bank Name' class="form-control" /></td>
												</tr>
												<tr id='addr1'></tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div class="row">
							<div class="col-md-4"></div>
							<div class="col-md-4">
							<button type="button"
								class="btn btn-lg btn-primary btn-block" onclick="addCompany()"
								id="addcomp-button"
								style="background-color: #FAA61A; border-color: #FAA61A;">
								Submit</button>
							</div>
							<div class="col-md-4"></div>
							</div>
						</div>
						<div class="col-sm-1"></div>
					</section>
				</section>
			</section>
		</section>

	</section>
</section>

<script>
	var menuId = "menu-dashboard";
</script>

<script>
	var menuId = "menu-dashboard";

	function checkagree(a) {
		if (a) {
			$("#addcomp-button").removeAttr("disabled");
		} else {
			$("#addcomp-button").attr("disabled", "disabled");
		}
	}

	function addCompany() {

		if ($("#company-form").parsley('validate')) {

			var jsonData = {
				companyId : $("#company_id").val(),
				companyName : $("#company_name").val(),
				industryId : $("#industry").val()
			};

			$("#addcomp-button").attr("disabled", "disabled");

			$.ajax({
				url : "/rest/cs/company/create",
				type : 'POST',
				dataType : "json",
				contentType : "application/json; charset=utf-8",
				data : JSON.stringify(jsonData),
				complete : function(data, textStatus, $XHR) {
					data = data["responseJSON"];
					if (data["resp_code"] == "CS1002")
						callApp('page,rating,companyId,' + data["company"]);
					//window.location.href = "app?page=rating&companyId="+data["company"];
					else
						//

						$("#addcomp-button").attr("disabled", "");
				}
			});

		} else {

			console.log("Validation Fails for Company-Form...");

		}
	}
</script>
