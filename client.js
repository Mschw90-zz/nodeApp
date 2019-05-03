let picture = document.querySelector("#pictures");

if (picture) {
    fetch('/images')
        .then(res => res.json())
        .then(res => {
            res.forEach(image => {
                const img = document.createElement('img');
                img.src = `/uploads/${image}`
                picture.appendChild(img)
            });
        })
}