!function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=n(require("jquery")):n(jQuery)}(function(n){function e(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}void 0!==n.easing&&(n.easing.jswing=n.easing.swing);var t=Math.pow,u=Math.sqrt,r=Math.sin,i=Math.cos,a=Math.PI,o=1.70158,c=1.525*o,s=2*a/3,f=2*a/4.5;return n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-t(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-t(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-t(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-t(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-t(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-t(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-t(-2*n+2,5)/2},easeInSine:function(n){return 1-i(n*a/2)},easeOutSine:function(n){return r(n*a/2)},easeInOutSine:function(n){return-(i(a*n)-1)/2},easeInExpo:function(n){return 0===n?0:t(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-t(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?t(2,20*n-10)/2:(2-t(2,-20*n+10))/2},easeInCirc:function(n){return 1-u(1-t(n,2))},easeOutCirc:function(n){return u(1-t(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-u(1-t(2*n,2)))/2:(u(1-t(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-t(2,10*n-10)*r((10*n-10.75)*s)},easeOutElastic:function(n){return 0===n?0:1===n?1:t(2,-10*n)*r((10*n-.75)*s)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-t(2,20*n-10)*r((20*n-11.125)*f)/2:t(2,-20*n+10)*r((20*n-11.125)*f)/2+1},easeInBack:function(n){return 2.70158*n*n*n-o*n*n},easeOutBack:function(n){return 1+2.70158*t(n-1,3)+o*t(n-1,2)},easeInOutBack:function(n){return n<.5?t(2*n,2)*(7.189819*n-c)/2:(t(2*n-2,2)*((c+1)*(2*n-2)+c)+2)/2},easeInBounce:function(n){return 1-e(1-n)},easeOutBounce:e,easeInOutBounce:function(n){return n<.5?(1-e(1-2*n))/2:(1+e(2*n-1))/2}}),n});

$(document).ready(function() {

    $('.menu-search-link').click(function(e) {
        if ($('html').hasClass('menu-open')) {
            $('html').removeClass('menu-open');
            $('meta[name="viewport"]').attr('content', 'width=device-width');
            $(window).scrollTop($('html').data('scrollTop'));
        }
        var curWidth = $(window).width();
        if (curWidth < 375) {
            curWidth = 375;
        }
        var curScroll = $(window).scrollTop();
        $('html').addClass('search-open');
        $('meta[name="viewport"]').attr('content', 'width=' + curWidth);
        $('html').data('scrollTop', curScroll);
        $('.search-window-form-input input').focus();
        e.preventDefault();
    });

    $('.search-window-close').click(function(e) {
        $('html').removeClass('search-open');
        $('meta[name="viewport"]').attr('content', 'width=device-width');
        $(window).scrollTop($('html').data('scrollTop'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            if ($('html').hasClass('search-open')) {
                $('html').removeClass('search-open');
                $('meta[name="viewport"]').attr('content', 'width=device-width');
                $(window).scrollTop($('html').data('scrollTop'));
            }
            if ($('html').hasClass('menu-open')) {
                $('html').removeClass('menu-open');
                $('meta[name="viewport"]').attr('content', 'width=device-width');
                $(window).scrollTop($('html').data('scrollTop'));
            }
            if ($('html').hasClass('collections-filter-open')) {
                $('html').removeClass('collections-filter-open');
                $('meta[name="viewport"]').attr('content', 'width=device-width');
                $(window).scrollTop($('html').data('scrollTop'));
            }
            $('.collection-blister-window').fadeOut(300, function() {
                $('.collection-blister-window').remove();
            });
            $('.cases-item-window').fadeOut(300, function() {
                $('.cases-item-window').remove();
            });
        }
    });

    $('.header-nav-link').click(function(e) {
        if ($('html').hasClass('search-open')) {
            $('html').removeClass('search-open');
            $('meta[name="viewport"]').attr('content', 'width=device-width');
            $(window).scrollTop($('html').data('scrollTop'));
        }
        var curWidth = $(window).width();
        if (curWidth < 375) {
            curWidth = 375;
        }
        var curScroll = $(window).scrollTop();
        $('html').addClass('menu-open');
        $('meta[name="viewport"]').attr('content', 'width=' + curWidth);
        $('html').data('scrollTop', curScroll);
        e.preventDefault();
    });

    $('.menu-close, .menu-bg').click(function(e) {
        $('html').removeClass('menu-open');
        $('meta[name="viewport"]').attr('content', 'width=device-width');
        $(window).scrollTop($('html').data('scrollTop'));
        e.preventDefault();
    });

    $('body').on('click', '.collections-window-list li a', function(e) {
        $('.collections-window-close').trigger('click');
        var curIndex = $('.collections-window-list li a').index($(this));
        var curCollection = collectionsData[curIndex];
        $('.collection-title').html(curCollection.title);
        var collectionHTML = '';
        for (var i = 0; i < curCollection.list.length; i++) {
            collectionHTML += '<div class="collection-blister"><div data-big="' + curCollection.list[i][1] + '"><img src="' + curCollection.list[i][0] + '" alt=""></div></div>';
        }
        $('.collection-blisters').html(collectionHTML);
        e.preventDefault();
    });

    $('.collections-filter-random').click(function(e) {
        $('.collections-window-list li').eq(Math.floor(Math.random() * $('.collections-window-list li').length)).find('a').trigger('click');
        e.preventDefault();
    });

    $('.collections-window').each(function() {
        if (typeof(collectionsData) != 'undefined') {
            var filterHTML =    '<ul>';
            for (var i = 0; i < collectionsData.length; i++) {
                var curCollection = collectionsData[i];
                var newHTML = '';
                if (typeof(curCollection.new) != 'undefined' && curCollection.new) {
                    newHTML = '<span>new</span>';
                }
                filterHTML +=       '<li><a href="#"><img src="' + curCollection.icon + '" alt="">' + curCollection.title + newHTML + '</a></li>';
            }
            filterHTML +=       '</ul>';
            $('.collections-window-list').html(filterHTML);
            $('.collections-filter-random').trigger('click');
        }
    });

    $('.collections-filter-select').click(function(e) {
        var curWidth = $(window).width();
        if (curWidth < 375) {
            curWidth = 375;
        }
        var curScroll = $(window).scrollTop();
        $('html').addClass('collections-filter-open');
        $('meta[name="viewport"]').attr('content', 'width=' + curWidth);
        $('html').data('scrollTop', curScroll);
        e.preventDefault();
    });

    $('.collections-window-close, .collections-window-bg').click(function(e) {
        $('html').removeClass('collections-filter-open');
        $('meta[name="viewport"]').attr('content', 'width=device-width');
        $(window).scrollTop($('html').data('scrollTop'));
        e.preventDefault();
    });

    $('body').on('click', '.collection-blister div', function() {
        var curItem = $(this);
        if (!curItem.hasClass('loading')) {
            curItem.addClass('loading');
            var newIMG = $('<img src="" alt="" style="position:fixed; left:-9999px; top:-9999px" />');
            newIMG.one('load', function(e) {
                $('.collection-blister-window').remove();
                $('body').append('<div class="collection-blister-window"><img src="' + curItem.attr('data-big') + '" alt=""></div>');
                window.setTimeout(function() {
                    $('.collection-blister-window').addClass('visible');
                }, 40);
                newIMG.remove();
                curItem.removeClass('loading');
            });
            newIMG.attr('src', curItem.attr('data-big'));
        }
    });

    $('body').on('click', '.collection-blister-window', function() {
        $('.collection-blister-window').fadeOut(300, function() {
            $('.collection-blister-window').remove();
        });
    });

    $('.cases-item div').click(function() {
        var curItem = $(this);
        if (!curItem.hasClass('loading')) {
            curItem.addClass('loading');
            var newIMG = $('<img src="" alt="" style="position:fixed; left:-9999px; top:-9999px" />');
            newIMG.one('load', function(e) {
                $('.cases-item-window').remove();
                $('body').append('<div class="cases-item-window"><img src="' + curItem.attr('data-big') + '" alt=""></div>');
                window.setTimeout(function() {
                    $('.cases-item-window').addClass('visible');
                }, 40);
                newIMG.remove();
                curItem.removeClass('loading');
            });
            newIMG.attr('src', curItem.attr('data-big'));
        }
    });

    $('body').on('click', '.cases-item-window', function() {
        $('.cases-item-window').fadeOut(300, function() {
            $('.cases-item-window').remove();
        });
    });

    $('form').each(function() {
        initForm($(this));
    });

    $('.gallery').each(function() {
        var curSlider = $(this);
        const swiper = new Swiper(curSlider[0], {
            loop: true,
            touchAngle: 30,
            autoHeight: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            on: {
                afterInit: function () {
                    var curSlide = curSlider.find('.swiper-slide-active');
                    var curPhotoHeight = curSlide.find('.gallery-item-photo').outerHeight();
                    curSlider.find('.swiper-pagination').css({'top': curPhotoHeight});
                    curSlider.find('.swiper-button-prev').css({'top': curPhotoHeight / 2});
                    curSlider.find('.swiper-button-next').css({'top': curPhotoHeight / 2});
                    if (!curSlider.find('.swiper-pagination').hasClass('swiper-pagination-lock')) {
                        curSlider.addClass('with-pagination');
                    }
                },
                slideChangeTransitionEnd: function () {
                    var curSlide = curSlider.find('.swiper-slide-active');
                    var curPhotoHeight = curSlide.find('.gallery-item-photo').outerHeight();
                    curSlider.find('.swiper-pagination').css({'top': curPhotoHeight});
                    curSlider.find('.swiper-button-prev').css({'top': curPhotoHeight / 2});
                    curSlider.find('.swiper-button-next').css({'top': curPhotoHeight / 2});
                }
            }
        });
    });

    $('.catalogue-main-sections').each(function() {
        if ($('.catalogue-main-sections .catalogue-item').length > 3) {
            $('.main-catalogue-more').addClass('visible');
        }
    });

    $('.main-catalogue-more a').click(function(e) {
        $('.catalogue-main-sections .catalogue-item').fadeIn();
        $('.main-catalogue-more').remove();
        $(window).trigger('resize');
        e.preventDefault();
    });

    var shuffledlist = [];
    $('.main-slots').each(function() {
        if (typeof(collectionsData) != 'undefined') {
            var imgList = [];
            for (var i = 0; i < collectionsData.length; i++) {
                var curCollection = collectionsData[i];
                for (var j = 0; j < curCollection.list.length; j++) {
                    imgList.push(curCollection.list[j][0]);
                }
            }

            shuffledlist = imgList.sort(function() { return Math.random() - 0.5 });
            if (shuffledlist.length > 70) {
                $('.main-slots-line').eq(0).html(   '<div class="main-slots-line-inner">' +
                                                        '<div class="main-slots-line-content">' +
                                                            '<img src="' + shuffledlist[0] + '" alt="">' +
                                                            '<img src="' + shuffledlist[1] + '" alt="">' +
                                                            '<img src="' + shuffledlist[2] + '" alt="">' +
                                                        '</div>' +
                                                    '</div>');
                $('.main-slots-line').eq(1).html(   '<div class="main-slots-line-inner">' +
                                                        '<div class="main-slots-line-content">' +
                                                            '<img src="' + shuffledlist[3] + '" alt="">' +
                                                            '<img src="' + shuffledlist[4] + '" alt="">' +
                                                            '<img src="' + shuffledlist[5] + '" alt="">' +
                                                        '</div>' +
                                                    '</div>');
                $('.main-slots-line').eq(2).html(   '<div class="main-slots-line-inner">' +
                                                        '<div class="main-slots-line-content">' +
                                                            '<img src="' + shuffledlist[6] + '" alt="">' +
                                                            '<img src="' + shuffledlist[7] + '" alt="">' +
                                                            '<img src="' + shuffledlist[8] + '" alt="">' +
                                                        '</div>' +
                                                    '</div>');
            }
        }
    });

    $('.main-slots-ctrl-start').click(function(e) {
        if (!$('.main-slots-ctrl-start').hasClass('loading')) {
            $('.main-slots-ctrl-start').addClass('loading');
            if (shuffledlist.length > 70) {
                shuffledlist = shuffledlist.sort(function() { return Math.random() - 0.5 });

                for (var i = 9; i < 19; i++) {
                    $('.main-slots-line').eq(0).find('.main-slots-line-content').append('<img src="' + shuffledlist[i] + '" alt="">');
                }
                for (var i = 19; i < 39; i++) {
                    $('.main-slots-line').eq(1).find('.main-slots-line-content').append('<img src="' + shuffledlist[i] + '" alt="">');
                }
                for (var i = 39; i < 69; i++) {
                    $('.main-slots-line').eq(2).find('.main-slots-line-content').append('<img src="' + shuffledlist[i] + '" alt="">');
                }
                var curHeight = $('.main-slots-line img').eq(0).height();
                $('.main-slots-line').eq(0).each(function() {
                    var curLine = $(this);
                    var curImgs = curLine.find('img').length;
                    var curOffset = 12;
                    curLine.find('.main-slots-line-content').animate({'top': -(curImgs - 3) * (curHeight + curOffset)}, 500, 'easeInOutQuint', function() {
                        curLine.find('img:lt(' + (curImgs - 3) + ')').remove();
                        curLine.find('.main-slots-line-content').css({'top': 0});
                        curLine.find('img').eq(1).addClass('active');
                    });
                });
                $('.main-slots-line').eq(1).each(function() {
                    var curLine = $(this);
                    var curImgs = curLine.find('img').length;
                    var curOffset = 12;
                    curLine.find('.main-slots-line-content').animate({'top': -(curImgs - 3) * (curHeight + curOffset)}, 750, 'easeInOutQuint', function() {
                        curLine.find('img:lt(' + (curImgs - 3) + ')').remove();
                        curLine.find('.main-slots-line-content').css({'top': 0});
                        curLine.find('img').eq(1).addClass('active');
                    });
                });
                $('.main-slots-line').eq(2).each(function() {
                    var curLine = $(this);
                    var curImgs = curLine.find('img').length;
                    var curOffset = 12;
                    curLine.find('.main-slots-line-content').animate({'top': -(curImgs - 3) * (curHeight + curOffset)}, 1000, 'easeInOutQuint', function() {
                        curLine.find('img:lt(' + (curImgs - 3) + ')').remove();
                        curLine.find('.main-slots-line-content').css({'top': 0});
                        curLine.find('img').eq(1).addClass('active');

                        $('.main-slots-ctrl-start').removeClass('loading');
                        $('.main-slots-ctrl-start').addClass('active');
                        $('.main-slots-title span').html(slotsResults[Math.floor(Math.random() * slotsResults.length)]);
                    });
                });
            }
        }
        e.preventDefault();
    });

    $('.catalogue-item-count-size').click(function() {
        var curCount = $(this);
        var curItem = curCount.parents().filter('.catalogue-item');
        if (!curCount.hasClass('active')) {
            curItem.find('.catalogue-item-count-size').removeClass('active');
            curCount.addClass('active');
            var curIndex = curItem.find('.catalogue-item-count-size').index(curCount);
            curItem.find('.catalogue-item-preview-image.active').removeClass('active');
            curItem.find('.catalogue-item-preview-image').eq(curIndex).addClass('active');

        }
        return false;
    });

    $('.detail-count a').click(function(e) {
        var curItem = $(this);
        if (!curItem.hasClass('active')) {
            $('.detail-count a.active').removeClass('active');
            curItem.addClass('active');
            var curIndex = $('.detail-count a').index(curItem);
            $('.detail-photos-image.active').removeClass('active');
            $('.detail-photos-image').eq(curIndex).addClass('active');

        }
        e.preventDefault();
    });

    $('.cases-list').each(function() {
        if ($('.cases-item').length > 8) {
            $('.cases-more').addClass('visible');
        }
    });

    $('.cases-more a').click(function(e) {
        $('.cases-item').fadeIn();
        $('.cases-more').remove();
        e.preventDefault();
    });

    $('.buy-places-filter').each(function() {
        buyPlacesUpdate();
    });

    $('.buy-places-filter-item').click(function() {
        var curItem = $(this);
        if (!curItem.hasClass('active')) {
            $('.buy-places-filter-item.active').removeClass('active');
            curItem.addClass('active');
            buyPlacesUpdate();
        }
    });

    function buyPlacesUpdate() {
        var curType = $('.buy-places-filter-item.active').attr('data-value');
        $('.buy-places-list-inner').stop(true, true).fadeOut(function() {
            $('.buy-places-item.visible').removeClass('visible');
            if (curType == '') {
                $('.buy-places-item').addClass('visible');
                countType = $('.buy-places-item').length;
            } else {
                $('.buy-places-item').each(function() {
                    if ($(this).attr('data-type') == curType) {
                        $(this).addClass('visible');
                    }
                });
            }
            $('.buy-places-list-inner').fadeIn();
        });
    }

    $('.articles').each(function() {
        if ($('.article').length > 7) {
            $('.articles-more').addClass('visible');
        }
    });

    $('.articles-more a').click(function(e) {
        $('.article').fadeIn();
        $('.articles-more').remove();
        e.preventDefault();
    });

    $('.faq').each(function() {
        var curBlock = $(this);
        var newMenu = '<ul>';
        curBlock.find('.faq-tab').each(function() {
            newMenu += '<li><a href="#">' + $(this).attr('data-title') + '</a></li>';
        });
        newMenu += '</ul>';
        curBlock.find('.faq-menu').html(newMenu);
        curBlock.find('.faq-menu li').eq(0).addClass('active');
        curBlock.find('.faq-tab').eq(0).addClass('active');

        $(window).on('load', function() {
            var curURL = new URL(window.location.href);
            if (curURL.searchParams.get('sid') != null) {
                var curItem = $('.faq-item[data-sid="' + curURL.searchParams.get('sid') + '"]');
                if (curItem.length == 1) {
                    curItem.addClass('open');
                    curItem.find('.faq-item-text').show();
                    var curTab = curItem.parents().filter('.faq-tab');
                    if (!curTab.hasClass('active')) {
                        curBlock.find('.faq-tab.active').removeClass('active');
                        curTab.addClass('active');
                        var curIndex = curBlock.find('.faq-tab').index(curTab);
                        curBlock.find('.faq-menu li.active').removeClass('active');
                        curBlock.find('.faq-menu li').eq(curIndex).addClass('active');
                    }
                    $('html, body').animate({'scrollTop': curItem.offset().top - $('header').height()});
                }
            }
        });
    });

    $('.faq-menu li a').click(function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            var curBlock = curLi.parents().filter('.faq');
            var curIndex = curBlock.find('.faq-menu li').index(curLi);
            curBlock.find('.faq-menu li.active').removeClass('active');
            curLi.addClass('active');
            curBlock.find('.faq-tab.active').removeClass('active');
            curBlock.find('.faq-tab').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

    $('.faq-item.open').each(function() {
        $(this).find('.faq-item-text').show();
    });

    $('.faq-item').click(function() {
        var curItem = $(this);
        curItem.toggleClass('open');
        curItem.find('.faq-item-text').slideToggle();
    });

    if (typeof(faviconImages) != 'undefined') {
        var faviconCounter = 0;
        function changeIcon() {
            $("link[rel='icon'], link[rel='shortcut icon']").remove();
            $('head').append('<link rel="icon" href="' + faviconImages[faviconCounter] + '" type="image/png">');
            faviconCounter++;
            if (faviconCounter > faviconImages.length - 1) {
                faviconCounter = 0;
            }
        }
        window.setInterval(changeIcon, 700);
    }

    $('.window-age').each(function() {
        var curRemember = false;
        if (typeof $.cookie('window-age') != 'undefined' && $.cookie('window-age') == 'false') {
            window.location = $('.window-age-no').attr('href');
        }
        if (typeof $.cookie('window-age') != 'undefined' && $.cookie('window-age') == 'true') {
            curRemember = true;
        }
        if (!curRemember) {
            var curPadding = $('.wrapper').width();
            var curScroll = $(window).scrollTop();
            $('html').addClass('window-open');
            curPadding = $('.wrapper').width() - curPadding;
            $('body').css({'margin-right': curPadding + 'px'});
        }
    });

    $('body').on('click', '.window-age-yes', function(e) {
        if ($('.form-checkbox input').prop('checked')) {
            $.cookie('window-age', 'true', {expires: 365});
        }
        $('html').removeClass('window-open');
        $('body').css({'margin-right': 0});
        e.preventDefault();
    });

    $('body').on('click', '.window-age-no', function(e) {
        if ($('.form-checkbox input').prop('checked')) {
            $.cookie('window-age', 'false', {expires: 365});
        }
    });

});

function initForm(curForm) {
    curForm.find('.form-input textarea').each(function() {
        $(this).css({'height': this.scrollHeight, 'overflow-y': 'hidden'});
        $(this).on('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    });

    curForm.find('.captcha-container').each(function() {
        if ($('script#smartCaptchaScript').length == 0) {
            $('body').append('<script src="https://captcha-api.yandex.ru/captcha.js?render=onload&onload=smartCaptchaLoad" defer id="smartCaptchaScript"></script>');
        } else {
            if (window.smartCaptcha) {
                var curID = window.smartCaptcha.render(this, {
                    sitekey: smartCaptchaKey,
                    callback: smartCaptchaCallback,
                    invisible: true,
                    hideShield: true,
                    hl: 'ru'
                });
                $(this).attr('data-smartid', curID);
            }
        }
    });

    curForm.validate({
        ignore: '',
        submitHandler: function(form) {
            var curForm = $(form);

            var smartCaptchaWaiting = false;
            curForm.find('.captcha-container').each(function() {
                if (curForm.attr('form-smartcaptchawaiting') != 'true') {
                    var curBlock = $(this);
                    var curInput = curBlock.find('input[name="smart-token"]');
                    curInput.removeAttr('value');
                    smartCaptchaWaiting = true;
                    $('form[form-smartcaptchawaiting]').removeAttr('form-smartcaptchawaiting');
                    curForm.attr('form-smartcaptchawaiting', 'false');

                    if (!window.smartCaptcha) {
                        alert('Сервис временно недоступен, попробуйте позже.');
                        return;
                    }
                    var curID = $(this).attr('data-smartid');
                    window.smartCaptcha.execute(curID);
                } else {
                    curForm.removeAttr('form-smartcaptchawaiting');
                }
            });

            if (!smartCaptchaWaiting) {

                if (curForm.hasClass('ajax-form')) {
                    curForm.addClass('loading');
                    var formData = new FormData(form);

                    $.ajax({
                        type: 'POST',
                        url: curForm.attr('action'),
                        processData: false,
                        contentType: false,
                        dataType: 'json',
                        data: formData,
                        cache: false
                    }).fail(function(jqXHR, textStatus, errorThrown) {
                        curForm.find('.message').remove();
                        curForm.append('<div class="message message-error">Сервис временно недоступен, попробуйте позже.</div>')
                        curForm.removeClass('loading');
                    }).done(function(data) {
                        curForm.find('.message').remove();
                        if (data.status) {
                            curForm.html('<div class="message message-success">' + data.message + '</div>')
                        } else {
                            curForm.prepend('<div class="message message-error">' + data.message + '</div>')
                        }
                        curForm.removeClass('loading');
                    });
                } else {
                    form.submit();
                }
            }
        }
    });
}

var smartCaptchaKey = 'uahGSHTKJqjaJ0ezlhjrbOYH4OxS6zzL9CZ47OgY';

function smartCaptchaLoad() {
    $('.captcha-container').each(function() {
        if (!window.smartCaptcha) {
            return;
        }
        var curID = window.smartCaptcha.render(this, {
            sitekey: smartCaptchaKey,
            callback: smartCaptchaCallback,
            invisible: true,
            hideShield: true
        });
        $(this).attr('data-smartid', curID);
    });
}

function smartCaptchaCallback(token) {
    $('form[form-smartcaptchawaiting]').attr('form-smartcaptchawaiting', 'true');
    $('form[form-smartcaptchawaiting] [type="submit"]').trigger('click');
}

$(window).on('load', function() {
    $('body').on('mousemove', function(e) {
        var x = e.clientX / window.innerWidth;
        var y = e.clientY / window.innerHeight;
        $('.page-element').eq(0).each(function() {
            $(this).css({'transform': 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)'});
        });
        $('.page-element').eq(1).each(function() {
            $(this).css({'transform': 'translate(' + x * 100 + 'px, ' + y * 100 + 'px)'});
        });
        $('.page-element').eq(2).each(function() {
            $(this).css({'transform': 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)'});
        });
        $('.page-element').eq(3).each(function() {
            $(this).css({'transform': 'translate(' + x * 100 + 'px, ' + y * 100 + 'px)'});
        });
        $('.page-element').eq(4).each(function() {
            $(this).css({'transform': 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)'});
        });
        $('.page-element').eq(5).each(function() {
            $(this).css({'transform': 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)'});
        });

        $('.page-404-element').eq(0).each(function() {
            $(this).css({'transform': 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)'});
        });
        $('.page-404-element').eq(1).each(function() {
            $(this).css({'transform': 'translate(' + x * 100 + 'px, ' + y * 100 + 'px)'});
        });
        $('.page-404-element').eq(2).each(function() {
            $(this).css({'transform': 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)'});
        });
        $('.page-404-element').eq(3).each(function() {
            $(this).css({'transform': 'translate(' + x * 100 + 'px, ' + y * 100 + 'px)'});
        });
        $('.page-404-element').eq(4).each(function() {
            $(this).css({'transform': 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)'});
        });
        $('.page-404-element').eq(5).each(function() {
            $(this).css({'transform': 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)'});
        });
        $('.page-404-element').eq(6).each(function() {
            $(this).css({'transform': 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)'});
        });
        $('.page-404-element').eq(7).each(function() {
            $(this).css({'transform': 'translate(' + x * 100 + 'px, ' + y * 100 + 'px)'});
        });
    });
});

$(window).on('load resize', function() {
    $('.main-catalogue').each(function() {
        $('.main-catalogue').css({'height': $('.main-catalogue-inner').outerHeight()});
    });
});

var curMainStep = 0
var mainSliderTimer = null;
var mainSliderPeriod = 1500;
var isAutoSroll = false;

function mainSliderUpdate() {
    curMainStep++;
    if (curMainStep == 1) {
        $('.main').addClass('autoslider');
        $('.main-welcome-blisters-3').css({'transform': 'translateX(0%) scale(1)'});
        $('.main-welcome-bg-inner').css({'transform': 'rotate(-38.3deg)'});
        mainSliderTimer = window.setTimeout(mainSliderUpdate, mainSliderPeriod);
    }
    if (curMainStep == 2) {
        $('.main-welcome-2').css({'opacity': 0});
        $('.main-welcome-3').css({'opacity': 1});
        $('.main-welcome-blisters-2').css({'transform': 'translateX(-100%)'});
        $('.main-welcome-blisters-3').css({'transform': 'translateX(-100%)'});
        $('.main-welcome-blisters-4').css({'transform': 'translateX(0%)'});
        $('.main-welcome-bg-inner').css({'transform': 'rotate(-40.92deg)'});
        mainSliderTimer = window.setTimeout(mainSliderUpdate, mainSliderPeriod);
    }
    if (curMainStep == 3) {
        $('.main-welcome-blisters-4-big').css({'transform': 'translate(0%, 0%) scale(1)'});
        $('.main-welcome-bg-inner').css({'transform': 'rotate(-75.87deg)'});
        mainSliderTimer = window.setTimeout(mainSliderUpdate, mainSliderPeriod);
    }
    if (curMainStep == 4) {
        $('.main-welcome').css({'transform': 'translateY(-120vh)'});
        $('.main-welcome-blisters-4').css({'transform': 'translateY(-120vh)'});
        $('.main-welcome-blisters-4-big').css({'transform': 'translateY(-120vh)'});
        $('.main-welcome-bg-inner').css({'transform': 'rotate(-7.7deg)'});
        mainSliderTimer = window.setTimeout(mainSliderUpdate, 500);
    }
    if (curMainStep == 5) {
        $('.main').removeClass('autoslider');
        $('.main-welcome').css({'transform': 'none'});
        $('.main-welcome-2').css({'opacity': 0});
        $('.main-welcome-3').css({'opacity': 0});
        $('.main-welcome-blisters-2').css({'transform': 'translateX(0%)', 'opacity': 0});
        $('.main-welcome-blisters-3').css({'transform': 'translateX(100%) scale(1.5)'});
        $('.main-welcome-blisters-4').css({'transform': 'translateX(120%)'});
        $('.main-welcome-blisters-4-big').css({'transform': 'translate(100%, 100%) scale(1.5)'});

        $('.main-welcome-2').animate({'opacity': 1});
        $('.main-welcome-blisters-2').animate({'opacity': 1});
        curMainStep = 0;
        mainSliderTimer = window.setTimeout(mainSliderUpdate, mainSliderPeriod);
    }
}

$(window).on('load resize scroll', function(e) {
    var windowScroll = $(window).scrollTop();

    var windowWidth = $(window).width();
    $('body').append('<div id="body-test-height" style="position:fixed; left:0; top:0; right:0; bottom:0; z-index:-1"></div>');
    var windowHeight = $('#body-test-height').height();
    $('#body-test-height').remove();

    if (windowScroll > 0) {
        if (!$('body').hasClass('page-main')) {
            $('header').addClass('fixed');
        }
    } else {
        $('header').removeClass('fixed');
    }

    if ($('body').hasClass('page-main')) {

        if (windowScroll == 0) {
            $('.main-welcome-bg-inner').css({'transform': 'rotate(-7.7deg)'});
            $('.main-welcome').css({'transform': 'none'});
            $('.main-welcome-2').css({'opacity': 0});
            $('.main-welcome-3').css({'opacity': 0});
            $('.main-welcome-blisters-2').css({'transform': 'translateX(100%)'});
            $('.main-welcome-blisters-3').css({'transform': 'translateX(100%) scale(1.5)'});
            $('.main-welcome-blisters-4').css({'transform': 'translateX(120%)'});
            $('.main-welcome-blisters-4-big').css({'transform': 'translate(100%, 100%) scale(1.5)'});
            $('.main-welcome-emotions').css({'opacity': 0});
            $('.main-welcome-tones').css({'opacity': 0});
            $('.main-welcome-brand').css({'opacity': 0});
            $('.main-welcome-wrapper').css({'height': '100vh'});
            $('.main-catalogue-circle').css({'transform': 'scale(0)'});
            $('.main-catalogue .container').css({'opacity': 0});
            $('.main-bottom-bg').css({'transform': 'rotate(-35deg) translateY(50%)'});
        }

        if (windowScroll > 0) {
            if (mainSliderTimer != null) {
                window.clearTimeout(mainSliderTimer);
                mainSliderTimer = null;
                $('.main').removeClass('autoslider');
                isAutoSroll = true;
                var newScroll = $('.main-section-emotions').offset().top - windowHeight;
                if (windowWidth < 1216) {
                    newScroll = $('.main-welcome-emotions-mobile').offset().top - $('header').height();
                }
                $('html, body').animate({'scrollTop': newScroll}, 4000 / (curMainStep + 1), function() {
                    isAutoSroll = false;
                });
            }
        } else {
            window.clearTimeout(mainSliderTimer);
            mainSliderTimer = null;
            curMainStep = 0;
            mainSliderTimer = window.setTimeout(mainSliderUpdate, mainSliderPeriod);
        }

        if (!isAutoSroll) {
            var mainBlisters2Start = $('.main-section-blisters-2').offset().top - windowHeight;
            var mainBlisters2Stop = $('.main-section-blisters-3').offset().top - windowHeight;
            if (windowScroll >= mainBlisters2Start) {
                if (windowScroll < mainBlisters2Stop) {
                    var mainBlisters2Current = (windowScroll - mainBlisters2Start) / (mainBlisters2Stop - mainBlisters2Start);

                    $('.main-welcome-blisters-2').css({'transform': 'translateX(' + ((1 - mainBlisters2Current) * 100) + '%)'});
                    $('.main-welcome-2').css({'opacity': mainBlisters2Current});
                    $('.main-welcome-bg-inner').css({'transform': 'rotate(-' + (7.7 + 10.87 * mainBlisters2Current) + 'deg)'});
                }
            } else {
                $('.main-welcome-bg-inner').css({'transform': 'rotate(-7.7deg)'});
                $('.main-welcome').css({'transform': 'none'});
                $('.main-welcome-2').css({'opacity': 0});
                $('.main-welcome-3').css({'opacity': 0});
                $('.main-welcome-blisters-2').css({'transform': 'translateX(100%)'});
                $('.main-welcome-blisters-3').css({'transform': 'translateX(100%) scale(1.5)'});
                $('.main-welcome-blisters-4').css({'transform': 'translateX(120%)'});
                $('.main-welcome-blisters-4-big').css({'transform': 'translate(100%, 100%) scale(1.5)'});
                $('.main-welcome-emotions').css({'opacity': 0});
                $('.main-welcome-tones').css({'opacity': 0});
                $('.main-welcome-brand').css({'opacity': 0});
                $('.main-welcome-wrapper').css({'height': '100vh'});
                $('.main-catalogue-circle').css({'transform': 'scale(0)'});
                $('.main-catalogue .container').css({'opacity': 0});
                $('.main-bottom-bg').css({'transform': 'rotate(-35deg) translateY(50%)'});
            }
        }

        if (!isAutoSroll || curMainStep < 1) {
            var mainBlisters3Start = $('.main-section-blisters-3').offset().top - windowHeight;
            var mainBlisters3Stop = $('.main-section-blisters-4').offset().top - windowHeight;
            if (windowScroll >= mainBlisters3Start) {
                if (windowScroll < mainBlisters3Stop) {
                    var mainBlisters3Current = (windowScroll - mainBlisters3Start) / (mainBlisters3Stop - mainBlisters3Start);

                    $('.main-welcome').css({'transform': 'none'});
                    $('.main-welcome-2').css({'opacity': 1});
                    $('.main-welcome-3').css({'opacity': 0});
                    $('.main-welcome-blisters-2').css({'transform': 'translateX(0)'});
                    $('.main-welcome-blisters-4').css({'transform': 'translateX(120%)'});
                    $('.main-welcome-blisters-4-big').css({'transform': 'translate(100%, 100%) scale(1.5)'});
                    $('.main-welcome-emotions').css({'opacity': 0});
                    $('.main-welcome-tones').css({'opacity': 0});
                    $('.main-welcome-brand').css({'opacity': 0});
                    $('.main-welcome-wrapper').css({'height': '100vh'});
                    $('.main-catalogue-circle').css({'transform': 'scale(0)'});
                    $('.main-catalogue .container').css({'opacity': 0});
                    $('.main-bottom-bg').css({'transform': 'rotate(-35deg) translateY(50%)'});

                    $('.main-welcome-blisters-3').css({'transform': 'translateX(' + ((1 - mainBlisters3Current) * 100) + '%) scale(' + (((1 - mainBlisters3Current) * 0.5) + 1) + ')'});
                    $('.main-welcome-bg-inner').css({'transform': 'rotate(-' + (26.57 + 11.73 * mainBlisters3Current) + 'deg)'});
                }
            }
        }

        if (!isAutoSroll || curMainStep < 2) {
            var mainBlisters4Start = $('.main-section-blisters-4').offset().top - windowHeight;
            var mainBlisters4Stop = $('.main-section-blisters-4-big').offset().top - windowHeight;
            if (windowScroll >= mainBlisters4Start) {
                if (windowScroll < mainBlisters4Stop) {
                    var mainBlisters4Current = (windowScroll - mainBlisters4Start) / (mainBlisters4Stop - mainBlisters4Start);

                    $('.main-welcome').css({'transform': 'none'});
                    $('.main-welcome-blisters-4-big').css({'transform': 'translate(100%, 100%) scale(1.5)'});
                    $('.main-welcome-emotions').css({'opacity': 0});
                    $('.main-welcome-tones').css({'opacity': 0});
                    $('.main-welcome-brand').css({'opacity': 0});
                    $('.main-welcome-wrapper').css({'height': '100vh'});
                    $('.main-catalogue-circle').css({'transform': 'scale(0)'});
                    $('.main-catalogue .container').css({'opacity': 0});
                    $('.main-bottom-bg').css({'transform': 'rotate(-35deg) translateY(50%)'});

                    $('.main-welcome-2').css({'opacity': 1 - mainBlisters4Current});
                    $('.main-welcome-3').css({'opacity': mainBlisters4Current});
                    $('.main-welcome-blisters-2').css({'transform': 'translateX(-' + (mainBlisters4Current * 100) + '%)'});
                    $('.main-welcome-blisters-3').css({'transform': 'translateX(-' + (mainBlisters4Current * 100) + '%)'});
                    $('.main-welcome-blisters-4').css({'transform': 'translateX(' + ((1 - mainBlisters4Current) * 120) + '%)'});
                    $('.main-welcome-bg-inner').css({'transform': 'rotate(-' + (38.3 + 2.62 * mainBlisters4Current) + 'deg)'});
                }
            }
        }

        if (!isAutoSroll || curMainStep < 3) {
            var mainBlisters4BigStart = $('.main-section-blisters-4-big').offset().top - windowHeight;
            var mainBlisters4BigStop = $('.main-section-emotions-before').offset().top - windowHeight;
            if (windowScroll >= mainBlisters4BigStart) {
                if (windowScroll < mainBlisters4BigStop) {
                    var mainBlisters4BigCurrent = (windowScroll - mainBlisters4BigStart) / (mainBlisters4BigStop - mainBlisters4BigStart);

                    $('.main-welcome').css({'transform': 'none'});
                    $('.main-welcome-2').css({'opacity': 0});
                    $('.main-welcome-3').css({'opacity': 1});
                    $('.main-welcome-blisters-2').css({'transform': 'translateX(-100%)'});
                    $('.main-welcome-blisters-3').css({'transform': 'translateX(-100%)'});
                    $('.main-welcome-blisters-4').css({'transform': 'translateX(0)'});
                    $('.main-welcome-emotions').css({'opacity': 0});
                    $('.main-welcome-tones').css({'opacity': 0});
                    $('.main-welcome-brand').css({'opacity': 0});
                    $('.main-welcome-wrapper').css({'height': '100vh'});
                    $('.main-catalogue-circle').css({'transform': 'scale(0)'});
                    $('.main-catalogue .container').css({'opacity': 0});
                    $('.main-bottom-bg').css({'transform': 'rotate(-35deg) translateY(50%)'});

                    $('.main-welcome-blisters-4-big').css({'transform': 'translate(' + ((1 - mainBlisters4BigCurrent) * 100) + '%, ' + ((1 - mainBlisters4BigCurrent) * 100) + '%) scale(' + (((1 - mainBlisters4BigCurrent) * 0.5) + 1) + ')'});
                    $('.main-welcome-bg-inner').css({'transform': 'rotate(-' + (40.92 + 34.95 * mainBlisters4BigCurrent) + 'deg)'});
                }
            }
        }

        if (windowWidth > 1215) {
            var mainEmotionsBeforeStart = $('.main-section-emotions-before').offset().top - windowHeight;
            var mainEmotionsBeforeStop = $('.main-section-emotions').offset().top - windowHeight;
            if (windowScroll >= mainEmotionsBeforeStart) {
                if (windowScroll < mainEmotionsBeforeStop) {
                    var mainEmotionsBeforeCurrent = (windowScroll - mainEmotionsBeforeStart) / (mainEmotionsBeforeStop - mainEmotionsBeforeStart);

                    $('.main-welcome-2').css({'opacity': 0});
                    $('.main-welcome-3').css({'opacity': 1});
                    $('.main-welcome-blisters-2').css({'transform': 'translateX(-100%)'});
                    $('.main-welcome-blisters-3').css({'transform': 'translateX(-100%)'});
                    $('.main-welcome-tones').css({'opacity': 0});
                    $('.main-welcome-brand').css({'opacity': 0});
                    $('.main-welcome-wrapper').css({'height': '100vh'});
                    $('.main-catalogue-circle').css({'transform': 'scale(0)'});
                    $('.main-catalogue .container').css({'opacity': 0});
                    $('.main-bottom-bg').css({'transform': 'rotate(-35deg) translateY(50%)'});

                    $('.main-welcome').css({'transform': 'translateY(-' + (mainEmotionsBeforeCurrent * 2 * 120) + 'vh)'});
                    $('.main-welcome-blisters-4').css({'transform': 'translateY(-' + (mainEmotionsBeforeCurrent * 2 * 120) + 'vh)'});
                    $('.main-welcome-blisters-4-big').css({'transform': 'translateY(-' + (mainEmotionsBeforeCurrent * 2 * 120) + 'vh)'});
                    $('.main-welcome-bg-inner').css({'transform': 'rotate(-' + (75.87 + 27.39 * mainEmotionsBeforeCurrent) + 'deg)'});
                    $('.main-welcome-emotions').css({'opacity': mainEmotionsBeforeCurrent});
                }
            }

            var mainTonesBeforeStart = $('.main-section-tones-before').offset().top - windowHeight;
            var mainTonesBeforeStop = $('.main-section-tones').offset().top - windowHeight;
            if (windowScroll >= mainTonesBeforeStart) {
                if (windowScroll < mainTonesBeforeStop) {
                    var mainTonesBeforeCurrent = (windowScroll - mainTonesBeforeStart) / (mainTonesBeforeStop - mainTonesBeforeStart);

                    $('.main-welcome').css({'transform': 'translateY(-120vh)'});
                    $('.main-welcome-2').css({'opacity': 0});
                    $('.main-welcome-3').css({'opacity': 1});
                    $('.main-welcome-blisters-2').css({'transform': 'translateX(-100%)'});
                    $('.main-welcome-blisters-3').css({'transform': 'translateX(-100%)'});
                    $('.main-welcome-blisters-4').css({'transform': 'translateY(-120vh)'});
                    $('.main-welcome-blisters-4-big').css({'transform': 'translateY(-120vh)'});
                    $('.main-welcome-brand').css({'opacity': 0});
                    $('.main-welcome-wrapper').css({'height': '100vh'});
                    $('.main-catalogue-circle').css({'transform': 'scale(0)'});
                    $('.main-catalogue .container').css({'opacity': 0});
                    $('.main-bottom-bg').css({'transform': 'rotate(-35deg) translateY(50%)'});

                    if (mainTonesBeforeCurrent < 0.5) {
                        $('.main-welcome-emotions').css({'opacity': 1 - mainTonesBeforeCurrent * 2});
                        $('.main-welcome-tones').css({'opacity': 0});
                    } else {
                        $('.main-welcome-emotions').css({'opacity': 0});
                        $('.main-welcome-tones').css({'opacity': mainTonesBeforeCurrent});
                    }
                    $('.main-welcome-bg-inner').css({'transform': 'rotate(-' + (103.26 + 18.61 * mainTonesBeforeCurrent) + 'deg)'});
                }
            }

            var mainBrandBeforeStart = $('.main-section-brand-before').offset().top - windowHeight;
            var mainBrandBeforeStop = $('.main-section-brand').offset().top - windowHeight;
            if (windowScroll >= mainBrandBeforeStart) {
                if (windowScroll < mainBrandBeforeStop) {
                    var mainBrandBeforeCurrent = (windowScroll - mainBrandBeforeStart) / (mainBrandBeforeStop - mainBrandBeforeStart);

                    $('.main-welcome').css({'transform': 'translateY(-120vh)'});
                    $('.main-welcome-2').css({'opacity': 0});
                    $('.main-welcome-3').css({'opacity': 1});
                    $('.main-welcome-blisters-2').css({'transform': 'translateX(-100%)'});
                    $('.main-welcome-blisters-3').css({'transform': 'translateX(-100%)'});
                    $('.main-welcome-blisters-4').css({'transform': 'translateY(-120vh)'});
                    $('.main-welcome-blisters-4-big').css({'transform': 'translateY(-120vh)'});
                    $('.main-welcome-emotions').css({'opacity': 0});
                    $('.main-welcome-wrapper').css({'height': '100vh'});
                    $('.main-catalogue-circle').css({'transform': 'scale(0)'});
                    $('.main-catalogue .container').css({'opacity': 0});
                    $('.main-bottom-bg').css({'transform': 'rotate(-35deg) translateY(50%)'});

                    if (mainBrandBeforeCurrent < 0.5) {
                        $('.main-welcome-tones').css({'opacity': 1 - mainBrandBeforeCurrent * 2});
                        $('.main-welcome-brand').css({'opacity': 0});
                    } else {
                        $('.main-welcome-tones').css({'opacity': 0});
                        $('.main-welcome-brand').css({'opacity': mainBrandBeforeCurrent});
                    }
                    $('.main-welcome-bg-inner').css({'transform': 'rotate(-' + (121.87 + 6.6 * mainBrandBeforeCurrent) + 'deg)'});
                }
            }

            var mainCatalogueBeforeStart = $('.main-section-catalogue-before').offset().top - windowHeight;
            var mainCatalogueBeforeStop = $('.main-section-catalogue').offset().top - windowHeight;
            if (windowScroll >= mainCatalogueBeforeStart) {
                if (windowScroll < mainCatalogueBeforeStop) {
                    var mainCatalogueBeforeCurrent = (windowScroll - mainCatalogueBeforeStart) / (mainCatalogueBeforeStop - mainCatalogueBeforeStart);

                    $('.main-welcome-bg-inner').css({'transform': 'rotate(-135.07deg)'});
                    $('.main-welcome').css({'transform': 'translateY(-120vh)'});
                    $('.main-welcome-2').css({'opacity': 0});
                    $('.main-welcome-3').css({'opacity': 1});
                    $('.main-welcome-blisters-2').css({'transform': 'translateX(-100%)'});
                    $('.main-welcome-blisters-3').css({'transform': 'translateX(-100%)'});
                    $('.main-welcome-blisters-4').css({'transform': 'translateY(-120vh)'});
                    $('.main-welcome-blisters-4-big').css({'transform': 'translateY(-120vh)'});
                    $('.main-welcome-emotions').css({'opacity': 0});
                    $('.main-welcome-tones').css({'opacity': 0});
                    $('.main-welcome-brand').css({'opacity': 1});
                    $('.main-welcome-wrapper').css({'height': '100vh'});
                    $('.main-catalogue .container').css({'opacity': 0});
                    $('.main-bottom-bg').css({'transform': 'rotate(-35deg) translateY(50%)'});

                    $('.main-catalogue-circle').css({'transform': 'scale(' + mainCatalogueBeforeCurrent + ')'});
                }
            }

            var mainCatalogueStart = $('.main-section-catalogue').offset().top - windowHeight;
            var mainCatalogueStop = $('.main-catalogue').offset().top;
            if (windowScroll >= mainCatalogueStart) {
                if (windowScroll < mainCatalogueStop) {
                    var mainCatalogueCurrent = (windowScroll - mainCatalogueStart) / (mainCatalogueStop - mainCatalogueStart);

                    $('.main-welcome-bg-inner').css({'transform': 'rotate(-135.07deg)'});
                    $('.main-welcome').css({'transform': 'translateY(-120vh)'});
                    $('.main-welcome-2').css({'opacity': 0});
                    $('.main-welcome-3').css({'opacity': 1});
                    $('.main-welcome-blisters-2').css({'transform': 'translateX(-100%)'});
                    $('.main-welcome-blisters-3').css({'transform': 'translateX(-100%)'});
                    $('.main-welcome-blisters-4').css({'transform': 'translateY(-120vh)'});
                    $('.main-welcome-blisters-4-big').css({'transform': 'translateY(-120vh)'});
                    $('.main-welcome-emotions').css({'opacity': 0});
                    $('.main-welcome-tones').css({'opacity': 0});
                    $('.main-welcome-brand').css({'opacity': 1});
                    $('.main-catalogue-circle').css({'transform': 'scale(1)'});
                    $('.main-bottom-bg').css({'transform': 'rotate(-35deg) translateY(50%)'});

                    $('.main-welcome-wrapper').css({'height': (1 - mainCatalogueCurrent) * 100 + 'vh'});
                    $('.main-catalogue .container').css({'opacity': mainCatalogueCurrent});
                }
            }

            if (windowScroll < $('.main-catalogue').offset().top) {
                $('.main-catalogue').addClass('fixed');
            } else {
                $('.main-catalogue').removeClass('fixed');
                $('.main-welcome-wrapper').css({'height': '0'});
                $('.main-catalogue-circle').css({'transform': 'scale(1)'});
                $('.main-catalogue .container').css({'opacity': 1});
            }
        } else {
            var mainEmotionsBeforeStart = $('.main-section-emotions-before').offset().top - windowHeight;
            var mainEmotionsBeforeStop = $('.main-section-emotions').offset().top - windowHeight;
            if (windowScroll >= mainEmotionsBeforeStart) {
                if (windowScroll < mainEmotionsBeforeStop) {
                    var mainEmotionsBeforeCurrent = (windowScroll - mainEmotionsBeforeStart) / (mainEmotionsBeforeStop - mainEmotionsBeforeStart);

                    $('.main-welcome-2').css({'opacity': 0});
                    $('.main-welcome-3').css({'opacity': 1});
                    $('.main-welcome-blisters-2').css({'transform': 'translateX(-100%)'});
                    $('.main-welcome-blisters-3').css({'transform': 'translateX(-100%)'});
                    $('.main-welcome-emotions').css({'opacity': 0});
                    $('.main-welcome-tones').css({'opacity': 0});
                    $('.main-welcome-brand').css({'opacity': 0});
                    $('.main-welcome-wrapper').css({'height': '100vh'});
                    $('.main-catalogue-circle').css({'transform': 'scale(0)'});
                    $('.main-catalogue .container').css({'opacity': 0});
                    $('.main-bottom-bg').css({'transform': 'rotate(-35deg) translateY(50%)'});

                    $('.main-welcome-wrapper').css({'transform': 'translateY(-' + (mainEmotionsBeforeCurrent * 100) + '%)'});
                } else {
                    $('.main-welcome-wrapper').css({'transform': 'translateY(-100%)'});
                }
            } else {
                $('.main-welcome-wrapper').css({'transform': 'none'});
            }
        }

        if (windowScroll < $('.main-catalogue').offset().top - $('header').height()) {
            $('header').removeClass('fixed inverse');
        } else {
            $('header').addClass('fixed inverse');
        }

        if (windowScroll < $('.main-bottom').offset().top - $('header').height()) {
            if (windowScroll >= $('.main-catalogue').offset().top - $('header').height()) {
                $('header').addClass('inverse');
            } else {
                $('header').removeClass('inverse');
            }
        } else {
            $('header').removeClass('inverse');
        }

        if (windowWidth > 1215) {
            var mainBottomStart = $('.main-bottom').offset().top - windowHeight;
            var mainBottomStop = $('.main-bottom').offset().top;
            if (windowScroll >= mainBottomStart) {
                if (windowScroll < mainBottomStop) {
                    var mainBottomCurrent = (windowScroll - mainBottomStart) / (mainBottomStop - mainBottomStart);

                    $('.main-bottom-bg').css({'transform': 'rotate(-35deg) translateY(' + (-mainBottomCurrent * 100 + 50) + '%)'});
                }
            }
        }

    }
});