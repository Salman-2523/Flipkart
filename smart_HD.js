var expanded=false;
    function showCheckboxes(){
        var checkboxes=document.getElementById("checkboxes");
        if(!expanded){
            checkboxes.style.display="block";
            expanded=true;
        }else{
            checkboxes.style.display="none";
            expanded=false;
        }
    }


    var expanded=false;
    function showCheckboxes1(){
        var checkboxes=document.getElementById("checkboxes1");
        if(!expanded){
            checkboxes1.style.display="block";
            expanded=true;
        }else{
            checkboxes1.style.display="none";
            expanded=false;
        }
    }

    var expanded=false;
    function showCheckboxes2(){
        var checkboxes2=document.getElementById("checkboxes2");
        if(!expanded){
            checkboxes2.style.display="block";
            expanded=true;
        }else{
            checkboxes2.style.display="none";
            expanded=false;
        }
    }

    
    let right=document.getElementById("right")
    async function getdata(){

    var a= "smart & HD"
    var res= await fetch (`https://flipkart.dvishal485.workers.dev/search/${a}`)
    var data=await res.json()
    // localStorage.setItem("womendata",JSON.stringify(data1))
    // let data=JSON.parse(localStorage.getItem("womendata"));
    data_sort.push(data);
    // console.log("data_sort",data_sort)
    displayData(data)

    }
    var data_sort=[];

    getdata()
  
    // console.log("data_sort",data_sort)
    // let i=0;
    // var cloth_brand=["Biba","Zara","Bombay Selection","WESTSIDE","Pantaloons","Stalkbuylove","Forever 21"];

    function displayData(data){
        console.log("data",data)
        right.innerHTML=null;
        data. result.forEach((elem)=>{

     let a=elem.current_price;
     let b=elem.original_price;
     let c=Math.floor(((b-a)/b)*100);
     
   
       
        let div=document.createElement("div")
        //console.log("d",d);
        let name=document.createElement("p");
        name.innerText=elem.name;
        
        let image=document.createElement("img");
        image.src=elem.thumbnail

        let price=document.createElement("p1");
        price.innerText=`₹${elem.current_price}`;
        
        let original_price=document.createElement("p2");
        original_price.innerText=` ₹${elem.original_price}`

        let discount=document.createElement("p3");
        discount.innerText=`${c}% OFF`;
        
        // if(i==cloth_brand.length){
        //     i=0;
        // }
        // let brand=document.createElement("p");
        // brand.innerText=cloth_brand[i];
        // brand.style.color="#8B8B8B"
        // i++;
     
     
        div.append(image,name,price,original_price,discount)
        right.append(div)


      
  div.onclick=()=>{
    localStorage.setItem("onedata",JSON.stringify(elem))
    window.location.href="productPage.html"
  }
       
       
    }) 
 
    }



    function Tsort(){

        var valT=document.querySelector("#sortT").value
        console.log(valT)
        if(valT==""){
            // displayData(data);
        }else if(valT=="high"){
            data_sort[0].result.sort(function(a,b){
             return (Number(b.current_price)-Number(a.current_price))
         })
        //  displayData(data);
         
        }else{
            data_sort[0].result.sort(function(a,b){
                return (Number(a.current_price)-Number(b.current_price))
         })
        //  displayData(data);
        }
        displayData(data_sort[0])
     }  
     var a=document.querySelector("#more")
   a.addEventListener("click",function(){
     window.location.href="Signup.html"
   })
   var b=document.querySelector("#log")
   b.addEventListener("click",function(){
     window.location.href="login.html"
   })

   var c=document.querySelector("#cart")
   c.addEventListener("click",function(){
     window.location.href="cart.html"
   })
   var d=document.querySelector("#flipkart-logo")
   d.addEventListener("click",function(){
     window.location.href="index.html"
   })
