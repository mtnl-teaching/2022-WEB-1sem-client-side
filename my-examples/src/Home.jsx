import { Link } from "react-router-dom";

export default function Home({ examples }) {
  return (
    <div className="default-div">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {examples.map((example) => (
          <Link key={`link-keys-${example.key}`} to={example.key}>
            {example.key}
          </Link>
        ))}
      </div>
    </div>
  );
}
