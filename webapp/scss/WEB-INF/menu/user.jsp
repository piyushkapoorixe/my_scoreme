<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>	
	<div id="wrapper">
		<!-- Sidebar -->
		<div id="sidebar-wrapper">
			<div id="gw-sidebar" class="gw-sidebar">
				<div class="nano-content">
					<ul class="gw-nav gw-nav-list">
						<li class="init-un-active menu-item logo-div"
							style="height: 81px; background: #fff;"><a class="logo-txt"
							href="javascript:void(0)" onclick="callApp('page,dashboard')">
								<img
				src="images/combinedlogo1.png" alt="Assocham" style="height: 76px;margin-left: 27px" id="AssohamLogo"> 
								<img src="images/score-logo.PNG"
								style="width: 230px; margin-top: 21px; margin-left: -12px;"
								alt="resurgent rating">
						</a></li>
						<li class="menu-item active"><a href="javascript:void(0)"
							onclick="callApp('page,dashboard')"> <i
								class="fa fa-th icon-rag" aria-hidden="true"></i><span
								class="gw-menu-text" style="padding-left: 9px;">Dashboard</span>
								<b class="gw-arrow"></b>
						</a></li>
						<li class="menu-item"><a href="javascript:void(0)"
							onclick="callApp('page,account')"> <i
								class="fa fa-address-card icon-rag" aria-hidden="true"></i><span
								class="gw-menu-text" style="padding-left: 4px;">Accounts</span>
								<b class="gw-arrow"></b>
						</a></li>
						
						



						<li class="init-arrow-down menu-item entity-block"><a
							href="javascript:void(0)"> <i class="fa fa-users icon-rag"
								aria-hidden="true"></i><span class="gw-menu-text"
								style="padding-left: 6px;">Entity</span> <b
								class="gw-arrow icon-arrow-up8"></b>
						</a>
							<ul class="gw-submenu entity-content"
								style="background: transparent !important;">
								<li><a href="javascript:void(0)"
									onclick="callApp('page,addcompany');"><span
										class="gw-menu-text">New Entity</span></a></li>
								<li><a href="javascript:void(0)"
									onclick="callApp('page,company');"><span
										class="gw-menu-text">Manage Entity</span></a></li>
							</ul></li>
						<li class="init-arrow-down menu-item"><a
							href="javascript:void(0)"> <i class="fa fa-star-o icon-rag"
								aria-hidden="true"></i> <span class="gw-menu-text"
								style="padding-left: 6px;">Score</span> <b></b>
						</a>
							<ul class="gw-submenu"
								style="background: transparent !important;">
								<li><a href="javascript:void(0)"
									onclick="callApp('page,rating,new,yes,companyId,${appBean.companyId}');"><span
										class="gw-menu-text">New Score</span></a></li>
								<li><a href="javascript:void(0)"
									onclick="callApp('page,reviserating');"><span
										class="gw-menu-text">Revise Score</span></a></li>
								<c:if test="${appBean.draftString ne null}">
								<li><a href="javascript:void(0)"
									onclick="callApp('page,rating,draft,yes,companyId,${appBean.companyId}');"><span
										class="gw-menu-text">Last Saved Draft</span></a></li>
								</c:if>
							</ul></li>

						<!-- 						<li class="menu-item"><a href="javascript:void(0)"> <i -->
						<!-- 								class="fa fa-question-circle icon-rag" aria-hidden="true"></i><span -->
						<!-- 								class="gw-menu-text" style="padding-left: 12px;">Help</span> <b -->
						<!-- 								class="gw-arrow"></b> -->
						<!-- 						</a></li> -->
						
						
						
						<li class="menu-item"><a href="javascript:void(0)"
							onclick="callApp('page,analyzStatement')">
							<i class="fa fa-line-chart" aria-hidden="true" style="width: 35px;font-size: 20px"></i>
                      <span class="gw-menu-text" style="padding-left: 9px;">Analyse  Statement </span>
						 <b class="gw-arrow"></b>
						</a></li>
						
						<li class="init-arrow-down menu-item"><a
							href="javascript:void(0)"> <i class="fa fa-star-o icon-rag"
								aria-hidden="true"></i> <span class="gw-menu-text"
								style="padding-left: 6px;">Bond Valuation</span> <b></b>
						</a>
							<ul class="gw-submenu"
								style="background: transparent !important;">
								<li><a href="javascript:void(0)"
									onclick="callApp('page,zerobond');"><span
										class="gw-menu-text">Zero Bond</span></a></li>
										<li><a href="javascript:void(0)"
									onclick="callApp('page,tbond');"><span
										class="gw-menu-text">T Bond</span></a></li>
										<li><a href="javascript:void(0)"
									onclick="callApp('page,corpbond');"><span
										class="gw-menu-text">Corp Bond</span></a></li>
							</ul></li>
					</ul>
				</div>
			</div>

		</div>
		<!-- /#sidebar-wrapper -->
		<div id="page-content-wrapper">
			<form id="appform" action="app" method="post"></form>
			<section class="vbox">
				<header
					class="bg-white header header-md navbar navbar-fixed-top-xs box-shadow"
					style="background-color: #f05a18">
					<div class="navbar-header aside-md dk">
						<a href="#menu-toggle" class="btn bar-button" id="menu-toggle"><i
							class="fa fa-bars bar-icon" aria-hidden="true" id="iconbarMenu"></i></a> <a
							class="btn btn-link visible-xs" data-toggle="dropdown"
							data-target=".user"> <i class="fa fa-bars"></i>
						</a>
						<div class="hide-logo" style="display:none;" id="divHideLogo">
							<img src="images/score-logo.PNG" alt="resurgent rating" width="200" class="hidden-logo" id="menutoggle-scoreme">
							<img src="images/logo2.png" alt="Assocham rating" width="140" class="hidden-logo" id="menutoggle-assocham">
						</div>
					</div>
					<!-- <ul class="nav navbar-nav hidden-xs">
				<li class="dropdown"><a href="#" class="dropdown-toggle"
					data-toggle="dropdown"> <i class="i i-grid"></i>
				</a>
					<section
						class="dropdown-menu aside-lg bg-white on animated fadeInLeft">
						<div class="row m-l-none m-r-none m-t m-b text-center">
							<div class="col-xs-4">
								<div class="padder-v">
									<a href="app?page=dashboard"> <span class="m-b-xs block">
											<i class="i i-graph i-2x text-primary-lt"></i>
									</span> <small class="text-muted">Dashboard</small>
									</a>
								</div>
							</div>
							<div class="col-xs-4">
								<div class="padder-v">
									<a href="app?page=account"> <span class="m-b-xs block">
											<i class="i i-pencil2 i-2x text-danger-lt"></i>
									</span> <small class="text-muted">Account</small>
									</a>
								</div>
							</div>
							<div class="col-xs-4">
								<div class="padder-v">
									<a href="app?page=addcompany"> <span class="m-b-xs block">
											<i class="i i-layer2 i-2x text-success-lt"></i>
									</span> <small class="text-muted">New Entity</small>
									</a>
								</div>
							</div>
						</div>
					</section></li>
			</ul> -->
			  
 <input type="hidden" id="hiddenParam" value="${userBean.userInfo.instituteId}"/>
					<ul
						class="nav navbar-nav navbar-right m-n hidden-xs nav-user user top-nav">
						<c:if test="${fn:length(userBean.allcompanyDTOs) gt 0}"> 
 							<li class="dropdown" id="imp"><a href="#" class="dropdown-toggle" 
								style="background-color: #fff; padding: 31px; margin-top: -9px; text-transform: uppercase;" 
 								data-toggle="dropdown"><div class="h4 font-bold"
										style="color: #333;">${userBean.companyName }</div> </a>
								<ul id="loc" class="dropdown-menu animated fadeInRight"
									style="height: 200px; overflow: hidden; overflow-y: scroll;">
									<li><a href="#" onclick="callApp('page,addcompany');"><b>New 
 												Entity</b></a></li> 
											<li class="divider"></li>	 
 										<li><div><select name="selectCompany" class="select2" style="width:200px; height:40px;margin:2px;" >
                         <c:forEach var="c" items="${userBean.allcompanyDTOs}" 
									varStatus="loop">  
 										<option value="${c.id}"><a href="#"  
										onclick="callApp('page,dashboard,companyId,${c.id}');" class="lin">${c.companyName}</a></option> 
									</c:forEach>
                      </select></div></li> 
									<li class="divider"></li> 
 									<c:forEach var="c" items="${userBean.allcompanyDTOs}" 
										varStatus="loop">  
 										<li><a href="#" 
											onclick="callApp('page,dashboard,companyId,${c.id}');">${c.companyName}</a></li>  
									</c:forEach>  
 								</ul></li>
 						</c:if>  
                      
						<li class="dropdown"><a href="#"
						class="dropdown-toggle account-box" data-toggle="dropdown"> 
							${sessionScope.firstName} ${sessionScope.lastName} <b 
							class="caret"></b> 
 						</a> 
							<ul class="dropdown-menu animated fadeInRight" id="dropdownlist"> 
							<li><a href="#" onclick="callApp('page,company');">Manage 
										Entity</a></li> 
							<li><a href="#" onclick="callApp('page,account');">Account</a></li> 
 								<li><a href="#">Help</a></li> 
								<li class="divider"></li>
 								<li><a href="#" onclick="callApp('page,changepassword');">Change 
										Password</a></li>
 								<li><a href="Logout">Logout</a></li> 
						</ul></li> 
 					</ul> 
				</header>

				<section class="main-content">
					<section class="hbox stretch">

						<jsp:include page="/WEB-INF/content/${param.content}.jsp"></jsp:include>

						<div class="cssload-thecube" id="wait" style="display: none;">
							<div class="cssload-cube cssload-c1"></div>
							<div class="cssload-cube cssload-c2"></div>
							<div class="cssload-cube cssload-c4"></div>
							<div class="cssload-cube cssload-c3"></div>
						</div>

					</section>
				</section>
			</section>




		</div>


	</div>