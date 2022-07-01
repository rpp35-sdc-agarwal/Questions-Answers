const chai = require('chai');
const expect = chai.expect;
const assert = require('assert');
const express = require('express');
const app = require('../server/index.js');
const request = require('supertest');

const url = 'http://localhost:8000';

describe('Review Server', () => {
  it('should be running', async () => {
    const response = await request(url)
      .get('/');
      expect(response.statusCode).to.equal(200);
  })
})

// describe('Get request', () => {
//   it('should respond with 200 status code upon success for a GET /reviews request', async () => {
//     try {
//       // const response = await request(url)
//       // .get('/reviews/?product_id=1')
//       //   expect(res.statusCode).to.equal(200);
        
//       request(url)
//       .get('/reviews/?product_id=1')
//       .then((res) => {
//         expect(res.statusCode).to.equal(200);
//       });
      
//       // expect(response.body).to.be.an('object');
//       // console.log(response.body);
      
//     } catch (err) {
//       console.log(err);
//     }
//   })
// })

describe('Get request', () => {
  it('should respond with 200 status code upon success for a GET /reviews request', () => {
      request(url)
      .get('/reviews/?product_id=1')
      .then((res) => {
        expect(res.statusCode).to.equal(200);
      });
  })
})
