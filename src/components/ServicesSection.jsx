import React from 'react';
import { Database, Cloud, Mail, BarChart3, Shield } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Data Solutions',
    desc:
      'Manage, integrate, and optimize your data through modern warehousing, ETL, and performance tuning to unlock insights and efficiency.',
    points: ['Data warehousing', 'ETL pipelines', 'Data migration', 'Database optimization'],
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    desc:
      'Design scalable infrastructure and seamless migrations across AWS, Azure, and GCP with DevOps integration and security best practices.',
    points: ['Multi-cloud migration', 'IaC & DevOps', 'Observability', 'Cost optimization'],
    accent: 'from-violet-400 to-fuchsia-500',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    desc:
      'Data-driven lifecycle campaigns that increase engagement, conversions, and retention using automation and smart segmentation.',
    points: ['Journey automation', 'Segmentation', 'A/B testing', 'Attribution & analytics'],
    accent: 'from-amber-300 to-rose-400',
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    desc:
      'Turn complex datasets into clear, interactive dashboards to enable informed, real-time decision-making and BI acceleration.',
    points: ['Interactive dashboards', 'KPI design', 'Self-serve BI', 'Embedded analytics'],
    accent: 'from-emerald-400 to-teal-500',
  },
];

function ServicesSection() {
  return (
    <section id="services" className="relative py-20 bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden>
        <div className="absolute -top-24 right-0 h-56 w-56 bg-fuchsia-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-56 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-4xl font-bold">Solutions built for growth</h2>
          <p className="mt-3 text-neutral-300">
            We combine technology and strategy to enhance performance, security, and intelligence across your business.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, points, accent }) => (
            <div key={title} className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr ${accent} text-neutral-900 font-bold`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-neutral-200">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              {title === 'Cloud Solutions' && (
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-neutral-300">
                  <Shield className="h-4 w-4" />
                  <span>Hardened security & compliance</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div id="contact" className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-tr from-white/[0.04] to-white/[0.08] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Ready to accelerate your roadmap?</h3>
              <p className="mt-1 text-neutral-300">Let’s align on goals and design a pragmatic plan to deliver measurable outcomes.</p>
            </div>
            <a
              href="mailto:hello@goaurex.com?subject=Project%20Inquiry%20-%20GoAurex"
              className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-neutral-200 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
