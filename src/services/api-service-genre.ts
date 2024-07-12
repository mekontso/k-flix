import apiClient from "@/lib/api-client";
import {Genre} from "@/types";

export const apiCallGetAllGenre = async (pageNumber: number = 0, pageSize: number = 10, sortBy: string = "id", sortDir: string = "asc") => {
    return await apiClient.get("/genre/get-all", {
        params: {
            pageNumber, pageSize, sortBy, sortDir,
        }
    });
}

export const apiCallCreateGenre = async (genre: Genre): Promise<any> => {
    return await apiClient.post("/genre/create", genre);
}

export const apiCallGetGenre = async (id: string): Promise<any> => {
    return await apiClient.get(`/genre/get/${id}`);
}

export const apiCallUpdateGenre = async (genre: Genre): Promise<any> => {
    return await apiClient.put(`/genre/update/${genre.id}`, genre);
}

export const apiCallDeleteGenre = async (id: string): Promise<any> => {
    return await apiClient.delete(`/genre/delete/${id}`);
}
