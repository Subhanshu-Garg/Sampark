function createModel(model) {
  return {
    create: async (data) => {
      const item = await model.create(data);
      return item;
    },
    find: async (query, projections, options) => {
      const items = await model.find(query, projections, options);
      return items;
    },
    findById: async (id, populateFields) => {
      let result = model.findById(id);
      if (populateFields) {
        result = result.populate(populateFields);
      }
      return await result;
    },
    findOne: async (query, populateFields) => {
      let result = model.findOne(query);
      if (populateFields) {
        result = result.populate(populateFields);
      }
      return await result;
    },
    updateById: async (id, attrs) => {
      const updateObj = {};
      for (let key in attrs) {
        if (attrs[key]) {
          if(Array.isArray(attrs[key])){
            updateObj[key] = { $push: { $each: attrs[key] }}
          }
          else {
            updateObj[key] = attrs[key];
          }
        }
      }
      const item = await model.findByIdAndUpdate(id, updateObj);
      return item;
    },
    deleteById: async (id) => {
      const item = await model.findByIdAndDelete(id);
      return item;
    },
  };
}

export default createModel;
