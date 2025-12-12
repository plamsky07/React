export default function Task({ firstName, lastName, title, image, children }) {
  return (
    <div className="card">
      <h2 className="name">{firstName} {lastName}</h2>

      <div className="children-text">
        {children}
      </div>

      <img src={image} alt="avatar" className="avatar" />

      <p className="title">{title}</p>
    </div>
  );
}
