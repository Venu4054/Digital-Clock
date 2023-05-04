
function myTime() {
    let d = new Date()
    hh = d.getHours()
    mm = d.getMinutes()
    ss = d.getSeconds()
    if (hh > 12) {
        hh -= 12;
    } else if (hh === 0) {
        hh = 12;
    }
    document.getElementById("hh").innerHTML = `${hh}`
    document.getElementById("mm").innerHTML = `${mm}`
    document.getElementById("ss").innerHTML = `${ss}`
    if (hh > 11) {
        document.getElementById("meridian").innerHTML = `PM`
    } else {
        document.getElementById("meridian").innerHTML = `AM`
    }
}
setInterval(myTime, 1000)