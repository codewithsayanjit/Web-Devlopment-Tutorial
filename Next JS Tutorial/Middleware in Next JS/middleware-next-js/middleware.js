/*
import { NextResponse } from 'next/server'
 
* This function can be marked `async` if using `await` inside
export function middleware(request) {
    return NextResponse.json({ message: 'Hello from the about page' })
  return NextResponse.redirect(new URL('/', request.url))
}
 
* See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}
*/

import { NextResponse } from 'next/server'

// Middleware runs before the request reaches the route
export function middleware(request) {

  // If the URL starts with "/about"
  if (request.nextUrl.pathname.startsWith('/about')) {

    // Show the home page (URL stays as /about)
    return NextResponse.rewrite(new URL('/', request.url))
  }

  // If the URL starts with "/dashboard"
  if (request.nextUrl.pathname.startsWith('/dashboard')) {

    // Redirect the user to the home page (URL changes to /)
    return NextResponse.redirect(new URL('/', request.url))
  }
}


/* 
Difference between rewrite() and redirect()
* rewrite()
          Internally loads another page.
          Browser URL does not change.
          Example: /about → shows / content, but URL remains /about.
* redirect()
          Sends the user to a new URL.
          Browser URL changes.
          Example: /dashboard → redirects to /, and the URL becomes /.
*/