import { useState } from 'react';
import {
  ArrowDownLeft,
  ArrowLeft,
  ArrowUpLeft,
  Check,
  ChevronDown,
  Droplets,
  MapPin,
  Menu,
  MoveUpLeft,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Wind,
  X,
} from 'lucide-react';
import './index.css';

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=%D9%85%D8%BA%D8%B3%D9%84%D8%A9+%D8%A7%D9%84%D9%86%D9%81%D9%82';

const services = [
  {
    number: '٠١',
    icon: Droplets,
    title: 'غسيل الهيكل',
    description: 'تنظيف خارجي يزيل غبار الطريق وآثاره، مع عناية بالتفاصيل الظاهرة ولمعة متوازنة.',
    tag: 'من الخارج',
  },
  {
    number: '٠٢',
    icon: SprayCan,
    title: 'تنظيف المقصورة',
    description: 'ترتيب وتنظيف المساحات الداخلية التي تلامسها يومياً، لتعود المقصورة أنظف وأريح.',
    tag: 'من الداخل',
  },
  {
    number: '٠٣',
    icon: Sparkles,
    title: 'عناية بالتفاصيل',
    description: 'اهتمام بالمناطق الصغيرة التي تصنع فرقاً في المظهر، من الزوايا إلى الأسطح الداخلية.',
    tag: 'لمسات دقيقة',
  },
  {
    number: '٠٤',
    icon: Wind,
    title: 'تجفيف وترتيب',
    description: 'إنهاء مرتب بعد الغسيل، مع تجفيف الأسطح الخارجية وترتيب السيارة قبل استلامها.',
    tag: 'الخطوة الأخيرة',
  },
];

const values = [
  { icon: ShieldCheck, title: 'عناية قبل السرعة', copy: 'نتعامل مع سيارتك باهتمام وحرص في كل خطوة.' },
  { icon: Droplets, title: 'أساسيات نظيفة', copy: 'خدمة واضحة تركز على نظافة السيارة كما ينبغي.' },
  { icon: MapPin, title: 'قريبون منك', copy: 'ابحث عن مغسلة النفق على الخريطة وخطط لزيارتك.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main dir="rtl" className="overflow-hidden">
      <header className="relative z-20 border-b border-[#e4e1d7] bg-[#f6f3eb]/95">
        <div className="container flex h-[78px] items-center justify-between">
          <a href="#الرئيسية" onClick={closeMenu} aria-label="مغسلة النفق، الرئيسية" className="flex items-center gap-3 no-underline">
            <span className="grid h-11 w-11 place-items-center rounded-[14px] bg-[#214a3c] text-[#f5f0e5]">
              <span className="relative block h-5 w-7 overflow-hidden rounded-t-full border-2 border-[#e8a25a] border-b-0">
                <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-[#e8a25a]" />
              </span>
            </span>
            <span className="leading-tight">
              <span className="block text-[17px] font-bold tracking-tight text-[#183b30]">مغسلة النفق</span>
              <span className="mt-1 block text-[10px] tracking-[.08em] text-[#758078]">عناية تليق بمشوارك</span>
            </span>
          </a>
          <nav aria-label="التنقل الرئيسي" className={`${menuOpen ? 'absolute inset-x-0 top-[77px] flex flex-col gap-5 border-b border-[#e4e1d7] bg-[#f6f3eb] px-6 py-6 shadow-lg' : 'hidden'} md:static md:flex md:flex-row md:items-center md:gap-9 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
            <a className="nav-link text-sm" href="#الخدمات" onClick={closeMenu}>خدماتنا</a>
            <a className="nav-link text-sm" href="#طريقتنا" onClick={closeMenu}>طريقتنا</a>
            <a className="nav-link text-sm" href="#زيارتك" onClick={closeMenu}>موقعنا</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={mapUrl} target="_blank" rel="noreferrer" className="primary-button hidden px-5 py-3 text-sm sm:inline-flex">
              اعثر علينا <MoveUpLeft size={16} />
            </a>
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'} className="grid h-10 w-10 place-items-center rounded-full border border-[#d8d8cc] text-[#214a3c] md:hidden">
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <section id="الرئيسية" className="container pt-6 md:pt-8">
        <div className="hero-photo grain relative flex min-h-[570px] items-center overflow-hidden rounded-[28px] bg-[#1c3a30] md:min-h-[640px]">
          <div className="relative z-10 w-full px-7 py-16 text-[#f7f3e9] md:px-16 lg:px-[88px]">
            <div className="fade-up eyebrow !text-[#f1b46e]">مغسلة النفق · عناية يومية بسيارتك</div>
            <h1 className="fade-up delay-1 mt-7 max-w-[620px] text-[clamp(2.8rem,7vw,5.7rem)] font-bold leading-[1.16] tracking-[-.055em]">
              مشوارك يبدأ<br />بسيارة <span className="text-[#efb36e]">أنظف.</span>
            </h1>
            <p className="fade-up delay-2 mt-6 max-w-[450px] text-base leading-8 text-[#e4e7dd] md:text-lg">
              غسيل وعناية بالتفاصيل، باهتمام بسيط وواضح من أول خطوة إلى لحظة استلامك.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#الخدمات" className="primary-button bg-[#e7a057] !text-[#1b392e] hover:!bg-[#f0b675]">
                اكتشف خدماتنا <ArrowLeft size={17} />
              </a>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-[13px] text-sm font-semibold text-white no-underline transition hover:bg-white/10">
                <MapPin size={16} /> افتح الموقع على الخريطة
              </a>
            </div>
            <div className="mt-14 flex items-center gap-3 text-sm text-[#e4e7dd]">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/30"><ArrowDownLeft size={15} /></span>
              <span>خدمات واضحة، عناية من القلب</span>
            </div>
          </div>
          <div aria-hidden="true" className="absolute bottom-7 left-8 hidden select-none font-serif text-[11px] tracking-[.2em] text-white/50 [writing-mode:vertical-rl] md:block">مغسلة النفق · عناية يومية</div>
        </div>
      </section>

      <section id="الخدمات" className="container py-24 md:py-32">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="eyebrow">الخدمات</div>
            <h2 className="section-title max-w-[620px]">كل شيء يبدأ من<br className="hidden sm:block" /> عناية تعرف طريقها.</h2>
          </div>
          <p className="section-copy mb-1">من نظافة الهيكل إلى ترتيب المقصورة، خدمات أساسية لسيارتك — من دون مبالغة أو وعود زائدة.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ number, icon: Icon, title, description, tag }) => (
            <article key={number} className="service-card group min-h-[255px]">
              <div className="flex items-start justify-between">
                <span className="service-icon"><Icon size={23} className="icon-stroke" /></span>
                <span className="font-serif text-sm text-[#a2a79b]">{number}</span>
              </div>
              <p className="mb-2 mt-7 text-xs font-semibold text-[#ad6a2b]">{tag}</p>
              <h3 className="m-0 text-xl font-bold text-[#214438]">{title}</h3>
              <p className="mb-0 mt-3 text-sm leading-7 text-[#6d7870]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="طريقتنا" className="relative bg-[#e9ece2] py-24 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <div className="eyebrow">ببساطة واهتمام</div>
              <h2 className="section-title">من وصولك<br />إلى استلامك.</h2>
              <p className="section-copy mt-5">تجربة مباشرة وواضحة: أخبرنا بما تحتاجه، ونعتني بسيارتك، ثم تستلمها جاهزة لمشوارك التالي.</p>
            </div>
            <div className="grid gap-7 sm:grid-cols-3">
              {[
                ['١', 'اختر ما يناسبك', 'ابدأ بالخدمة التي تحتاجها سيارتك اليوم.'],
                ['٢', 'نعتني بالتفاصيل', 'يُنجز الغسيل بعناية على امتداد مراحله.'],
                ['٣', 'استلم وانطلق', 'تفقّد سيارتك ثم أكمل يومك براحة.'],
              ].map(([number, title, copy], index) => (
                <div className="relative" key={number}>
                  {index < 2 && <div aria-hidden="true" className="step-line" />}
                  <span className="relative z-10 grid h-[54px] w-[54px] place-items-center rounded-full border border-[#b6c4b8] bg-[#f5f4ec] font-serif text-lg text-[#25513f]">{number}</span>
                  <h3 className="mb-2 mt-5 text-lg font-bold text-[#214438]">{title}</h3>
                  <p className="m-0 text-sm leading-7 text-[#69766e]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div className="relative min-h-[390px] overflow-hidden rounded-[24px] bg-[#24483b] p-8 text-[#f4f0e6] md:p-11">
            <div aria-hidden="true" className="absolute -left-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
            <div aria-hidden="true" className="absolute -left-2 -top-2 h-36 w-36 rounded-full border border-white/10" />
            <p className="relative z-10 mb-0 text-sm font-semibold text-[#efb36e]">مبدأنا بسيط</p>
            <h2 className="relative z-10 mt-5 max-w-[380px] text-4xl font-bold leading-[1.4] tracking-tight md:text-[44px]">سيارتك تستحق عناية واضحة.</h2>
            <p className="relative z-10 mt-5 max-w-[360px] text-sm leading-8 text-[#d8e0d8]">نؤمن أن الخدمة الجيدة لا تحتاج إلى كلام كثير. نظافة تهتم بها، وتجربة مريحة تركز على ما تحتاجه فعلاً.</p>
            <div className="absolute bottom-8 left-8 text-[10px] tracking-[.18em] text-white/45">مغسلة النفق</div>
          </div>
          <div>
            <div className="eyebrow">لماذا النفق؟</div>
            <h2 className="section-title">راحة بال،<br />قبل لمعان السيارة.</h2>
            <p className="section-copy mt-4">نستقبل كل سيارة بعناية واحترام، ونحافظ على تجربة بسيطة من دون تفاصيل غير مؤكدة.</p>
            <div className="mt-8 space-y-5">
              {values.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="flex gap-4 border-b border-[#deded2] pb-5 last:border-0">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e4eae1] text-[#285342]"><Icon size={20} className="icon-stroke" /></span>
                  <div>
                    <h3 className="mb-1 mt-0 text-base font-bold text-[#214438]">{title}</h3>
                    <p className="m-0 text-sm leading-7 text-[#6d7870]">{copy}</p>
                  </div>
                  <Check className="mr-auto mt-3 text-[#72917b]" size={17} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="زيارتك" className="container pb-24 md:pb-32">
        <div className="relative overflow-hidden rounded-[26px] bg-[#e5a05a] px-7 py-12 md:px-14 md:py-14">
          <div aria-hidden="true" className="absolute -left-10 -top-24 h-72 w-72 rounded-full border border-[#7e4b24]/20" />
          <div aria-hidden="true" className="absolute -left-1 -top-16 h-52 w-52 rounded-full border border-[#7e4b24]/20" />
          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-[620px]">
              <div className="eyebrow !text-[#604221]">زيارتك القادمة</div>
              <h2 className="mt-4 text-[clamp(2rem,4.2vw,3.3rem)] font-bold leading-[1.25] tracking-tight text-[#203c31]">خلّ سيارتك علينا.</h2>
              <p className="mb-0 mt-3 max-w-[520px] leading-8 text-[#443f32]">ابحث عن مغسلة النفق على خرائط جوجل لمعرفة موقعها والاتجاهات المتاحة.</p>
            </div>
            <a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#203f33] px-7 py-4 font-bold text-[#f8f4e9] no-underline transition hover:-translate-y-1 hover:bg-[#2d5a47]">
              <MapPin size={18} /> افتح موقعنا على الخريطة <ArrowUpLeft size={18} />
            </a>
          </div>
          <div className="relative z-10 mt-10 flex items-center gap-2 border-t border-[#76512d]/20 pt-5 text-sm text-[#52432e]">
            <ChevronDown size={15} className="rotate-[-90deg]" />
            <span>الموقع والاتجاهات عبر خرائط جوجل</span>
          </div>
        </div>
      </section>

      <footer className="bg-[#19382d] text-[#f0eee5]">
        <div className="container flex flex-col justify-between gap-7 py-9 sm:flex-row sm:items-center">
          <a href="#الرئيسية" className="flex items-center gap-3 text-inherit no-underline">
            <span className="grid h-10 w-10 place-items-center rounded-[13px] border border-white/20">
              <span className="block h-[17px] w-6 rounded-t-full border-2 border-[#e8a25a] border-b-0" />
            </span>
            <span>
              <span className="block font-bold">مغسلة النفق</span>
              <span className="mt-1 block text-xs text-[#b6c2b9]">عناية تليق بمشوارك</span>
            </span>
          </a>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#d4ddd5]">
            <a className="no-underline transition hover:text-[#efb36e]" href="#الخدمات">خدماتنا</a>
            <a className="no-underline transition hover:text-[#efb36e]" href="#طريقتنا">طريقتنا</a>
            <a className="inline-flex items-center gap-2 no-underline transition hover:text-[#efb36e]" href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={15} /> موقعنا على الخريطة</a>
          </div>
          <span className="text-xs text-[#aab9af]">© مغسلة النفق</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
