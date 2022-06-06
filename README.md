# Project Title
 Build A 
Number Verification web page


## Table of Content

 front-end and backend-service folders



## Technologies

front-end: React \
backend: Rest API, Node JS Express, and Mongo DB


## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

```bach
npm install
```   


# 1. cd front-end folder
To Run Test Suite:  

```bach
npm test
```   
Launches the test runner in the interactive watch mode.\

To Start Server:

```bach
npm run start
```  

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
 


#### Good parts
```bash
  const [customers, setCustomers] = useState([]);
  const [customerID, setCustomerID] = useState(null);
  const [isLoading, setLoading] = useState(true);
```

```bash
  const clearForm = () => {
    setCustomerDetails({
      name: "",
      address: "",
      phone: "",
    });
  };
```


#### Needs improvements
```bash
  axios.get("http://localhost:8080/")
      .then(res => {
        setCustomers(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
```

```bash

  const createCustomer = async () => {
    if (checkFormInput()) {
      const response = await API.post(``, customerDetails);

      if (response.data["valid"] === false || !response.data["valid"]) {
        setPhoneError("not valide");
      } else {
        setPhoneError(null);
        console.log({
          "Country name :": response.data.country_name,
          "Country code :": response.data.country_code,
          "Carrier name :": response.data.carrier,
        });
      }
      setmissingFields(null);
    }
  };
```
more test functions
```bash
describe("CustomerList component renders", () => {
  test("it displays a number  for each customer ", async () => {
    axios.get.mockResolvedValue({ data: fakeCustomers });
    render(<CustomerList />);

    const customerList = await waitFor(() => screen.findAllByTestId("customer-list"));
    expect(customerList).toHaveLength(1);
  });
});
```


# 2.cd backend-service folder 

To Run Test Suite:  

```bach
npm test
```   


To Start Server:

```bach
npm run start
```  

Runs the app in the development mode.\
http://localhost:8080

### Requirements
need an ACCESS_KEY from NumVerify API
```bash
NUMVERIFY_ACESS_KEY = --------------------------------
```

### Table Contents

```
my-app/
  node_modules/
  src/
     models/
         Customer.js 
     routes/
         customer.js
         validatePhone.js
     test/
         db.json
         customerRoutes.js
  .env
  .gitignore
  package.json
  server.js
```

#### Good parts
securing API access URLs
```bash
  const [customers, setCustomers] = useState([]);
  const [customerID, setCustomerID] = useState(null);
  const [isLoading, setLoading] = useState(true);
```

```bash
const CustomerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
});
```

```bash
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const checkValid = await validatePhoneNumber(req.body.phone);

  if (checkValid.valid == true) {
    const customer = new Customer({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
    });

    try {
       await customer.save();
      res.json(checkValid);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }

  } else 
    res.json(checkValid);
});
```


#### Needs improvements
```bash
 router.post("/", async (req, res) => {
  const checkValid = await validatePhoneNumber(req.body.phone);

  if (checkValid.valid == true) {
    const customer = new Customer({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
    });

    try {
       await customer.save();
      res.json(checkValid);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }

  } else 
    res.json(checkValid);
});
```


```

test functions
```bash
const request = require('supertest');
let app = require('../../server');

//  still needs work
describe('Test Suite: Customer Module testing', () => {
  it('Case1: Creating Customer', async () => {
    const response = await request(app)
      .post('')
      .send({
            name: "Wael" ,
            address: "Germany" ,
            phone: "+491235646" 
      })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json; charset=utf-8')
      .expect(201);
      expect(response.text).toContain('Customer saved successfully!');

  });
```