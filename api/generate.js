javascript// ⚠️ 테스트 모드 버전입니다.
// 실제 Anthropic API를 호출하지 않고, 미리 만들어둔 가짜(mock) 데이터를 돌려줍니다.
// -> 크레딧이 없어도 화면/버튼/배포가 잘 작동하는지 확인할 수 있어요.

const MOCK_DETAIL = {
  badges: ["산지직송", "당일 포장", "안전성 검사", "정량 보장"],
  headline: "작은 새우는 왜 항상 섞여서 오는 걸까요",
  guarantee_tag: "중량 미달시 2배 보상",
  story: "저희는 27미 내외의 특사이즈 왕새우만 선별합니다. 작은 새우를 걸러내는 번거로운 과정을 거치기 때문에 시간은 더 걸리지만, 고객님 식탁에는 확실한 사이즈만 올라갑니다.",
  compare_generic: ["사이즈 혼합 배송", "무게치기(물빼기) 관행", "검사 내역 비공개"],
  compare_ours: ["27미 내외 특사이즈만 선별", "정량 그대로 배송", "안전성 검사 결과 공개"],
  process_title: "3단계 품질관리",
  process_body: "산지에서 선별 → 급냉 포장 → 당일 출고까지 3단계로 관리합니다. 매 배치마다 중량과 사이즈를 재확인한 후에만 출고합니다.",
  social_headline: "네이버 새우 검색 1위, 후기 7만건",
  faq: [
    { q: "더운데 신선하게 배송되나요?", a: "아이스박스와 냉매재로 이중 포장하여 배송 중 온도 변화를 최소화하고 있습니다." },
    { q: "어디서 생산되나요?", a: "전남 신안 지역에서 양식 및 선별되어 산지에서 바로 출고됩니다." }
  ],
  final_note: "(테스트 모드 예시 문구입니다) 정성껏 선별한 상품을 정직한 가격에 전해드리겠습니다. 문의사항은 언제든 채널로 남겨주세요."
};

const MOCK_MARKETING = {
  instagram: {
    headline: "오늘만 30% 할인 🔥",
    body: "달콤함이 꽉 찬 이맘때 고구마, 오늘만 특별한 가격으로 만나보세요! 놓치면 아쉬운 타임세일 🍠",
    hashtags: "#고구마 #산지직송 #오늘의특가 #건강간식 #국내산"
  },
  kakao: {
    headline: "오늘만 30% 할인 안내",
    body: "안녕하세요! 오늘 하루 한정으로 고구마 30% 할인 이벤트를 진행합니다. 지금 바로 확인해보세요."
  },
  sms: {
    body: "[테스트] 고구마 오늘만 30%↓ 지금 확인하세요"
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'POST 요청만 허용됩니다.' });
    return;
  }

  const { prompt } = req.body || {};
  if (!prompt) {
    res.status(400).json({ error: 'prompt가 필요합니다.' });
    return;
  }

  const isMarketing = prompt.includes('채널별 홍보 카피');
  const mockPayload = isMarketing ? MOCK_MARKETING : MOCK_DETAIL;

  await new Promise(r => setTimeout(r, 600));

  res.status(200).json({
    content: [
      { type: 'text', text: JSON.stringify(mockPayload) }
    ]
  });
}
