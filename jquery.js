// JavaScript File

    $(document).ready(function() 
    {
        $("#SJ").click(function()
        {
        var value = $("#Y").val();

   $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q="+value+"&api_key=dc6zaTOxFJmzC",
     
     
      function(response)   {
           for(var B = 0; B<5; B=B+1) {
        $("#B").append("<img src=" + response.data[B].images.fixed_width_downsampled.url + ">");
           }
        });
    });
});


    
    
