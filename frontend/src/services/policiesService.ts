import instance from "../utils/API";
import { ParamsProps } from "../types/types";

export const getPolicies = (params: ParamsProps) =>
  instance.get("/policies", {
    params: {
      ...params,
    },
  });
