


const END_POINT = 'https://jsonplaceholder.typicode.com/users'


const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}



export const cat = async (options) => {
  
  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers
    }
  }

  const response = await fetch(url, restOptions);

  if(response.ok) {
    response.data = await response.json();
  }

  return response;
}


const user = await cat({url: END_POINT})

// console.log(user.data);

// cat.get()
cat.get = (url, options) => {
  return cat({
    url,
    ...options
  });
}
// cat.post()
cat.post = (url, body, options) => {
  return cat({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

// cat.put()
cat.put = (url, body, options) => {
  return cat({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

// cat.delete()
cat.delete = (url, options) => {
  return cat({
    method: 'DELETE',
    url,
    ...options
  });
}



























