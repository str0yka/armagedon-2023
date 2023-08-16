import { API } from '~/utils/api/instance';

const nasaApi = new API({
  baseURL: process.env.NEXT_PUBLIC_NASA_API_URL as string,
});

interface GetNeoWsAsteroidsParams {
  startDate: {
    day: number,
    month: number,
    year: number,
  },
  endDate?: {
    day: number,
    month: number,
    year: number,
  }
}

export class NasaApi {
  static async getNeoWsAsteroids({ startDate, endDate }: GetNeoWsAsteroidsParams) {
    const params = new URLSearchParams({
      start_date: `${startDate.year}-${startDate.month}-${startDate.day}`,
      end_date: `${endDate?.year ?? startDate.year}-${endDate?.month ?? startDate.month}-${endDate?.day ?? startDate.day}`,
      api_key: process.env.NEXT_PUBLIC_NASA_API_KEY as string,
    });

    const response = await nasaApi.get<AsteroidList | NasaApiError>(
      `/feed?${params.toString()}`,
    );

    if (!response.ok) {
      throw new Error(response.error.message);
    }

    if ('error_message' in response.data) {
      throw new Error(response.data.error_message);
    }

    const { data } = response;

    return data.near_earth_objects;
  }

  static async getOne(id: string) {
    const params = new URLSearchParams({
      api_key: process.env.NEXT_PUBLIC_NASA_API_KEY as string,
    });
    const response = await nasaApi.get<Asteroid | NasaApiError>(`/neo/${id}?${params.toString()}`);

    if (!response.ok) {
      throw new Error(response.error.message);
    }

    if ('error_message' in response.data) {
      throw new Error(response.data.error_message);
    }

    const { data } = response;

    return data;
  }
}
