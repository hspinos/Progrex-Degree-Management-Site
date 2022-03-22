const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signerSchema = new Schema(
    {
        signerId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
        dateSigned: {
            type: Date,
            default: () => Date.now()
        }
    }
)

const documentSchema = new Schema(
    {
        name: { type: String, required: true, maxLength: 40 },
        description: { type: String, required: true, maxLength: 300 },
        powerFormUrl: { type: String, required: true, maxLength: 200 },
        usersSigned: [signerSchema]
    }
)

module.exports = mongoose.model('Document', documentSchema);