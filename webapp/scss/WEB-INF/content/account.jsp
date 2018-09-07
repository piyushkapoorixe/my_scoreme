<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<section id="content">
	<section class="vbox">
		<section class="scrollable padder">
			<section class="row m-b-md">
				<div class="col-sm-1"></div>
				<div class="col-sm-10"
					style="text-align: left; margin-top: 24px; margin-left: 15px; border-left: 3px solid #f44300; margin-bottom: 15px;">
					<div class="col-md-8">
						<div class="h4 font-bold"
							style="color: #555; font-size: 25px; font-family: inherit; text-transform: uppercase;">
							Accounts</div>
					</div>
					<div class="col-md-3"
						style="background: #444; text-align: center; color: #fff; margin-left: 60px; border-radius: 4px;">
						<a href="#" onclick="callApp('page,purchase');"
							data-toggle="modal">
							<h5 class="m-b-none">
								<p
									style="color: #fff; text-transform: uppercase; font-size: 12px;">Buy
									Credits</p>

							</h5>
						</a>
					</div>

				</div>

				<%
					if (request.getParameter("error") != null) {
				%>
				<div class="col-sm-offset-1 col-sm-10">
					<div class="row">
						<div class="col-lg-12">
							<%
								if (request.getAttribute("error").equals("yes")) {
							%>
							<div class="alert alert-danger" id="save-draft-success1">
								<button type="button" class="close" data-dismiss="alert">x</button>
								<i class="fa fa-ok-sign"></i><strong>Failure!</strong>
								<%=request.getAttribute("message")%>
							</div>
							<%
								} else {
							%>
							<div class="alert alert-success" id="save-draft-success2">
								<button type="button" class="close" data-dismiss="alert">x</button>
								<i class="fa fa-ok-sign"></i><strong>Success!</strong>
								<%=request.getAttribute("message")%>
							</div>
							<%
								}
							%>
						</div>
					</div>
				</div>
				<%
					}
				%>

				<div class="col-sm-offset-1 col-sm-10">
					<div class="row">
						<div class="col-lg-12">
							<section class="row m-l-none m-r-none m-b text-center box-shadow">
								<div class="col-xs-4 bg-primary dk lter r-l">
									<div class="wrapper">
										<div class="h2 font-bold">${accountBean.balance}</div>
										<p class="text-muted font-bold">Balance</p>
									</div>
								</div>
								<div class="col-xs-4 bg-info lt">
									<div class="wrapper">
										<div class="h2 font-bold">${accountBean.credit}</div>
										<p class="text-muted font-bold">Credits</p>
									</div>
								</div>
								<div class="col-xs-4 bg-danger lt r-r">
									<div class="wrapper">
										<div class="h2 font-bold">${accountBean.debit}</div>
										<p class="text-muted font-bold">Debits</p>
									</div>
								</div>
							</section>
						</div>
					</div>

					<section class="panel panel-default"
						style="border: 1px solid #ccc;">
						<header class="panel-heading">
							Transactions <i class="fa fa-info-sign text-muted"
								data-toggle="tooltip" data-placement="bottom"
								data-title="ajax to load the data."></i>
						</header>
						<div class="table-responsive">
							<table class="table table-striped m-b-none"
								data-ride="datatables">
								<thead>
									<tr>
										<th width="15%">S.No.</th>
										<th width="21%">Date</th>
										<th width="25%">Description</th>
										<th width="12%" style="text-align: center;">Credit</th>
										<th width="12%" style="text-align: center;">Debit</th>
										<th width="15%" style="text-align: center;">Balance</th>
									</tr>
								</thead>
								<tbody class="account-tbl">
									<c:forEach items="${accountBean.accountDTOs}" var="ac"
										varStatus="vs">
										<tr>
											<th width="15%">${vs.index + 1}</th>
											<th width="21%">${ac.date}</th>
											<th width="25%">${ac.remark}</th>
											<th width="12%" style="text-align: center;">${ac.credit}</th>
											<th width="12%" style="text-align: center;">${ac.debit}</th>
											<th width="15%" style="text-align: center;">${ac.balance}</th>
										</tr>
									</c:forEach>
								</tbody>
							</table>
						</div>
					</section>
				</div>
				<div class="row">
				<div class="col-md-4"></div>
					<div class="col-md-2"
						style="background: #222; text-align: center; color: #fff; margin-left: 60px; border-radius: 4px;">
						<a href="#" onclick="callApp('page,purchase');"
							data-toggle="modal">
							<h5 class="m-b-none">
								<p
									style="color: #fff; text-transform: uppercase; font-size: 12px;">Buy
									Credits</p>

							</h5>
						</a>
					</div>
					<div class="col-md-6"></div>
				</div>
				<div class="col-sm-1"></div>

			</section>
		</section>
	</section>
	<a href="#" class="hide nav-off-screen-block"
		data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a>
</section>

<script>
	var menuId = "menu-account";
</script>

