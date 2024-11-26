export async function getProducts(id){
    const url = id ? `/api/products/${id}` : `/api/products`
    try{
        const resp = await fetch(url);
        if(!resp.ok) {
            throw new Error(`Fetch Error: ${resp.status} ${resp.statusText}`)
        }
        const data = await resp.json();
        return data;
    }
    catch(error){
       return { success: false, error: error.message}
    }
}

export async function getBlogs(id){
    const url = id ? `/api/blogs/${id}` : `/api/blogs`
    try{
        const resp = await fetch(url);
        if(!resp.ok) {
            throw new Error(`Fetch Error: ${resp.status} ${resp.statusText}`)
        }
        const data = await resp.json();
        return data;
    }
    catch(error){
       return { success: false, error: error.message}
    }
}

export async function getTeam() {
    try{
        const resp = await fetch('/api/team')
        if(!resp.ok){
            throw new Error(`Fetch Error: ${resp.status} ${resp.statusText}`)
        }
        const data = await resp.json();
        return data.teams;
    }
    catch(error){
        return { success: false, error: error.message}
    }
}

export async function getFaqs(){
    try{    
        const resp = await fetch('/api/faq');
        if(!resp.ok) throw { statusText: resp.statusText, status: resp.status}
        const data = await resp.json();
        return data.faqs;
    }
    catch(error){
        console.error(error)
    }
}