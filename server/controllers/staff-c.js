const  Staff  = require('../models/staff-m'); //  importing  Sequelize model

const staff = async (req, res) => {
    try {
        console.log(req.body)
        const { Staff_id, Department_id, Campus_id, Designation, Email, Name, Phone, } = req.body;
        //checking to see that staff emails are not recreated
        const staffExists = await Staff.findOne({Email:Email})

    if(staffExists){
        return res.status(400).json({mssg:"email already exists"})
    }
        // adding data for staff
       await Staff.create({
            Staff_id,
            Department_id,
            Campus_id,
            Designation,
            Email,
            Name,
            Phone
           
        });
        //

        res.status(201).json(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = staff
