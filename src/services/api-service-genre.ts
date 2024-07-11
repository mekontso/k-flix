import apiClient from "@/lib/api-client";

export const getAllGenre = async (pageNumber: number = 0, pageSize: number = 10, sortBy: string = "id", sortDir: string = "asc") => await apiClient.get("/genre/get-all", {
    params: {
        pageNumber, pageSize, sortBy, sortDir,
    }
})
