// CUSTOM SELECT DROP DOWN STYLE
// Iterate over each select element
$(document).ready(function() {
    $('#selectbox1').each(function() {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option').eq(0).text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.styledSelect.active').each(function() {
                $(this).removeClass('active').next('ul.options').hide();
            });
            $(this).toggleClass('active').next('ul.options').toggle();
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            /* alert($this.val()); Uncomment this for demonstration! */
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });


    $(window).load(function() {
        $('#recalculateScore').circleProgress({
            value: 0.60,
            size: 110,
            fill: {
                gradient: ["#0057ff", "#00ceed"]
            }
        });

        $(function() {

            var $element = $('input[type=range]');
            var $output = $('output');

            // Initialize rangeslider.js
            $element.rangeslider({
                polyfill: false
            });

            // Current value output
            $output[0].innerHTML = $element[0].value;
            $element.on('input', function() {
                $output[0].innerHTML = this.value;
            });

            // create an observer instance
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes') {
                        $element.rangeslider('update', true);
                        $output[0].innerHTML = $element[0].value;
                    }
                });
            });

            observer.observe($element[0], {
                attributes: true
            });

            $('input[type=text]').on('input', function() {
                $element[0].setAttribute(this.name, this.value);
            });

        });
    });


    // ______________________________ INCREMENTER AND DECREMENTER SCRIPT_________________________________//
    function incrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
        // $('.quant1').animateCss('flip', function() {
        if (!isNaN(currentVal)) {
            parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
            // $('.quantity-field').addClass('animated flipOutX');
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
        // });

    }

    function decrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

        if (!isNaN(currentVal) && currentVal > 0) {
            parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }

    $('.input-group').on('click', '.button-plus', function(e) {
        incrementValue(e);
    });

    $('.input-group').on('click', '.button-minus', function(e) {
        decrementValue(e);
    });


    $.fn.extend({
        animateCss: function(animationName, callback) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                if (callback) {
                    callback();
                }
            });
            return this;
        }
    });


    // windows scroll
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });
    /* Add jPulse to Twitter bird logo with optional settings */
    $(".entity").jPulse({
        color: "#fff",
        size: 50,
        speed: 1000,
        interval: 2000,
        top: 0,
        zIndex: 0
    });


    //score analysis progressbar initialization
    $('#progressbar1').LineProgressbar({
        percentage: 65
    });

    // RANGE SLIDER SETTING_____________________________________

    $(function() {

        var $element = $('input[type=range]');
        var $output = $('output');

        // Initialize rangeslider.js
        /*   $element.rangeslider({
               polyfill: false
           });*/

        // Current value output
        //    $output[0].innerHTML = $element[0].value;
        //    $element.on('input', function() {
        //        $output[0].innerHTML = this.value;
        //    });

        // create an observer instance
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes') {
                    $element.rangeslider('update', true);
                    $output[0].innerHTML = $element[0].value;
                }
            });
        });

        /*    observer.observe($element[0], {
                attributes: true
            });*/

        $('input[type=text]').on('input', function() {
            $element[0].setAttribute(this.name, this.value);
        });

    });
});