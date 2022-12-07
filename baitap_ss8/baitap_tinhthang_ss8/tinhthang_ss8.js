let month_1 = "1";
let month_2 = "2";
let month_3 = "3";
let month_4 = "4";
let month_5 = "5";
let month_6 = "6";
let month_7 = "7";
let month_8 = "8";
let month_9 = "9";
let month_10 = "10";
let month_11 = "11";
let month_12 = "12";
function tinhsongay(){
    let month = document.getElementById("month").value;
    switch (month) {
        case month_1:
        case month_3:
        case month_5:
        case month_7:
        case month_8:
        case month_10:
        case month_12:
         document.getElementById("check").innerHTML = "Tháng " + month + " Có 31 ngày ";
            break;
        case month_4:
        case month_6:
        case month_9:
        case month_11:
            document.getElementById("check").innerHTML = "Tháng " + month + " Có 30 ngày ";
            break;
        case month_2:
            document.getElementById("check").innerHTML = "Tháng " + month + " Có 28 hoặc 29 ngày ";
            break;
    }
}