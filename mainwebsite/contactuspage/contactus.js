var messageusTab = document.getElementById('messageus');
messageusTab.addEventListener("click", messageClicked);

var volunteerTab = document.getElementById('volunteer');
volunteerTab.addEventListener("click", volunteerClicked);

var assistanceTab = document.getElementById('assistance');
assistanceTab.addEventListener("click", assistanceClicked);

var connectForm = document.getElementById('connectForm');
var volunteerForm = document.getElementById('volunteerForm');
var assistanceForm = document.getElementById('assistanceForm');

volunteerForm.style.display = "none";
assistanceForm.style.display = "none";

function messageClicked(){
    messageusTab.style.backgroundColor = "#A7D6D0";
    volunteerTab.style.backgroundColor = "#D8F2EF";
    assistanceTab.style.backgroundColor = "#D8F2EF";

    connectForm.style.display = "block";
    volunteerForm.style.display = "none";
    assistanceForm.style.display = "none";
}

function volunteerClicked(){
    messageusTab.style.backgroundColor = "#D8F2EF";
    volunteerTab.style.backgroundColor = "#A7D6D0";
    assistanceTab.style.backgroundColor = "#D8F2EF";

    connectForm.style.display = "none";
    volunteerForm.style.display = "block";
    assistanceForm.style.display = "none";
}

function assistanceClicked(){
    messageusTab.style.backgroundColor = "#D8F2EF";
    volunteerTab.style.backgroundColor = "#D8F2EF";
    assistanceTab.style.backgroundColor = "#A7D6D0";

    connectForm.style.display = "none";
    volunteerForm.style.display = "none";
    assistanceForm.style.display = "block";
}
