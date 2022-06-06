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

  it('Case2: Get all customers', async () => {
    const response = await request(app)
      .get('')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8');
  });


  it('Case3: Get one Customer', async () => {
    const response = await request(app)
      .get('/629cd163ae48b6280a860edd')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8');
  });


  it('Case4: Put request update Customer', async () => {
    const response = await request(app)
      .put('/629cd163ae48b6280a860edd')
      .send({    
        name: "Wael" ,
        address: "Canada" ,
        phone: "+717 5648912356"  
  })
  .set('Accept', 'application/json')
      .set('Content-Type', 'application/json; charset=utf-8')
      .expect(201);
      expect(response.text).toContain('Customer updated successfully!');
  });

  it('Case5: DELETE Customer', async () => {
    const response = await request(app)
      .delete('/629cd163ae48b6280a860edd')
      .expect(200);
      expect(response.text).toContain('Customer was deleted');
    }); 

});


