// import { uploadPdfToCloudinary } from "../lib/cloudinary.js";
// import { scrapeWebsite } from "../lib/firecrawl.js";
// import { extractPdfFromBuffer } from "../lib/pdf.js";
// import { enqueueSourceProcessing } from "../lib/source-events.js";
// import { fetchYoutubeTranscript } from "../lib/youtube.js";
// import {
//     createSourceRecord,
//     deleteSourceRecord,
//     findSourceByIdAndWorkspaceId,
//     findSourcesByWorkspaceId,
//     type SourceRecord,
//     findSourceById,
//     updateSourceRecord
// } from "../repository/source.repository.js";

// import { NotFoundError } from "../types/app-error.js";
// import { CreateSourceInput, ImportWebsiteInput, ImportYoutubeInput, ListSourcesQuery } from "../validators/source.validator.js";
// import {getWorkspaceByIdForUser} from "./workspace.service.js";


// async function assertWorkspaceAccess(workspaceId: string, userId: string) {
//     await getWorkspaceByIdForUser(workspaceId, userId);
// }

// async function createAndProcessSource(
//     data: Parameters<typeof createSourceRecord>[0],
// ) {
//     const source = await createSourceRecord(data); //

//     await enqueueSourceProcessing({
//         sourceId: source.id,
//         workspaceId: source.workspaceId,
//     });

//     return source;
// }


import { findSourcesByWorkspaceId } from "../repository/source.repository.js";
import { CreateSourceInput, ListSourcesQuery } from "../validators/source.validator.js";
import { getWorkspaceByIdForUser } from "./workspace.service.js";

async function assertWorkspaceAccess(workspaceId: string, userId: string) {
    await getWorkspaceByIdForUser(workspaceId, userId);
}

export async function listSourcesForWorkspace(
    workspaceId: string,
    userId: string,
    filters: ListSourcesQuery = {},
) {
    await assertWorkspaceAccess(workspaceId, userId);
    return findSourcesByWorkspaceId(workspaceId, filters);
}


export async function createTextOrMarkdownSource(
    workspaceId: string,
    userId: string,
    input: CreateSourceInput,
) {
    await assertWorkspaceAccess(workspaceId, userId);

    // return createAndProcessSource({
    //     workspaceId,
    //     type: input.type,
    //     title: input.title,
    //     content: input.content,
    //     status: "PENDING",
    // });
}