window.resizeBy(screen.width,screen.height)
	//window.scrollTo({top: document.body.scrollHeight,behavior: 'smooth'});
    //document.getElementById("accept-btn")?.click()
    //document.getElementById("cookieChoiceDismiss")?.click()
  
  var cummWait=0;
	var elements = document.querySelectorAll("[id*='ezoic-pub-ad-placeholder-']");
 	var ads_id=[];

	for (let i = 0; i < elements.length; i+=1)
      
	{
		if (elements[i].className=="ezoic-adpicker-ad") {ads_id.push(elements[i].id)}
	}
                                       
                                        
                                        
for (let j=0; j<Math.floor(Math.random()*(4-3+1)+3) ; j++)
      {


        for (let i=0; i < ads_id.length; i++)
         {
           
          nextSib=document.getElementById(ads_id[i]).nextElementSibling
           
          if (nextSib==null){continue}

          else if (nextSib.offsetWidth!==0)
           {
            
            var wait=Math.random()*(3000-1000+1)+1000
              //behavior: "smooth",
            setTimeout(function() document.getElementById(ads_id[i]).scrollIntoView({block:"start"})}, cummWait+wait)
          
          	cummWait+=wait;
            };
            
          }
        }
     
  
  
                                        
                                     
          

  
  
          
document.addEventListener('visibilitychange', function (event) {
document.onvisibilitychange = () => console.log(document.visibilityState);
