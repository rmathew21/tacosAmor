// import orm.js
const orm = require("../config/orm");

// create code to call ORM functions 
const taco = {
    all: function(cb) {
        orm.all("tacos", function(res) {
            cb(res);
        });
    },
    
}
// export taco.js
module.exports(taco);
