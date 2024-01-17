export let dataSignIn;
export let dataSignUp;
const signUp_btn = document.getElementById("signUp_btn");
const signIn_btn = document.getElementById("signIn_btn");

export const getInfoForm = () => {
    signUp_btn.addEventListener("click", () => {
        const formSignUp = document.getElementById("formSignUp");
        const formData_SignUp = new FormData(formSignUp);

        console.log(formData_SignUp.get("nombreRegistro"));
        console.log(formData_SignUp.get("emailRegistro"));
        console.log(formData_SignUp.get("contrasenaRegistro"));
    });
    
    signIn_btn.addEventListener("click", () => {
        const formSignIn = document.getElementById("formSignIn");
        const formData_SignIn = new FormData(formSignIn);

        console.log(formData_SignIn.get("nombre"));
        console.log(formData_SignIn.get("contrasena"));
    });
}