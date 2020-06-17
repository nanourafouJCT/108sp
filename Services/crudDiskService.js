const diskModel = require('../Models/disk');

const addDisk = async (diskToAdd) => {
    try {
        const result = await diskModel.create(diskToAdd);
        return result;
    } catch (e) {
        console.log(`Cannot add this disk.`);
    }

};

const updateDisk = async (distToUpdate) => {
    try {
        console.log(distToUpdate);
        const result = await diskModel.findByIdAndUpdate(distToUpdate._id, distToUpdate, {new: true})
        return result;
    } catch (e) {
        console.log(`Cannot update this disk.`);
    }
};

const getAllDisk = async (query = {}) => {
    try {
        const results = await diskModel.find(query);
        return results;
    } catch (e) {
        console.log(`Cannot get all theses disk.`);
    }
};

const deleteById = async (id) => {
    try {
        const result = await diskModel.findByIdAndDelete(id);
    } catch (e) {
        console.log('Failed to delete disk')
    }
};

const getDiskById = async (id) => {
    try {
        const result = await diskModel.findOne({_id: id});
        return result;
    } catch (e) {
        console.log(`Cannot get this disk.`);
    }
};


module.exports = {add: addDisk, update: updateDisk, delete: deleteById, getById: getDiskById, getAll: getAllDisk};

