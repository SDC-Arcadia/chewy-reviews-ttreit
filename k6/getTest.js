import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

export let options = {
  vus: 100,
  duration: '1200s',
  rps: 1100,
};
export default function () {
  let item = Math.floor(Math.random() * (10000000 - 9000000 + 1) + 9000000);
  let res = http.get(`http://localhost:3007/reviewData/${item}`);
  check(res, {
    "is status 200": (r) => r.status === 200
  });
}
