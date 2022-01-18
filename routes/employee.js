const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')

router.get('/', async(req,res) => {
    try{
        const employee = await Employee.find()
        res.json(employee)
    }catch(err){
        res.send('Error '+err)
    }
})

router.get('/:id', async(req,res) => {
    try{
        const employee = await Employee.findById(req.params.id)
        res.json(employee)
    }catch(err){
        res.send('Error '+err)
    }
})


router.post('/', async(req,res) => {
    const employee = new Employee({
        name:req.body.name,
        department:req.body.department,
        email:req.body.email
    })
    try{
        const a1 = await employee.save()
        res.json(a1)
    }catch(err){
        res.send("Error")
    }
})

router.patch('/:id', async(req,res) => {
    try{
        const employee = await Employee.findById(req.params.id)
        employee.email = req.body.email
        const a1 = await employee.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const employee = await Employee.findById(req.params.id)
        const a1 = await employee.remove()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router