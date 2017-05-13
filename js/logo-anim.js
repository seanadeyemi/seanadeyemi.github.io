function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200,
            header = document.getElementById("myLogo");
        if (distanceY > shrinkOn) {
            document.getElementById("myLogo").classList.add("smaller-hdr");
        } else {
            if (document.getElementById("myLogo").classList.contains("smaller-hdr")) {
                document.getElementById("myLogo").classList.remove("smaller-hdr");
            }
        }
    });
}
window.onload = init();