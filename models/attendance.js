const mongoose = require("mongoose")

const attendanceSchema = new mongoose.Schema(
	{
		// event being attended
		evemt: {
			type: mongoose.Schema.Types.ObjectId,
			required: true
		},
		// are they attending? true/false
		status: {
			type: Boolean
		},
		// who set the attendance
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			required: true
		}
	},
	{
		// show when attendance was created
		timestamps: true
	}
)


const Attendance = mongoose.model("Attendance", attendanceSchema)
module.exports = Attendance
