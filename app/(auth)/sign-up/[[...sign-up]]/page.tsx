import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-[10%] h-[100vh] bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(https://dashboard.clerk.com/assets/signin-bg.svg)`}}>
      <SignUp />
    </div>
  );
}