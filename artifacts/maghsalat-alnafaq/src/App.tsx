import { useState } from 'react';
import {
  ArrowDownLeft,
  ArrowLeft,
  ArrowUpLeft,
  Check,
  ChevronDown,
  Droplets,
  MessageCircle,
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

const whatsappNumber = '0554239820';
const whatsappUrl = 'https://wa.me/966554239820';

const branches = [
  {
    title: 'فرع حي المنسك',
    area: 'حي المنسك',
    mapUrl: 'https://maps.app.goo.gl/3oxAXzEoKnFfJES89',
  },
  {
    title: 'فرع طريق الملك عبد الله',
    area: 'طريق الملك عبد الله',
    mapUrl: 'https://maps.app.goo.gl/N1kVtGnCtAKrK9WK7',
  },
];

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

const exteriorPrices = [
  ['السيارة الصغيرة', '٢٣ ﷼'],
  ['السيارة المتوسطة', '٢٥ ﷼'],
  ['السيارة الكبيرة', '٢٩ ﷼'],
] as const;

const fullWashPrices = [
  ['السيارة الصغيرة', '٣٠ ﷼'],
  ['السيارة المتوسطة', '٣٥ ﷼'],
  ['السيارة الكبيرة', '٤٠ ﷼'],
] as const;

const washInclusions = [
  'تكييس عصا الجير والمساحات مع معطر',
  'استخدام شامبو بتقنية الواكس',
  'مزيل أوساخ PRO WASH',
  'مناشف خاصة لكل سيارة',
];

const values = [
  { icon: ShieldCheck, title: 'عناية قبل السرعة', copy: 'نتعامل مع سيارتك باهتمام وحرص في كل خطوة.' },
  { icon: Droplets, title: 'أساسيات نظيفة', copy: 'خدمة واضحة تركز على نظافة السيارة كما ينبغي.' },
  { icon: MapPin, title: 'فرعان قريبان منك', copy: 'زورونا في حي المنسك أو على طريق الملك عبد الله.' },
  {
    icon: Sparkles,
    title: 'فرش مايكروفوم فائقة النعومة',
    copy: 'استخدام فرش مايكروفوم فائقة النعومة، وشديدة الالتقاط للأوساخ ولا يلتصق بها أي شوائب أو أتربة، ويتم غسلها بشكل آلي، لضمان أداء آمن على طلاء المركبة.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main dir="rtl" className="overflow-hidden">
      <header className="relative z-20 border-b border-[#e1e7ec] bg-[#f6f8fa]/95">
        <div className="container flex h-[78px] items-center justify-between">
          <a href="#الرئيسية" onClick={closeMenu} aria-label="مغسلة النفق، الرئيسية" className="flex items-center gap-3 no-underline">
            <img src={`${import.meta.env.BASE_URL}tunnel-car-wash-logo.png`} alt="شعار مغسلة النفق" className="h-14 w-14 rounded-full object-cover ring-2 ring-[#26374b]/15" />
            <span className="leading-tight">
              <span className="block text-[17px] font-bold tracking-tight text-[#26374b]">مغسلة النفق</span>
              <span className="mt-1 block text-[10px] tracking-[.08em] text-[#687887]">عناية تليق بمشوارك</span>
            </span>
          </a>
          <nav aria-label="التنقل الرئيسي" className={`${menuOpen ? 'absolute inset-x-0 top-[77px] flex flex-col gap-5 border-b border-[#e1e7ec] bg-[#f6f8fa] px-6 py-6 shadow-lg' : 'hidden'} md:static md:flex md:flex-row md:items-center md:gap-9 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
            <a className="nav-link text-sm" href="#الخدمات" onClick={closeMenu}>خدماتنا</a>
            <a className="nav-link text-sm" href="#طريقتنا" onClick={closeMenu}>طريقتنا</a>
            <a className="nav-link text-sm" href="#الفروع" onClick={closeMenu}>فروعنا</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`تواصل عبر واتساب على الرقم ${whatsappNumber}`} className="primary-button bg-[#08758a] px-3 py-3 text-sm !text-white hover:!bg-[#09677a] sm:px-4">
              <MessageCircle size={16} />
              <span className="hidden sm:inline">واتساب {whatsappNumber}</span>
              <span className="sm:hidden">واتساب</span>
            </a>
            <a href="#الفروع" className="primary-button branch-header-cta px-5 py-3 text-sm">
              اختر فرعك <MoveUpLeft size={16} />
            </a>
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'} className="grid h-10 w-10 place-items-center rounded-full border border-[#d4dde4] text-[#26374b] md:hidden">
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <section id="الرئيسية" className="container pt-6 md:pt-8">
        <div className="hero-photo grain relative flex min-h-[570px] items-center overflow-hidden rounded-[28px] bg-[#182435] md:min-h-[640px]">
          <div className="relative z-10 w-full px-7 py-16 text-[#f7f3e9] md:px-16 lg:px-[88px]">
            <div className="fade-up mb-2 flex items-center gap-4">
              <img
                src={`${import.meta.env.BASE_URL}tunnel-car-wash-logo.png`}
                alt="شعار مغسلة النفق"
                className="h-[76px] w-[76px] shrink-0 rounded-full border-[3px] border-white/90 bg-white object-cover shadow-lg ring-4 ring-white/15"
              />
              <div>
                <p className="mb-1 text-sm font-bold text-[#9bdde5]">مغسلة النفق</p>
                <p className="m-0 text-xs text-white/85">عناية يومية بسيارتك</p>
              </div>
            </div>
            <h1 className="fade-up delay-1 mt-7 max-w-[620px] text-[clamp(2.8rem,7vw,5.7rem)] font-bold leading-[1.16] tracking-[-.055em]">
              مشوارك يبدأ<br />بسيارة <span className="text-[#75d1dc]">أنظف.</span>
            </h1>
            <p className="fade-up delay-2 mt-6 max-w-[450px] text-base leading-8 text-[#e4e7dd] md:text-lg">
              غسيل وعناية بالتفاصيل، باهتمام بسيط وواضح من أول خطوة إلى لحظة استلامك.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#الخدمات" className="primary-button bg-[#08758a] !text-white hover:!bg-[#09677a]">
                اكتشف خدماتنا <ArrowLeft size={17} />
              </a>
              <a href="#الفروع" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-[13px] text-sm font-semibold text-white no-underline transition hover:bg-white/10">
                <MapPin size={16} /> اختر الفرع الأقرب
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
                <span className="font-serif text-sm text-[#9aa8b4]">{number}</span>
              </div>
              <p className="mb-2 mt-7 text-xs font-semibold text-[#08758a]">{tag}</p>
              <h3 className="m-0 text-xl font-bold text-[#26374b]">{title}</h3>
              <p className="mb-0 mt-3 text-sm leading-7 text-[#657383]">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="service-card">
            <div className="flex items-center gap-4">
              <span className="service-icon"><Droplets size={23} className="icon-stroke" /></span>
              <div>
                <p className="mb-1 text-xs font-semibold text-[#08758a]">قائمة الأسعار</p>
                <h3 className="m-0 text-2xl font-bold text-[#26374b]">الغسيل الخارجي</h3>
              </div>
            </div>
            <div className="mt-6 divide-y divide-[#dfe5ea]">
              {exteriorPrices.map(([name, price]) => (
                <div key={name} className="flex items-center justify-between gap-4 py-3.5">
                  <span className="text-sm font-medium text-[#465565]">{name}</span>
                  <span className="font-bold text-[#08758a]">{price}</span>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 py-3.5">
                <span className="text-sm font-medium text-[#465565]">تكييس الدعاسات</span>
                <span className="font-bold text-[#08758a]">٥ ﷼</span>
              </div>
            </div>
          </article>
          <article className="service-card">
            <div className="flex items-center gap-4">
              <span className="service-icon"><Sparkles size={23} className="icon-stroke" /></span>
              <div>
                <p className="mb-1 text-xs font-semibold text-[#08758a]">قائمة الأسعار</p>
                <h3 className="m-0 text-2xl font-bold text-[#26374b]">الغسيل الكامل</h3>
              </div>
            </div>
            <div className="mt-6 divide-y divide-[#dfe5ea]">
              {fullWashPrices.map(([name, price]) => (
                <div key={name} className="flex items-center justify-between gap-4 py-3.5">
                  <span className="text-sm font-medium text-[#465565]">{name}</span>
                  <span className="font-bold text-[#08758a]">{price}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
        <div className="mt-8 grid gap-7 rounded-[24px] border border-[#dfe5ea] bg-white p-5 md:p-7 lg:grid-cols-[1fr_370px] lg:items-center">
          <div>
            <div className="eyebrow">تفاصيل الخدمة</div>
            <h3 className="section-title !mt-3 text-3xl">الغسيل يشمل</h3>
            <ul className="mt-6 space-y-4 p-0">
              {washInclusions.map((item) => (
                <li key={item} className="flex list-none items-start gap-3 text-sm leading-7 text-[#465565]">
                  <Check size={18} className="mt-1 shrink-0 text-[#08758a]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href={`${import.meta.env.BASE_URL}tunnel-price-list.jpg`}
            target="_blank"
            rel="noreferrer"
            aria-label="عرض صورة قائمة الأسعار بالحجم الكامل"
            className="mx-auto block w-full max-w-[370px] overflow-hidden rounded-[18px] bg-[#f6f8fa] ring-1 ring-[#26374b]/10"
          >
            <img
              src={`${import.meta.env.BASE_URL}tunnel-price-list.jpg`}
              alt="قائمة أسعار مغسلة النفق، تشمل أسعار الغسيل الكامل والخارجي وما تتضمنه الخدمة"
              className="block h-auto w-full object-contain"
            />
          </a>
        </div>
      </section>

      <section id="طريقتنا" className="relative bg-[#eaf0f3] py-24 md:py-28">
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
                  <span className="relative z-10 grid h-[54px] w-[54px] place-items-center rounded-full border border-[#b8cad1] bg-[#f8fafb] font-serif text-lg text-[#08758a]">{number}</span>
                  <h3 className="mb-2 mt-5 text-lg font-bold text-[#26374b]">{title}</h3>
                  <p className="m-0 text-sm leading-7 text-[#657383]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div className="relative min-h-[390px] overflow-hidden rounded-[24px] bg-[#26374b] p-8 text-[#f4f7fa] md:p-11">
            <div aria-hidden="true" className="absolute -left-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
            <div aria-hidden="true" className="absolute -left-2 -top-2 h-36 w-36 rounded-full border border-white/10" />
            <div className="relative z-10 mb-7 flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}tunnel-car-wash-logo.png`}
                alt="شعار مغسلة النفق"
                className="h-[68px] w-[68px] rounded-full border-2 border-white/80 bg-white object-cover shadow-md"
              />
              <span className="text-sm font-semibold text-white">مغسلة النفق</span>
            </div>
            <p className="relative z-10 mb-0 text-sm font-semibold text-[#75d1dc]">مبدأنا بسيط</p>
            <h2 className="relative z-10 mt-5 max-w-[380px] text-4xl font-bold leading-[1.4] tracking-tight md:text-[44px]">سيارتك تستحق عناية واضحة.</h2>
            <p className="relative z-10 mt-5 max-w-[360px] text-sm leading-8 text-[#d8e3eb]">نؤمن أن الخدمة الجيدة لا تحتاج إلى كلام كثير. نظافة تهتم بها، وتجربة مريحة تركز على ما تحتاجه فعلاً.</p>
            <div className="absolute bottom-8 left-8 text-[10px] tracking-[.18em] text-white/45">مغسلة النفق</div>
          </div>
          <div>
            <div className="eyebrow">لماذا النفق؟</div>
            <h2 className="section-title">راحة بال،<br />قبل لمعان السيارة.</h2>
            <p className="section-copy mt-4">نستقبل كل سيارة بعناية واحترام، ونحافظ على تجربة بسيطة من دون تفاصيل غير مؤكدة.</p>
            <div className="mt-8 space-y-5">
              {values.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="flex gap-4 border-b border-[#dfe5ea] pb-5 last:border-0">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e6f1f3] text-[#08758a]"><Icon size={20} className="icon-stroke" /></span>
                  <div>
                    <h3 className="mb-1 mt-0 text-base font-bold text-[#26374b]">{title}</h3>
                    <p className="m-0 text-sm leading-7 text-[#657383]">{copy}</p>
                  </div>
                  <Check className="mr-auto mt-3 text-[#08758a]" size={17} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="الفروع" className="container pb-24 md:pb-32">
        <div className="relative overflow-hidden rounded-[26px] bg-[#dcebef] px-7 py-12 md:px-14 md:py-14">
          <div aria-hidden="true" className="absolute -left-10 -top-24 h-72 w-72 rounded-full border border-[#08758a]/20" />
          <div aria-hidden="true" className="absolute -left-1 -top-16 h-52 w-52 rounded-full border border-[#08758a]/20" />
          <div className="relative z-10">
            <div className="max-w-[700px]">
              <div className="eyebrow">فروع مغسلة النفق</div>
              <h2 className="mt-4 text-[clamp(2rem,4.2vw,3.3rem)] font-bold leading-[1.25] tracking-tight text-[#26374b]">فرعان لخدمتك.</h2>
              <p className="mb-0 mt-3 max-w-[600px] leading-8 text-[#465565]">اختر الفرع الأقرب إليك وافتح موقعه مباشرةً على خرائط Google.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {branches.map(({ title, area, mapUrl: branchMapUrl }) => (
                <article key={title} className="rounded-[20px] border border-[#26374b]/10 bg-white/75 p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#e6f1f3] text-[#08758a]"><MapPin size={22} /></span>
                    <div>
                      <p className="mb-1 text-xs font-semibold text-[#08758a]">موقع الفرع</p>
                      <h3 className="m-0 text-xl font-bold text-[#26374b]">{title}</h3>
                      <p className="mb-0 mt-2 text-sm text-[#657383]">{area}</p>
                    </div>
                  </div>
                  <a href={branchMapUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#26374b] px-5 py-3 text-sm font-bold !text-white no-underline transition hover:bg-[#344a62]">
                    <MapPin size={16} /> الاتجاهات إلى الفرع <ArrowUpLeft size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
          <div className="relative z-10 mt-10 flex items-center gap-2 border-t border-[#08758a]/20 pt-5 text-sm text-[#526174]">
            <ChevronDown size={15} className="rotate-[-90deg]" />
            <span>تفتح روابط الاتجاهات موقع الفرع المحدد على خرائط Google</span>
          </div>
        </div>
      </section>

      <footer className="bg-[#182435] text-[#f0f4f7]">
        <div className="container flex flex-col justify-between gap-7 py-9 sm:flex-row sm:items-center">
          <a href="#الرئيسية" className="flex items-center gap-3 text-inherit no-underline">
            <img src={`${import.meta.env.BASE_URL}tunnel-car-wash-logo.png`} alt="شعار مغسلة النفق" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20" />
            <span>
              <span className="block font-bold">مغسلة النفق</span>
              <span className="mt-1 block text-xs text-[#b8c6d2]">عناية تليق بمشوارك</span>
            </span>
          </a>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#d7e0e7]">
            <a className="no-underline transition hover:text-[#75d1dc]" href="#الخدمات">خدماتنا</a>
            <a className="no-underline transition hover:text-[#75d1dc]" href="#طريقتنا">طريقتنا</a>
            <a className="inline-flex items-center gap-2 no-underline transition hover:text-[#75d1dc]" href="#الفروع"><MapPin size={15} /> فروعنا</a>
            <a className="inline-flex items-center gap-2 no-underline transition hover:text-[#75d1dc]" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={15} /> واتساب {whatsappNumber}</a>
          </div>
          <span className="text-xs text-[#aebdca]">© مغسلة النفق</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
