<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<section id="content">
	<section class="hbox stretch">
		<section>
			<section class="vbox gradient">
				<section class="scrollable padder">
				<section class="row m-b-md">
						<div class="col-sm-1"></div>
						<div class="col-sm-5">
					<section id="content" class="m-t-lg wrapper-md animated fadeInDown">
						<div class="container aside-xl">
							<a class="navbar-brand block" href="index.html">Manage Entity</a>
							<section class="m-b-lg">
								<header class="wrapper text-center">
									<strong>Use the form below to manage entity</strong>
								</header>
								<form id="company-form" data-validate="parsley" action="#">
									<div class="list-group">
										<div class="list-group-item">
											<input type="hidden" name="comp_id" id="comp_id" value="${appBean.companyId }" />
											<input type="text" name="company_name" id="company_name"
												class="form-control no-border" value="${appBean.companyName }"
												placeholder="Enter entity name" data-required="true">
										</div>
									</div>
									<button type="button" class="btn btn-lg btn-primary btn-block"
										onclick="editCompany()" id="addcomp-button" style="background-color: #FAA61A; border-color: #FAA61A;">Change Name</button>
									<div class="line line-dashed"></div>
									<p class="text-muted text-center">
										<small>Click below to deactivate the selected entity</small>
									</p>
									<a href="#" onclick="addCompany()"
										class="btn btn-lg btn-danger btn-block">Deactivate Entity</a>
								</form>
							</section>
						</div>
					</section>
					</div>
					<div class="col-sm-5">
					<section id="content" class="m-t-lg wrapper-md animated fadeInDown">
						<div class="container aside-xl">
							<a class="navbar-brand block" href="index.html">User Access</a>
							<section class="m-b-lg">
								<header class="wrapper text-center">
									<strong>Enter username of the user or email address</strong>
								</header>
								<form id="user-form" data-validate="parsley" action="#">
									<div class="list-group">
										<div class="list-group-item">
											<input type="hidden" name="comp_id" id="comp_id" value="${appBean.companyId }" />
											<input type="email" name="company_name" id="username"
												class="form-control no-border" value=""
												placeholder="Enter email address" data-required="true">
										</div>
									</div>
									<button type="button" class="btn btn-lg btn-primary btn-block"
										onclick="addUser()" id="usercomp-button" style="background-color: #FAA61A; border-color: #FAA61A;">Add User</button>
								</form>
							</section>
						</div>
					</section>
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

	function editCompany() {

		if ($("#company-form").parsley('validate')) {

			var jsonData = {
				id : $("#comp_id").val(),
				companyName : $("#company_name").val()
			};

			$("#addcomp-button").attr("disabled", "disabled");

			$.ajax({
				url : "/rest/cs/company/update",
				type : 'POST',
				dataType : "json",
				contentType : "application/json; charset=utf-8",
				data : JSON.stringify(jsonData),
				complete : function(data, textStatus, $XHR) {
					data = data["responseJSON"];
					if (data["resp_code"] == "CS1002")
						callApp('page,dashboard');
						//window.location.href = "app?page=dashboard";
					else
						//

					$("#addcomp-button").attr("disabled", "");
				}
			});

		} else {

			console.log("Validation Fails for Company-Form...");

		}
	}

	function addUser() {

		if ($("#user-form").parsley('validate')) {

			var jsonData = {
				id : $("#comp_id").val(),
				username : $("#username").val()
			};

			/*$("#usercomp-button").attr("disabled", "disabled");

			$.ajax({
				url : "/rest/cs/company/update",
				type : 'POST',
				dataType : "json",
				contentType : "application/json; charset=utf-8",
				data : JSON.stringify(jsonData),
				complete : function(data, textStatus, $XHR) {
					data = data["responseJSON"];
					if (data["resp_code"] == "CS1002")
						callApp('page,dashboard');
						//window.location.href = "app?page=dashboard";
					else
						//

					$("#addcomp-button").attr("disabled", "");
				}
			});
			*/

		} else {

			console.log("Validation Fails for User-Form...");

		}
	}
</script>
