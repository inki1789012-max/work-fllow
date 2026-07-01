// 이 파일은 Vercel의 "서버리스 함수"입니다.
// 브라우저(프론트엔드)는 절대 Anthropic API 키를 직접 갖지 않고,
// 대신 이 서버를 거쳐서 요청을 보냅니다. API 키는 Vercel의
// 환경변수(Settings > Environment Variables)에만 저장됩니다.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'POST 요청만 허용됩니다.' });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'ANTHROPIC_API_KEY가 설정되지 않았습니다. Vercel 환경변수를 확인하세요.' });
    return;
  }

  const { prompt, max_tokens } = req.body || {};
  if (!prompt) {
    res.status(400).json({ error: 'prompt가 필요합니다.' });
    return;
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: max_tokens || 1500,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      res.status(response.status).json({ error: data?.error?.message || 'Anthropic API 오류' });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
