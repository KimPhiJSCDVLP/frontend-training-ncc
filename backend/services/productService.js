const {
  addProduct,
  updateProductValidation,
  } = require("../middleware/validation");
  const db = require("../database/db");
  const jwt = require("jsonwebtoken");
  
  exports.addProduct = async (params) => {
    const { error } = addProduct(params);
    if (error) throw { message: error.details[0].message, statusCode: 400 };
  
    const { title, image, description, price, quantity, cat_id } = params;
  
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO products (id, title, image,description,price,quantity,cat_id) VALUES (?,?,?,?,?,?,?)',
        ['',title, image,description,price, quantity,cat_id],
        (err, result) => {
          if (err) 
          {
            reject({
              message: "Something went wrong, please try again",
              statusCode: 400,
              data: err,
            });
           
          } else {
            const token = jwt.sign({ data: result }, "secret");
            resolve({
              data: result,
              message: "You have successfully add product.",
              token: token,
              statusCode: 200,
            });
          } 
        }
      );
    });
  };
  
module.exports.updateProduct = async (req,res) => {
  const { productId } = req.params;
  const {  title, image, description,price,quantity,cat_id } =  req.body.product;;
  db.query(
    `UPDATE products
      SET
        title="${title ?? " "}",
        image="${image ?? " "}",
        description="${description ?? " "}",price=${price ?? 0},
        quantity=${quantity ?? 0},
        cat_id=${cat_id ?? null}
      WHERE
        id = ${productId}`,
    (err, results) => {
      if (err) console.log(err);
      else {
        console.log(results);
        res.json({ message: "success", results });
      }
    }
  );
};
  