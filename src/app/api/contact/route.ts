import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, company, website, phone, message } = body;

  if (!name || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const text = [
    '🔔 <b>Новая заявка — 1CYBER</b>',
    '',
    `<b>Имя:</b> ${escapeHtml(name)}`,
    `<b>Компания:</b> ${escapeHtml(company || '—')}`,
    `<b>Сайт:</b> ${escapeHtml(website || '—')}`,
    `<b>Телефон/Telegram:</b> ${escapeHtml(phone)}`,
    message ? `<b>Сообщение:</b> ${escapeHtml(message)}` : '',
  ].filter(Boolean).join('\n');

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Telegram API error:', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
