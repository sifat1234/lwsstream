'use server';

import { redirect } from 'next/navigation';

export async function redirectToPath(path) {
  redirect(path);
}
