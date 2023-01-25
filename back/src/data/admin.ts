export interface AddBook {
    title: string,
    author: string,
    quantity: number,
    price: number,
}

export interface GetBook {
    pid: number,
    title: string,
    author: string,
    price: number,
    accum: number
}