function makeRequests() {
    let start = new Date().getTime();

    for (let i=1; i <= 1000000; i++) {
        var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = () => {
        //     if (xhttp.readyState == 4 && xhttp.status == 200) {
        //     }
        // }
        xhttp.open("GET", "http://localhost:8080/server.js");
        xhttp.send();
    }

    let end = new Date().getTime();
    const time = end - start;
    $("#requestResult").html(time);
}