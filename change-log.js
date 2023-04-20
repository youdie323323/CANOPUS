var changeLog = [
    "Version 1.0: Initial release",
    "Version 1.1: Bug fixes",
    "Version 1.2: New feature added"
];

var changeLogList = document.getElementById("change-log");

for (var i = 0; i < changeLog.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = changeLog[i];
    changeLogList.appendChild(listItem);
}
