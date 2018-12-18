$(function () {
    var
        video = document.querySelector('video'),
        isDrag;


    $('.player').on({
        mouseenter: function () {
            $(".controls").fadeIn();
        },
        mouseleave: function () {
            $(".controls").fadeOut();

        },
        mousemove: function (e) {
            if (isDrag) {
                setTimeline(e.pageX);
                setProgressLine();
            }
        },
        mouseup: function (e) {
            if (isDrag) {
                isDrag = false;;
            }
        }
    });


    $(video).on({
        canplay: function () {
            if (video.currentTime != 0) {
                return;
            }
            setTime(video.duration);
        },
        timeupdate: function () {
            setProgressLine();
        },
        ended: function () {
            if (isDrag) return;
            $(".centerButton").html('<i class="fas fa-play"></i>');
        }
    });

    $(".centerButton").click(function (e) {
        e.preventDefault();
        var $this = $(this);
        if (video.paused) {
            video.play();
            $this.html('<i class="fas fa-pause"></i>');
        } else {
            video.pause();
            $this.html('<i class="fas fa-play"></i>');
        }
    });



    $('.timeline').on({
        click: function (e) {
            e.preventDefault();
            setTimeline(e.pageX);
        },
        mousedown: function (e) {
            isDrag = true;
        },
    });

    $('.full-size').click(function (e) {
        e.preventDefault();
        $(this).closest('.player').toggleClass('full-size');
    });

    function setTimeline(pageX) {
        var
            $this = $('.timeline'),
            timelinePos = $this.offset().left,
            position = pageX - timelinePos,
            lineWidth = $this.width(),
            percents = position / lineWidth * 100,
            trackPosition = video.duration / 100 * percents;
        video.currentTime = trackPosition;

    }

    function setProgressLine() {
        var
            duration = video.duration,
            currentTime = video.currentTime,
            progression = currentTime / duration * 100;
        setTime(duration - currentTime);
        $('.progress').css({
            "width": progression + '%'
        });
    }

    function setTime(time) {
        var
            minutes = Math.floor(time / 60),
            seconds = Math.floor(time % 60),
            timeString;
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        timeString = `${minutes}:${seconds}`;
        $(".time").text(timeString);
    };
});