// Getting categories for the HTML form
window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/states/';

    const response = await fetch (url);

    const formTag = document.getElementById('create-location-form');
    formTag.addEventListener ('submit', async event => {
        event.preventDefault();
        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData));

        const locationUrl = 'http://localhost:8000/api/locations/';
        const fetchConfig = {
            method: "post",
            body: json,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        console.log(fetchConfig);
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            formTag.reset();
            const newLocation = await response.json();
        }
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data);
        const selectTag = document.getElementById('state')
        for (const state of data.states) {
            for (const stateName in state ) {
                const option = document.createElement('option');
                option.value = state[stateName];
                option.innerHTML = stateName;
                selectTag.appendChild(option);

            }
        }
        console.log(selectTag)
    }

});
