import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";
import { TableProps } from "../../../types/types";
import Badge from "../Badge/Badge";

const Table = ({
  data,
  count,
  params,
  providersList,
  insurancesList,
  loading,
  paginate,
  onHandleChange,
  onSearch,
  onReset,
}: TableProps) => {
  const conditionalSpinner = loading ? <Spinner /> : null;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg shadow-sm">
            <div className="flex justify-start">
              <div className="mb-3 xl:w-96">
                <input
                  type="search"
                  name="search"
                  onChange={onHandleChange}
                  value={params.search}
                  className="
                    form-control
                    block
                    w-full  
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none"
                  id="exampleSearch2"
                  placeholder="Search by name"
                />
              </div>
            </div>
            <div className="flex justify-start">
              <div className="mb-3 xl:w-96">
                <select
                  name="provider"
                  value={params.provider}
                  onChange={onHandleChange}
                  placeholder="Insurance Provider"
                  className="form-select appearance-none
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option value="">All Providers</option>
                  {providersList.map(({ provider }, key) => (
                    <option key={key} value={provider}>
                      {provider}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="mb-3 xl:w-96">
                <select
                  name="insurance"
                  value={params.insurance}
                  onChange={onHandleChange}
                  placeholder="Insurance Type"
                  className="form-select appearance-none
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option value="">All Insurances</option>
                  {insurancesList.map(({ insuranceType }, key) => (
                    <option key={key} value={insuranceType}>
                      {insuranceType}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onSearch}
            >
              Search
            </button>
            <button
              className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onReset}
            >
              Clear
            </button>
            {conditionalSpinner}
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
                        {params.skip > 1
                          ? params.skip * params.take + i
                          : i + 1}
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
