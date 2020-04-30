LearnosityAmd.define(['jquery-v1.10.2'], function ($) {
    'use strict';

    function CustomShorttext(init) {
        this.init = init;

        init.$el.html('Welcome Ankush');

        // var $response = $('input', init.$el);

        // if (init.response) {
        //     $response.val(init.response);
        // }

        // $response.change(function (event) {
        //     init.events.trigger('changed', event.currentTarget.value);
        // });

        init.events.trigger('ready');
    }

    return {
        Question: CustomShorttext
    };

});