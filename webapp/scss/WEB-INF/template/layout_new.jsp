<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>${param.title}</title>
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



</head>
<body ng-app="scoremeapp">

	<p>
		<a href="#account">Main</a>
	</p>

	<a href="#institute">Banana</a>
	<a href="#tomato">Tomato</a>

	<h1>Header</h1>
	<button style="display: none" id="mobile">
		<a href="#verifymobile">Mobile</a>
	</button>
	<button style="display: none" id="entity">
		<a href="#addentity">Add Entity</a>
	</button>
	<button style="display: none" id="rating">
		<a href="#rating">rating</a>
	</button>
	<div ng-view></div>

	<h1>Footer</h1>


	<!--  ********************************************* js **************************************************  -->
	<!-- ********************** angular js ************************ -->
	<script
		src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
	<script
		src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>
	<script src="angularcustomjs/ang_app/scoreme_app.js"></script>
	<script src="angularcustomjs/ajaxservice.js"></script>

	<!--****angular controllers starts ****-->
	<script src="angularcustomjs/ang_controller/bankcontroller.js"></script>
	<script src="angularcustomjs/ang_controller/institutecontroller.js"></script>
	<script src="angularcustomjs/ang_controller/commoncontroller.js"></script>
	<script src="angularcustomjs/ang_controller/industrycontroller.js"></script>
	<!--****angular controllers ends ****-->

	<!--<script src="angularcustomjs/ang_services/company_service.js"></script>-->
	<script src="angularcustomjs/ang_directive/directive.js"></script>
	<script src="angularcustomjs/ang_router_templating/layout.js"></script>
	<!-- ********************* angular js ************************ -->
	<!--  ******************************************** js *************************************************  -->
</body>
</html>