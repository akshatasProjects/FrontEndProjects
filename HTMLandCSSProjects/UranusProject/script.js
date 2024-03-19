let ctx = document.getElementById("myChart").getContext("2d");
let myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ],
        datasets: [
            {
                label: "Price",
                data: [2, 9, 3, 17, 6, 3, 7],
                backgroundColor: "",
                
            },
            {
                label: "Vol",
                data: [2, 2, 5, 5, 2, 1, 10],
                backgroundColor: "",
                
            },
        ],
    },
});