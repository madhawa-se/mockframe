var phone;
var iframe;

function updateView(view) {
    if (view) {
        phone.className = "phone view_" + view;
    }
}

function updateIframe() {
    // phone.style.width = '309px';
    // phone.style.height = '660px';
}

window.onload = function () {

    phone = document.getElementById("phone_1");
    iframe = document.getElementById("frame_1");
    updateIframe();
}
