document.getElementById('e_content').style.display = 'block';
window.onbeforeunload = function(e) {
    $( document ).ready(function() {
        console.log($('#e_content').html());
    });
    return "better luck next time";
};
