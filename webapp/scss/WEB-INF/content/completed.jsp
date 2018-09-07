<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<section id="content">
	<section class="vbox">
		<section class="scrollable padder">
			<div class="m-b-md">
				<h3 class="m-b-none">Score - Completed Requests</h3>
			</div>
			<section class="panel panel-default">
				<header class="panel-heading">
					Completed Requests <i class="fa fa-info-sign text-muted"
						data-toggle="tooltip" data-placement="bottom"
						data-title="ajax to load the data."></i>
				</header>
				<div class="table-responsive">
					<table class="table table-striped m-b-none" data-ride="datatables">
						<thead>
							<tr>
								<th width="15%">Company Id</th>
								<th width="25%">Company Name</th>
								<th width="15%">Industry Name</th>
								<th width="15%">Request Date</th>
								<th width="10%">Score</th>
								<th width="10%">Grade</th>
								<th width="10%">Action</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="r" items="${requestBean.completedRequests}">
							<tr>
								<th width="15%">${r.companyId}</th>
								<th width="25%">${r.companyName}</th>
								<th width="15%">${r.industryName}</th>
								<th width="15%">${r.requestDate}</th>
								<th width="10%">${r.score}</th>
								<th width="10%">${r.grade}</th>
								<th width="10%"></th>
							</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
			</section>
		</section>
	</section>
	<a href="#" class="hide nav-off-screen-block"
		data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a>
</section>

<script>
	var menuId = "menu-completed";
</script>