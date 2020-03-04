const Trees = require("../models/tree");

const isAuthorized = async(req, res, next) => {
  try {
    const {user_id} = req.cookies;
    
    const id = user_id; 
    const data = await Trees.findById(id);

    if(String(data.createdBy_id) === String(id)){
      next();
    } else {
      throw new Error('Sorry, you are not the owner of that resource');
    }
  } catch (error) {
    res.status(401).send({ error: 'Not authorized to edit or delete this resource' })
  }
}

module.exports = isAuthorized;