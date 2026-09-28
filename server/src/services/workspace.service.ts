import { deleteWorkspace, updateWorkspace, createWorkspace, findWorkspaceByIdandUserId, findWorkspaceByUser, type typeWorkspace } from "../repository/workspace.repository.js";

import { NotFoundError } from "../types/app-error.js";
import { createWorkspaceSchema, updateWorkspaceSchema } from "../validators/workspace.validator.js";


export function listWorkspaceByUserId(userId: string) {
    return findWorkspaceByUser(userId);
}

export async function getWorkspaceByIdForUser(
    workspaceId: string,
    userId: string,
): Promise<typeWorkspace> {
    const workspace = await findWorkspaceByIdandUserId(workspaceId, userId);

    if (!workspace) {
        throw new NotFoundError("Workspace not found");
    }

    return workspace;
}


export function createWorkspaceForUser(
    userId: string,
    input: createWorkspaceSchema,
) {
    return createWorkspace(userId, input);
}


export async function updateWorkspaceForUser(
    workspaceId: string,
    userId: string,
    input: updateWorkspaceSchema,
) {
    await getWorkspaceByIdForUser(workspaceId, userId);
    return updateWorkspace(workspaceId, input);
}

export async function deleteWorkspaceForUser(
    workspaceId: string,
    userId: string,
) {
    await getWorkspaceByIdForUser(workspaceId, userId);

    try {
        await deleteWorkspace(workspaceId);
    } catch (error) {
        console.error("Failed to delete Pinecone namespace:", error);
    }

    await deleteWorkspace(workspaceId);
}