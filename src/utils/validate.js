
export const validateform=(email,password,username)=>{
    const checkemail=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const checkpassword=/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);
    const checkusername=/^[0-9A-Za-z]{6,16}$/.test(username);

    if(!checkemail) return "Email is not valid";
    if(!checkpassword) return "Passwod is not vaild";
    if(!checkusername) return "Username is not valid";

    return null;
}