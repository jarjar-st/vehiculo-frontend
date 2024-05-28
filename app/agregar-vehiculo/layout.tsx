import Navbar from "@/components/navbar/navbar";



export default function AgregarVehiculoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        {children}
      </div>
    </>

  );
}
