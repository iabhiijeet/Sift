import type {Prisma} from "../generated/prisma/client.js"
import prisma from "../lib/db.js"


export const sourceSelect = {
    id: true,
    workspaceId: true,
    type: true,
    title: true,
    content: true,
    url: true,
    status: true,
    metadata: true,
    createdAt: true,
    updatedAt: true,
} as const;

export type SourceRecord = Prisma.SourceGetPayload<{
    select: typeof sourceSelect;
}>;

export type CreateSourceData = {
    workspaceId: string;
    type: SourceRecord["type"];
    title: string;
    content?: string | null;
    url?: string | null;
    status?: SourceRecord["status"];
    metadata?: Prisma.InputJsonValue;
};