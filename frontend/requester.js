function makeRequests() {
    // let start = new Date().getTime();

    for (let i=1; i <= 5000; i++) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200 && i == 1000) {
                $("#requestResult").html(xhttp.responseText);
            }
        }
        xhttp.open("GET", "http://localhost:8080/server.js", true);
        xhttp.send();
    }
    // let end = new Date().getTime();
}