<!DOCTYPE html>
<html lang="en" class=" ">
<head>
<meta charset="utf-8" />
<title>ScoreMe | Sign In</title>
<meta name="description"
	content="app, web app, responsive, admin dashboard, admin, flat, flat ui, ui kit, off screen nav" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1" />
<link rel="stylesheet" href="css/app.v1.css" type="text/css" />
<!--[if lt IE 9]> <script src="js/ie/html5shiv.js"></script> <script src="js/ie/respond.min.js"></script> <script src="js/ie/excanvas.js"></script> <![endif]-->
<style>
	/*custom modal css starts from here*/

.modal.modal-wide{
	overflow: hidden;
}
.modal.modal-wide .modal-dialog {
	width: 94%;
  overflow-y: initial !important;
}
.modal-wide .modal-body {
	overflow-y: auto;
  height: 400px !important;
}

@-webkit-keyframes ezCustTrans {
	0% {
		-webkit-transform-style: preserve-3d;
		-moz-transform-style: preserve-3d;
		transform-style: preserve-3d;
		-webkit-transform:  perspective(90%) rotateY(-65deg) rotateX(-45deg) translateZ(-200px);
		-moz-transform: perspective(90%) rotateY(-65deg) rotateX(-45deg) translateZ(-200px);
		-ms-transform: perspective(90%) rotateY(-65deg) rotateX(-45deg) translateZ(-200px);
		transform: perspective(90%) rotateY(-65deg) rotateX(-45deg) translateZ(-200px);
		opacity: 0;
	}
    68% {
		-webkit-transform:  rotateY(10deg) rotateX(10deg) translateZ(20px);
		-moz-transform:  rotateY(10deg) rotateX(10deg) translateZ(20px);
		-ms-transform:  rotateY(10deg) rotateX(10deg) translateZ(20px);
		transform:  rotateY(10deg) rotateX(10deg) translateZ(20px);
		opacity: 0.8;
    }
	100% {
		-webkit-transform:  rotateY(0deg) rotateX(0deg) translateZ(0px);
		-moz-transform:  rotateY(0deg) rotateX(0deg) translateZ(0px);
		-ms-transform:  rotateY(0deg) rotateX(0deg) translateZ(0px);
		transform:  rotateY(0deg) rotateX(0deg) translateZ(0px);
		opacity: 1;
	}
}
@keyframes ezCustTrans {
	0% {
		-webkit-transform-style: preserve-3d;
		-moz-transform-style: preserve-3d;
		transform-style: preserve-3d;
		-webkit-transform: perspective(90%) rotateY(-65deg) rotateX(-45deg) translateZ(-200px);
		-moz-transform: perspective(90%) rotateY(-65deg) rotateX(-45deg) translateZ(-200px);
		-ms-transform: perspective(90%) rotateY(-65deg) rotateX(-45deg) translateZ(-200px);
		transform: perspective(90%) rotateY(-65deg) rotateX(-45deg) translateZ(-200px);
		opacity: 0;
	}
	68% {
		-webkit-transform:  rotateY(10deg) rotateX(10deg) translateZ(20px);
		-moz-transform:  rotateY(10deg) rotateX(10deg) translateZ(20px);
		-ms-transform:  rotateY(10deg) rotateX(10deg) translateZ(20px);
		transform:  rotateY(10deg) rotateX(10deg) translateZ(20px);
		opacity: 0.8;
    }
    100% {
		-webkit-transform: rotateY(0deg) rotateX(0deg) translateZ(0px);
		-moz-transform:  rotateY(0deg) rotateX(0deg) translateZ(0px);
		-ms-transform:  rotateY(0deg) rotateX(0deg) translateZ(0px);
		transform:  rotateY(0deg) rotateX(0deg) translateZ(0px);
		opacity: 1;
	}
}
.ezCustTrans {
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
	-webkit-animation-name: ezCustTrans;
	animation-name: ezCustTrans;
}
</style>
</head>
<body class="" ng-app="scoremeapp">
	<nav class="navbar navbar-default nav-custom" role="navigation" >
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse"
				data-target="#example-navbar-collapse">
				<span class="sr-only">Toggle navigation</span> <span
					class="icon-bar"></span> <span class="icon-bar"></span> <span
					class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="/signin"> <img
				src="images/score-logo.PNG" alt="score me">
			</a>
		</div>
		<div class="collapse navbar-collapse" id="example-navbar-collapse">
			<ul class="nav navbar-nav">
				<li class="active"><a href="/signin">HOME</a></li>
				<li><a href="#" data-toggle="modal" data-target="#aboutus">ABOUT US</a></li>
				<li class="dropdown"><a href="#" class="dropdown-toggle"
					data-toggle="dropdown"> SCORE ME <b class="caret"></b>
				</a>
					<ul class="dropdown-menu custom-menu">
						<li><a href="/#need"><i
								class="fa fa-chevron-right" aria-hidden="true"></i> Need for
								score me</a></li>
						<li class="divider"></li>
						<li><a href="/#benefit"><i
								class="fa fa-chevron-right" aria-hidden="true"></i> Benefits of
								score me</a></li>
						<li class="divider"></li>
						<li><a href="/#process"><i
								class="fa fa-chevron-right" aria-hidden="true"></i> Process
								Adopted</a></li>
						<li class="divider"></li>
						<li><a href="/#pricing"><i
								class="fa fa-chevron-right" aria-hidden="true"></i> Pricing Plan</a></li>
					</ul>
		</div>
	</nav>
	<section id="content" class="m-t-lg wrapper-md animated fadeInUp">
		<div class="container aside-xl login-box" style="margin-bottom: 150px;margin-top:50px;">
			<section class="m-b-lg">
				<header class="wrapper text-center">
					<h3 class="forget-head">Forgot Password</h3>
				</header>

				<%
					if (request.getParameter("msg") != null) {

						if (request.getParameter("msg").equals("forgot1")) {
				%>


				<div class="alert alert-success" id="save-draft-success">
					<button type="button" class="close" data-dismiss="alert">x</button>
					<i class="fa fa-ok-sign"></i><strong>Success!</strong> Please login
					to your email account
					<%=request.getParameter("email")%>
					and check your new password. <a href="signin"
						class="alert-link">Click here, to login
						to your account.</a>.
				</div>

				<%
					}
						if (request.getParameter("msg").equals("forgot0")) {
				%>

				<div class="alert alert-error" id="forgot-failure">
					<button type="button" class="close" data-dismiss="alert">x</button>
					<i class="fa fa-ok-sign"></i><strong>Failed!</strong> Unable to retrieve 
					mentioned email address. Please check and try again.
				</div>

				<%
					}
						
					}
				%>


				<form name="forgotPassowdForm" novalidate ng-controller="loginController">
					<div class="list-group">
						<div class="list-group-item">
							<input type="email" placeholder="Email" name="username" ng-model="username"
								class="form-control no-border">
						</div>
						
					</div>
					<button type="submit" class="btn btn-lg btn-primary btn-block" ng-disabled="forgotPasswordForm.$invalid"
						ng-click="forgotPassword()" style="background-color: #f44300; border-color: #f44300;border-radius:0px;">Reset Password</button>
					
					<div class="line line-dashed"></div>
					
					<a href="signin" class="btn btn-lg btn-default btn-block" style="border-radius:0px;">Sign
						in</a>
				</form>
			</section>
		</div>
	</section>
	<!-- footer -->
		<div class="row">
			<div class="col-md-12 footer">
				<ul class="list-inline foot-links">
					<li><a href="#home">Home</a></li>
					<li><a href="#" data-toggle="modal" data-target="#aboutus">About
							us</a></li>
					<!-- <li><a href="#" data-toggle="modal" data-target="#score-mod">Scoring</a></li> -->
					<li><a href="#" data-toggle="modal" data-target="#faq">Faq</a></li>
					<li><a href="#" data-toggle="modal" data-target="#termsofuse">Terms
							of Use</a></li>
					<li><a href="#" data-toggle="modal" data-target="#privacy">Privacy
							Policy</a></li>
					<li><a href="#" data-toggle="modal" data-target="#contact">Contact</a></li>
				</ul>
				<br>
				<center>
					<p class=foot-txt"">Copyright © Score me 2016-17. All rights
						reserved.</p>
				</center>
			</div>
		</div>
		
				<!-- Modal for About us -->
		<div class="modal modal-wide modal-pos" id="aboutus" tabindex="-1"
			role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog ezCustTrans">
				<div class="modal-content">
					<div class="modal-header modal-section">
						<h1>About Us</h1>
						<button type="button" class="close cls-btn" data-dismiss="modal"
							aria-hidden="true">×</button>
					</div>
					<div class="modal-body">
						<div class="col-md-7" style="padding-bottom: 35px;">
							<br>
							<p class="para-txt">
								Score me is an initiative of <span class="bld-txt2"><a
									href="http://www.resurgentindia.com/">Resurgent India
										Limited</a></span>. Resurgent India Limited is a growing Investment
								Banking Firm. We are a SEBI registered Category 1 Merchant Bank
								& ISO Certified 9001:2008 company offering services like Merger
								& Acquisitions, Private Equity, Debt Solutions, Structured
								Finance, Capital Market Solutions, Valuations, Enterprise Risk &
								Tax Services.
							</p>
						</div>
					</div>

				</div>
			</div>
		</div>



		<!-- Modal for Faq -->
		<div class="modal modal-wide modal-pos" id="faq" tabindex="-1"
			role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog ezCustTrans">
				<div class="modal-content">
					<div class="modal-header modal-section">
						<h1>Faq</h1>
						<button type="button" class="close cls-btn" data-dismiss="modal"
							aria-hidden="true">×</button>
					</div>
					<div class="modal-body">
						<div class="col-md-12" style="padding-bottom: 35px;">
							<h3>What does the score suggest?</h3>
							<p class="para-txt">The score represents the probability of
								availing a loan. It helps a company to assess its business
								health and also assist in monitoring the same over a period of
								time.</p>
							<h3>How do companies benefit through ScoreMe?</h3>
							<p class="para-txt">Banks, financial institutions, rating
								agencies has a certain way of looking into a funding proposal.
								But, the companies are not very clear as to what they see into.
								This information is generally confidential. It is observed that
								companies spend a considerable amount of time, money and energy
								in persuading the institutions in the process of raising finance
								but in many cases they fail to understand as to why their
								proposal has been rejected. They also sometime fail to place
								across their strength as they are not sure as to what the
								financial institutions are actually looking at. ScoreMe helps
								companies to have a better understanding of their company in the
								eyes of an analyst which helps them in taking up prudent
								decisions around the type of institution to reach to for
								finance, the time which is best suited for placing across the
								proposal as well as understanding the strengths that ideally is
								required to be showcased better. It is a service which may be
								availed on a continuous basis that would help the company to
								monitor their business health better and give a perspective to
								the strategy that would be required to be framed. This insight
								would lead to a lot of saving for the company in terms of
								energy, money and time.</p>
							<h3>What is the significance of the score?</h3>
							<p class="para-txt">The higher the score, the better is the
								creditworthiness of the company.</p>
							<h3>How many times in a year can one calculate the score?</h3>
							<p class="para-txt">One may take up the scoring exercise at
								any time and for any number of times in a year.</p>
							<h3>What does a decrease in score suggest?</h3>
							<p class="para-txt">It indicates that the business health has
								weakened than what it was earlier due to some changes in the
								input parameters.</p>
							<h3>How much time does it take to calculate the score?</h3>
							<p class="para-txt">If the information is kept handy, the
								process shall not take more than 15 minutes.</p>
						</div>
					</div>

				</div>
			</div>
		</div>


		<!-- Modal for Terms of use -->
		<div class="modal modal-wide modal-pos" id="termsofuse" tabindex="-1"
			role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog ezCustTrans">
				<div class="modal-content">
					<div class="modal-header modal-section">
						<h1>Terms of Use</h1>
						<button type="button" class="close cls-btn" data-dismiss="modal"
							aria-hidden="true">×</button>
					</div>
					<div class="modal-body">
						<div class="col-md-12" style="padding-bottom: 35px;">
							<p class="para-txt">
								By accessing this web site and or using the information provided
								on or via this web site you agree to be bound by this
								Disclaimer.<br> <br>Resurgent India Limited shall not
								have any responsibility to maintain the data and services made
								available on this Web site or to supply any corrections,
								updates, or releases in connection therewith. Availability of
								the data is subject to change without prior notice. It is
								recommended that you review the information provided on or via
								this web site, including the terms of this Disclaimer,
								periodically for changes. The information contained in this
								website is based on sources believed to be reliable but is
								neither all-inclusive nor guaranteed by Resurgent India Limited.
								Opinions, if any, reflect our judgment at this time and are
								subject to change. In the course of our firm's regular business,
								we may perform or seek to perform investment banking services
								for any of the company (ies) mentioned herein or act as advisor
								or lender / borrower to such company (ies) or have other
								interest with respect to any recommendation and related
								information and opinions.
							</p>
							<h3>
								<b>Copyright or Other Notices</b>
							</h3>
							<br>
							<p class="para-txt">
								<b>No part of this material may be:</b><br> Copied,
								photocopied, or duplicated in any form by any means or
								Re-distributed without Resurgent India Limited.' prior written
								consent If you download any information or software from this
								site, you agree that you will not copy it or remove or obscure
								any copyright or other notices or legends contained in any such
								information.
							</p>
							<p class="para-txt">
								<b>We Follow a no refund policy.</b>
							</p>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- Modal for Privacy Policy -->
		<div class="modal modal-wide modal-pos" id="privacy" tabindex="-1"
			role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog ezCustTrans">
				<div class="modal-content">
					<div class="modal-header modal-section">
						<h1>Privacy Policy</h1>
						<button type="button" class="close cls-btn" data-dismiss="modal"
							aria-hidden="true">×</button>
					</div>
					<div class="modal-body">
						<div class="col-md-12" style="padding-bottom: 35px;">
							<h3>
								<b>Use of Information and Materials</b>
							</h3>
							<br>
							<p class="para-txt">The information contained in this website
								is for general information purposes only "as is" basis without
								any representations or warranties. While we endeavor to keep the
								information up to date and correct, we make no representations
								or warranties of any kind, express or implied, about the
								completeness, accuracy, reliability, suitability or availability
								with respect to the website or the information, products,
								services, or related graphics contained on the website for any
								purpose. Any reliance you place on such information is therefore
								strictly at your own risk. By accessing this site and any pages
								thereof, you agree to be bound by the terms and conditions
								below. If you do not agree to the terms and conditions below, do
								not access this site or any pages thereof.</p>
							<br>
							<h3>
								<b>Terms of use</b>
							</h3>
							<br>
							<p class="para-txt">The information and materials contained
								in these pages - and the terms, conditions, and descriptions
								that appear - are subject to change. Not all products and
								services are available in all geographic areas. Your eligibility
								for particular products and services is subject to final
								Resurgent India Limited (RIL) determination and acceptance. The
								inclusion of any links does not necessarily imply a
								recommendation or endorse the views expressed within them. Every
								effort is made to keep the website up and running smoothly.
								However we take no responsibility for, and will not be liable
								for, the website being temporarily unavailable due to technical
								issues beyond our control. This web site and its contents is
								copy right of Resurgent India Limited. All rights are reserved.
								Nothing on this website constitutes, or is meant to constitute,
								advice of any kind. If you require advice in relation to any
								financial matter you should consult an appropriate professional.</p>
							<br>
							<h3>
								<b>Limitation of Liability</b>
							</h3>
							<br>
							<p class="para-txt">In no event will Resurgent India Limited
								be liable for any damages, including without limitation direct
								or indirect, special, incidental, or consequential damages,
								losses or expenses arising in connection with this site or use
								thereof or inability to use by any party, or in connection with
								any failure of performance, error, omission, interruption,
								defect, delay in operation or transmission, computer virus or
								line or system failure, even if Resurgent India Limited , or
								representatives thereof, are advised of the possibility of such
								damages, losses or expenses. Hyperlinks to other internet
								resources are at your own risk; the content, accuracy, opinions
								expressed, and other links provided by these resources are not
								investigated, verified, monitored, or endorsed by Resurgent
								India Limited.</p>

							<br>
							<h3>
								<b>Submissions</b>
							</h3>
							<br>
							<p class="para-txt">All information submitted to Resurgent
								India Limited via this site shall be deemed and remain the
								property of Resurgent India Limited. Resurgent India Limited
								shall be free to use, for any purpose, any ideas, concepts,
								know-how or techniques contained in information a visitor to
								this site provides Resurgent India Limited Limited through this
								site. Resurgent India Limited Limited shall not be subject to
								any obligations of confidentiality regarding submitted
								information except as agreed by Resurgent India Limited, entity
								having the direct customer relationship or as otherwise
								specifically agreed or required by law. Resurgent India Limited
								is committed to safeguard the confidentiality and security of
								information of the users of this web site. Resurgent India
								Limited may disclose any information that is provided through
								this web site to: any other person or entity with the consent of
								the client, or if Resurgent India Limited has a right or duty to
								disclose or is permitted or compelled to so disclose such
								information by law, for the time being in force. For example,
								Resurgent India Limited may share/provide information with/to
								judicial bodies and regulatory authorities who have jurisdiction
								over Resurgent India Limited. Resurgent India may also enter
								into agreement(s) with other company (ies) to provide services
								to Resurgent India Limited or make services and products
								available to its clients and they may thus receive information
								about the users, but they may only use it for those purpose(s)
								that Resurgent India Limited specifies.</p>

							<br>
							<h3>
								<b>No warranties</b>
							</h3>
							<br>
							<p class="para-txt">This web site, the information and
								materials on the site, and any software made available on the
								web site, are provided "as is" without any representation or
								warranty, express or implied, of any kind, including, but not
								limited to, warranties of merchantability, non-infringement, or
								fitness for any particular purpose or warranty of any kind,
								express or implied, regarding third party content. In spite of
								RIL's best endeavours, there is no warranty of the website being
								free of any computer viruses. Some jurisdictions do not allow
								for the exclusion of implied warranties, so the above exclusions
								may not apply to you. Unlawful use of this website We reserve
								the right to investigate complaints or reported violations of
								this Privacy Policy and to take any action as deemed appropriate
								including but not limited to reporting any suspected unlawful
								activity to law enforcement officials, regulators, or other
								third parties and disclosing any information necessary or
								appropriate to such persons, or entities relating to users
								profiles, e-mails, addresses, usage history, posted materials,
								IP addresses etc.</p>


							<br>
							<h3>
								<b>Unlawful use of this website</b>
							</h3>
							<br>
							<p class="para-txt">We reserve the right to investigate
								complaints or reported violations of this Privacy Policy and to
								take any action as deemed appropriate including but not limited
								to reporting any suspected unlawful activity to law enforcement
								officials, regulators, or other third parties and disclosing any
								information necessary or appropriate to such persons, or
								entities relating to users profiles, e-mails, addresses, usage
								history, posted materials, IP addresses etc.</p>


							<br>
							<h3>
								<b>Governing law and jurisdiction</b>
							</h3>
							<br>
							<p class="para-txt">This website is for informational
								purposes only and should not be construed as technical advice of
								any manner and by viewing it you are deemed to agree to
								jurisdiction of the courts at Mumbai, India in respect of any
								action arising there from or related thereto. Reasonableness By
								using this website, you agree that the exclusions and
								limitations of liability set out in this website disclaimer are
								reasonable. If you do not think they are reasonable, you must
								not use this website.</p>

							<br>
							<h3>
								<b>Reasonableness</b>
							</h3>
							<br>
							<p class="para-txt">By using this website, you agree that the
								exclusions and limitations of liability set out in this website
								disclaimer are reasonable. If you do not think they are
								reasonable, you must not use this website.</p>

							<br>
							<h3>
								<b>Unenforceable provisions</b>
							</h3>
							<br>
							<p class="para-txt">If any provision of this website
								disclaimer is, or is found to be, unenforceable under applicable
								law, that will not affect the enforceability of the other
								provisions of this website disclaimer.</p>

							<br>
							<h3>
								<b>Other parties</b>
							</h3>
							<br>
							<p class="para-txt">You accept that, as a limited liability
								entity, we have an interest in limiting the personal liability
								of its officers and employees. You agree that you will not bring
								any claim personally against our officers or employees in
								respect of any losses you suffer in connection with the website.</p>

						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- Modal for Contact-->
		<div class="modal modal-wide modal-pos" id="contact" tabindex="-1"
			role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog ezCustTrans">
				<div class="modal-content">
					<div class="modal-header modal-section">
						<h1>Contact Us</h1>
						<button type="button" class="close cls-btn" data-dismiss="modal"
							aria-hidden="true">×</button>
					</div>
					<div class="modal-body">
						<div class="col-md-12" style="padding-bottom: 35px;">
							<div class="col-md-2 address">
								<h2>Gurgaon</h2>
								<br>
								<p>Unit no 903-906, 9th Floor, Tower-C, Unitech Business
									Zone,</p>
								<p>Nirvana Country, Sector-50, Gurgaon, Haryana - 122018</p>
								<p>Tel. No.: +91 124 4754550</p>
								<p>Fax. No.: +91 124 4754584</p>
							</div>
							<div class="col-md-2 address">
								<h2>Mumbai</h2>
								<br>
								<p>303, Central Plaza, 166 CST Road,</p>
								<p>Kalina, Mumbai-400098</p>
								<p>Tel. No.: +91-22-67080400/1/2/3</p>
							</div>

							<div class="col-md-2 address">
								<h2>Kolkata</h2>
								<br>
								<p>CFB F-1, 1st Floor, Paridhan Garment Park,</p>
								<p>19, Canal South Road, Kolkata - 700 015</p>
								<p>Tel. No.: +91 33 6452 5594</p>
								<p>Fax No.: +91 33 2323 2086</p>
							</div>

							<div class="col-md-2 address">
								<h2>Bengaluru</h2>
								<br>
								<p>SreeLaxmi Plaza, 3rd Floor, No. 61, 24th main, 7th cross,</p>
								<p>Marenahalli, J.P. Nagar 2nd phase,</p>
								<p>Bangalore - 560 078, Karnataka</p>
								<p>Tel. No.: +91 9686196061</p>
							</div>

							<div class="col-md-2 address">
								<h2>Chennai</h2>
								<br>
								<p>Building No.1, 2nd Floor, 1st Street, Balaji Nagar
									Ekkaduthangal,</p>
								<p>Chennai - 600032, Tamilnadu</p>
								<p>Tel. No.: +91 90940 02280</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

	<!-- / footer -->
	<!-- Bootstrap -->
	<!-- App -->
	<script src="js/app.v1.js"></script>
	<script src="js/app.plugin.js"></script>
		<!-- ********************** angular js ************************ -->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>
	<script src="angularcustomjs/ang_app/scoreme_app.js"></script>
	<script src="angularcustomjs/ajaxservice.js"></script>
	<!--****angular controllers starts ****-->
	<script src="angularcustomjs/ang_controller/logincontroller.js"></script>
		<script src="angularcustomjs/ang_controller/industrycontroller.js"></script>
	<!--****angular controllers ends ****-->
	
    <!--<script src="angularcustomjs/ang_services/company_service.js"></script>-->
     <script src="angularcustomjs/ang_directive/directive.js"></script>
	<!-- ********************* angular js ************************ -->
	
	<div class="modal fade" id="ajaxModal" aria-hidden="true"
		style="display: none;">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">×</button>
					<h4 class="modal-title">Forgot Password</h4>
				</div>
				<div class="modal-body">...</div>
				<div class="modal-footer">
					<a href="#" class="btn btn-default" data-dismiss="modal">Close</a>
					<a href="#" class="btn btn-primary">Submit</a>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal-dialog -->
	</div>

	
</body>
</html>