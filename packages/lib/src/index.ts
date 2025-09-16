export function ulidlike(): string {
  // Simple unique-ish ID placeholder; replace with real ULID lib later
  return 'id_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function assertNever(x: never): never {
  throw new Error(`Unexpected object: ${x}`);
}

