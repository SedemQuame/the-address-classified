// jshint esversion:7
const order = require(`./../models/orders.models`);
const spawn = require(`spawn-password`);
exports.submitOrders = (req, res, next) => {
    order.create({
        referenceId: req.body.referenceId || "",
        customerInfo: {
            firstname: req.body.customerFirstName,
            lastname: req.body.customerLastName,
            phone: req.body.customerPhoneNumber,
            email: req.body.customerEmail,
            addressInfo: {
                country: req.body.country,
                addressLine01: req.body.address1,
                addressLine02: req.body.address2,
                town: req.body.city,
                district: req.body.district || "",
                postcode: req.body.zip || "",
            },
        },
        orderedItems: [],
        paymentMode: req.body.paymentMode || "",
        orderNotes: req.body.orderNotes || "",
        username:spawn.spawn(),
    }).then(()=>{
        res.send(`Order recceived.`);
    }).catch((err)=>{
        res.send(err);
    });
};