var boop = 0;

function heartsFall() {
    for (var i = 1; i <= 20; i++) {
        var heart = document.getElementById("heart" + i);
        heart.style.display = "block";
        var l = heart.style.left;
        var t = heart.style.top;
        if (l == "") l = (Math.random() * 95) + "vw";
        else {
            var dl = Math.random() * 2;
            var lval = parseFloat(l.substring(0, l.length - 2));
            if (lval + dl > 100) {
                lval -= dl;
            }
            else if (lval - dl < 0) {
                lval += dl;
            }
            else if (Math.floor(Math.random() * 2) == 0) {
                lval += dl;
            }
            else {
                lval -= dl;
            }
            l = lval + "vw";
        }
        if (t == "") t = (Math.random() * 95) + "vh";
        else {
            var dt = Math.random() * 20;
            var tval = parseFloat(t.substring(0, t.length - 2));
            if (tval + dt > 100) {
                tval -= dt;
            }
            else if (tval - dt < 0) {
                tval += dt;
            }
            else if (Math.floor(Math.random() * 2) == 0) {
                tval += dt;
            }
            else {
                tval -= dt;
            }
            t = tval + "vw";
        }
        heart.style.left = l;
        heart.style.top = t;
    }
    if (boop < 20) {
        boop += 1;
        setTimeout(function() { heartsFall(); }, 100);
    }
    else {
        boop = 0;
        for (var i = 1; i <= 20; i++) {
            var heart = document.getElementById("heart" + i);
            heart.style.display = "none";
        }
    }
}