import { DB_URL } from "../constants/env";

type FetchParams = {
  url: string;
  method?: string;
  qs?: string | Object;
  body?: string | Object;
  fullResponse?: boolean;
  baseUrl?: string;
};

type FetchOptions = {
  method: string;
  headers?: Object;
  body?: string;
};

export const fetchData = ({
  url = "",
  method = "GET",
  qs,
  body,
  fullResponse = false,
  baseUrl
}: FetchParams) => {
  return new Promise(async (resolve, reject) => {
    if (!url) return reject(new Error("Invalid url"));

    baseUrl = baseUrl ?? DB_URL;

    let uri = `${baseUrl}${url}`;

    const headers = {
      "Content-Type": "application/json"
    };

    if (qs && typeof qs !== "string") {
      const parts = Object.keys(qs).map((key) => `${key}=${qs[key]}`);
      qs = `?${parts.join("&")}`;
      uri = uri + qs;
    }

    if (body && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    const options: RequestInit = { method, headers };
    if (body) {
      options.body = body as string;
    }

    let res;
    try {
      res = await fetch(uri, options);
    } catch (err) {
      return reject(err);
    }
    if (fullResponse) return resolve(res);
    if (!res.ok) return reject(new Error(res.statusText));
    return resolve(res.json());
  });
};
