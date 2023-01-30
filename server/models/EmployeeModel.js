import mongoose from "mongoose";

const { Schema } = mongoose;

const employeeSchema = new Schema({
    eId: {
        type: Number,
        required: false
    },
    eName: {
        type: String,
        required: false
    },
    eAge: {
        type: Number,
        required: false
    },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;