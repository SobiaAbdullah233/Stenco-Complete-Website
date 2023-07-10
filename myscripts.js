//sticky navbar

 $(window).scroll(function(){
    if($(this).scrollTop()>5)
    {
        $(".sticky-nav-chang").addClass("fixed-top bg-white text-primary  nav-opcty");
        $(".sticky-nav-chang").removeClass("mt-4");

    }
     else  {
        $(".sticky-nav-chang").removeClass("text-primary nav-opcty  ");
        $(".sticky-nav-chang").addClass("mt-4");
         }   
 })
 $(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>5)
         {
            $(".navbar .navbar-brand img") .attr("src","image/logo-construction-small.png");

        }
        else{
            $(".navbar .navbar-brand img") .attr("src","image/logo-construction.png");

        }
    })
 })