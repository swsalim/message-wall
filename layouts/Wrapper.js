
export default function Wrapper({ children }) {
  return (
    <div className="wrapper flex min-h-screen flex-col">
      <main className="flex-grow pt-16">{children}</main>
    </div>
  );
}
