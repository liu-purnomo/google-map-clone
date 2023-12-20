# Google Maps Clone

This project is a clone of Google Maps, the popular web mapping service that offers satellite imagery, street maps, 360° panoramic views of streets, real-time traffic conditions, and route planning.

![Home Page](/public/images/home.png)

---

## Technologies Used

- [ReactJS](https://react.dev/) : A JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) : A utility-first CSS framework for rapidly designing responsive web pages.
- [Maps API](https://developers.google.com/maps/documentation/javascript): Used for rendering the interactive maps.
- [GeoCoding API](https://developers.google.com/maps/documentation/geocoding): Integrated for location search functionality.
- [Vite](https://vitejs.dev/) : A fast and efficient build tool for modern web development.
- [Vercel](https://vercel.com/) : A cloud platform for static site deployment.

## Features

- Interactive map interface similar to Google Maps.
- Search for locations using the integrated GeoCoding API.
- Search for a location using coordinates.
- Street view: You can explore the streets of any location in the world.
- Utilizes React Icons for consistent and attractive UI elements.

## Getting Started

To get started with Gooogle Maps Clone locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/liu-purnomo/google-map-clone.git
   ```
2. Install the dependencies:

   ```bash
   cd google-map-clone
   ```

   ```bash
   npm install
   ```
3. Register for a Maps API via Google Cloud

   - Create a `.env.local` / `.env` file in the root directory of the project.
   - Register for a Maps JavaScript API key via the Google Cloud platform and enable the GeoCoding API. You can follow the official documentation to obtain the API key.
   - Open the `.env.local` file and add the following line:

     ```env
     VITE_REACT_APP_API_KEY=YOUR_API_KEY
     ```

     Replace `YOUR_API_KEY` with the actual API key you obtained from Google Cloud. By setting up the .env.local file with the appropriate API key, the application will be able to access the geocoding API and provide accurate property locations.

4. Start the development server:

   ```javascript
   npm run start
   ```

5. Open your browser and visit specified local host port to view the app eg. `http://localhost:8080`

## Deployment

Gooogle Maps Clone is deployed using Vercel. Any changes pushed to the main branch will trigger an automatic deployment.
You can visit the live version of Home at [https://gmaps.liupurnomo.com](https://gmaps.liupurnomo.com).

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to the branch.
5. Submit a pull request.
