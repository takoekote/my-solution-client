const get = (url, params = '') => {
    if (typeof params === 'object')
        Object.keys(params).forEach(p => url.searchParams.append(p, params[p]))
    else url += `/${params}`

    return fetch(url)
        .then(response => {
            if (!response.ok) throw Error(response.statusText)
            return response.json()
        })
        .then(result => result)
        .catch(err => err)
}

const post = (url, body) => {
    return fetch(url, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then(response => {
            if (!response.ok) throw Error(response.statusText)
            return response.json()
        })
        .then(result => result)
        .catch(err => err)
}

const deleteOne = (url, params) => {
    return fetch(`${url}/${params}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) throw Error(response.statusText)
            return response.json()
        })
        .then(result => result)
        .catch(err => err)
}

const HttpClient = {
    get,
    post,
    deleteOne
}

export default HttpClient
