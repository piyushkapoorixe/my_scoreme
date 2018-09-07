	
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<style>
label.error {
    width: 100% !important;
}

.inline_a {
	display: inline-block;
	width: 7%;
}

.inline_b {
	display: inline-block;
	width: 93%;
}

.input-group-addon {
	padding: 10px 10px;
}
</style>


<section id="content">
	<section class="vbox">
		<section class="scrollable padder">
			<section class="row m-b-md">
			<div class="col-sm-1"></div>
				<div class="col-sm-10">
					<div class="m-b-md">
	<!-- ********************** alert starts ******************************-->
	<div class="alert alert-success alert-dismissable"
		id="statement-success"
		style="display: none; width: 1023px;
    margin-left: 9px;
    margin-top: 14px">
		 <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
		<strong>Success!</strong>Request Successfully Completed.
	</div>

	<div class="alert alert-danger alert-dismissable"
		id="statement-failure"
		style="display: none; width: 1023px;
    margin-left: 9px;
    margin-top: 14px">
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

 	<form id="bankStatementForm" enctype="multipart/form-data"> 
		<!--**********************************  for user upload excel *********************************************-->
		                                    
		
<!-- 		<div class="col-md-4"> -->
<!-- 			<div class="form-group "> -->
<!-- 				<p for="bankStmtFile">Account Name</p> -->

<!-- 				<div class="input-group"> -->
<!-- 					<span class="input-group-addon"><i class="fa fa-file"></i></span>  -->
<!-- 					<input type="text" class="form-control" id="accountName" name="accountName"/> -->
<!-- 				</div> -->
<!-- 			</div> -->
<!-- 		</div> -->

<input type="hidden" id="refId" value="<%=request.getParameter("reqId")%>">
<input type="hidden" id="flag" value="<%=request.getParameter("flag")%>">
		
		<div class="col-md-12">
		<div class="col-md-6">
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
		</div>

     <div class="col-md-12">
            <div class="col-md-6">	
				<button type="button" class="btn btn-success" onclick="uploadUserExcel()">Submit</button>		
		    </div>
     </div>
</form>
		
<!-- 		<div class="col-md-4"> -->
<!-- 			<div class="form-group "> -->
<!-- 				<p for="bankStmtFile">Company Names of Owner/Sister Concern1</p> -->

<!-- 				<div class="input-group"> -->
<!-- 					<span class="input-group-addon"><i class="fa fa-file"></i></span>  -->
<!-- 						<input type="text" class="form-control" id="companyName1" name="companyName1"/> -->
<!-- 				</div> -->
<!-- 			</div> -->
<!-- 		</div> -->
		
<!-- 		<div class="col-md-4"> -->
<!-- 			<div class="form-group "> -->
<!-- 				<p for="bankStmtFile">Company Names of Owner/Sister Concern2</p> -->

<!-- 				<div class="input-group"> -->
<!-- 				<span class="input-group-addon"><i class="fa fa-file"></i></span> -->
<!-- 					<input type="text" class="form-control" id="companyName2" name="companyName2"/> -->
<!-- 				</div> -->
<!-- 			</div> -->
<!-- 		</div> -->
		
<!-- 		<div class="col-md-4"> -->
<!-- 			<div class="form-group "> -->
<!-- 				<p for="bankStmtFile">Company Names of Owner/Sister Concern3</p> -->

<!-- 				<div class="input-group"> -->
<!-- 				<span class="input-group-addon"><i class="fa fa-file"></i></span> -->
<!-- 					<input type="text" class="form-control" id="companyName3" name="companyName3"/> -->
<!-- 				</div> -->
<!-- 			</div> -->
<!-- 		</div> -->
		
<!-- 		<div class="col-md-4"> -->
<!-- 			<div class="form-group "> -->
<!-- 			<span class="input-group-addon"><i class="fa fa-file"></i></span> -->
<!-- 				<p for="bankStmtFile">Company Names of Owner/Sister Concern4</p> -->

<!-- 				<input type="text" class="form-control" id="companyName4" name="companyName4"/> -->
<!-- 			</div> -->
<!-- 		</div> -->
		
<!-- 		<div class="col-md-4"> -->
<!-- 			<div class="form-group "> -->
<!-- 			<span class="input-group-addon"><i class="fa fa-file"></i></span> -->
<!-- 				<p for="bankStmtFile">Company Names of Owner/Sister Concern5</p> -->
<!-- 				<input type="text" class="form-control" id="companyName5" name="companyName5"/> -->
<!-- 			</div> -->
<!-- 		</div> -->
		
<!-- 		<h4></h4> -->
		<!--<div class="row">
			<div class="col-md-12">
				<button class="btn btn-success" onclick="uploadUserExcel()">Submit</button>
			</div>
		</div>
		<div id="">
		</div> -->
		
<!-- 		<div id="progressbox"> -->
<!--          <div id="progressbar"></div> -->
<!--          <div id="percent">0%</div> -->
<!--        </div> -->
<!-- 	</form> -->
</div>
</div>
</section>
</section>
</section>
<!-- </div> -->
<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
<script>
// $("#bankStatementForm").validate({
//         rules: {
//             "bankName": {
//                 required: true,
//             },
//             "accountType": {
//                 required: true
//             },
//             "accountNumber": {
//                 required: true,
//                 number:true,
//             },
//             "companyName": {
//                 required: true,
//             },
//             "companyType": {
//                 required: true
//             }
            

//         },
//         messages: {
//              "bankName": {
//                 required: "Please select bank name",
//             },
//             "accountType": {
//                 required: "Please select account type",
//             },
//             "accountName": {
//                 required: "Please enter account name",
//             },
//             "od": {
//                 required: "Please enter od",
//             },
//             "companyName": {
//                 required: "Please enter company name",
               
//             },
//             "companyType": {
//                 required: "Please enter company type",
//             }
         
//         },
//         submitHandler: function(form) {
            
//             uploadUserExcel();
//             return false; // for demo
//         }
//     });







// window.onload = function() {
// 	//$("#hiddenODCC").hide();
// 	$('#od').attr('readonly', true);
// 	$.ajax({
// 		url : "rest/cs/get/banks",
// 		type : 'GET',
// 		dataType : "json",
// 		contentType : "application/json; charset=utf-8",
// 		complete : function(data, textStatus, $XHR) {
// 			data = data["responseJSON"];
// 			if ((data.resp_code) == 'CS1002') {
// 	            $('#bankName').html("");
// 	            $('#bankName').append('<option value="">SELECT BANK</option>');
// 	            $.each(data.data, function(key, bank) {
// 	                $('#bankName').append('<option value="' + bank.id + '">' + bank.bankName + '</option>');
// 	            });
// 	        } else {
// 	            console.log(data.resp_code);
// 	        }
// 		}
// 	});
// };
// function accountChange(){
// 	var accountType=$("#accountType").val();
// 	console.log("acc type"+accountType);
// 	if(accountType=='CASH_CREDIT'|| accountType=='OVER_DRAFT'){
// 		$('#od').attr('readonly', false);
// 		//$("#hiddenODCC").show();
// 	}
// 	else {
// 		$('#od').attr('readonly', true);
// 		}
// }
// function validateSelect() {
//     if(city.selectedIndex== ""){
//         document.getElementById("sltloc").innerHTML="Select Bank Name";
//         document.getElementById("bankName").focus();
//         return false;
//         }
//         return true;
//         }


// function validateSelect1() {
//     if(color.selectedIndex== ""){
//         document.getElementById("sltloc1").innerHTML="Select Account Type";
//         document.getElementById("accountType").focus();
//         return false;
//         }
//         return true;
//         }
// function validateSelect1() {
//     if(color.selectedIndex== ""){
//         document.getElementById("sltloc2").innerHTML="Select Company Type";
//         document.getElementById("companyType").focus();
//         return false;
//         }
//         return true;
//         }
        
	function uploadUserExcel() {
		var dataObj = new FormData();

		$.each($('#file1')[0].files, function(i, file) {
			dataObj.append('file', file);
		});
		
		var datajson = {
		    "refId": $("#refId").val(),
		    "flag": $("#flag").val()
		};
		
		dataObj.append('data',JSON.stringify(datajson));

// 		var bankName = $('#bankName').val();
// 		var accountType = $('#accountType').val();
// 		var accNumber=$('#accountNumber').val();
// 		//var accName=$('#accountName').val();
// 		var companyName=$('#companyName').val(); 
// 		var companyType=$('#companyType').val();
// 		var od_cc_value='0';
// 		var sistercompany="";
// 		sistercompany=$('#keyword1').val()+","+$('#keyword2').val()+","+$('#keyword3').val()+","+$('#keyword4').val();
// 		if(accountType=='CASH_CREDIT'|| accountType=='OVER_DRAFT'){
// 		 od_cc_value=$('#od').val();
// 		}

        
        
		
		//$.LoadingOverlay("show");  
// 		$("#divProgress").circularloader({
// 			backgroundColor: "#ffffff",//background colour of inner circle
// 			fontColor: "#000000",//font color of progress text
// 			fontSize: "40px",//font size of progress text
// 			radius: 70,//radius of circle
// 			progressBarBackground: "#cdcdcd",//background colour of circular progress Bar
// 			progressBarColor: "#aaaaaa",//colour of circular progress bar
// 			progressBarWidth: 25,//progress bar width
// 			progressPercent: 0,//progress percentage out of 100
// 			progressValue:0,//diplay this value instead of percentage
// 			showText: true,//show progress text or not
// 			});
		
		$.ajax({ 
			url : "rest/extws/upload/conversionfile/user/bank/statement",
			type : 'POST',
			contentType : false,
			processData : false,
			data : dataObj,
			
// 			beforeSend : function() {
//                 $("#progressbox").show();
//                 // clear everything
//                 $("#progressbar").width('0%');
//                 $("#message").empty();
//                 $("#percent").html("0%");
//         },
//         uploadProgress : function(event, position, total, percentComplete) {
//                 $("#progressbar").width(percentComplete + '%');
//                 $("#percent").html(percentComplete + '%');

//                 // change message text to red after 50%
//                 if (percentComplete > 50) {
//                 $("#message").html("<font color='red'>File Upload is in progress</font>");
//                 }
//         },
//         success : function() {
//                 $("#progressbar").width('100%');
//                 $("#percent").html('100%');
//         },
			complete : function(data, textStatus, $XHR) {
				console.log("completed {}");
				data = data["responseJSON"];
				if (data["resp_code"] == "CS1002") {
					// $.LoadingOverlay("hide");  
					$("#statement-success").show();
					$("#statement-success").delay(2200).fadeOut(25000);
				   location.reload();
					//$("#statement-success").show();
				} else if (data["resp_code"] == "CS1003") {
					$("#statement-failure").show();
					console.log("Unsuccess");
				}
			}
		});
	}
	

//      $('input[type="checkbox"]').click(function(){
//             if($(this).prop("checked") == true){
//                $('#keywordDivOne').css('display' , 'block');
// 		       $('#keywordDivTwo').css('display' , 'block');	
//             }
//             else if($(this).prop("checked") == false){
//                $('#keywordDivOne').css('display' , 'none');
// 		       $('#keywordDivTwo').css('display' , 'none');	
//             }
//         });

 


</script>
