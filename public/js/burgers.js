$(function(){
    $("#create-form").on("submit", event => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        // [name=plan] will find an element with a "name" attribute equal to the string "plan"
        var newBurger = {
          burger_name: $("#newburger").val().trim(),
          devoured: 0
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          () => {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    $(".eatburger").on("click", event => {
        event.preventDefault();
        // Get the ID from the button.
        // This is shorthand for $(this).attr("data-planid")
        var id = $(this).data("id");
        // Send the PUT request.
        var devouredState ={devoured: 1};
        $.ajax("/api/burgers/"+id, {
            type: "PUT",
            data: devouredState
          }).then(
            () => {
              console.log("devour burger");
              // Reload the page to get the updated list
              location.reload();
            }
          );
        });
        // Send the DELETE request.
        $(".deleteburger").on("click", event => {
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax("/api/burgers/"+id, { 
          type: "DELETE"
            // Reload the page to get the updated list
        }).then(
            () => {
            location.reload();
            }
        );
        });
    })