import { useState } from "react";
import Badge from "./Badge";
import useHTTP from "./hooks/useHTTP";
import { getPolicies } from "./services/policiesService";
import { IPolicies, IPoliciesResponse } from "./interfaces/customer";
import Pagination from "./common/Pagination";

const Table = () => {
  const [data, setData] = useState<IPolicies[]>([]);
  const [count, setCount] = useState<number>(0);
  const [params, setParams] = useState({
    search: "",
    skip: 1,
    take: 10,
  });

  const { loading, onCallHTTP } = useHTTP(
    () => getPolicies({ ...params, skip: params.skip - 1 }),
    ({ policies, count }: IPoliciesResponse) => {
      setData(policies);
      setCount(count);
      console.log(policies);
    },
    (error) => console.log(error)
  );

  const paginate = (page: number) => {
    setParams({
      ...params,
      skip: page,
    });
    onCallHTTP(getPolicies({ ...params, skip: page - 1 }));
    console.log(page);
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg shadow-sm">
            <table className="min-w-full">
              <thead className="border-b bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Provider
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map(
                  (
                    {
                      customer: { firstName, lastName },
                      id,
                      provider,
                      insuranceType,
                      status,
                    },
                    i
                  ) => (
                    <tr key={id} className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {i + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {firstName} {lastName}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {provider}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {insuranceType}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Badge status={status} />
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <Pagination
              totalRows={count}
              rowsPerPage={params.take}
              paginate={paginate}
              currentPage={params.skip}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
