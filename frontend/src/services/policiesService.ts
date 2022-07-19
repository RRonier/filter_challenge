import instance from "../utils/API";

export const getPolicies = (params: any) =>
  instance.get("/policies", {
    params: {
      ...params,
    },
  });
