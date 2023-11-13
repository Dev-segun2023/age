$(document).ready(function () {



    $("#light").click(function () {
        $("body").css("background-color", "white")
    })
    $("#dark").click(function () {
        $("body").css("background-color", "black")
    })

    $("#btn").click(function () {
        let datta = $("#date").val()

       


        if (datta == "") {
            $("#display").text("pls pick a date");
        } else {
            let year = new Date().getFullYear() - new Date(datta).getFullYear()
            let month = new Date().getMonth() - new Date(datta).getMonth()
            let day = new Date().getDay() - new Date(datta).getDay()
            let howold = $("#display").text(`you are ${year}yrs , ${month}months & ${day}days old`)
        }

        
    })
})



