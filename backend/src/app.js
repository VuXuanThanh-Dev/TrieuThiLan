const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db  = require('./configs/db.config');
const userRouter = require('./routers/user.router');
const adminRouter = require('./routers/admin.router');


const abstain = require('./models/abstain.model');
const abstain_sick = require('./models/abstain_sick.model');
const consequence = require('./models/consequence.model');
const consequence_sick = require('./models/consequence_sick.model');
const folkMedicine = require('./models/folkMedicine.model');
const product = require('./models/product.model');
const introduce = require('./models/introduce.model');
const sick = require('./models/sick.model');
const image = require ('./models/image.model');
const symptom = require('./models/symptom.model');
const symptom_sick = require('./models/symptom_sick.model');

sick.hasOne(folkMedicine);
folkMedicine.belongsTo(sick);

sick.hasMany(product);
product.belongsTo(sick);

introduce.hasMany(image);
image.belongsTo(introduce);

sick.hasMany(image);
image.belongsTo(sick);

product.hasMany(image);
image.belongsTo(product);


sick.belongsToMany(symptom, {through: symptom_sick});
symptom.belongsToMany(sick, {through: symptom_sick});

sick.belongsToMany(abstain, {through: abstain_sick});
abstain.belongsToMany(sick, { through: abstain_sick});

sick.belongsToMany(consequence, { through: consequence_sick});
consequence.belongsToMany(sick, { through: consequence_sick});





const PORT = process.env.PORT | 3000;

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res, next)=>{
    res.json({message: "Hello my app", data: []});
    next();
});

app.use(adminRouter);
app.use(userRouter);
db
  // .sync({ force: true })
  .sync()
  .then(res =>{
    app.listen(PORT, ()=>{
        console.log(res);
    });
  })
  .catch(err => {
      console.log(err);
  });


