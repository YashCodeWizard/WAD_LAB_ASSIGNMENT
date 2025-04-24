const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.json());


mongoose.connect('mongodb+srv://kbtug22338:d20VdoQJUb5WzwPF@cluster0.clwrloq.mongodb.net/Students')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    }
    );


const StudentSchema = new mongoose.Schema({
    name: String,
    course: String,
    marks: Number
});

const Student = mongoose.model('Student', StudentSchema);
PORT=3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//Create API - POST

app.post('/add-student', async (req, res) => {

    try {
        const { name, course, marks } = req.body;

        const newStudent = new Student({ name, course, marks });

        await newStudent.save();

        res.status(200).json({ messmarks: "Student added successfully!" });

    } catch (err) {

        res.status(500).json({ err: "Error adding student..." });

    }

});

//Read API - GET

app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();

        res.send(students);
    }
    catch (err) {

        res.status(500).json({ err: "Error retrieving student data..." })
    }
})

//Get employees as per course

app.get('/students/:marks', async (req, res) => {
    try {

        const students = await Student.find({ marks: req.params.marks });

        res.status(200).json(students);

    } catch (err) {

        res.status(500).json({ err: "Error retrieving student data..." });

    }
});


//Update API - PUT

app.put('/update-student/:marks', async (req, res) => {
    try {
        const { id } = req.params;

        const { name, course, marks } = req.body;

        const student = await Student.findByIdAndUpdate(id, { name, course, marks }, { new: true });

        res.status(200).json({ messmarks: "Student Updated Successfully", student });

    } catch (err) {

        res.status(500).json({ err: "Error updating student details" });
    }
});

//Delete API - DELETE

//Delete based on ID
app.delete('/delete-student/:id', async (req, res) => {

    try {

        const { id } = req.params;

        const deletedStudent = await Student.findByIdAndDelete(id);

        res.status(200).json({ messmarks: "Student deleted successfully" });

    }
    catch (err) {

        res.status(500).json({ err: "Error in deleting student details" });

    }

});

//Delete based on marks values
app.delete('/delete-on-marks/:marks', async(req, res) => {
    try{
        const marks = parseInt(req.params.marks);

        const delStudents = await Student.deleteMany({marks: {$lt: marks}});

        res.status(200).json({messmarks: `${delStudents.deletedCount} student deleted with marks less than ${marks}`});

    } catch(err){

        res.status(500).json({err: "Error deleting student..."})

    }
})