var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/vendors/", function(req, res) {
 
    db.Vendor.findAll({
        WHERE:{status : true}
    })
      .then(function(data) {
        res.json(data);
      });
  });

app.get("/api/menu/:id", function(req, res) {
 
     db.Item.findAll({
        WHERE:{id: req.params.id}
     })
      .then(function(data) {
        res.json(data);
      });
  });
  
  app.post("/api/vendors", function(req, res) {
    console.log(req.body);
    db.Vendor.create({
      owner_name: req.body.owner_name,
      business_name: req.body.business_name,
      logo: req.body.logo,
      email: req.body.email,
      password: req.body.password
    })
      .then(function(data) {
        res.json(data);
      });
  });

  app.post("/api/menu", function(req, res) {
    console.log(req.body);
    db.Item.create({
        item: req.body.item,
        price: req.body.price,
        img: req.body.img
    })
      .then(function(data) {
        res.json(data);
      });
  });

  app.put("/api/vendors", function(req, res) {
    db.Vendor.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(data) {
        res.json(data);
      });
  });
  app.put("/api/menu", function(req, res) {
    db.Item.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(data) {
        res.json(data);
      });
  });
  app.delete("/api/vendors/:id", function(req, res) {
    db.Vendor.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(data) {
        res.json(data);
      });
  });
  app.delete("/api/menu/:id", function(req, res) {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(data) {
        res.json(data);
      });
  });
}