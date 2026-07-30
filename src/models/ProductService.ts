import ProductModel from "../schema/ProductSchemaModel";

class ProductService {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel;
    }
}

export default ProductService;
