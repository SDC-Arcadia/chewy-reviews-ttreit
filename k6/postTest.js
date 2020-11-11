import http from 'k6/http';
import { check } from 'k6';
//import { json } from 'body-parser';

export let options = {
  vus: 1,
  duration: '1s',
  rps: 1000,
};
export default function () {
  const url = 'http://localhost:3007/addReview/';
  let randomId = Math.floor(Math.random() * (10000000 - 9000000 + 1) + 9000000);
  let payload = JSON.stringify({
    product_id: randomId,
    title: 'k6 Title',
    author: 'k6 author',
    create_date: Date.now,
    body: 'k6 body',
    likes: 12,
    stars: 3,
    recommended: true,
  });
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);

  // check(res, {
  //   "is status 200": (r) => r.status === 200
  // });
}
