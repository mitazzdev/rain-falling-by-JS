(function() {

    var c = document.querySelector(".c"),
        ctx = c.getContext("2d");
    
    c.width = innerWidth;
    c.height = innerHeight;

    var lines = [],
        maxSpeed = 1,
        spacing = 3,
        xSpacing = 0,
        n = innerWidth / spacing,
        colors = ["#3b8686", "#79bda", "#a8dba8", "#0b486b", "#1F7BA7",, "##8E6219"],
        // colors = ["#E82E0F", "#E75B43", "#E77F43", "#E7BE43", "#E7E243",],
        i;

    for (i=0; i<n; i++) {
        xSpacing += spacing;

        lines.push({
            x: xSpacing,
            y: Math.round(Math.random() * c.height),
            width: 1,
            height: Math.round(Math.random() * (innerHeight / 20)),
            speed: Math.random() * maxSpeed + 1,
            color: colors[Math.floor(Math.random() * colors.length)]

        });
    }

    // function write() {
    //     ctx.font = "20px seri";
    //     // ctx.font = "30px Comic Sans MS";
    //     ctx.fillStyle = "white";
    //     ctx.textAlign = "center";
    //     ctx.textBaseline = "middle";
    //     ctx.fillText("Welcome to Mita's Website", c.width/2, c.height/2);
    // }

    function draw() {
        var i;
        ctx.clearRect(0, 0, c.width, c.height);

        for (i=0; i<n; i++) {
            ctx.fillStyle = lines[i].color;
            ctx.fillRect(lines[i].x, lines[i].y, lines[i].width, lines[i].height);
            lines[i].y += lines[i].speed;

            if (lines[i].y > c.height)
                lines[i].y = 0 - lines[i].height;
        }

        requestAnimationFrame(draw);
        // requestAnimationFrame(write);
    }

    // write();
    draw();

}());

(function() {

    var c = document.querySelector(".c2"),
        ctx = c.getContext("2d");
    
    c.width = innerWidth;
    c.height = innerHeight;

    var lines = [],
        maxSpeed = 1,
        spacing = 3,
        xSpacing = 0,
        n = innerWidth / spacing,
        colors = ["#3b8686", "#79bda", "#a8dba8", "#0b486b", "#1F7BA7",],
        // colors = ["#E82E0F", "#E75B43", "#E77F43", "#E7BE43", "#E7E243",],
        i;

    for (i=0; i<n; i++) {
        xSpacing += spacing;

        lines.push({
            x: xSpacing,
            y: Math.round(Math.random() * c.height),
            width: 1,
            height: Math.round(Math.random() * (innerHeight / 30)),
            speed: Math.random() * maxSpeed + 1,
            color: colors[Math.floor(Math.random() * colors.length)]

        });
    }

    // function write() {
    //     ctx.font = "20px seri";
    //     // ctx.font = "30px Comic Sans MS";
    //     ctx.fillStyle = "white";
    //     ctx.textAlign = "center";
    //     ctx.textBaseline = "middle";
    //     ctx.fillText("Welcome to Mita's Website", c.width/2, c.height/2);
    // }

    function draw() {
        var i;
        ctx.clearRect(0, 0, c.width, c.height);

        for (i=0; i<n; i++) {
            ctx.fillStyle = lines[i].color;
            ctx.fillRect(lines[i].x, lines[i].y, lines[i].width, lines[i].height);
            lines[i].y += lines[i].speed;

            if (lines[i].y > c.height)
                lines[i].y = 0 - lines[i].height;
        }

        requestAnimationFrame(draw);
        // requestAnimationFrame(write);
    }

    // write();
    draw();

}());