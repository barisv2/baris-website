import { waitUntil } from '@vercel/functions';
import {
  HARDAL_HOST_URL,
  HARDAL_TENANT_ID,
  HARDAL_SOURCE_ID,
} from './src/lib/hardal';

const STATIC_EXTENSIONS = /\.(css|js|mjs|json|xml|txt|ico|png|jpg|jpeg|gif|svg|webp|avif|woff|woff2|ttf|otf|eot|map|webmanifest)$/i;
const STATIC_PATHS = /^\/_astro\/|^\/favicon|^\/apple-touch-icon/i;

function isStaticAsset(pathname: string): boolean {
  return STATIC_EXTENSIONS.test(pathname) || STATIC_PATHS.test(pathname);
}

function getClientIp(request: Request): string {
  const xForwardedFor = request.headers.get('x-forwarded-for');
  if (xForwardedFor) {
    const firstIp = xForwardedFor.split(',')[0].trim();
    if (firstIp) return firstIp;
  }
  const xRealIp = request.headers.get('x-real-ip');
  if (xRealIp) return xRealIp;
  return '';
}

async function sendAgentEvent(
  path: string,
  ip: string,
  userAgent: string
): Promise<void> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000);

  try {
    await fetch(`${HARDAL_HOST_URL}/agent-events/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'tenant-id': HARDAL_TENANT_ID,
      },
      body: JSON.stringify({
        sourceId: HARDAL_SOURCE_ID,
        path,
        ip,
        userAgent,
        eventTime: new Date().toISOString(),
      }),
      signal: controller.signal,
    });
  } catch {
  } finally {
    clearTimeout(timeoutId);
  }
}

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const { pathname, search } = url;

  if (isStaticAsset(pathname)) {
    return;
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return;
  }

  const ip = getClientIp(request);
  const userAgent = request.headers.get('user-agent') || '';
  const fullPath = pathname + search;

  waitUntil(sendAgentEvent(fullPath, ip, userAgent));
}

export const config = {
  matcher: ['/((?!_astro|favicon|apple-touch-icon).*)'],
};
