![Banner](https://user-images.githubusercontent.com/75478661/226669177-87319e12-f192-49fd-8cd4-8e4656daccc0.png)

# GH Link

GH Link is a Link in Bio website that can be configured with only a JSON file.

## Usage

To use GH Link, follow these steps:

1. Add a `gh-config.json` file to your special repository’s root (the repo with your username).
2. Configure `gh-config.json` with the following format:

   > Note: icon is optional. If no icon is provided, the default link icon will be used.

   ```json
   {
     "links": [
       {
         "title": "GitHub",
         "description": "GitHub Official Website",
         "url": "https://github.com",
         "icon": "https://cdn-icons-png.flaticon.com/512/25/25231.png"
       },
       {
         "title": "Click me",
         "description": "Surprise 😃",
         "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
       }
     ]
   }
   ```

3. Done! Visit your own link website at `gh-link.vercel.app/YOUR_USERNAME`.

## Running Locally

To run GH Link locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/davidho0403/gh-link
   ```

2. Store the API keys in `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm run dev
   ```

5. Finally, visit [http://localhost:3000](http://localhost:3000/) in your web browser.
