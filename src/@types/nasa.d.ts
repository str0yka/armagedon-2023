type NasaApiError = {
  code: number,
  http_error: string,
  error_message: string,
  request: string,
};

type AsteroidCloseApproachData = {
  epoch_date_close_approach: number,
  miss_distance: {
    lunar: string,
    kilometers: string,
  },
  orbiting_body: string,
};

type Asteroid = {
  id: string,
  name: string,
  estimated_diameter: {
    meters: {
      estimated_diameter_min: number,
      estimated_diameter_max: number,
    },
  },
  is_potentially_hazardous_asteroid: boolean,
  close_approach_data: Array<AsteroidCloseApproachData>,
};

type AsteroidList = {
  element_count: number,
  near_earth_objects: {
    [key: string]: Array<Asteroid>
  }
};
