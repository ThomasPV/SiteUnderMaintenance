$(document).ready(function(){
    var clicked = false;
    var scrolled = false;
    setTimeout(function(){
        
        $('#brandImage').addClass('showItem');
        
    },1000);
    
    $(window).scroll(function(){
        
        
        if($(document).scrollTop() > 10){
            
            
            $('#neobar').addClass('shrink');
            $('#brandy').addClass('moon');
            scrolled = true;
            $('#brandyDiv').addClass('.scrollChange');
            
            
        }else{
            
            $('#neobar').removeClass('shrink');
            $('#toggleButton').removeClass('.moonToggle');
            $('#brandyDiv').removeClass('.scrollChange');
            
            scrolled = false;
            
            if(!clicked){
                
              $('#brandy').removeClass('moon');
                
            }
           
            
   
            
        }
        
    
        
    
        

        
    });
    
    $('#toggleButton').click(function(){
        
        clicked = !clicked;
        
        if(clicked){
            
         $('#neobar').addClass('click');
        $('#neobar').addClass('shrinked');
            
        $('#brandy').addClass('moon');
            
        }else{
            
           $('#neobar').removeClass('click'); 
            $('#neobar').removeClass('shrinked');
            if(!scrolled){$('#brandy').removeClass('moon');}
            
        }
        
        
        
    });
    
    
    
});