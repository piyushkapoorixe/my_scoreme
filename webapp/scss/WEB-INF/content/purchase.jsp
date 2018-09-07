<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<section id="content">
	<section class="vbox">
		<section class="scrollable padder">

			<section class="row m-b-md">
				<div class="col-md-6">
					<h3
						style="font-size: 22px !important; text-transform: uppercase !important; color: #555 !important; font-family: inherit !important; margin-left: 80px !important; padding-left: 13px !important; font-weight: 800 !important; border-left: 2px solid #777 !important;">Buy
						Credit Now</h3>
				</div>

				<!-- 				CART NEW DESIGN STARTS FROM HERE -->
				<div class="row">

					<div class="col-md-10 col-md-offset-1 alert alert-success"
						id="coupon-success" style="display: none;">
						<button type="button" class="close" data-dismiss="alert">x</button>
						<i class="fa fa-ok-sign"></i><strong>Success!</strong> <span
							id="success_msg"></span>.
					</div>

					<div class="col-md-10 col-md-offset-1 alert alert-danger"
						id="coupon-failure" style="display: none;">
						<button type="button" class="close" data-dismiss="alert">x</button>
						<i class="fa fa-ok-sign"></i><strong>Failure!</strong> <span
							id="failure_msg"></span>.
					</div>

					<div class="col-md-10 col-md-offset-1"
						style="border: 1px solid #ddd; padding: 25px 25px 15px 25px;">
						<table class="table table-bordered">
							<thead>
								<tr>
									<th>Product</th>
									<th>Requests</th>
									<th>Price / Request</th>
									<th>Amount</th>
								</tr>
							</thead>
							<tbody id="pr_table">
								<tr>
									<td>ScoreMe - Scoring Requests</td>
									<td><button type="button" id="sub" class="sub"
											onclick="decCount()"
											style="width: 25px; height: 25px; background: #f44300 !important; border: 1px solid #f44300; color: #fff;">-</button>
										<input class="number" type="text" id="req_count" value="1"
										placeholder="Number of requests" class="field"
										onchange="calamount(this.value)" />
										<button type="button" id="add" class="add"
											onclick="incCount()"
											style="width: 25px; height: 25px; background: #f44300 !important; border: 1px solid #f44300; color: #fff;">+</button></td>
									<td>INR 3999 / request</td>
									<td id="net_amount">INR 3999</td>
								</tr>

							</tbody>
						</table>
					</div>
					<div class="col-md-10 col-md-offset-1"
						style="border-left: 1px solid #ddd; border-right: 1px solid #ddd; border-bottom: 1px solid #ddd; padding: 20px;">
						<form id="coupon-form" data-validate="parsley" action="#"
							onsubmit="return submitCoupon()">
							<div class="form-inline" style="float: right;">
								<div class="form-group">
									<input type="text" class="form-control" id="ccode"
										style="width: 300px; border-radius: 0px;" data-required="true"
										placeholder="Enter Coupon Code Here">
								</div>

								<button type="submit" class="btn btn-primary" id="appcoupon"
									style="margin-top: 0px; border-radius: 0px; background: transparent !important; color: #5d9cec !important;">Apply
									Coupon</button>
							</div>
						</form>
					</div>
					<div class="col-md-10 col-md-offset-1 total">
						<ul class="list-inline" style="float: right; padding-right: 20px;">
							<li>
								<h2>
									<b id="disc_amount">Total Amount - INR 3999</b>
								</h2>
							</li>
						</ul>
					</div>
					<div class="col-md-10 col-md-offset-1">
						<a href="#" onclick="callAppPayB('page,purchase,type,planb');"
							class="btn btn-s-md btn-primary"
							style="margin-top: 15px !important; margin-right: 27px; float: right; padding-right: 20px; background: #f44300 !important; border: 1px solid #f44300 !important;">Pay
							Now</a>
					</div>
				</div>

				<!-- 				END -->
			</section>
			<input type="hidden" name="pricing" id="pricing" value="3999" /> <input
				type="hidden" name="discreq" id="discreq" value="0" /> <input
				type="hidden" name="reqcount" id="reqcount" value="1" />

		</section>
	</section>
	<a href="#" class="hide nav-off-screen-block"
		data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a>
</section>

<script>
	var menuId = "menu-account";

	function callAppPayB(str) {
		var req = $("#req_count").val();
		var coupon = $("#ccode").val();
		if (!isNaN(req)) {
			var val = str + ",noreq," + req + ",ccode," + coupon;
			callApp(val);
		}
	}

	function submitCoupon() {
		$("#coupon-success").hide();
		$("#coupon-failure").hide();
		if ($("#coupon-form").parsley('validate')) {
			$
					.ajax({
						url : "/rest/cs/coupon/submit/" + $("#ccode").val(),
						type : 'POST',
						dataType : "json",
						contentType : "application/json; charset=utf-8",
						complete : function(data, textStatus, $XHR) {
							data = data["responseJSON"];
							if (data["resp_code"] == "CS1002") {
								$("#coupon-success").show();
								var r = parseInt(data["resp_msg"]);
								if (isNaN(r)) {
									r = 0;
								}
								if (r > 0) {
									$("#coupon-success").show();
									$("#success_msg").html(
											"Coupon Applied! You have got " + r
													+ " requests");
									var html = $("#pr_table").html();
									var p = parseInt($("#pricing").val());
									$("#discreq").val(r);
									if ($("#pr_table").find("#couponrow") != null)
										$("#pr_table").find("#couponrow")
												.remove();
									$("#pr_table")
											.html(
													html
															+ "<tr id='couponrow'><td></td><td>Coupon Applied - "
															+ r
															+ " requests</td><td></td><td>- INR "
															+ (p * r)
															+ "</td></tr>")
									alert($("#reqcount").val());
									calamount($("#reqcount").val());

								} else {
									$("#coupon-failure").show();
									$("#failure_msg")
											.html(
													"Unable to process your request at this time. Please try again later.");
								}
							} else {
								$("#coupon-failure").show();
								$("#failure_msg").html(data["resp_msg"]);
							}
							return false;
						}
					});

			return false;
		}

		return false;

	}

	function decCount() {
		var i = $("#req_count").val();
		i = parseInt(i);
		if (isNaN(i))
			i = 1;
		if (i > 1)
			i--;
		calamount(i);
	}
	function incCount() {
		var i = $("#req_count").val();
		i = parseInt(i);
		if (isNaN(i))
			i = 0;
		i++;
		calamount(i);
	}
	function calamount(i) {
		var p = parseInt($("#pricing").val());
		var d = parseInt($("#discreq").val());
		$("#net_amount").html("INR " + p * i);
		$("#disc_amount").html("Total Amount - INR " + p * (i - d));
		$("#reqcount").val(i);
		$("#req_count").val(i);
	}
</script>


