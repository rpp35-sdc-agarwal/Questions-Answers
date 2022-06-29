const chai = require('chai');
const expect = require('chai').expect;
const assert = require('assert');
const request = require('supertest');
const express = require('express');

const url = 'http://localhost:8000';

describe('Review Server', () => {
  it('should return 200 status code', async () => {
    const response = await request(url)
      .get('/');
      expect(response.statusCode).to.equal(200);
  })
})
