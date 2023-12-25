export function ContainerLayout({ children, id }) {
  return (
    <div className="container max-w-7xl mx-auto px-5 py-5 md:py-24">
      {children}
    </div>
  );
}

export function PageContainer({ children }) {
  return <div className="mt-[80px] sm:mt-14">{children}</div>;
}
