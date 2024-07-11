import apiClient from "@/lib/api-client";
import {Genre} from "@/types";

export const getAllGenre = async (pageNumber: number = 0, pageSize: number = 10, sortBy: string = "id", sortDir: string = "asc") => await apiClient.get("/genre/get-all", {
    params: {
        pageNumber, pageSize, sortBy, sortDir,
    }
})

export const createGenre = async (genre: Genre): Promise<any> => await apiClient.post("/genre/create", genre)
