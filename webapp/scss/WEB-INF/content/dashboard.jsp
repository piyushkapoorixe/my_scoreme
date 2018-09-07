<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<section id="content">
	<section class="hbox stretch">
		<section>
			<section class="vbox gradient">
				<section class="scrollable padder">
					<section class="row m-b-md"></section>
					<section class="row m-b-md visible-xs">
						<div class="col-sm-12 " style="text-align: center;">
							<section class="panel panel-default shadow">
								<header class="panel-heading"
									style="background-color: #f5b016; color: white; font-weight: bold; font-size: 16px; text-align: center;">
									${appBean.companyName} </header>
							</section>
						</div>
					</section>

					<section class="row m-b-md">
						<div class="col-sm-1"></div>
						<div class="col-sm-5">
							<section class="panel panel-default">
								<header class="panel-heading"
									style="text-align: center; background-color: #455A64; color: #fff; font-weight: bold; font-size: 16px;">LAST
									RATING </header>
								<div class="slimScrollDiv"
									style="position: relative; overflow: hidden; width: auto; height: 130px; border: 1px solid #ccc;">
									<section class="panel-body slim-scroll" data-height="130px"
										data-size="10px"
										style="overflow: hidden; width: auto; height: 130px; text-align: center; vertical-align: middle;">
										<input type="hidden" id="aboutUsParam" value="${userBean.userInfo.instituteId}">
										<div class="h1 font-bold"
											style="font-size: 71px; color: #263238; font-family: inherit;">${appBean.lastRating }</div>
										<c:choose>
											<c:when
												test="${appBean.certificate != null and appBean.certificate != ''}">
												<a href="${appBean.certificate}" target="_blank"
													style="border-bottom: 1px solid #f44300; padding: 3px; text-transform: uppercase; font-size: 11px;">Download
													Report</a>
											</c:when>
											<c:otherwise>
												<i>Not Available</i>
											</c:otherwise>
										</c:choose>
									</section>
									<div class="slimScrollBar"
										style="width: 10px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 164.798px; background: rgb(0, 0, 0);"></div>
									<div class="slimScrollRail"
										style="width: 10px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; opacity: 0.2; z-index: 90; right: 1px; background: rgb(51, 51, 51);"></div>
								</div>
							</section>
						</div>
						<div class="col-sm-5">
							<section class="panel panel-default">
								<header class="panel-heading"
									style="background-color: #455A64; color: #fff; font-weight: bold; font-size: 16px; text-align: center;">LAST
									SCORE </header>
								<div class="slimScrollDiv"
									style="position: relative; overflow: hidden; width: auto; height: 130px; border: 1px solid #ccc;">
									<section class="panel-body slim-scroll" data-height="130px"
										data-size="10px"
										style="overflow: hidden; width: auto; height: 130px; text-align: center; vertical-align: middle;">
										<div id='bigfella2' style='width: 70%; height: 100px; margin: auto;'></div>
									</section>
									<div class="slimScrollBar"
										style="width: 10px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 164.798px; background: rgb(0, 0, 0);"></div>
									<div class="slimScrollRail"
										style="width: 10px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; opacity: 0.2; z-index: 90; right: 1px; background: rgb(51, 51, 51);"></div>
								</div>
							</section>
						</div>
						<div class="col-sm-1"></div>
					</section>
					<section class="row m-b-md" style="display: none;">
						<div class="col-sm-1"></div>
						<div class="col-sm-5">
							<section class="panel panel-default shadow">
								<header class="panel-heading"
									style="background-color: #F39C12; color: white; font-weight: bold; font-size: 16px; text-align: center;">AVERAGE
									SCORE </header>
								<div class="slimScrollDiv"
									style="position: relative; overflow: hidden; width: auto; height: 130px;">
									<section class="panel-body slim-scroll" data-height="130px"
										data-size="10px"
										style="overflow: hidden; width: auto; height: 130px; text-align: center; vertical-align: middle;">
										<div class="h2 font-bold">${appBean.avgScore }</div>
									</section>
									<div class="slimScrollBar"
										style="width: 10px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 164.798px; background: rgb(0, 0, 0);"></div>
									<div class="slimScrollRail"
										style="width: 10px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; opacity: 0.2; z-index: 90; right: 1px; background: rgb(51, 51, 51);"></div>
								</div>
							</section>
						</div>
						<div class="col-sm-5">
							<section class="panel panel-default shadow"
								style="display: none;">
								<header class="panel-heading"
									style="background-color: #27AE60; color: white; font-weight: bold; font-size: 16px; text-align: center;">INDUSTRY
									AVERAGE SCORE </header>
								<div class="slimScrollDiv"
									style="position: relative; overflow: hidden; width: auto; height: 130px;">
									<section class="panel-body slim-scroll" data-height="130px"
										data-size="10px"
										style="overflow: hidden; width: auto; height: 130px; text-align: center; vertical-align: middle;">
										<div class="h2 font-bold">${appBean.industryScore }</div>
									</section>
									<div class="slimScrollBar"
										style="width: 10px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 164.798px; background: rgb(0, 0, 0);"></div>
									<div class="slimScrollRail"
										style="width: 10px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; opacity: 0.2; z-index: 90; right: 1px; background: rgb(51, 51, 51);"></div>
								</div>
							</section>
						</div>
						<div class="col-sm-1"></div>
					</section>

					<!-- 					<section class="row m-b-md"> -->
					<!-- 						<div class="col-sm-1"></div> -->
					<!-- 						<div class="col-sm-5"> -->
					<!-- 							<section> -->
					<!-- 								<a href="#" class="new-score col-md-4 col-md-offset-4" -->
					<%-- 									onclick="callApp('page,rating,companyId,${appBean.companyId}');"> --%>
					<!-- 									NEW SCORE</a> -->
					<!-- 							</section> -->
					<!-- 						</div> -->
					<!-- 						<div class="col-sm-5"> -->
					<!-- 							<section> -->
					<!-- 								<a href="#" class="revise-score col-md-4 col-md-offset-4" -->
					<!-- 									onclick="callApp('page,reviserating');"> REVISE SCORE</a> -->
					<!-- 							</section> -->
					<!-- 						</div> -->
					<!-- 						<div class="col-sm-1"></div> -->
					<!-- 					</section> -->

					<section class="row m-b-md">



						<div class="col-lg-1"></div>
						<div class="col-lg-5">
							<section class="panel panel-default shadow" id="progressbar">
								<header class="panel-heading"
									style="background-color: #455A64; color: white; font-weight: bold; font-size: 16px; text-align: center;">
									SCORE SLIDER </header>
								<div class="slimScrollDiv"
									style="position: relative; overflow-y: auto; width: auto;padding-top: 30px; padding-top: 10%; text-align: center;">

									<c:choose>
										<c:when test="${userBean.ratingId > 0}">

											<form id="rating-form" data-validate="parsley" action="#">
												<input type="hidden" value="${userBean.groupName}"
													name="input-G5" id="input-G5">
													<input type="hidden" value="${userBean.industryName}"

													name="input-G6" id="input-G6"> 
													 <input type="hidden"
													name="input-G4" value="${userBean.companyName}"
													id="input-G4">
													
													
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
															<c:forEach items="${entry.param}" var="item"
																varStatus="loop">
																<c:choose>
																	<c:when test="${item.slider == 'Y'}">
																		<div class="row" style="margin: 10px 10px 18px 10px;">
																			<div class="col-sm-1"></div>
																			<div class="col-sm-3">
																				<span>${item.label}</span>
																			</div>
																			<div class="col-sm-7">
																				<input class="slider2" id="${item.name}"
																					data-slider-id='slider-${item.name}' type="text"
																					data-slider-min="0"
																					data-slider-max="${appBean.getMaxValue(item.min)}"
																					data-slider-step="1"
																					data-slider-value="${appBean.getIntValue(item.min)}" />
																			</div>
																			<div class="col-sm-1"></div>
																		</div>
																		<div class="row" style="margin: 10px 10px 18px 10px;">
																			<div class="col-sm-1"></div>
																			<div class="col-sm-3"></div>
																			<div class="col-sm-5">
																				Previous: <span id="prevval-${item.name}">${appBean.getIntValue(item.min)}</span><br />
																				Current: <span id="currval-${item.name}">${appBean.getIntValue(item.min)}</span>
																			</div>
																			<div class="col-sm-2">
																				<span id="perval-${item.name}">0%</span>
																			</div>
																			<div class="col-sm-1"></div>
																		</div>

																	</c:when>
																	<c:otherwise>
																		<input type="hidden" name="${item.name}"
																			value="<c:out value='${appBean.getKeyValue(item.name)}' />" />
																	</c:otherwise>
																</c:choose>
															</c:forEach>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</form>

										</c:when>
										<c:otherwise>

											<i>No Slider Available</i>
											<br />
											<small>Either you have not calculated score yet or <br />you
												don't have enough balance in your account
											</small>

										</c:otherwise>
									</c:choose>

									<div class="modal fade" id="ajaxModal2" role="dialog"
						style="display: none;" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">×</button>
									<h4 class="modal-title">Confirm Inputs</h4>
								</div>
								<div id="divToPrint" class="modal-body"
									style="overflow-y: scroll; height: 400px;">

									<table class="table table-striped m-b-none"
										data-filter="#filter">
										<thead>
											<tr>
												<th>Parameter</th>
												<th>Inputed Value</th>
											</tr>
										</thead>
										<tbody id="ratingtable" style="text-align:left;">
										</tbody>
									</table>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-default"
										data-dismiss="modal">Back</button>
									<button type="button" onclick="calculateRating()"
										class="btn btn-success btn-s-xs calculate_button">Calculate
										Score</button>
								</div>
							</div>
							<!-- /.modal-content -->
						</div>
						<!-- /.modal-dialog -->
					</div>
					
									<div class="modal fade" id="ajaxModal" role="dialog"
										style="display: none;" aria-hidden="true" data-backdrop="static">
										<div class="modal-dialog" style="width: 80%;">
											<div class="modal-content">
												<div class="modal-header">
													<button type="button" class="close" id="modalclose" data-dismiss="modal">×</button>
													<h4 class="modal-title"
														style="font-size: 23px; text-transform: uppercase; font-weight: 300;">Slider
														Score</h4>
												</div>
												<div class="modal-body" id="modal-bodyID"style="height: auto;">

													<div class="row rating_box_new">
														<div class="col-sm-12">
															<form id="rating-form1" data-validate="parsley" action="#">
																<section class="panel panel-default">
																	<div class="panel-body">
																		Basis your inputs placed, the final result for your
																		company is as follows,<br /> <br />
																		<div class="your_rating">
																			<img src="images/loading-bar.gif" /> <br />
																			<img src="images/loading-state.gif" style="width:450px;margin-left: -15px;"/> 
																			<h5>Please wait while we are evaluating your
																				company health...</h5>
																		</div>
																		<div class="your_rating_new" style="display: none;">
																			<div class="row"
																				style="border: 1px solid #ccc; margin-top: 10px;">
																				<div class="col-md-3"
																					style="background: rgba(255, 175, 75, 1); background: -moz-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 10, 10, 1) 100%); background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255, 175, 75, 1)), color-stop(100%, rgba(255, 10, 10, 1))); background: -webkit-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 10, 10, 1) 100%); background: -o-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 10, 10, 1) 100%); background: -ms-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 10, 10, 1) 100%); background: linear-gradient(to right, rgba(255, 175, 75, 1) 0%, rgba(255, 10, 10, 1) 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffaf4b', endColorstr='#ff0a0a', GradientType=1); padding: 10px; border-bottom-right-radius: 25px;">
																					<p class="rating"
																						style="color: #fff; font-weight: 400; text-align: center; text-transform: uppercase;"
																						id="rating_now">Rating</p>
																				</div>
																				<div class="col-md-6">
																					<div id='bigfella'
																						style='width: 400px; height: 320px'></div>
																				</div>

																				<div class="col-md-3"
																					style="display:none; background: rgba(255, 10, 10, 1); background: -moz-linear-gradient(left, rgba(255, 10, 10, 1) 0%, rgba(255, 175, 75, 1) 100%); background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255, 10, 10, 1)), color-stop(100%, rgba(255, 175, 75, 1))); background: -webkit-linear-gradient(left, rgba(255, 10, 10, 1) 0%, rgba(255, 175, 75, 1) 100%); background: -o-linear-gradient(left, rgba(255, 10, 10, 1) 0%, rgba(255, 175, 75, 1) 100%); background: -ms-linear-gradient(left, rgba(255, 10, 10, 1) 0%, rgba(255, 175, 75, 1) 100%); background: linear-gradient(to right, rgba(255, 10, 10, 1) 0%, rgba(255, 175, 75, 1) 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff0a0a', endColorstr='#ffaf4b', GradientType=1); padding: 10px; border-bottom-left-radius: 25px;">
																					<a href="#" target="_blank" id="certid"><p
																							class="Download"
																							style="color: #fff; font-weight: 400; text-align: center; text-transform: uppercase;">Download
																							Report</p></a>
																				</div>
																				<div class="col-md-12">
																					<table class="table m-b-none">
																						<tr>
																							<td
																								style="border-top: 1px solid #fff; width: 70%;">


																								<table class="table m-b-none"
																									style="width: 100%;">
																									<tbody>
																										<tr
																											style="background-color: rgba(22, 29, 12, 0.1);">
																											<th style="width: 50%; text-align: center;">PARTICULARS</th>
																											<th style="width: 50%; text-align: center;">ADVICE</th>
																										</tr>
																										<tr style="text-align: center;">
																											<td>Long term loan</td>
																											<td id="MSG_LTL"></td>
																										</tr>
																										<tr style="text-align: center;">
																											<td>CC/Overdraft Facility</td>
																											<td id="MSG_OD"></td>
																										</tr>
																										<tr style="text-align: center;">
																											<td>Letter of Credit</td>
																											<td id="MSG_LC"></td>
																										</tr>
																										<tr style="text-align: center;">
																											<td>Bank Guarantee</td>
																											<td id="MSG_BG"></td>
																										</tr>
																										<tr style="text-align: center;">
																											<td>Scope of negotiations on ROI for
																												term loan</td>
																											<td id="MSG_ROI_LTL"></td>
																										</tr>
																										<tr style="text-align: center;">
																											<td>Scope of negotiations on ROI for
																												working capital loan</td>
																											<td id="MSG_ROI_WC"></td>
																										</tr>
																									</tbody>
																								</table>

																							</td>
																							<!-- 								<td style="border-top: 1px solid #fff;"> -->
																							<!-- 									<table class="table m-b-none"> -->
																							<!-- 										<tr id="rating_0"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;AAA</td> -->
																							<!-- 											<td class="row_desc">Highest Safety</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_1"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;AA+</td> -->
																							<!-- 											<td class="row_desc">High Safety</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_2"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;AA</td> -->
																							<!-- 											<td class="row_desc">High Safety</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_3"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;AA-</td> -->
																							<!-- 											<td class="row_desc">Adequate Safety</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_4"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;A+</td> -->
																							<!-- 											<td class="row_desc">Adequate Safety</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_5"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;A</td> -->
																							<!-- 											<td class="row_desc">Adequate Safety</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_6"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;A-</td> -->
																							<!-- 											<td class="row_desc">Adequate Safety</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_7"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;BBB+</td> -->
																							<!-- 											<td class="row_desc">Moderate Safety</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_8"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;BBB</td> -->
																							<!-- 											<td class="row_desc">Moderate Safety</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_9"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;BBB-</td> -->
																							<!-- 											<td class="row_desc">Inadequate Safety</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_10"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;BB+</td> -->
																							<!-- 											<td class="row_desc">Inadequate Safety</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_11"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;BB</td> -->
																							<!-- 											<td class="row_desc">Inadequate Safety</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_12"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;BB-</td> -->
																							<!-- 											<td class="row_desc">High Risk</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_13"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;B+</td> -->
																							<!-- 											<td class="row_desc">High Risk</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_14"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;B</td> -->
																							<!-- 											<td class="row_desc">High Risk</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_15"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;B-</td> -->
																							<!-- 											<td class="row_desc">High Risk</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_16"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;C</td> -->
																							<!-- 											<td class="row_desc">Substantial Risk</td> -->
																							<!-- 										</tr> -->
																							<!-- 										<tr id="rating_17"> -->
																							<!-- 											<td>&nbsp;&nbsp;&nbsp;D</td> -->
																							<!-- 											<td class="row_desc">Default</td> -->
																							<!-- 										</tr> -->
																							<!-- 									</table> -->
																							<!-- 								</td> -->
																						</tr>
																					</table>
																				</div>
																			</div>


																			<br /> <br /> <i>Please note that the rating
																				assigned is representative and is not supposed to be
																				placed across at any forum as we are NOT an
																				accredited rating agency by SEBI or RBI. Our sole
																				objective is to assist companies in understanding
																				their business health from the perspective of an
																				analyst.</i> <br /> <br /> Thanks a lot for availing
																			our services . Hope you had a great experience.
																			Please let us know of your FEEDBACK at
																			info@scoreme.in. It will be of immense help to us for
																			improving our services. <br /> <br /> TEAM – SCORE
																			ME
																		</div>


																	</div>
																	<footer class="panel-footer text-right bg-light lter">
																	</footer>
																</section>
															</form>
														</div>
													</div>

												</div>

											</div>
											<!-- /.modal-content -->
										</div>
										<!-- /.modal-dialog -->
									</div>


								</div>
							</section>
							<div class="row" style="margin: 10px 10px 18px 10px;">
								<div class="col-sm-4"></div>
								<div class="col-sm-8" style="text-align: left;">
									<button type="button" onclick="getConfirmPage()"
										class="btn btn-success btn-s-xs calculate_button"
										style="background: #263238 !important; border: 1px solid #263238 !important; text-transform: uppercase; font-size: 13px;">Re-Calculate
										Score</button>
								</div>

							</div>
						</div>
						<div class="col-lg-5">
							<section class="panel panel-default shadow" id="progressbar">
								<header class="panel-heading"
									style="background-color: #455A64; color: white; font-weight: bold; font-size: 16px; text-align: center;">
									INDUSTRY BENCHMARK </header>
								<div class="slimScrollDiv"
									style="position: relative; overflow-x: hidden; overflow-y: auto; width: auto;padding-top: 10%; text-align: center;">
									<c:choose>
										<c:when test="${userBean.groupName=='Real Estate'}">
											<i>No data available</i>
										</c:when>
										<c:otherwise>

											<script>
												var rawData_CR = [
														[
																"${manBean.getKeyValue('CR')}",
																1 ],
														[
																"${manBean.getKeyValue('CR_B')}",
																2 ] ];
												var dataSet_CR = [ {
													label : "Current Ratio",
													data : rawData_CR,
													color : "#ff9e80"
												} ];

												var rawData_QR = [
														[
																"${manBean.getKeyValue('QR')}",
																1 ],
														[
																"${manBean.getKeyValue('QR_B')}",
																2 ] ];
												var dataSet_QR = [ {
													label : "Quick Ratio",
													data : rawData_QR,
													color : "#ccff90"
												} ];

												var rawData_APD = [
														[
																"${manBean.getKeyValue('APD')}",
																1 ],
														[
																"${manBean.getKeyValue('APD_B')}",
																2 ] ];
												var dataSet_APD = [ {
													label : "A/c Payable Days",
													data : rawData_APD,
													color : "#4188af"
												} ];

												var rawData_CPD = [
														[
																"${manBean.getKeyValue('CPD')}",
																1 ],
														[
																"${manBean.getKeyValue('CPD_B')}",
																2 ] ];
												var dataSet_CPD = [ {
													label : "Collection Period (Days)",
													data : rawData_CPD,
													color : "#ffe57f"
												} ];

												var rawData_STA = [
														[
																"${manBean.getKeyValue('STA')}",
																1 ],
														[
																"${manBean.getKeyValue('STA_B')}",
																2 ] ];
												var dataSet_STA = [ {
													label : "Sales to Assets",
													data : rawData_STA,
													color : "#ff9e80"
												} ];

												var rawData_SNWC = [
														[
																"${manBean.getKeyValue('SNWC')}",
																1 ],
														[
																"${manBean.getKeyValue('SNWC_B')}",
																2 ] ];
												var dataSet_SNWC = [ {
													label : "Sales Net Working Capital",
													data : rawData_SNWC,
													color : "#ccff90"
												} ];

												var rawData_ICR = [
														[
																"${manBean.getKeyValue('ICR')}",
																1 ],
														[
																"${manBean.getKeyValue('ICR_B')}",
																2 ] ];
												var dataSet_ICR = [ {
													label : "Interest Coverage Ratio",
													data : rawData_ICR,
													color : "#4188af"
												} ];

												var rawData_DER = [
														[
																"${manBean.getKeyValue('DER')}",
																1 ],
														[
																"${manBean.getKeyValue('DER_B')}",
																2 ] ];
												var dataSet_DER = [ {
													label : "Debt-Equity Ratio",
													data : rawData_DER,
													color : "#ffe57f"
												} ];

												var rawData_FANR = [
														[
																"${manBean.getKeyValue('FANR')}",
																1 ],
														[
																"${manBean.getKeyValue('FANR_B')}",
																2 ] ];
												var dataSet_FANR = [ {
													label : "Fixed Assets to NetWorth Ratio",
													data : rawData_FANR,
													color : "#ff9e80"
												} ];

												var rawData_OPR = [
														[
																"${manBean.getKeyValue('OPR')}",
																1 ],
														[
																"${manBean.getKeyValue('OPR_B')}",
																2 ] ];
												var dataSet_OPR = [ {
													label : "Operating Profit Ratio",
													data : rawData_OPR,
													color : "#ccff90"
												} ];

												var rawData_NPMR = [
														[
																"${manBean.getKeyValue('NPMR')}",
																1 ],
														[
																"${manBean.getKeyValue('NPMR_B')}",
																2 ] ];
												var dataSet_NPMR = [ {
													label : "Net Profit Margin Ratio",
													data : rawData_NPMR,
													color : "#4188af"
												} ];

												var rawData_RNW = [
														[
																"${manBean.getKeyValue('RNW')}",
																1 ],
														[
																"${manBean.getKeyValue('RNW_B')}",
																2 ] ];
												var dataSet_RNW = [ {
													label : "Return on Net Worth",
													data : rawData_RNW,
													color : "#ffe57f"
												} ];

												var rawData_RCE = [
														[
																"${manBean.getKeyValue('RCE')}",
																1 ],
														[
																"${manBean.getKeyValue('RCE_B')}",
																2 ] ];
												var dataSet_RCE = [ {
													label : "Return on Capital Employed",
													data : rawData_RCE,
													color : "#ff9e80"
												} ];
											</script>

											<div
												style="width: 100%; height: auto; text-align: center; margin: 10px; overflow-y: scroll;">
												<div id="flot-placeholder_CR"
													style="width: 90%; height: 120px;"></div>
												<div id="flot-placeholder_QR"
													style="width: 90%; height: 120px;"></div>
												<div id="flot-placeholder_APD"
													style="width: 90%; height: 120px;"></div>
												<div id="flot-placeholder_CPD"
													style="width: 90%; height: 120px;"></div>
												<div id="flot-placeholder_STA"
													style="width: 90%; height: 120px;"></div>
												<div id="flot-placeholder_SNWC"
													style="width: 90%; height: 120px;"></div>
												<div id="flot-placeholder_ICR"
													style="width: 90%; height: 120px;"></div>
												<div id="flot-placeholder_DER"
													style="width: 90%; height: 120px;"></div>
												<div id="flot-placeholder_FANR"
													style="width: 90%; height: 120px;"></div>
												<div id="flot-placeholder_OPR"
													style="width: 90%; height: 120px;"></div>
												<div id="flot-placeholder_NPMR"
													style="width: 90%; height: 120px;"></div>
												<div id="flot-placeholder_RNW"
													style="width: 90%; height: 120px;"></div>
												<div id="flot-placeholder_RCE"
													style="width: 90%; height: 120px;"></div>
											</div>

										</c:otherwise>
									</c:choose>
								</div>
							</section>
						</div>
						<div class="col-lg-1"></div>
					</section>



					<!-- footer -->
					<div class="row">
						<p class="disclaimer-txt">
							<b>Disclaimer:</b> We believe that you have inputted the data to
							the best of your knowledge as the efficacy of our model is
							dependent on the right set of data to churn effective output.
						</p>
						<div class="col-md-12 internal-footer"
							style="width: 100%; height: 50px; padding-top: 15px;">
							<ul class="list-inline foot-links-int">
								<li><a href="#home">Home</a></li>
								<li><a href="#" data-toggle="modal" data-target="#aboutus">About
										us</a></li>
								<!-- <li><a href="#" data-toggle="modal" data-target="#score-mod">Scoring</a></li> -->
								<li><a href="#" data-toggle="modal" data-target="#faq">Faq</a></li>
								<li><a href="#" data-toggle="modal"
									data-target="#termsofuse">Terms of Use</a></li>
								<li><a href="#" data-toggle="modal" data-target="#privacy">Privacy
										Policy</a></li>
								<li><a href="#" data-toggle="modal" data-target="#contact">Contact</a></li>
							</ul>
							<br>
							<%-- 				<center> --%>
							<!-- 					<p class=foot-txt"">Copyright © Score me 2016-17. All rights -->
							<!-- 						reserved.</p> -->
							<%-- 				</center> --%>
						</div>

					</div>
				</section>
			</section>
		</section>

	</section>
</section>

<!-- Modal for About us -->
<div class="modal modal-wide modal-pos" id="aboutus" tabindex="-1"
	role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog ezCustTrans">
		<div class="modal-content">
			<div class="modal-header modal-section">
				<h1>About Us</h1>
				<button type="button" class="close cls-btn" data-dismiss="modal"
					aria-hidden="true">×</button>
			</div>
						<div class="modal-body">
					<h3 style="color:#f44300;margin-left: 15px;text-decoration: underline;" class="commonAsso">Assocham</h3>
						<div class="col-md-10" style="padding-bottom: 35px;">
							<p class="para-txt" id="assochamPara">
								<span class="bld-txt2"><a href="http://www.assocham.org/">ASSOCHAM
								</a></span> initiated its endeavor of value creation for Indian industry in
								1920. Having in its fold more than 400 Chambers and Trade
								Associations, and serving more than 4,50,000 members from all
								over India. It has witnessed upswings as well as upheavals of
								Indian Economy, and contributed significantly by playing a
								catalytic role in shaping up the Trade, Commerce and Industrial
								environment of the country. Today, ASSOCHAM has emerged as the
								fountainhead of Knowledge for Indian industry, which is all set
								to redefine the dynamics of growth and development in the
								technology driven cyber age of 'Knowledge Based Economy'.
								ASSOCHAM is seen as a forceful, proactive, forward looking
								institution equipping itself to meet the aspirations of
								corporate India in the new world of business. ASSOCHAM is
								working towards creating a conducive environment of India
								business to compete globally. ASSOCHAM derives its strength from
								its Promoter Chambers and other Industry/ Regional
								Chambers/Associations spread all over the country. It was
								established in 1920 by promoter Chambers, representing all
								regions of India.
							</p>
							<h3 style="color:#f44300;margin-left: -2px;text-decoration: underline;" class="commonAsso">ScoreMe</h3>
								<p class="para-txt" id="maincontetnt">
									Score me is an initiative of <span class="bld-txt2"><a
										href="http://www.resurgentindia.com/">Resurgent India
											Limited</a></span>. Resurgent India Limited is a growing Investment
									Banking Firm. We are a SEBI registered Category 1 Merchant Bank
									& ISO Certified 9001:2008 company offering services like Merger
									& Acquisitions, Private Equity, Debt Solutions, Structured
									Finance, Capital Market Solutions, Valuations, Enterprise Risk
									& Tax Services.
								</p>
								<p class="para-txt" id="scoremePara">ScoreMe is a Resurgent
									India Limited initiative, which provides a DIY (Do-It-Yourself)
									tool to MSMEs, assisting them in a better understanding of
									their business health & assess creditworthiness on an ongoing
									basis. The tool captures few of the most significant parameters
									that are ideally looked into by analysts of different financial
									institutions while taking credit decision. If the company
									undergoes the ScoreMe exercise, they get a fair estimate about
									where they are standing vis-a-vis the eyes of the Banks and
									accordingly plan their credit requirements. It has been
									developed as a proprietary algorithmic model that seek inputs
									about the company, churns the data in the model and then
									arrives at a credit score in just 15 seconds. The model has
									been developed taking into consideration the minimum relevant
									parameters.</p>
								<h4 style="color:#f44300;text-decoration: underline;" class="commonAsso">Benefits for MSMEs:</h4>
								<ol class="commonAsso">
								 <li><p class="para-txt"><b style="text-decoration: underline;">Do-It-Yourself Tool:</b>The tool is extremely user-friendly and can be used at one's own convenient place and time.</p></li>
								 <li><p class="para-txt"><b style="text-decoration:underline;">Digital Scoring Tool:</b>With the onset of technological revolution and increasing demand for a Digital Platform, ScoreMe provides a Credit Score online.</p></li>
								 <li><p class="para-txt"><b style="text-decoration:underline;">Slider:</b>To improve credit score, slider gives a fair idea on the scope of improvement and what parameters one should work upon.</p></li> 
								 <li><p class="para-txt"><b style="text-decoration:underline;">Benchmarking:</b>Helps in assessing a company's financial performance vis-a-vis industry benchmark.</p></li> 
								 <li><p class="para-txt"><b style="text-decoration:underline;">Affordable:</b>ScoreMe Charges only Rs. 4,000 for a company to check their credit score.</p></li>
								 <li><p class="para-txt"><b style="text-decoration:underline;">Regular Analysis:</b>One may undertake the exercise multiple times over a period of time to keep track of the business health.</p></li>
								 <li><p class="para-txt"><b style="text-decoration:underline;">Decision-Making Tool:</b>With the insight on different parameters of a company, the promoter would take prudent strategic decisions, thus saving a considerable amount of time, money and energy in the overall process.</p></li>
								</ol>			
						</div>
					</div>

		</div>
	</div>
</div>



<!-- Modal for Faq -->
<div class="modal modal-wide modal-pos" id="faq" tabindex="-1"
	role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog ezCustTrans">
		<div class="modal-content">
			<div class="modal-header modal-section">
				<h1>Faq</h1>
				<button type="button" class="close cls-btn" data-dismiss="modal"
					aria-hidden="true">×</button>
			</div>
			<div class="modal-body">
				<div class="col-md-12" style="padding-bottom: 35px;">
					<h3>What does the score suggest?</h3>
					<p class="para-txt">The score represents the probability of
						availing a loan. It helps a company to assess its business health
						and also assist in monitoring the same over a period of time.</p>
					<h3>How do companies benefit through ScoreMe?</h3>
					<p class="para-txt">Banks, financial institutions, rating
						agencies has a certain way of looking into a funding proposal.
						But, the companies are not very clear as to what they see into.
						This information is generally confidential. It is observed that
						companies spend a considerable amount of time, money and energy in
						persuading the institutions in the process of raising finance but
						in many cases they fail to understand as to why their proposal has
						been rejected. They also sometime fail to place across their
						strength as they are not sure as to what the financial
						institutions are actually looking at. ScoreMe helps companies to
						have a better understanding of their company in the eyes of an
						analyst which helps them in taking up prudent decisions around the
						type of institution to reach to for finance, the time which is
						best suited for placing across the proposal as well as
						understanding the strengths that ideally is required to be
						showcased better. It is a service which may be availed on a
						continuous basis that would help the company to monitor their
						business health better and give a perspective to the strategy that
						would be required to be framed. This insight would lead to a lot
						of saving for the company in terms of energy, money and time.</p>
					<h3>What is the significance of the score?</h3>
					<p class="para-txt">The higher the score, the better is the
						creditworthiness of the company.</p>
					<h3>How many times in a year can one calculate the score?</h3>
					<p class="para-txt">One may take up the scoring exercise at any
						time and for any number of times in a year.</p>
					<h3>What does a decrease in score suggest?</h3>
					<p class="para-txt">It indicates that the business health has
						weakened than what it was earlier due to some changes in the input
						parameters.</p>
					<h3>How much time does it take to calculate the score?</h3>
					<p class="para-txt">If the information is kept handy, the
						process shall not take more than 15 minutes.</p>
				</div>
			</div>

		</div>
	</div>
</div>


<!-- Modal for Terms of use -->
<div class="modal modal-wide modal-pos" id="termsofuse" tabindex="-1"
	role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog ezCustTrans">
		<div class="modal-content">
			<div class="modal-header modal-section">
				<h1 id="scoremeTerms">Terms of Use</h1>
				<h1 id="assochamTerms">T&C for ScoreMe and Assocham</h1>
				<button type="button" class="close cls-btn" data-dismiss="modal"
					aria-hidden="true">×</button>
			</div>
			<div class="modal-body">
				<div class="col-md-12" style="padding-bottom: 35px;">
					<p class="para-txt">
						By accessing this web site and or using the information provided
						on or via this web site you agree to be bound by this Disclaimer.<br>
						<br>Resurgent India Limited shall not have any responsibility
						to maintain the data and services made available on this Web site
						or to supply any corrections, updates, or releases in connection
						therewith. Availability of the data is subject to change without
						prior notice. It is recommended that you review the information
						provided on or via this web site, including the terms of this
						Disclaimer, periodically for changes. The information contained in
						this website is based on sources believed to be reliable but is
						neither all-inclusive nor guaranteed by Resurgent India Limited.
						Opinions, if any, reflect our judgment at this time and are
						subject to change. In the course of our firm's regular business,
						we may perform or seek to perform investment banking services for
						any of the company (ies) mentioned herein or act as advisor or
						lender / borrower to such company (ies) or have other interest
						with respect to any recommendation and related information and
						opinions.
					</p>
					<h3>
						<b>Copyright or Other Notices</b>
					</h3>
					<br>
					<p class="para-txt">
						<b>No part of this material may be:</b><br> Copied,
						photocopied, or duplicated in any form by any means or
						Re-distributed without Resurgent India Limited.' prior written
						consent If you download any information or software from this
						site, you agree that you will not copy it or remove or obscure any
						copyright or other notices or legends contained in any such
						information.
					</p>
					<h3>
						<b>Right Of Refund/Cancellation :</b>
					</h3>
					<p class="para-txt">
						If you choose to cancel your order, you may do so within 14 days
						from the time when you receive your first receipt of payment via
						mail and if the first free trial is only executed (i.e, not more
						than one score has been generated) ,without giving any reason by
						writing at info@scoreme.in. The right of cancellation is not
						applicable in case of renewal. <br> <br>To meet the
						cancellation deadline, you must send your communication of
						cancellation before the 14-day period has expired. <br> <br>Effects
						of cancellation: We will ideally reimburse you within 14 days from
						the day on which we receive your cancellation notice. We will use
						the same mean of payment as you used for the transaction and you
						will not incur any fees for such reimbursement.
					</p>
				</div>
			</div>

		</div>
	</div>
</div>

<!-- Modal for Privacy Policy -->
<div class="modal modal-wide modal-pos" id="privacy" tabindex="-1"
	role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog ezCustTrans">
		<div class="modal-content">
			<div class="modal-header modal-section">
				<h1>Privacy Policy</h1>
				<button type="button" class="close cls-btn" data-dismiss="modal"
					aria-hidden="true">×</button>
			</div>
			<div class="modal-body">
				<div class="col-md-12" style="padding-bottom: 35px;">
					<h3>
						<b>Use of Information and Materials</b>
					</h3>
					<br>
					<p class="para-txt">The information contained in this website
						is for general information purposes only "as is" basis without any
						representations or warranties. While we endeavor to keep the
						information up to date and correct, we make no representations or
						warranties of any kind, express or implied, about the
						completeness, accuracy, reliability, suitability or availability
						with respect to the website or the information, products,
						services, or related graphics contained on the website for any
						purpose. Any reliance you place on such information is therefore
						strictly at your own risk. By accessing this site and any pages
						thereof, you agree to be bound by the terms and conditions below.
						If you do not agree to the terms and conditions below, do not
						access this site or any pages thereof.</p>
					<br>
					<h3>
						<b>Terms of use</b>
					</h3>
					<br>
					<p class="para-txt">The information and materials contained in
						these pages - and the terms, conditions, and descriptions that
						appear - are subject to change. Not all products and services are
						available in all geographic areas. Your eligibility for particular
						products and services is subject to final Resurgent India Limited
						(RIL) determination and acceptance. The inclusion of any links
						does not necessarily imply a recommendation or endorse the views
						expressed within them. Every effort is made to keep the website up
						and running smoothly. However we take no responsibility for, and
						will not be liable for, the website being temporarily unavailable
						due to technical issues beyond our control. This web site and its
						contents is copy right of Resurgent India Limited. All rights are
						reserved. Nothing on this website constitutes, or is meant to
						constitute, advice of any kind. If you require advice in relation
						to any financial matter you should consult an appropriate
						professional.</p>
					<br>
					<h3>
						<b>Limitation of Liability</b>
					</h3>
					<br>
					<p class="para-txt">In no event will Resurgent India Limited be
						liable for any damages, including without limitation direct or
						indirect, special, incidental, or consequential damages, losses or
						expenses arising in connection with this site or use thereof or
						inability to use by any party, or in connection with any failure
						of performance, error, omission, interruption, defect, delay in
						operation or transmission, computer virus or line or system
						failure, even if Resurgent India Limited , or representatives
						thereof, are advised of the possibility of such damages, losses or
						expenses. Hyperlinks to other internet resources are at your own
						risk; the content, accuracy, opinions expressed, and other links
						provided by these resources are not investigated, verified,
						monitored, or endorsed by Resurgent India Limited.</p>

					<br>
					<h3>
						<b>Submissions</b>
					</h3>
					<br>
					<p class="para-txt">All information submitted to Resurgent
						India Limited via this site shall be deemed and remain the
						property of Resurgent India Limited. Resurgent India Limited shall
						be free to use, for any purpose, any ideas, concepts, know-how or
						techniques contained in information a visitor to this site
						provides Resurgent India Limited Limited through this site.
						Resurgent India Limited Limited shall not be subject to any
						obligations of confidentiality regarding submitted information
						except as agreed by Resurgent India Limited, entity having the
						direct customer relationship or as otherwise specifically agreed
						or required by law. Resurgent India Limited is committed to
						safeguard the confidentiality and security of information of the
						users of this web site. Resurgent India Limited may disclose any
						information that is provided through this web site to: any other
						person or entity with the consent of the client, or if Resurgent
						India Limited has a right or duty to disclose or is permitted or
						compelled to so disclose such information by law, for the time
						being in force. For example, Resurgent India Limited may
						share/provide information with/to judicial bodies and regulatory
						authorities who have jurisdiction over Resurgent India Limited.
						Resurgent India may also enter into agreement(s) with other
						company (ies) to provide services to Resurgent India Limited or
						make services and products available to its clients and they may
						thus receive information about the users, but they may only use it
						for those purpose(s) that Resurgent India Limited specifies.</p>

					<br>
					<h3>
						<b>No warranties</b>
					</h3>
					<br>
					<p class="para-txt">This web site, the information and
						materials on the site, and any software made available on the web
						site, are provided "as is" without any representation or warranty,
						express or implied, of any kind, including, but not limited to,
						warranties of merchantability, non-infringement, or fitness for
						any particular purpose or warranty of any kind, express or
						implied, regarding third party content. In spite of RIL's best
						endeavours, there is no warranty of the website being free of any
						computer viruses. Some jurisdictions do not allow for the
						exclusion of implied warranties, so the above exclusions may not
						apply to you. Unlawful use of this website We reserve the right to
						investigate complaints or reported violations of this Privacy
						Policy and to take any action as deemed appropriate including but
						not limited to reporting any suspected unlawful activity to law
						enforcement officials, regulators, or other third parties and
						disclosing any information necessary or appropriate to such
						persons, or entities relating to users profiles, e-mails,
						addresses, usage history, posted materials, IP addresses etc.</p>


					<br>
					<h3>
						<b>Unlawful use of this website</b>
					</h3>
					<br>
					<p class="para-txt">We reserve the right to investigate
						complaints or reported violations of this Privacy Policy and to
						take any action as deemed appropriate including but not limited to
						reporting any suspected unlawful activity to law enforcement
						officials, regulators, or other third parties and disclosing any
						information necessary or appropriate to such persons, or entities
						relating to users profiles, e-mails, addresses, usage history,
						posted materials, IP addresses etc.</p>


					<br>
					<h3>
						<b>Governing law and jurisdiction</b>
					</h3>
					<br>
					<p class="para-txt">This website is for informational purposes
						only and should not be construed as technical advice of any manner
						and by viewing it you are deemed to agree to jurisdiction of the
						courts at Mumbai, India in respect of any action arising there
						from or related thereto. Reasonableness By using this website, you
						agree that the exclusions and limitations of liability set out in
						this website disclaimer are reasonable. If you do not think they
						are reasonable, you must not use this website.</p>

					<br>
					<h3>
						<b>Reasonableness</b>
					</h3>
					<br>
					<p class="para-txt">By using this website, you agree that the
						exclusions and limitations of liability set out in this website
						disclaimer are reasonable. If you do not think they are
						reasonable, you must not use this website.</p>

					<br>
					<h3>
						<b>Unenforceable provisions</b>
					</h3>
					<br>
					<p class="para-txt">If any provision of this website disclaimer
						is, or is found to be, unenforceable under applicable law, that
						will not affect the enforceability of the other provisions of this
						website disclaimer.</p>

					<br>
					<h3>
						<b>Other parties</b>
					</h3>
					<br>
					<p class="para-txt">You accept that, as a limited liability
						entity, we have an interest in limiting the personal liability of
						its officers and employees. You agree that you will not bring any
						claim personally against our officers or employees in respect of
						any losses you suffer in connection with the website.</p>

				</div>
			</div>

		</div>
	</div>
</div>

<!-- Modal for Contact-->
<div class="modal modal-wide modal-pos" id="contact" tabindex="-1"
	role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog ezCustTrans">
		<div class="modal-content">
			<div class="modal-header modal-section">
				<h1>Contact Us On Mail At info@scoreme.in</h1>
				<button type="button" class="close cls-btn" data-dismiss="modal"
					aria-hidden="true">×</button>
			</div>
			<div class="modal-body">
				<div class="col-md-12" style="padding-bottom: 35px;">
					<div class="col-md-2 address">
						<h2>Gurgaon</h2>
						<br>
						<p>Unit no 903-906, 9th Floor, Tower-C, Unitech Business Zone,</p>
						<p>Nirvana Country, Sector-50, Gurgaon, Haryana - 122018</p>
						<p>Tel. No.: +91 124 4754550</p>
						<p>Fax. No.: +91 124 4754584</p>
					</div>
					<div class="col-md-2 address">
						<h2>Mumbai</h2>
						<br>
						<p>303, Central Plaza, 166 CST Road,</p>
						<p>Kalina, Mumbai-400098</p>
						<p>Tel. No.: +91-22-67080400/1/2/3</p>
					</div>

					<div class="col-md-2 address">
						<h2>Kolkata</h2>
						<br>
						<p>CFB F-1, 1st Floor, Paridhan Garment Park,</p>
						<p>19, Canal South Road, Kolkata - 700 015</p>
						<p>Tel. No.: +91 33 6452 5594</p>
						<p>Fax No.: +91 33 2323 2086</p>
					</div>

					<div class="col-md-2 address">
						<h2>Bengaluru</h2>
						<br>
						<p>SreeLaxmi Plaza, 3rd Floor, No. 61, 24th main, 7th cross,</p>
						<p>Marenahalli, J.P. Nagar 2nd phase,</p>
						<p>Bangalore - 560 078, Karnataka</p>
						<p>Tel. No.: +91 9686196061</p>
					</div>

					<div class="col-md-2 address">
						<h2>Chennai</h2>
						<br>
						<p>Building No.1, 2nd Floor, 1st Street, Balaji Nagar
							Ekkaduthangal,</p>
						<p>Chennai - 600032, Tamilnadu</p>
						<p>Tel. No.: +91 90940 02280</p>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>
<script src="js_web/jquery-3.2.1.min.js"></script>
<script>
$(document).ready(function(){
	

});

	var menuId = "menu-dashboard";

	function calculateRating() {

		if ($("#rating-form").parsley('validate')) {
			//$("#rating-form").trigger("reset");
			//$("#modal-bodyID").html("");

			var jsonData = {};

			$(".slimScrollDiv input").each(function() {
				var name = $(this).attr("name");
				var value = $(this).val();
				if (name != undefined)
					jsonData[name] = value;
			});

			$(".slimScrollDiv select").each(function() {
				var name = $(this).attr("name");
				var value = $(this).val();
				if (name != undefined)
					jsonData[name] = value;
			});

			$(".slimScrollDiv .slider").each(function() { 
				var name = $(this).find("input").attr("id");
				var value = $("#currval-"+name).html();
				console.log("value"+value);
				if (name != undefined)
					jsonData[name] = value;
			});

// 			$(".calculate_button").each(function() {
// 				$(this).attr("disabled", "disabled");
// 			});

			$('#ajaxModal2').modal('hide');
			jsonData['slider'] = "yes";

			$(".your_rating_new").hide();
			$(".your_rating").show();
			
			
			$('#ajaxModal').modal('show');
			
			$.ajax({
				url : "rest/cs/calculate/rating",
				type : 'POST',
				dataType : "json",
				//async:false,
				contentType : "application/json; charset=utf-8",
				data : JSON.stringify(jsonData),
				complete : function(data, textStatus, $XHR) {
					data = data["responseJSON"];
					if (data["resp_code"] == "CS1002") {
						var score = data["score"];
						var grade = data["grade"];
						$("#MSG_LTL").html(data["MSG_LTL"]);
						$("#MSG_OD").html(data["MSG_OD"]);
						$("#MSG_LC").html(data["MSG_LC"]);
						$("#MSG_BG").html(data["MSG_BG"]);
						$("#MSG_ROI_LTL").html(data["MSG_ROI_LTL"]);
						$("#MSG_ROI_WC").html(data["MSG_ROI_WC"]);
						var arr = [ "AAA", "AA+", "AA", "AA-", "A+", "A", "A-",
								"BBB+", "BBB", "BBB-", "BB+", "BB", "BB-",
								"B+", "B", "B-", "C", "D" ];
						$(".your_rating").hide();
						var g = new JustGage({
							id : "bigfella",
							value : score,
							min : 0,
							max : 100,
							title : "Score"
						});
						var cert = data["REPORT"];
						$(".your_rating_new").show();
						$("#rating_now").html("RATING: " + grade);
						$("#certid").attr("href", cert);
						//$("#rating_" + arr.indexOf(grade)).addClass("rating_row");
					} else
						$(".your_rating").html(data["resp_msg"]);

// 					$(".calculate_button").each(function() {
// 						//$(this).removeAttr("disabled");
// 						 $(this).prop("disabled",false);
// 					});
				}
			});

		} else {

			console.log("Validation Fails for Rating-Form...");

		}

	}

	function getConfirmPage() {

		var x = "";

		$(".slimScrollDiv .row").each(function() {
			var label = $(this).find("span").html();
			var name = $(this).find(".slider2").attr("id");
			var value = $("#currval-"+name).html();
			//var value = $(this).find(".tooltip .tooltip-inner").html();
			if(value!=undefined){
				x += "<tr><td>" + label + "</td><td>" + value + "</td></tr>";
			}
		});

		$("#ratingtable").html(x);
		$('#ajaxModal2').modal('show');

	}
</script>

