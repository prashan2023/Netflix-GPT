export const CheckValidate1 =(email,password)=>{
     
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isValidPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(! isValidEmail){
        return "Email ID is not valid.";
    };
    if(! isValidPassword){
        return "Password is not valid.";
    };

    return null;
}

export const CheckValidate2 =(userName,email,password)=>{
    
    const isValidUserName = /^[a-zA-Z0-9._-]{3,20}$/.test(userName);
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isValidPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(! isValidUserName){
        return "UserName is not valid.";
    }
    if(! isValidEmail){
        return "Email ID is not valid.";
    };
    if(! isValidPassword){
        return "Password is not valid.";
    };

    return null;
}
