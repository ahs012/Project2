$(document).ready(function () {


    
    $.get("/api/jobs", function (data) {

        console.log(data);
        if (data.length !== 0) {

            for (var i = 0; i < data.length; i++) {
                var row = $("<div>");
                row.addClass("newJobs");
                
                row.append("---------------------------------------------");
                row.append("<p>Job Name: " + data[i].name + "</p>");
                row.append("<p>Job Position: " + data[i].position + "</p>");
                row.append("<p>Job location: " + data[i].location + "</p>");
                row.append("<p>Job type: " + data[i].type + "</p>");
                row.append("<p>Job Start Date: " + data[i].startDate + "</p>");
                row.append("<p>Job End Date: " + data[i].startDate + "</p>");
                row.append("<p>Job Contact: " + data[i].contact + "</p>");
                row.append("---------------------------------------------");

                $("#job-area").prepend(row);
            }
        }

    });

    $(document).on("click", ".submit", (event) => createNewJob(event))

    function createNewJob() {
        event.preventDefault();

        var newJob = {
            position: $("#position").val().trim(),
            name: $("#name").val().trim(),
            location: $("#location").val().trim(),
            type: $("#interest").val().trim(),
            startDate: $("#startDate").val().trim(),
            endDate: $("#endDate").val().trim(),
            contact: $("#contact").val().trim()
        };
        console.log(newJob);

        $.post("/api/jobs", newJob)

            .then(function () {
                var row = $("<div>");
                row.addClass("newJobs");

                row.append("---------------------------------------------");
                row.append("<p>Job Name: " + newJob.name + "</p>");
                row.append("<p>Job Position: " + newJob.position + "</p>");
                row.append("<p>Job location: " + newJob.location + "</p>");
                row.append("<p>Job type: " + newJob.type + "</p>");
                row.append("<p>Job Start Date: " + newJob.startDate + "</p>");
                row.append("<p>Job End Date: " + newJob.startDate + "</p>");
                row.append("<p>Job Contact: " + newJob.contact + "</p>");
                row.append("---------------------------------------------");

                $("#job-area").prepend(row);
            });

    };
})
