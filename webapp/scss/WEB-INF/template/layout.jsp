<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>
<html lang="en" class="app">
<head>
<meta charset="utf-8" />
<title>${param.title}</title>
<meta name="description"
	content="app, web app, responsive, admin dashboard, admin, flat, flat ui, ui kit, off screen nav" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1" />
<!-- favicon icon tags-->


<link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
<link rel="icon" href="images/favicon.png" type="image/x-icon">
<!-- Custom CSS -->
<link
	href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
	rel="stylesheet">
<link href="assets/css/sidebar.css" rel="stylesheet">
<link rel="stylesheet" href="css/app.v1.css" type="text/css" />
<link href="assets/plugins/footable/css/footable.core.css"
	rel="stylesheet">
<link href="assets/plugins/footable/css/footable.paging.css"
	rel="stylesheet">
<link href="assets/css/components.css" rel="stylesheet" type="text/css" />
<link href="assets/css/select2.css" rel="stylesheet" type="text/css" />
<link href="assets/css/select2.min.css" rel="stylesheet" type="text/css" />
<link href="css/slider.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet"
	href="//code.jquery.com/ui/1.12.0/themes/base/jquery-ui.css">
<link rel="stylesheet" type="text/css" href="assets/css/bs_leftnavi.css">
<link rel="stylesheet" type="text/css" href="css/datatable.min.css">
<!-- <link rel="stylesheet" href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css" type="text/css"> -->

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
}

.modal-header {
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


<!--[if lt IE 9]> <script src="js/ie/html5shiv.js"></script> <script src="js/ie/respond.min.js"></script> <script src="js/ie/excanvas.js"></script> <![endif]-->
<script>

var ratingFlag = true;

function SelectHasValue(select, value) {
    obj = document.getElementById(select);

    if (obj !== null) {
        return (obj.innerHTML.indexOf('value="' + value + '"') > -1);
    } else {
        return false;
    }
}

</script>
<style>
html, body {
	background-color: #fff;
}

label {
	display: inline-block;
	width: 5em;
}

.label {
	font-size: 85%;
}

.slider-selection {
	background: #555;
}

.rating_row {
	background-color: #4CAF50;
	color: white;
}

.row_desc {
	color: white;
	line-height: 0.7285;
}

.chart-container {
	box-sizing: border-box;
	width: 100%;
	padding: 20px 15px 15px 15px;
	margin: 15px auto 30px auto;
	border: 1px solid #ddd;
	background: #fff;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
	-o-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
	-ms-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
	-moz-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
	-webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.chart-placeholder {
	width: 100%;
	height: 90px;
	font-size: 14px;
	line-height: 1em;
}

.legend table {
	border-spacing: 5px;
}

.myCSSClass {
	font-size: 9px;
	color: #AD8200;
	padding: 2px;
	opacity: 0.80;
}

@media only print {
	#divToPrint {
		width: auto;
		height: auto;
		overflow: visible;
	}
}

span.select2-dropdown.select2-dropdown--below {
	float: right;
	position: relative;
	display: block;
	margin-top: -30px;
	margin-left: 4px;
}

span.select2-selection.select2-selection--single {
	margin-left: 10px;
}
</style>
<script>
	var hideButton = false;
</script>

<style>
.hide-logo {
	float: left;
	margin-left: 82px;
	background: #fff;
	padding: 27px;
	background: #fff;
}
</style>
</head>
<body onafterprint="afterPrint()" class="" style="background: #fff;" ng-app="scoremeapp">
	<c:if test="${requestScope.role=='admin'}">
		<jsp:include page="/WEB-INF/menu/admin.jsp">
			<jsp:param name="role" value="<%=request.getAttribute(\"role\")%>" />
			<jsp:param name="content"
				value="<%=request.getAttribute(\"content\")%>" />
		</jsp:include>
	</c:if>

	 <c:if test="${requestScope.role=='user'}">
		<jsp:include page="/WEB-INF/menu/user.jsp">
			<jsp:param name="role" value="<%=request.getAttribute(\"role\")%>" />
			<jsp:param name="content"
				value="<%=request.getAttribute(\"content\")%>" />
		</jsp:include>
	</c:if>
	<input type="hidden" value="${userBean.userInfo.instituteId}"
		id="hiddenAssochamAbout">
	<div 
		class="a2a_kit a2a_kit_size_32 a2a_floating_style a2a_default_style"
		style="bottom: 0px; right: 0px;">
		<a data-toggle="modal" data-target="#reportFeedback"
			style="margin-bottom: 11px; font-size: 32px;">Report a Problem</a>
		<!--     <img src="images/feedback.png" style="height: 51px;width:49px;" data-toggle="modal" data-target="#reportFeedback"> -->
		<!--     <a class="a2a_dd" href="https://www.addtoany.com/share"></a> -->
	</div>
	<div class="modal modal-wide modal-width" id="reportFeedback"
		tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
		aria-hidden="true"
		style="width: 516px; margin-top: 151px; margin-left: 995px">
		<div class="modal-dialog">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true">&#x2716;</button>
				<p class="font-style">Report Feedback And Issue Form</p>
			</div>
			<div class="modal-body">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-4">
							<h2>contact us on call</h2>
							<p>
								<span class="glyphicon glyphicon-home" style="color: #f44300"></span>&nbsp;Unit
								no 903-906, 9th Floor, Tower-C, Unitech Business Zone, Nirvana
								Country, Sector-50, Gurgaon, Haryana – 122018<br>
							</p>
							<p>
								<i class="fa fa-phone" style="color: #f44300"></i> <abbr
									title="Phone"></abbr> Tel. No.: +91 124 4754550
							</p>
							<p>
								<i class="fa fa-fax" style="color: #f44300"></i> <abbr
									title="fax"></abbr> Fax. No.: +91 124 4754584
							</p>
							<p>
								<i class="fa fa-envelope" style="color: #f44300"></i> <abbr
									title="Email"></abbr> Email: info@scoreme.in
							</p>


						</div>
						<div class="col-md-8">
							<h3 style="color: #f44300">Send us Report Feedback And
								Issues</h3>
							<form name="sentMessage" id="contactForm" novalidate>
								<div class="row">
									<div class="alert alert-success" id="contactus-success"
										style="display: none;">
										<i class="fa fa-ok-sign"></i><strong>Success!</strong> Your
										details has been successfully submitted.
									</div>
									<div class="alert alert-danger" id="contactus-failure"
										style="display: none;">
										<i class="fa fa-ok-sign"></i><strong>Failure!</strong> Unable
										to submit details. Please check All fields correctly.
									</div>
									<div class="col-md-6">
										<div class="control-group form-group">
											<div class="controls">
												<label style="color: #000">Full Name<span
													style="color: #f44300">*</span>:
												</label> <input type="text" class="form-control input-setting "
													onkeypress="return onlyAlphabets(event,this);"
													id="FullName" name="fullName"
													placeholder=" enter your name." required>
												<p class="help-block"></p>
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="control-group form-group">
											<div class="controls">
												<label style="color: #000">Phone Number<span
													style="color: #f44300">*</span>:
												</label> <input type="text" class="form-control input-setting "
													id="PhoneNumber" name="phoneNumber"
													onkeypress="return isNumber(event,this);"
													placeholder=" enter your phone number." maxlength="10"
													required>
											</div>
										</div>
									</div>
								</div>

								<div class="control-group form-group">
									<div class="controls">
										<label style="color: #000">Email Address<span
											style="color: #f44300">*</span>:
										</label> <input type="email" class="form-control input-setting"
											id="EmailAddress" name="emailAddress"
											placeholder=" enter your email address." required>
									</div>
								</div>
								<div class="control-group form-group">
									<div class="controls">
										<label style="color: #000">Message<span
											style="color: #f44300">*</span>:
										</label>
										<textarea rows="10" cols="100"
											class="form-control input-setting1" id="Message"
											name="message" placeholder=" enter your message"
											maxlength="999" style="resize: none" required></textarea>
									</div>
								</div>
								<div id="success"></div>
								<!-- For success/fail messages -->
								<button type="button" onclick="contactus()"
									class="btn  btn-block"
									style="color: #000; background-color: #f44300">Send
									Message</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	
	
	<!-- ********************** angular js ************************ -->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>
	<script src="angularcustomjs/ang_app/scoreme_app.js"></script>
	<script src="angularcustomjs/ajaxservice.js"></script>
	
	<!--****angular controllers starts ****-->
	<script src="angularcustomjs/ang_controller/bankcontroller.js"></script>
	<script src="angularcustomjs/ang_controller/institutecontroller.js"></script>
	<script src="angularcustomjs/ang_controller/commoncontroller.js"></script>
	<script src="angularcustomjs/ang_controller/industrycontroller.js"></script>
	<script src="angularcustomjs/ang_controller/logincontroller.js"></script>
	<script src="angularcustomjs/ang_controller/ratingcontroller.js"></script>
	<!--****angular controllers ends ****-->
	
    <!--<script src="angularcustomjs/ang_services/company_service.js"></script>-->
     <script src="angularcustomjs/ang_directive/directive.js"></script>
	<!-- ********************* angular js ************************ -->



	<!-- Bootstrap -->

	<!-- App -->
	<!-- jQuery -->
	<script src="js/jquery.js"></script>
	<!-- <script type="text/javascript" src="assets/js/jquery/jquery.min.js"></script>
	
	<script type="text/javascript" src="assets/js/jquery.validate.js"></script>
	<script type="text/javascript" src="assets/js/jquery.form.js"></script> -->
	<!-- <script type="text/javascript" src="https://code.jquery.com/jquery-1.9.1.js"></script>  -->
	<!-- <script type="text/javascript" src="https://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>  -->
	<script src="js/app.v1.js"></script>
	<script src="js/charts/easypiechart/jquery.easy-pie-chart.js"></script>
	
	<!-- 	<script type="text/javascript" src="js_web/jquery-3.2.1.min.js"></script> -->
	<script src="js/charts/sparkline/jquery.sparkline.min.js"></script>
	<script src="js/charts/flot/jquery.flot.min.js"></script>
	<script src="js/charts/flot/jquery.flot.tooltip.min.js"></script>
	<script src="js/charts/flot/jquery.flot.spline.js"></script>
	<script src="js/charts/flot/jquery.flot.pie.min.js"></script>
	<script src="js/charts/flot/jquery.flot.resize.js"></script>
	<script src="js/charts/flot/jquery.flot.grow.js"></script>
	<script src="js/sortable/jquery.sortable.js"></script>
	<script src="js/app.plugin.js"></script>
	<script src="assets/js/bs_leftnavi.js"></script>
	<script
		src="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/select2.min.js"></script>
	<!-- jQuery  -->
	<!-- <script src="assets/js/jquery.min.js"></script> -->

	<!-- <script src="js/jquery-1.12.4.js"></script> -->
	<script src="js/jquery-ui.js"></script>

	<!--FooTable-->
	<script src="assets/plugins/footable/js/footable.all.min.js"></script>
	<script src="assets/js/select2.js"></script>
	<script src="assets/js/select2.min.js"></script>
	<script src="js/dataTable.min.js"></script>
	<script src="js/loadingoverlay.js"></script>
	<script src="js/loadingoverlay_progress.js"></script>
	<!-- 	<script src="https://cdn.jsdelivr.net/jquery.loadingoverlay/latest/loadingoverlay.min.js"></script> -->
	<!-- 	<script src="https://cdn.jsdelivr.net/jquery.loadingoverlay/latest/loadingoverlay_progress.min.js"></script> -->
	<!-- 	<script src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script> -->



	<!-- parsley -->
	<script src="js/parsley/parsley.min.js"></script>
	<script src="js/parsley/parsley.extend.js"></script>

	<!-- Guage -->
	<script src="js/raphael-2.1.4.min.js"></script>
	<script src="js/justgage.js"></script>

	<!-- Slider -->
	<script src="js/bootstrap-slider.js"></script>

	<script src="assets/js/printThis.js"></script>
	<script type='text/javascript' src="assets/js/jsPdf.js"></script>
	<script type='text/javascript' src="assets/js/html2canvas.js"></script>
	<script type='text/javascript' src="assets/js/html2canvas.svg.js"></script>
	<script async src="https://static.addtoany.com/menu/page.js"></script>


	<script>




$(document).ready(function() {

// 	if($("#hiddenAssochamAbout").val()==151){
		
// 	}

	if($("#hiddenAssochamAbout").val()==151){
		$("#maincontetnt").hide();
		$("#scoremeTerms").hide();
	}else{
		$("#assochamPara").hide();
		$("#scoremePara").hide();
		$(".commonAsso").hide();
		$("#assochamTerms").hide();
		
	}
	if($("#pageMobile").val()==1){
		$("#menu-toggle").trigger("click");
		//$("#menu-toggle").off("click");
		$("#imp").hide();
	}

	if($("#hiddenParam").val()!='151'){
		$("#AssohamLogo").hide();
		$("#menutoggle-assocham").hide();
	
		
	}	
     if($("#hiddenParam").val()=='151'){
        $(".hide-logo").css('padding','0px');
    	$("#scorelogo").hide();
    	
    	
    	$("#menutoggle-scoreme").hide();
     }
	$("#input-G8").val($("#finYear").val());
	console.log($("#input-G8").val());

	$("#finYear").change(function(){
		$("#input-G8").val($("#finYear").val());
		console.log($("#input-G8").val());
	});

	$("#fileExcel").change(function() {
		   var fileName = this.value;
	       var fileExtension = fileName.substr(fileName.length - 4);
	       if(fileExtension=="xlsx"|| fileExtension=="xls" || fileExtension=="xlsm"){
	    	   $("#fileerror").hide();
	          $("#excel-button").prop("disabled",false);
	          return true;
	       } 
	      else{
	         $("#fileerror").show();
	         $("#fileerror").delay(2200).fadeOut(500);
	         $("#excel-button").prop("disabled",true);
	        // return false;
	     }
	 });
	 $("#to-date").change(function(){
			var startDate=$("#from-date").val();
			var endDate=$("#to-date").val();
			if(startDate==null || startDate==""){
				$("#from-date").focus();
				$("#date-first").show();
				$("#date-first").delay(2200).fadeOut(500);
				
			}
			else if(endDate>=startDate){
				 $("#date-failure").hide();
				 $("#downloadcsv-button").prop("disabled",false);
				}
			else{
				$("#date-failure").show();
				$("#date-failure").delay(2200).fadeOut(500);
				$("#downloadcsv-button").prop("disabled",true);
				//return false;
		       }
		}); 


	

	$(".select2-search__field").dblclick(function(){
		$("#imp").addClass("dropdown open");
	});
	 $(".select2").select2({
		  placeholder:"Select Company"
	   });

	   $(".select2").change(function(){
		      callApp("page,dashboard,companyId,"+this.value);
	   });


	  $(".select2").onSelect = (function(fn) {
	        return function(data, options) {
	            var target;

	            if (options != null) {
	                target = $(options.target);
	            }

	            if (target && target.hasClass('lin')) {
	                window.location = target.attr('href');
	            } else {
	                return fn.apply(this, arguments);
	            }
	        }
	    })($(".select2").onSelect);
	    
	var doc = new jsPDF();
	var specialElementHandlers = {
	    '#editor': function (element, renderer) {
	        return true;
	    }
	};

	$('#download').click(function () {
	    doc.fromHTML($('#divToPrint').html(), 15, 15, {
	        'width': 170,
	            'elementHandlers': specialElementHandlers
	    });
	    doc.save('sample-file.pdf');
	});

});

</script>

	<!-- Menu Toggle Script -->
	<script>
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    function beforePrint() {
		$("#divToPrint").css("overflow-y","");
	     $("#divToPrint").css("height","auto");
	}
    function afterPrint() {
		$("#divToPrint").css("overflow-y","scroll");
	     $("#divToPrint").css("height","400px");
	}
    var mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener(function(mql) {
        if (mql.matches) {
        	beforePrint();
        } else {
        	afterPrint();
        }
    });
    </script>
	<script type="text/javascript">
		jQuery(document).ready(function($) {

			//$("#" + menuId).addClass("active");
			$(".slider2").slider({
				formatter : function(value) {
					return 'Current value: ' + value;
				}
			});
			$(".slider-horizontal").css("width", "100%");
			$(".slider2").on("slide", function(slideEvt) {
				var cid = "currval-"+$(this).attr("id");
				var pid = "prevval-"+$(this).attr("id");
				var perid = "perval-"+$(this).attr("id");
				var pvalue = Number($("#"+pid).html());
				var cvalue = Number($(this).closest('.slider').find(".tooltip .tooltip-inner").html());
				if(pvalue==0){
					var per = ((cvalue-pvalue)/1)*100;
				}else{
				    var per = ((cvalue-pvalue)/pvalue)*100;
				}
				per = Math.round(per);
				$("#"+cid).text(cvalue);
				if(per>0)
					$("#"+perid).css("color","green");
				else
					$("#"+perid).css("color","red");
				if(isNaN(per))
					$("#"+perid).text("0%");
				else	
					$("#"+perid).text(per+"%");
			});
			if(menuId == "menu-rating") {
				getProgress();
				$("#coll1").click();
			}
		});

	</script>

	<script type="text/javascript">
		$(function() {
			$('.footable').footable();
		});
	</script>

	<script>
		$(function() {
			$(document).tooltip();
		});
		//$(document).ajaxStart(function() {
		//	$("#wait").show();
		//});
		//$(document).ajaxComplete(function() {
		//	$("#wait").hide();
		//});
	</script>

	<script src="js/charts/flot/demo.js"></script>

	<script>

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

}
		function callApp(s) {
			var x = s.split(",");
			$("#appform").html("");
			var t = "";
			for(i=0;i<x.length;i+=2) {
				t += "<input type='hidden' name='"+x[i]+"' value='"+x[i+1]+"' id='"+x[i]+"'/>";
			}
			alert("call App ="+t);
			console.log("data")
			$("#appform").html(t);
			$("#appform").submit();
		}

		$(document).ready(function() {
		    $(".number").keydown(function (e) {
			    // Allow: backspace, delete, tab, escape, enter, . and - 
		        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190, 189]) !== -1 ||
		             // Allow: Ctrl+A, Command+A
		            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
		             // Allow: home, end, left, right, down, up
		            (e.keyCode >= 35 && e.keyCode <= 40)) {
		                 // let it happen, don't do anything
		                 return;
		        }
		        // Ensure that it is a number and stop the keypress
		        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		            e.preventDefault();
		        }
		    });
		});

	     $(document).ready(function(){

	    	 if($("#bigfella2")!=null) {
		    	 var g = new JustGage({
						id : "bigfella2",
						value : '${appBean.lastScore}',
						min : 0,
						max : 100,
						title : "Score"
					});
	    	 }

	    	 var i = -1;
		     $('#tab_logic tr').each(function(){
	    		 i++;
	    	 });
	         
	    	 $("#add_row").click(function(){

	    		 $('#tab_logic').append('<tr id="addr'+i+'"></tr>');
		         
				 //$('#addr'+i).html("<td>"+ (i+1) +"</td><td><input name='name"+i+"' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='mail"+i+"' type='text' placeholder='Mail'  class='form-control input-md'></td><td><input  name='mobile"+i+"' type='text' placeholder='Mobile'  class='form-control input-md'></td><td><input  name='email"+i+"' type='text' placeholder='Email'  class='form-control input-md'></td>");
		         $('#addr'+i).html("<td class='rowno'>"+ (i+1) +"</td><td><select name='name"+i+"' id='name"+i+"' class='form-control' title='Please select the nature of facilities that you are presently enjoying from banks.'><option value=''>Select facility</option><option value='TERM_LOAN'>Term Loan</option><option value='WC_FUND'>Working Capital Fund Based</option><option value='WC_LC'>Working Capital  LC</option><option value='WC_BG'>Working Capital Bank Guarantee</option></select></td><td><input type='text' name='amount"+i+"' id='amount"+i+"' placeholder='Amount (in INR)' class='form-control number' title='Please let us know the amount for which the facility has been sanctioned.'/></td><td><input type='text' name='percent"+i+"' id='percent"+i+"' placeholder='(in %)' class='form-control number' title='Please let us know of the Rate of Interest (ROI)/Processing Fee/Guarantee Commission in % at which the respective facilities has been sanctioned'/></td><td><select name='bank"+i+"' id='bank"+i+"' class='form-control' title='Please let us know of the name of the Bank(s) from which the facility has been undertaken'><option value=''>Select Bank</option><option value='Allahabad Bank'>Allahabad Bank</option><option value='AXIS Bank'>AXIS Bank</option><option value='Bank of Baroda'>Bank of Baroda</option><option value='Bank of India'>Bank of India</option><option value='Bank of Maharashtra'>Bank of Maharashtra</option><option value='Canara Bank'>Canara Bank</option><option value='Central Bank of India'>Central Bank of India</option><option value='Corporation Bank'>Corporation Bank</option><option value='Dena Bank'>Dena Bank</option><option value='HDFC Bank'>HDFC Bank</option><option value='ICICI Bank'>ICICI Bank</option><option value='IDBI Bank'>IDBI Bank</option><option value='Indian Bank'>Indian Bank</option><option value='Indian Overseas Bank'>Indian Overseas Bank</option><option value='Oriental Bank of Commerce'>Oriental Bank of Commerce</option><option value='Punjab National Bank'>Punjab National Bank</option><option value='State Bank of Bikaner and Jaipur'>State Bank of Bikaner and Jaipur</option><option value='State Bank of Hyderabad'>State Bank of Hyderabad</option><option value='State Bank of India'>State Bank of India</option><option value='State Bank of Mysore'>State Bank of Mysore</option><option value='State Bank of Patiala'>State Bank of Patiala</option><option value='State Bank of Travancore'>State Bank of Travancore</option><option value='Syndicate Bank'>Syndicate Bank</option><option value='UCO Bank'>UCO Bank</option><option value='Union Bank of India'>Union Bank of India</option><option value='United Bank of India'>United Bank of India</option><option value='Vijaya Bank'>Vijaya Bank</option><option value='Other'>Other</option></select></td>");
					
	         i++; 
	         $(".number").keydown(function (e) {
			        // Allow: backspace, delete, tab, escape, enter and .
			        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
			             // Allow: Ctrl+A, Command+A
			            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
			             // Allow: home, end, left, right, down, up
			            (e.keyCode >= 35 && e.keyCode <= 40)) {
			                 // let it happen
			                 return;
			        }
			        // Ensure that it is a number and stop the keypress
			        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			            e.preventDefault();
			        }
			    });
	     });
	        $("#delete_row").click(function(){
	       	 if(i>1){
	   		 $("#addr"+(i-1)).html('');
	   		 i--;
	   		 }
	   	 });

	        

	   });

		function getRatingSlider(rating, level) {
			$(function(){
				  $("#slider1").slider({
				      max:18,
				      min:1,
				      step:1,
				      value:1,
				      animate: 'true',
				   animate: 1500,
				      slide: function(event, ui) {
				          $("#amount").val(ui.value);
				          $(this).find('.ui-slider-handle').html('<div class="sliderControl-label v-labelCurrent">'+'<span class="rating">A</span><br><p class="score">'+ui.value+'</p>'+'</div>');


				      } ,
				      change :function(event, ui) {
				          $("#amount").val(ui.value);
				          $(this).find('.ui-slider-handle').html('<div class="sliderControl-label v-labelCurrent">'+'<span class="rating">A</span><br><p class="score">'+ui.value+'</p>'+'</div>');

				      }
				  });
				  $("#slider1").slider("value", 2);

				  });
		}


		// get states
		$(document).ready(function() {

			/* $("#businessType").change(function(){

				if($("#businessType").val()!=null && $("#businessType").val()!=""){
				
				var groupCode=$("#businessType").val();
				var url = "rest/cs/get/industriesByID/"+ groupCode;
			   
				$.ajax({
					url:url,
				    type:'GET',
				    dataType : "json",
					contentType : "application/json; charset=utf-8",
					complete : function(data, textStatus, $XHR) {
						data = data["responseJSON"];
						if ((data.resp_code) == 'CS1002') {

							$('#industryType').html("");
				            $('#industryType').append('<option value="">SELECT INDUSTRY TYPE</option>');
							//jQuery('#company-form select[id="industryType"] option:gt(0)').remove().end();
				            $.each(data.data, function(key, industry) {
				                $('#industryType').append('<option value="' + industry.industryId + '">' + industry.industryName + '</option>');
				            });
				        } else {
				            console.log(data.resp_code);
				        }
					}
				
			   });
		    }else{
		    	$('#industryType').html("");
		    }	   
		}); */

			/* $.ajax({
				url : "rest/cs/get/BusinessType",
				type : 'GET',
				dataType : "json",
				contentType : "application/json; charset=utf-8",
				complete : function(data, textStatus, $XHR) {
					data = data["responseJSON"];
					//console.log("dada is second"+JSONParse(data.data[1]));
					if ((data.resp_code) == 'CS1002') {

						$('#businessType').html("");
			            $('#businessType').append('<option value="">SELECT BUSINESS TYPE</option>');
						//jQuery('#company-form select[id="businessType"] option:gt(0)').remove().end();
			            $.each(data.data, function(key, industrygroup) {
			                $('#businessType').append('<option value="' + industrygroup.id + '">' + industrygroup.groupName + '</option>');
			            });
			        } else {
			            console.log(data.resp_code);
			        }
				}
			}); */
			

		/*  $.ajax({
				url : "rest/cs/get/states",
				type : 'GET',
				dataType : "json",
				contentType : "application/json; charset=utf-8",
				complete : function(data, textStatus, $XHR) {
					data = data["responseJSON"];
					if ((data.resp_code) == 'CS1002') {
			            $('#partner_state').html("");
			            $('#partner_state').append('<option value="">SELECT STATE</option>');
			            $.each(data.data, function(key, state) {
			                $('#partner_state').append('<option value="' + state.id + '">' + state.name + '</option>');
			            });
			        } else {
			            console.log(data.resp_code);
			        }
				}
			}); */
		   
		}); 


	/* 	$('#partner_state').on('change', function() {

		    if ($('#partner_state').val() != '') {
		        $('#partner_city').attr("disabled", false);
		    } else {
		        $('#partner_city').attr("disabled", true);
		    }

		    var url = "rest/cs/get/cities/";
		    var stateId = $('#partner_state').val();
		    url = url + stateId;
		    
		    $.ajax({
				url : url,
				type : 'GET',
				dataType : "json",
				contentType : "application/json; charset=utf-8",
				complete : function(data, textStatus, $XHR) {
					data = data["responseJSON"];
					if ((data.resp_code) == 'CS1002') {
			            $('#partner_city').html("");
			            $('#partner_city').append('<option value="">SELECT CITY</option>');
			            $.each(data.data, function(key, city) {
			                $('#partner_city').append('<option value="' + city.id + '">' + city.name + '</option>');
			            });
			        } else {
			            $('#partner_city').html("");
			            $('#partner_city').append('<option selected="selected" value="">SELECT CITY</option>');
			            console.log(data.resp_code);
			        }
				}
			});

		}); */

		$("#reload").click(function(){
			$("#mobileNo").val('');
			$("#otp").val('');
			$("#mobileNo").focus();
			$("#validate-button").prop('disabled',true);
			$("#generate-button").prop('disabled',false);
			$("#mobileNo").removeAttr('readonly');
		});
	</script>

	<script>
	$('.bar-button').on('click', function(e){
	    $(".hide-logo").toggle(300);
	});

	$(":input").each(function(i) {
		$(this).attr('tabindex', i + 1);
	});

 
	</script>
</body>

</html>