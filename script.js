var ENT = document.getElementById("ENTbutton");
ENT.onclick = function() {
    var ENTname = document.getElementById("ENTsearch").value;
    window.open("https://whatfix.com/" + ENTname);
}

var JIRA = document.getElementById("JIRAbutton");
JIRA.onclick = function() {
    var TicketID = document.getElementById("JIRAsearch").value;
    if (TicketID.indexOf('-') > -1 == false) {
        var re = /(?<=[a-zA-Z])(?=\d)/;
        var result = TicketID.split(re);
        TicketID = result[0] + '-' + result[1];
    }
    window.open("https://whatfix.atlassian.net/browse/" + TicketID);
}

var Confluence = document.getElementById("ConfluenceSearchButton");
Confluence.onclick = function() {
    var ConfluenceString = document.getElementById("ConfluenceSearchBar").value;
    window.open("https://whatfix.atlassian.net/wiki/search?text=" + ConfluenceString);
}

var StackOverflow = document.getElementById("SOSubmit");
StackOverflow.onclick = function() {
    var SOstring = document.getElementById("SOSearchBar").value;
    window.open("https://stackoverflow.com/search?q=" + SOstring);
}

var Support = document.getElementById("Supportbutton");
Support.onclick = function() {
    window.open("https://support.whatfix.com/");
}

var Monitor = document.getElementById("Monitorbutton");
Monitor.onclick = function() {
    window.open("https://monitor.whatfix.com/");
}

var Intranet = document.getElementById("Intranetbutton");
Intranet.onclick = function() {
    window.open("https://sites.google.com/whatfix.com/policies/home");
}

var Footer = document.getElementById("Footer");
Footer.onclick = function() {
    window.open("https://www.linkedin.com/in/jahnaviprasad/");
}