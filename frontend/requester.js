function makeRequests() {
    // let start = new Date().getTime();

    for (let i=1; i <= 10; i++) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                // $("#requestResult").html(xhttp.responseText);
                console.log(`finished req ${i}`);
            }
        }
        xhttp.open("GET", "http://localhost:8080/server.js", true);
        xhttp.send();
    }
    // let end = new Date().getTime();
}