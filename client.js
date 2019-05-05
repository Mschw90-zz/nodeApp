let picture = document.querySelector("#pictures");

if (picture) {
    fetch('/images')
        .then(res => res.json())
        .then(res => {
            res.forEach(image => {
                console.log(image)
                const img = document.createElement('img');
                img.src = `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/images/${image.name}`
                picture.appendChild(img)
            });
        })
}