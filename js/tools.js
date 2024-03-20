$(document).ready(function() {

    $('.header-search-link, .menu-search-link').click(function(e) {
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
            collectionHTML += '<div class="collection-blister"><div><img src="' + curCollection.list[i] + '" alt=""></div></div>';
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
    });
});

$(window).on('load resize scroll', function() {
    var windowScroll = $(window).scrollTop();

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
    }
});