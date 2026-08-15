"use client";

import { useMemo, useState } from "react";

const menus = [
  { icon: "✦", kicker: "FREE", title: "내 사주 볼고양?", desc: "타고난 성향과 오행의 균형부터 차근차근 볼고양.", tone: "green" },
  { icon: "♡", kicker: "POPULAR", title: "우리 궁합 볼고양?", desc: "사랑하는 방식과 서로 잘 맞는 포인트를 찾아볼고양.", tone: "rose" },
  { icon: "₩", kicker: "2026", title: "일이랑 돈 볼고양?", desc: "기회가 오는 시기와 조심해야 할 흐름을 미리 볼고양.", tone: "yellow" },
];

export default function Home() {
  const [gender, setGender] = useState("여성");
  const [calendar, setCalendar] = useState("양력");
  const [birth, setBirth] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [result, setResult] = useState(false);
  const today = useMemo(() => new Intl.DateTimeFormat("ko-KR", { month: "long", day: "numeric", weekday: "short" }).format(new Date()), []);

  function showResult(e: React.FormEvent) {
    e.preventDefault();
    if (!birth) return;
    setResult(true);
    window.setTimeout(() => document.querySelector("#result")?.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
  }

  return (
    <main>
      <div className="topline">처음 왔고양? 첫 사주 풀이는 무료고양 ✦</div>
      <header className="header">
        <a className="logo" href="#home" aria-label="볼고양 홈">
          <span className="logo-cat">ฅ</span><span>볼고양</span><small>뭐 볼고양?</small>
        </a>
        <nav><a href="#saju">사주 볼고양?</a><a href="#today">오늘 뭐 할고양?</a><a href="#about">누구고양?</a></nav>
        <a className="header-cta" href="#saju">무료로 볼고양</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="overline">오늘도 별을 살펴보는 중… ✦</p>
          <h1>사주,<br/><em>같이 볼고양?</em></h1>
          <p className="lead">어렵고 무거운 말 대신, 나의 성향과 지금의 흐름을<br/>볼고양이 다정하고 쉽게 이야기해 줄게요.</p>
          <div className="hero-actions"><a className="button primary" href="#saju">내 사주 무료로 볼고양 <b>→</b></a><span>회원가입 없이 · 1분이면 충분해요</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-halo"></div>
          <div className="visual-frame"><img src="/bolgoyang-hero.webp" alt="망원경으로 별을 살펴보는 볼고양" /></div>
          <div className="bubble">오늘 별빛이<br/>꽤 좋고양 ✦</div>
          <div className="doodle d1">✦</div><div className="doodle d2">☾</div>
        </div>
      </section>

      <section className="today-card" id="today">
        <div className="today-title"><span>{today}</span><strong>오늘 뭐 할고양?</strong></div>
        <p>서두르기보다 하나씩 끝내기 좋은 날이에요. 미뤄둔 연락부터 해볼고양?</p>
        <div className="luck"><span><i className="green-dot"></i> 행운색 연두</span><span>행운 숫자 3</span></div>
      </section>

      <section className="saju-section" id="saju">
        <div className="section-title"><span className="number">01</span><div><p>볼고양에게 알려주고양</p><h2>태어난 순간부터 볼고양?</h2></div></div>
        <div className="saju-panel">
          <form className="saju-form" onSubmit={showResult}>
            <fieldset><legend>성별</legend><div className="segmented">{["여성","남성"].map(v => <button key={v} type="button" aria-pressed={gender===v} className={gender===v?"selected":""} onClick={()=>setGender(v)}>{v}</button>)}</div></fieldset>
            <fieldset><legend>생년월일</legend><div className="date-line"><input required type="date" value={birth} onChange={e=>setBirth(e.target.value)} aria-label="생년월일"/><div className="calendar-toggle">{["양력","음력"].map(v => <button key={v} type="button" aria-pressed={calendar===v} className={calendar===v?"selected":""} onClick={()=>setCalendar(v)}>{v}</button>)}</div></div></fieldset>
            <fieldset><legend>태어난 시간 <small>몰라도 괜찮고양</small></legend><select value={birthTime} onChange={e=>setBirthTime(e.target.value)}><option value="">시간을 선택해 주세요</option><option>모름</option><option>자시 · 23:00–01:00</option><option>축시 · 01:00–03:00</option><option>인시 · 03:00–05:00</option><option>오시 · 11:00–13:00</option><option>유시 · 17:00–19:00</option></select></fieldset>
            <button className="form-submit" type="submit">내 사주 펼쳐볼고양　✦</button>
            <p className="privacy">입력한 정보는 결과를 보여드리는 데만 사용해요.</p>
          </form>
          <aside className="result-preview">
            <p className="preview-kicker">MY FORTUNE CAT</p>
            <h3>나를 닮은<br/><em>운명 고양이</em>를<br/>만나볼고양?</h3>
            <p>오행의 기운에 따라 성격도, 소품도, 반짝이는 별빛도 달라져요.</p>
            <div className="mini-cat"><span className="ear left"></span><span className="ear right"></span><b>• ﻌ •</b></div>
            <span className="element e1">木</span><span className="element e2">火</span><span className="element e3">水</span>
          </aside>
        </div>
        {result && <article className="sample-result" id="result"><span>✦ 볼고양의 무료 미리보기</span><h3>{birth.replaceAll("-",".")}에 태어난 당신은<br/><em>호기심 많은 초록별 고양이</em>고양!</h3><p>작은 변화도 빠르게 알아채고, 새로운 것을 자기 방식으로 익히는 힘이 있어요. 지금은 혼자 고민하기보다 사람을 통해 기회를 발견하기 좋은 흐름이에요.</p><button onClick={()=>alert("현재는 기획 예시 페이지입니다. 실제 서비스에서는 상세 사주 풀이로 이어져요.")}>자세히 볼고양 →</button></article>}
      </section>

      <section className="menu-section">
        <div className="section-title"><span className="number">02</span><div><p>오늘은 어떤 게 궁금하냥</p><h2>뭐부터 볼고양?</h2></div></div>
        <div className="menu-grid">{menus.map(item => <article className={`menu-card ${item.tone}`} key={item.title}><div className="menu-top"><span className="menu-icon">{item.icon}</span><small>{item.kicker}</small></div><h3>{item.title}</h3><p>{item.desc}</p><button>살펴볼고양 <b>→</b></button></article>)}</div>
      </section>

      <section className="about" id="about">
        <div className="about-image"><img src="/bolgoyang-story.webp" alt="별자리 차트를 읽는 볼고양" /></div>
        <div className="about-copy"><p className="overline">대체 누구고양?</p><h2>답을 정해주는 점괘보다<br/>나를 이해하는 이야기.</h2><p>볼고양은 미래를 함부로 단정하지 않아요. 태어난 날의 기운을 통해 내가 가진 성향과 지금의 흐름을 가만히 관찰해 드려요.</p><blockquote>“운세는 정답지가 아니라,<br/>나를 살펴보는 작은 망원경이고양.”</blockquote><a href="#saju">내 운명 고양이 만나볼고양 →</a></div>
      </section>

      <footer><a className="logo footer-logo" href="#home"><span className="logo-cat">ฅ</span><span>볼고양</span></a><p>사주 볼고양? 마음도 같이 볼고양.</p><div><a href="#">이용약관</a><a href="#">개인정보처리방침</a><a href="#">문의하기</a></div><small>운세 콘텐츠는 재미와 자기 이해를 위한 참고 자료입니다.</small></footer>
    </main>
  );
}
