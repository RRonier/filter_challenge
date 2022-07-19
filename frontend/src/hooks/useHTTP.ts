import { useEffect, useState } from "react";

type Response<T = any> = {
  status: number;
  message: string;
  data: T;
};

function useFetch<T>(
  promise: () => Promise<any>,
  onSuccess: (values: T) => void,
  onError: (error: Error) => void,
  eject = true
) {
  const [loading, setLoading] = useState<boolean>(true);

  const onCallHTTP = (stream: Promise<any>) => {
    setLoading(true);
    stream
      .then((resp) => {
        onSuccess(resp.data);
        setLoading(false);
      })
      .catch((error) => {
        onError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (eject) {
      setLoading(true);
      promise()
        .then((resp) => {
          onSuccess(resp.data);
          setLoading(false);
        })
        .catch((error) => {
          onError(error);
          setLoading(false);
        });
    }
  }, []);

  return { loading, onCallHTTP };
}

export default useFetch;
