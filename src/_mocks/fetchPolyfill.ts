import fetch, { Headers, Request, Response } from 'node-fetch';

if (!globalThis.fetch) {
  // @ts-expect-error node-fetch is only a partial fetch implementation
  globalThis.fetch = fetch;
  // @ts-expect-error node-fetch is only a partial fetch implementation
  globalThis.Headers = Headers;
  // @ts-expect-error node-fetch is only a partial fetch implementation
  globalThis.Request = Request;
  // @ts-expect-error node-fetch is only a partial fetch implementation
  globalThis.Response = Response;
}
