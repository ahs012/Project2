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