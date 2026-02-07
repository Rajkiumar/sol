import Link from "next/link"

const footerLinks = {
  Product: [
    { href: "/see-how-it-works", label: "How It Works" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#workflows", label: "Features" },
    { href: "/schedule-demo", label: "Demo" },
  ],
  Company: [
    { href: "#", label: "About" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Press" },
  ],
  Legal: [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
    { href: "#", label: "Cookies" },
    { href: "#", label: "GDPR" },
  ],
}

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-white">
      <div className="max-w-site mx-auto px-5 md:px-8 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="RecruiterAI Home">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-serif text-sm leading-none" aria-hidden="true">R</span>
              </div>
              <span className="text-[15px] font-bold tracking-tight text-foreground">
                Recruiter<span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px]">
              AI-powered recruiting software that helps teams hire faster and better.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground/70 mb-4">{category}</h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border mt-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-muted-foreground">
            &copy; {new Date().getFullYear()} RecruiterAI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              "Twitter",
              "LinkedIn",
              "GitHub",
            ].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`${social} profile`}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
