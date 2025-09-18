import { redirect } from "next/navigation";

export default function NotFound() {
  // Redirect any unknown route to home page
  redirect("/");
}
