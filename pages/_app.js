import "../scss/.base/bootstrap-grid.min.css";
import "../styles/globals.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></script>
      <div
        class="elfsight-app-872284fd-e602-4d71-ba92-a75a88fadaae"
        data-elfsight-app-lazy
      ></div>
    </Layout>
  );
}

export default MyApp;
