import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '1s', target: 1 },
    { duration: '1s', target: 10 },
    { duration: '1s', target: 100 },
    { duration: '1s', target: 1000 },
    { duration: '1s', target: 0 },
    // { duration: '2m', target: 100 }, // below normal load
    // { duration: '5m', target: 100 },
    // { duration: '2m', target: 200 }, // normal load
    // { duration: '5m', target: 200 },
    // { duration: '2m', target: 300 }, // around the breaking point
    // { duration: '5m', target: 300 },
    // { duration: '2m', target: 400 }, // beyond the breaking point
    // { duration: '5m', target: 400 },
    // { duration: '10m', target: 0 },
  ]
}

const BASE_URL = 'http://localhost:8000/reviews'

export default () => {
  http.batch([
    // ['GET', `${BASE_URL}/?product_id=1000009`],
    ['GET', `${BASE_URL}/meta/?product_id=1000005`]
  ])
  // Each virtual users will call the API once a second
  sleep(1);
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}