/*
 * User test data used for the test cases
 */

module.exports = {
  valid: {
    new: [
      {
        email: `test${new Date().getTime()}@test.com`, 
        password: 'Test1234', 
        firstName: 'John',
        lastName: 'Doe',
        dayDOB: '13',
        monthDOB: '5',
        yearDOB: '1990',
        address: '431 - First Street',
        city: 'Tampa',
        state: 'Florida',
        postalCode: '00000',
        country: 'United States',
        phone: '508508508'

      },  
    ],
    existing: [
      {
        email: 'automationuser@test.com',
        password: 'Test1234',
        firstName: 'John',
        lastName: 'Doe',
      },
    ],
  },
};
