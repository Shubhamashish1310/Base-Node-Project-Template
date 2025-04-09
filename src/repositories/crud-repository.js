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
      
            const instance = await this.model.create(data);
            return instance;
       
    }

    // Delete an instance by ID
    async destroy(id) {
        
            const instance = await this.model.destroy({
                where: {
                    id: id
                }
            });
            return instance;
        
    }

    // Get an instance by ID
    async get(id) {      
            const instance = await this.model.findByPk(id);
            return instance;
    }

    // Get all instances
    async getAll() {      
            const instances = await this.model.findAll();
            return instances;
    }

    // Update an instance by ID
    async update(id, data) {
       
            const [updatedRowsCount] = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return updatedRowsCount; // Return the number of updated rows
    }
}

module.exports = CrudRepository;