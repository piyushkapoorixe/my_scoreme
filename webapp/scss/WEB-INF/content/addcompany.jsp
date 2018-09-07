<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<section id="content"  ng-controller="industryController">
	<section class="hbox stretch" ng-controller="stateCommonController">
		<section>
			<section class="vbox gradient">
				<section class="scrollable padder">
					<section id="content" class="m-t-lg wrapper-md animated fadeInDown">
						<div class="container aside-xl" style="border: 1px solid #ccc;margin-bottom:10px;">
							<h3 class="head-txt">Add Entity</h3>
							<section class="m-b-lg">
								<header class="wrapper text-center">
									<strong>Fill the form below to add new entity</strong>
								</header>
								<form id="company-form" data-validate="parsley" action="#">
									<div class="list-group">
										<div class="list-group-item">
											<input type="text" name="company_name" id="company_name" ng-model="company_name"
												class="form-control no-border" maxlength="255"
												text="Please enter the name of the company"
												placeholder="Enter entity name" data-required="true">
										</div>
										
										<div>
										<div class="list-group-item">
										  <select name="businessType" id="businessType" data-required="true"
											 title="Please select the Business" ng-model="businessType"
												class="form-control no-border" ng-change="getIndustryType()">
		<option value="">SELECT BUSINESS TYPE</option>
		<option ng-repeat="b in businessTypeData.data" value="{{b.id}}">{{b.groupName}}</option>
										</select>		
										</div>	
										<div class="list-group-item">
										  <select name="industryType" id="industryType" data-required="true"
											 title="Please select the Industry Type" ng-model="industryType"
												class="form-control no-border">
												<option value="">SELECT INDUSTRY TYPE</option>
		<option ng-repeat="b in industryTypeData.data" value="{{b.industryId}}">{{b.industryName}}</option>
											</select>
										</div>
										</div>
									
										<div class="list-group-item">
											<input type="text" class="form-control no-border"
											title="Please share the PAN (Permanent Account Number) of your company"
												name="company_id" id="company_id" maxlength="10" ng-model="company_id"
												placeholder="Enter pan card" data-required="true">
										</div>
										
										<div >
										<div class="list-group-item">
											<select name="partner_state" id="partner_state" ng-model="partner_state"
											data-required="true" title="Please select the state"
											class="form-control no-border" ng-change="getCities()" >
											<option value="">SELECT STATE</option>
											<option ng-repeat="s in stateData.data" value="{{s.id}}">{{s.name}}</option>
										    </select>	
										</div>
										<div class="list-group-item">	
											<select name="partner_city" id="partner_city" ng-model="partner_city"
											data-required="true" title="Please select the city"
											class="form-control no-border" >
											<option value="">SELECT CITY</option>
											<option ng-repeat="s in cityData.data" value="{{s.id}}">{{s.name}}</option>
										    </select>				
										</div>
										</div>
									</div>
									<div class="checkbox m-b">
										<span class="checkbox-inline i-checks"> <input
											name="agreecheck" data-required="true" type="checkbox"
											 id="companyCheckbox" ng-model="companyCheckbox"
											value="1"><i></i> I agree to the <a
											data-target="#ajaxModal" data-toggle="modal">terms and
												policies</a>
										</span>
									</div>
									<button type="button"
										class="btn btn-lg btn-primary btn-block" ng-disabled="!companyCheckbox"
										ng-click="addCompany()" id="addcomp-button"
										style="background-color: #FAA61A; border-color: #FAA61A; border-radius: 0px;">
										Proceed for Score</button>
								</form>
							</section>






						</div>
					</section>
					<!-- footer -->
					<div class="row">
						<p class="disclaimer-txt">
							<b>Disclaimer:</b> We believe that you have inputted the data to
							the best of your knowledge as the efficacy of our model is
							dependent on the right set of data to churn effective output.
						</p>
						<div class="col-md-12 internal-footer"
							style="width: 100%; height: 50px;margin-top:100px !important; padding-top: 15px;">
							<ul class="list-inline foot-links-int">
								<li><a href="#home">Home</a></li>
								<li><a href="#" data-toggle="modal" data-target="#aboutus">About
										us</a></li>
								<!-- <li><a href="#" data-toggle="modal" data-target="#score-mod">Scoring</a></li> -->
								<li><a href="#" data-toggle="modal" data-target="#faq">Faq</a></li>
								<li><a href="#" data-toggle="modal"
									data-target="#termsofuse">Terms of Use</a></li>
								<li><a href="#" data-toggle="modal" data-target="#privacy">Privacy
										Policy</a></li>
								<li><a href="#" data-toggle="modal" data-target="#contact">Contact</a></li>
							</ul>
						</div>

					</div>
				</section>
				<!-- Modal for Terms of use -->
				<div class="modal modal-wide modal-pos" id="ajaxModal" tabindex="-1"
					role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div class="modal-dialog ezCustTrans">
						<div class="modal-content">
							<div class="modal-header modal-section">
								<h1>Terms and Conditions</h1>
								<button type="button" class="close" data-dismiss="modal"
									style="margin-top: -50px; margin-right: 10px;"
									aria-hidden="true">�</button>
							</div>
							<div class="modal-body">
								<div class="col-md-12 sub-text">
									<h3>
										<b>Use of Information and Materials</b>
									</h3>
									<br>
									<p>The information contained in this website is for general
										information purposes only "as is" basis without any
										representations or warranties. While we endeavor to keep the
										information up to date and correct, we make no representations
										or warranties of any kind, express or implied, about the
										completeness, accuracy, reliability, suitability or
										availability with respect to the website or the information,
										products, services, or related graphics contained on the
										website for any purpose. Any reliance you place on such
										information is therefore strictly at your own risk. By
										accessing this site and any pages thereof, you agree to be
										bound by the terms and conditions below. If you do not agree
										to the terms and conditions below, do not access this site or
										any pages thereof.</p>
									<br>

									<h3>
										<b>Terms of use</b>
									</h3>
									<br>
									<p>The information and materials contained in these pages -
										and the terms, conditions, and descriptions that appear - are
										subject to change. Not all products and services are available
										in all geographic areas. Your eligibility for particular
										products and services is subject to final Resurgent India
										Limited (RIL) determination and acceptance. The inclusion of
										any links does not necessarily imply a recommendation or
										endorse the views expressed within them. Every effort is made
										to keep the website up and running smoothly. However we take
										no responsibility for, and will not be liable for, the website
										being temporarily unavailable due to technical issues beyond
										our control. This web site and its contents is copy right of
										Resurgent India Limited. All rights are reserved. Nothing on
										this website constitutes, or is meant to constitute, advice of
										any kind. If you require advice in relation to any financial
										matter you should consult an appropriate professional.</p>
									<br>
									<h3>
										<b>Limitation of Liability</b>
									</h3>
									<br>
									<p>In no event will Resurgent India Limited be liable for
										any damages, including without limitation direct or indirect,
										special, incidental, or consequential damages, losses or
										expenses arising in connection with this site or use thereof
										or inability to use by any party, or in connection with any
										failure of performance, error, omission, interruption, defect,
										delay in operation or transmission, computer virus or line or
										system failure, even if Resurgent India Limited , or
										representatives thereof, are advised of the possibility of
										such damages, losses or expenses. Hyperlinks to other internet
										resources are at your own risk; the content, accuracy,
										opinions expressed, and other links provided by these
										resources are not investigated, verified, monitored, or
										endorsed by Resurgent India Limited.</p>

									<br>
									<h3>
										<b>Submissions</b>
									</h3>
									<br>
									<p>All information submitted to Resurgent India Limited via
										this site shall be deemed and remain the property of Resurgent
										India Limited. Resurgent India Limited shall be free to use,
										for any purpose, any ideas, concepts, know-how or techniques
										contained in information a visitor to this site provides
										Resurgent India Limited Limited through this site. Resurgent
										India Limited Limited shall not be subject to any obligations
										of confidentiality regarding submitted information except as
										agreed by Resurgent India Limited, entity having the direct
										customer relationship or as otherwise specifically agreed or
										required by law. Resurgent India Limited is committed to
										safeguard the confidentiality and security of information of
										the users of this web site. Resurgent India Limited may
										disclose any information that is provided through this web
										site to: any other person or entity with the consent of the
										client, or if Resurgent India Limited has a right or duty to
										disclose or is permitted or compelled to so disclose such
										information by law, for the time being in force. For example,
										Resurgent India Limited may share/provide information with/to
										judicial bodies and regulatory authorities who have
										jurisdiction over Resurgent India Limited. Resurgent India may
										also enter into agreement(s) with other company (ies) to
										provide services to Resurgent India Limited or make services
										and products available to its clients and they may thus
										receive information about the users, but they may only use it
										for those purpose(s) that Resurgent India Limited specifies.</p>

									<br>
									<h3>
										<b>No warranties</b>
									</h3>
									<br>
									<p>This web site, the information and materials on the
										site, and any software made available on the web site, are
										provided "as is" without any representation or warranty,
										express or implied, of any kind, including, but not limited
										to, warranties of merchantability, non-infringement, or
										fitness for any particular purpose or warranty of any kind,
										express or implied, regarding third party content. In spite of
										RIL's best endeavours, there is no warranty of the website
										being free of any computer viruses. Some jurisdictions do not
										allow for the exclusion of implied warranties, so the above
										exclusions may not apply to you. Unlawful use of this website
										We reserve the right to investigate complaints or reported
										violations of this Privacy Policy and to take any action as
										deemed appropriate including but not limited to reporting any
										suspected unlawful activity to law enforcement officials,
										regulators, or other third parties and disclosing any
										information necessary or appropriate to such persons, or
										entities relating to users profiles, e-mails, addresses, usage
										history, posted materials, IP addresses etc.</p>


									<br>
									<h3>
										<b>Unlawful use of this website</b>
									</h3>
									<br>
									<p>We reserve the right to investigate complaints or
										reported violations of this Privacy Policy and to take any
										action as deemed appropriate including but not limited to
										reporting any suspected unlawful activity to law enforcement
										officials, regulators, or other third parties and disclosing
										any information necessary or appropriate to such persons, or
										entities relating to users profiles, e-mails, addresses, usage
										history, posted materials, IP addresses etc.</p>


									<br>
									<h3>
										<b>Governing law and jurisdiction</b>
									</h3>
									<br>
									<p>This website is for informational purposes only and
										should not be construed as technical advice of any manner and
										by viewing it you are deemed to agree to jurisdiction of the
										courts at Mumbai, India in respect of any action arising there
										from or related thereto. Reasonableness By using this website,
										you agree that the exclusions and limitations of liability set
										out in this website disclaimer are reasonable. If you do not
										think they are reasonable, you must not use this website.</p>

									<br>
									<h3>
										<b>Reasonableness</b>
									</h3>
									<br>
									<p>By using this website, you agree that the exclusions and
										limitations of liability set out in this website disclaimer
										are reasonable. If you do not think they are reasonable, you
										must not use this website.</p>

									<br>
									<h3>
										<b>Unenforceable provisions</b>
									</h3>
									<br>
									<p>If any provision of this website disclaimer is, or is
										found to be, unenforceable under applicable law, that will not
										affect the enforceability of the other provisions of this
										website disclaimer.</p>

									<br>
									<h3>
										<b>Other parties</b>
									</h3>
									<br>
									<p>You accept that, as a limited liability entity, we have
										an interest in limiting the personal liability of its officers
										and employees. You agree that you will not bring any claim
										personally against our officers or employees in respect of any
										losses you suffer in connection with the website.</p>

								</div>

							</div>
						</div>
						<!-- /.modal-content -->
					</div>
					<!-- /.modal-dialog -->
				</div>

			</section>
		</section>



	</section>

</section>

<!-- Modal for About us -->
<div class="modal modal-wide modal-pos" id="aboutus" tabindex="-1"
	role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog ezCustTrans">
		<div class="modal-content">
			<div class="modal-header modal-section">
				<h1>About Us</h1>
				<button type="button" class="close cls-btn" data-dismiss="modal"
					aria-hidden="true">�</button>
			</div>
			<div class="modal-body">
					<h3 style="color:#f44300;margin-left: 15px;text-decoration: underline;" class="commonAsso">Assocham</h3>
						<div class="col-md-10" style="padding-bottom: 35px;">
							<p class="para-txt" id="assochamPara">
								<span class="bld-txt2"><a href="http://www.assocham.org/">ASSOCHAM
								</a></span> initiated its endeavor of value creation for Indian industry in
								1920. Having in its fold more than 400 Chambers and Trade
								Associations, and serving more than 4,50,000 members from all
								over India. It has witnessed upswings as well as upheavals of
								Indian Economy, and contributed significantly by playing a
								catalytic role in shaping up the Trade, Commerce and Industrial
								environment of the country. Today, ASSOCHAM has emerged as the
								fountainhead of Knowledge for Indian industry, which is all set
								to redefine the dynamics of growth and development in the
								technology driven cyber age of 'Knowledge Based Economy'.
								ASSOCHAM is seen as a forceful, proactive, forward looking
								institution equipping itself to meet the aspirations of
								corporate India in the new world of business. ASSOCHAM is
								working towards creating a conducive environment of India
								business to compete globally. ASSOCHAM derives its strength from
								its Promoter Chambers and other Industry/ Regional
								Chambers/Associations spread all over the country. It was
								established in 1920 by promoter Chambers, representing all
								regions of India.
							</p>
							<h3 style="color:#f44300;margin-left: -2px;text-decoration: underline;" class="commonAsso">ScoreMe</h3>
								<p class="para-txt" id="maincontetnt">
									Score me is an initiative of <span class="bld-txt2"><a
										href="http://www.resurgentindia.com/">Resurgent India
											Limited</a></span>. Resurgent India Limited is a growing Investment
									Banking Firm. We are a SEBI registered Category 1 Merchant Bank
									& ISO Certified 9001:2008 company offering services like Merger
									& Acquisitions, Private Equity, Debt Solutions, Structured
									Finance, Capital Market Solutions, Valuations, Enterprise Risk
									& Tax Services.
								</p>
								<p class="para-txt" id="scoremePara">ScoreMe is a Resurgent
									India Limited initiative, which provides a DIY (Do-It-Yourself)
									tool to MSMEs, assisting them in a better understanding of
									their business health & assess creditworthiness on an ongoing
									basis. The tool captures few of the most significant parameters
									that are ideally looked into by analysts of different financial
									institutions while taking credit decision. If the company
									undergoes the ScoreMe exercise, they get a fair estimate about
									where they are standing vis-a-vis the eyes of the Banks and
									accordingly plan their credit requirements. It has been
									developed as a proprietary algorithmic model that seek inputs
									about the company, churns the data in the model and then
									arrives at a credit score in just 15 seconds. The model has
									been developed taking into consideration the minimum relevant
									parameters.</p>
								<h4 style="color:#f44300;text-decoration: underline;" class="commonAsso">Benefits for MSMEs:</h4>
								<ol class="commonAsso">
								 <li><p class="para-txt"><b style="text-decoration: underline;">Do-It-Yourself Tool:</b>The tool is extremely user-friendly and can be used at one's own convenient place and time.</p></li>
								 <li><p class="para-txt"><b style="text-decoration:underline;">Digital Scoring Tool:</b>With the onset of technological revolution and increasing demand for a Digital Platform, ScoreMe provides a Credit Score online.</p></li>
								 <li><p class="para-txt"><b style="text-decoration:underline;">Slider:</b>To improve credit score, slider gives a fair idea on the scope of improvement and what parameters one should work upon.</p></li> 
								 <li><p class="para-txt"><b style="text-decoration:underline;">Benchmarking:</b>Helps in assessing a company's financial performance vis-a-vis industry benchmark.</p></li> 
								 <li><p class="para-txt"><b style="text-decoration:underline;">Affordable:</b>ScoreMe Charges only Rs. 4,000 for a company to check their credit score.</p></li>
								 <li><p class="para-txt"><b style="text-decoration:underline;">Regular Analysis:</b>One may undertake the exercise multiple times over a period of time to keep track of the business health.</p></li>
								 <li><p class="para-txt"><b style="text-decoration:underline;">Decision-Making Tool:</b>With the insight on different parameters of a company, the promoter would take prudent strategic decisions, thus saving a considerable amount of time, money and energy in the overall process.</p></li>
								</ol>			
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
					aria-hidden="true">�</button>
			</div>
			<div class="modal-body">
				<div class="col-md-12" style="padding-bottom: 35px;">
					<h3>What does the score suggest?</h3>
					<p class="para-txt">The score represents the probability of
						availing a loan. It helps a company to assess its business health
						and also assist in monitoring the same over a period of time.</p>
					<h3>How do companies benefit through ScoreMe?</h3>
					<p class="para-txt">Banks, financial institutions, rating
						agencies has a certain way of looking into a funding proposal.
						But, the companies are not very clear as to what they see into.
						This information is generally confidential. It is observed that
						companies spend a considerable amount of time, money and energy in
						persuading the institutions in the process of raising finance but
						in many cases they fail to understand as to why their proposal has
						been rejected. They also sometime fail to place across their
						strength as they are not sure as to what the financial
						institutions are actually looking at. ScoreMe helps companies to
						have a better understanding of their company in the eyes of an
						analyst which helps them in taking up prudent decisions around the
						type of institution to reach to for finance, the time which is
						best suited for placing across the proposal as well as
						understanding the strengths that ideally is required to be
						showcased better. It is a service which may be availed on a
						continuous basis that would help the company to monitor their
						business health better and give a perspective to the strategy that
						would be required to be framed. This insight would lead to a lot
						of saving for the company in terms of energy, money and time.</p>
					<h3>What is the significance of the score?</h3>
					<p class="para-txt">The higher the score, the better is the
						creditworthiness of the company.</p>
					<h3>How many times in a year can one calculate the score?</h3>
					<p class="para-txt">One may take up the scoring exercise at any
						time and for any number of times in a year.</p>
					<h3>What does a decrease in score suggest?</h3>
					<p class="para-txt">It indicates that the business health has
						weakened than what it was earlier due to some changes in the input
						parameters.</p>
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
					<h1 id="scoremeTerms">Terms of Use</h1>
				<h1 id="assochamTerms">T&C for ScoreMe and Assocham</h1>
				<button type="button" class="close cls-btn" data-dismiss="modal"
					aria-hidden="true">�</button>
			</div>
			<div class="modal-body">
				<div class="col-md-12" style="padding-bottom: 35px;">
					<p class="para-txt">
						By accessing this web site and or using the information provided
						on or via this web site you agree to be bound by this Disclaimer.<br>
						<br>Resurgent India Limited shall not have any responsibility
						to maintain the data and services made available on this Web site
						or to supply any corrections, updates, or releases in connection
						therewith. Availability of the data is subject to change without
						prior notice. It is recommended that you review the information
						provided on or via this web site, including the terms of this
						Disclaimer, periodically for changes. The information contained in
						this website is based on sources believed to be reliable but is
						neither all-inclusive nor guaranteed by Resurgent India Limited.
						Opinions, if any, reflect our judgment at this time and are
						subject to change. In the course of our firm's regular business,
						we may perform or seek to perform investment banking services for
						any of the company (ies) mentioned herein or act as advisor or
						lender / borrower to such company (ies) or have other interest
						with respect to any recommendation and related information and
						opinions.
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
						site, you agree that you will not copy it or remove or obscure any
						copyright or other notices or legends contained in any such
						information.
					</p>
					<h3>
						<b>Right Of Refund/Cancellation :</b>
					</h3>
					<p class="para-txt">
						If you choose to cancel your order, you may do so within 14 days
						from the time when you receive your first receipt of payment via
						mail and if the first free trial is only executed (i.e, not more
						than one score has been generated) ,without giving any reason by
						writing at info@scoreme.in. The right of cancellation is not
						applicable in case of renewal. <br> <br>To meet the
						cancellation deadline, you must send your communication of
						cancellation before the 14-day period has expired. <br> <br>Effects
						of cancellation: We will ideally reimburse you within 14 days from
						the day on which we receive your cancellation notice. We will use
						the same mean of payment as you used for the transaction and you
						will not incur any fees for such reimbursement.
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
					aria-hidden="true">�</button>
			</div>
			<div class="modal-body">
				<div class="col-md-12" style="padding-bottom: 35px;">
					<h3>
						<b>Use of Information and Materials</b>
					</h3>
					<br>
					<p class="para-txt">The information contained in this website
						is for general information purposes only "as is" basis without any
						representations or warranties. While we endeavor to keep the
						information up to date and correct, we make no representations or
						warranties of any kind, express or implied, about the
						completeness, accuracy, reliability, suitability or availability
						with respect to the website or the information, products,
						services, or related graphics contained on the website for any
						purpose. Any reliance you place on such information is therefore
						strictly at your own risk. By accessing this site and any pages
						thereof, you agree to be bound by the terms and conditions below.
						If you do not agree to the terms and conditions below, do not
						access this site or any pages thereof.</p>
					<br>
					<h3>
						<b>Terms of use</b>
					</h3>
					<br>
					<p class="para-txt">The information and materials contained in
						these pages - and the terms, conditions, and descriptions that
						appear - are subject to change. Not all products and services are
						available in all geographic areas. Your eligibility for particular
						products and services is subject to final Resurgent India Limited
						(RIL) determination and acceptance. The inclusion of any links
						does not necessarily imply a recommendation or endorse the views
						expressed within them. Every effort is made to keep the website up
						and running smoothly. However we take no responsibility for, and
						will not be liable for, the website being temporarily unavailable
						due to technical issues beyond our control. This web site and its
						contents is copy right of Resurgent India Limited. All rights are
						reserved. Nothing on this website constitutes, or is meant to
						constitute, advice of any kind. If you require advice in relation
						to any financial matter you should consult an appropriate
						professional.</p>
					<br>
					<h3>
						<b>Limitation of Liability</b>
					</h3>
					<br>
					<p class="para-txt">In no event will Resurgent India Limited be
						liable for any damages, including without limitation direct or
						indirect, special, incidental, or consequential damages, losses or
						expenses arising in connection with this site or use thereof or
						inability to use by any party, or in connection with any failure
						of performance, error, omission, interruption, defect, delay in
						operation or transmission, computer virus or line or system
						failure, even if Resurgent India Limited , or representatives
						thereof, are advised of the possibility of such damages, losses or
						expenses. Hyperlinks to other internet resources are at your own
						risk; the content, accuracy, opinions expressed, and other links
						provided by these resources are not investigated, verified,
						monitored, or endorsed by Resurgent India Limited.</p>

					<br>
					<h3>
						<b>Submissions</b>
					</h3>
					<br>
					<p class="para-txt">All information submitted to Resurgent
						India Limited via this site shall be deemed and remain the
						property of Resurgent India Limited. Resurgent India Limited shall
						be free to use, for any purpose, any ideas, concepts, know-how or
						techniques contained in information a visitor to this site
						provides Resurgent India Limited Limited through this site.
						Resurgent India Limited Limited shall not be subject to any
						obligations of confidentiality regarding submitted information
						except as agreed by Resurgent India Limited, entity having the
						direct customer relationship or as otherwise specifically agreed
						or required by law. Resurgent India Limited is committed to
						safeguard the confidentiality and security of information of the
						users of this web site. Resurgent India Limited may disclose any
						information that is provided through this web site to: any other
						person or entity with the consent of the client, or if Resurgent
						India Limited has a right or duty to disclose or is permitted or
						compelled to so disclose such information by law, for the time
						being in force. For example, Resurgent India Limited may
						share/provide information with/to judicial bodies and regulatory
						authorities who have jurisdiction over Resurgent India Limited.
						Resurgent India may also enter into agreement(s) with other
						company (ies) to provide services to Resurgent India Limited or
						make services and products available to its clients and they may
						thus receive information about the users, but they may only use it
						for those purpose(s) that Resurgent India Limited specifies.</p>

					<br>
					<h3>
						<b>No warranties</b>
					</h3>
					<br>
					<p class="para-txt">This web site, the information and
						materials on the site, and any software made available on the web
						site, are provided "as is" without any representation or warranty,
						express or implied, of any kind, including, but not limited to,
						warranties of merchantability, non-infringement, or fitness for
						any particular purpose or warranty of any kind, express or
						implied, regarding third party content. In spite of RIL's best
						endeavours, there is no warranty of the website being free of any
						computer viruses. Some jurisdictions do not allow for the
						exclusion of implied warranties, so the above exclusions may not
						apply to you. Unlawful use of this website We reserve the right to
						investigate complaints or reported violations of this Privacy
						Policy and to take any action as deemed appropriate including but
						not limited to reporting any suspected unlawful activity to law
						enforcement officials, regulators, or other third parties and
						disclosing any information necessary or appropriate to such
						persons, or entities relating to users profiles, e-mails,
						addresses, usage history, posted materials, IP addresses etc.</p>


					<br>
					<h3>
						<b>Unlawful use of this website</b>
					</h3>
					<br>
					<p class="para-txt">We reserve the right to investigate
						complaints or reported violations of this Privacy Policy and to
						take any action as deemed appropriate including but not limited to
						reporting any suspected unlawful activity to law enforcement
						officials, regulators, or other third parties and disclosing any
						information necessary or appropriate to such persons, or entities
						relating to users profiles, e-mails, addresses, usage history,
						posted materials, IP addresses etc.</p>


					<br>
					<h3>
						<b>Governing law and jurisdiction</b>
					</h3>
					<br>
					<p class="para-txt">This website is for informational purposes
						only and should not be construed as technical advice of any manner
						and by viewing it you are deemed to agree to jurisdiction of the
						courts at Mumbai, India in respect of any action arising there
						from or related thereto. Reasonableness By using this website, you
						agree that the exclusions and limitations of liability set out in
						this website disclaimer are reasonable. If you do not think they
						are reasonable, you must not use this website.</p>

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
					<p class="para-txt">If any provision of this website disclaimer
						is, or is found to be, unenforceable under applicable law, that
						will not affect the enforceability of the other provisions of this
						website disclaimer.</p>

					<br>
					<h3>
						<b>Other parties</b>
					</h3>
					<br>
					<p class="para-txt">You accept that, as a limited liability
						entity, we have an interest in limiting the personal liability of
						its officers and employees. You agree that you will not bring any
						claim personally against our officers or employees in respect of
						any losses you suffer in connection with the website.</p>

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
					aria-hidden="true">�</button>
			</div>
			<div class="modal-body">
				<div class="col-md-12" style="padding-bottom: 35px;">
					<div class="col-md-2 address">
						<h2>Gurgaon</h2>
						<br>
						<p>Unit no 903-906, 9th Floor, Tower-C, Unitech Business Zone,</p>
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

<script>
	var menuId = "menu-dashboard";

	/* function checkagree(a) {
		if (a) {
			$("#addcomp-button").removeAttr("disabled");
		} else {
			$("#addcomp-button").attr("disabled", "disabled");
		}
	}
 */
	/* function addCompany() {

		if ($("#company-form").parsley('validate')) {

			var jsonData = {
				companyId : $("#company_id").val(),
				companyName : $("#company_name").val(),
				industrygroupId:$("#businessType").val(),
				industryId  : $("#industryType").val(),
			    stateId:$("#partner_state").val(),
			    cityId :$("#partner_city").val()
			};

			$("#addcomp-button").attr("disabled", "disabled");

			$.ajax({
				url : "rest/cs/company/create",
				type : 'POST',
				dataType : "json",
				contentType : "application/json; charset=utf-8",
				data : JSON.stringify(jsonData),
				complete : function(data, textStatus, $XHR) {	
					data = data["responseJSON"];
					if (data["resp_code"] == "CS1002")
						callApp('page,rating,companyId,' + data["company"]);
					//window.location.href = "app?page=rating&companyId="+data["company"];
					else
						//

						$("#addcomp-button").attr("disabled", "");
				}
			});

		} else {

			console.log("Validation Fails for Company-Form...");

		}
	} */
</script>
