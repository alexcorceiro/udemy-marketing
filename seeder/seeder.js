const connectDB = require("../config/db")
connectDB()

const categoryData = require("./category")
const productData = require("./products")
const reviewData = require("./reviews")
const userData = require("./users")
const orderData = require("./orders")

const Category = require("../model/CategoryModel")
const Product = require("../model/ProductModel")
const Review = require("../model/ReviewModel")
const User = require("../model/UserModel")
const Order = require("../model/OrderModel")
console.log(process.argv[2]);
const importData = async () => {
    try {
        await Category.collection.dropIndexes()
        await Product.collection.dropIndexes()

        await Category.collection.deleteMany({})
        await Product.collection.deleteMany({})
        await Review.collection.deleteMany({})
        await Order.collection.deleteMany({})
        await User.collection.deleteMany({})

        if (process.argv[2] !== "-d") {
            await Category.insertMany(categoryData);
            const reviews = await Review.insertMany(reviewData);
            const sampleProducts = productData.map((product) => {
              reviews.map((review) => {
                product.reviews.push(review._id);
              });
              return { ...product };
            });
            await Product.insertMany(sampleProducts);
            await User.insertMany(userData);
            await Order.insertMany(orderData);
      
            console.log("Seeder data imported successfully");
            process.exit();
            return
          }
          console.log("Seeder data deleted successfully");
          process.exit();
        } catch (error) {
          console.error("Error while proccessing seeder data", error);
          process.exit(1);
        }
      };
importData()