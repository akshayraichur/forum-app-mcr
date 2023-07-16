const Container = (props) => {
  return (
    <div className="container">
      <div className="left">
        <div className="p-container">
          <p>Home</p>
          <p>Explore</p>
          <p>Bookmarks</p>
          <p>Profile</p>
        </div>
      </div>
      <div className="center">{props.children}</div>
      <div className="right">hola</div>
    </div>
  );
};

export default Container;
