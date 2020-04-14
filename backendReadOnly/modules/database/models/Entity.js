const { Schema, model } = require('mongoose');
const timestamp = require('mongoose-timestamp');

const entitySchema = new Schema({
    ID: {
        type: String
    },
    Parametr1: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr2: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr3: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr4: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr5: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr6: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr7: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr8: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr9: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr10: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr11: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr12: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr13: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr14: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr15: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr16: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr17: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr18: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr19: {
        type: Number,
        min: -1,
        max: 1
    },
    Parametr20: {
        type: Number,
        min: -1,
        max: 1
    }
})

entitySchema.plugin(timestamp);

entitySchema.methods.createEntity = async function (body) {
    entity = new Entity(body);
    return entity.save()
        .then(object => {
            console.log(`...Created Entity in Database: ${entity._id}`);
            return object;
        }).catch(Error => {
            console.log(`createEntity method in create Entity error:`, Error);
            return {};
        });
}

const Entity = model('Entity', entitySchema);

module.exports = {
    Entity
}