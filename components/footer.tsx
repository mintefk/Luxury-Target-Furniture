import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-[#f5eee5]">
      <div className="luxury-container grid gap-10 py-10 md:grid-cols-[2fr,1fr,1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Target Furniture
          </p>
          <p className="max-w-sm text-sm text-muted-foreground">
          Target Furniture crafts timeless pieces in noble materials. Designed to age beautifully and live at the center
          of everyday rituals.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Explore
          </p>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              <Link href="/shop" className="hover:text-foreground">
                Collection
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Visit
          </p>
          <p className="text-muted-foreground">
          Wollo Sefer, Garad Mall 
            <br />
            Addis Ababa,
            <br />
            Ethiopia <br />
            
               
            <a
    href="tel:+251946733333"
    className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:underline"
  >
    +251 946 733 333
  </a>
                 
          </p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="luxury-container flex flex-col justify-between gap-3 py-5 text-[0.7rem] text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Target Furniture. All rights reserved.</p>
          <p className="uppercase tracking-[0.26em]">
            Crafted with intention, designed to last.
          </p>
        </div>
      </div>
    </footer>
  );
}

