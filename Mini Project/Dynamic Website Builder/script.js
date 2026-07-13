function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div> 
</div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithSayanjit", 560000, 7, "31:22", "https://scontent.fccu13-1.fna.fbcdn.net/v/t39.30808-1/468547492_545401021682673_3350463793003797956_n.jpg?stp=dst-jpg_tt6&cstp=mx960x957&ctp=s200x200&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=3MOBzP8XyfkQ7kNvwEstTlM&_nc_oc=AdpXn2aRiZp71iHdKc_YBBbSzH2w0Ro2x-JdSENozjtIzGcbe-Oy4nA1Pp_yTjEmuUfU4g7QwxJcutQprLHyoCj1&_nc_zt=24&_nc_ht=scontent.fccu13-1.fna&_nc_gid=E30xtmC-rzRGw32y33fd1A&_nc_ss=7b2a8&oh=00_AQCr8kA_-qjG6DI0pam5hMiydtgOxfoh33g0NiNYr6AyTw&oe=6A512D9F")
