import { NextResponse, NextRequest } from 'next/server';
// import { verifySignature } from '@upstash/qstash/nextjs';

export async function GET(req: NextResponse) {
  console.log('If this is printed, the signature has already been verified');

  // do stuff

  return NextResponse.json({ message: 'foi' });
}

/**
 * verifySignature will try to load `QSTASH_CURRENT_SIGNING_KEY` and `QSTASH_NEXT_SIGNING_KEY` from the environment.
 */
// export default verifySignature(GET);

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
