$(function() {
    // Grab the template script
    var theTemplateScript = $("#myTemplate").html();
  
    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);
  
    // Define our data object
    var context = {};
  
    var getData = function() {
      $.ajax({
        url: "https://randomuser.me/api/?results=20",
        dataType: "json",
        success: function(data) {
          context.people = data.results;
          // Pass our data to the template
          var theCompiledHtml = theTemplate(context);
          // Add the compiled html to the page
          $(".people").html(theCompiledHtml);
        }
      });
    };
  
    $(".getlistbtn").on("click", getData);
  
    $(".clearbtn").on("click", function() {
      context = {};
  
      // Add the compiled html to the page
      $(".people").html(
        '<div class="col-xs-12">Click "Get Artists" to load the Dataset.</div>'
      );
    });
  
    getData();
  });
  
  // //$(document).ready(function () {

//     var cardContainer = $(".card-container");
//     var postCategorySelect = $("#category");

//     postCategorySelect.on("change", handleCategoryChange);

//     var posts;

//     // This function grabs posts from the database and updates the view
//     function getArt() {
        
//         $.get("/api/newArt", function (data) {
//             console.log("Posts", data);
//             posts = data;
//             if (!posts || !posts.length) {
//                 displayEmpty();
//             }
//             else {
//                 initializeRows();
//             }
//         });
//     }



//     // InitializeRows handles appending all of our constructed post HTML inside
//     // cardContainer
//     function initializeRows() {
//         cardContainer.empty();
//         var postsToAdd = [];
//         for (var i = 0; i < posts.length; i++) {
//             postsToAdd.push(createNewRow(posts[i]));
//         }
//        cardContainer.append(postsToAdd);
//     }

//     getArt();

//     // This function constructs a post's HTML
//     function createNewRow(post) {
//         var newPostCard = $("<div>");
//         newPostCard.addClass("card");
        
//         var newPostCardHeading = $("<div>");
//         newPostCardHeading.addClass("card-header");
        
//         var newPostTitle = $("<h2>");


//         var newPostCategory = $("<h5>");
//         newPostCategory.text(post.category);
//         newPostCategory.css({
//             float: "right",
//             "font-weight": "700",
//             "margin-top":
//                 "-15px"
//         });
//         var newPostCardBody = $("<div>");
//         newPostCardBody.addClass("card-body");
//         var newPostBody = $("<p>");
//         newPostTitle.text(post.title + " ");
//         newPostBody.text(post.body);
//         // var formattedDate = new Date(post.createdAt);
//         // formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
//         // newPostDate.text(formattedDate);
//         newPostTitle.append(newPostDate);
//         newPostCardHeading.append(deleteBtn);
//         newPostCardHeading.append(editBtn);
//         newPostCardHeading.append(newPostTitle);
//         newPostCardHeading.append(newPostCategory);
//         newPostCardBody.append(newPostBody);
//         newPostCard.append(newPostCardHeading);
//         newPostCard.append(newPostCardBody);
//         newPostCard.data("post", post);
//         return newPostCard;
//     }


    
    


// })