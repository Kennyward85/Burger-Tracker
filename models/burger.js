// Dependencies 
var ormroutes = require("../config/orm.js");

// This should show all the burgers creat them and update them
// 
// selectAll()
//       insertOne()
//       updateOne()

// this is where we will call back the results from thr orm
// almost like calling back data from an object in an array
      const burger = {
          selectAll: function(cb) {
              ormroutes.all("burgers", function(res){
                  cb(res);
              })
          },
        //   this creates the name and condition of false and puts it into the 
        // sql database
          createOne: function(name, cb) {
              ormroutes.create("burgers", ["burger_name", "devoured"
            ], 
            [
              name, false
          ], cb);
      },
    //   this will update the burgers based off the id when they have been eaten
    // so devoured will now be true
    updateOne: function(id, cb) {
        const eaten = "id=" +id;
        ormroutes.update("burgers", {
devoured: true
        },eaten, cb);
    }
    };
    module.exports = burger;