import apiClient from "@/lib/api-client";
import {ContentType} from "@/types";

export const apiCallGetAllContentType = async (pageNumber: number = 0, pageSize: number = 10, sortBy: string = "id", sortDir: string = "asc") => {
    return await apiClient.get("/content-type/get-all", {
        params: {
            pageNumber, pageSize, sortBy, sortDir,
        }
    });
}

export const apiCallCreateContentType = async (contentType: ContentType): Promise<any> => {
    return await apiClient.post("/content-type/create", contentType);
}

export const apiCallGetContentType = async (id: string): Promise<any> => {
    return await apiClient.get(`/content-type/get/${id}`);
}

export const apiCallUpdateContentType = async (contentType: ContentType): Promise<any> => {
    return await apiClient.put(`/content-type/update/${contentType.id}`, contentType);
}

export const apiCallDeleteContentType = async (id: string): Promise<any> => {
    return await apiClient.delete(`/content-type/delete/${id}`);
}
