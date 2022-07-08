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

describe('GET request', () => {
  it('should respond with 200 status code upon success for a GET /reviews request', () => {
      request(url)
      .get('/reviews/?product_id=1')
      .then((res) => {
        expect(res.statusCode).to.equal(200);
        console.log(res.body);
      });
  })
  
  it('should respond with an object upon success for a GET /reviews request', () => {
    request(url)
    .get('/reviews/?product_id=1')
    .then((res) => {
      expect(res.body).to.be.an('object');
    });
  })
})
