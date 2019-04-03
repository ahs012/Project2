$(document).ready(function () {

    $(document).on("click", "#newJob", (event) => createNewJob(event))
    // event.preventDefault();

    function createNewJob() {
        event.preventDefault();

        var newJob = {
            position: $("#position").val().trim(),
            name: $("#name").val().trim(),
            location: $("#location").val().trim(),
            type: $("#type").val().trim(),
            startDate: $("#startDate").val().trim(),
            endDate: $("#endDate").val().trim(),
            contact: $("#contact").val().trim()
        };
        console.log(newJob);
        
        $.post("/api/jobs", newJob);
        getJobs();
    };

    
    // var jobContainer = (".job-container");
    // var jobs;
    // function getJobs() {
    //     $.get("/api/jobs", function (data) {
    //         initializeRows();
    //     })
    // }
    // getJobs();

    // function initializeRows() {
    //     jobContainer.empty();
    //     var postsToAdd = [];
    //     for (var i = 0; i < jobs.length; i++) {
    //         postsToAdd.push(createNewRow(jobs[i]));
    //     }
    //     jobContainer.append(postsToAdd);
    // }

    // // This function constructs a post's HTML
    // function createNewRow(post) {
    //     var newPostCard = $("<div>");
    //     newPostCard.addClass("card");
    //     var newPostCardHeading = $("<div>");
    //     newPostCardHeading.addClass("card-header");
    //     var deleteBtn = $("<button>");
    //     deleteBtn.text("x");
    //     deleteBtn.addClass("delete btn btn-danger");
    //     var editBtn = $("<button>");
    //     editBtn.text("EDIT");
    //     editBtn.addClass("edit btn btn-default");
    //     var newJobTitle = $("<h2>");
    //     var newPostCategory = $("<h5>");
    //     newPostCategory.text(post.category);
    //     newPostCategory.css({
    //         float: "right",
    //         "font-weight": "700",
    //         "margin-top":
    //             "-15px"
    //     });
    //     var newPostCardBody = $("<div>");
    //     newPostCardBody.addClass("card-body");
    //     var newPostBody = $("<p>");
    //     newJobTitle.text(newjob.name);
    //     newJobPosition.text(newjob.position);
    //     newJobLocation.text(newjob.location);
    //     newJobType.text(newjob.type);
    //     newJobStart.text(newjob.startDate);
    //     newJobEnd.text(newjob.endDate);

    //     newPostCardHeading.append(deleteBtn);
    //     newPostCardHeading.append(editBtn);
    //     newPostCardHeading.append(newJobTitle);
    //     newPostCardHeading.append(newPostCategory);
    //     newPostCardBody.append(newJobPosition,newJobLocation,newJobType,newJobStart,newJobEnd);
    //     newPostCard.append(newPostCardHeading);
    //     newPostCard.append(newPostCardBody);
    //     newPostCard.data("post", jobs);
    //     return newPostCard;
    // };

    
})