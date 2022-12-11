const User = require("../model/UserModel")
const Review = require("../model/ReviewModel");
const Product = require("../model/ProductModel");
const jwt = require("jsonwebtoken")
const { hashPassord , comparePassword } = require("../utils/hashPassword");

const maxAge = 3 * 24 * 60 * 60;
const generateAuthToken = (_id, name, lastName, email, isAdmin ) => {
    return jwt.sign(
        {_id, name, lastName, email, isAdmin},
        process.env.SECRET_KEY,
        {expiresIn: maxAge}
    )
}



exports.getUser = async(req, res, next) => {
    try{
        const users = await User.find({}).select("-password")
        return res.json(users)
    }catch(err){
        next(err)
    }
}

exports.registerUser = async (req, res, next) => {
    try{

        const { name, lastName, email, password } = req.body
        if(!(name && lastName && email && password)) {
            return res.status(400).send("all inputs are required")
        }

        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).send("user exists")
        } else {
            const hasedPassword = hashPassord(password)
            const user = await User.create({
                name, 
                lastName, 
                email:email.toLowerCase(), 
                password: hasedPassword
            })

            res
             .cookie("access_token", generateAuthToken(
                user._id,
                user.name,
                user.lastName,
                user.email,
                user.isAdmin
             ), {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict"
            })
            .status(201).json({success: "User creted", userCreated: {
                _id: user._id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                isAdmin: user.isAdmin,

            }})
        }

    }catch(err){
        next(err)
    }
}

exports.loginUser = async (req, res, next) => {
    const { email, password, doNotLogout } = req.body;
  
    try {
        const user = await User.findOne({email}).orFail();
        const token =  generateAuthToken( user._id,
            user.name,
            user.lastName,
            user.email,
            user.isAdmin)

    

      if (!(email && password)) {
        return res.status(400).send("All inputs are required");
      }

      if (user && comparePassword(password, user.password)) {
        let cookieParams = {
            httpOnly: false, 
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
            maxAge: maxAge * 1000 }
    
        res.cookie("access_token", token, cookieParams)
          .json({
            success: "user logged in",
            userLoggedIn: {
              _id: user._id,
              name: user.name,
              lastName: user.lastName,
              email: user.email,
              isAdmin: user.isAdmin,
              doNotLogout,
              status: true
            },
          });
      } else {
        return res.status(401).send("wrong credentials");
      }
    } catch (err) {
      next(err);
    }
  };

exports.updateUserProfile = async (req, res, next) => {
    try{
        const user = await User.findById(req.user._id).orFail()
        user.name = req.body.name || user.name;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;
        user.phoneNumber = req.body.phoneNumber;
        user.address = req.body.address;
        user.country = req.body.country;
        user.zipCode = req.body.zipCode;
        user.city = req.body.city;
        user.state = req.body.state;
        if (req.body.password !== user.password) {
          user.password = hashPassord(req.body.password);
        }
        await user.save();

    res.json({
      success: "user updated",
      userUpdated: {
        _id: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    }); 
    }catch(err){
        next(err)
    }
}

exports.getUserProfile = async(req, res, next) => {
    try{
        const user = await User.findById(req.params.id).orFail()
        return res.send(user)
    }catch(err){
        next(err)
    }
}

exports.writeReview = async (req, res, next) => {
    //let session =  mongoose.startSession()
    try {

        //const session = await Review.startSession();
         //await mongoose.startSession()

        // get comment, rating from request.body:
        const { comment, rating } = req.body;
        // validate request:
        if (!(comment && rating)) {
            return res.status(400).send("All inputs are required");
        }

        // create review id manually because it is needed also for saving in Product collection
        const ObjectId = require("mongodb").ObjectId;
        let reviewId = ObjectId();

        //session.startTransaction();
        await Review.create([
            {
                _id: reviewId,
                comment: comment,
                rating: Number(rating),
                user: { _id: req.user._id, name: req.user.name + " " + req.user.lastName },
            }
        ],{/*{ session: session }*/})

        const product = await Product.findById(req.params.productId).populate("reviews");
        //.session(session)
        
        const alreadyReviewed = product.reviews.find((r) => r.user._id.toString() === req.user._id.toString());
        if (alreadyReviewed) {
            //await session.abortTransaction();
            //session.endSession();
            return res.status(400).send("product already reviewed");
        }

        let prc = [...product.reviews];
        prc.push({ rating: rating });
        product.reviews.push(reviewId);
        if (product.reviews.length === 1) {
            product.rating = Number(rating);
            product.reviewsNumber = 1;
        } else {
            product.reviewsNumber = product.reviews.length;
            product.rating = prc.map((item) => Number(item.rating)).reduce((sum, item) => sum + item, 0) / product.reviews.length;
        }
        await product.save();

        //await session.commitTransaction();
        res.send('review created')
    } catch (err) {
        //await session.abortTransaction();
        //session.endSession();
        next(err)   
    }
}

exports.getUsers = async(req, res, next) => {
    try{
        const user = await User.findById(req.params.id).select("name lastName email isAdmin").orFail()
        return res.send(user)
    }catch(err){
        next(err)
    }
}

exports.updateUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id).orFail()

        user.name = req.body.name || user.name
        user.lastName = req.body.lastName || user.lastName
        user.email = req.body.email || user.email
        user.isAdmin = req.body.isAdmin || user.isAdmin;

        await user.save()

        res.send("user updated")
    }catch(err){
        next(err)
    }
}

exports.deleteUser = async (req, res, next ) => {
    try{
      const user = await User.findById(req.params.id).orFail()
      await user.remove()
      res.send("user deleted")
    }catch(err){
        next(err)
    }
}