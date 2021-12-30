import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  vus: 1,
  duration: '30s',
};
export default function () {
  let data = { message: 'QWE' };
  http.post('http://127.0.0.1:8080/room-post/hn?nick=ryan', data);
  sleep(1);
}