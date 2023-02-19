const Product = require('../models/products');



const getAllPorducts = async (req,res)=>{

    const {name,company,price,featured,page,select} = req.query;
    let queryObject;

    if(name)
    {
        queryObject.name = name;
    }
    if(company)
    {
        queryObject.company = company;
    }

    const apiData = Product.find(queryObject);
    if(page)
    {
        let pageNo = Number(page);
        pageNo = pageNo || 1;
        let limit = 2;   

        let skip = (pageNo-1)*limit;
        apiData.skip(skip).limit(limit);

        
    }
    if(select)
    {
        let str = select.replaceAll(","," ");
        apiData.select(str);
    }


    const result = await apiData;
    res.status(200).json(result);
}


module.exports = {getAllPorducts};