// Shared global types
export type ULID = string;

export interface AuditEvent {
  id: ULID;
  actorId: ULID;
  action: string;
  target?: string;
  createdAt: string; // ISO8601 UTC
  metadata?: Record<string, unknown>;
}

