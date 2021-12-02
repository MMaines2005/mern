const faker = require("faker");

const express = require("express");
const { application } = require("express");

const app = express();
const port = 8000;



const makeUserObj= () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password,
});


const makeCompanyObj = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country(),
    }
});

app.get("/api/user/new", (req,res) => {
    const newUser = makeUserObj();
    res.json(newUser);
});
app.get("/api/company/new", (req,res) => {
    const newCompany = makeCompanyObj();
    res.json(newCompany);
});
app.get("/api/user/new", (req,res) => {
    const newUser = makeUserObj();
    const newCompany = makeCompanyObj();
    const replyObj = {
        User: newUser,
        Company: newCompany,
    }
    res.json(replyObj);
});

app.listen(port, () => console.log("Express is listening on port ${port}"));