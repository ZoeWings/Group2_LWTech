



var NinetyCredit;
var workEXP;
var timeToFinish;
var careerGoal;
var planForUni;

function sendMail() {
    var link = "mailto:S-Rowan.Conway@lwtech.edu"
        //  + "?cc=myCCaddress@example.com"
        + "?subject=" + encodeURIComponent("Student Help Request")
        + "&body=" + encodeURIComponent(document.getElementById('myText').value);

    window.location.href = link;
}

function results() {
    NinetyCredit = document.getElementById("NineCredit").value;
    previousWork = document.getElementById("workEXP").value;
    timeGoal = document.getElementById("timeToFinish").value;
    careerPlan = document.getElementById("careerGoal").value;
    university = document.getElementById("planForUni").value;
    // console.log(NinetyCredit);

    // Priority 1
    priority1 = document.getElementById("priority1").value;
    if (priority1 == "Length of the course taken") {
        if (timeGoal == "1 year or less") {
            document.getElementById("recommendedText").innerHTML = "Certificates";
            document.getElementById("link").innerHTML = "Link";
        }
        else if (timeGoal == "2 years") {
            if (NinetyCredit == "yes") {
                document.getElementById("recommendedText").innerHTML = "Computing and Software Development, BAS"
                document.getElementById("link").innerHTML = "Link";
            }
            else {
                document.getElementById("recommendedText").innerHTML = "Computing and Software Development, AAS-T";
                document.getElementById("link").innerHTML = "Link";
            }
        }
        else {
            document.getElementById("recommendedText").innerHTML = "Computer Science DTA/MRP" + ", " + "Computer Science, BS";
            document.getElementById("link").innerHTML = "Link";
        }
    }
    else if (priority1 == "One of the CSD careers") {
        if (careerPlan == "Computer Science Career") {
            document.getElementById("recommendedText").innerHTML = "Computer Science DTA/MRP" + ", " + "Computer Science, BS";
            document.getElementById("link").innerHTML = "Link";
        }
        else if (careerPlan == "Software Developer") {
            document.getElementById("recommendedText").innerHTML = "Computing and Software Development, BAS" + ", " + "Computing and Software Development, AAS-T";
            document.getElementById("link").innerHTML = "Link";
        }
        else {
            document.getElementById("recommendedText").innerHTML = "Certificates";
            document.getElementById("link").innerHTML = "Link";
        }
    }
    else if (priority1 == "Transfer to University") {
        if (university == "yes") {
            document.getElementById("recommendedText").innerHTML = "Computer Science DTA/MRP" + ", " + "Computing and Software Development, AAS-T";
            document.getElementById("link").innerHTML = "Link";
        }
        else {
            document.getElementById("recommendedText").innerHTML = "Computing and Software Development, BAS" + ", " + "Computer Science, BS";
            document.getElementById("link").innerHTML = "Link";
        }
    }
    else if (priority1 == "Expand upon education(already have credits)") {
        if (NinetyCredit == "yes") {
            document.getElementById("recommendedText").innerHTML = "Computing and Software Development, BAS";
            document.getElementById("link").innerHTML = "Link";
        }
        else {
            document.getElementById("recommendedText").innerHTML = "Computer Science DTA/MRP" + ", " + "Computing and Software Development, AAS-T";
            document.getElementById("link").innerHTML = "Link";
        }
    }
    else {
        if (previousWork == "yes") {
            document.getElementById("recommendedText").innerHTML = "Certificates";
            document.getElementById("link").innerHTML = "Link";
        }
        else {
            document.getElementById("recommendedText").innerHTML = "Computer Science DTA/MRP" + ", " + "Computing and Software Development, AAS-T";
            document.getElementById("link").innerHTML = "Link";
        }
    }


    // Priority 2
    priority2 = document.getElementById("priority2").value;
    if (priority2 == "Length of the course taken") {
        if (timeGoal == "1 year or less") {
            if (!document.getElementById("recommendedText").innerHTML.includes("Certificates")) {
                document.getElementById("otherOption1").innerHTML = "Certificates"//+", ";
                // document.getElementById("otherOption2").innerHTML = "Computing and Software Development, AAS-T";
            }
        }
        else if (timeGoal == "2 years") {
            if (!document.getElementById("recommendedText").innerHTML.includes("Certificates")) {
                document.getElementById("otherOption1").innerHTML = "Certificates";
            }
            if (!document.getElementById("recommendedText").innerHTML.includes("Computing and Software Development, AAS-T"))
                document.getElementById("otherOption2").innerHTML = ", Computing and Software Development, AAS-T";
        }
        else {
            if (!document.getElementById("recommendedText").innerHTML.includes("Computing and Software Development, BAS")) {
                document.getElementById("otherOption1").innerHTML = "Computing and Software Development, BAS";
            }
            if (!document.getElementById("recommendedText").innerHTML.includes("Computer Science DTA/MRP"))
                document.getElementById("otherOption2").innerHTML = ", Computer Science DTA/MRP";
        }
    }
    else if (priority2 == "One of the CSD careers") {
        if (careerPlan == "Computer Science Career") {
            if (document.getElementById("recommendedText").innerHTML.includes("Computer Science, BS")) {
                document.getElementById("otherOption1").innerHTML = "Computer Science, BS";
            }
            if (!document.getElementById("recommendedText").innerHTML.includes("Computer Science DTA/MRP"))
                document.getElementById("otherOption2").innerHTML = ", Computer Science DTA/MRP";
        }
        else if (careerPlan == "Software Developer") {
            if (!document.getElementById("recommendedText").innerHTML.includes("Computing and Software Development, BAS"))
                document.getElementById("otherOption1").innerHTML = "Computing and Software Development, BAS";

            if (!document.getElementById("recommendedText").innerHTML.includes("Computing and Software Development, AAS-T"))
                document.getElementById("otherOption2").innerHTML = ", Computing and Software Development, AAS-T";
        }
        else {
            if (!document.getElementById("recommendedText").innerHTML.includes("Certificates"))
                document.getElementById("otherOption1").innerHTML = "Certificates"//+", ";
            //document.getElementById("otherOption2").innerHTML = "Computing and Software Development, AAS-T";
        }
    }
    else if (priority2 == "Transfer to University") {
        if (university == "yes") {
            if (!document.getElementById("recommendedText").innerHTML.includes("Computer Science DTA/MRP"))
                document.getElementById("otherOption1").innerHTML = "Computer Science DTA/MRP" + ", ";

            if (!document.getElementById("recommendedText").innerHTML.includes("Computing and Software Development, AAS-T"))
                document.getElementById("otherOption2").innerHTML = "Computing and Software Development, AAS-T";
        }
        else {
            if (!document.getElementById("recommendedText").innerHTML.includes("Computing and Software Development, BAS"))
                document.getElementById("otherOption1").innerHTML = "Computing and Software Development, BAS" + ", ";

            if (!document.getElementById("recommendedText").innerHTML.includes("Computer Science, BS"))
                document.getElementById("otherOption2").innerHTML = "Computer Science, BS";
        }
    }
    else if (priority2 == "Expand upon education(already have credits)") {
        if (NinetyCredit == "yes") {
            if (!document.getElementById("recommendedText").innerHTML.includes("Computing and Software Development, BAS"))
                document.getElementById("otherOption1").innerHTML = "Computing and Software Development, BAS" + ", ";

            if (!document.getElementById("recommendedText").innerHTML.includes("Computer Science, BS"))
                document.getElementById("otherOption2").innerHTML = "Computer Science, BS" + ", " + "Certificates";
        }
        else {
            if (!document.getElementById("recommendedText").innerHTML.includes("Computing and Software Development, AAS-T"))
                document.getElementById("otherOption1").innerHTML = "Computing and Software Development, AAS-T" + ", ";

            if (!document.getElementById("recommendedText").innerHTML.includes("Computer Science DTA/MRP"))
                document.getElementById("otherOption2").innerHTML = "Computer Science DTA/MRP";
        }
    }
    else if (priority2 == "Expand upon education(already have work experience in CSD)") {
        if (previousWork == "yes") {
            if (!document.getElementById("recommendedText").innerHTML.includes("Certificates"))
                document.getElementById("otherOption1").innerHTML = "Certificates" + ", ";

            if (!document.getElementById("recommendedText").innerHTML.includes("Computing and Software Development, BAS"))
                document.getElementById("otherOption2").innerHTML = "Computing and Software Development, BAS" + ", " + "Computing and Software Development, AAS-T";
        }
        else {
            if (!document.getElementById("recommendedText").innerHTML.includes("Computer Science DTA/MRP"))
                document.getElementById("otherOption1").innerHTML = "Computer Science DTA/MRP" + ", ";

            if (!document.getElementById("recommendedText").innerHTML.includes("Computer Science, BS"))
                document.getElementById("otherOption2").innerHTML = "Computer Science, BS";
        }
    }







    // if (previousWork == "yes")
    // {
    // 	document.getElementById("recommendedText").innerHTML = "Certificates";
    // 	document.getElementById("link").innerHTML = "Link";
    // 	document.getElementById("otherOption1").innerHTML = "Computing and Software Development, BAS"+", ";
    // 	document.getElementById("otherOption2").innerHTML = "Computing and Software Development, AAS-T";
    // }
    // else 
    // {
    // 	document.getElementById("recommendedText").innerHTML = "Computing and Software Development, BAS";
    // 	document.getElementById("link").innerHTML = "Link";
    // document.getElementById("otherOption1").innerHTML = "Certificates"+", ";
    // document.getElementById("otherOption2").innerHTML = "Computing and Software Development, AAS-T";
    // }

    // document.getElementById("recommendedText").innerHTML = NinetyCredit;
    // document.getElementById("link").innerHTML = "Link";
    // document.getElementById("otherOption1").innerHTML = NinetyCredit+", ";
    // document.getElementById("otherOption2").innerHTML = NinetyCredit;
}
