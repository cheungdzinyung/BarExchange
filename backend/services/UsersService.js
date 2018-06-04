const multer = require("multer");
const fs = require("fs");
const path = require("path");
const storage = multer.memoryStorage();
const upload = multer({ dest: "../users", storage: storage });

module.exports = class UsersService {
  constructor(knex) {
    this.uploadDirectory = path.join(__dirname, "../", "users")
    this.knex = knex;
  }

  create(data) {
    return this.knex("users")
      .insert({
        username: data.username,
        passwordHash: data.password,
        displayName: data.displayName,
        userPhoto: userPhoto,
        role: user.role,
        isActive: true
      })
      .returning("id")
      .then(id => {
        return this.knex("users")
          .select("id", "displayName", "userPhoto")
          .where("id", id);
      });
  }

  upload(file){
    
  }
};
