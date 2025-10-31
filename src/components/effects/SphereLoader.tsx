import "./SphereLoader.css";

const SphereLoader = () => {
  return (
    <div className="sphere-loader-container">
      <div className="sphere-loader">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div key={num} className={`sphere sphere${num}`} style={{ '--rot': num } as React.CSSProperties}>
            <div className="item" style={{ '--rot-y': num } as React.CSSProperties}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SphereLoader;
