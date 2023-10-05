function getpassword(){
            var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+{}[];><,.";
            var passwordlength = 10;
            var password = '';

            for(var i = 0; i<passwordlength; i++)
            {
                var randomnum = Math.floor(Math.random() * chars.length);
                password += chars.substring(randomnum,randomnum+1);
            }
            document.getElementById("password").value = password ;
        }
