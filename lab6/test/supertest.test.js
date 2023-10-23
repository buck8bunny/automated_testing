const supertest = require('supertest');
const api = supertest('https://gorest.co.in/public/v2');

describe('User API Tests', () => {
    /* ваші дані користувача */
    const userData = {
        id: 5462154,
        name: 'Tesfet Ramakrishna',
        email: 'ergerehtfbrhrtha@15ce.com',
        gender: 'male',
        status: 'active',
    };

    it('should create a new user', (done) => {
        api.post('/users')
            .set('Authorization', 'Bearer YOUR_API_KEY') // Додайте ваш токен доступу
            .send(userData)
            .expect(201) // Очікуваний код статусу 201 (Created)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
    /* ваші нові дані користувача */
    const userData2 = {
        id: 5462154,
        name: 'Barny Poroshenko',
        email: 'mishkabarny@gmail.com',
        gender: 'male',
        status: 'active',
    };

    it('should update user details', (done) => {
        api.put('/users/5449918')
            .set('Authorization', 'Bearer YOUR_API_KEY') // Додайте ваш токен доступу
            .send(userData2)
            .expect(200) // Очікуваний код статусу 200 (OK)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
      });
    
      it('should delete a user', (done) => {
        const graphqlQuery = 'mutation { deleteUser(input: { id: 628333 }) { user { id name email gender status } } }';
    
        api.post('/graphql')
            .set('Authorization', 'Bearer YOUR_API_KEY') // Додайте ваш токен доступу
            .send({ query: graphqlQuery })
            .expect(200) // Очікуваний код статусу 200 (OK)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
      });
});
