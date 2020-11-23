class UserTest {
    
    constructor() {
        this.username = 'xiaohong';
    }

    run() {
        console.log(this.username);
    }

    inject() {
        console.log(this.username + ' inject');
    }
}

exports.UserTest = UserTest;