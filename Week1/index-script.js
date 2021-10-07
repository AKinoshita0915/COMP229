// JavaScript source code
// Term information variables
var term = "Fall";
var course = "COMP125";
var totalWeek = 1;
var numOfAssignment = 0;
var numOfSubjects = 6;
var directory = `./${term}/${course}/`; // parse("%s/%s/"term, course)

function defineDir() {
    // WORK IN PROGRESS
    var pageName = document.getElementsByName("PageName")[0].content;
    if (pageName === "Home") {
        directory = ""
    }
    else if (pageName === "Week") {
        directory = "Week"
    }
}

function menuBuilder() {
    // Header
    var p1, p2;
    p1 = document.getElementsByTagName("header")[0].appendChild(document.createElement("p"));
    p1.id = "header";
    p1.appendChild(document.createTextNode("comp 125 - client-side web development - summer 2021"));
    p2 = document.getElementsByTagName("header")[0].appendChild(document.createElement("p"));
    p2.id = "sub-header";
    p2.appendChild(document.createTextNode("Aiju Kinoshita - Stu.ID: 301137120"))
    document.getElementsByTagName("header")[0].appendChild(document.createElement("hr"));

    // Navigaters
    var nv1, nv2, nv3;
    nv1 = document.getElementsByTagName("header")[0].appendChild(document.createElement("nav"));
    document.getElementsByTagName("header")[0].appendChild(document.createElement("hr"))
    nv2 = document.getElementsByTagName("header")[0].appendChild(document.createElement("nav"));
    document.getElementsByTagName("header")[0].appendChild(document.createElement("hr"))
    nv3 = document.getElementsByTagName("header")[0].appendChild(document.createElement("nav"));
    document.getElementsByTagName("header")[0].appendChild(document.createElement("hr"))
    for (var n = 0; n <= totalWeek; n++) {
        nv1.appendChild(document.createElement("a"));
    }
    for (var n = 0; n < numOfAssignment; n++) {
        nv2.appendChild(document.createElement("a"));
    }
    for (var n = 0; n <= numOfSubjects; n++) {
        nv3.appendChild(document.createElement("a"));
    }
    nv3.appendChild(document.createElement("a"));
    nv3.getElementsByTagName("a")[numOfSubjects + 1].id = "previous";
    for (var n = 0; n <= totalWeek; n++) {
        if (n === 0) {
            nv1.getElementsByTagName("a")[n].innerHTML = "HOME";
        }
        else if (n < 10) {
            nv1.getElementsByTagName("a")[n].innerHTML = "Week0" + n;
        }
        else {
            nv1.getElementsByTagName("a")[n].innerHTML = "Week" + n;
        }
    }
    for (var n = 0; n < numOfAssignment; n++) {
        nv2.getElementsByTagName("a")[n].innerHTML = "Assignment" + (n + 1);
    }
    nv3.getElementsByTagName("a")[0].innerHTML = "MATH 185";
    nv3.getElementsByTagName("a")[1].innerHTML = "COMP 122";
    nv3.getElementsByTagName("a")[2].innerHTML = "COMP 125";
    nv3.getElementsByTagName("a")[3].innerHTML = "COMP 123";
    nv3.getElementsByTagName("a")[4].innerHTML = "COMM 171";
    nv3.getElementsByTagName("a")[5].innerHTML = "COMP 301";
    nv3.getElementsByTagName("a")[6].innerHTML = "COMP 225";
    nv3.getElementsByTagName("a")[7].innerHTML = "Summer 2021";

    // Hyper-Link Referencing
    nv1.getElementsByTagName("a")[4].href = directory + "Week4/week4.html";

    nv2.getElementsByTagName("a")[0].href = directory + "Assignment1/Assignment1/Assignment1/Assignment1.html";
    nv2.getElementsByTagName("a")[1].href = directory + "Assignment2/Assignment2/Assignment2.html";
    nv2.getElementsByTagName("a")[2].href = directory + "Assignment3/photos.htm";
    nv2.getElementsByTagName("a")[3].href = directory + "Assignment4/assignment4.html";
    nv2.getElementsByTagName("a")[4].href = directory + "Assignment5/BugSmasher.html"
    nv2.getElementsByTagName("a")[5].href = directory + "Assignment6/Assignment6.html";

    nv3.getElementsByTagName("a")[7].href = "index-winter2021.html";

}

window.addEventListener("load", menuBuilder, false);

/* ========== Copy-Paste replace note =============
 * document.createTextNode
 * document.getElementsByTagName("header")[0]
 * appendChild(document.createElement("p"))
 * appendChild(document.createElement("hr"))
 * appendChild(document.createElement("nav"))
 * getElementsByTagName("a")[].innerHTML
 * getElementsByTagName("a")[].href
 */