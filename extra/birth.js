function Calculate(){
    var day = parseInt(document.getElementById("day").value);
    var month = document.getElementById("Month").value;
    var year = document.getElementById("year").value;
    
    if(day <= 31){
        if((month == "Mar" && day >= 21) || (month == "April" && day <= 19)){
            window.location.href = "Zodaic.html#aries";
        }
        else if((month == "April" && day >= 20) || (month == "May" && day <= 20)){
            window.location.href = "Zodaic.html#taurus";
        }
        else if((month == "May" && day >= 21) || (month == "June" && day <= 20)){
            window.location.href = "Zodaic.html#gemini";
        }
        else if((month == "June" && day >= 21) || (month == "July" && day <= 22)){
            window.location.href = "Zodaic.html#cancer";
        }
        else if((month == "July" && day >= 23) || (month == "Aug" && day <= 22)){
            window.location.href = "Zodaic.html#leo";
        }
        else if((month == "Aug" && day >= 23) || (month == "Sep" && day <= 22)){
            window.location.href = "Zodaic.html#virgo";
        }
        else if((month == "Sep" && day >= 23) || (month == "Oct" && day <= 22)){
            window.location.href = "Zodaic.html#libra";
        }
        else if((month == "Oct" && day >= 23) || (month == "Nov" && day <= 21)){
            window.location.href = "Zodaic.html#scor";
        }
        else if((month == "Nov" && day >= 22) || (month == "Dec" && day <= 21)){
            window.location.href = "Zodaic.html#sagi";
        }
        else if((month == "Dec" && day >= 22) || (month == "Jan" && day <= 19)){
            window.location.href = "Zodaic.html#capri";
        }
        else if((month == "Jan" && day >= 20) || (month == "Feb" && day <= 18)){
            window.location.href = "Zodaic.html#aqua";
        }else{
            window.location.href = "Zodaic.html#pisces";
        }
    }else{
        alert("You gotta be kidding me bro! 🙃;");
    }
    
}
function Clear(){
    // Clear input fields and reset output
    document.getElementById("day").value = "";
    document.getElementById("year").value = "";
    document.getElementById("Demo").innerHTML = "Sample";
}