import * as Utils from '../utility/Utils';

export function postSample() {
    return new Promise(
        function (resolve, reject) {
            let data = {"first": Utils.randomInteger(5, 25), "second": Utils.randomInteger(50, 250)};

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

export function getAll() {
    return new Promise(
        function (resolve, reject) {
            let header = {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                },
            };

            let apiURL = "http://localhost:8080/API/getAll";

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

            let apiURL = "http://localhost:8080/API/hello?name=Cody";

            fetch(apiURL, header)
                .then(result => resolve(result));
        }
    );
}
