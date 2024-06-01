const billModel = require('../model/billModel');
const cartModel = require('../model/cartModel');
const productModel = require('../model/productModel');
const userModel = require('../model/userModel')

exports.u_login = async (req,res) =>{
    var data = await userModel.find({"u_email":req.body.u_email});

    if(data.length>0){
        if(data[0].u_password==req.body.u_password){
            res.status(200).json({
                status:"User Login Success"
            })
        }else{
            res.status(200).json({
                status:"Check Your Email And Password"
            })
        }
    }else{
        res.status(200).json({
            status:"Check Your Email And Password"
        })
    }
}

exports.u_register = async(req,res)=>{
    var data = await userModel.create(req.body)

    res.status(200).json({
        status:"User Register",
        data
    })
}

exports.view_product = async(req,res)=>{
    var total_product = await productModel.find().count();
    var data = await productModel.find()

    res.status(200).json({
        status:"View All Product",
        total_product,
        data
    })
}

exports.view_single_product = async(req,res)=>{
    var id = req.params.id
    var data = await productModel.findById(id)

    res.status(200).json({
        status:"View Single Product",
        data
    })
}

exports.add_cart = async(req,res)=>{
    var id = req.params.id;
    var products = await productModel.findById(id).select();

    req.body.p_name = products.p_name;
    req.body.p_price = products.p_price;
    req.body.p_rating = products.p_rating;

    var cart = await cartModel.create(req.body);

    res.status(200).json({
        status:"Cart Added",
        cart
    })
}

exports.create_bill = async(req,res)=>{
    var data = await cartModel.find();
    var total_amount = 0;

    for(const product of data){
        total_amount = total_amount + product.p_price;
    }

    req.body.total_amount = total_amount;

    var bill = await billModel.create(req.body);

    res.status(200).json({
        status:"Bill Generated",
        bill
    })
}