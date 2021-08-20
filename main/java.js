// ====my API key====
const api = {
    key: "c40165d1f82d20f7e6790923e250c9a8",
    base: "https://home.openweathermap.org/api_keys"
}
console.log("start 1");

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
console.log("start 2");

// ====functions====

// let city = "lahore";
let date = new Date();
// console.log(String(date).split(" "));
let aa1 = `${String(date).split(" ")[0]}, ${String(date).split(" ")[1]} ${String(date).split(" ")[2]} ${String(date).split(" ")[3]}`;
// console.log(aa1);
document.getElementsByClassName("date")[0].innerText = aa1;

function getData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e500e16c6e7a46f7da2ce99ac36b9ac6`).then((resp) => {
        return resp.json();
    }).then((data) => {
        document.getElementsByClassName("city")[0].innerText = data.name;
        document.getElementsByClassName("degree")[0].innerText = data.main.temp;
        document.getElementsByClassName("aa")[0].innerText = data.main.temp_max;
        document.getElementsByClassName("bb")[0].innerText = data.main.temp_min;
        document.getElementsByClassName("ww")[0].innerText = data.weather[0].main;
        // console.log(aa1);
    })
}

function ab() {
    console.log(document.getElementsByClassName("search")[0].value);
    getData(document.getElementsByClassName("search")[0].value);

}

// if (city === "404") {
//     console.log("wrong");
//     const error = document.querySelector(".error");
//     error.textContent = "Please anter a valid city";
//     // search.value = "";
// }
// else {
//     console.log("correct");
    // const city = document.querySelector(".city")
    // city.innerText = `${response.name},${response.sys.country}`;

    // const today = new Date();
    // const date = document.querySelector(".date");
    // date.innerText = dateFunction(today);

    // const temp = documemt.querySelector(".temp");
    // temp.innerHTML = `Temp: ${Mah.round{response.main,temp}} <span>°C</span>`

// };

// function displayData(response) {
//     console.log(response);
//     console.log("response");


// }

// function getInput(event) {
//     event.preventDefault();
//     console.log("start 3");

//     if (event.type == "click") {
//         getData(search.value);
//         console.log(search.value);
//         // console.log("if");

//     }
// }
// function getData() {
//     fetch(`${api.base}weather?q=${search.value}&
//     units=metric&appid=${api.key}`)
//         .then(response => {
//             return response.json();
//         }).then(displayData);
// }


