import Sidebar from "./Sidebar";
import Content from "./Content";

const Main = (props) => {
  return (
    <main style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Sidebar />
      <Content posts={props.posts} />
    </main>
  );
};

export default Main;
