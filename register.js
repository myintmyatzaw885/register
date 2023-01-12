$(document).ready(function() {
    $('.register-container form .password-form .fa-eye').click(function() {
        $(this).css('display', 'none');
        $('.register-container form .password-form .fa-eye-slash').css('display', 'inline-block');
        $('.register-container form .password-form input').attr('type', 'text');
    });
    $('.register-container form .password-form .fa-eye-slash').click(function() {
        $(this).css('display', 'none');
        $('.register-container form .password-form .fa-eye').css('display', 'inline-block');
        $('.register-container form .password-form input').attr('type', 'password');
    });
    $('.register-container form .confirm-password-form .fa-eye').click(function() {
        $(this).css('display', 'none');
        $('.register-container form .confirm-password-form .fa-eye-slash').css('display', 'inline-block');
        $('.register-container form .confirm-password-form input').attr('type', 'text');
    });
    $('.register-container form .confirm-password-form .fa-eye-slash').click(function() {
        $(this).css('display', 'none');
        $('.register-container form .confirm-password-form .fa-eye').css('display', 'inline-block');
        $('.register-container form .confirm-password-form input').attr('type', 'password');
    });
})