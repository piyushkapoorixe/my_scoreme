// Task Controller File
module.exports = function(grunt) {
    grunt.initConfig({
        // pkg: grunt.file.readJSON('package.json'),
        // pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    // includes files within path 
                    // { expand: true, src: ['WebContent/**'], dest: 'buildNew/' },
                    { expand: true, cwd: 'webapp/', src: ['**'], dest: 'scoremeBuild/' },
                ],
            },
        },

        // ****************cssmin Configuration******************

        cssmin: {
            target: {
                files: [{
                        expand: true,
                        cwd: 'webapp/assets/css/',
                        src: ['*.css', '!*.min.css'],
                        dest: 'scoremeBuild/assets/css/',
                        // ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: 'webapp/assets/framework/bootstrap/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'scoremeBuild/assets/framework/bootstrap/css',
                        // ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: 'webapp/assets/plugins/footable/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'scoremeBuild/assets/plugins/footable/css',
                        // ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: 'webapp/assets/plugins/LineProgressbar/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'scoremeBuild/assets/plugins/LineProgressbar/css',
                        // ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: 'webapp/assets/plugins/rangeslider',
                        src: ['*.css', '!*.min.css'],
                        dest: 'scoremeBuild/assets/plugins/rangeslider',
                        // ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: 'webapp/assets/plugins/slickSlider/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'scoremeBuild/assets/plugins/slickSlider/css',
                        // ext: '.css'
                    },

                    {
                        expand: true,
                        cwd: 'webapp/css/',
                        src: ['*.css', '!*.min.css'],
                        dest: 'scoremeBuild/css/',
                        // ext: '.css'
                    },

                    {
                        expand: true,
                        cwd: 'webapp/css_web/',
                        src: ['*.css', '!*.min.css'],
                        dest: 'scoremeBuild/css_web/',
                        // ext: '.css'
                    },

                    {
                        expand: true,
                        cwd: 'webapp/lib/Hover-effects/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'scoremeBuild/lib/Hover-effects/css',
                        // ext: '.css'
                    },


                ]
            }
        },


        // ******************** jsmin Configuration****************
        uglify: {
            my_target: {
                files: [{
                        expand: true,
                        cwd: 'webapp/assets/js/',
                        src: '**/*.js',
                        dest: 'scoremeBuild/assets/js/'
                    },

                    {
                        expand: true,
                        cwd: 'webapp/angularcustomjs/ang_controller/',
                        src: '**/*.js',
                        dest: 'scoremeBuild/angularcustomjs/ang_controller/'
                    },

                    {
                        expand: true,
                        cwd: 'webapp/angularcustomjs/',
                        src: '**/*.js',
                        dest: 'scoremeBuild/angularcustomjs/'
                    },
                ]
            }
        },



        // ********************* htmlmin Configuration ****************** 
        htmlmin: { // Task 
            dev: { // Target 
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                        expand: true,
                        cwd: 'webapp/score-htmls',
                        src: ['*.html', '*.html'],
                        dest: 'scoremeBuild/score-htmls'
                    },
                    {
                        expand: true,
                        cwd: 'webapp/score-htmls/bankstatement',
                        src: ['*.html', '*.html'],
                        dest: 'scoremeBuild/score-htmls/bankstatement'
                    },
                    {
                        expand: true,
                        cwd: 'webapp/score-htmls/error-pages',
                        src: ['*.html', '*.html'],
                        dest: 'scoremeBuild/score-htmls/error-pages'
                    },
                    {
                        expand: true,
                        cwd: 'webapp/score-htmls/extra',
                        src: ['*.html', '*.html'],
                        dest: 'scoremeBuild/score-htmls/extra'
                    },
                    {
                        expand: true,
                        cwd: 'webapp/score-htmls/pagination',
                        src: ['*.html', '*.html'],
                        dest: 'scoremeBuild/score-htmls/pagination'
                    },
                    {
                        expand: true,
                        cwd: 'webapp/score-htmls/score',
                        src: ['*.html', '*.html'],
                        dest: 'scoremeBuild/score-htmls/score'
                    },
                ]
            }
        },



        // ***************************** cache breaker ****************************

        cachebreaker: {
            dev: {
                options: {
                    match: [{

                        //css starts

                        // Pattern          // File to hash
                        'account.css': 'scoremeBuild/assets/css/account.css',
                        'animate.css': 'scoremeBuild/assets/css/animate.css',
                        'a-scoreme.css': 'scoremeBuild/assets/css/a-scoreme.css',
                        'bootstrap.css': 'scoremeBuild/assets/css/account.css',
                        'bootstrap.min.css': 'scoremeBuild/assets/css/account.css',
                        'bs_leftnavi.css': 'scoremeBuild/assets/css/account.css',
                        'components.css': 'scoremeBuild/assets/css/account.css',
                        'core.css': 'scoremeBuild/assets/css/account.css',
                        'custom.css': 'scoremeBuild/assets/css/account.css',
                        'helper.css': 'scoremeBuild/assets/css/account.css',
                        'jquery-ui.css': 'scoremeBuild/assets/css/account.css',
                        'normalize.css': 'scoremeBuild/assets/css/account.css',
                        'nucleo-icons.css': 'scoremeBuild/assets/css/account.css',
                        'responsive_1.css': 'scoremeBuild/assets/css/account.css',
                        'select2.css': 'scoremeBuild/assets/css/account.css',
                        'select2.min.css': 'scoremeBuild/assets/css/account.css',
                        'sidebar.css': 'scoremeBuild/assets/css/account.css',
                        'style.css': 'scoremeBuild/assets/css/account.css',


                        'bootstrap.min.css': 'scoremeBuild/assets/framework/bootstrap/css/bootstrap.min.css',
                        'bootstrap.css.map': 'scoremeBuild/assets/framework/bootstrap/css/bootstrap.css.map',
                        'bootstrap.css': 'scoremeBuild/assets/framework/bootstrap/css/bootstrap.css',
                        'bootstrap.min.css.map': 'scoremeBuild/assets/framework/bootstrap/css/bootstrap.min.css.map',
                        'bootstrap-theme.css': 'scoremeBuild/assets/framework/bootstrap/css/bootstrap-theme.css',
                        'bootstrap-theme.css.map': 'scoremeBuild/assets/framework/bootstrap/css/bootstrap-theme.css.map',
                        'bootstrap-theme.min.css': 'scoremeBuild/assets/framework/bootstrap/css/bootstrap-theme.min.css',
                        'bootstrap-theme.min.css.map': 'scoremeBuild/assets/framework/bootstrap/css/bootstrap-theme.min.css.map',

                        'jquery.lineProgressbar.css': 'scoremeBuild/assets/plugins/LineProgressbar/jquery.lineProgressbar.css',
                        'jquery.lineProgressbar.min.css': 'scoremeBuild/assets/plugins/LineProgressbar/jquery.lineProgressbar.min.css',
                        'rangeslider.css': 'scoremeBuild/assets/plugins/rangeslider/rangeslider.css',


                        'footable.core.css': 'scoremeBuild/assets/plugins/footable/css/footable.core.css',
                        'footable.paging.css': 'scoremeBuild/assets/plugins/footable/css/footable.paging.css',

                        'rangeslider.css': 'scoremeBuild/assets/plugins/rangeslider/rangeslider.css',

                        'slick.css': 'scoremeBuild/assets/plugins/slickSlider/css/slick.css',
                        'slick-theme.css': 'scoremeBuild/assets/plugins/slickSlider/css/slick-theme.css',


                        'account.css': 'scoremeBuild/css/account.css',
                        'app.v1.css': 'scoremeBuild/css/app.v1.css',
                        'bootstrap.min.css': 'scoremeBuild/css/bootstrap.min.css',
                        'custom.css': 'scoremeBuild/css/custom.css',
                        'datatable.min.css': 'scoremeBuild/css/datatable.min.css',
                        'footable.bootstrap.css': 'scoremeBuild/css/footable.bootstrap.css',
                        'footable.bootstrap.min.css': 'scoremeBuild/css/footable.bootstrap.min.css',
                        'gradiant.css': 'scoremeBuild/css/gradiant.css',
                        'landing.css': 'scoremeBuild/css/landing.css',
                        'reset.css': 'scoremeBuild/css/reset.css',
                        'responsive.css': 'scoremeBuild/css/responsive.css',
                        'slider.css': 'scoremeBuild/css/slider.css',
                        'style.css': 'scoremeBuild/css/style.css',

                        'custom.css': 'scoremeBuild/css_web/custom.css',
                        'gradiant.css': 'scoremeBuild/css_web/gradient.css',
                        'responsive.css': 'scoremeBuild/css_web/responsive.css',
                        'style.css': 'scoremeBuild/css_web/style.css',

                        // 'bootstrap.min.css': 'scoremeBuild/gst/assets/css/bootstrap.min.css',
                        // 'font-awesome.min.css': 'scoremeBuild/gst/assets/css/font-awesome.min.css',
                        // 'hover.css': 'scoremeBuild/gst/assets/css/hover.css',
                        // 'hover-min.css': 'scoremeBuild/gst/assets/css/hover-min.css',
                        // 'material.min.css': 'scoremeBuild/gst/assets/css/material.min.css',
                        // 'responsive.css': 'scoremeBuild/gst/assets/css/responsive.css',

                        // 'style.css': 'scoremeBuild/gst/style.css',

                        'demo-page.css': 'scoremeBuild/lib/Hover-effects/css/demo-page.css',
                        'hover.css': 'scoremeBuild/lib/Hover-effects/css/hover.css',
                        'hover-min.css': 'scoremeBuild/lib/Hover-effects/css/hover-min.css',

                        'bootstrap.min.css': 'scoremeBuild/plugins_web/bootstrap/css/bootstrap.min.css',

                        'flaticon.css': 'scoremeBuild/plugins_web/flaticon/flaticon.css',

                        'font-awesome.min.css': 'scoremeBuild/plugins_web/font-awesome/css/font-awesome.min.css',

                        'demo-page.css': 'scoremeBuild/plugins_web/Hover-effects/css/demo-page.css',
                        'hover.css': 'scoremeBuild/plugins_web/Hover-effects/css/hover.css',
                        'hover.css.map': 'scoremeBuild/plugins_web/Hover-effects/css/hover.css.map',
                        'hover-min.css': 'scoremeBuild/plugins_web/Hover-effects/css/hover-min.css',

                        'jquery-ui.css': 'scoremeBuild/plugins_web/jquery-ui-1.11.4/jquery-ui.css',

                        'owl.carousel.css': 'scoremeBuild/plugins_web/owl.carousel-2/assets/owl.carousel.css',
                        'owl.theme.default.min.css': 'scoremeBuild/plugins_web/owl.carousel-2/assets/owl.theme.default.min.css',

                        'layers.css': 'scoremeBuild/plugins_web/revolution/css/layers.css',
                        'navigation.css': 'scoremeBuild/plugins_web/revolution/css/navigation.css',
                        'settings.css': 'scoremeBuild/plugins_web/revolution/css/settings.css',

                        'style.css': 'scoremeBuild/plugins_web/Stroke-Gap-Icons-Webfont/style.css',

                        'animate.min.css': 'scoremeBuild/plugins_web/animate.min.css',

                        'hover.css': 'scoremeBuild/plugins_web/hover.css',

                        'style.scss': 'scoremeBuild/scss/style.scss',

                        'xeditable.css': 'scoremeBuild/angular-1.6.4/additional_files/angular-xeditable/css/xeditable.css',
                        'xeditable.min.css': 'scoremeBuild/angular-1.6.4/additional_files/angular-xeditable/css/xeditable.min.css',



                        //js starts

                        'angular-datatable.min.js': 'scoremeBuild/angular-1.6.4/additional_files/angular-datatable/angular-datatable.min.js',
                        'angular-datatable.min.js': 'scoremeBuild/angular-1.6.4/additional_files/angular-datatable/jquery.dataTables.min.js',

                        'xeditable.js': 'scoremeBuild/angular-1.6.4/additional_files/angular-xeditable/js/xeditable.js',
                        'xeditable.min.js': 'scoremeBuild/angular-1.6.4/additional_files/angular-xeditable/js/xeditable.min.js',

                        'scoreme_app.js': 'scoremeBuild/angularcustomjs/ang_app/scoreme_app.js',

                        'accountcontroller.js': 'scoremeBuild/angularcustomjs/ang_controller/accountcontroller.js',
                        'addEntity_controller.js': 'scoremeBuild/angularcustomjs/ang_controller/addEntity_controller.js',
                        'admincontroller.js': 'scoremeBuild/angularcustomjs/ang_controller/admincontroller.js',
                        'archivecontroller.js': 'scoremeBuild/angularcustomjs/ang_controller/archivecontroller.js',
                        'bankcontroller.js': 'scoremeBuild/angularcustomjs/ang_controller/bankcontroller.js',
                        'bankdashboardcontroller.js': 'scoremeBuild/angularcustomjs/ang_controller/bankdashboardcontroller.js',
                        'companycontroller.js': 'scoremeBuild/angularcustomjs/ang_controller/companycontroller.js',
                        'layoutcontroller.js': 'scoremeBuild/angularcustomjs/ang_controller/layoutcontroller.js',
                        'logincontroller.js': 'scoremeBuild/angularcustomjs/ang_controller/logincontroller.js',
                        'notificationcontroller.js': 'scoremeBuild/angularcustomjs/ang_controller/notificationcontroller.js',
                        'ratingcontroller.js': 'scoremeBuild/angularcustomjs/ang_controller/ratingcontroller.js',
                        'userdashboardcontroller.js': 'scoremeBuild/angularcustomjs/ang_controller/userdashboardcontroller.js',
                        'userdashboardtablecontroller.js': 'scoremeBuild/angularcustomjs/ang_controller/userdashboardtablecontroller.js',

                        'directive.js': 'scoremeBuild/angularcustomjs/ang_directive/directive.js',

                        'angular-custom-filter.js': 'scoremeBuild/angularcustomjs/ang_filter/angular-custom-filter.js',

                        'layout.js': 'scoremeBuild/angularcustomjs/ang_router_templating/layout.js',

                        'commonservices.js': 'scoremeBuild/angularcustomjs/ang_services/commonservices.js',
                        'interceptFactory.js': 'scoremeBuild/angularcustomjs/ang_services/interceptFactory.js',
                        'simplefunctioncallservices.js': 'scoremeBuild/angularcustomjs/ang_services/simplefunctioncallservices.js',

                        'ajaxservice.js': 'scoremeBuild/angularcustomjs/ajaxservice.js',

                        'highcharts.js': 'scoremeBuild/angularinbuiltjs/highcharts.js',
                        'highcharts.js': 'scoremeBuild/angularinbuiltjs/highcharts.js',
                        'highcharts-ng.js': 'scoremeBuild/angularinbuiltjs/highcharts-ng.js',
                        'ui-bootstrap-tpls-2.5.0.min.js': 'scoremeBuild/angularinbuiltjs/ui-bootstrap-tpls-2.5.0.min.js',

                        'bootstrap.js': 'scoremeBuild/assets/framework/bootstrap/js/bootstrap.js',
                        'bootstrap.min.js': 'scoremeBuild/assets/framework/bootstrap/js/bootstrap.min.js',
                        'npm.js': 'scoremeBuild/assets/framework/bootstrap/js/npm.js',

                        'jQuery.jPulse.js': 'scoremeBuild/assets/js/pulse/jQuery.jPulse.js',
                        'jQuery.jPulse.min.js': 'scoremeBuild/assets/js/pulse/jQuery.jPulse.min.js',
                        'jQuery.jPulse.min.js.map': 'scoremeBuild/assets/js/pulse/jQuery.jPulse.min.js.map',

                        'bootstrap.js': 'scoremeBuild/assets/js/bootstrap.js',
                        'bootstrap.min.js': 'scoremeBuild/assets/js/bootstrap.min.js',
                        'bs_leftnavi.js': 'scoremeBuild/assets/js/bs_leftnavi.js',
                        'circle-progress.js': 'scoremeBuild/assets/js/circle-progress.js',
                        'circle-progress-setting.js': 'scoremeBuild/assets/js/circle-progress-setting.js',
                        'custom.js': 'scoremeBuild/assets/js/custom.js',
                        'html2canvas.js': 'scoremeBuild/assets/js/html2canvas.js',
                        'html2canvas.svg.js': 'scoremeBuild/assets/js/html2canvas.svg.js',
                        'jquery.form.js': 'scoremeBuild/assets/js/jquery.form.js',
                        'jquery.min.js': 'scoremeBuild/assets/js/jquery.min.js',
                        'jquery.validate.js': 'scoremeBuild/assets/js/jquery.validate.js',
                        'jquery-3.2.1.min.js': 'scoremeBuild/assets/js/jquery-3.2.1.min.js',
                        'jquery-migrate-1.2.1.min.js': 'scoremeBuild/assets/js/jquery-migrate-1.2.1.min.js',
                        'jsPdf.js': 'scoremeBuild/assets/js/jsPdf.js',
                        'printThis.js': 'scoremeBuild/assets/js/printThis.js',
                        'select2.js': 'scoremeBuild/assets/js/select2.js',
                        'select2.min.js': 'scoremeBuild/assets/js/select2.min.js',

                        'jquery.footable.js': 'scoremeBuild/assets/pages/jquery.footable.js',

                        'footable.all.min.js': 'scoremeBuild/assets/plugins/footable/js/footable.all.min.js',
                        'footable.paging.js': 'scoremeBuild/assets/plugins/footable/js/footable.paging.js',

                        'jquery.lineProgressbar.js': 'scoremeBuild/assets/plugins/LineProgressbar/jquery.lineProgressbar.js',
                        'rangeslider.js': 'scoremeBuild/assets/plugins/rangeslider/rangeslider.js',
                        'slick.js': 'scoremeBuild/assets/plugins/slickSlider/js/slick.js',
                        'slick.min.js': 'scoremeBuild/assets/plugins/slickSlider/js/slick.min.js',
                    }],
                    replacement: 'md5'
                },
                files: {
                    src: [
                        'scoremeBuild/index.html',
                        'scoremeBuild/score-htmls/bankstatement/bank-archive-report.html',
                        'scoremeBuild/score-htmls/bankstatement/bank-statement.html',
                        'scoremeBuild/score-htmls/bankstatement/bank-statement-dashboard.html',
                        'scoremeBuild/score-htmls/bankstatement/bank-statement-process.html',

                        'scoremeBuild/score-htmls/error-pages/internal-server-error.html',
                        'scoremeBuild/score-htmls/error-pages/no-internet-connection.html',
                        'scoremeBuild/score-htmls/error-pages/pagenot-found.html',
                        'scoremeBuild/score-htmls/error-pages/unauthorized-error.html',

                        'scoremeBuild/score-htmls/extra/account.html',
                        'scoremeBuild/score-htmls/extra/add-entity.html',
                        'scoremeBuild/score-htmls/extra/billing-address.html',
                        'scoremeBuild/score-htmls/extra/change-password.html',
                        'scoremeBuild/score-htmls/extra/confirm-plan.html',
                        'scoremeBuild/score-htmls/extra/dashboard.html',
                        'scoremeBuild/score-htmls/extra/introductory.html',
                        'scoremeBuild/score-htmls/extra/manage-entity.html',
                        'scoremeBuild/score-htmls/extra/payment-success.html',
                        'scoremeBuild/score-htmls/extra/pricing-plan.html',
                        'scoremeBuild/score-htmls/extra/reset-password.html',
                        'scoremeBuild/score-htmls/extra/user-dashboard-bank-table.html',
                        'scoremeBuild/score-htmls/extra/user-dashboard-score-table.html',
                        'scoremeBuild/score-htmls/extra/verify-no.html',

                        'scoremeBuild/score-htmls/pagination/pagination.custom.html',

                        'scoremeBuild/score-htmls/score/draft-confirmation.html',
                        'scoremeBuild/score-htmls/score/rating-page.html',
                        'scoremeBuild/score-htmls/score/recalculate-score.html',
                        'scoremeBuild/score-htmls/score/score-analysis.html',
                        'scoremeBuild/score-htmls/score/score-confirmation.html',
                        'scoremeBuild/score-htmls/score/score-dashboard.html',
                        'scoremeBuild/score-htmls/score/score-report-history.html',
                        'scoremeBuild/score-htmls/score/score-result.html',

                        'scoremeBuild/score-htmls/admin-panel.html',
                        'scoremeBuild/score-htmls/confirmation.html',
                        'scoremeBuild/score-htmls/notification.html',
                        'scoremeBuild/score-htmls/pricing-plan.html',
                        'scoremeBuild/score-htmls/signin.html',
                        'scoremeBuild/score-htmls/signup.html',
                        'scoremeBuild/score-htmls/user-dashboard.html',

                    ]
                }
            }
        },

    });
    // Task Loader
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    //grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks('grunt-cache-breaker');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    // grunt.loadNpmTasks('grunt-contrib-clean');


    // combined Task - LAUNCHER
    //grunt.registerTask('default', ['copy', 'cssmin', 'uglify' , 'cachebreaker']);
    grunt.registerTask('default', ['copy', 'cssmin', 'uglify', 'htmlmin', 'cachebreaker']);
};