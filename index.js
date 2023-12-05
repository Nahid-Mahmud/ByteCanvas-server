const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 5000;

// middlewares

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Code from mongodb

const uri = `Your mongoDb Uri`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const appleCollection = client.db("appleDb").collection("products");
    const samsungCollection = client.db("samsungDb").collection("products");
    const googleCollection = client.db("googleDb").collection("products");
    const sonyCollection = client.db("sonyDb").collection("products");
    const huaweiCollection = client.db("huaweiDb").collection("products");
    const xiaomiCollection = client.db("xiaomiDb").collection("products");
    const cartCollection = client.db("cartDb").collection("cardProducts");

    // Own custom code here

    // post All data

    // Apple post 1
    app.post("/apple", async (req, res) => {
      const newProduct = req.body;
      console.log(newProduct);
      const result = await appleCollection.insertOne(newProduct);
      res.send(result);
    });

    // samsung post 2
    app.post("/samsung", async (req, res) => {
      const newProduct = req.body;
      console.log(newProduct);
      const result = await samsungCollection.insertOne(newProduct);
      res.send(result);
    });

    // Google Post 3
    app.post("/google", async (req, res) => {
      const newProduct = req.body;
      console.log(newProduct);
      const result = await googleCollection.insertOne(newProduct);
      res.send(result);
    });

    // sony post 4

    app.post("/sony", async (req, res) => {
      const newProduct = req.body;
      console.log(newProduct);
      const result = await sonyCollection.insertOne(newProduct);
      res.send(result);
    });
    // huawei post 5

    app.post("/huawei", async (req, res) => {
      const newProduct = req.body;
      console.log(newProduct);
      const result = await huaweiCollection.insertOne(newProduct);
      res.send(result);
    });

    // Xiaomi post 6

    app.post("/xiaomi", async (req, res) => {
      const newProduct = req.body;
      console.log(newProduct);
      const result = await xiaomiCollection.insertOne(newProduct);
      res.send(result);
    });

    // Get All products

    // get cart data

    // get product Apple 1
    app.get("/apple", async (req, res) => {
      const cursor = appleCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // get product Google 2
    app.get("/google", async (req, res) => {
      const cursor = googleCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // get product samsung 3
    app.get("/samsung", async (req, res) => {
      const cursor = samsungCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // get product sony 4
    app.get("/sony", async (req, res) => {
      const cursor = sonyCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // get product huawei 5
    app.get("/huawei", async (req, res) => {
      const cursor = huaweiCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // get product xiaomi 6
    app.get("/xiaomi", async (req, res) => {
      const cursor = xiaomiCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // find one data from  api's
    // apple
    app.get("/apple/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await appleCollection.findOne(query);
      res.send(result);
    });
    // google
    app.get("/google/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await googleCollection.findOne(query);
      res.send(result);
    });
    //samsung
    app.get("/samsung/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await samsungCollection.findOne(query);
      res.send(result);
    });
    //sony
    app.get("/sony/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await sonyCollection.findOne(query);
      res.send(result);
    });
    //huawei
    app.get("/huawei/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await huaweiCollection.findOne(query);
      res.send(result);
    });
    //xiaomi
    app.get("/xiaomi/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await xiaomiCollection.findOne(query);
      res.send(result);
    });

    // update Data from api

    // update  apple
    app.put("/apple/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedProductData = req.body;
      const updatedProduct = {
        $set: {
          productName: updatedProductData.productName,
          image: updatedProductData.image,
          productType: updatedProductData.productType,
          rating: updatedProductData.rating,
          description: updatedProductData.description,
          price: updatedProductData.price,
          brand: updatedProductData.brand,
        },
      };
      const result = await appleCollection.updateOne(
        filter,
        updatedProduct,
        options
      );
      res.send(result);
    });

    // update  google
    app.put("/google/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedProductData = req.body;
      const updatedProduct = {
        $set: {
          productName: updatedProductData.productName,
          image: updatedProductData.image,
          productType: updatedProductData.productType,
          rating: updatedProductData.rating,
          description: updatedProductData.description,
          price: updatedProductData.price,
          brand: updatedProductData.brand,
        },
      };
      const result = await googleCollection.updateOne(
        filter,
        updatedProduct,
        options
      );
      res.send(result);
    });

    // update  sony
    app.put("/sony/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedProductData = req.body;
      const updatedProduct = {
        $set: {
          productName: updatedProductData.productName,
          image: updatedProductData.image,
          productType: updatedProductData.productType,
          rating: updatedProductData.rating,
          description: updatedProductData.description,
          price: updatedProductData.price,
          brand: updatedProductData.brand,
        },
      };
      const result = await sonyCollection.updateOne(
        filter,
        updatedProduct,
        options
      );
      res.send(result);
    });

    // update  huawei
    app.put("/huawei/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedProductData = req.body;
      const updatedProduct = {
        $set: {
          productName: updatedProductData.productName,
          image: updatedProductData.image,
          productType: updatedProductData.productType,
          rating: updatedProductData.rating,
          description: updatedProductData.description,
          price: updatedProductData.price,
          brand: updatedProductData.brand,
        },
      };
      const result = await huaweiCollection.updateOne(
        filter,
        updatedProduct,
        options
      );
      res.send(result);
    });

    // update  xiaomi
    app.put("/xiaomi/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedProductData = req.body;
      const updatedProduct = {
        $set: {
          productName: updatedProductData.productName,
          image: updatedProductData.image,
          productType: updatedProductData.productType,
          rating: updatedProductData.rating,
          description: updatedProductData.description,
          price: updatedProductData.price,
          brand: updatedProductData.brand,
        },
      };
      const result = await xiaomiCollection.updateOne(
        filter,
        updatedProduct,
        options
      );
      res.send(result);
    });

    // update  samsung
    app.put("/samsung/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedProductData = req.body;
      const updatedProduct = {
        $set: {
          productName: updatedProductData.productName,
          image: updatedProductData.image,
          productType: updatedProductData.productType,
          rating: updatedProductData.rating,
          description: updatedProductData.description,
          price: updatedProductData.price,
          brand: updatedProductData.brand,
        },
      };
      const result = await samsungCollection.updateOne(
        filter,
        updatedProduct,
        options
      );
      res.send(result);
    });

    // delete Api

    // cart operations
    // cart post
    app.post("/cart", async (req, res) => {
      const newCart = req.body;
      const result = await cartCollection.insertOne(newCart);
      res.send(result);
    });

    // Get All products

    // get cart data
    app.get("/cart", async (req, res) => {
      const cursor = cartCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // delete single cart

    app.delete("/cart/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    // Authoraization related api

    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      });
      res
        .cookie("accessToken", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // Set to true in production
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", // Adjust based on your requirements
        })
        .send({ success: true });
    });

    // res
    //   .cookie("token", token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === "production", // Set to true in production
    //     sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", // Adjust based on your requirements
    //     // maxAge: // how much time the cookie will exist
    //   })
    //   .send({ status: "true" });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//
app.get("/", (req, res) => {
  res.send("Server Is Running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
