(() =>{
    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    fetch("https://reqres.in/api/users?delay=3")
    .then((res) =>{
        console.log(res);
        return res.json();
})
.then((json) =>{
console.log(json);
})
.catch((err) => {
console.log(err);
})
.finally(() => 
    console.log(
        "Esto se ejecutará independientemente del resultado"
    )
);
})();
