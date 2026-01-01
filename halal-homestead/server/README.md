# Halal Homestead Backend Server

This is the backend server for the Halal Homestead website contact form.

## Setup Instructions

1. **Navigate to the server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** (copy from the template):
   ```bash
   cp .env.example .env
   ```

4. **Configure your Outlook email credentials:**
   
   For the `EMAIL_PASSWORD`, you need to generate an "App Password" from your Outlook account:
   
   - Go to https://account.microsoft.com/account
   - Click "Security" in the left sidebar
   - Click "Advanced security options"
   - Scroll down to "App passwords"
   - Select "Mail" and "Windows" from the dropdowns
   - Click "Create"
   - Copy the generated password and paste it in `.env` as `EMAIL_PASSWORD`

5. **Update the `.env` file with your credentials:**
   ```
   EMAIL_USER=halal_homestead@outlook.com
   EMAIL_PASSWORD=your_generated_app_password
   PORT=3001
   ```

6. **Start the server (development mode):**
   ```bash
   npm run dev
   ```

   Or for production:
   ```bash
   npm start
   ```

The server will run on `http://localhost:3001` by default.

## API Endpoints

### POST /api/contact

Receives contact form submissions and sends emails to both the business and the user.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your products."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

## How it Works

1. When a user submits the contact form on the website, it sends a POST request to `/api/contact`
2. The backend validates the input
3. It sends two emails:
   - One to `halal_homestead@outlook.com` with the contact information
   - One to the user's email as a confirmation receipt
4. Returns a success/error response to the frontend

## Notes

- Make sure the frontend is configured to point to the correct backend URL (`http://localhost:3001` for development)
- The server uses CORS to allow requests from your frontend
- Keep your `.env` file secure and never commit it to version control
