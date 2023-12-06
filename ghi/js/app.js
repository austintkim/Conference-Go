function createCard(name, description, pictureUrl, start, end, locationName) {
  return `
  <div class="col-6 col-sm-4">
    <div class="card shadow bg-body-tertiary rounded">
      <img src="${pictureUrl}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle text-secondary mb-2 text-muted">${locationName}</h6>
        <p class="card-text">${description}</p>
      </div>
      <div class="card-footer">
        ${start}-${end}
      </div>
    </div>
  `;
}

window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';

    try {
      const response = await fetch(url);

      if (!response.ok) {
        // Figure out what to do when the response is bad
        const errorMessage = `
        <div class="alert alert-danger" role="alert">
        Sorry we couldn't fetch that data!
        </div>
        `
        const column = document.querySelector('.row');
        column.innerHTML += errorMessage;
      } else {
        const data = await response.json();

        for (let conference of data.conferences) {
          const detailUrl = `http://localhost:8000${conference.href}`;
          const detailResponse = await fetch(detailUrl);
          if (detailResponse.ok) {
            const details = await detailResponse.json();
            const title = details.conference.name;
            const description = details.conference.description;
            const pictureUrl = details.conference.location.picture_url;
            const start = new Date(details.conference.starts).toLocaleDateString("en-US");
            const end = new Date(details.conference.ends).toLocaleDateString("en-US");
            const locationName = details.conference.location.name
            const html = createCard(title, description, pictureUrl, start, end, locationName);
            const column = document.querySelector('.row');
            column.innerHTML += html;
          }
        }

      }
    } catch (e) {
      console.error('An error occured', e);

    }

  });
