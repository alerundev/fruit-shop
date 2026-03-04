import Image from "next/image";

const fruits = [
  { name: "제주 한라봉", price: "12,900", unit: "3kg", emoji: "🍊", tag: "인기" },
  { name: "청송 사과", price: "18,900", unit: "5kg", emoji: "🍎", tag: "제철" },
  { name: "샤인머스캣", price: "24,900", unit: "2kg", emoji: "🍇", tag: "프리미엄" },
  { name: "성주 참외", price: "9,900", unit: "5kg", emoji: "🍈", tag: "특가" },
  { name: "제주 천혜향", price: "15,900", unit: "3kg", emoji: "🍋", tag: "신선" },
  { name: "나주 배", price: "21,900", unit: "5kg", emoji: "🍐", tag: "인기" },
];

const reviews = [
  { name: "김○○", rating: 5, text: "과일이 정말 신선해요! 다음에도 꼭 주문할게요 😊" },
  { name: "이○○", rating: 5, text: "포장도 꼼꼼하고 배송도 빠르네요. 최고입니다!" },
  { name: "박○○", rating: 4, text: "한라봉이 달콤하고 즙이 많아요. 만족합니다~" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-orange-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🍓</span>
            <span className="text-xl font-bold text-orange-600">싱싱과일마켓</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#products" className="hover:text-orange-500 transition-colors">상품</a>
            <a href="#features" className="hover:text-orange-500 transition-colors">특징</a>
            <a href="#reviews" className="hover:text-orange-500 transition-colors">후기</a>
          </nav>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
            주문하기
          </button>
        </div>
      </header>

      {/* 히어로 */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6 flex justify-center gap-3">
            🍎 🍊 🍇 🍓
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
            산지 직송<br />
            <span className="text-orange-500">신선한 과일</span>을 집 앞까지
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed">
            농장에서 바로 수확한 신선한 과일을<br />
            당일 포장 · 익일 배송으로 전달해드려요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-full transition-colors shadow-lg shadow-orange-200">
              지금 쇼핑하기 →
            </a>
            <a href="#features" className="bg-white hover:bg-orange-50 text-orange-500 font-bold text-lg px-10 py-4 rounded-full border-2 border-orange-300 transition-colors">
              더 알아보기
            </a>
          </div>
          <div className="mt-12 flex justify-center gap-10 text-center">
            {[
              { num: "15,000+", label: "누적 주문" },
              { num: "98%", label: "만족도" },
              { num: "당일", label: "출고" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-orange-500">{s.num}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 특징 */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">왜 싱싱과일마켓인가요?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🚜", title: "산지 직송", desc: "전국 최고 농가와 직거래하여 중간 유통 단계를 없앴어요. 더 신선하고 더 저렴하게!" },
              { icon: "❄️", title: "신선도 보장", desc: "수확 후 24시간 이내 출고, 아이스팩과 보냉재로 최상의 신선도를 유지해요." },
              { icon: "📦", title: "무료 배송", desc: "3만원 이상 주문 시 전국 어디든 무료 배송! 당일 주문 시 익일 도착이에요." },
              { icon: "🔄", title: "100% 환불 보장", desc: "상품에 만족하지 못하시면 이유 불문하고 전액 환불해드려요." },
              { icon: "🌿", title: "친환경 포장", desc: "100% 생분해 포장재를 사용해 맛있게 먹고 지구도 지켜요." },
              { icon: "💬", title: "24시간 상담", desc: "카카오톡, 전화, 채팅으로 언제든 친절하게 도와드려요." },
            ].map((f) => (
              <div key={f.title} className="bg-orange-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 상품 */}
      <section id="products" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full">이번 주 추천</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">신선한 제철 과일</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {fruits.map((fruit) => (
              <div key={fruit.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center py-10 text-7xl group-hover:scale-110 transition-transform">
                  {fruit.emoji}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-gray-800">{fruit.name}</h3>
                    <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-0.5 rounded-full">{fruit.tag}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{fruit.unit}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-extrabold text-orange-500">₩{fruit.price}</span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
                      담기
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 배너 */}
      <section className="bg-orange-500 py-16 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">🎁 첫 주문 10% 할인!</h2>
        <p className="text-orange-100 mb-8 text-lg">신규 회원 가입 시 첫 주문 10% 할인 쿠폰 자동 지급</p>
        <button className="bg-white text-orange-500 font-bold text-lg px-10 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg">
          지금 가입하고 할인받기
        </button>
      </section>

      {/* 후기 */}
      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">고객 후기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <div className="flex mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <p className="text-sm font-semibold text-gray-500">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🍓</span>
                <span className="text-white font-bold text-lg">싱싱과일마켓</span>
              </div>
              <p className="text-sm leading-relaxed">신선함을 가장 빠르게, 가장 합리적으로.<br />농장에서 식탁까지 직송합니다.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-sm">
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">배송 안내</a>
              <a href="#" className="hover:text-white transition-colors">교환/환불</a>
              <a href="#" className="hover:text-white transition-colors">고객센터</a>
              <a href="#" className="hover:text-white transition-colors">제휴 문의</a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-sm text-center">
            © 2025 싱싱과일마켓. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
