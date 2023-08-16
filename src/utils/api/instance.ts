interface ApiRequestInit extends Omit<RequestInit, 'body'> {
  body?: any
}

interface ApiParams {
  baseURL: string
}

export class API {
  readonly baseURL: string;

  constructor({ baseURL }: ApiParams) {
    this.baseURL = baseURL;
  }

  async request<T>(url: string, init?: ApiRequestInit): Promise<
  | { ok: true, data: T }
  | { ok: false, error: any }
  > {
    try {
      const response = await fetch(this.baseURL + url, {
        ...init,
        headers: {
          ...init?.headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(init?.body),
      });
      const data: T = await response.json();

      return {
        ok: true,
        data,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }

  async get<T>(url: string) {
    return this.request<T>(url, {
      method: 'GET',
    });
  }
}
