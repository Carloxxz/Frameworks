export type PeliculaI = {
    titulo: string
    image: string
}

export type Article = {
    _id: string
    title: string
    content: string
    image: string
    date: string
}

export type ApiResponse = {
    status: string
    articles: Article[]
}

export type ApiArticleResponse = {
    status: string
    article: {
        _id?: string,
        title?: string,
        date?: string,
        content?: string,
        image?: string
    }
}