<section id="content" ng-controller="bankController">
	<section class="hbox stretch">
		<section>
			<section class="vbox gradient">
				<section class="scrollable padder">
				
				

<div class="col-lg-12">
    <div class="panel panel-primary bankDetailForm">
        <div class="panel-heading" style="margin-top:10px;">
            <h3 class="panel-title text-center">Upload Bank Statement to get started</h3>
        </div>
        
            <div class="alert alert-success alert-dismissable" id="statement-success" style="display: none;width: 589px;margin-left: 33px">
                                    <strong>Success!</strong>Bank Statement Successfully uploade.Get report on mail .
                                  </div>
                   
                                  <div class="alert alert-danger alert-dismissable" id="statement-failure" style="display: none;width: 589px;margin-left: 33px">
                                    <strong>Failure!</strong>Unable To Upload Bank  Statement.
                                  </div>
<!--                                   <div class="alert alert-danger alert-dismissable" id="data-failure" style="display: none;width: 589px;margin-left: 33px"> -->
<!--                                     <strong>Failure!</strong>Please Fill All Fields. -->
<!--                                   </div> -->

							<div class="alert alert-danger alert-dismissable" id="data-failure" style="display: none;">
								 <strong>Failure!</strong> Please Fill All Fields.
							</div>


							<div class="panel-body">
            <form name="submitCredentialForm" method="post" enctype="multipart/form-data" >
                <div class="col-md-4">
                <div class="form-group ">
                   <p class="control-label" for="bankName">Bank</p>

                    <div class="input-group" ng-controller="bankCommonController">
                        <span class="input-group-addon"><i class="fa fa-cubes"></i></span>
                     <select name="bankName" id="bankName" class="form-control" ng-model="bankName" required >
                     <option value ="">Select Bank Name</option>
					 <option ng-repeat="b in bankData.data" value="{{b.id}}">{{b.bankName}}</option>
                     </select>
                    </div>
          
                </div>
</div>
            <div class="col-md-4">
                <div class="form-group ">
                    <p class="control-label" for="accountType">Account Type</p>

                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-cubes"></i></span>
                        <select name="accountType" class="form-control" id="accountType" ng-model="accountType" required>
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
                    <p for="bankStmtFile">Bank Statement</p>

                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-file"></i></span>
                        <input type="file" name="bankStmtFile" class="form-control" id="bankStmtFile" ng-model="bankStmtFile" placeholder="Upload Bank Statement" required>
                    </div>
			</div>		
			</div>
			            <div class="col-md-4">	
		           <div class="form-group">
							<p class="control-label">Statement Start
								Date</p>
							<div class="input-group">
							<span class="input-group-addon"><i class="fa fa-calendar" aria-hidden="true"></i></span>
								<input type="date" class="form-control" id="startDate" ng-model="startDate"
									placeholder="Statement Start Date" required/>

							</div>
                    </div></div>
                                <div class="col-md-4">
                    <div class="form-group">
                    <p class="control-label" >Statement
												End Date</p>
											<div class="input-group">
											<span class="input-group-addon"><i class="fa fa-calendar" aria-hidden="true"></i></span>
												<input type="date" class="form-control" id="endDate" ng-model="endDate"
													placeholder="Statement End Date" required/>
						</div>
                 </div>
                 </div>
                <div class="row">
                    <div class="col-lg-6">
                        <input type="button" ng-click="uploadBankStatement()" class="btn btn-primary btn-block" value="Submit" style="width: 125px;
    margin-left: 15px">
                    </div>

                   
                </div>
            </form>

        </div>
    </div>
</div>

		<div class="col-lg-12 table-responsive">		
			<div class="col-lg-12 table-responsive" ng-init="getAnalyzStatementData()">		
                          <table class="table table-bordered table-striped table-responsive" id="example">
                              <thead>
                               <tr><th style="text-align: center;">Sr No.</th>
                                   <th style="text-align: center;">Requested By </th>
                                   <th style="text-align:center;">Bank Name</th>
                                   <th style="text-align: center;">Requested DateTime</th>
                                   <th style="text-align: center;">Statement File</th>
                                   <th style="text-align: center;">Report File</th>
                               </tr>
                             </thead>
                          <tbody id="requestMap">
                             <tr ng-repeat="asd in analyzStatementData.data">
                                <th style="text-align: center;">{{$index}}</td>
                                   <td style="text-align: center;">{{asd.userName}}</td>
                                   <td style="text-align: center;">{{asd.bankName}}</td>
                                   <td style="text-align:center;">{{asd.creationTime}}</td>
                                   <td style="text-align: center;">{{asd.bankFile}}</td>
                                   <td style="text-align: center;">{{asd.reportFile}}</td>
                                
                               </tr>  
                          </tbody>
                         </table>
                      </div> 		
			</div>

</section>
</section>
</section>
</section>
</section>

<script>
//window.onload=function(){

/* $.ajax({
	url : "rest/cs/get/banks",
	type : 'GET',
	dataType : "json",
	contentType : "application/json; charset=utf-8",
	complete : function(data, textStatus, $XHR) {
		data = data["responseJSON"];
		if ((data.resp_code) == 'CS1002') {
            $('#bank').html("");
            $('#bank').append('<option value="">SELECT BANK</option>');
            $.each(data.data, function(key, bank) {
                $('#bank').append('<option value="' + bank.id + '">' + bank.bankName + '</option>');
            });
        } else {
            console.log(data.resp_code);
        }
	}
}); */

/* $.ajax({
	url : "rest/cs/get/userBankStatementRequests",
	type : 'GET',
	dataType : "json",
	contentType : "application/json; charset=utf-8",
	complete : function(data, textStatus, $XHR) {
		data = data["responseJSON"];
		if ((data.resp_code) == 'CS1002') {
			console.log("success");
			var i=1;
            $.each(data.data, function(key, requestData) {
                if(requestData.reportFile=='Not Present'){
                	 $('#requestMap').append("<tr><td>"+i+"</td><td>"+requestData.userName+"</td><td>"+requestData.bankName+"</td><td>"+requestData.creationTime+"</td><td><a href='rest/cs/download/bankFile/"+requestData.bankFile+"/"+requestData.userName+"'>"+requestData.bankFile+"</a></td><td>"+requestData.reportFile+"</td></tr>");
                	 i++;
                     }
                else{
                	 $('#requestMap').append("<tr><td>"+i+"</td><td>"+requestData.userName+"</td><td>"+requestData.bankName+"</td><td>"+requestData.creationTime+"</td><td><a href='rest/cs/download/bankFile/"+requestData.bankFile+"/"+requestData.userName+"'>"+requestData.bankFile+"</td><td><a href='rest/cs/download/reportFile/"+requestData.reportFile+"/"+requestData.userName+"'>"+requestData.reportFile+"</td></tr>");
                	 i++; 
                }
                
            });
            $("#example").DataTable();
        } else {
            console.log(data.resp_code);
        }
	}
});
}; */

 /* function uploadBankStatement(){
	var dataObj=new FormData();

	var startDate=$("#startDate").val();
	var endDate=$("#endDate").val();
	var accountType=$("#accountType").val();
	var bankId=$("#bankName").val();

	console.log(startDate+","+endDate+","+accountType+","+bankId);
	

	$.each($('#bankStmtFile')[0].files, function(i, file) {
		dataObj.append('file', file);
	});

	console.log(dataObj);
	if(startDate!=''&& endDate!='' && accountType!='' && bankId!=''){
		$.LoadingOverlay("show");
	  $.ajax({
			url :  "rest/cs/upload/"+startDate+"/"+endDate+"/"+accountType+"/"+bankId,
			type : 'POST',
	  contentType: false,
	processData: false,
			data : dataObj,
			complete : function(data, textStatus, $XHR) {	
				data = data["responseJSON"];
				if (data["resp_code"] == "CS1002"){
					console.log("success");
					$.LoadingOverlay("hide");
					 $("#statement-success").show();
					// location.reload();
				 $("#statement-success").delay(3000).fadeOut(1000);
					
				}
				else{
					$("#statement-failure").show();
					$("#statement-failure").delay(3000).fadeOut(500);
					console.log("Unsuccess");
				}
			}
		});
	}else{
		$("#data-failure").show();
		$("#data-failure").delay(3000).fadeOut(1000);
	}	
	
}  */
</script>

</body>
</html>