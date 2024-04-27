// Import necessary models
const StudentDevice = require('../models/Studentdevice-m');
const StudentCourse = require('../models/Studentcourse-m');
const Course = require('../models/courses-m');
const AttendanceReport = require('../models/Attendance-report');
const Student = require('../models/student-m');

function timeToMinutes(time){
    const hms = time;  
const a = hms.split(':'); // split it at the colons

// Hours are worth 60 minutes.
const minutes = (+a[0]) * 60 + (+a[1]);

return minutes
}
async function enterInRoom(req, res) {
    const { studentId, roomId, time, checkoutTime } = req.body;

    const minutes = timeToMinutes(time)
    const checkoutminutes = timeToMinutes(checkoutTime)

    try {
        const student = await Student.findOne({ Student_id: studentId })
        // Checkung if the student ID is registered in devices
        const studentDevice = await StudentDevice.findOne({ Student_id: studentId });
        if (!studentDevice) {
            return res.status(404).json({ error: 'Student device not registered' });
        }

        // Checking if the student is enrolled in any courses being offered in the room within that time
        const studentCourse = await StudentCourse.findOne({ Student_id: studentId });
        if (!studentCourse) {
            return res.status(404).json({ error: 'Student not enrolled in any courses' });
        }

        // Find the course details
        const course = await Course.findOne({ Course_id: studentCourse.Course_id, Room_id: roomId });
        if (!course) {
            return res.status(404).json({ error: 'Course not found at this time in the specified room' });
        }

        console.log("Course Start Time",course.Start_time)
        console.log("Minutes",minutes)

        if(!(minutes >= course.Start_time - 15) || !(minutes <= course.Start_time)){
            return res.status(401).json({ error: 'Studernt Late' });
        }

        if((checkoutminutes > course.End_time + 15) || (checkoutminutes < course.End_time)){
            return res.status(401).json({ error: 'Scheduled class not over yet ' });
        }
        if(checkoutTime){
            AttendanceReport.create({
                Student_id : studentId,
                Course_id: studentCourse.Course_id,
                CheckOutTime: checkoutTime,
                Student_name: student.Name,
                Course_name: course.Name
            })
        }
        else if(time){
            AttendanceReport.create({
                Student_id : studentId,
                Course_id: studentCourse.Course_id,
                CheckInTime: time,
                Student_name: student.Name,
                Course_name: course.Name
            })
        }
        // If everything matches, send success message
        return res.status(200).json({ message: 'Student access granted' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    enterInRoom
};
