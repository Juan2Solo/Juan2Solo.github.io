fetch('../data/market/market.json')
    .then((response) => response.json())
    .then((data) => {
        const resourceList = document.getElementById("resource-list");

        // Create HTML elements for each resource
        data.resources.forEach(resource => {
            const resourceItem = document.createElement("div");
            resourceItem.className = "resource-item";

            // Populate the resource item with data
            resourceItem.innerHTML = `
                <h3>${resource["resource-type"]}</h3>
                <p>${resource.description}</p>
                <img src=${resource["image-url"]} alt="Food Image">
                <button class="message-button">Message User</button>
            `;

            resourceList.appendChild(resourceItem);
        });
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });
