import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";
import { TableProps } from "../../../types/types";
import Badge from "../Badge/Badge";
import { TextField } from "../TextField/TextField";
import DropDown from "../DropDown/DropDown";
import Button from "../Button/Button";

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
            <div className="flex max-w-4 mb-2">
              <TextField onHandleChange={onHandleChange} params={params} />
              <DropDown
                name="provider"
                value={params.provider}
                onHandleChange={onHandleChange}
                placeholder="Insurance Provider"
                text="All Providers"
                providersList={providersList}
              />
              <DropDown
                name="insurance"
                value={params.insurance}
                onHandleChange={onHandleChange}
                placeholder="Insurance Provider"
                text="All Insurances"
                insurancesList={insurancesList}
              />
              <div>
                <Button type="search" label="Search" onClick={onSearch} />
                <span className="m-4">
                  <Button type="reset" label="Reset" onClick={onReset} />
                </span>
              </div>
            </div>
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
