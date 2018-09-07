<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<section id="content">
	<section class="vbox">
		<section class="scrollable padder">
			<div class="m-b-md">
				<div class="row">
					<div class="col-sm-6">
						<h3 class="m-b-none">Analytics</h3>
						<small>Financial & Non-Financial information</small>
					</div>
					<div class="col-sm-6">
						<div class="text-right text-left-xs" style="display: none;">
							<div class="sparkline m-l m-r-lg pull-right" data-type="bar"
								data-height="35" data-bar-width="6" data-bar-spacing="2"
								data-bar-color="#fb6b5b">5,8,9,12,8,10,8,9,7,8,6</div>
							<div class="m-t-md">
								<span class="text-uc">New users</span>
								<div class="h4 m-n">
									<strong>1,120,100</strong>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section class="panel panel-default">
				<header class="panel-heading font-bold">Financial Data</header>
				<div class="panel-body">
					<div class="col-xs-4 b-r b-light">
						<div id="flot-1ine1" style="height: 250px"></div>
					</div>
					<div class="col-xs-4 b-r b-light">
						<div id="flot-1ine2" style="height: 250px"></div>
					</div>
					<div class="col-xs-4 b-r b-light">
						<div id="flot-1ine3" style="height: 250px"></div>
					</div>
				</div>
				<footer class="panel-footer bg-white">
					<div class="row text-center no-gutter">
						<div class="col-xs-4 b-r b-light">
							<p id="fsales" class="h3 font-bold m-t">${resBean.getValue('OP_INC')}</p>
							<p class="text-muted">Operating Income</p>
						</div>
						<div class="col-xs-4 b-r b-light">
							<p id="fprofits" class="h3 font-bold m-t">${resBean.getValue('INT_PAID')}</p>
							<p class="text-muted">Interest Paid</p>
						</div>
						<div class="col-xs-4 b-r b-light">
							<p id="fpbt" class="h3 font-bold m-t">${resBean.getValue('TDEBT')}</p>
							<p class="text-muted">Total Debt</p>
						</div>
					</div>
				</footer>
			</section>
			<section class="panel panel-default">
				<header class="panel-heading font-bold">Financial Data</header>
				<div class="panel-body">
					<div class="col-xs-3 b-r b-light">
						<div id="flot-1ine4" style="height: 250px"></div>
					</div>
					<div class="col-xs-3 b-r b-light">
						<div id="flot-1ine5" style="height: 250px"></div>
					</div>
					<div class="col-xs-3 b-r b-light">
						<div id="flot-1ine6" style="height: 250px"></div>
					</div>
					<div class="col-xs-3 b-r b-light">
						<div id="flot-1ine7" style="height: 250px"></div>
					</div>
				</div>
				<footer class="panel-footer bg-white">
					<div class="row text-center no-gutter">
						<div class="col-xs-3 b-r b-light">
							<p id="fsales" class="h3 font-bold m-t">${resBean.getValue('OP_PRO_MAR')}</p>
							<p class="text-muted">Operating Profit Margin</p>
						</div>
						<div class="col-xs-3 b-r b-light">
							<p id="fprofits" class="h3 font-bold m-t">${resBean.getValue('NET_PRO_MAR')}</p>
							<p class="text-muted">Net Profit Margin</p>
						</div>
						<div class="col-xs-3 b-r b-light">
							<p id="fpbt" class="h3 font-bold m-t">${resBean.getValue('RET_CAP')}</p>
							<p class="text-muted">Return on Capital Employed</p>
						</div>
						<div class="col-xs-3 b-r b-light">
							<p id="fpbt" class="h3 font-bold m-t">${resBean.getValue('NET_CASH')}</p>
							<p class="text-muted">Net Cash Accruals</p>
						</div>
					</div>
				</footer>
			</section>

			<div class="row">
				<div class="col-md-4">
					<section class="panel panel-default">
						<header class="panel-heading font-bold">Years in
							Existence</header>
						<div class="panel-body">
							<div id="flot-pie-yexist" style="height: 240px"></div>
						</div>
					</section>
				</div>
				<div class="col-md-4">
					<section class="panel panel-default">
						<header class="panel-heading font-bold">Average Offtake</header>
						<div class="panel-body">
							<div id="flot-pie-offtake" style="height: 240px"></div>
						</div>
					</section>
				</div>
				<div class="col-md-4">
					<section class="panel panel-default">
						<header class="panel-heading font-bold">Type of Projects</header>
						<div class="panel-body">
							<div id="flot-pie-typproj" style="height: 240px"></div>
						</div>
					</section>
				</div>
			</div>

			<div class="row">
				<div class="col-md-4">
					<section class="panel panel-default">
						<header class="panel-heading font-bold">Average
							Proportion Booking</header>
						<div class="panel-body">
							<div id="flot-pie-avgbook" style="height: 240px"></div>
						</div>
					</section>
				</div>
				<div class="col-md-4">
					<section class="panel panel-default">
						<header class="panel-heading font-bold">Use of Technology</header>
						<div class="panel-body">
							<div id="flot-pie-tech" style="height: 240px"></div>
						</div>
					</section>
				</div>
				<div class="col-md-4">
					<section class="panel panel-default">
						<header class="panel-heading font-bold">Diversity of
							Geographical</header>
						<div class="panel-body">
							<div id="flot-pie-divgeo" style="height: 240px"></div>
						</div>
					</section>
				</div>
			</div>

			<div class="row">
				<div class="col-md-4">
					<section class="panel panel-default">
						<header class="panel-heading font-bold">Profitability
							Margin</header>
						<div class="panel-body">
							<div id="flot-pie-promar" style="height: 240px"></div>
						</div>
					</section>
				</div>
				<div class="col-md-4">
					<section class="panel panel-default">
						<header class="panel-heading font-bold">Number of
							Projects</header>
						<div class="panel-body">
							<div id="flot-pie-noproj" style="height: 240px"></div>
						</div>
					</section>
				</div>
				<div class="col-md-4">
					<section class="panel panel-default">
						<header class="panel-heading font-bold">No. of Ongoing
							Planned Projects</header>
						<div class="panel-body">
							<div id="flot-pie-noplan" style="height: 240px"></div>
						</div>
					</section>
				</div>
			</div>

			<div class="row">
				<div class="col-md-4">
					<section class="panel panel-default">
						<header class="panel-heading font-bold">Expected
							Appreciation</header>
						<div class="panel-body">
							<div id="flot-pie-expapp" style="height: 240px"></div>
						</div>
					</section>
				</div>
				<div class="col-md-4">
					<section class="panel panel-default">
						<header class="panel-heading font-bold">Adequacy of Cash
							Flows</header>
						<div class="panel-body">
							<div id="flot-pie-cashflow" style="height: 240px"></div>
						</div>
					</section>
				</div>
				<div class="col-md-4">
					<section class="panel panel-default">
						<header class="panel-heading font-bold">Fund Raising
							Capability</header>
						<div class="panel-body">
							<div id="flot-pie-fundr" style="height: 240px"></div>
						</div>
					</section>
				</div>
			</div>

			<div class="row">
				<div class="col-md-4">
					<section class="panel panel-default">
						<header class="panel-heading font-bold">Scale Size of
							Past Projects</header>
						<div class="panel-body">
							<div id="flot-pie-sspp" style="height: 240px"></div>
						</div>
					</section>
				</div>
				<div class="col-md-4">
					<section class="panel panel-default">
						<header class="panel-heading font-bold">Landbank
							Available</header>
						<div class="panel-body">
							<div id="flot-pie-lavail" style="height: 240px"></div>
						</div>
					</section>
				</div>
				<div class="col-md-4">
					<section class="panel panel-default">
						<header class="panel-heading font-bold">Compliance with
							FSI rules</header>
						<div class="panel-body">
							<div id="flot-pie-fsi" style="height: 240px"></div>
						</div>
					</section>
				</div>
			</div>

		</section>
	</section>
	<a href="#" class="hide nav-off-screen-block"
		data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a>
</section>

<script type="text/javascript">
               var index1 = 1;
               var sales = [], profits = [], pbt = [];
               var f4 = [], f5 = [], f6 = [], f7 = [];
               <c:forEach items="${resBean.getLongValue('OP_INC')}" var="net1" varStatus="mb1">
               sales.push([index1++, ${net1}]);
               </c:forEach>
               var index2 = 1;
               <c:forEach items="${resBean.getLongValue('INT_PAID')}" var="net2" varStatus="mb2">
               profits.push([index2++, ${net2}]);
               </c:forEach>
               var index3 = 1;
               <c:forEach items="${resBean.getLongValue('TDEBT')}" var="net3" varStatus="mb3">
               pbt.push([index3++, ${net3}]);
               </c:forEach>
               var index4 = 1;
               <c:forEach items="${resBean.getLongValue('OP_PRO_MAR')}" var="net3" varStatus="mb3">
               f4.push([index4++, ${net3}]);
               </c:forEach>
               var index5 = 1;
               <c:forEach items="${resBean.getLongValue('NET_PRO_MAR')}" var="net3" varStatus="mb3">
               f5.push([index5++, ${net3}]);
               </c:forEach>
               var index6 = 1;
               <c:forEach items="${resBean.getLongValue('RET_CAP')}" var="net3" varStatus="mb3">
               f6.push([index6++, ${net3}]);
               </c:forEach>
               var index7 = 1;
               <c:forEach items="${resBean.getLongValue('NET_CASH')}" var="net3" varStatus="mb3">
               f7.push([index7++, ${net3}]);
               </c:forEach>

               var yexist =[], offtake =[], typproj = [], avgbook = [], tech = [];
               var divgeo = [], promar = [], noproj = [], noplan = [],  expapp = [];
               var cashflow = [], fundr = [],  sspp = [], lavail = [], fsi = [];

               <c:forEach items="${resBean.getKeyValue('YEXIST')}" var="nf1" >
               yexist.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${resBean.getKeyValue('AVG_TOFF')}" var="nf1" >
               offtake.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${resBean.getKeyValue('TYPE_PROJ')}" var="nf1" >
               typproj.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${resBean.getKeyValue('AVG_BOOK')}" var="nf1" >
               avgbook.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${resBean.getKeyValue('TECH_OP')}" var="nf1" >
               tech.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${resBean.getKeyValue('DIV_GEO')}" var="nf1" >
               divgeo.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${resBean.getKeyValue('PRO_MARGIN')}" var="nf1" >
               promar.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${resBean.getKeyValue('NO_PROJ')}" var="nf1" >
               noproj.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${resBean.getKeyValue('NO_ONG')}" var="nf1" >
               noplan.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${resBean.getKeyValue('EXP_APP')}" var="nf1" >
               expapp.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${resBean.getKeyValue('CASF_FLOW')}" var="nf1" >
               cashflow.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${resBean.getKeyValue('FUNDR')}" var="nf1" >
               fundr.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${resBean.getKeyValue('SS_PASPROJ')}" var="nf1" >
               sspp.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${resBean.getKeyValue('LAND_AVA')}" var="nf1" >
               lavail.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${resBean.getKeyValue('FSI_RULE')}" var="nf1" >
               fsi.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
				</script>