(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $("#homebtn").click(function(evt)
        {
         activate_subpage("#mainsub"); 
        });
        $("#favbtn").click(function(evt)
        {
         activate_subpage("#favorite_page"); 
        });
        $("#messagebtn").click(function(evt)
        {
         activate_subpage("#messages_page"); 
        });
        $("#profilebtn").click(function(evt)
        {
         activate_subpage("#profile_page"); 
        });
}
 $(document).ready(register_event_handlers);
})();
