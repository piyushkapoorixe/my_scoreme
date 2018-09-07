<%@page import="com.creditscore.web.portal.bean.CompanyBean"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<section id="content">
	<section class="vbox">
		<section class="scrollable padder">
			<section class="row m-b-md">
				<div class="col-sm-1"></div>
				<div class="col-sm-10">
					<div class="m-b-md">
						<h3 class="m-b-none">Score</h3>
					</div>

					<div class="alert alert-success" id="save-draft-success"
						style="display: none;">
						<button type="button" class="close" data-dismiss="alert">x</button>
						<i class="fa fa-ok-sign"></i><strong>Success!</strong> Draft has
						been successfully saved. <a href="#" class="alert-link">You
							can open the same draft using proceed action.</a>.
					</div>

					<div class="alert alert-danger" id="save-draft-failure"
						style="display: none;">
						<button type="button" class="close" data-dismiss="alert">x</button>
						<i class="fa fa-ok-sign"></i><strong>Failure!</strong> Unable to
						save your draft at this time. <a href="#" class="alert-link">Please
							check your Internet connectivity and try again.</a>.
					</div>

					<div class="row rating_box">
						<div class="col-sm-12">
							<form id="rating-form" data-validate="parsley" action="#">

								<section class="panel panel-default">
									<header class="panel-heading text-right bg-light">
										<span class="hidden-sm"> <c:if
												test="${accountBean.balance > 0}">
												<button type="button" onclick="calculateRating()"
													class="btn btn-success btn-s-xs calculate_button">Calculate
													Score</button>
											</c:if>
										</span>
									</header>
									<div class="panel-body">
										<div class="row">
											<div class="col-sm-6">
												<div class="form-group">
													<span>Company Name</span> <input type="text"
														readonly="readonly" class="form-control parsley-validated"
														name="input-G4" value="${userBean.companyName}"
														id="input-G4" data-required="true">
												</div>
											</div>
											<div class="col-sm-6">
												<div class="form-group">
													<span>Industry Type</span> <input type="text"
														readonly="readonly" value="${userBean.industryName}"
														class="form-control parsley-validated" name="input-G5"
														id="input-G5" data-required="true">
												</div>
											</div>
										</div>

										<c:forEach items="${companyBean.companyParams}" var="entry"
											varStatus="loop">
											<c:choose>
												<c:when test="${entry.name=='Company'}">

												</c:when>
												<c:when test="${entry.name=='Request'}">
														<c:forEach items="${entry.param}" var="item">
															<input type="hidden" name="${item.name}"
																value="${item.label}" />
														</c:forEach>
												</c:when>
												<c:otherwise>
													<c:forEach items="${entry.param}" var="item">
													<c:choose>
														<c:when test="${item.slider == 'Y'}">
															<div class="row" style="margin: 10px 10px 18px 10px;">
																<div class="col-sm-1"></div>
																<div class="col-sm-3">
																	<span>${item.label}</span>
																</div>
																<div class="col-sm-7">
																	<input class="span2" id="${item.name}"
																		data-slider-id='slider-${item.name}' type="text"
																		data-slider-min="0"
																		data-slider-max="${companyBean.getMaxValue(item.name)}" data-slider-step="1"
																		data-slider-value="${companyBean.getIntValue(item.name)}" />
																</div>
																<div class="col-sm-1"></div>
															</div>
														</c:when>
														<c:otherwise>
															<input type="hidden" name="${item.name}"
																value="<c:out value='${companyBean.getKeyValue(item.name)}' />" />
														</c:otherwise> 
													</c:choose>
													</c:forEach>
												</c:otherwise>
											</c:choose>
										</c:forEach>

									</div>
									<footer class="panel-footer bg-light lter">
										<div class="your_rating text-left" style="display: none;">
											<img src="images/loading-bar.gif" /> <br />
											<h5>Please wait while we are evaluating your company
												health...</h5>
										</div>
										<c:if test="${accountBean.balance > 0}">
											<div class="text-right">
												<button type="button" onclick="calculateRating()"
													class="btn btn-success btn-s-xs calculate_button">Calculate
													Score</button>
											</div>
										</c:if>
									</footer>
								</section>

							</form>
						</div>
					</div>
				</div>
				<div class="col-sm-1"></div>
			</section>
		</section>
	</section>
	<a href="#" class="hide nav-off-screen-block"
		data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a>
</section>

<script>
	var menuId = "menu-company";

	function calculateRating() {

		if ($("#rating-form").parsley('validate')) {

			var jsonData = {};

			$(".panel-body input").each(function() {
				var name = $(this).attr("name");
				var value = $(this).val();
				if(name != undefined)
					jsonData[name] = value;
			});

			$(".panel-body select").each(function() {
				var name = $(this).attr("name");
				var value = $(this).val();
				if(name != undefined)
					jsonData[name] = value;
			});

			$(".panel-body .slider").each(function() {
				var name = $(this).find("input").attr("id");
				var value = $(this).find(".tooltip .tooltip-inner").html();
				if(name != undefined)
					jsonData[name] = value;
			});

			$(".calculate_button").each(function() {
				$(this).attr("disabled", "disabled");
			}); 

			$(".your_rating").css("display","block");
			$(".your_rating").html("<img src='images/loading-bar.gif' /> <br /><h5>Please wait while we are evaluating your company health...</h5>");
			
			$.ajax({
				url : "/rest/cs/calculate/rating",
				type : 'POST',
				dataType : "json",
				contentType : "application/json; charset=utf-8",
				data : JSON.stringify(jsonData),
				complete : function(data, textStatus, $XHR) {
					data = data["responseJSON"];
					if (data["resp_code"] == "CS1002") {
						$(".your_rating").html(
								"<h3>Rating - "+data["grade"] + "<br/>Score - " + data["score"]+"</h3>");
					} else
						$(".your_rating").html(data["resp_msg"]);

					$(".calculate_button").each(function() {
						$(this).removeAttr("disabled");
					});
				}
			}); 

		} else {

			console.log("Validation Fails for Rating-Form...");

		}

	}
</script>
