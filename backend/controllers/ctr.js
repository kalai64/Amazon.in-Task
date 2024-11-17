import itemsModel from '../model/dbmodel.js'

const openPage = (req, res) => {
    try {
      res.send(`
          <h1>Welcome to server side Application</h1>
          `);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (req, res) => {
    try {
      const data = await itemsModel.create(req.body);
      res.status(201).send({
        success: true,
        message: "Product added successfully",
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error adding product",
        error: error.message,
      });
    }
  };


const getData = async(req,res)=>{
    try {
      const searchQuery = req.query.q || '';
        const data = await itemsModel.find({
          product_name: { $regex: searchQuery, $options: 'i' },
        })
        res.status(200).send({
            success: true,
            message: "Fetched Data successfully",
            data,
          });
    } catch (error) {
        console.log(error);
    res.status(500).send({
      success: false,
      message: "Failed to Fetched Data",
      error: error.message,
    });
    }
}

const getById = async(req,res)=>{
  try {
    const id = req.params.id
    const data = await itemsModel.findById(id)
    res.status(200).send({
      success: true,
      message: "Fetched Id Base Data successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Failed to Fetched Data",
      error: error.message,
    });
  }
}

const deleteById = async(req,res)=>{
  try {
    const id = req.params.id
    const data = await itemsModel.findByIdAndDelete(id)
    res.status(200).send({
      success: true,
      message: "Delete Data successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Failed to delete Data",
      error: error.message,
    });
  }
}

export default {
    addProduct,
    getData,
    getById,
    deleteById
}
