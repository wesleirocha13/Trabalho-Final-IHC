$(document).ready(() => {

    $(document).on('click', '.select-color-group', function (e) {

        e.preventDefault();

        $('.phones-colors').hide();

        const selector = $(this).children();
        const color = $(selector[0]).attr('data-color');
        const path = `../assets/images/phone-${color}.jpg`;

        console.log(path);

        $('.select-color-group > label').each((i, element) => {

            $(element).addClass('opacity');

        });

        $(selector[0]).removeClass('opacity');

        $('.phones-colors').css({
            background: `url(${path})`,
            'background-repeat': 'no-repeat',
            'background-size': 'cover'
        });

        $('.phones-colors').fadeIn('fast');

    })

});