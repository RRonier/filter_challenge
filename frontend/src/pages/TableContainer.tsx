import Header from "../components/ui/Header/Header";
import Table from "../components/common/Table/Table";
import { useState, ChangeEvent } from "react";
import useHTTP from "../hooks/useHTTP";
import { getPolicies } from "../services/policiesService";
import {
  IPolicies,
  PoliciesResponseProps,
  IProvider,
  IInsuranceTypes,
} from "../types/types";

const TableContainer = () => {
  const [data, setData] = useState<IPolicies[]>([]);
  const [count, setCount] = useState<number>(0);
  const [providersList, setProvidersList] = useState<IProvider[]>([]);
  const [insurancesList, setInsurancesList] = useState<IInsuranceTypes[]>([]);

  const [params, setParams] = useState({
    search: "",
    skip: 1,
    take: 10,
    provider: "",
    insurance: "",
  });

  const { loading, onCallHTTP } = useHTTP(
    () => getPolicies({ ...params, skip: params.skip - 1 }),
    ({ policies, count, providers, insuranceTypes }: PoliciesResponseProps) => {
      setData(policies);
      setCount(count);
      setProvidersList(providers);
      setInsurancesList(insuranceTypes);
    },
    (error) => console.log(error)
  );

  const paginate = (page: number) => {
    setParams({
      ...params,
      skip: page,
    });
    onCallHTTP(getPolicies({ ...params, skip: page - 1 }));
  };

  const onHandleChange = (e: ChangeEvent<HTMLInputElement> | any) => {
    const { name, value } = e.target;
    setParams({
      ...params,
      [name]: value,
    });
  };

  const onSearch = () => {
    onCallHTTP(getPolicies({ ...params }));
  };

  const onReset = () => {
    setParams({
      search: "",
      skip: 1,
      take: 10,
      provider: "",
      insurance: "",
    });
    onCallHTTP(
      getPolicies({
        search: "",
        skip: 1,
        take: 10,
        provider: "",
        insurance: "",
      })
    );
  };

  return (
    <>
      <Header />
      <Table
        data={data}
        count={count}
        params={params}
        providersList={providersList}
        insurancesList={insurancesList}
        loading={loading}
        paginate={paginate}
        onHandleChange={onHandleChange}
        onSearch={onSearch}
        onReset={onReset}
      />
    </>
  );
};

export default TableContainer;
