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

$(window).on('load resize scroll', function() {
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
        if (windowScroll > $('.main-screen-1').offset().top) {
            $('.main').addClass('main-animate-1');
        } else {
            $('.main').removeClass('main-animate-1');
        }

        if (windowScroll > $('.main-screen-2').offset().top) {
            $('.main').addClass('main-animate-2');
        } else {
            $('.main').removeClass('main-animate-2');
        }

        if (windowScroll > $('.main-screen-3').offset().top) {
            $('.main').addClass('main-animate-3');
        } else {
            $('.main').removeClass('main-animate-3');
        }

        if (windowScroll > $('.main-screen-4').offset().top) {
            $('.main').addClass('main-animate-4');
        } else {
            $('.main').removeClass('main-animate-4');
        }

        if (windowScroll > $('.main-screen-5').offset().top) {
            $('.main').addClass('main-animate-5');
        } else {
            $('.main').removeClass('main-animate-5');
        }

        if ($(window).width() > 1215) {
            if (windowScroll > $('.main-screen-6').offset().top) {
                $('.main').addClass('main-animate-6');
            } else {
                $('.main').removeClass('main-animate-6');
            }

            if (windowScroll > $('.main-screen-7').offset().top) {
                $('.main').addClass('main-animate-7');
            } else {
                $('.main').removeClass('main-animate-7');
            }

            var curStartCatalogue = $('.main-catalogue').offset().top - windowHeight;
            var curStopCatalogue = $('.main-catalogue').offset().top - $('header').height();
            if (windowScroll > curStartCatalogue) {
                if (windowScroll < curStopCatalogue) {
                    var curPercentCatalogue = (windowScroll - curStartCatalogue) / (curStopCatalogue - curStartCatalogue);
                } else {
                    curPercentCatalogue = 1;
                }
            } else {
                curPercentCatalogue = 0;
            }
            $('.main-catalogue-circle').css({'transform': 'translateY(' + (50 - curPercentCatalogue * 50) + '%)'});

            if (windowScroll > ($('.main-catalogue').offset().top - $('header').height())) {
                $('.main').addClass('main-animate-8');
                $('header').addClass('fixed inverse');
            } else {
                $('.main').removeClass('main-animate-8');
                $('header').removeClass('fixed inverse');
            }

            var curStartBottom = $('.main-bottom').offset().top - windowHeight;
            var curStopBottom = $('.main-bottom').offset().top - $('header').height();
            if (windowScroll > curStartBottom) {
                if (windowScroll < curStopBottom) {
                    var curPercentBottom = (windowScroll - curStartBottom) / (curStopBottom - curStartBottom);
                } else {
                    curPercentBottom = 1;
                }
            } else {
                curPercentBottom = 0;
            }
            $('.main-bottom-background').css({'transform': 'translateY(' + (100 - curPercentBottom * 100) + '%)'});
            $('.main-bottom-background-black').css({'transform': 'translateY(' + (100 - curPercentBottom * 100) + '%)'});

            if (windowScroll + windowHeight / 2 > $('.main-bottom').offset().top - $('header').height()) {
                $('header').removeClass('inverse');
            } else {
                if (windowScroll > ($('.main-catalogue').offset().top - $('header').height())) {
                    $('header').addClass('inverse');
                }
            }
        }
    }
});

var lastScrollTop = 0;
var didScroll = false;
var delta = 5;
var animateScroll = false;

$(window).on('scroll', function() {
    if ($('body').hasClass('page-main')) {
        didScroll = true;
        window.setTimeout(function() {
            if (didScroll) {
                var windowScroll = $(window).scrollTop();
                if (Math.abs(lastScrollTop - windowScroll) <= delta) {
                    return;
                }
                if (!animateScroll) {
                    if (windowScroll > lastScrollTop) {
                        scrollToBlock('down');
                    } else {
                        scrollToBlock('up');
                    }
                }
                lastScrollTop = windowScroll;
                didScroll = false;
            }
        }, 50);
    }
});

function scrollToBlock(direction) {
    var windowScroll = $(window).scrollTop();
    if ($(window).width() > 1215) {
        if (direction == 'down') {
            if (windowScroll < $('.main-screen-2').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': $('.main-screen-2').offset().top}, function() {
                    animateScroll = false;
                });
            } else if (windowScroll < $('.main-screen-3').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': $('.main-screen-3').offset().top}, function() {
                    animateScroll = false;
                });
            } else if (windowScroll < $('.main-screen-4').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': $('.main-screen-4').offset().top}, function() {
                    animateScroll = false;
                });
            } else if (windowScroll < $('.main-screen-5').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': $('.main-screen-5').offset().top}, function() {
                    animateScroll = false;
                });
            } else if (windowScroll < $('.main-screen-6').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': $('.main-screen-6').offset().top}, function() {
                    animateScroll = false;
                });
            } else if (windowScroll < $('.main-screen-7').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': $('.main-screen-7').offset().top}, function() {
                    animateScroll = false;
                });
            } else if (windowScroll < $('.main-screen-8').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': $('.main-screen-8').offset().top}, function() {
                    animateScroll = false;
                });
            } else if (windowScroll < $('.main-catalogue').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': $('.main-catalogue').offset().top}, function() {
                    animateScroll = false;
                });
            }
        } else {
            if (windowScroll < $('.main-screen-2').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': 0}, function() {
                    animateScroll = false;
                });
            } else if (windowScroll < $('.main-screen-3').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': $('.main-screen-2').offset().top}, function() {
                    animateScroll = false;
                });
            } else if (windowScroll < $('.main-screen-4').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': $('.main-screen-3').offset().top}, function() {
                    animateScroll = false;
                });
            } else if (windowScroll < $('.main-screen-5').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': $('.main-screen-4').offset().top}, function() {
                    animateScroll = false;
                });
            } else if (windowScroll < $('.main-screen-6').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': $('.main-screen-5').offset().top}, function() {
                    animateScroll = false;
                });
            } else if (windowScroll < $('.main-screen-7').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': $('.main-screen-6').offset().top}, function() {
                    animateScroll = false;
                });
            } else if (windowScroll < $('.main-screen-8').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': $('.main-screen-7').offset().top}, function() {
                    animateScroll = false;
                });
            } else if (windowScroll < $('.main-catalogue').offset().top) {
                animateScroll = true;
                $('html, body').animate({'scrollTop': $('.main-screen-8').offset().top}, function() {
                    animateScroll = false;
                });
            }
        }
    }
}