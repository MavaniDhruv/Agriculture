const adminModel = require('../model/adminModel');
const productModel = require('../model/productModel');

exports.a_login = async (req,res) =>{
    var data = await adminModel.find({"a_email":req.body.a_email});

    if(data.length>0){
        if(data[0].a_password==req.body.a_password){
            res.status(200).json({
                status:"Admin Login Success"
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

exports.a_register = async(req,res)=>{
    var data = await adminModel.create(req.body)

    res.status(200).json({
        status:"Admin Register",
        data
    })
}

exports.add_product = async(req,res)=>{
    var data = await productModel.create(req.body)

    res.status(200).json({
        status:"One Product Added",
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

exports.update_product = async (req,res) =>{
    var id = req.params.id;
    var data = await productModel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"Update Single Product",
        data
    })
}

exports.delete_product = async (req,res) =>{
    var id = req.params.id;
    var data = await productModel.findByIdAndDelete(id);

    res.status(200).json({
        status:"Delete One Product",
        data
    })
}