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
                                    <div class="sparkline m-l m-r-lg pull-right" data-type="bar" data-height="35" data-bar-width="6" data-bar-spacing="2" data-bar-color="#fb6b5b">5,8,9,12,8,10,8,9,7,8,6</div>
                                    <div class="m-t-md">
                                       <span class="text-uc">New users</span> 
                                       <div class="h4 m-n"><strong>1,120,100</strong></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <section class="panel panel-default">
                           <header class="panel-heading font-bold">Financial Data</header>
                           <div class="panel-body">
                           		<div class="col-xs-4 b-r b-light">
                                    <div id="flot-1ine1" style="height:250px"></div>
                                 </div>
                                 <div class="col-xs-4 b-r b-light">
                                    <div id="flot-1ine2" style="height:250px"></div>
                                 </div>
                                 <div class="col-xs-4 b-r b-light">
                                    <div id="flot-1ine3" style="height:250px"></div>
                                 </div>
                           </div>
                           <footer class="panel-footer bg-white">
                              <div class="row text-center no-gutter">
                                 <div class="col-xs-4 b-r b-light">
                                    <p id="fsales" class="h3 font-bold m-t">${manBean.getValue('NET_SALES')}</p>
                                    <p class="text-muted">Net Sales</p>
                                 </div>
                                 <div class="col-xs-4 b-r b-light">
                                    <p id="fprofits" class="h3 font-bold m-t">${manBean.getValue('NET_PROFIT')}</p>
                                    <p class="text-muted">Net Profits</p>
                                 </div>
                                 <div class="col-xs-4 b-r b-light">
                                    <p id="fpbt" class="h3 font-bold m-t">${manBean.getValue('PBT')}</p>
                                    <p class="text-muted">Profit Before Tax</p>
                                 </div>
                              </div>
                           </footer>
                        </section>
                        <div class="row">
                           <div class="col-md-4">
                              <section class="panel panel-default">
                                 <header class="panel-heading font-bold">Business Outlook</header>
                                 <div class="panel-body">
                                    <div id="flot-pie-buss-out" style="height:240px"></div>
                                 </div>
                              </section>
                           </div>
                           <div class="col-md-4">
                              <section class="panel panel-default">
                                 <header class="panel-heading font-bold">Entry Exit Barriers</header>
                                 <div class="panel-body">
                                    <div id="flot-pie-ee-barr" style="height:240px"></div>
                                 </div>
                              </section>
                           </div>
                           <div class="col-md-4">
                              <section class="panel panel-default">
                                 <header class="panel-heading font-bold">Size of Business</header>
                                 <div class="panel-body">
                                    <div id="flot-pie-sbuss" style="height:240px"></div>
                                 </div>
                              </section>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-md-4">
                              <section class="panel panel-default">
                                 <header class="panel-heading font-bold">Market Competition</header>
                                 <div class="panel-body">
                                    <div id="flot-pie-mark-comp" style="height:240px"></div>
                                 </div>
                              </section>
                           </div>
                           <div class="col-md-4">
                              <section class="panel panel-default">
                                 <header class="panel-heading font-bold">Years in Existence</header>
                                 <div class="panel-body">
                                    <div id="flot-pie-yexist" style="height:240px"></div>
                                 </div>
                              </section>
                           </div>
                           <div class="col-md-4">
                              <section class="panel panel-default">
                                 <header class="panel-heading font-bold">Legal Status</header>
                                 <div class="panel-body">
                                    <div id="flot-pie-leg-status" style="height:240px"></div>
                                 </div>
                              </section>
                           </div>
                        </div>
                        
                        <div class="row">
                           <div class="col-md-4">
                              <section class="panel panel-default">
                                 <header class="panel-heading font-bold">Supplier Base</header>
                                 <div class="panel-body">
                                    <div id="flot-pie-supp-base" style="height:240px"></div>
                                 </div>
                              </section>
                           </div>
                           <div class="col-md-4">
                              <section class="panel panel-default">
                                 <header class="panel-heading font-bold">Nature of Industry</header>
                                 <div class="panel-body">
                                    <div id="flot-pie-nat-ind" style="height:240px"></div>
                                 </div>
                              </section>
                           </div>
                           <div class="col-md-4">
                              <section class="panel panel-default">
                                 <header class="panel-heading font-bold">Marketing Network</header>
                                 <div class="panel-body">
                                    <div id="flot-pie-mark-netw" style="height:240px"></div>
                                 </div>
                              </section>
                           </div>
                        </div>
                        
                     </section>
                  </section>
                  <a href="#" class="hide nav-off-screen-block" data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a> 
               </section>
               
               <script type="text/javascript">
               var index1 = 1;
               var sales = [], profits = [], pbt = [];
               var natind = [], suppbase = [], legstatus = [], yexist = [];
               var markcomp = [], sbuss = [], eebarr = [], bussout = [], marknetw = [];
               <c:forEach items="${manBean.getLongValue('NET_SALES')}" var="net1" varStatus="mb1">
               sales.push([index1++, ${net1}]);
               </c:forEach>
               var index2 = 1;
               <c:forEach items="${manBean.getLongValue('NET_PROFIT')}" var="net2" varStatus="mb2">
               profits.push([index2++, ${net2}]);
               </c:forEach>
               var index3 = 1;
               <c:forEach items="${manBean.getLongValue('PBT')}" var="net3" varStatus="mb3">
               pbt.push([index3++, ${net3}]);
               </c:forEach>
               
               <c:forEach items="${manBean.getKeyValue('BUSS_OUT')}" var="nf1" >
               bussout.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${manBean.getKeyValue('EE_BARR')}" var="nf1" >
               eebarr.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${manBean.getKeyValue('SBUSS')}" var="nf1" >
               sbuss.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${manBean.getKeyValue('MARK_COMP')}" var="nf1" >
               markcomp.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${manBean.getKeyValue('YEXIST')}" var="nf1" >
               yexist.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${manBean.getKeyValue('LEG_STATUS')}" var="nf1" >
               legstatus.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${manBean.getKeyValue('SUPP_BASE')}" var="nf1" >
               suppbase.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${manBean.getKeyValue('NAT_INDUSTRY')}" var="nf1" >
               natind.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
               <c:forEach items="${manBean.getKeyValue('MARK_NETW')}" var="nf1" >
               marknetw.push({label: '${nf1.key}', data: ${nf1.value}});
               </c:forEach>
				</script>