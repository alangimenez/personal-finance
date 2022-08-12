const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const colection = 'entries';

const entriesSchema = new Schema ({
    id: {type: String},
    account_involucred: {type: String},
    debit_account: {type: String},
    debit_import: {type: Number},
    credit_account: {type: String},
    credit_import: {type: Number},
    created: {type: String}
})

const Entry = mongoose.model(colection, entriesSchema);

module.exports = Entry;