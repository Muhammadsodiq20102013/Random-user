const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");

const LoadingButton = (toggle) => {
    if (toggle) {
        overlay.classList.remove("hidden");
    } else {
        overlay.classList.add("hidden");
    }
};
const getData = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            if (request.readyState < 4) {
                LoadingButton(true);
            } else if (request.readyState == 4 && request.status == 200) {
                const data = JSON.parse(request.responseText);
                resolve(data.results);
                LoadingButton(false);
            } else if (request.readyState == 4) {
                reject("Error !!!");
                LoadingButton(false);
            }
        });

        request.open("GET", resource);
        request.send();
    });
};

const reload = () => {
    getData(API)
        .then((data) => {
            UpdateUI(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

document.addEventListener("DOMContentLoaded", reload);
