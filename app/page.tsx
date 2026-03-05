const fruits = [
  { emoji: "🍊", name: "제주 한라봉", price: "12,900", unit: "3kg", tag: "인기", color: "from-orange-100 to-orange-50", accent: "bg-orange-500" },
  { emoji: "🍎", name: "청송 사과", price: "18,900", unit: "5kg", tag: "제철", color: "from-red-100 to-rose-50", accent: "bg-red-500" },
  { emoji: "🍇", name: "샤인머스캣", price: "24,900", unit: "2kg", tag: "프리미엄", color: "from-purple-100 to-violet-50", accent: "bg-purple-500" },
  { emoji: "🍓", name: "논산 딸기", price: "14,900", unit: "500g×2", tag: "특가", color: "from-pink-100 to-rose-50", accent: "bg-pink-500" },
  { emoji: "🍋", name: "제주 천혜향", price: "15,900", unit: "3kg", tag: "신선", color: "from-yellow-100 to-amber-50", accent: "bg-yellow-500" },
  { emoji: "🍐", name: "나주 배", price: "21,900", unit: "5kg", tag: "산지직송", color: "from-lime-100 to-green-50", accent: "bg-lime-500" },
];

const features = [
  { icon: "🚜", title: "산지 직거래", desc: "중간 유통 없이 농장에서 바로. 더 신선하고 더 저렴하게." },
  { icon: "❄️", title: "당일 출고", desc: "오후 2시 이전 주문 시 당일 수확·당일 포장 출고." },
  { icon: "📦", title: "무료 배송", desc: "3만원 이상 전국 무료. 아이스팩 포함 신선 배송." },
  { icon: "🔄", title: "100% 환불", desc: "만족 못하면 이유 불문 전액 환불. 리스크 제로." },
];

const reviews = [
  { name: "김○○", loc: "서울 강남", rating: 5, text: "한라봉이 정말 달아요! 마트에서 파는 것과 비교도 안 돼요. 재구매 확정 😍", fruit: "🍊" },
  { name: "이○○", loc: "부산 해운대", rating: 5, text: "포장이 꼼꼼해서 한 개도 상하지 않았어요. 배송도 빠르고 친절해요.", fruit: "🍎" },
  { name: "박○○", loc: "대구 수성", rating: 5, text: "샤인머스캣 씨 없고 아삭아삭하니 최고예요. 선물용으로 자주 시켜요.", fruit: "🍇" },
];

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ── 헤더 ── */}
      <header className="sticky top-0 z-50 bg-[hsl(35,40%,97%)]/80 backdrop-blur-md border-b border-orange-100/60">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <span className="text-2xl group-hover:scale-110 transition-transform">🍓</span>
            <span className="text-lg font-bold text-orange-600 tracking-tight">싱싱과일마켓</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
            <a href="#features" className="hover:text-orange-500 transition-colors">특징</a>
            <a href="#products" className="hover:text-orange-500 transition-colors">상품</a>
            <a href="#reviews" className="hover:text-orange-500 transition-colors">후기</a>
          </nav>
          <a
            href="#products"
            className="min-h-[44px] min-w-[44px] flex items-center px-6 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-all active:scale-95 shadow-sm shadow-orange-200"
          >
            주문하기
          </a>
        </div>
      </header>

      {/* ── 히어로 ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-[hsl(35,40%,97%)] to-orange-50 pt-20 pb-28 px-5">
        {/* 배경 과일 장식 */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <span className="absolute top-10 left-[5%] text-6xl float float-delay-1 opacity-20">🍎</span>
          <span className="absolute top-24 right-[8%] text-5xl float-slow float-delay-2 opacity-20">🍊</span>
          <span className="absolute bottom-16 left-[12%] text-4xl float float-delay-3 opacity-15">🍇</span>
          <span className="absolute top-16 left-[40%] text-3xl float-fast float-delay-4 opacity-15">🍓</span>
          <span className="absolute bottom-20 right-[15%] text-5xl float float-delay-1 opacity-15">🍋</span>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* 뱃지 */}
          <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-8 border border-green-200">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            오늘도 신선하게 배송 중
          </span>

          {/* 메인 헤드라인 — 드라마틱한 크기 */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-stone-800 leading-[1.1] tracking-tight mb-6">
            농장에서<br />
            <span className="highlight text-orange-500">식탁까지</span><br />
            <span className="text-4xl md:text-6xl font-bold text-stone-600">산지 직송</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-500 leading-relaxed mb-10 max-w-xl mx-auto">
            중간 유통 없이 농장에서 직접. 수확 후 24시간 이내 출고로<br className="hidden md:block" />
            가장 신선한 과일을 합리적인 가격에 만나보세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="min-h-[52px] flex items-center justify-center px-10 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-full transition-all active:scale-95 shadow-lg shadow-orange-200/60"
            >
              지금 쇼핑하기 →
            </a>
            <a
              href="#features"
              className="min-h-[52px] flex items-center justify-center px-10 bg-white/80 hover:bg-white text-stone-700 font-semibold text-lg rounded-full border border-stone-200 transition-all active:scale-95"
            >
              더 알아보기
            </a>
          </div>

          {/* 수치 */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto">
            {[
              { n: "15,000+", l: "누적 주문" },
              { n: "98%", l: "고객 만족도" },
              { n: "24h", l: "수확 후 출고" },
            ].map((s) => (
              <div key={s.l} className="bg-white/70 rounded-2xl py-4 px-2 border border-stone-100">
                <p className="text-2xl font-extrabold text-orange-500">{s.n}</p>
                <p className="text-xs text-stone-400 mt-0.5 font-medium">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 특징 ── */}
      <section id="features" className="py-24 px-5 bg-white/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-500 tracking-widest uppercase mb-3">Why Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-800 tracking-tight">
              왜 싱싱과일마켓인가요
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gradient-to-br from-orange-50 to-amber-50/50 rounded-2xl p-7 border border-orange-100/60 hover:border-orange-200 transition-all hover:-translate-y-1"
              >
                <span className="text-4xl mb-5 block">{f.icon}</span>
                <h3 className="text-lg font-bold text-stone-800 mb-2">{f.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 상품 ── */}
      <section id="products" className="py-24 px-5 bg-gradient-to-b from-[hsl(35,40%,97%)] to-orange-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-sm font-semibold text-orange-500 tracking-widest uppercase mb-2">이번 주 추천</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-stone-800 tracking-tight">
                신선한 제철 과일
              </h2>
            </div>
            <a href="#" className="text-sm font-semibold text-orange-500 hover:text-orange-600 underline underline-offset-4">
              전체 보기 →
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {fruits.map((fruit) => (
              <article key={fruit.name} className="product-card bg-white rounded-3xl overflow-hidden border border-stone-100 cursor-pointer">
                {/* 이미지 영역 */}
                <div className={`bg-gradient-to-br ${fruit.color} flex items-center justify-center py-12 relative overflow-hidden`}>
                  <span className="text-7xl float">{fruit.emoji}</span>
                  <span className={`absolute top-3 right-3 ${fruit.accent} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                    {fruit.tag}
                  </span>
                </div>
                {/* 정보 */}
                <div className="p-5">
                  <h3 className="font-bold text-stone-800 text-base mb-0.5">{fruit.name}</h3>
                  <p className="text-xs text-stone-400 font-medium mb-4">{fruit.unit}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-extrabold text-stone-800">
                      ₩{fruit.price}
                    </span>
                    <button className="min-h-[40px] min-w-[40px] bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-sm font-bold px-4 rounded-full transition-all">
                      담기
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 프로모션 배너 ── */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-8 text-6xl">🎁</div>
            <div className="absolute bottom-4 right-8 text-5xl">🍓</div>
            <div className="absolute top-8 right-24 text-4xl">🍊</div>
          </div>
          <div className="relative">
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              신규 회원 혜택
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              첫 주문 10% 할인
            </h2>
            <p className="text-orange-100 text-lg mb-8">
              가입 즉시 10% 할인 쿠폰 자동 지급. 기간 제한 없이 사용 가능해요.
            </p>
            <button className="min-h-[52px] px-10 bg-white text-orange-500 font-extrabold text-lg rounded-full hover:bg-orange-50 active:scale-95 transition-all shadow-lg">
              지금 가입하고 할인받기
            </button>
          </div>
        </div>
      </section>

      {/* ── 고객 후기 ── */}
      <section id="reviews" className="py-24 px-5 bg-white/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-500 tracking-widest uppercase mb-3">Reviews</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-800 tracking-tight">
              고객 후기
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <blockquote key={r.name} className="bg-gradient-to-br from-orange-50 to-amber-50/40 rounded-2xl p-7 border border-orange-100/60">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-5">"{r.text}"</p>
                <footer className="flex items-center gap-3">
                  <span className="text-2xl">{r.fruit}</span>
                  <div>
                    <p className="text-sm font-bold text-stone-800">{r.name}</p>
                    <p className="text-xs text-stone-400">{r.loc}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── 푸터 ── */}
      <footer className="bg-stone-900 text-stone-400 py-14 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🍓</span>
                <span className="text-white font-bold text-lg">싱싱과일마켓</span>
              </div>
              <p className="text-sm leading-relaxed text-stone-500">
                신선함을 가장 빠르게, 가장 합리적으로.<br />농장에서 식탁까지 직송합니다.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-3 text-sm">
              {["이용약관", "개인정보처리방침", "배송 안내", "교환/환불", "고객센터", "제휴 문의"].map((l) => (
                <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2025 싱싱과일마켓. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">인스타그램</a>
              <a href="#" className="hover:text-white transition-colors">카카오톡</a>
              <a href="#" className="hover:text-white transition-colors">네이버 스토어</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
