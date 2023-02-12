const express = require("express");
const app = express();
const port = 1132;

const { faker } = require('@faker-js/faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const users = [
    {   userId: faker.datatype.uuid(),
        firstName: faker.name.firstName(),  
        lastName: faker.name.lastName(), 
        phone: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()}
];

const companies = [
    {   companiesId: faker.datatype.uuid(),
        companies: faker.company.name(),
        direction: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        postcode: faker.address.zipCode(),
        country: faker.address.country(),

        
        
        }
];

let company =[];

const newcompany = () => {
    company = [];
    for( var i = 0; i < 1; i++){
        company.push({ 
            userId: faker.datatype.uuid(),
        firstName: faker.name.firstName(),  
        lastName: faker.name.lastName(), 
        phone: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        companiesId: faker.datatype.uuid(),
        companies: faker.company.name(),
        direction: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        postcode: faker.address.zipCode(),
        country: faker.address.country(),
                    })
    }
}

newcompany();

app.get("/api/user/company", (req, res) => {
    res.json( company  );
});


app.get("/api/users/new", (req, res) => {
    res.json( users );
});

app.get("/api/companies/new", (req, res) => {
    res.json( companies );
});

// esto tiene que estar debajo de los otros bloques de código
app.listen( port, () => console.log(`Listening on port: ${port}`) );
