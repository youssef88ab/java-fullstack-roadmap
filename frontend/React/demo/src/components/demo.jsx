function AllertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Demo() {
  return (
    <div>
      <AllertButton message="Play Movie">Play Movie</AllertButton>
      <AllertButton message="Pause Movie">Pause Movie</AllertButton>
    </div>
  );
}
