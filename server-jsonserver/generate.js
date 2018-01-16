const faker = require('faker');
const _ = require('lodash');

const fakeUserGen = () => ({
  users: _.times(10, n => ({
    id: `${n}`,
    firstName: faker.name.firstName(),
    age: faker.random.number({ min: 17, max: 100 }),
    companyId: `${faker.random.number({ min: 0, max: 4 })}`,
  })),
});

const fakeCompanyGen = () => ({
  companies: _.times(5, n => ({
    id: `${n}`,
    name: faker.company.companyName(),
    description: faker.company.catchPhraseDescriptor(),
  })),
});

module.exports.fakeUserGen = fakeUserGen;
module.exports.fakeCompanyGen = fakeCompanyGen;
