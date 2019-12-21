export function getSample() {
    return new Promise(
        function (resolve, reject) {
            let data = {"first": 5, "second": 4};

            let header = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            };

            let apiURL = "http://localhost:8080/API/sample";

            fetch(apiURL, header)
                .then(result => resolve(result))
                .catch(err => reject(err));
        }
    );
}

export function getHello() {
    return new Promise(
        function (resolve, reject) {
            let header = {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                },
            };

            fetch("http://localhost:8080/API/hello?name=Cody", header)
                .then(result => resolve(result));
        }
    );
}
