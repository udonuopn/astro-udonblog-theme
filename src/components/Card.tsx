import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime } = frontmatter;
  return (
    <li className="flex-col my-6">
      <Datetime datetime={pubDatetime} />
      <div className="border-l-4 border-skin-accent my-2 pl-4 py-2">
        <a
          href={href}
          className="text-lg font-noto hover:text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        >
          {secHeading ? (
            <h2 className="text-lg font-noto font-semibold decoration-dashed">
              {title}
            </h2>
          ) : (
            <h3 className="text-lg font-noto font-semibold decoration-dashed">
              {title}
            </h3>
          )}
        </a>
      </div>
    </li>
  );
}
