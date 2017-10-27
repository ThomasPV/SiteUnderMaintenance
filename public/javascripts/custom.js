$(document).ready(function(){
    var clicked = false;
    setTimeout(function(){
        
        $('#brandImage').addClass('showItem');
        
    },1000);
    
    $(window).scroll(function(){
        
        
        if($(document).scrollTop() > 10){
            
            
            $('#neobar').addClass('shrink');
            $('#brandy').addClass('moon');
            
            
            
        }else{
            
            $('#neobar').removeClass('shrink');
            $('#brandy').removeClass('moon');
            
           
            
   
            
        }
        
    
        
    
        

        
    });
    
    $('#toggleButton').click(function(){
        
        clicked = !clicked;
        
        if(clicked){
            
         $('#neobar').addClass('click');
        $('#neobar').addClass('shrinked');
            
        }else{
            
           $('#neobar').removeClass('click'); 
            $('#neobar').removeClass('shrinked');
        }
        
        
        
    });
    
    
    
});