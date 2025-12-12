import PostList from "./PostList";

const Content = (props) => {
  return (
    <section style={{ flex: 1 }}>
      <h2>Статии</h2>
      <PostList posts={props.posts} />
    </section>
  );
};

export default Content;
