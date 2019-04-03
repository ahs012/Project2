$(document).ready(function () {

    var discoverContainter = $(".discover-container");
    var postCategorySelect = $("#category");

    $(document).on("click", "button.delete", handlePostDelete);
    $(document).on("click", "button.edit", handlePostEdit);

    postCategorySelect.on("change", handleCategoryChange);

    var posts;

    // This function grabs posts from the database and updates the view
    function getPosts(category) {
        var categoryString = category || "";
        if (categoryString) {
            categoryString = "/category/" + categoryString;
        }
        $.get("/api/posts" + categoryString, function (data) {
            console.log("Posts", data);
            posts = data;
            if (!posts || !posts.length) {
                displayEmpty();
            }
            else {
                initializeRows();
            }
        });
    }



    // This function does an API call to delete posts
    function deletePost(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/posts/" + id
        })
            .then(function () {
                getPosts(postCategorySelect.val());
            });
    }

    // InitializeRows handles appending all of our constructed post HTML inside
    // blogContainer
    function initializeRows() {
        blogContainer.empty();
        var postsToAdd = [];
        for (var i = 0; i < posts.length; i++) {
            postsToAdd.push(createNewRow(posts[i]));
        }
        blogContainer.append(postsToAdd);
    }

    getPosts();

    // This function constructs a post's HTML
    function createNewRow(post) {
        var newPostCard = $("<div>");
        newPostCard.addClass("card");
        var newPostCardHeading = $("<div>");
        newPostCardHeading.addClass("card-header");
        var deleteBtn = $("<button>");
        deleteBtn.text("x");
        deleteBtn.addClass("delete btn btn-danger");
        var editBtn = $("<button>");
        editBtn.text("EDIT");
        editBtn.addClass("edit btn btn-default");
        var newPostTitle = $("<h2>");
        var newPostDate = $("<small>");
        var newPostCategory = $("<h5>");
        newPostCategory.text(post.category);
        newPostCategory.css({
            float: "right",
            "font-weight": "700",
            "margin-top":
                "-15px"
        });
        var newPostCardBody = $("<div>");
        newPostCardBody.addClass("card-body");
        var newPostBody = $("<p>");
        newPostTitle.text(post.title + " ");
        newPostBody.text(post.body);
        // var formattedDate = new Date(post.createdAt);
        // formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        // newPostDate.text(formattedDate);
        newPostTitle.append(newPostDate);
        newPostCardHeading.append(deleteBtn);
        newPostCardHeading.append(editBtn);
        newPostCardHeading.append(newPostTitle);
        newPostCardHeading.append(newPostCategory);
        newPostCardBody.append(newPostBody);
        newPostCard.append(newPostCardHeading);
        newPostCard.append(newPostCardBody);
        newPostCard.data("post", post);
        return newPostCard;
    }

    function handlePostDelete() {
        var currentPost = $(this)
          .parent()
          .parent()
          .data("post");
        deletePost(currentPost.id);
      };

      function handleCategoryChange() {
        var newPostCategory = $(this).val();
        getPosts(newPostCategory);
      };
    
    


})