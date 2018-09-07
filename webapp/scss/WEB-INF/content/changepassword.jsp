<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<section id="content">
	<section class="hbox stretch">
		<section>
			<section class="vbox gradient">
				<section class="scrollable padder">
					<section id="content" class="m-t-lg wrapper-md animated fadeInDown">
						<div class="container aside-xl">
							<a class="navbar-brand block" href="#">Change Password</a>
							<section class="m-b-lg">
								<header class="wrapper text-center">
									<strong>Fill the form below to change your account password</strong>
								</header>
								
								<%
									if (request.getAttribute("msg") != null) {
				
										if (request.getAttribute("msg").equals("change1")) {
								%>
								
								<div class="alert alert-success" id="save-draft-success">
									<button type="button" class="close" data-dismiss="alert">x</button>
									<i class="fa fa-ok-sign"></i><strong>Success!</strong> Password has been 
									changed successfully, please use new password next time to login to your account.
								</div>
								
								<% }
										if (request.getAttribute("msg").equals("change0")) {
											%>
											
											<div class="alert alert-danger" id="save-draft-success">
												<button type="button" class="close" data-dismiss="alert">x</button>
												<i class="fa fa-ok-sign"></i><strong>Failure!</strong> Unable to
												change your account password.
											</div>
											
											<% }	
									} %>
								
								<form id="company-form" data-validate="parsley" action="Changepassword" onsubmit="return checkPassword()">
									<div class="list-group">
										<div class="list-group-item">
											<input type="text" name="username" id="username"
												class="form-control no-border" maxlength="255" readonly="readonly"
												value="${userBean.userInfo.username }" >
										</div>
										<div class="list-group-item">
											<input type="password" name="password" id="password"
												class="form-control no-border" maxlength="20"
												placeholder="Enter old password" data-required="true">
										</div>
										<div class="list-group-item">
											<input type="password" class="form-control no-border"
												name="newpassword" id="newpassword" maxlength="20"
												placeholder="Enter new password" data-required="true">
										</div>
										<div class="list-group-item">
											<input type="password" class="form-control no-border"
												name="confirmpassword" id="confirmpassword" maxlength="20"
												placeholder="Re-enter new password" data-required="true">
										</div>
									</div>
									
									<button type="submit" class="btn btn-lg btn-primary btn-block"
										style="background-color: #FAA61A; border-color: #FAA61A;">
									Change Password
									</button>
								</form>
							</section>
						</div>
					</section>
				</section>
			</section>
		</section>

	</section>
</section>

<script>
	var menuId = "menu-dashboard";

	function checkPassword() {

		var p1 = $("#confirmpassword").val();
		var p2 = $("#newpassword").val();
		if(p1==p2)
			return true;
		else
			return false;
	}
</script>
