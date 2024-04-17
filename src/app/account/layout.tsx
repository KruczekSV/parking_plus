const AccountLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-800">
      <div className=" bg-gray-50 w-3/5 h-3/5 rounded-lg grid grid-cols-2">
        <div className="bg-cyan-600 flex items-center justify-center text-4xl rounded-l-lg">
          Parking+
        </div>
        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;