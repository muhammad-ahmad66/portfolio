# Contact Form Email Setup Guide

Your contact form is now functional! Follow these steps to configure email delivery.

## Step 1: Create Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-16-character-app-password
CONTACT_EMAIL=your-email@gmail.com
```

## Step 2: Generate Gmail App Password

Since you're using Gmail (`muhammadugv66@gmail.com`), you need to create an App Password:

1. Go to your [Google Account](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification** (must be enabled first)
3. Scroll down to **App passwords**
4. Select **Mail** and **Other (Custom name)**
5. Enter "Portfolio Contact Form" as the name
6. Click **Generate**
7. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)
8. Paste it in `.env.local` as `EMAIL_APP_PASSWORD` (remove spaces)

## Step 3: Configure Email Addresses

- `EMAIL_USER`: Your Gmail address (e.g., `muhammadugv66@gmail.com`)
- `EMAIL_APP_PASSWORD`: The 16-character app password from Step 2
- `CONTACT_EMAIL`: Where you want to receive emails (usually same as `EMAIL_USER`)

## Step 4: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your email inbox for the submission

## Email Format

You'll receive a beautifully formatted HTML email with:
- All form fields clearly labeled
- Clickable email and phone links
- Project details formatted nicely
- Reply-to set to the client's email (so you can reply directly)

## Troubleshooting

### "Failed to send email" error
- Verify your `.env.local` file exists and has correct values
- Make sure 2-Step Verification is enabled on your Google Account
- Verify the App Password is correct (no spaces)
- Check that `EMAIL_USER` matches the account where you generated the App Password

### Emails not arriving
- Check your spam folder
- Verify the `CONTACT_EMAIL` address is correct
- Check server logs for error messages

## Alternative Email Services

If you prefer not to use Gmail, you can modify `app/api/contact/route.ts` to use:
- **SendGrid** (recommended for production)
- **Resend** (modern API)
- **Mailgun**
- Any SMTP server

## Security Notes

- Never commit `.env.local` to git (it's already in `.gitignore`)
- App Passwords are safer than regular passwords
- The form includes validation to prevent spam

