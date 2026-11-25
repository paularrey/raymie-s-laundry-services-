import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };


export function PageHeader({
  eyebrow,
  title,
  accent,
  description,
  crumbs,
  className,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  crumbs?: Crumb[];
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative bg-white pb-16 pt-32 text-ink md:pb-20 md:pt-40",
        className
      )}
    >
      {/* Floating bubble accents */}
      
      
      
      

      <Container className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-700">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
          {accent ? (
            <>
              {" "}
              <span className="accent-word">{accent}</span>
            </>
          ) : null}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
            {description}
          </p>
        ) : null}

        {crumbs && crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mt-7">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-muted">
              <li>
                <Link href="/" className="transition hover:text-lime-700">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition hover:text-lime-700">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-ink">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
      </Container>
    </section>
  );
}
