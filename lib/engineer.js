const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id , email, gitHubUsername) {
        super(name, id, email);
        this.github = gitHubUsername;

    }

    getRole() {
        return this.constructor.name;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;