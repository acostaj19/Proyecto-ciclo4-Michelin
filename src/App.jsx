import React from "react";
import './style/index.css'

const App =() =>{
    return(
     
          

            <div class="wrapper fadeInDown" >
                <div id="formContent" >
                

               
                    <div class="fadeIn first">
                        <img src="https://logos-marcas.com/wp-content/uploads/2020/09/Michelin-Logo.png" id="icon" alt="User Icon" />
                    </div>

                    <form >
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="username" />
                        <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
                        <input type="submit" class="fadeIn fourth" value="Log In" />
                    </form>      
                    <div id="formFooter">
                        <a class="underlineHover" href="#">Forgot Password?</a>
                    </div>

                </div>
            </div>        
    )
}

export default App;