const { Logger } = require('../config');

class CrudRepository {
    constructor(model) {
        if (!model) {
            throw new Error('Model must be provided to CrudRepository');
        }
        this.model = model;
    }

    // Create a new instance
    async create(data) {
        try {
            const instance = await this.model.create(data);
            return instance;
        } catch (error) {
            Logger.error('Error creating instance repo:', error);
            throw error;
        }
    }

    // Delete an instance by ID
    async destroy(id) {
        try {
            const instance = await this.model.destroy({
                where: {
                    id: id
                }
            });
            return instance;
        } catch (error) {
            Logger.error('Error deleting instance:', error);
            throw error;
        }
    }

    // Get an instance by ID
    async get(id) {
        try {
            const instance = await this.model.findByPk(id);
            return instance;
        } catch (error) {
            Logger.error('Error fetching instance by ID:', error);
            throw error;
        }
    }

    // Get all instances
    async getAll() {
        try {
            const instances = await this.model.findAll();
            return instances;
        } catch (error) {
            Logger.error('Error fetching all instances:', error);
            throw error;
        }
    }

    // Update an instance by ID
    async update(id, data) {
        try {
            const [updatedRowsCount] = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return updatedRowsCount; // Return the number of updated rows
        } catch (error) {
            Logger.error('Error updating instance:', error);
            throw error;
        }
    }
}

module.exports = CrudRepository;