class baseFunc {
    isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
}

const bfunc = new baseFunc();