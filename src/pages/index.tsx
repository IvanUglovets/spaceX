import { CompanyDocument } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";

const Home = () => {
  const info = useQuery(CompanyDocument)
  return <h1>HELLO</h1>;
};

export default Home;
