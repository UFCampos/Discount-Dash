import {NextResponse, type NextRequest} from 'next/server';

const originAllowed = ['http://localhost:3000'];

export async function middleware(request: NextRequest) {
	// Configure CORS headers
	const origin = request.headers.get('origin');
	if (origin && originAllowed.includes(origin)) {
		request.headers.set('Access-Control-Allow-Origin', origin || '*');
		request.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
		request.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/api/:path*'],
};
