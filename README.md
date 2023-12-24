

```markdown
# ShortyAPI - URL Shortening API

ShortyAPI is a simple URL shortening API that allows you to create shortened versions of long URLs. This project is designed to be easy to set up and use.

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- MongoDB (v3.6 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/shyam728/Shorter-url
```

2. Navigate to the project directory:

```bash
cd shorty-api
```

3. Install dependencies:

```bash
npm install
```

4. Set up MongoDB:

   - Make sure MongoDB is installed and running.
   - Create a `.env` file in the project root and add the following:

   ```env
   MONGODB_URI=your_mongodb_connection_uri
   ```

### Usage

1. Start the server:

```bash
npm start
```

2. The API will be available at `http://localhost:3000`. You can make requests to this URL to shorten and retrieve URLs.

### API Endpoints

- **Shorten a URL:**

 
## shortURl

  # for testing 
  -> POST MAN
 ## Api
 registration url -> http://localhost:3000/user/register
 log in url -> http://localhost:3000/user/login
 shorting the url ->http://localhost:3000/url
 for short link -> http://localhost:3000/url/:id
 
![token login](https://github.com/Hashmu0786/ShortURL/assets/128887812/5dae3f1a-2173-452e-a420-f4861621a091)
![shortUrl](https://github.com/Hashmu0786/ShortURL/assets/128887812/071ad431-4f14-435a-ba0a-a6b599869ba6)
![Redirect link](https://github.com/Hashmu0786/ShortURL/assets/128887812/a22d8e17-5477-4ed5-9cef-a9054dd438a3)

We can test the using Post man As shown in the image

- **Retrieve original URL:**

  ```http
  GET /api/:shortcode
  ```

  Response:

  ```json
  {
    "originalUrl": "https://www.example.com/long-url-to-shorten"
  }
  ```

### Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Feel free to customize this template based on the specific details of your project. Make sure to replace placeholders like `your-username` and update the MongoDB connection URI in the `.env` example.
