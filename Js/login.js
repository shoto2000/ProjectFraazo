            // xxxxxxxxxxxxxxxxxxxxxx  Login xxxxxxxxxxxxxxxxxxxxxxxxxx

    
            var otp = 123456 ;
            localStorage.setItem("loginOpt",otp)
            
            var out = document.querySelector(".signup-cont") ;
            out.style.display = "none";
            
            var out2 = document.querySelector(".otp-container") ;
            out2.style.display = "none";
            
            var out3 = document.querySelector(".customer-info") ;
            out3.style.display = "none";
            
            
            
            document.querySelector("#user").addEventListener("click",function(){
                out.style.display = "block"
                document.querySelector(".signup-cont").classList.add("active") ;
                document.querySelector("#overlay").classList.add("active") ;
                
            })
                        // XXXXXXX CLOSE BTN XXXXXXXXXX
            document.querySelector("#close-btn").addEventListener("click",function(){
                document.querySelector(".signup-cont").classList.remove("active") ;
                document.querySelector("#overlay").classList.remove("active") ;
                out.style.display = "none";
            })
            document.querySelector("#close-btn2").addEventListener("click",function(){
                document.querySelector(".otp-container").classList.remove("active") ;
                document.querySelector("#overlay").classList.remove("active") ;
                out2.style.display = "none";
            })
            document.querySelector("#close-btn3").addEventListener("click",function(){
                document.querySelector(".customer-info").classList.remove("active") ;
                document.querySelector("#overlay").classList.remove("active") ;
                out3.style.display = "none";
            })
            
            document.querySelector("#get-otp").addEventListener("click",function(){
                 mobileNum = document.querySelector("#number").value ;
                console.log(mobileNum)
                out.style.display = "none";
                out2.style.display = "block"
                document.querySelector(".otp-container").classList.add("active") ;
                document.querySelector("#spana").innerText = mobileNum ;
                
            })
            
            document.querySelector("#check-otp").addEventListener("click",function(){
                var filledotp = document.querySelector("#fill-otp").value ;
                console.log(filledotp) ;
                if(filledotp == otp){
                    alert("Login Sucessfull") ;
                    out2.style.display = "none" ;
                    out3.style.display = "block"
                    document.querySelector(".customer-info").classList.add("active") ;
                    document.querySelector("#mobileNumber").value = mobileNum ;
                }
                else{
                    alert("Incorrect OTP")
                }
            })
            
            var infoForm = document.querySelector("#info-form")  ;
            infoForm.addEventListener("submit",function(){
                event.preventDefault();
                var customerInfo = {
                    firstName : infoForm.firstName.value ,
                    lastName : infoForm.lastName.value ,
                    email : infoForm.email.value ,
                    mobileNumber : infoForm.mobileNumber.value,
                }
                console.log(customerInfo)
                localStorage.setItem("clintInfo",JSON.stringify(customerInfo)) ;
                document.querySelector("#user").innerText = customerInfo.firstName ;
                document.querySelector("#overlay").classList.remove("active") ;
                out3.style.display = "none";
            
            })
            
            var clintInformation = JSON.parse(localStorage.getItem("clintInfo")) ;
            console.log(clintInformation)     
            if(clintInformation != null) {
                document.querySelector("#user").innerText = clintInformation.firstName ;
            } 