function param2Obj(data) {

    return JSON.parse(
        '{"' +
        decodeURIComponent(data)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
        '"}'
    )
}

console.log(param2Obj('userName=admin&password=admin'))
