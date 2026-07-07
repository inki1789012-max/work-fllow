<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>주식회사 대한민국농수산</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root{
    --forest: #1F3A2E;
    --forest-light: #2A4A3A;
    --paper: #F2F0E4;
    --persimmon: #E8632C;
    --harvest: #C9A227;
    --ink: #2D2A26;
    --sage: #7A8471;
    --white: #FFFFFF;
    --line: rgba(45,42,38,0.14);
    --good: #3E7A52;
  }
  *{ box-sizing:border-box; }
  body{ margin:0; background:var(--paper); color:var(--ink); font-family:'Work Sans', sans-serif; }
  .shell{ display:flex; min-height:100vh; }

  /* ---------------- SIDEBAR ---------------- */
  .sidebar{ width:232px; flex-shrink:0; background:var(--forest); color:var(--paper); display:flex; flex-direction:column; padding:26px 0; }
  .brand{ padding:0 22px 24px; border-bottom:1px solid rgba(242,240,228,0.12); margin-bottom:18px; }
  .brand-mark{ width:34px; height:34px; border-radius:7px; background:var(--persimmon); display:flex; align-items:center; justify-content:center; font-family:'Fraunces', serif; font-weight:700; font-size:16px; color:#fff; margin-bottom:10px; }
  .brand h1{ font-family:'Fraunces', serif; font-size:17px; font-weight:600; margin:0 0 3px; line-height:1.3; }
  .brand p{ margin:0; font-size:11px; color:rgba(242,240,228,0.55); font-family:'JetBrains Mono', monospace; letter-spacing:0.04em; }
  .nav-section-label{ font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(242,240,228,0.4); padding:4px 22px 8px; }
  .nav-item{ display:flex; align-items:center; gap:11px; padding:10px 22px; font-size:13.5px; font-weight:500; color:rgba(242,240,228,0.82); cursor:pointer; border-left:3px solid transparent; transition:background 0.12s ease; }
  .nav-item:hover{ background:rgba(242,240,228,0.06); }
  .nav-item.active{ background:rgba(232,99,44,0.14); border-left-color:var(--persimmon); color:#fff; }
  .nav-item .dot{ width:6px; height:6px; border-radius:50%; background:var(--sage); flex-shrink:0; }
  .nav-item.soon{ opacity:0.42; cursor:default; }
  .nav-item .badge{ margin-left:auto; font-family:'JetBrains Mono', monospace; font-size:9px; background:rgba(242,240,228,0.15); padding:2px 6px; border-radius:10px; }
  .sidebar-footer{ margin-top:auto; padding:16px 22px 0; border-top:1px solid rgba(242,240,228,0.12); font-size:11.5px; color:rgba(242,240,228,0.45); line-height:1.6; }

  /* ---------------- MAIN ---------------- */
  .main{ flex:1; min-width:0; overflow-y:auto; }
  .topbar{ display:flex; align-items:center; justify-content:space-between; padding:22px 40px; border-bottom:1px solid var(--line); background:var(--white); }
  .topbar h2{ font-family:'Fraunces', serif; font-weight:600; font-size:19px; margin:0; }
  .topbar .user-chip{ display:flex; align-items:center; gap:8px; font-size:12.5px; color:var(--sage); }
  .user-avatar{ width:26px; height:26px; border-radius:50%; background:var(--harvest); color:#fff; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; }
  .view{ display:none; padding:34px 40px 60px; }
  .view.active{ display:block; }

  /* ---------------- HOME VIEW ---------------- */
  .home-hero{ margin-bottom:30px; }
  .home-hero .eyebrow{ font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:var(--persimmon); margin-bottom:8px; }
  .home-hero h1{ font-family:'Fraunces', serif; font-weight:600; font-size:26px; margin:0 0 8px; }
  .home-hero p{ font-size:13.5px; color:var(--sage); max-width:560px; line-height:1.6; margin:0; }
  .app-grid{ display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:16px; }
  .app-card{ background:var(--white); border:1px solid var(--line); border-radius:6px; padding:22px 20px; cursor:pointer; transition:transform 0.12s ease, box-shadow 0.12s ease, border-color 0.12s ease; position:relative; }
  .app-card:hover{ transform:translateY(-2px); box-shadow:0 8px 20px rgba(31,58,46,0.08); border-color:var(--persimmon); }
  .app-card.disabled{ cursor:default; opacity:0.55; }
  .app-card.disabled:hover{ transform:none; box-shadow:none; border-color:var(--line); }
  .app-icon{ width:38px; height:38px; border-radius:7px; display:flex; align-items:center; justify-content:center; font-size:18px; margin-bottom:14px; }
  .app-card h3{ font-family:'Fraunces', serif; font-weight:600; font-size:15.5px; margin:0 0 6px; }
  .app-card p{ font-size:12.5px; color:var(--sage); line-height:1.55; margin:0 0 14px; }
  .app-tag{ display:inline-block; font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:0.04em; padding:3px 9px; border-radius:20px; }
  .tag-live{ background:rgba(122,132,113,0.15); color:var(--forest); }
  .tag-soon{ background:rgba(45,42,38,0.08); color:var(--sage); }

  /* ---------------- TOOL LAYOUT ---------------- */
  .tool-layout{ display:flex; gap:28px; align-items:flex-start; }
  .tool-panel{ width:340px; flex-shrink:0; background:var(--white); border:1px solid var(--line); border-radius:6px; padding:22px; max-height:calc(100vh - 160px); overflow-y:auto; position:sticky; top:0; }
  .panel-group-label{ font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:var(--persimmon); margin:18px 0 10px; }
  .panel-group-label:first-child{ margin-top:0; }
  .field{ margin-bottom:13px; }
  .field label{ display:block; font-size:11.5px; font-weight:600; color:var(--forest); margin-bottom:5px; }
  .field .hint{ font-weight:400; color:var(--sage); font-size:10.5px; }
  .field input, .field textarea, .field select{ width:100%; background:var(--paper); border:1px solid var(--line); border-radius:3px; padding:8px 10px; font-family:'Work Sans', sans-serif; font-size:12.5px; color:var(--ink); }
  .field input:focus, .field textarea:focus, .field select:focus{ outline:2px solid var(--persimmon); outline-offset:0; }
  .row2{ display:flex; gap:10px; }
  .row2 > .field{ flex:1; }
  .run-btn{ width:100%; margin-top:6px; background:var(--persimmon); color:#fff; border:none; border-radius:3px; padding:12px; font-weight:600; font-size:13.5px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; position:sticky; bottom:0; }
  .run-btn:hover{ background:#d1541f; }
  .run-btn:disabled{ background:var(--sage); cursor:not-allowed; }

  .export-bar{ display:none; gap:8px; margin-bottom:14px; }
  .export-btn{ flex:1; background:var(--white); border:1px solid var(--forest); color:var(--forest); border-radius:3px; padding:10px; font-size:12.5px; font-weight:600; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px; }
  .export-btn:hover{ background:var(--forest); color:#fff; }
  .export-btn.copied{ background:var(--good); border-color:var(--good); color:#fff; }
  .spinner{ width:13px; height:13px; border-radius:50%; border:2px solid rgba(255,255,255,0.4); border-top-color:#fff; animation:spin 0.7s linear infinite; display:none; }
  .run-btn.loading .spinner{ display:inline-block; }
  @keyframes spin{ to{ transform:rotate(360deg); } }
  .error-box{ margin-top:10px; background:rgba(232,99,44,0.12); border:1px solid rgba(232,99,44,0.4); border-radius:3px; padding:9px 11px; font-size:12px; color:#b8451b; display:none; line-height:1.5; }
  .result-area{ flex:1; min-width:0; }
  .result-empty{ background:var(--white); border:1px dashed var(--line); border-radius:6px; padding:60px 30px; text-align:center; color:var(--sage); }
  .result-empty .num{ font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:var(--persimmon); margin-bottom:8px; }
  .result-empty h3{ font-family:'Fraunces', serif; font-size:17px; font-weight:500; color:var(--ink); margin:0 0 6px; }
  .result-empty p{ font-size:12.5px; line-height:1.6; margin:0; }
  .skel{ display:inline-block; height:1em; background:linear-gradient(90deg, #EDE9DB 25%, #F5F2E6 50%, #EDE9DB 75%); background-size:200% 100%; animation:shimmer 1.4s infinite; border-radius:3px; }
  @keyframes shimmer{ 0%{ background-position:200% 0;} 100%{ background-position:-200% 0;} }

  /* ---------------- DETAIL PAGE PREVIEW (실제 포맷 반영) ---------------- */
  .detail-page{ background:var(--white); border:1px solid var(--line); border-radius:6px; overflow:hidden; max-width:520px; margin:0 auto; }
  .block{ padding:26px 28px; border-bottom:1px solid var(--line); }
  .block:last-child{ border-bottom:none; }
  .block-label{ font-family:'JetBrains Mono', monospace; font-size:9.5px; letter-spacing:0.1em; text-transform:uppercase; color:var(--sage); margin-bottom:12px; }

  .img-placeholder{ width:100%; aspect-ratio:4/3; border-radius:4px; background:repeating-linear-gradient(135deg,#EDE9DB,#EDE9DB 8px,#E5E0CE 8px,#E5E0CE 16px); display:flex; align-items:center; justify-content:center; font-family:'JetBrains Mono', monospace; font-size:10.5px; color:var(--sage); text-align:center; padding:10px; }

  /* 01 badge strip */
  .badge-strip{ display:flex; gap:6px; flex-wrap:wrap; margin-bottom:12px; }
  .badge-chip{ font-size:11px; font-weight:600; background:var(--forest); color:var(--paper); padding:6px 11px; border-radius:3px; }
  .rank-line{ font-size:12.5px; color:var(--persimmon); font-weight:700; margin-bottom:4px; }
  .stat-line{ font-size:11.5px; color:var(--sage); }

  /* 02 hook */
  .hook h2{ font-family:'Fraunces', serif; font-weight:600; font-size:21px; line-height:1.4; margin:0 0 10px; }
  .guarantee-tag{ display:inline-block; background:rgba(232,99,44,0.1); border:1px solid rgba(232,99,44,0.35); color:var(--persimmon); font-size:11.5px; font-weight:600; padding:7px 12px; border-radius:3px; }

  /* 03 story */
  .story h3{ font-family:'Fraunces', serif; font-weight:600; font-size:17px; margin:0 0 10px; }
  .story p{ font-size:13px; line-height:1.7; margin:0; }

  /* 04 comparison table */
  .compare-grid{ display:grid; grid-template-columns:1fr 1fr; gap:10px; }
  .compare-col{ border-radius:5px; padding:14px 14px; }
  .compare-col.generic{ background:var(--paper); border:1px solid var(--line); }
  .compare-col.ours{ background:var(--forest); color:var(--paper); }
  .compare-col .col-title{ font-size:11.5px; font-weight:700; margin-bottom:10px; }
  .compare-col.ours .col-title{ color:var(--harvest); }
  .compare-col ul{ margin:0; padding-left:16px; font-size:11.5px; line-height:1.8; }

  /* 05 quality process */
  .process h3{ font-family:'Fraunces', serif; font-weight:600; font-size:17px; margin:0 0 10px; }
  .process p{ font-size:13px; line-height:1.7; margin:0; }

  /* 07 safety */
  .safety-grid{ display:grid; grid-template-columns:repeat(auto-fill, minmax(90px,1fr)); gap:8px; }
  .safety-chip{ background:var(--paper); border:1px solid var(--line); border-radius:4px; padding:10px 8px; text-align:center; }
  .safety-chip .item{ font-size:10.5px; color:var(--sage); margin-bottom:4px; }
  .safety-chip .result{ font-size:12px; font-weight:700; color:var(--good); }

  /* 08 social proof */
  .social h3{ font-family:'Fraunces', serif; font-weight:600; font-size:18px; margin:0 0 4px; }
  .review-grid{ display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:12px; }
  .review-card{ background:var(--paper); border:1px solid var(--line); border-radius:4px; padding:10px 11px; }
  .review-card p{ font-size:11px; line-height:1.5; margin:0; color:var(--ink); }
  .review-card .stars{ color:var(--harvest); font-size:10px; margin-bottom:4px; }

  /* 09 guarantee policy */
  .guarantee-grid{ display:grid; grid-template-columns:1fr 1fr; gap:10px; }
  .guarantee-item{ background:var(--paper); border:1px solid var(--line); border-radius:4px; padding:12px; font-size:11.5px; line-height:1.5; }
  .guarantee-item .g-num{ font-family:'JetBrains Mono', monospace; color:var(--persimmon); font-weight:700; margin-right:5px; }

  /* 10 options */
  .option-list{ display:flex; flex-direction:column; gap:8px; }
  .option-card{ display:flex; align-items:center; gap:12px; border:1px solid var(--line); border-radius:5px; padding:10px 12px; }
  .option-card .opt-thumb{ width:48px; height:48px; border-radius:4px; background:repeating-linear-gradient(135deg,#EDE9DB,#EDE9DB 6px,#E5E0CE 6px,#E5E0CE 12px); flex-shrink:0; }
  .option-card .opt-name{ font-size:12.5px; font-weight:600; }
  .option-card .opt-price{ margin-left:auto; font-family:'JetBrains Mono', monospace; font-size:12.5px; color:var(--persimmon); font-weight:700; }

  /* 11 FAQ */
  .faq-item{ border-bottom:1px solid var(--line); padding:12px 0; }
  .faq-item:last-child{ border-bottom:none; }
  .faq-q{ font-size:13px; font-weight:600; margin-bottom:6px; display:flex; gap:8px; }
  .faq-q .qmark{ color:var(--persimmon); }
  .faq-a{ font-size:12.5px; line-height:1.65; color:var(--sage); padding-left:20px; }

  .final-note{ font-size:12.5px; line-height:1.7; color:var(--sage); }

  /* marketing copy result cards (기존 유지) */
  .copy-card{ background:var(--white); border:1px solid var(--line); border-radius:6px; padding:20px 22px; margin-bottom:12px; }
  .copy-card .ch-label{ font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:var(--persimmon); margin-bottom:8px; }
  .copy-card h4{ font-family:'Fraunces', serif; font-size:16px; margin:0 0 8px; font-weight:600; }
  .copy-card p{ font-size:13px; line-height:1.65; margin:0 0 10px; color:var(--ink); }
  .copy-card .hashtags{ font-size:12px; color:var(--sage); font-family:'JetBrains Mono', monospace; }

  @media (max-width:900px){
    .shell{ flex-direction:column; }
    .sidebar{ width:100%; }
    .tool-layout{ flex-direction:column; }
    .tool-panel{ width:100%; position:static; max-height:none; }
    .compare-grid, .guarantee-grid, .review-grid{ grid-template-columns:1fr; }
  }
</style>
</head>
<body>

<div class="shell">

  <div class="sidebar">
    <div class="brand">
      <div class="brand-mark">AI</div>
      <h1>주식회사 대한민국농수산</h1>
      <p>internal tools</p>
    </div>

    <div class="nav-section-label">My Apps</div>
    <div class="nav-item active" data-view="home"><span class="dot"></span>홈</div>
    <div class="nav-item" data-view="detail"><span class="dot"></span>상세페이지 생성기</div>
    <div class="nav-item" data-view="marketing"><span class="dot"></span>마케팅 카피 생성기</div>

    <div class="nav-section-label" style="margin-top:14px;">준비중</div>
    <div class="nav-item soon"><span class="dot"></span>배너 문구 생성기<span class="badge">SOON</span></div>
    <div class="nav-item soon"><span class="dot"></span>SNS 콘텐츠 생성기<span class="badge">SOON</span></div>
    <div class="nav-item soon"><span class="dot"></span>이미지 배경 제거<span class="badge">SOON</span></div>

    <div class="sidebar-footer">프로토타입 v0.2<br>디자인팀 · 마케팅팀 공용</div>
  </div>

  <div class="main">
    <div class="topbar">
      <h2 id="topbarTitle">홈</h2>
      <div class="user-chip"><div class="user-avatar">디</div>디자인팀</div>
    </div>

    <!-- ============ HOME ============ -->
    <div class="view active" id="view-home">
      <div class="home-hero">
        <div class="eyebrow">Internal Tool Hub</div>
        <h1>필요한 자동화 도구를 골라 쓰세요</h1>
        <p>디자인팀·마케팅팀이 반복하는 작업을 AI로 초안화하는 사내 도구 모음입니다. 상세페이지 생성기는 실제 회사 상세페이지 포맷(신뢰배지 → 비교표 → 안전인증 → 후기 → 보상정책 → 옵션 → FAQ)에 맞춰져 있어요.</p>
      </div>
      <div class="app-grid">
        <div class="app-card" data-view="detail">
          <div class="app-icon" style="background:rgba(31,58,46,0.1); color:var(--forest);">📄</div>
          <h3>상세페이지 생성기</h3>
          <p>신뢰배지·비교표·안전인증·후기·보상정책·옵션·FAQ까지, 우리 회사 실제 상세페이지 포맷 그대로 초안을 만들어줍니다.</p>
          <span class="app-tag tag-live">사용 가능</span>
        </div>
        <div class="app-card" data-view="marketing">
          <div class="app-icon" style="background:rgba(232,99,44,0.1); color:var(--persimmon);">📣</div>
          <h3>마케팅 카피 생성기</h3>
          <p>상품 하나로 인스타그램, 카카오톡 채널, 문자 메시지용 카피를 채널별로 한 번에 생성합니다.</p>
          <span class="app-tag tag-live">사용 가능</span>
        </div>
        <div class="app-card disabled">
          <div class="app-icon" style="background:rgba(201,162,39,0.12); color:var(--harvest);">🖼️</div>
          <h3>배너 문구 생성기</h3>
          <p>프로모션 정보를 입력하면 사이즈별 배너 문구 세트를 자동 생성합니다.</p>
          <span class="app-tag tag-soon">준비중</span>
        </div>
        <div class="app-card disabled">
          <div class="app-icon" style="background:rgba(122,132,113,0.12); color:var(--sage);">✂️</div>
          <h3>이미지 배경 제거</h3>
          <p>상품 사진을 업로드하면 배경 제거·리사이징을 배치로 처리합니다.</p>
          <span class="app-tag tag-soon">준비중</span>
        </div>
      </div>
    </div>

    <!-- ============ DETAIL PAGE TOOL (재설계) ============ -->
    <div class="view" id="view-detail">
      <div class="tool-layout">
        <div class="tool-panel">

          <div class="panel-group-label">기본 정보</div>
          <div class="field"><label for="d-name">상품명</label><input id="d-name" placeholder="예: 진남 신안 장흥도 흰다리 새우"></div>
          <div class="row2">
            <div class="field"><label for="d-origin">원산지</label><input id="d-origin" placeholder="전남 신안"></div>
            <div class="field"><label for="d-weight">중량/구성</label><input id="d-weight" placeholder="1kg (27미 내외)"></div>
          </div>
          <div class="field"><label for="d-options">상품 옵션 <span class="hint">쉼표로 구분, "이름:가격"</span></label>
            <textarea id="d-options" rows="2" placeholder="급냉 특 왕새우 1kg:32900원, 생물 왕새우 1kg:35900원, 급냉 새우 1kg:24900원"></textarea>
          </div>

          <div class="panel-group-label">차별화 포인트</div>
          <div class="field"><label for="d-selection">선별 기준 <span class="hint">경쟁사와 다른 점</span></label>
            <textarea id="d-selection" rows="2" placeholder="작은 새우는 걸러내고 1kg 27미 내외 특사이즈만 선별"></textarea>
          </div>
          <div class="field"><label for="d-vs">일반 판매자 대비 강점 <span class="hint">비교표에 사용</span></label>
            <textarea id="d-vs" rows="2" placeholder="무게치기(물빼기 속임) 없음, 정량 그대로 배송, 안전성 검사 완료"></textarea>
          </div>

          <div class="panel-group-label">신뢰 요소</div>
          <div class="field"><label for="d-rank">판매실적/랭킹 <span class="hint">있는 그대로만</span></label>
            <input id="d-rank" placeholder="네이버 새우 검색 1위, 후기 7만건 이상"></div>
          <div class="field"><label for="d-safety">안전성 검사 항목 <span class="hint">쉼표로 구분</span></label>
            <input id="d-safety" placeholder="기생충, 세균, 항생제, 중금속, 방사능"></div>
          <div class="field"><label for="d-guarantee">보상/보증 정책 <span class="hint">쉼표로 구분</span></label>
            <textarea id="d-guarantee" rows="2" placeholder="중량 미달시 2배 보상, 신선도 불만족시 100% 환불, 배송지연시 보상"></textarea>
          </div>

          <div class="panel-group-label">고객 우려사항</div>
          <div class="field"><label for="d-faq">FAQ로 다룰 질문 <span class="hint">쉼표로 구분, 2~4개</span></label>
            <textarea id="d-faq" rows="2" placeholder="더운데 신선하게 배송되나요?, 어디서 생산되나요?, 포장이 뒤집어져 있어요"></textarea>
          </div>

          <button class="run-btn" id="d-runBtn"><span class="spinner"></span><span class="btn-text">AI로 초안 생성</span></button>
          <div class="error-box" id="d-errorBox"></div>
        </div>

        <div class="result-area">
          <div class="result-empty" id="d-empty">
            <div class="num">Preview</div>
            <h3>왼쪽에 상품 정보를 입력하세요</h3>
            <p>신뢰배지 → 훅 → 비교표 → 품질프로세스 → 안전인증 → 후기 → 보상정책 → 옵션 → FAQ 순서로 상세페이지 초안이 만들어집니다. 실제 사진/GIF가 들어갈 자리는 회색 placeholder로 표시돼요.</p>
          </div>

          <div class="detail-page" id="d-page" style="display:none;">

            <div class="export-bar" id="d-exportBar">
              <button class="export-btn" id="d-copyBtn">📋 카피 텍스트 복사</button>
              <button class="export-btn" id="d-downloadBtn">⬇ TXT 파일로 저장</button>
              <button class="export-btn" id="d-psdBtn">🎨 PSD 파일로 저장</button>
            </div>

            <div class="block">
              <div class="block-label">01 · 신뢰 배지</div>
              <div class="badge-strip" id="d-badges"></div>
              <div class="rank-line" id="d-rankLine"></div>
            </div>

            <div class="block hook">
              <div class="block-label">02 · Hook</div>
              <h2 id="d-outHeadline"></h2>
              <span class="guarantee-tag" id="d-guaranteeTag"></span>
            </div>

            <div class="block"><div class="img-placeholder">📷 / GIF 자리<br>제품 클로즈업 · 손질 과정</div></div>

            <div class="block story">
              <div class="block-label">03 · 선별 기준</div>
              <h3>비교할수록 차이가 보입니다</h3>
              <p id="d-outStory"></p>
            </div>

            <div class="block">
              <div class="block-label">04 · 비교</div>
              <div class="compare-grid">
                <div class="compare-col generic">
                  <div class="col-title">일반 판매자</div>
                  <ul id="d-compareGeneric"></ul>
                </div>
                <div class="compare-col ours">
                  <div class="col-title">대한민국농수산</div>
                  <ul id="d-compareOurs"></ul>
                </div>
              </div>
            </div>

            <div class="block process">
              <div class="block-label">05 · 품질 관리</div>
              <h3 id="d-processTitle"></h3>
              <p id="d-processBody"></p>
            </div>

            <div class="block"><div class="img-placeholder">📷 저울/중량 측정 사진 자리</div></div>

            <div class="block">
              <div class="block-label">06 · 안전성 검사</div>
              <div class="safety-grid" id="d-safetyGrid"></div>
            </div>

            <div class="block social">
              <div class="block-label">07 · 후기</div>
              <h3 id="d-socialHeadline"></h3>
              <div class="review-grid" id="d-reviewGrid"></div>
            </div>

            <div class="block">
              <div class="block-label">08 · 책임보상</div>
              <div class="guarantee-grid" id="d-guaranteeGrid"></div>
            </div>

            <div class="block">
              <div class="block-label">09 · 상품 옵션</div>
              <div class="option-list" id="d-optionList"></div>
            </div>

            <div class="block">
              <div class="block-label">10 · Q&A</div>
              <div id="d-faqList"></div>
            </div>

            <div class="block">
              <div class="block-label">11 · 상품 안내</div>
              <p class="final-note" id="d-finalNote"></p>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- ============ MARKETING COPY TOOL (기존 유지) ============ -->
    <div class="view" id="view-marketing">
      <div class="tool-layout">
        <div class="tool-panel" style="position:static; max-height:none;">
          <div class="field"><label for="m-name">상품명</label><input id="m-name" placeholder="예: 해남 햇고구마"></div>
          <div class="field"><label for="m-point">이번 프로모션 포인트</label><textarea id="m-point" rows="2" placeholder="예: 신규 입고, 20% 할인, 선착순 100박스"></textarea></div>
          <div class="field"><label for="m-tone">톤앤매너</label>
            <select id="m-tone">
              <option value="친근하고 다정한">친근하고 다정한</option>
              <option value="신뢰감 있고 정중한">신뢰감 있고 정중한</option>
              <option value="재치있고 트렌디한">재치있고 트렌디한</option>
            </select>
          </div>
          <button class="run-btn" id="m-runBtn"><span class="spinner"></span><span class="btn-text">채널별 카피 생성</span></button>
          <div class="error-box" id="m-errorBox"></div>
        </div>
        <div class="result-area">
          <div class="result-empty" id="m-empty">
            <div class="num">Preview</div>
            <h3>왼쪽에 상품 정보를 입력하세요</h3>
            <p>생성 버튼을 누르면 인스타그램, 카카오톡 채널, 문자메시지용 카피가 각각 만들어집니다.</p>
          </div>
          <div id="m-results" style="display:none;"></div>
        </div>
      </div>
    </div>

  </div>
</div>

<script>
  // ---------- NAVIGATION ----------
  const titles = { home:'홈', detail:'상세페이지 생성기', marketing:'마케팅 카피 생성기' };
  function goTo(viewName){
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    document.getElementById('view-'+viewName).classList.add('active');
    document.querySelectorAll('.nav-item[data-view]').forEach(n=>n.classList.toggle('active', n.dataset.view===viewName));
    document.getElementById('topbarTitle').textContent = titles[viewName];
  }
  document.querySelectorAll('[data-view]').forEach(el=>{ el.addEventListener('click', ()=> goTo(el.dataset.view)); });

  // ---------- SHARED: call our own server (Vercel 서버리스 함수), which safely calls Claude ----------
  async function callClaudeJSON(prompt){
    const response = await fetch("/api/generate", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ prompt, max_tokens: 1800 })
    });
    const data = await response.json();
    if(!response.ok){ throw new Error(data.error || ('요청 실패 (status '+response.status+')')); }
    const textBlock = data.content.find(b=>b.type==='text');
    if(!textBlock) throw new Error('응답에서 텍스트를 찾을 수 없습니다.');
    let clean = textBlock.text.trim();
    clean = clean.replace(/^```json\s*/i,'').replace(/^```\s*/,'').replace(/```\s*$/,'');
    return JSON.parse(clean);
  }

  function splitList(str){ return str ? str.split(',').map(s=>s.trim()).filter(Boolean) : []; }

  // ---------- DETAIL PAGE GENERATOR ----------
  let lastDetailData = null;
  const dBtn = document.getElementById('d-runBtn');
  const dError = document.getElementById('d-errorBox');
  const dEmpty = document.getElementById('d-empty');
  const dPage = document.getElementById('d-page');

  dBtn.addEventListener('click', async ()=>{
    const name = document.getElementById('d-name').value.trim();
    const origin = document.getElementById('d-origin').value.trim();
    const weight = document.getElementById('d-weight').value.trim();
    const optionsRaw = document.getElementById('d-options').value.trim();
    const selection = document.getElementById('d-selection').value.trim();
    const vs = document.getElementById('d-vs').value.trim();
    const rank = document.getElementById('d-rank').value.trim();
    const safety = document.getElementById('d-safety').value.trim();
    const guarantee = document.getElementById('d-guarantee').value.trim();
    const faqRaw = document.getElementById('d-faq').value.trim();

    if(!name){ dError.style.display='block'; dError.textContent='상품명은 최소한 입력해주세요.'; return; }
    dError.style.display='none';
    dBtn.disabled=true; dBtn.classList.add('loading'); dBtn.querySelector('.btn-text').textContent='생성 중...';
    dEmpty.style.display='none'; dPage.style.display='block';
    document.getElementById('d-exportBar').style.display='none';
    ['d-outHeadline','d-outStory','d-processTitle','d-processBody','d-socialHeadline','d-finalNote'].forEach(id=>{
      document.getElementById(id).innerHTML = '<span class="skel" style="width:70%;">&nbsp;</span>';
    });

    const prompt = `너는 국내 농수산물 온라인몰의 카피라이터야. 아래는 실제 우리 회사가 쓰는 상세페이지 포맷이야: 신뢰배지 → 훅(문제제기) → 선별기준 스토리 → 경쟁사 비교표 → 품질관리 프로세스 → 안전성검사 → 후기(소셜프루프) → 책임보상 → 상품옵션 → Q&A → 상품안내. 이 순서와 톤을 그대로 따라서 카피를 작성해줘. 과장이나 근거 없는 표현은 쓰지 말고, 입력된 정보 안에서만 작성해.

상품명: ${name}
원산지: ${origin||'미기재'}
중량/구성: ${weight||'미기재'}
선별 기준: ${selection||'미기재'}
일반 판매자 대비 강점: ${vs||'미기재'}
판매실적/랭킹: ${rank||'미기재'}
안전성 검사 항목: ${safety||'미기재'}
보상/보증 정책: ${guarantee||'미기재'}
FAQ로 다룰 질문: ${faqRaw||'미기재'}

아래 JSON 형식으로만 응답해. 다른 설명이나 코드블록 표시 없이 순수 JSON만 출력해:
{
  "badges": ["짧은 신뢰배지 4개 (각 6자 내외)"],
  "headline": "문제제기형 훅 헤드라인 (30자 내외, 예: 어느 하나 부족했던 이유일 수 없었습니다 스타일)",
  "guarantee_tag": "보증 배지 한 줄 (15자 내외)",
  "story": "선별 기준 설명 (120~160자)",
  "compare_generic": ["일반 판매자의 한계 3개 (짧게)"],
  "compare_ours": ["우리의 강점 3개 (짧게)"],
  "process_title": "품질관리 소제목 (12자 내외)",
  "process_body": "품질관리 설명 (100~140자)",
  "social_headline": "후기/판매실적 기반 헤드라인 (20자 내외)",
  "faq": [{"q":"질문 그대로 다듬어서","a":"답변 (60~90자, 안심시키는 톤)"}],
  "final_note": "상품안내 마무리 문구 (80~120자)"
}`;

    try{
      const r = await callClaudeJSON(prompt);

      // 01 badges
      const badgeWrap = document.getElementById('d-badges');
      badgeWrap.innerHTML = (r.badges||[]).map(b=>`<span class="badge-chip">${b}</span>`).join('');
      document.getElementById('d-rankLine').textContent = rank || '';

      // 02 hook
      document.getElementById('d-outHeadline').textContent = r.headline||'';
      document.getElementById('d-guaranteeTag').textContent = r.guarantee_tag||'';

      // 03 story
      document.getElementById('d-outStory').textContent = r.story||'';

      // 04 compare
      document.getElementById('d-compareGeneric').innerHTML = (r.compare_generic||[]).map(t=>`<li>${t}</li>`).join('');
      document.getElementById('d-compareOurs').innerHTML = (r.compare_ours||[]).map(t=>`<li>${t}</li>`).join('');

      // 05 process
      document.getElementById('d-processTitle').textContent = r.process_title||'';
      document.getElementById('d-processBody').textContent = r.process_body||'';

      // 06 safety
      const safetyItems = splitList(safety);
      document.getElementById('d-safetyGrid').innerHTML = safetyItems.length
        ? safetyItems.map(s=>`<div class="safety-chip"><div class="item">${s}</div><div class="result">불검출</div></div>`).join('')
        : '<div class="safety-chip"><div class="item">검사 항목 미기재</div><div class="result">-</div></div>';

      // 07 social proof + reviews (placeholder review cards, 실제 후기는 캡처 이미지로 교체 예정)
      document.getElementById('d-socialHeadline').textContent = r.social_headline||'';
      document.getElementById('d-reviewGrid').innerHTML = [1,2,3,4].map(()=>
        `<div class="review-card"><div class="stars">★★★★★</div><p>실제 후기 캡처/발췌 자리</p></div>`
      ).join('');

      // 08 guarantee policy
      const guaranteeItems = splitList(guarantee);
      document.getElementById('d-guaranteeGrid').innerHTML = guaranteeItems.length
        ? guaranteeItems.map((g,i)=>`<div class="guarantee-item"><span class="g-num">0${i+1}</span>${g}</div>`).join('')
        : '<div class="guarantee-item">보상 정책 미기재</div>';

      // 09 options
      const optList = splitList(optionsRaw).map(item=>{
        const parts = item.split(':');
        return { name: (parts[0]||'').trim(), price: (parts[1]||'').trim() };
      });
      document.getElementById('d-optionList').innerHTML = optList.length
        ? optList.map(o=>`<div class="option-card"><div class="opt-thumb"></div><div class="opt-name">${o.name}</div><div class="opt-price">${o.price||''}</div></div>`).join('')
        : `<div class="option-card"><div class="opt-thumb"></div><div class="opt-name">${name} · ${weight||'기본구성'}</div><div class="opt-price"></div></div>`;

      // 10 faq
      document.getElementById('d-faqList').innerHTML = (r.faq||[]).map(f=>
        `<div class="faq-item"><div class="faq-q"><span class="qmark">Q.</span>${f.q}</div><div class="faq-a">${f.a}</div></div>`
      ).join('');

      // 11 final note
      document.getElementById('d-finalNote').textContent = r.final_note||'';

      // 내보내기용 데이터 저장
      lastDetailData = {
        name, origin, weight,
        badges: r.badges||[], rank,
        headline: r.headline||'', guarantee_tag: r.guarantee_tag||'',
        story: r.story||'',
        compare_generic: r.compare_generic||[], compare_ours: r.compare_ours||[],
        process_title: r.process_title||'', process_body: r.process_body||'',
        safety: safetyItems,
        social_headline: r.social_headline||'',
        guarantee: guaranteeItems,
        options: optList,
        faq: r.faq||[],
        final_note: r.final_note||''
      };
      document.getElementById('d-exportBar').style.display = 'flex';

    }catch(err){
      dError.style.display='block'; dError.textContent='생성 중 오류: '+err.message;
      dPage.style.display='none'; dEmpty.style.display='block';
    }finally{
      dBtn.disabled=false; dBtn.classList.remove('loading'); dBtn.querySelector('.btn-text').textContent='AI로 초안 생성';
    }
  });

  function buildDetailText(d){
    const lines = [];
    lines.push(`[ ${d.name} ] 상세페이지 카피 초안`);
    lines.push('='.repeat(40));
    lines.push('');
    lines.push('01. 신뢰 배지');
    lines.push(d.badges.join(' · '));
    if(d.rank) lines.push(d.rank);
    lines.push('');
    lines.push('02. HOOK');
    lines.push(d.headline);
    if(d.guarantee_tag) lines.push(`[보증] ${d.guarantee_tag}`);
    lines.push('');
    lines.push('03. 선별 기준 — 비교할수록 차이가 보입니다');
    lines.push(d.story);
    lines.push('');
    lines.push('04. 비교');
    lines.push('- 일반 판매자');
    d.compare_generic.forEach(t=> lines.push('  · '+t));
    lines.push('- 대한민국농수산');
    d.compare_ours.forEach(t=> lines.push('  · '+t));
    lines.push('');
    lines.push('05. 품질 관리');
    lines.push(d.process_title);
    lines.push(d.process_body);
    lines.push('');
    lines.push('06. 안전성 검사');
    lines.push(d.safety.map(s=>s+': 불검출').join(' / '));
    lines.push('');
    lines.push('07. 후기');
    lines.push(d.social_headline);
    lines.push('(실제 후기 캡처로 교체 필요)');
    lines.push('');
    lines.push('08. 책임보상');
    d.guarantee.forEach((g,i)=> lines.push(`  0${i+1}. ${g}`));
    lines.push('');
    lines.push('09. 상품 옵션');
    d.options.forEach(o=> lines.push(`  - ${o.name} ${o.price?'('+o.price+')':''}`));
    lines.push('');
    lines.push('10. Q&A');
    d.faq.forEach(f=>{ lines.push(`  Q. ${f.q}`); lines.push(`  A. ${f.a}`); });
    lines.push('');
    lines.push('11. 상품 안내');
    lines.push(d.final_note);
    lines.push('');
    lines.push(`(기본정보) 원산지: ${d.origin||'-'} / 중량구성: ${d.weight||'-'}`);
    return lines.join('\n');
  }

  document.getElementById('d-copyBtn').addEventListener('click', async ()=>{
    if(!lastDetailData) return;
    const text = buildDetailText(lastDetailData);
    try{
      await navigator.clipboard.writeText(text);
      const btn = document.getElementById('d-copyBtn');
      const original = btn.textContent;
      btn.textContent = '✓ 복사 완료';
      btn.classList.add('copied');
      setTimeout(()=>{ btn.textContent = original; btn.classList.remove('copied'); }, 1600);
    }catch(e){
      alert('클립보드 복사에 실패했어요. TXT 다운로드를 이용해주세요.');
    }
  });

  document.getElementById('d-downloadBtn').addEventListener('click', ()=>{
    if(!lastDetailData) return;
    const text = buildDetailText(lastDetailData);
    const blob = new Blob([text], { type:'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${lastDetailData.name||'상세페이지'}_카피초안.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // ---------- PSD EXPORT (섹션별 레이어로 나뉜 PSD 파일 생성) ----------
  // ag-psd 라이브러리를 CDN에서 필요할 때만 불러옵니다 (초기 로딩 속도를 위해).
  let agPsdLoadPromise = null;
  function loadAgPsd(){
    if (window.agPsd) return Promise.resolve(window.agPsd);
    if (agPsdLoadPromise) return agPsdLoadPromise;
    agPsdLoadPromise = new Promise((resolve, reject)=>{
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/ag-psd/dist/bundle.js';
      s.onload = ()=> window.agPsd ? resolve(window.agPsd) : reject(new Error('PSD 라이브러리를 불러왔지만 초기화에 실패했습니다.'));
      s.onerror = ()=> reject(new Error('PSD 라이브러리 로딩에 실패했습니다. 인터넷 연결을 확인해주세요.'));
      document.head.appendChild(s);
    });
    return agPsdLoadPromise;
  }

  const PSD_FONT = "'Malgun Gothic','Apple SD Gothic Neo',sans-serif";
  const PSD_COLOR = { forest:'#1F3A2E', paper:'#F2F0E4', persimmon:'#E8632C', ink:'#2D2A26', sage:'#7A8471', chip:'#EDE9DB' };

  function psdRoundRect(ctx,x,y,w,h,r){
    ctx.beginPath();
    ctx.moveTo(x+r,y);
    ctx.arcTo(x+w,y,x+w,y+h,r);
    ctx.arcTo(x+w,y+h,x,y+h,r);
    ctx.arcTo(x,y+h,x,y,r);
    ctx.arcTo(x,y,x+w,y,r);
    ctx.closePath();
  }

  function psdWrapText(ctx, text, maxWidth){
    const paragraphs = String(text||'').split('\n');
    const lines = [];
    paragraphs.forEach(p=>{
      if(p===''){ lines.push(''); return; }
      const words = p.split(' ');
      let cur = '';
      words.forEach(w=>{
        const candidate = cur ? cur+' '+w : w;
        if(ctx.measureText(candidate).width <= maxWidth){
          cur = candidate;
        } else {
          if(cur) lines.push(cur);
          let piece = w;
          while(ctx.measureText(piece).width > maxWidth && piece.length > 1){
            let i = 1;
            while(i < piece.length && ctx.measureText(piece.slice(0,i)).width <= maxWidth) i++;
            lines.push(piece.slice(0, Math.max(1,i-1)));
            piece = piece.slice(Math.max(1,i-1));
          }
          cur = piece;
        }
      });
      if(cur) lines.push(cur);
    });
    return lines;
  }

  function psdParagraph(ctx, text, x, y, maxWidth, opts){
    opts = opts || {};
    const fontSize = opts.fontSize || 14;
    const lineHeight = opts.lineHeight || 1.6;
    const weight = opts.weight || '400';
    ctx.font = `${weight} ${fontSize}px ${PSD_FONT}`;
    ctx.fillStyle = opts.color || PSD_COLOR.ink;
    ctx.textBaseline = 'top';
    const lines = psdWrapText(ctx, text, maxWidth);
    lines.forEach((line, i)=> ctx.fillText(line, x, y + i*fontSize*lineHeight));
    return lines.length * fontSize * lineHeight;
  }

  function psdMakeSectionCanvas(width, drawFn){
    const scratch = document.createElement('canvas').getContext('2d');
    const height = Math.max(1, Math.ceil(drawFn(scratch, width)));
    const canvas = document.createElement('canvas');
    canvas.width = width; canvas.height = height;
    drawFn(canvas.getContext('2d'), width);
    return canvas;
  }

  const PSD_SECTIONS = [
    { name:'00_상품정보', draw:(ctx,width,d)=>{
      const padX=50; let y=40;
      ctx.font = `700 30px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.forest; ctx.textBaseline='top';
      ctx.fillText(d.name||'상품명', padX, y); y+=46;
      ctx.font = `500 14px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.sage;
      ctx.fillText(`원산지 ${d.origin||'-'}   ·   중량/구성 ${d.weight||'-'}`, padX, y); y+=30;
      return y;
    }},
    { name:'01_신뢰배지', draw:(ctx,width,d)=>{
      const padX=50; let y=30, x=padX;
      ctx.font = `600 13px ${PSD_FONT}`; ctx.textBaseline='middle';
      (d.badges||[]).forEach(b=>{
        const bw = ctx.measureText(b).width + 28;
        if(x+bw > width-padX){ x=padX; y+=42; }
        ctx.fillStyle = PSD_COLOR.forest; psdRoundRect(ctx,x,y,bw,32,16); ctx.fill();
        ctx.fillStyle = '#fff'; ctx.fillText(b, x+14, y+16);
        x += bw+10;
      });
      y += 42;
      if(d.rank){ ctx.font=`500 13px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.sage; ctx.textBaseline='top'; ctx.fillText(d.rank, padX, y); y+=26; }
      return y+10;
    }},
    { name:'02_HOOK', draw:(ctx,width,d)=>{
      const padX=50; let y=36;
      ctx.font = `700 26px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.ink; ctx.textBaseline='top';
      const lines = psdWrapText(ctx, d.headline||'', width-padX*2);
      lines.forEach((line,i)=> ctx.fillText(line, padX, y+i*36));
      y += lines.length*36 + 14;
      if(d.guarantee_tag){
        ctx.font=`600 13px ${PSD_FONT}`;
        const bw = ctx.measureText(d.guarantee_tag).width + 28;
        ctx.fillStyle=PSD_COLOR.persimmon; psdRoundRect(ctx,padX,y,bw,32,16); ctx.fill();
        ctx.fillStyle='#fff'; ctx.textBaseline='middle'; ctx.fillText(d.guarantee_tag, padX+14, y+16);
        y += 32+20;
      }
      return y;
    }},
    { name:'03_선별기준', draw:(ctx,width,d)=>{
      const padX=50; let y=30;
      ctx.font=`600 12px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.persimmon; ctx.textBaseline='top';
      ctx.fillText('03 · 선별 기준', padX, y); y+=26;
      y += psdParagraph(ctx, d.story||'', padX, y, width-padX*2, {fontSize:15, lineHeight:1.7}) + 20;
      return y;
    }},
    { name:'04_비교', draw:(ctx,width,d)=>{
      const padX=50; let y=30;
      ctx.font=`600 12px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.persimmon; ctx.textBaseline='top';
      ctx.fillText('04 · 비교', padX, y); y+=26;
      ctx.font=`600 14px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.ink; ctx.fillText('일반 판매자', padX, y); y+=24;
      ctx.font=`400 14px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.sage;
      (d.compare_generic||[]).forEach(t=>{ ctx.fillText('· '+t, padX+10, y); y+=24; });
      y+=10;
      ctx.font=`600 14px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.forest; ctx.fillText('대한민국농수산', padX, y); y+=24;
      ctx.font=`400 14px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.ink;
      (d.compare_ours||[]).forEach(t=>{ ctx.fillText('· '+t, padX+10, y); y+=24; });
      return y+16;
    }},
    { name:'05_품질관리', draw:(ctx,width,d)=>{
      const padX=50; let y=30;
      ctx.font=`600 12px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.persimmon; ctx.textBaseline='top';
      ctx.fillText('05 · 품질 관리', padX, y); y+=26;
      ctx.font=`700 18px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.ink; ctx.fillText(d.process_title||'', padX, y); y+=30;
      y += psdParagraph(ctx, d.process_body||'', padX, y, width-padX*2, {fontSize:14, lineHeight:1.7}) + 16;
      return y;
    }},
    { name:'06_안전성검사', draw:(ctx,width,d)=>{
      const padX=50; let y=30, x=padX;
      ctx.font=`600 12px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.persimmon; ctx.textBaseline='top';
      ctx.fillText('06 · 안전성 검사', padX, y); y+=26;
      ctx.font=`500 13px ${PSD_FONT}`; ctx.textBaseline='middle';
      (d.safety||[]).forEach(s=>{
        const label = s+': 불검출';
        const bw = ctx.measureText(label).width + 24;
        if(x+bw > width-padX){ x=padX; y+=40; }
        ctx.fillStyle=PSD_COLOR.chip; psdRoundRect(ctx,x,y,bw,30,6); ctx.fill();
        ctx.fillStyle=PSD_COLOR.ink; ctx.fillText(label, x+12, y+15);
        x += bw+10;
      });
      return y+40;
    }},
    { name:'07_후기', draw:(ctx,width,d)=>{
      const padX=50; let y=30;
      ctx.font=`600 12px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.persimmon; ctx.textBaseline='top';
      ctx.fillText('07 · 후기', padX, y); y+=26;
      ctx.font=`700 18px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.ink; ctx.fillText(d.social_headline||'', padX, y); y+=30;
      ctx.font=`400 12px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.sage; ctx.fillText('(실제 후기 캡처/발췌로 교체 필요)', padX, y); y+=26;
      return y;
    }},
    { name:'08_책임보상', draw:(ctx,width,d)=>{
      const padX=50; let y=30;
      ctx.font=`600 12px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.persimmon; ctx.textBaseline='top';
      ctx.fillText('08 · 책임보상', padX, y); y+=26;
      ctx.font=`400 14px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.ink;
      (d.guarantee||[]).forEach((g,i)=>{ ctx.fillText(`0${i+1}. ${g}`, padX, y); y+=26; });
      return y+10;
    }},
    { name:'09_상품옵션', draw:(ctx,width,d)=>{
      const padX=50; let y=30;
      ctx.font=`600 12px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.persimmon; ctx.textBaseline='top';
      ctx.fillText('09 · 상품 옵션', padX, y); y+=26;
      ctx.font=`400 14px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.ink;
      (d.options||[]).forEach(o=>{ ctx.fillText(`- ${o.name}${o.price?' ('+o.price+')':''}`, padX, y); y+=26; });
      return y+10;
    }},
    { name:'10_QnA', draw:(ctx,width,d)=>{
      const padX=50; let y=30;
      ctx.font=`600 12px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.persimmon; ctx.textBaseline='top';
      ctx.fillText('10 · Q&A', padX, y); y+=26;
      (d.faq||[]).forEach(f=>{
        y += psdParagraph(ctx, 'Q. '+f.q, padX, y, width-padX*2, {fontSize:14, lineHeight:1.5, weight:'600', color:PSD_COLOR.ink}) + 6;
        y += psdParagraph(ctx, 'A. '+f.a, padX, y, width-padX*2, {fontSize:14, lineHeight:1.5, color:PSD_COLOR.sage}) + 18;
      });
      return y;
    }},
    { name:'11_상품안내', draw:(ctx,width,d)=>{
      const padX=50; let y=30;
      ctx.font=`600 12px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.persimmon; ctx.textBaseline='top';
      ctx.fillText('11 · 상품 안내', padX, y); y+=26;
      y += psdParagraph(ctx, d.final_note||'', padX, y, width-padX*2, {fontSize:14, lineHeight:1.7}) + 30;
      ctx.strokeStyle='rgba(45,42,38,0.14)'; ctx.beginPath(); ctx.moveTo(padX,y); ctx.lineTo(width-padX,y); ctx.stroke(); y+=20;
      ctx.font=`400 12px ${PSD_FONT}`; ctx.fillStyle=PSD_COLOR.sage; ctx.textBaseline='top';
      ctx.fillText(`원산지: ${d.origin||'-'}   중량/구성: ${d.weight||'-'}`, padX, y); y+=30;
      return y;
    }},
  ];

  document.getElementById('d-psdBtn').addEventListener('click', async ()=>{
    if(!lastDetailData) return;
    const btn = document.getElementById('d-psdBtn');
    const original = btn.textContent;
    btn.disabled = true; btn.textContent = 'PSD 만드는 중...';
    try{
      const agPsd = await loadAgPsd();
      const d = lastDetailData;
      const WIDTH = 1000, GAP = 24;
      let top = 30;
      const children = [];
      PSD_SECTIONS.forEach(sec=>{
        const canvas = psdMakeSectionCanvas(WIDTH, (ctx,w)=> sec.draw(ctx, w, d));
        children.push({ name: sec.name, canvas, top: Math.round(top), left: 0, bottom: Math.round(top+canvas.height), right: WIDTH });
        top += canvas.height + GAP;
      });
      const totalHeight = Math.round(top);
      const bg = document.createElement('canvas');
      bg.width = WIDTH; bg.height = totalHeight;
      const bgCtx = bg.getContext('2d');
      bgCtx.fillStyle = PSD_COLOR.paper; bgCtx.fillRect(0,0,WIDTH,totalHeight);
      children.unshift({ name:'배경', canvas: bg, top:0, left:0, bottom: totalHeight, right: WIDTH });

      const psd = { width: WIDTH, height: totalHeight, children };
      const buffer = agPsd.writePsdUint8Array(psd);
      const blob = new Blob([buffer], { type:'application/octet-stream' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `${d.name||'상세페이지'}.psd`;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }catch(err){
      alert('PSD 생성 중 오류가 발생했습니다: ' + err.message);
    }finally{
      btn.disabled = false; btn.textContent = original;
    }
  });

  // ---------- MARKETING COPY GENERATOR (기존 유지) ----------
  const mBtn = document.getElementById('m-runBtn');
  const mError = document.getElementById('m-errorBox');
  const mEmpty = document.getElementById('m-empty');
  const mResults = document.getElementById('m-results');

  mBtn.addEventListener('click', async ()=>{
    const name = document.getElementById('m-name').value.trim();
    const point = document.getElementById('m-point').value.trim();
    const tone = document.getElementById('m-tone').value;

    if(!name){ mError.style.display='block'; mError.textContent='상품명은 최소한 입력해주세요.'; return; }
    mError.style.display='none';
    mBtn.disabled=true; mBtn.classList.add('loading'); mBtn.querySelector('.btn-text').textContent='생성 중...';
    mEmpty.style.display='none'; mResults.style.display='block';
    mResults.innerHTML = ['instagram','kakao','sms'].map(()=>
      '<div class="copy-card"><div class="skel" style="width:40%; height:11px; margin-bottom:10px;"></div><div class="skel" style="width:90%; margin-bottom:6px;"></div><div class="skel" style="width:70%;"></div></div>'
    ).join('');

    const prompt = `너는 온라인 농수산물 쇼핑몰의 마케팅 카피라이터야. 아래 정보로 채널별 홍보 카피를 작성해줘.

상품명: ${name}
프로모션 포인트: ${point||'미기재'}
톤앤매너: ${tone}

아래 JSON 형식으로만 응답해. 다른 설명이나 코드블록 표시 없이 순수 JSON만 출력해:
{
  "instagram": { "headline": "인스타그램 카드/캡션용 짧은 헤드라인 (20자 내외)", "body": "캡션 본문 (80~120자, 이모지 1~2개 자연스럽게 포함)", "hashtags": "해시태그 5개, 공백으로 구분, # 포함" },
  "kakao": { "headline": "카카오톡 채널 메시지 제목 (15자 내외)", "body": "메시지 본문 (60~90자, 정보 전달 중심)" },
  "sms": { "body": "문자메시지 카피 (40자 이내, 발신 제한 고려해 간결하게)" }
}`;

    try{
      const r = await callClaudeJSON(prompt);
      mResults.innerHTML = `
        <div class="copy-card">
          <div class="ch-label">Instagram</div>
          <h4>${r.instagram?.headline||''}</h4>
          <p>${r.instagram?.body||''}</p>
          <div class="hashtags">${r.instagram?.hashtags||''}</div>
        </div>
        <div class="copy-card">
          <div class="ch-label">카카오톡 채널</div>
          <h4>${r.kakao?.headline||''}</h4>
          <p>${r.kakao?.body||''}</p>
        </div>
        <div class="copy-card">
          <div class="ch-label">문자메시지 (SMS)</div>
          <p>${r.sms?.body||''}</p>
        </div>
      `;
    }catch(err){
      mError.style.display='block'; mError.textContent='생성 중 오류: '+err.message;
      mResults.style.display='none'; mEmpty.style.display='block';
    }finally{
      mBtn.disabled=false; mBtn.classList.remove('loading'); mBtn.querySelector('.btn-text').textContent='채널별 카피 생성';
    }
  });
</script>

</body>
</html>
