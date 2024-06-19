// const router = require("express").Router();
const {employees} = require("../DB/index");

// router.get("/",async(req,res)=>{
//     res.send("Project Successfully Rinning in Mysql");
// })

const test = async(req,res)=>{
    res.send("Project Successfully Rinning in Mysql");
};

const all = async(req,res)=>{
    const Employees = await employees.findAll();
    return res.json(Employees);
};
const one = async(req,res)=>{
    const id = req.params.id;
    const emp = await employees.findOne({where:{id:id},raw:true});
    return res.json(emp);
}
const add = async(req,res)=>{
    const {name,mobile,email,city,password} = req.body;
    const add_emp = await employees.create({
        name:name,
        mobile:mobile,
        email:email,
        city:city,
        password:password
    });
    return res.json(add_emp);
};
const update = async(req,res)=>{
    const id = req.params.id;
    const {name,mobile,email,city,password} = req.body;
    const update_emp = await employees.update({
        name:name,
        mobile:mobile,
        email:email,
        city:city,
        password:password
    },{where:{id:id}});
    return res.json(update_emp);
};

const del = async(req,res)=>{
      const id = req.params.id;
      const del_emp = await employees.destroy({where:{id:id}});
      return res.json(del_emp);
}

module.exports = {test,all,add,update,del,one};
