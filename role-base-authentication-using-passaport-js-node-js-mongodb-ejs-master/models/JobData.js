const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:1234@jobsbits11.zv4mn.mongodb.net/jobportal?retryWrites=true&w=majority', { useNewUrlParser: true });
const Schema = mongoose.Schema;

var NewJobSchema = new Schema({

    title: String,
    location: String,
    description: String,
    salary: String
});
var JobData = mongoose.model('Job-Data', NewJobSchema);

module.exports = JobData;