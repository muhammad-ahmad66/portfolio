import { NotFoundContent } from "@/components/sections/shared/not-found-content";

export const metadata = {
  title: "404 - Page Not Found | M. Ahmad",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return <NotFoundContent />;
}
