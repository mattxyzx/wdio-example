class Login {
    get inputEmail () {
        return $('input#email');
    }
    get inputPassword () {
        return $('input#password');
    }

    get btnSubmit () {
        return $$('button[type="submit"]');
    }

    get loginUrl () {return "https://testing.igloo.hr/admin/login"}


    get validationError() {return $("[data-validation-error]")}

    async doLogin (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit[0].click();
    }

}
export default new Login();