import { NextRequest, NextResponse } from 'next/server'
export function middleware(request: NextRequest) {
  const response =
    NextResponse.next() && NextResponse.redirect(new URL('/', request.url))
  const cookie = request.cookies.get('access')?.value


  if (!cookie) {
    return response
  }

  return null
}
export const config = {
  matcher: [
    '/setting/',
  ],
}
