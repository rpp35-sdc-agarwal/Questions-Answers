const chai = require('chai');
const expect = chai.expect;
const assert = require('assert');
const express = require('express');
const app = require('../server/index.js');
const request = require('supertest');
const db = require('.././database/index.js');
const clearReviewData = require('./testHelper/clearReviewData.js');
const retrieveReviews = require('../server/middlewares/retrieveReviews.js');

const url = 'http://localhost:8000';

describe('Review Server', () => {
  it('should be running', async () => {
    const response = await request(url)
      .get('/');
      expect(response.statusCode).to.equal(200);
  })
})

describe('GET reviews/ request', () => {
  it('should respond with 200 status code upon success for a GET /reviews request', () => {
      request(url)
      .get('/reviews/?product_id=1')
      .then((res) => {
        expect(res.statusCode).to.equal(200);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  
  it('should respond with an object upon success for a GET /reviews request', () => {
    request(url)
    .get('/reviews/?product_id=1')
    .then((res) => {
      expect(res.body).to.be.an('object');
    })
    .catch((err) => {
      console.log(err);
    });
  })
})

describe('POST reviews/ request', () => {
  let body = {
    "product_id": 2,
    "rating": 5,
    "summary": "I like it",
    "body": "Highly recommended",
    "recommend": true,
    "reviewer_name": "kiki_test",
    "reviewer_email": "test@email.com",
    "photos": ["https://unsplash.com/photos/-uJ3N7HLiEg", "https://unsplash.com/photos/5gkYsrH_ebY"],
    "characteristics": {
      "15": 5,
      "16": 4
    }
  }
  
  let reviewId;
  
  it('should respond with 201 status code upon success for a POST /reviews request', async () => {
    try {
      let res = await request(url)
      .post('/reviews')
      .set('Content-type', 'application/json')
      .send(body)
      
      expect(res.statusCode).to.equal(201);
      reviewId = Number(res.text)
    } catch(err) {
      console.log(err);
    }
  })
  
  it('review should be in the database', async () => {
    try {
      let reviewCount = await db.query (`SELECT COUNT (*) FROM reviews WHERE review_id=${reviewId}`)
      expect(reviewCount).to.not.equal(0);
    } catch (err) {
      console.log(err);
    }
  })
  
  it ('photos should be in the databse', async () => {
    try {
      let photosCount = await db.query (`SELECT COUNT (*) FROM photos WHERE review_id=${reviewId}`)
      expect(photosCount).to.not.equal(0);
    } catch (err) {
      console.log(err);
    }
  })
  
  it('characteristics should be in the database', async () => {
    try {
      let characteristicsCount = await db.query (`SELECT COUNT (*) FROM photos WHERE review_id=${reviewId}`)
      expect(characteristicsCount).to.not.equal(0);
      clearReviewData(reviewId);
    } catch (err) {
      console.log(err);
    }
  })
})

describe('GET reviews/meta request', () => {
  let body = {
    product_id: 4
  }
  it('should respond with 200 status code upon success for a GET /reviews/meta request', () => {
      request(url)
      .get('/reviews/meta')
      .send(body)
      .then((res) => {
        expect(res.statusCode).to.equal(200);
      })
      .catch((err) => {
        console.log(err);
      })
  })
})

describe('PUT reviews/:review_id/helpful request', () => {
  
})

describe('PUT reviews/:review_id/report', () => {
  
})
