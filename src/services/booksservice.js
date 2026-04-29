import axios from "axios";

const url ="http://localhost:3000/books"

export async function getBooks(){
    return await axios.get(url)

}

export async function getBook(id){
    return await axios.get(`${url}/${id}`)
}

export async function storebook(book){
    return await axios.post(url,book)
}

export async function updatebook(id,book){
    return await axios.put(`${url}/${id}`,book)
}

export async function deletebook(id){
    return await axios.delete(`${url}/${id}`)
}