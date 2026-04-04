// import { Outlet } from "react-router-dom";

// function AuthLayout() {
//   return (
//     <div className="flex min-h-screen w-full">
//       <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
//         <div className="max-w-md space-y-6 text-center text-primary-foreground">
//           <h1 className="text-4xl font-extrabold tracking-tight">
//             Welcome to Stylish_Wear_Aesthetics Shopping
//           </h1>
//         </div>
//       </div>
//       <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default AuthLayout;


import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight">
            Welcome to <span className="text-gray-300">Stylish Wear Aesthetics</span>
          </h1>

          <p className="text-gray-400 text-lg">
            Discover premium fashion, seamless shopping, and secure payments —
            all in one modern shopping experience.
          </p>

          <div className="pt-4 space-y-2 text-gray-500 text-sm">
            <p>✓ Secure PayPal Payments</p>
            <p>✓ Seller Product Management</p>
            <p>✓ Admin Dashboard Control</p>
            <p>✓ Fast & Responsive Shopping</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
