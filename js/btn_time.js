var radio = document.getElementsByName('small-btn-time');
 testRadio();
for (var i=0; i<radio.length; i++) {
    radio[i].onchange = testRadio;
}

function testRadio(){
    var m = document.getElementsByName('small-btn-time');
        for(var i=0; i<m.length;i++){
            
            par = (document.getElementById(m[i].id).parentElement.parentElement.parentElement.id);
            
            
            stu = document.getElementById(par);
            
            
            if (m[i].checked){

                
    
                stu.style.border = "2px solid #5EBB99";
            }
               
            else {
                
                stu.style.border = "2px solid #87B4E1";
                
                

        
        }
}

}

