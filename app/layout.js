"use client";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AuthHeader from "@/components/Header/AuthHeader";
import AuthFooter from "@/components/Footer/AuthFooter";
import back from "@/public/img/back.jpg";
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAuth = pathname.startsWith("/auth");
  const isUserDashboard = pathname.startsWith("/dashboard");
  const isCreatorAuth = pathname.startsWith("/creator-auth");
  const isCreatorDashboard = pathname.startsWith("/creator-dashboard");
  const isNotifications = pathname.startsWith("/notifications");

  if (isAuth) {
    return (
      <>
        <html lang="en">
          <body
            className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${back.src})` }}
          >
            <AuthHeader />
            <main className="min-h-screen flex flex-col">{children}</main>
            <AuthFooter />
          </body>
        </html>
      </>
    );
  }
  if (isUserDashboard) {
    return (
      <>
        <html lang="en">
          <body
            className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${back.src})` }}
          >
            <AuthHeader />
            <div className="flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-4">
              <main className="flex-grow">{children}</main>
            </div>
            <AuthFooter />
          </body>
        </html>
      </>
    );
  }
  if (isCreatorAuth) {
    return (
      <>
        <html lang="en">
          <body
            className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${back.src})` }}
          >
            <AuthHeader />
            <main className="min-h-screen flex flex-col">{children}</main>
            <AuthFooter />
          </body>
        </html>
      </>
    );
  }
  if (isCreatorDashboard) {
    return (
      <>
        <html lang="en">
          <body
            className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${back.src})` }}
          >
            <AuthHeader />
            <div className="flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-4">
              <main className="flex-grow">{children}</main>
            </div>
            <AuthFooter />
          </body>
        </html>
      </>
    );
  }
  if (isNotifications) {
    return (
      <>
        <html lang="en">
          <body
            className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${back.src})` }}
          >
            <AuthHeader />
            <div className="flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-4">
              <main className="flex-grow">{children}</main>
            </div>
            <AuthFooter />
          </body>
        </html>
      </>
    );
  }
  return (
    <html lang="en">
      <body
        className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${back.src})` }}
      >
        <Header />
        <div className="flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-4">
          <main className="flex-grow">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
