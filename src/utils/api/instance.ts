interface ApiRequestInit extends Omit<RequestInit, 'body'> {
  body?: any
}

export class API {
  readonly baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async request<T>(url: string, init?: ApiRequestInit): Promise<{
    ok: true,
    data: T
  } | {
    ok: false,
    error: any
  }> {
    try {
      const response: T = await fetch(this.baseURL + url, {
        ...init,
        headers: {
          ...init?.headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(init?.body),
      })
        .then((res) => res.json());

      return {
        ok: true,
        data: response,
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
