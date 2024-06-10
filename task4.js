const response = fetch('https://jsonplaceholder.typicode.com/users')
    response.then(res => {
        res.json().then(data=>{
            const names = data.map(people => people.name)
          console.log(names)  
        })
    })
    