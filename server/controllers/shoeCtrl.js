var app = require('../server');
var db = app.get('db');

module.exports = {

  getShoes: function(req, res){
    db.get_shoes(function(err,shoes){
      if (err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(shoes)
      }
    })
  },

  setCart: function(req, res) {
    db.get_cart([req.sessionID],function(err,cart){
      if (cart.length === 0) {
        db.set_cart([req.sessionID, req.body.cartqty], function(error){
          if (error) {
            res.status(500).json(error)
          } else {
            res.send(req.sessionID);
          }
        })
      } else {
          db.cart_update([req.sessionID, req.body.cartqty], function(error){
            if (error) {
              res.status(500).json(error)
            } else {
              res.send(req.sessionID);
            }
          })
      }
    })
  },

  getCart: function(req, res) {
    db.get_cart([req.sessionID],function(err,cart){
      if (err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(cart)
      }
    })
  },

  addOrder: function(req, res) {
    db.find_order([req.sessionID, req.body.shoeid, req.body.size], function(err,order){
      if (order.length === 0) {
        db.add_order([req.sessionID, req.body.shoeid, req.body.size, 1], function (err){
          res.json('success')
        })
      } else {
        var quantity = order[0].quantity + 1;
        // console.log(quantity);
        // console.log(order[0].id);
        db.update_order([order[0].id, quantity], function(err){
          res.json('ok')
        })
      }
    })
  },

  removeFromOrder: function(req, res) {
    // console.log(req.body);
    db.find_order([req.sessionID, req.body.shoeid, req.body.size], function(err,order){
        // console.log(order);
      db.delete_order([order[0].id], function(err){
        res.json('ok')
      })
    })
  },

  getOrders: function(req,res) {
    db.get_orders([req.sessionID], function(err,orders){
      res.json(orders)
    })
  }







  // addShoe: function(req, res) {
  //   db.post_shoe([req.body.personid, req.body.lastname,
  //   req.body.firstname, req.body.address, req.body.city, req.body.phone], function(err, customers){
  //     if (err) {
  //       res.status(404).json('Something went wrong')
  //     } else {
  //       res.status(200).json('ok')
  //     }
  //   })
  // }




}
