/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
function printOutputs(inputs) {
    for (const ele of inputs.entries()) {
        console.log(ele);
    }
}

$(function () {
    $('.slider').on('input change', function () {
        $(this).next($('.slider_label')).html(this.value);
    });
    $('.slider_label').each(function () {
        var value = $(this).prev().attr('value');
        $(this).html(value);
    });
});

document.getElementById("sliderHco").oninput = function () {
    $("#outputHco").text = this.value;
};
