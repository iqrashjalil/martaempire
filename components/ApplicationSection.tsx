import { existsSync } from "node:fs";
import { join } from "node:path";
import ApplicationForm from "./ApplicationForm";

/**
 * Server wrapper: if `public/images/apply.jpg` exists it becomes the section
 * portrait, otherwise the desk portrait is used.
 */
export default function ApplicationSection() {
  const custom = existsSync(join(process.cwd(), "public", "images", "apply.jpg"));
  return <ApplicationForm imageSrc={custom ? "/images/apply.jpg" : null} />;
}
