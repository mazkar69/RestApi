require('./config/db');

const products = require('./product.json');

// console.log(products);

const Product = require('./models/products');



const insertProducts = async ()=>{
    try{
        //This will delete the old documents and insert the new documents.
        await Product.deleteMany();
        await Product.create(products);
        
        console.log("Saved")
    }catch(e){
        console.log("Some error occur");
        console.log(e);
    }
}

insertProducts();