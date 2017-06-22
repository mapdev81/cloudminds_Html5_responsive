$(function () {
    $.validator.addMethod("not-blank", function (value, element) {
        value = value.trim();
        return this.optional(element) || value.length > 0;
    }, "输入不能全为空格");
    $.validator.addMethod("phone", function (value, element) {
        var reg = /1[0-9]{10}/;
        return this.optional(element) || reg.test(value);
    }, "请输入正确的手机号");

    $.validator.addMethod("email", function (value, element) {
        var EMAIL_REGEXP = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        return this.optional(element) || EMAIL_REGEXP.test(value);
    }, "请输入正确的邮箱地址");

    $("#dataOrderForm").validate({
        messages: {
            name: {required: '请输入您的姓名'},
            email: {
                required: '请输入您的邮箱',
                'email': '请输入合法的邮箱地址'
            },
            phone: {
                required: '请输入您的手机号'
            }
        },
        submitHandler: function () {
            $.post(window.BASE_URL + '/annon/orderData', $('#dataOrderForm').serialize(), function (ret) {
                if (ret.code == 0) {
                    alert(ret.message);
                } else {
                    alert(ret.message);
                    // do something for failure
                }

                $('#dataOrderModal').modal('hide');
            });
            return false;
        }
    });
});
