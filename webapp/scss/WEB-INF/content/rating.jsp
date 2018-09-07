<%@page import="com.creditscore.web.portal.bean.CompanyBean"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<style>
        .modal-width {
            width: 1000px;
            background-color: #fff;
            margin: 0 auto;
            margin-top: 40px;
            height: 510px;
        }
        
        .font-style {
            text-align: left;
            color: #f44300;
            font-family: 'Raleway', sans-serif;
            font-size: 24px;
        }
        
        .address {
            color: #000;
            font-family: 'Raleway', sans-serif;
            font-size: 13px;
        }
        
        .input-setting {
            border-radius: 0px !important;
            height: 25px !important;
            border: solid 1px #d1d2d3 !important;
            padding: 2px 7px !important;
            font-style: normal;
            background: #fff;
            font-size: 12px;
        }
        
        .input-setting1 {
            border-radius: 0px !important;
            height: 125px !important;
            border: solid 1px #d1d2d3 !important;
            padding: 2px 7px !important;
            font-style: normal;
            background: #fff;
            font-size: 12px;
        }
        
        h2 {
            text-transform: uppercase;
            font-size: 23px;
            padding-bottom: 5px;
            padding-top: 10px;
            font-family: fantasy;
            border-bottom: 1px solid #f44300;
            text-align: center;
        } .modal-header{
            margin-top: -36px;
        }
       
        .modal-header .close {
            background: #f44300;
            padding: 2px 7px 3px 7px;
            border-radius: 50%;
        }
        
        input.error {
            border: 1px solid #f44300 !important;
            background-size: 17px;
        }
        
        label.error {
            font-size: 12px !important;
            color: #f44300 !important;
        }
        
        textarea.error {
            border: 1px solid #f44300 !important;
            background-size: 17px;
        }
        
    </style>


<section id="content">
	<section class="vbox">
		<section class="scrollable padder">
			<section class="row m-b-md">
				<div class="col-sm-1"></div>
				<div class="col-sm-10">
					<div class="m-b-md">

						<div class="row" id="rating_row">
							<div class="col-sm-6"
								style="border: 1px solid #ccc; margin-top: 12px;">
								<h5>
									<i><span id="pf">%</span> form completed</i>
								</h5>
								<div class="progress progress-sm progress-striped"
									style="background-color: #fff;" id="formp">
									<div class="progress-bar bg-danger" data-toggle="tooltip"
										data-original-title="10%" style="width: 10%"></div>
								</div>
								<h6>
									<i>Note: Please input all the below figures in INR</i>
								</h6>
							</div>
							<div class="col-sm-6 text-right" style="padding-top: 30px;">
								<select id="finYear">
									<option  value="2015-2016">2015-2016</option>
									<option value="2016-2017" selected>2016-2017</option>
									
								</select> &nbsp;&nbsp;
								<button type="button" onclick="saveDraft()"
									class="btn btn-warning btn-s-xs save_button"
									style="background: #444 !important; border: 1px solid #444 !important;">Save
									Draft</button>
								&nbsp;&nbsp;
								<c:if test="${accountBean.balance > 0}">
									<button type="button" onclick="getConfirmPage()"
										class="btn btn-success btn-s-xs"
										style="background: #8BC34A !important; border: 1px solid #689F38 !important">Confirm</button>
								</c:if>
								<button class="btn btn-primary btn-s-xs" data-toggle="modal"
								data-target="#myModalHorizontal">Upload Documents</button>
							</div>
						</div>
					</div>

					<c:if test="${accountBean.balance < 1}">
						<div class="alert alert-danger" id="save-draft-warning">
							<button type="button" class="close" data-dismiss="alert">x</button>
							<i class="fa fa-ok-sign"></i><strong>Action Required!</strong>
							You don't have enough balance to calculate score. <a href="#"
								onclick="callApp('page,purchase');" class="alert-link">Click
								here </a>to purchase credits.
						</div>
					</c:if>

					<div class="alert alert-success" id="save-draft-success"
						style="display: none;">
						<button type="button" class="close" onclick="hidediv(this);">x</button>
						<i class="fa fa-ok-sign"></i><strong>Success!</strong> Draft has
						been successfully saved. <a href="#" class="alert-link">Next
							time we will populate input value with the latest saved draft.</a>.
					</div>

					<div class="alert alert-success" id="save-draft-success-auto"
						style="display: none;">
						<button type="button" class="close" onclick="hidediv(this);">x</button>
						<i class="fa fa-ok-sign"></i><strong>Autosaved!</strong> Draft has
						been successfully saved just now.</a>.
					</div>

					<div class="alert alert-danger" id="save-draft-failure"
						style="display: none;">
						<button type="button" class="close" onclick="hidediv(this);">x</button>
						<i class="fa fa-ok-sign"></i><strong>Failure!</strong> Unable to
						save your draft at this time. <a href="#" class="alert-link">Please
							check your Internet connectivity and try again.</a>.
					</div>

					<div class="alert alert-danger" id="validation-failure"
						style="display: none;">
						<button type="button" class="close" onclick="hidediv(this);">x</button>
						<i class="fa fa-ok-sign"></i><strong>Validation failed!</strong>
						Please fill all the form fields and try again.
					</div>

					<div class="row rating_box">
						<div class="col-sm-12"
							style="border: 1px solid #ccc; padding: 12px;">
							<form id="rating-form" data-validate="parsley" action="#"
								enctype="multipart/form-data">
								<div class="panel-group m-b" id="accordion2">
									<div class="panel panel-default"
										style="border: 1px solid #ccc !important;">
										<div class="panel-heading" style="font-size: 16px;">
											<a id="coll1" class="accordion-toggle tg1 collapsed"
												data-toggle="collapse" data-parent="#accordion2"
												href="#collapseOne"> Company Basic Information </a>
										</div>
										<div id="collapseOne" class="panel-collapse collapse"
											style="height: 0px;">
											<div class="panel-body text-sm">
												<div class="row">
													<div class="col-sm-4">
														<div class="form-group">
															<span id="input-G4-label">Company Name <span
																class="mandat">*</span>
															</span> <input type="text" readonly="readonly"
																class="form-control parsley-validated" name="input-G4"
																value="${userBean.companyName}" id="input-G4"
																data-required="true">
														</div>
													</div>
													<div class="col-sm-4">
														<div class="form-group">
															<span id="input-G5-label">Nature of Business</span> <span
																class="mandat">*</span> <input type="text"
																readonly="readonly" value="${userBean.groupName}"
																class="form-control parsley-validated" name="input-G5"
																id="input-G5" data-required="true">
														</div>
													</div>
													<div class="col-sm-4">
														<div class="form-group">
															<span id="input-G5-label">Industry Type</span> <span
																class="mandat">*</span> <input type="text"
																readonly="readonly" value="${userBean.industryName}"
																class="form-control parsley-validated" name="input-G6"
																id="input-G6" data-required="true">
														</div>
													</div>
													<input type="hidden" value="${userBean.industryId}" id="industryId" name="industryId">
												</div>
												<div class="row" style="display: none;">
													<c:forEach items="${companyBean.companyParams}" var="entry"
														varStatus="loop">
														<c:if test="${entry.name=='Request'}">
															<c:forEach items="${entry.param}" var="item">
																<input type="hidden" name="${item.name}"
																	value="${item.label}" />
															</c:forEach>
														</c:if>
													</c:forEach>
												</div>
											</div>
										</div>
									</div>
									<input type="hidden" id="nam" value="${userBean.userInfo.id} ">

									<div class="panel panel-default"
										style="border: 1px solid #ccc !important;">
										<div class="panel-heading" style="font-size: 16px;">
											<a id="coll1" class="accordion-toggle tg2 collapsed"
												data-toggle="collapse" data-parent="#accordion2"
												href="#collapseLoan"> Facilities </a>
										</div>
										<div id="collapseLoan" class="panel-collapse collapse"
											style="height: 0px;">
											<div class="panel-body text-sm">
												<div class="row clearfix">
													<div class="col-md-12 column">

														<c:forEach items="${companyBean.companyParams}"
															var="entry" varStatus="loop">
															<c:if test="${entry.name=='SCOPE'}">
																<div class="row">
																	<c:forEach items="${entry.param}" var="item">
																		<div class="col-sm-3">
																			<c:if
																				test="${item.type == 'T' || item.type == 'TEXT'}">
																				<div class="form-group">
																					<span id="${item.name}-label">${item.label}
																						<c:if test="${item.mandat eq 'true'}">
																							<span class="mandat">*</span>
																						</c:if>
																					</span> <input type="text" maxlength="20"
																						<c:if test="${item.mandat eq 'true'}">
																						data-required="true"
																					</c:if>
																						data-parsley-type="number" data-parsley-min="0"
																						class="form-control" name="${item.name}"
																						title="${item.desc}" onchange="getProgress()"
																						value="<c:out value='${companyBean.getKeyValue(item.name)}' />"
																						id="${item.name}">
																				</div>
																			</c:if>
																			<c:if
																				test="${item.type == 'N' || item.type == 'NUMBER'}">
																				<div class="form-group">
																					<span id="${item.name}-label">${item.label}
																						<c:if test="${item.mandat eq 'true'}">
																							<span class="mandat">*</span>
																						</c:if>
																					</span> <input type="text" maxlength="20"
																						<c:if test="${item.mandat eq 'true'}">
																							data-required="true"
																						</c:if>
																						data-parsley-type="integer" data-parsley-min="0"
																						class="form-control number" name="${item.name}"
																						title="${item.desc}" onchange="getProgress()"
																						value="<c:out value='${companyBean.getKeyValue(item.name)}' />"
																						id="${item.name}">
																				</div>
																			</c:if>
																			<c:if
																				test="${item.type == 'H' || item.type == 'HIDDEN'}">
																				<div class="form-group">
																					<input type="hidden" name="${item.name}"
																						id="${item.name}" />
																				</div>
																			</c:if>
																		
																			
																		</div>
																	</c:forEach>
																</div>
															</c:if>
														</c:forEach>
														<br />

														<div class="facility-box">
															<div class="text-right">
																<button type="button" id="add_row"
																	class="btn btn-success btn-s-xs">Add Row</button>
																&nbsp;&nbsp;
																<button type="button" id="delete_row"
																	class="btn btn-failure btn-s-xs">Delete Row</button>
															</div>
															<br />
															<table class="table table-bordered table-hover"
																id="tab_logic">
																<thead>
																	<tr>
																		<th class="text-center">#</th>
																		<th class="text-center">Facilities</th>
																		<th class="text-center">Amount (in INR)</th>
																		<th class="text-center">ROI / ProcessingFee /
																			Gurantee Commission (in %)</th>
																		<th class="text-center">Bank Name</th>
																	</tr>
																</thead>
																<tbody class="fac_table">
																	<c:choose>
																		<c:when test="${companyBean.facts.size() > 0}">
																			<c:forEach var="f" items="${companyBean.facts}"
																				varStatus="loop">
																				<tr id='addr${loop.index}'>
																					<td class='rowno'>${loop.index + 1}</td>
																					<td><select name="name${loop.index}"
																						title="Please select the nature of facilities that you are presently enjoying from banks."
																						id="name${loop.index}" class="form-control">
																							<option value="">Select facility</option>
																							<option value="TERM_LOAN">Term Loan</option>
																							<option value="WC_FUND">Working Capital
																								Fund Based</option>
																							<option value="WC_LC">Working Capital LC</option>
																							<option value="WC_BG">Working Capital
																								Bank Guarantee</option>
																					</select></td>
																					<td><input type="text"
																						title="Please let us know the amount for which the facility has been sanctioned."
																						name='amount${loop.index}'
																						id='amount${loop.index}'
																						placeholder='Amount (in INR)'
																						class="form-control number" value="${f.amount}" /></td>
																					<td><input type="text"
																						title="Please let us know of the Rate of Interest (ROI)/Processing Fee/Guarantee Commission in % at which the respective facilities has been sanctioned"
																						name='percent${loop.index}'
																						id='percent${loop.index}' placeholder='(in %)'
																						class="form-control number" value="${f.percent}" /></td>
																					<td><select name='bank${loop.index}'
																						onchange="getOtherText(this)"
																						id='bank${loop.index}' class='form-control'
																						title='Please let us know of the name of the Bank(s) from which the facility has been undertaken'>
																							<option value=''>Select Bank</option>
																							<option value='Allahabad Bank'>Allahabad
																								Bank</option>
																							<option value='AXIS Bank'>AXIS Bank</option>
																							<option value='Bank of Baroda'>Bank of
																								Baroda</option>
																							<option value='Bank of India'>Bank of
																								India</option>
																							<option value='Bank of Maharashtra'>Bank
																								of Maharashtra</option>
																							<option value='Canara Bank'>Canara Bank</option>
																							<option value='Central Bank of India'>Central
																								Bank of India</option>
																							<option value='Corporation Bank'>Corporation
																								Bank</option>
																							<option value='Dena Bank'>Dena Bank</option>
																							<option value='HDFC Bank'>HDFC Bank</option>
																							<option value='ICICI Bank'>ICICI Bank</option>
																							<option value='IDBI Bank'>IDBI Bank</option>
																							<option value='Indian Bank'>Indian Bank</option>
																							<option value='Indian Overseas Bank'>Indian
																								Overseas Bank</option>
																							<option value='Oriental Bank of Commerce'>Oriental
																								Bank of Commerce</option>
																							<option value='Punjab National Bank'>Punjab
																								National Bank</option>
																							<option value='State Bank of Bikaner and Jaipur'>State
																								Bank of Bikaner and Jaipur</option>
																							<option value='State Bank of Hyderabad'>State
																								Bank of Hyderabad</option>
																							<option value='State Bank of India'>State
																								Bank of India</option>
																							<option value='State Bank of Mysore'>State
																								Bank of Mysore</option>
																							<option value='State Bank of Patiala'>State
																								Bank of Patiala</option>
																							<option value='State Bank of Travancore'>State
																								Bank of Travancore</option>
																							<option value='Syndicate Bank'>Syndicate
																								Bank</option>
																							<option value='UCO Bank'>UCO Bank</option>
																							<option value='Union Bank of India'>Union
																								Bank of India</option>
																							<option value='United Bank of India'>United
																								Bank of India</option>
																							<option value='Vijaya Bank'>Vijaya Bank</option>
																							<option value='Other'>Other</option>
																					</select></td>
																				</tr>
																				<script>
																					document
																							.getElementById("name${loop.index}").value = '${f.facility}';
																					if(SelectHasValue('bank${loop.index}','${f.bank}')) {
																						document.getElementById("bank${loop.index}").value = '${f.bank}';
																					} else {
																						var ht = document.getElementById("bank${loop.index}").innerHTML;
																						ht += "<option selected value='${f.bank}'>${f.bank}</option>";
																						document.getElementById("bank${loop.index}").innerHTML = ht;
																					}
																				</script>
																			</c:forEach>
																		</c:when>
																		<c:otherwise>
																			<tr id='addr0'>
																				<td class='rowno'>1</td>
																				<td><select name="name0" id="name0"
																					class="form-control"
																					title="Please select the nature of facilities that you are presently enjoying from banks.">
																						<option value="">Select facility</option>
																						<option value="TERM_LOAN">Term Loan</option>
																						<option value="WC_FUND">Working Capital
																							Fund Based</option>
																						<option value="WC_LC">Working Capital LC</option>
																						<option value="WC_BG">Working Capital
																							Bank Guarantee</option>
																				</select></td>

																				<td><input type="text"
																					title="Please let us know the amount for which the facility has been sanctioned."
																					name='amount${loop.index}' id='amount${loop.index}'
																					placeholder='Amount (in INR)'
																					class="form-control number" /></td>
																				<td><input type="text"
																					title="Please let us know of the Rate of Interest (ROI)/Processing Fee/Guarantee Commission in % at which the respective facilities has been sanctioned"
																					name='percent${loop.index}'
																					id='percent${loop.index}' placeholder='(in %)'
																					class="form-control number" /></td>
																				<td><select name='bank${loop.index}'
																					onclick="getOtherText(this)" id='bank${loop.index}'
																					class="form-control"
																					title="Please let us know of the name of the Bank(s) from which the facility has been undertaken">
																						<option value="">Select Bank</option>
																						<option value="Allahabad Bank">Allahabad
																							Bank</option>
																						<option value="AXIS Bank">AXIS Bank</option>
																						<option value="Bank of Baroda">Bank of
																							Baroda</option>
																						<option value="Bank of India">Bank of
																							India</option>
																						<option value="Bank of Maharashtra">Bank
																							of Maharashtra</option>
																						<option value="Canara Bank">Canara Bank</option>
																						<option value="Central Bank of India">Central
																							Bank of India</option>
																						<option value="Corporation Bank">Corporation
																							Bank</option>
																						<option value="Dena Bank">Dena Bank</option>
																						<option value="HDFC Bank">HDFC Bank</option>
																						<option value="ICICI Bank">ICICI Bank</option>
																						<option value="IDBI Bank">IDBI Bank</option>
																						<option value="Indian Bank">Indian Bank</option>
																						<option value="Indian Overseas Bank">Indian
																							Overseas Bank</option>
																						<option value="Oriental Bank of Commerce">Oriental
																							Bank of Commerce</option>
																						<option value="Punjab National Bank">Punjab
																							National Bank</option>
																						<option value="State Bank of Bikaner and Jaipur">State
																							Bank of Bikaner and Jaipur</option>
																						<option value="State Bank of Hyderabad">State
																							Bank of Hyderabad</option>
																						<option value="State Bank of India">State
																							Bank of India</option>
																						<option value="State Bank of Mysore">State
																							Bank of Mysore</option>
																						<option value="State Bank of Patiala">State
																							Bank of Patiala</option>
																						<option value="State Bank of Travancore">State
																							Bank of Travancore</option>
																						<option value="Syndicate Bank">Syndicate
																							Bank</option>
																						<option value="UCO Bank">UCO Bank</option>
																						<option value="Union Bank of India">Union
																							Bank of India</option>
																						<option value="United Bank of India">United
																							Bank of India</option>
																						<option value="Vijaya Bank">Vijaya Bank</option>
																						<option value="Other">Other</option>
																				</select></td>

																			</tr>

																		</c:otherwise>
																	</c:choose>

																</tbody>
															</table>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<c:forEach items="${companyBean.companyParams}" var="entry"
										varStatus="loop">
										<c:if
											test="${entry.name!='Request' and entry.name!='Company' and entry.name!='SCOPE' and entry.name!='SLIDER'}" >
											<div class="panel panel-default"
												style="border: 1px solid #ccc !important;">
												<div class="panel-heading" style="font-size: 16px;">
													<a class="accordion-toggle tg3 collapsed"
														data-toggle="collapse" data-parent="#accordion2"
														href="#collapse${loop.index}"> ${entry.name} </a>
												</div>
												<div id="collapse${loop.index}"
													class="panel-collapse collapse" style="height: 0px;">
													<div class="panel-body text-sm">
														<div class="row">
															<c:forEach items="${entry.param}" var="item">
																<div class="col-sm-4">
																	<c:if test="${item.type == 'T' || item.type == 'TEXT'}">
																		<div class="form-group">
																			<span id="${item.name}-label">${item.label} <c:if
																					test="${item.mandat eq 'true'}">
																					<span class="mandat">*</span>
																				</c:if>
																			</span> <input type="text" maxlength="20"
																				<c:if test="${item.mandat eq 'true'}">
																						data-required="true"
																					</c:if>
																				data-parsley-type="number" data-parsley-min="0"
																				class="form-control" name="${item.name}"
																				title="${item.desc}" onchange="getProgress()"
																				value="<c:out value='${companyBean.getKeyValue(item.name)}' />"
																				id="${item.name}">
																		</div>
																	</c:if>
																	<c:if
																		test="${item.type == 'N' || item.type == 'NUMBER'}">
																		<div class="form-group">
																			<span id="${item.name}-label">${item.label} <c:if
																					test="${item.mandat eq 'true'}">
																					<span class="mandat">*</span>
																				</c:if>
																			</span> <input type="text" maxlength="20"
																				<c:if test="${item.mandat eq 'true'}">
																						data-required="true"
																					</c:if>
																				data-parsley-type="number" data-parsley-min="0"
																				class="form-control number" name="${item.name}"
																				title="${item.desc}" onchange="getProgress()"
																				value="<c:out value='${companyBean.getKeyValue(item.name)}' />"
																				id="${item.name}" >
																		</div>
																	</c:if>
																	<c:if
																		test="${item.type == 'S' || item.type == 'SELECT'}">
																		<div class="form-group">
																			<span id="${item.name}-label">${item.label} <c:if
																					test="${item.mandat eq 'true'}">
																					<span class="mandat">*</span>
																				</c:if>
																			</span> <select name="${item.name}" id="${item.name}"
																				<c:if test="${item.mandat eq 'true'}">
																						data-required="true"
																					</c:if>
																				onchange="getProgress()" title="${item.desc}"
																				class="form-control m-b">
																				<c:choose>
																					<c:when
																						test="${companyBean.getKeyValue(item.name) != ''}">
																						<option selected
																							value="<c:out value='${companyBean.getKeyValue(item.name)}' />">
																							<c:out
																								value='${companyBean.getKeyValue(item.name)}' /></option>
																					</c:when>
																					<c:otherwise>
																						<option selected value="">Not Selected</option>
																					</c:otherwise>
																				</c:choose>
																				<c:forEach var="i" items="${item.values}">
																					<option value="${i}">${i}</option>
																				</c:forEach>
																			</select>
																			<input type="hidden" id="uuid" name="uuid">
																		</div>
																	</c:if>
																</div>
															</c:forEach>
														</div>
													</div>
												</div>
											</div>
										</c:if>
									</c:forEach>
								</div>

							</form>
							<div class="col-sm-6 col-sm-offset-1 text-right">
								<button type="button" onclick="saveDraft()"
									class="btn btn-warning btn-s-xs save_button"
									style="background: #444 !important; border: 1px solid #444 !important;">Save
									Draft</button>
								&nbsp;&nbsp;
								<c:if test="${accountBean.balance > 0}">
									<button type="button" onclick="getConfirmPage()"
										class="btn btn-success btn-s-xs"
										style="background: #8BC34A !important; border: 1px solid #689F38 !important">Confirm</button>
								</c:if>
							</div>
						</div>
					</div>

					<!-- Modal -->
					<div class="modal fade" id="myModalHorizontal" tabindex="-1"
						role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">
						<div class="modal-dialog">
							<div class="modal-content"
								style="width: 130%; margin-left:-58px; height: 395px">
								<!-- Modal Header -->
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">
										<span aria-hidden="true">&times;</span> <span class="sr-only">Close</span>
									</button>
									<h4 class="modal-title" id="myModalLabel">Upload Files</h4>
								</div>

								<!-- Modal Body -->
								<div class="modal-body">
									<div class="alert alert-success" id="save-upload-success"
										style="display: none;">
										<button type="button" class="close" onclick="hidediv(this);">x</button>
										<i class="fa fa-ok-sign"></i><strong>Success!</strong> File
										has been uploaded successfully. 
									</div>

									<form class="form-horizontal" enctype="multipart/form-data">
										
									<div class="col-md-12">
										<div class="form-group">
											<label class="col-sm-2 control-label" >Balance
												Sheet</label>
											<div class="col-md-4">
												<input type="file" id="file1" class="form-control"
													 placeholder="BalanceSheet" />
											</div>

											<label class="col-sm-2 control-label" >Profit
												and Loss</label>
											<div class="col-md-4">
												<input type="file" class="form-control" id="file2"
													placeholder="Profit and Loss" />
											</div>
										</div>
									</div>
									<div class="col-md-12">
									  <div class="form-group">
										<label class="col-sm-2 control-label" >Bank
												Statement</label>
											<div class="col-md-4">
												<input type="file" class="form-control" id="file3"
													placeholder="Bank Statement" />
											</div>
											
											<label class="col-sm-2 control-label" >Statement
												Start Date</label>
											<div class="col-md-4">
												<input type="date" class="form-control" id="startDate"
													placeholder="Statement Start Date" />
											</div>
                                           </div>
										</div>
										
										<div class="col-md-12">
										  <div class="form-group">
										   <label class="col-sm-2 control-label" for="inputEmail3">Statement
												End Date</label>
											<div class="col-md-6">
												<input type="date" class="form-control" id="endDate"
													placeholder="Statement End Date" />
											</div>
										</div>
                                        </div>

										<div class="form-group">
											<div class="col-sm-offset-2 col-sm-10">
												<button type="button" class="btn btn-default"
													onclick="uploadData()">Upload</button>
											</div>
										</div>
									</form>

								</div>

							</div>

						</div>
					</div>

					<div class="modal fade" id="ajaxModal" role="dialog"
						style="display: none;" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal" style="margin-top: 29px;">×</button>
									<h4 class="modal-title" style="margin-top: 29px;">Confirm Inputs</h4>
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
										<tbody id="ratingtable">
										</tbody>
									</table>
								</div>
								<div class="modal-footer">
									<button type="button" onclick="printDiv()"
										class="btn btn-warning btn-s-xs left" style="float: left;">Print</button>
									<button id="download" type="button"
										class="btn btn-warning btn-s-xs left"
										style="float: left; display: none;">Download</button>
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

				</div>
				<div class="col-sm-1"></div>
			</section>

			<!-- footer -->
			<div class="row">
				<p class="disclaimer-txt" style="margin-top: 150px;">
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
						<li><a href="#" data-toggle="modal" data-target="#termsofuse">Terms
								of Use</a></li>
						<li><a href="#" data-toggle="modal" data-target="#privacy">Privacy
								Policy</a></li>
						<li><a href="#" data-toggle="modal" data-target="#contact">Contact</a></li>
					</ul>
				</div>

			</div>
		</section>
	</section>
	<a href="#" class="hide nav-off-screen-block"
		data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a>
</section>

<div class="row rating_box_new" style="display: none;">
	<div class="col-sm-12">
		<form id="rating-form" data-validate="parsley" action="#">
			<section class="panel panel-default">
				<div class="panel-body" style="margin-bottom: 50px;">
					Basis your inputs placed, the final result for your company is as
					follows,<br /> <br />
					<div class="your_rating">
						<img src="images/loading-bar.gif" /> <br /> <img
							src="images/loading-state.gif"
							style="width: 450px; margin-left: -15px;" />
						<h5>Please wait while we are evaluating your company
							health...</h5>
					</div>

					<div class="your_rating_new" style="display: none;">
						<div class="row" style="border: 1px solid #ccc; margin-top: 10px;">
							<div class="col-md-3"
								style="padding: 10px; border-bottom-right-radius: 25px; background: rgba(255, 175, 75, 1); background: -moz-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 10, 10, 1) 100%); background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255, 175, 75, 1)), color-stop(100%, rgba(255, 10, 10, 1))); background: -webkit-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 10, 10, 1) 100%); background: -o-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 10, 10, 1) 100%); background: -ms-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 10, 10, 1) 100%); background: linear-gradient(to right, rgba(255, 175, 75, 1) 0%, rgba(255, 10, 10, 1) 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffaf4b', endColorstr='#ff0a0a', GradientType=1);">
								<p class="rating"
									style="color: #fff; font-weight: 400; text-align: center; text-transform: uppercase;"
									id="rating_now">Rating</p>
							</div>
							<div class="col-md-6">
								<div id='bigfella' style='width: 400px; height: 320px'></div>
							</div>

							<div class="col-md-3"
								style="padding: 10px; border-bottom-left-radius: 25px; background: rgba(255, 10, 10, 1); background: -moz-linear-gradient(left, rgba(255, 10, 10, 1) 0%, rgba(255, 175, 75, 1) 100%); background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255, 10, 10, 1)), color-stop(100%, rgba(255, 175, 75, 1))); background: -webkit-linear-gradient(left, rgba(255, 10, 10, 1) 0%, rgba(255, 175, 75, 1) 100%); background: -o-linear-gradient(left, rgba(255, 10, 10, 1) 0%, rgba(255, 175, 75, 1) 100%); background: -ms-linear-gradient(left, rgba(255, 10, 10, 1) 0%, rgba(255, 175, 75, 1) 100%); background: linear-gradient(to right, rgba(255, 10, 10, 1) 0%, rgba(255, 175, 75, 1) 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff0a0a', endColorstr='#ffaf4b', GradientType=1);">
								<a href="#" target="_blank" id="certid"><p class="Download"
										style="color: #fff; font-weight: 400; text-align: center; text-transform: uppercase;">Download
										Report</p></a>
							</div>
							<div class="col-md-12">
								<table class="table m-b-none">
									<tr>
										<td style="border-top: 1px solid #fff; width: 70%;">


											<table class="table m-b-none" style="width: 100%;">
												<tbody>
													<tr style="background-color: rgba(22, 29, 12, 0.1);">
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
														<td>Scope of negotiations on ROI for term loan</td>
														<td id="MSG_ROI_LTL"></td>
													</tr>
													<tr style="text-align: center;">
														<td>Scope of negotiations on ROI for working capital
															loan</td>
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


						<br /> <br /> <i>Please note that the rating assigned is
							representative and is not supposed to be placed across at any
							forum as we are NOT an accredited rating agency by SEBI or RBI.
							Our sole objective is to assist companies in understanding their
							business health from the perspective of an analyst.</i> <br /> <br />
						Thanks a lot for availing our services . Hope you had a great
						experience. Please let us know of your FEEDBACK at
						info@scoreme.in. It will be of immense help to us for improving
						our services. <br /> <br /> TEAM – SCORE ME
					</div>
					<footer class="panel-footer text-right bg-light lter"> </footer>
			</section>
		</form>
	</div>
</div>


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
						persuading the institutions in the process of raising but in many
						cases they fail to understand as to why their proposal has been
						rejected. They also sometime fail to place across their strength
						as they are not sure as to what the financial institutions are
						actually looking at. ScoreMe helps companies to have a better
						understanding of their company in the eyes of an analyst which
						helps them in taking up prudent decisions around the type of
						institution to reach to for finance, the time which is best suited
						for placing across the proposal as well as understanding the
						strengths that ideally is required to be showcased better. It is a
						service which may be availed on a continuous basis that would help
						the company to monitor their business health better and give a
						perspective to the strategy that would be required to be framed.
						This insight would lead to a lot of saving for the company in
						terms of energy, money and time.</p>
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
				<h1>Contact Us</h1>
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



<span style="display: none;">
	<table class="table m-b-none">
		<tr id="rating_0">
			<td>&nbsp;&nbsp;&nbsp;AAA</td>
			<td class="row_desc">Highest Safety</td>
		</tr>
		<tr id="rating_1">
			<td>&nbsp;&nbsp;&nbsp;AA+</td>
			<td class="row_desc">High Safety</td>
		</tr>
		<tr id="rating_2">
			<td>&nbsp;&nbsp;&nbsp;AA</td>
			<td class="row_desc">High Safety</td>
		</tr>
		<tr id="rating_3">
			<td>&nbsp;&nbsp;&nbsp;AA-</td>
			<td class="row_desc">Adequate Safety</td>
		</tr>
		<tr id="rating_4">
			<td>&nbsp;&nbsp;&nbsp;A+</td>
			<td class="row_desc">Adequate Safety</td>
		</tr>
		<tr id="rating_5">
			<td>&nbsp;&nbsp;&nbsp;A</td>
			<td class="row_desc">Adequate Safety</td>
		</tr>
		<tr id="rating_6">
			<td>&nbsp;&nbsp;&nbsp;A-</td>
			<td class="row_desc">Adequate Safety</td>
		</tr>
		<tr id="rating_7">
			<td>&nbsp;&nbsp;&nbsp;BBB+</td>
			<td class="row_desc">Moderate Safety</td>
		</tr>
		<tr id="rating_8">
			<td>&nbsp;&nbsp;&nbsp;BBB</td>
			<td class="row_desc">Moderate Safety</td>
		</tr>
		<tr id="rating_9">
			<td>&nbsp;&nbsp;&nbsp;BBB-</td>
			<td class="row_desc">Inadequate Safety</td>
		</tr>
		<tr id="rating_10">
			<td>&nbsp;&nbsp;&nbsp;BB+</td>
			<td class="row_desc">Inadequate Safety</td>
		</tr>
		<tr id="rating_11">
			<td>&nbsp;&nbsp;&nbsp;BB</td>
			<td class="row_desc">Inadequate Safety</td>
		</tr>
		<tr id="rating_12">
			<td>&nbsp;&nbsp;&nbsp;BB-</td>
			<td class="row_desc">High Risk</td>
		</tr>
		<tr id="rating_13">
			<td>&nbsp;&nbsp;&nbsp;B+</td>
			<td class="row_desc">High Risk</td>
		</tr>
		<tr id="rating_14">
			<td>&nbsp;&nbsp;&nbsp;B</td>
			<td class="row_desc">High Risk</td>
		</tr>
		<tr id="rating_15">
			<td>&nbsp;&nbsp;&nbsp;B-</td>
			<td class="row_desc">High Risk</td>
		</tr>
		<tr id="rating_16">
			<td>&nbsp;&nbsp;&nbsp;C</td>
			<td class="row_desc">Substantial Risk</td>
		</tr>
		<tr id="rating_17">
			<td>&nbsp;&nbsp;&nbsp;D</td>
			<td class="row_desc">Default</td>
		</tr>
	</table>
</span>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>



	var menuId = "menu-rating";

	if (hideButton == true) {
		document.getElementById("header_button").style.display = "none";
	}

	$(document).ready(function(){
         $("#finYear").val();
       //  alert("fin yaera::"+$("#finYear").val());
         $("#input-G186").val($("#finYear").val());
 		console.log("g1856 value"+$("#input-G186").val());
 		$("#finYear").change(function(){
 			 $("#input-G186").val($("#finYear").val());
 			 console.log("after change::"+$("#input-G186").val());
	 	});
	});

	function getProgress() {

		var total = 0;
		var done = 0;

		$(".panel-body input").each(function() {
			var name = $(this).attr("name");
			if (name.indexOf("input") != -1 && $(this).attr("data-required")!=undefined) {
				var value = $(this).val();
				total++;
				if (value.trim() != '')
					done++;
			}
		});

		$(".panel-body select").each(function() {
			var name = $(this).attr("name");
			if (name.indexOf("input") != -1 && $(this).attr("data-required")!=undefined) {
				var value = $(this).val();
				total++;
				if (value.trim() != '')
					done++;
			}
		});

		var x = (done / total) * 100;
		x = Math.round(x);
		$("#pf").html(x + "%");
		$("#formp")
				.html(
						"<div class='progress-bar bg-danger'  data-toggle='tooltip' data-original-title='"
								+ x + "%' style='width: " + x + "%'></div>");

	}

	function getConfirmPage() {

		if ($("#rating-form").parsley('validate')) {

			$("#validation-failure").hide();
			var x = "";

			$(".panel-default")
					.each(
							function() {

								var head = $(this).find(".accordion-toggle")
										.html();
								x += "<tr><th colspan='2'>" + head
										+ "</th></tr>";

								$(this).find(".panel-body input[type=text]")
										.each(
												function() {
													var name = $(this).attr(
															"name");
													var value = $(this).val();
													var label = $(
															"#" + name
																	+ "-label")
															.html();
													if (label != undefined)
														x += "<tr><td>" + label
																+ "</td><td>"
																+ value
																+ "</td></tr>";
												});

								$(this).find(".panel-body select")
										.each(
												function() {
													var name = $(this).attr(
															"name");
													var value = $(this).val();
													var label = $(
															"#" + name
																	+ "-label")
															.html();
													if (label != undefined)
														x += "<tr><td>" + label
																+ "</td><td>"
																+ value
																+ "</td></tr>";
												});
							});

			$("#ratingtable").html(x);
			$("#ratingtable2").html(x);
			$('#ajaxModal').modal('show');

		} else {
			$("#validation-failure").show();
			$(".panel-heading").each(function() {
				$(this).css("background-color", "#f4f8fb");
			});
			$(".parsley-error").each(
					function() {
						$(this).closest('div.panel').find('.panel-heading')
								.css("background-color", "rgb(242, 222, 222)");
					});
			console.log("Validation Fails for Rating-Form...");

		}

	}

	function uploadData(){
		var dataObj=new FormData();

		$.each($('#file1')[0].files, function(i, file) {
			dataObj.append('file', file);
		});
		$.each($('#file2')[0].files, function(i, file) {
			dataObj.append('file', file);
		});
		$.each($('#file3')[0].files, function(i, file) {
			dataObj.append('file', file);
		});

		var startDate=$("#startDate").val();
		var endDate=$("#endDate").val();

		
		//dataObj.append('file', $('input#file1.findDocumentOnboarding')[0].files);
		console.log("data"+dataObj);
		$.ajax({
			url : "rest/cs/upload/"+startDate+"/"+endDate,
			type : 'POST',
			data : dataObj,
      contentType: false,
	  processData: false,
			complete : function(data, textStatus, $XHR) {
				data = data["responseJSON"];
				if (data["resp_code"] == "CS1002"){
					console.log("uuid"+data["uuid"]);
					$("#uuid").val(data["uuid"]);
					console.log("uuid"+$("#uuid").val());
					$("#save-upload-success").show();
				}
			}
		});
	}

	function calculateRating() {

		if ($("#rating-form").parsley('validate')) {
			var formData = new FormData(this);

			var jsonData = {};

			var facData = [];
			var it = 0;
			var i=0;
			var j=0;
			var k=0;
			var l=0;
			var term_bank_name=null;
			var WC_bank_name=null;
			var LC_bank_name=null;
			var BG_bank_name=null;
			$("#tab_logic tr .rowno")
					.each(
							function() {
								var temp = {};
								var index = $(this).html();
								index = parseInt(index);

								var g127_term_loan = isNaN(parseInt($("#input-G126").val(), 10)) ? 0 : parseInt($("#input-G126").val(), 10);
								var g128_max_termloan_roi = isNaN(parseFloat($("#input-G127").val()))? 0: parseFloat($("#input-G127").val());
								
								var g131_wcfund_amount = isNaN(parseInt(Number($("#input-G130").val()), 10)) ? 0 : parseInt(Number($("#input-G130").val()));
								var g132_max_wcfund_roi = isNaN(parseFloat($("#input-G131").val()))? 0: parseFloat($("#input-G131").val()) ;
								var g133_max_LC_roi = isNaN(parseFloat($("#input-G133").val()))? 0: parseFloat($("#input-G133").val()) ;
								var g138_max_BG_roi = isNaN(parseFloat($("#input-G138").val()))? 0: parseFloat($("#input-G138").val()) ;
								var g135_wc_loc =isNaN( parseInt($("#input-G134").val(), 10))?0:parseInt($("#input-G134").val(), 10);
								var g136_wc_bg = isNaN(parseInt($("#input-G135").val(), 10))?0:parseInt($("#input-G135").val(), 10);
								if (it == 0) {
									it++;
									g128_max_termloan_roi = 0;
									g132_max_wcfund_roi = 0;
									g133_max_LC_roi = 0;
									g138_max_BG_roi =0;
								}

								var param1 = "name" + (index - 1);
								var param2 = "amount" + (index - 1);
								var param3 = "percent" + (index - 1);
								var param4 = "bank" + (index - 1);

								if($("#amount0").val()==undefined){
									param2="amount";
									param3="percent";
									param4="bank";
								}
								temp.facility = $("#" + param1).val();
								temp.amount = $("#" + param2).val();
								temp.percent = $("#" + param3).val();
								temp.bank = $("#" + param4).val();

								if(temp.bank=='Other' || temp.bank=='') {
									var v = $("#"+param4+"other").val();
									//if(!isElementEmpty(v)){
									if(v!=undefined){
										if(v.trim()!='')
											temp.bank = v.trim();
									}
									
									//}
								}

								if (temp.facility != null
									&& temp.amount != null
									&& temp.percent != null
									&& temp.bank != null) {
									
									if (temp.facility.trim() != ''
											&& temp.amount.trim() != ''
											&& temp.percent.trim() != ''
											&& temp.bank.trim() != '') {
	
										if (temp.facility.trim() == 'TERM_LOAN') {
											console.log(g127_term_loan);
											g127_term_loan += parseInt(temp.amount,
													10);
											if(i==0){
												term_bank_name=temp.bank;
											}else{
												term_bank_name=term_bank_name+","+temp.bank;
											}
											//term_bank_name=term_bank_name+","+temp.bank;
											console.log("term bank Name:;"+term_bank_name);
											i++;
											if ( parseFloat(temp.percent)>g128_max_termloan_roi)
												g128_max_termloan_roi = parseFloat(temp.percent);
											
										} else if (temp.facility.trim() == 'WC_FUND') {
											g131_wcfund_amount += parseInt(
													temp.amount, 10);
											if(j==0){
												WC_bank_name=temp.bank;
											}else{
												WC_bank_name=WC_bank_name+","+temp.bank;
											}
											j++;
											if (  parseFloat(temp.percent)>g132_max_wcfund_roi)
												g132_max_wcfund_roi = parseFloat(temp.percent);
										} else if (temp.facility.trim() == 'WC_LC') {
											g135_wc_loc += parseInt(temp.amount, 10);
											if(k==0){
												LC_bank_name=temp.bank;
											}else{
												LC_bank_name=LC_bank_name+","+temp.bank;
											}
											k++;
											if (  parseFloat(temp.percent)>g133_max_LC_roi)
												g133_max_LC_roi = parseFloat(temp.percent);
										} else if (temp.facility.trim() == 'WC_BG') {
											g136_wc_bg += parseInt(temp.amount, 10);

											if(l==0){
												BG_bank_name=temp.bank;
											}else{
												BG_bank_name=BG_bank_name+","+temp.bank;
											}
											l++;
											if ( parseFloat(temp.percent)> g138_max_BG_roi)
												g138_max_BG_roi = parseFloat(temp.percent);
										}
	
										facData.push(temp);

// 										if(g127_term_loan==0){
// 											g127_term_loan="-";
// 										} if(g131_wcfund_amount==0){
// 											g131_wcfund_amount="-";
// 										} if(g135_wc_loc==0){
// 											g135_wc_loc="-";
// 										} if(g136_wc_bg==0){
// 											g136_wc_bg="-";
// 										}
// 										 if(g138_max_BG_roi==0){
// 											g138_max_BG_roi="-";
// 										} if(g133_max_LC_roi==0){
// 											g133_max_LC_roi="-";
// 										} if(g132_max_wcfund_roi==0){
// 											g132_max_wcfund_roi="-";
// 										} if(g128_max_termloan_roi==0){
// 											g128_max_termloan_roi="-";
// 										}
	
										$("#input-G126").val(g127_term_loan);
										$("#input-G127").val(g128_max_termloan_roi);
										$("#input-G130").val(g131_wcfund_amount);
										$("#input-G131").val(g132_max_wcfund_roi);
										$("#input-G133").val(g133_max_LC_roi);
										$("#input-G138").val(g138_max_BG_roi);
										$("#input-G134").val(g135_wc_loc);
										$("#input-G135").val(g136_wc_bg);
										$("#input-G128").val(term_bank_name);
										$("#input-G132").val(WC_bank_name);
										$("#input-G136").val(LC_bank_name);
										$("#input-G137").val(BG_bank_name);
									
									}
								}
							});
			console.log($("#input-G133").val());
			jsonData['facility'] = facData;

			$(".panel-body input").each(function() {
					var name = $(this).attr("name");
					var value = $(this).val();
					jsonData[name] = value;
			});

			$(".panel-body select").each(function() {
				var name = $(this).attr("name");
				var value = $(this).val();
				jsonData[name] = value;
			});
		
			jsonData["uuid1"]=$("#uuid").val();
			var finYear=$("#finYear").val();
			
			jsonData["input-G186"]=finYear;
// 			input-G8

			$(".calculate_button").each(function() {
				$(this).attr("disabled", "disabled");
			});

			$('#ajaxModal').modal('hide');
			$("#rating_row").hide();
			$(".rating_box").html($(".rating_box_new").html());
			$.ajax({
				url : "rest/cs/calculate/rating",
				type : 'POST',
				dataType : "json",
				contentType: "application/json;charset=utf-8",
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
						ratingFlag = false;
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
						//$("#rating_" + arr.indexOf(grade)).addClass(
						//"rating_row");
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

	function isElementEmpty(value) {
		return (value == undefined || value == null || value.length <= 0 || value == " " ||value == "" || value == "NaN") ? true
		: false;
		}

	function getFacility() {

		var jsonData = [];
		$("#tab_logic tr .rowno").each(
				function() {
					var temp = {};
					var index = $(this).html();
					index = parseInt(index);
					var param1 = "name" + (index - 1);
					var param2 = "amount" + (index - 1);
					var param3 = "percent" + (index - 1);
					var param4 = "bank" + (index - 1);
					temp.facility = $("#" + param1).val();
					temp.amount = $("#" + param2).val();
					temp.percent = $("#" + param3).val();
					temp.bank = $("#" + param4).val();
					if (temp.facility.trim() != '' && temp.amount.trim() != ''
							&& temp.percent.trim() != ''
							&& temp.bank.trim() != '')
						jsonData.push(temp);
				});

	}

	function saveDraft() {

		var jsonData = {};

		$(".panel-body input").each(function() {
			var name = $(this).attr("name");
			var value = $(this).val();
			jsonData[name] = value;
		});

		$(".panel-body select").each(function() {
			var name = $(this).attr("name");
			var value = $(this).val();
			jsonData[name] = value;
		});

		var selectedEffect = 'blind';

        var options = {};
        
        $("#save-draft-failure").hide();
        $("#save-draft-success").hide();
        
        $.ajax({
			url : "rest/cs/save/draft",
			type : 'POST',
			dataType : "json",
			contentType : "application/json; charset=utf-8",
			data : JSON.stringify(jsonData),
			complete : function(data, textStatus, $XHR) {
				data = data["responseJSON"];
				if (data["resp_code"] == "CS1002") {
					$("#save-draft-success").show(selectedEffect, options, 400);
				} else {
					$("#save-draft-failure").show(selectedEffect, options, 400);
				}
			}
		});

	}

	function saveDraft1() {

		var jsonData = {};

		$(".panel-body input").each(function() {
			var name = $(this).attr("name");
			var value = $(this).val();
			jsonData[name] = value;
		});

		$(".panel-body select").each(function() {
			var name = $(this).attr("name");
			var value = $(this).val();
			jsonData[name] = value;
		});

		var selectedEffect = 'blind';

        var options = {};
        
        $("#save-draft-failure").hide();
        $("#save-draft-success").hide();
        
        $.ajax({
			url : "rest/cs/save/draft",
			type : 'POST',
			dataType : "json",
			contentType : "application/json; charset=utf-8",
			data : JSON.stringify(jsonData),
			complete : function(data, textStatus, $XHR) {
				data = data["responseJSON"];
				if (data["resp_code"] == "CS1002") {
					$("#save-draft-success-auto").show(selectedEffect, options, 400);
				} else {
					//$("#save-draft-failure").show(selectedEffect, options, 400);
				}
			}
		});

	}

	function printDiv() {
		$("#divToPrint").css("overflow-y", "");
		$("#divToPrint").css("height", "auto");
		$("#divToPrint").printThis();

	}

	function getOtherText(c) {
		var val = $(c).val();
		var t = $(c).closest("td").find("input");
		if(t!=null) {
			$(t).remove();
		}
		if(val=="Other") {
			var html = $(c).closest("td").html();
			var id = $(c).attr("id");
			id += 'other';
			$(c).closest("td").html(html+"<input type='text' class='form-control' name='"+id+"' id='"+id+"' placeholder='Bank Name' />");
		} 
	}

	function hidediv(a) {
		$(a).parent().hide();
		}
	
	window.setInterval(function(){
		if(ratingFlag) {
			saveDraft1();
		}
	}, 120000);


	function contactus(){

		
			 var jsonData = {
			    		name : $("#FullName").val(),
			    		mobileno : $("#PhoneNumber").val(),
			    		emailAddress: $("#EmailAddress").val(),
						message: $("#Message").val(),
					};

					$.ajax({
						url : "rest/cs/contactus/submit",
						type : 'POST',
						dataType : "json",
						contentType : "application/json; charset=utf-8",
						data : JSON.stringify(jsonData),
						complete : function(data, textStatus, $XHR) {
							data = data["responseJSON"];
							if (data["resp_code"] == "CS1002") {
								//alert("in success");
								console.log("in success");
								$("#contactus-success").show();
								$("#contactus-success").delay(2200).fadeOut(500);
								$("#FullName").val('');
					    	     $("#PhoneNumber").val('');
					    	      $("#EmailAddress").val('');
								 $("#Message").val('');
							} else {
								//
								$("#contactus-failure").show();
								$("#contactus-failure").delay(2200).fadeOut(500);
							}
						}
					});
	       // $('#contactForm').submit();

	}

	function onlyAlphabets(e, t) {
	    try {
	        if (window.event) {
	            var charCode = window.event.keyCode;
	        } else if (e) {
	            var charCode = e.which;
	        } else { return true; }
	        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode==32)
	            return true;
	        else
	            return false;
	    } catch (err) {
	        alert(err.Description);
	    }
	}

	function isNumber(evt) {
	    evt = (evt) ? evt : window.event;
	    var charCode = (evt.which) ? evt.which : evt.keyCode;
	    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
	        return false;
	    }

	    return true;
	}

</script>

