import Layout from "../../components/layout";
import Link from "next/link";
import ItemListDashBoard from "../dmvt/dashboard";
import ItemTypeDashBoard from "../dmloaivt/dashboard";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col h-25 d-inline-block">
          <ItemListDashBoard/>
          </div>
          <div className="col h-25 d-inline-block">
          <ItemTypeDashBoard/>
          </div>
          <div className="w-100"></div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </Layout>
  );
}
